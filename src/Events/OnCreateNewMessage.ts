import { IMessage } from "@stomp/stompjs";
import MessageType from "../types/MessagesTypes/MessageType";


type BodyResponseCreateMessage = {
    code: number,
    statusText: string,
    message: MessageType
}

function OnCreateNewMessage( ev: IMessage , Handlefeedback: (color: string, text: string) => void){

    const body:BodyResponseCreateMessage = JSON.parse(ev.body);

    if(body.code !== 200){
        Handlefeedback("red", body.statusText);

    }
}

export default OnCreateNewMessage