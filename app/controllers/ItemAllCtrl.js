app.controller("ItemAllCtrl", function ($scope, $location, itemStorage) {
  $scope.contacts = [];
    itemStorage.getContactList().then(function(itemCollection) {
      console.log("itemCollection from promise", itemCollection);
      $scope.contacts = itemCollection;
    });

$scope.contactDelete = function(itemId){
  console.log("itemId",itemId);
  itemStorage.deleteItem(itemId).then(
    function(response) {
      itemStorage.getContactList().then(
        function(itemCollection) {
          $scope.contacts = itemCollection;
        });
    });
};

$scope.inputChange = function(contact) {
  itemStorage.updateCompletedStaus(contact)
  .then(function(response) {
    console.log("response", response);
    });
  };
});
