 

export default class FailAtWebSocketConnectionError extends Error{
    constructor(msg:string){
        super(msg)
    }
}