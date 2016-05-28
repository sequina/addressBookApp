app.controller("ItemViewCtrl", function($scope, $routeParams, itemStorage) {
  $scope.contacts = [];
  $scope.selectItem = {};
  console.log($routeParams.contactId);

  itemStorage.getContactList().then(function (itemCollection) {
    console.log("itemCollection from promise", itemCollection);
    $scope.contacts = itemCollection;

    $scope.selectItem = $scope.contacts.filter(function(contacts) {
      return contacts.id === $routeParams.contactsId;
    })[0];
  });
});
