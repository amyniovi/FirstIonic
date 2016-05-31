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
      abstract: true,
      templateUrl: "app/layout/menu-layout.html"
    })
    .state("app.paymentMethod", {
      url: "/selectMethod",
      views: {
        "mainContent": {
          templateUrl: "app/payment/selectMethod.html"
        }
      }
    })
    .state("app.paymentList",{
      url:"/paymentList",
      views:{"mainContent":{
        templateUrl:"app/payment/paymentList.html"
      }}
    })
      .state("app.payment",{
        url:"/payment/:id",
        views:{"mainContent":{
          templateUrl:"app/payment/payment.html"
        }}
      }
    )
    .state("app.privacy", {
      url: "/privacy",
      views: {
        "mainContent": {
          templateUrl: "app/security/privacy.html"
        }
      }
    })
    .state("app.reviews", {
      url: "/reviews",
      views: {
        "mainContent": {
          templateUrl: "app/reviews/reviews.html"
        }
      }
    });


$urlRouterProvider.otherwise("/home/chats");
});

/*
activating states:
<a href="#/foo/bar">Go To</a>      //actual url
<a ui-sref ="foo.bar">Go To</a>   //state name
$state.go("foo.bar");  //javascript (name of state)
*/
