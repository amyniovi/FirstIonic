(function () {

    angular.module("myChatApp.controllers", [])

        .controller("chatCtrl", function chatCtrl($stateParams, $scope, chatService) {
            var ctrl = this;

            $scope.chats = chatService.fetchAll();
            $scope.remove = function (chat) {
                // popup// ('Are you sure you want to delete this chat?',['delete', 'archive','cancel']);
                chatService.delete(chat.id);
            };

        })
        .controller("chatDetailCtrl", ["$scope", "$routeParams", chatService, function ($scope, $routeParams, chatService) {
            var chatId = $routeParams.id;
           
            $scope.chat = chatService.get(chatId);
            console.log("chat name ... retrieved from the service",chat.name);

        }])

        .controller("popupCtrl", function popupCtrl($ionicPopup, $scope) {
        });


}());