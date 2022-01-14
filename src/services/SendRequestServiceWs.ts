import { CompatClient } from "@stomp/stompjs";
import SocketConfigs from "../Configs/SocketConfigs";
import MessageType from "../types/MessagesTypes/MessageType";
import UserType from "../types/UserTypes/UserType";



export enum UrlToSendRequest{
     User, Message
}

export function SendRequestServiceWs(Client: CompatClient, data: UserType | MessageType ,url: UrlToSendRequest  ):boolean{

     const ToSend = url === UrlToSendRequest.User ? SocketConfigs.PrivateUrls.CreateNewUser : SocketConfigs.PrivateUrls.CreateNewMessage
       if(Client.connected){
          try {
               Client.send(ToSend,{}, JSON.stringify(data));
                return true;
          } catch (error) {
               return false
          }
            
           
       }  

       return false;
       
}