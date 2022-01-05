import React from 'react';
import MessageActiveType from '../../types/MessagesTypes/MessageActiveType';
import MessagesActiveType from '../../types/MessagesTypes/MessagesActiveType';
import MessageType from '../../types/MessagesTypes/MessageType';
import "./styles.css"





const Messages = (props:MessageActiveType) => {
  return (
      <div className='message'>
          <div className='textarea' >
              {props.text}
          </div>
          <div className='userarea' >
                <img draggable={false} className='useravatar' src={props.user.thumbnail}/>
                <span className='username'>{props}</span>
          </div>


      </div>
  );
}

export default Messages;