import { CompatClient, messageCallbackType } from "@stomp/stompjs";
import SocketConfigs from "../Configs/SocketConfigs";
import FailAtWebSocketConnectionError from "../Errors/FailAtWebSocketConnectionError";
import { SendRequestService, UrlToSendRequest } from "../services/SendRequestService";
import MessagesActiveType from "../types/MessagesTypes/MessagesActiveType";
import MessageType from "../types/MessagesTypes/MessageType";
import ActiveUsersType from "../types/UserTypes/ActiveUsersType";
import UserType from "../types/UserTypes/UserType";
import { OnNewUser } from "./OnNewUserEvent";
import { OnRecievedMessage } from "./OnReceivedMessageEvent";

export function OnConnect(Client: CompatClient, SetActiveUsers: React.Dispatch<React.SetStateAction<ActiveUsersType>>, ActiveUsers: ActiveUsersType, SetUser: React.Dispatch<React.SetStateAction<UserType>>, Handlefeedback: (color: string, text: string) => void, User: UserType, setMessage: React.Dispatch<React.SetStateAction<MessagesActiveType | undefined>>){
    const firstmessage:MessageType = {
        text:"",
        data: new Date(),
        user: {
            id: "",
            username: "",
            thumbnail: "",
            date: new Date()
        }
    } 

   
    Client.subscribe(SocketConfigs.Message_Route_ToSubscribe, (e) => OnRecievedMessage(e, Handlefeedback,SetUser, ActiveUsers, User, setMessage ));
    Client.subscribe(SocketConfigs.Users_Route_ToSubscribe, (e) => OnNewUser(e,SetActiveUsers));
    SendRequestService(Client, firstmessage , UrlToSendRequest.Message );

    

}

export function OnClose(){
    console.log("Cliente Fechado")
}


export function OnError(){
    throw new FailAtWebSocketConnectionError("Falha ao conectar ao Socket");
}