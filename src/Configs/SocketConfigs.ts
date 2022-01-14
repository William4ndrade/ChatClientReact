export default {

    Base_Url: "http://localhost:8080/ws",


    PrivateUrls:{

        CreateNewUser: "/app/newuser-private", 
        SubsCreateNewUser: "/user/topic/privateUser",
        CreateNewMessage: "/app/newmessage-private",
        SubsCreateNewMessage: "/user/topic/messageToUser"


    },


    Message_Route_ToSubscribe: "/topic/message",
    Users_Route_ToSubscribe: "/topic/users"
    

}