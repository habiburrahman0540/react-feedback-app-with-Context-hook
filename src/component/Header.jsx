import React from 'react'
import PropTypes from "prop-types"
const Header = ({text,bgcolor,textColor}) => {
  const headerStyles ={
    backgroundColor:bgcolor,
    color:textColor
  }
  return (
      <header style={headerStyles}>
    <div className="container">
       {text}
        </div>
        </header>
  )
}
Header.defaultProps={
  text:"Feedback UI",
  bgcolor:'green',
  textColor:'#fff'
}
Header.propTypes ={
    text:PropTypes.string,
    bgcolor:PropTypes.string,
    textColor:PropTypes.string,
}


export default Header