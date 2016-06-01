app.controller("ItemAllCtrl", function ($scope, $location, itemStorage) {
  $scope.contacts = [];
    itemStorage.getContactList().then(function(itemCollection) {
      console.log("itemCollection from promise", itemCollection);
      $scope.contacts = itemCollection;
    });

$scope.contactDelete = function(contactId){
  console.log("contactId",contactId);
  itemStorage.deleteItem(contactId).then(
    function(response) {
      itemStorage.getContactList().then(
        function(itemCollection) {
          $scope.contacts = itemCollection;
        });
    });
};

$scope.inputChange = function(contact) {
  itemStorage.updateCompletedStatus(contact)
  .then(function(response) {
    console.log("response", response);
    });
  };
});
