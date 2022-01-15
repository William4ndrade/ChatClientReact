import { CompatClient } from '@stomp/stompjs';
import { type } from 'os';
import React, { useState } from 'react';
import { SendRequestServiceWs, UrlToSendRequest } from '../../services/SendRequestServiceWs';
import MessageType from '../../types/MessagesTypes/MessageType';
import { PropsMessageInputType } from '../../types/PropsTypes/PropsMessageInputType';
import UserType from '../../types/UserTypes/UserType';
import "./styles.css"



const Input = (props: PropsMessageInputType) => {


    const [text, SetText] = useState("");

    function HandleInputText(e: React.FormEvent<HTMLInputElement>){
        SetText(e.currentTarget.value)
    }

    function MessageFactory(textparam: string, user: UserType): MessageType{
        return {
            data: new Date(),
            text: textparam,
            user: user

        }
    }

    function CheckWithUserAreOneActiveUser(user: UserType){
        const UsersOnActive =  props.ActiveUsers?.filter(e => {
           return e.username == user.username
        })

        if(UsersOnActive?.length === 1){
            return true
        }
        props.SetFeedback("red" ,"Você não está conectado com o servidor")
        props.SetUser({
            username: "",
            date: new Date(),
            id: "",
            thumbnail: ""
        });
        return false;

    }

     function HandleSubmit(eventodesubmit: React.FormEvent<HTMLFormElement>){
        eventodesubmit.preventDefault();
        if(props.client != null && props.User != null && CheckWithUserAreOneActiveUser(props.User)){
            if(text.length){
              // TODO  
              SendRequestServiceWs(props.client, MessageFactory(text, props.User), UrlToSendRequest.Message);
              SetText("");
                return;
              
                
            }else{
                props.SetFeedback("red", "Vamos escrever antes de mandar algo né amigão")
                return;
            }

            
        }

        props.SetFeedback("red", "Você não está conectado ao servidor")

       
    }

    

    return (
        <form onSubmit={HandleSubmit} className='formsendmessage' action="/app/new" method="post">
            
            <input maxLength={300} required autoComplete="off" onChange={HandleInputText} value={text} placeholder='Escreva aqui' type="text" name="sendmessage" id="send" />

            <button> <i className="fas fa-paper-plane"></i> </button>


        </form>
    )



}

export default Input;