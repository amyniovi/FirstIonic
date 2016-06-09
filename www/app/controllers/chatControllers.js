(function () {

    angular.module("myChatApp.controllers", [])

        .controller("chatCtrl", function chatCtrl($stateParams, $scope, chatService) {

            $scope.chats = chatService.fetchAll();
            $scope.remove = function (chat) {
                // popup// ('Are you sure you want to delete this chat?',['delete', 'archive','cancel']);
                chatService.delete(chat.id);
            };

        })
        .controller("chatDetailCtrl", function chatDetailCtrl($scope, $stateParams, chatRepo) {
            // var chatId = $stateParams.id;


            chatRepo.getChatLog().then(function (response) {
                $scope.jsonData = response;
            }, function (error) {
                console.log("my logged error" + error);
            });


        })

        .controller("popupCtrl", function popupCtrl($ionicPopup, $scope) {
        });

}());
