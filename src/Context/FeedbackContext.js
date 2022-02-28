import {createContext,useState} from "react";
import {v4 as uuidv4} from "uuid"
const FeedbackContext = createContext();
export const FeedbackProvider =({children})=>{
    const [feedback,setFeedback] =useState([
        {id:'1',
        rating:10,
        text:"lorem insum"
        },
        {id:'2',
        rating:7,
        text:"lorem insum"
        },
        {id:'3',
        rating:5,
        text:"lorem insum"
        },
    ]);
    const handleFeedbackSubmit =(newFeedback)=>{
        newFeedback.id =uuidv4();
        setFeedback([newFeedback,...feedback])
       

    }
    const deleteItem =(id)=>{
        if(window.confirm("Are you sure you want to delete it ?")){
            setFeedback(feedback.filter(item=>item.id !== id))
        }
    }
    return <FeedbackContext.Provider value={{
        feedback,
        deleteItem,
        handleFeedbackSubmit
    }}>
        {children}
    </FeedbackContext.Provider>
} 
export default FeedbackContext;