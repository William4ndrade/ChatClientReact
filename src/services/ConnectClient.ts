import { CompatClient, Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import SocketConfigs from "../Configs/SocketConfigs";
import { OnConnect, OnClose, OnError } from "../Events/ConnectAndCloseEvents";
import MessagesActiveType from "../types/MessagesTypes/MessagesActiveType";
import ActiveUsersType from "../types/UserTypes/ActiveUsersType";
import UserType from "../types/UserTypes/UserType";


export  function ConnectClient(SetActiveUsers: React.Dispatch<React.SetStateAction<ActiveUsersType>>, 
    ActiveUsers: ActiveUsersType, SetUser: React.Dispatch<React.SetStateAction<UserType>>, Handlefeedback: (color: string, text: string) => void, User: UserType, SetMessage: React.Dispatch<React.SetStateAction<MessagesActiveType | undefined>> ): CompatClient{


    const Client: CompatClient = Stomp.over(() => SockJS( SocketConfigs.Base_Url));
    Client.connect({}, () => OnConnect(Client, SetActiveUsers, ActiveUsers,SetUser,Handlefeedback, User,SetMessage), OnError, OnClose )
    return Client;
   


   

}


