import ActiveUsersType from "../UserTypes/ActiveUsersType";

type JoinResponseType = {
    
    code: number,
    usersOnline: ActiveUsersType,
    message: string,
    SessionID?: string


}



export default JoinResponseType;