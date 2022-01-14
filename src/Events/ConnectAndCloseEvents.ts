import { CompatClient, messageCallbackType } from "@stomp/stompjs";
import SocketConfigs from "../Configs/SocketConfigs";
import FailAtWebSocketConnectionError from "../Errors/FailAtWebSocketConnectionError";
import { SendRequestServiceWs, UrlToSendRequest } from "../services/SendRequestServiceWs";
import MessagesActiveType from "../types/MessagesTypes/MessagesActiveType";
import MessageType from "../types/MessagesTypes/MessageType";
import ActiveUsersType from "../types/UserTypes/ActiveUsersType";
import UserType from "../types/UserTypes/UserType";
import OnCreateNewMessage from "./OnCreateNewMessage";
import OnCreateNewUser from "./OnCreateUser";
import { OnNewUser } from "./OnNewUserEvent";
import { OnRecievedMessage } from "./OnReceivedMessageEvent";

export function OnConnect(Client: CompatClient, SetActiveUsers: React.Dispatch<React.SetStateAction<ActiveUsersType>>, ActiveUsers: ActiveUsersType, SetUser: React.Dispatch<React.SetStateAction<UserType>>, Handlefeedback: (color: string, text: string) => void, User: UserType, setMessage: React.Dispatch<React.SetStateAction<MessagesActiveType | undefined>>){
 


    Client.subscribe(SocketConfigs.Message_Route_ToSubscribe, (e) => OnRecievedMessage(e, Handlefeedback,SetUser, ActiveUsers, User, setMessage ));
    Client.subscribe(SocketConfigs.Users_Route_ToSubscribe, (e) => OnNewUser(e,SetActiveUsers));

    Client.subscribe(SocketConfigs.PrivateUrls.SubsCreateNewUser  ,(e) => OnCreateNewUser(e, SetUser, Handlefeedback))
    Client.subscribe(SocketConfigs.PrivateUrls.SubsCreateNewMessage,  (e) => OnCreateNewMessage(e,Handlefeedback));


}

export function OnClose(){
    console.log("Cliente Fechado")
}


export function OnError(){
    throw new FailAtWebSocketConnectionError("Falha ao conectar ao Socket");
}