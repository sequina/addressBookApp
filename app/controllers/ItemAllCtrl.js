app.controller("ItemAllCtrl", function ($scope, $location, contactStorage) {
  $scope.contacts = [];
    contactStorage.getContactList().then(function(itemCollection) {
      console.log("itemCollection from promise", itemCollection);
      $scope.contacts = itemCollection;
    });

$scope.contactDelete = function(contactId){
  console.log("contactId",contactId);
  contactStorage.deleteItem(contactId).then(
    function(response) {
      contactStorage.getContactList().then(
        function(itemCollection) {
          $scope.contacts = itemCollection;
        });
    });
};

$scope.inputChange = function(contact) {
  contactStorage.updateCompletedStatus(contact)
  .then(function(response) {
    console.log("response", response);
    });
  };
});
