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
        .controller("chatDetailCtr", function chatDetailCtr($scope, $routeParams, chatService) {
            var chatId = $routeParams.id;
            $scope.chat = chatService.get(chatId);

        })

        .controller("popupCtrl", function popupCtrl($ionicPopup, $scope) {
        });


}());