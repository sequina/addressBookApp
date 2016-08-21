app.controller("ItemViewCtrl", function($scope, $routeParams, itemStorage) {
  $scope.contacts = [];
  $scope.selectedItem = {};
  console.log($routeParams.contactId);

  itemStorage.getContactList().then(function (itemCollection) {
    console.log("itemCollection from promise", itemCollection);
    $scope.contacts = itemCollection;
    $scope.selectedItem = $scope.contacts.filter(function(contact) {
      return contact.id === $routeParams.contactId;
    })[0];
  });
});
