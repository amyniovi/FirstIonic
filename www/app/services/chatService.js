
(function(){

angular.module("myChatApp")

    .factory('chatService', function(){

        var Chats = [
            {
                id:0,
                name:"Ben Obama",
                lastText: "where you at",
                pic:"img/ben.png"
            },
            {
                id:1,
                name:"Mike Flynn",
                lastText: "cool ...catch you lr",
                pic:"img/mike.png"
            },
            {
                id:2,
                name:"Adam Weirdo",
                lastText: "I m running late ...",
                pic:"img/adam.jpg"
            }
        ];

        return {

            fetchAll : function (){

                return Chats;
            },

            get : function(){}

        };


    });



}());