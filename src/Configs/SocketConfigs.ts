export default {

    Base_Url: "http://ec2-54-232-144-134.sa-east-1.compute.amazonaws.com:8080/ws",


    PrivateUrls:{

        CreateNewUser: "/app/newuser-private", 
        SubsCreateNewUser: "/user/topic/privateUser",
        CreateNewMessage: "/app/newmessage-private",
        SubsCreateNewMessage: "/user/topic/messageToUser"


    },


    Message_Route_ToSubscribe: "/topic/message",
    Users_Route_ToSubscribe: "/topic/users"
    

}