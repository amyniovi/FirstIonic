angular.module("myChatApp", ["ionic"])

.run(function($ionicPlatform){

$ionicPlatform.ready(
function(){

	if(window.cordova && window.cordova.plugins.Keyboard)
	{
		cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

	}
	if(window.StatusBar){
		StatusBar.styleDefault();
	}
});

})


.config(function($stateProvider,$urlRouterProvider){

	$stateProvider

    .state(
		"home", {
			url: "/home",
			abstract : true,
			templateUrl:"app/home/home.html"
		})

	.state(
		"home.chats",	{
			url:"/chats",
			views:{
				"tab-chats" : {
					templateUrl: "app/home/chats.html"
				}
			}
		})
	.state(
		"home.contacts",	{
			url:"/contacts",
			views:{
				"tab-contacts" : {
					templateUrl: "app/home/contacts.html"
				}
			}
		})

	.state("home.settings",	{
			url:"/settings",
			views:{
				"tab-settings" : {
					templateUrl: "app/home/settings.html"
				}
			}
	})

	.state("app", {
      url: "/app",
      templateUrl: "app/layout/menu-layout.html"
    });


$urlRouterProvider.otherwise("/home/chats");
});

/*
activating states:
<a href="#/foo/bar">Go To</a>      //actual url
<a ui-sref ="foo.bar">Go To</a>   //state name
$state.go("foo.bar");  //javascript (name of state)
*/
