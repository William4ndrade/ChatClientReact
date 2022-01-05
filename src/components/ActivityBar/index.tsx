import React from 'react';
import "./styles.css"
type OnlineUsersProps = {

    users: Array<{
        username: string,
        thumbnail: string
    }>


}

  


const ActivityBar = (props: OnlineUsersProps) => {
    

    return(
        <div className='bar'>
            {props.users.map(e => {
        
                
               return (<img key={e.username} className='userimage' src={e.thumbnail} title={e.username}  />)





            })}
        </div>
    )

}

export default ActivityBar;