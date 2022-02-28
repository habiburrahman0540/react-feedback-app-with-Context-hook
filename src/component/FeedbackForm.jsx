import React,{useState,useContext,useEffect} from 'react'
import Card from './share/Card'
import Button from "./share/Button"
import RattingSelect from './RatingSelect';
import FeedbackContext from '../Context/FeedbackContext'
const FeedbackForm = () => {
    const [text,setText] = useState('');
    const [btnDisabled,setBtnDisabled] =useState(true)
    const [message,setMessage] = useState('')
    const [rating,setRating]=useState(10)
    const {handleFeedbackSubmit,feedbackEdit} = useContext(FeedbackContext)
    useEffect(()=>{
        if(feedbackEdit.edit){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit]);
    const handleTextChange =(e)=>{
        if(text === ''){          
            setBtnDisabled(true)
            setMessage(null);
        }else if(text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 characters.');
            setBtnDisabled(true);
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback ={
                text:text,
                rating:rating
            }
            handleFeedbackSubmit(newFeedback);
            setText('')
        }
    }
  return (
     <Card>
         <form onSubmit={handleSubmit}>
             <h2>How would you rate your service with us ?</h2>
             <RattingSelect select={(rating)=>setRating(rating)}/>
        <div className='input-group'>
            <input onChange={handleTextChange} type="text" value={text} placeholder='write your feedback.' />
            <Button type='submit' isDisabled={btnDisabled}>
            Submit
        </Button>
        </div>
        {message && <div className='messages'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm