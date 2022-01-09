import { IMessage } from "@stomp/stompjs";
import ActiveUsersType from "../types/UserTypes/ActiveUsersType";
import MessageResponseType from "../types/ResponsesTypes/MessagesResponseType";
import UserType from "../types/UserTypes/UserType";
import MessagesActiveType from "../types/MessagesTypes/MessagesActiveType";
import AllMessagesActiveType from "../types/MessagesTypes/MessagesActiveType";



export function OnRecievedMessage(ev: IMessage, HandleFeedback : (color:string, text:string) => void, SetUser: React.Dispatch<React.SetStateAction<UserType>>, ActiveUsers: ActiveUsersType, User:UserType,  SetMessage?: React.Dispatch<React.SetStateAction<MessagesActiveType | undefined>> ){
    


    const body:MessageResponseType = JSON.parse(ev.body);
    if(body.code < 300){
        if(SetMessage){
            const AddMeAtributte : AllMessagesActiveType | undefined = body.messages.map(e => {
                
                const AddMe = e;
                AddMe.me = User?.username == e.user.username;
                return AddMe;
              
            })


            SetMessage(AddMeAtributte)
            
        }

        

    }

}