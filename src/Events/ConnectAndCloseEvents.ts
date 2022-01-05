import { CompatClient, messageCallbackType } from "@stomp/stompjs";
import SocketConfigs from "../Configs/SocketConfigs";
import FailAtWebSocketConnectionError from "../Errors/FailAtWebSocketConnectionError";
import ActiveUsersType from "../types/UserTypes/ActiveUsersType";
import UserType from "../types/UserTypes/UserType";
import { OnNewUser } from "./OnNewUserEvent";
import { OnRecievedMessage } from "./OnReceivedMessageEvent";

export function OnConnect(Client: CompatClient, SetActiveUsers: React.Dispatch<React.SetStateAction<ActiveUsersType>>, ActiveUsers: ActiveUsersType, SetUser: React.Dispatch<React.SetStateAction<UserType | undefined>>, Handlefeedback: (color: string, text: string) => void, User?: UserType){
    console.log("Cliente está conectado");


    Client.subscribe(SocketConfigs.Message_Route_ToSubscribe, (e) => OnRecievedMessage(e, Handlefeedback,SetUser, ActiveUsers, User ));
    Client.subscribe(SocketConfigs.Users_Route_ToSubscribe, (e) => OnNewUser(e,SetActiveUsers));

    

}

export function OnClose(){
    console.log("Cliente Fechado")
}


export function OnError(){
    throw new FailAtWebSocketConnectionError("Falha ao conectar ao Socket");
}