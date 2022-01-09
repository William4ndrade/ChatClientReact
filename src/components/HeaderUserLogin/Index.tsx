import React, { useState } from 'react';
import UserType from '../../types/UserTypes/UserType';
import PropsHeaderUserLoginTypes from "../../types/PropsTypes/PropsHeaderUserLoginTypes"
import "./Styles.css"
import {v4} from "uuid"
import { SendRequestService, UrlToSendRequest } from '../../services/SendRequestService';


const HeaderUserLogin = (props: PropsHeaderUserLoginTypes) => {
    
    

    const [UserInput, SetUserInput] = useState<string>("");


    function HandleUserInput(e: React.FormEvent<HTMLInputElement>){
        const newValue = e.currentTarget.value
        SetUserInput(newValue)
     }


    function FactoryUser(username: string): UserType{
        return {
            id: v4(),
            date: new Date(),
            username: username,
            thumbnail: props.User.thumbnail,
        }
    }

  


    function HandleUserSubmit(){
        
        const Username = UserInput.trim().replace(" ", "")
        if(props.Client == null){
            props.FeedbackFunction("red", "Você não está conectado ao servidor");
            return;
        }

        if(props.Client.connected && Username.length > 0 ){
            const User = FactoryUser(Username)
            const result = SendRequestService(props.Client, User , UrlToSendRequest.User); 
            if(result){
                props.FeedbackFunction("green", Username + " Entrou!")
                props.SetUser(User)
            } else{
                props.FeedbackFunction("red", "Algo deu errado")
            }    

        }else{
            props.FeedbackFunction("red", "Você não está conectado ao servidor")
        }
    }

    


    return (
        <header className='userinfoheader'>
            <img draggable={false} style={{
                height: "80%",
                borderRadius: "100%",
                width: "50px"

            }} src={props.User?.thumbnail} />
            {!props.User ? (
                <>
                    <input onChange={HandleUserInput} value={UserInput} placeholder='Username' title='Escolha um nome de usuário' maxLength={15} type="text" name="username" id="username" />
                    <button onClick={HandleUserSubmit} className='setuser'>Go</button>
                </>) :
                <>
                    <span className='userspan'>{props.User.username}</span>
                </>
            }

        </header>


    )
}

export default HeaderUserLogin;