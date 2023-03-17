import React from 'react'
import './borrow.css'

function borrowForm(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn' onClick={() =>{props.setTrigger(false)}}>close</button>
        <center><h3>Enter your library id!</h3></center>

        { props.children }
      </div>
    </div>
  ): "";
}

export default borrowForm
