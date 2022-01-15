import { IMessage } from "@stomp/stompjs";
import PrivateCreateNewUser from "../types/ResponsesTypes/PrivateCreateNewUser";
import UserType from "../types/UserTypes/UserType";


export default function OnCreateNewUser(ev:IMessage, SetUser:React.Dispatch<React.SetStateAction<UserType>>, HandleFeedback:(color: string, text: string) => void ){

    const Body:PrivateCreateNewUser   = JSON.parse(ev.body);

    console.log(Body)
    if(Body.code === 200){
        SetUser(Body.me);
        HandleFeedback("green", Body.me.username + " Entrou!");
    }else{
        HandleFeedback("red", Body.statusText);
    }



}