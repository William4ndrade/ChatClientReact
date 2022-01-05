import { CompatClient } from "@stomp/stompjs"
import React from "react"
import ActiveUsersType from "../UserTypes/ActiveUsersType"
import UserType from "../UserTypes/UserType"

type PropsHeaderUserLoginTypes = {

    Client?: CompatClient,
    FeedbackFunction: (color: string, text: string) => void,
    ActiveUsers: ActiveUsersType,
    User?: UserType,
    SetUser: React.Dispatch<React.SetStateAction<UserType | undefined>>

}

export default PropsHeaderUserLoginTypes