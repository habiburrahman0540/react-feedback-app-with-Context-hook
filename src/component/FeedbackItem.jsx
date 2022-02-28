import React,{useContext} from 'react'
import PropTypes from "prop-types"
import Card from "./share/Card"
import {FaTimes} from "react-icons/fa"
import {FaEdit} from "react-icons/fa"
import FeedbackContext from '../Context/FeedbackContext'
const FeedbackItem = ({item}) => {
  const {deleteItem} = useContext(FeedbackContext);
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className='edit'>
           <FaEdit color='purple'/>
        </button>
        <button className='close'onClick={()=>deleteItem(item.id)}>
           <FaTimes color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
    
  )
}
FeedbackItem.propTypes ={
    item:PropTypes.object.isRequired
}

export default FeedbackItem