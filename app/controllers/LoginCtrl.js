"use strict";

app.controller("LoginCtrl", function($scope, $location, firebaseURL, authFactory) {
  let ref = new Firebase(firebaseURL);

  // $scope.hasUser = false;

  $scope.account = {
    email: "",
    password: ""
  };

  if($location.path() === "/logout") {
    ref.unauth();
  }

  $scope.register = () => {
      console.log("you clicked register");
      ref.createUser({
        email: $scope.account.email,
        password: $scope.account.password
      }, (error, userData) => {
        if(error) {
          console.log(`Error creating user: ${error}`);
        }else{
          console.log(`Created User account with new uid: ${userData.uid}`);
          //automatically logins user in after registering
          $scope.login();
          }
      });
  };


  $scope.login = () => {
    console.log("you clicked login" );
    authFactory
      .authenticate($scope.account)
      .then(() => {
        // $scope.hasUser = true;
        $location.path("/");
        $scope.$apply();
      });
    };
});
