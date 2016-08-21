app.controller("ItemNewCtrl", function ($scope, $location, contactStorage) {
  $scope.title = "New Contact";
  $scope.saveButtonText = "Add New Contact";
  $scope.newContact = {
    address: "",
    firstName: "",
    lastName: "",
    number: ""
  };

  $scope.addNewContact = function() {
      contactStorage.postNewContact($scope.newContact)
        .then(function successCallback(response) {
          console.log(response);
          $location.url("/items/all");
      });
    };
});
