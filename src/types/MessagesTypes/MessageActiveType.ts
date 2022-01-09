import ActiveUsersType from "../UserTypes/ActiveUsersType"
import OneActiveUserType from "../UserTypes/OneActiveUserType"
import UserType from "../UserTypes/UserType"


type MessageActiveType =  {
    text: string,
    user: UserType
    data: Date,
    me?: boolean
}

export default MessageActiveType