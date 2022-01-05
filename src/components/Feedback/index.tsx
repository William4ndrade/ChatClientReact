import React from 'react';
import "./styles.css"


type Feedbackprops = {
    color: string,
    text: string
}



const FeedbackComponent = (props: Feedbackprops) => {




 function GetColor():string{
    if(props.color.toLowerCase() === "red"){
        return "red"
    }
    return "green"
 }



  return (
      <div className='feedbackarea' style={{backgroundColor: GetColor()}} >
          <span> {props.text}</span>
      </div>
  )
}

export default FeedbackComponent;