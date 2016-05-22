var app = angular.module("addressBook",["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider.
  when('/items/all',{
    templateUrl:'partials/item-all.html',
    controller:"ItemAllCtrl"
  }).
  when('/items/new', {
    templateUrl: 'partials/item-new.html',
    controller:"ItemNewCtrl"
  }).
  when('/items/logout', {
    templateUrl: 'partials/logout.html',
    controller:"LogOutCtrl"
  }).
  otherwise('/items/all');
});
