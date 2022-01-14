
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import './App.css';
import Input from './components/MessageInput';
import {v4} from 'uuid'
import FeedbackComponent from './components/Feedback';
import ActivityBar from './components/ActivityBar';
import { Client, CompatClient, IMessage } from '@stomp/stompjs';
import Messages from './components/messages';
import {ConnectClient}  from "./services/ConnectClient"
import HeaderUserLogin from './components/HeaderUserLogin/Index';
import ActiveUsersType from './types/UserTypes/ActiveUsersType';
import UserType from './types/UserTypes/UserType';
import MessagesActiveType from './types/MessagesTypes/MessagesActiveType';









function App() {


   const InitialStateUsers:UserType = {
      date: new Date(),
      id: "",
      username: "",
      thumbnail: `https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random() * 3000 )}.svg`
   }
   const [User,SetUser] = useState<UserType>(InitialStateUsers);
   const InitialStateActiveUsers: ActiveUsersType = [
      {username: "", thumbnail: ""}
   ]
   const [ActiveUsers, SetActiveUsers] = useState<ActiveUsersType>(InitialStateActiveUsers);
   const [Client, SetClient] = useState<CompatClient>();
   const [Feedback, SetFeedback] = useState({
      active: false,
      text: "",
      backgroundcolor: ""
   })

  
   const [MessagesActives, SetMessageActive] = useState<MessagesActiveType>()


   function HandleFeedback(color :string, text:string){
      SetFeedback({
         active: true,
         text: text, 
         backgroundcolor: color
      })

      setTimeout(() => {
         SetFeedback({
            active: false,
            text: "", 
            backgroundcolor: ""
         })
      }, 2000)

   }
   

   
   

   useEffect(() => {
      SetClient(ConnectClient(SetActiveUsers, ActiveUsers,SetUser,HandleFeedback,User, SetMessageActive));
   
            

   }, [])


  
   useEffect(() => {
      const el = document.querySelector("div.messagesArea");
      if(el !== null) el.scrollTop = el.scrollHeight - el.clientHeight;
     
      
   }, [MessagesActives])
 

  return (
     <>
      
      
     <ActivityBar users={ActiveUsers}  />
     <section className='ChatArea' >
        <HeaderUserLogin  User={User} SetUser={SetUser}  Client={Client} ActiveUsers={ActiveUsers}  FeedbackFunction={HandleFeedback}  />
        <main  className='content'>
            <div className='messagesArea'>

                     {
                                    
                        MessagesActives ?
                                    (MessagesActives.map((e,i) => {
                                    
                                       return <Messages key={i}  text={e.text} data={e.data} user={e.user}  AtualUser={User}       />
                                    })):

                           ""
                              
                              
                              }

            </div>
            

            



            {Feedback.active ? <FeedbackComponent color={Feedback.backgroundcolor} text={Feedback.text} /> : "" }
        </main>

        <Input User={User} SetFeedback={HandleFeedback} SetUser={SetUser} ActiveUsers={ActiveUsers} client={Client} />

     </section>
     </>
  );
}

export default App;
