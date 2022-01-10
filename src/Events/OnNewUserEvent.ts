import { IMessage } from "@stomp/stompjs";
import ActiveUsersType from "../types/UserTypes/ActiveUsersType";
import JoinResponseType from "../types/ResponsesTypes/JoinResponseType";



export function OnNewUser(ev: IMessage, SetActiveUser: React.Dispatch<React.SetStateAction<ActiveUsersType>> ){
    
    const body: JoinResponseType = JSON.parse(ev.body); 
    SetActiveUser(body.usersOnline);
}

