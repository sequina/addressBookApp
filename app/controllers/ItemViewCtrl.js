app.controller("ItemViewCtrl", function($scope, $routeParams, contactStorage) {
  $scope.contacts = [];
  $scope.selectedItem = {};
  console.log($routeParams.contactId);

  contactStorage.getContactList().then(function (itemCollection) {
    console.log("itemCollection from promise", itemCollection);
    $scope.contacts = itemCollection;

    $scope.selectedItem = $scope.contacts.filter(function(contacts) {
      return contacts.id === $routeParams.contactsId;
    })[0];
  });
});
