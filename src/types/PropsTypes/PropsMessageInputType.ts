import { CompatClient } from "@stomp/stompjs"
import ActiveUsersType from "../UserTypes/ActiveUsersType";
import UserType from "../UserTypes/UserType"

 
export type PropsMessageInputType = {
    client?: CompatClient,
    SetFeedback: (color: string, text:string) => void
    User?: UserType;
    SetUser: React.Dispatch<React.SetStateAction<UserType>>,
    ActiveUsers: ActiveUsersType
}

