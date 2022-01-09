import React from 'react';
import MessageActiveType from '../../types/MessagesTypes/MessageActiveType';
import MessagesActiveType from '../../types/MessagesTypes/MessagesActiveType';
import MessageType from '../../types/MessagesTypes/MessageType';
import "./styles.css"





const Messages = (props:MessageActiveType) => {

  function StyleConfigsForUser() {

      if(props.me){
          return {
                color: "white",
                backgroundColor: 'black',
                alignSelf: "flex-end",
                borderRadius: "20px 20px 0px 20px"

                
            }
        
      }         
      return {
            color: "black",
            backgroundColor: 'white',
            alignSelf: "flex-start",
            borderRadius: "20px 20px 20px 0px" 
          }
    
  }



  return (
      <div style={StyleConfigsForUser()}  className='message'>
          <div className='textarea'  >
              {props.text}
          </div>
          <div className='userarea' >
                <img draggable={false} className='useravatar' src={props.user.thumbnail}/>
                <span style={{color: "gray", fontSize: "13px"}} className='username'>{props.user.username}</span>
          </div>


      </div>
  );
}

export default Messages;