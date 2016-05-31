(function(){
    
    angular.module("myChatApp").controller("chatCtrl", function chatCtrl($stateParams, $scope, chatService ){
        var ctrl = this;

        $scope.chats = chatService.fetchAll();

    });



    
    
    
    
}());