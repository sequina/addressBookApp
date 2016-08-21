app.controller("ItemNewCtrl", function ($scope, $location, itemStorage) {
  $scope.title = "New Contact";
  $scope.saveButtonText = "Add New Contact";
  $scope.newContact = {
    address: "",
    firstName: "",
    lastName: "",
    number: ""
  };

  $scope.addnewContact = function() {
    itemStorage.postNewContact($scope.newContact)
    .then(function successCallback(response) {
    console.log(response);
    $location.url("/items/all");
      });
    };
});
