app.controller("ItemEditCtrl", function ($scope, $location, $routeParams, itemStorage) {
  $scope.title = "Edit Contact";
  $scope.saveButtonText = "Edit";
  $scope.newContact = {};

  itemStorage.getSingleItem($routeParams.contactId)
  .then(function successCallback(response) {
    $scope.newContact=response;
  });

  $scope.addNewContact = function() {
    itemStorage.updateItem($routeParams.contactId, $scope.newContact)
    .then(function successCallback (response) {
      console.log(response);
      $location.url("/contacts/edit");
    });
  };
});
