var app = angular.module("addressBook",["ngRoute"])
  .constant("firebaseURL" , "https://addressproject.firebaseio.com/");
  let isAuth = (authFactory) => new Promise((resolve, reject) => {
  if(authFactory.isAuthenticated()) {
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
})

app.config(function ($routeProvider) {
  $routeProvider.
  when('/',{
    templateUrl:'partials/item-all.html',
    controller:"ItemAllCtrl",
    resolve: {isAuth}
  }).
  when('/items/all',{
    templateUrl:'partials/item-all.html',
    controller:"ItemAllCtrl",
    resolve: {isAuth}
  }).
  when('/items/new', {
    templateUrl: 'partials/item-new.html',
    controller:"ItemNewCtrl",
    resolve: {isAuth}
  }).
  when('/items/:itemId/edit', {
    templateUrl: 'partials/item-new.html',
    controller:"ItemNewCtrl"
  }).
  when('/login', {
    templateUrl: 'partials/login.html',
    controller:"LoginCtrl"
  }).
  when('/logout', {
    templateUrl: 'partials/login.html',
    controller:"LoginCtrl"
  }).
  otherwise('/');
});

app.run(($location) => {
  let todoRef = new Firebase("https://addressproject.firebaseio.com/");
  todoRef.onAuth(authData => {
    if(!authData){
      $location.path("/login");
    }
  });
});


