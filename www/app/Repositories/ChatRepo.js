/**
 * Created by Amy on 02/06/2016.
 */

(function () {

    angular.module("myChatApp")
        .factory("ChatRepo", function ($http) {

            var getChatLog = function (callback) {
                $http.get("Data/ConversationLog.json").then(function(response){
                    callback(response.data);
                },function(errorResponse){
                    console.log(errorResponse.data);
                    return null;
                });
            };


            return {getChatLog: getChatLog};

        });


}());