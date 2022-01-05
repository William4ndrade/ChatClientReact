import { IMessage } from "@stomp/stompjs";
import ActiveUsersType from "../types/UserTypes/ActiveUsersType";
import MessageResponseType from "../types/ResponsesTypes/MessagesResponseType";
import UserType from "../types/UserTypes/UserType";



export function OnRecievedMessage(ev: IMessage, HandleFeedback : (color:string, text:string) => void, SetUser: React.Dispatch<React.SetStateAction<UserType | undefined>>, ActiveUsers: ActiveUsersType, User?:UserType ){
    


    const body:MessageResponseType = JSON.parse(ev.body);
      console.log(body)
    if(body.code < 300){
     

    }

}