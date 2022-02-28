import React,{useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import Card from './share/Card'
import { motion, AnimatePresence } from "framer-motion"
import FeedbackContext from '../Context/FeedbackContext'
const FeedbackList = () => {
    const {feedback} = useContext(FeedbackContext)
   
    if(!feedback || feedback.length ===0){
        return <Card >No feedback yet.</Card>
    }
  return (
      <div className="feedback-list">
          <AnimatePresence>
            {feedback.map(item=>(
                <motion.div  initial={{opacity:0}} animate={{ opacity: 1 }} exit={{opacity:0}} key={item.id}>
                    <FeedbackItem key={item.id} item={item} />
                </motion.div>
            ))}
        </AnimatePresence>
      </div>
       
   
  )
}
export default FeedbackList