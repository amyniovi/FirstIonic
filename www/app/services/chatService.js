(function () {

    angular.module("myChatApp")

        .factory('chatService', function () {

            var Chats = [
                {
                    id: 0,
                    name: "Ben Obama",
                    lastText: "where you at",
                    pic: "img/ben.png"
                },
                {
                    id: 1,
                    name: "Mike Flynn",
                    lastText: "cool ...catch you lr",
                    pic: "img/mike.png"
                },
                {
                    id: 2,
                    name: "Adam Weirdo",
                    lastText: "I m running late ...",
                    pic: "img/adam.jpg"
                }
            ];

            return {

                fetchAll: function () {

                    return Chats;
                },

                get: function (id) {

                    for (var i = 0; i < Chats.length; i++) {
                        if (Chats[i].id == id)
                            return Chats[i];
                    }
                    return null;
                },
               
                delete: function (id) {

                    var chat = Chats.find(function (obj) {
                        return obj.id === id;
                    });

                    console.log("char to delete! : ", chat);

                    if (chat != null && chat != undefined)
                        Chats.splice(chat.index, 1);
                }

            };


        });


}());