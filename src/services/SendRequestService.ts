import { CompatClient } from "@stomp/stompjs";
import SocketConfigs from "../Configs/SocketConfigs";
import MessageType from "../types/MessagesTypes/MessageType";
import UserType from "../types/UserTypes/UserType";



export enum UrlToSendRequest{
     User, Message
}

export function SendRequestService(Client: CompatClient, Message: UserType | MessageType, url: UrlToSendRequest  ):boolean{

     const ToSend = url === UrlToSendRequest.User ? SocketConfigs.Users_Route_send : SocketConfigs.Message_Route_send
       if(Client.connected){
          try {
               Client.send(ToSend, {}, JSON.stringify(Message));
                return true;
          } catch (error) {
               return false
          }
            
           
       }  

       return false;
       
}