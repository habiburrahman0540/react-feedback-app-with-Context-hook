import {createContext,useState,useEffect} from "react";

const FeedbackContext = createContext();
export const FeedbackProvider =({children})=>{
    const [feedback,setFeedback] =useState([]);
    const [loading,setLoading]=useState(true);
    const [feedbackEdit,setFeedbackEdit] =useState({
        item:{},
        edit:false
    })
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData =async()=>{
        const response = await fetch(`https://epic-panini-e00fbd.netlify.app/feedback`);
        const data = await response.json();
        setFeedback(data);
        setLoading(false)

    }
    const feedbackEditSubmit=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }
    const handleFeedbackSubmit =async(newFeedback)=>{
        const response = await fetch('https://epic-panini-e00fbd.netlify.app/feedback',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newFeedback)
        });
        const data = await response.json();
        setFeedback([data,...feedback])
       

    }
    const deleteItem =async(id)=>{
        if(window.confirm("Are you sure you want to delete it ?")){
            await fetch(`https://epic-panini-e00fbd.netlify.app/feedback/${id}`,{method:"DELETE"})
            setFeedback(feedback.filter(item=>item.id !== id))
        }
    }
    const updateFeedback=async(id,updateItem)=>{
        const response = await fetch(`/feedback/${id}`,{
            method:'PUT',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updateItem)
        });
        const data = await response.json();
        setFeedback(
            feedback.map((item)=>(item.id===id)?{...item,...data}:item)
        )
    }
    return <FeedbackContext.Provider value={{
        feedback,
        loading,
        deleteItem,
        handleFeedbackSubmit,
        feedbackEdit,
        feedbackEditSubmit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
} 
export default FeedbackContext;
