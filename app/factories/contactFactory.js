app.factory("itemStorage", function($q, $http, firebaseURL){

  var getContactList = function(){
  var contacts = [];
    return $q(function(resolve, reject){
      $http.get(firebaseURL + "contacts.json")
        .success(function(itemObject){
          var itemCollection = itemObject;
          Object.keys(itemCollection).forEach(function(key){
            itemCollection[key].id=key;
            contacts.push(itemCollection[key]);
          });
          resolve(contacts);
        })
        .error(function(error){
          reject(error);
        });
    });
  };

  var deleteItem = function(contactId){
    return $q(function(resolve, reject){
      $http
              .delete( firebaseURL + `items/${itemId}.json`)
              .success(function(objectFromFirebase){
                resolve(objectFromFirebase);
              });
        });
  };

  var postNewItem = function(newContact){
        return $q(function(resolve, reject) {
            $http.post(
                firebaseURL + "items.json",
                JSON.stringify({
                    address: newContact.address,
                    firstName: newContact.firstName,
                    lastName: newContact.lastName,
                    number: newContact.number
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
  };

  var getSingleItem = function(contactId) {
    return $q(function(resolve, reject){
      $http.get( firebaseURL + "items/"+contactId+".json")
        .success(function(itemObject){
          resolve(itemObject);
        })
        .error(function(error){
          reject(error);
        });
    });
}

   var updateItem = function(contactId, newContact){
        return $q(function(resolve, reject) {
            $http.put(
                firebaseURL + "items/" + itemId + ".json",
                JSON.stringify({
                    address: newContact.address,
                    firstName: newContact.firstName,
                    lastName: newContact.lastName,
                    number: newContact.number
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
    };

    var updateCompletedStatus = function(newContact){
        return $q(function(resolve, reject) {
            $http.put(
                firebaseURL + "items/" + newContact.id + ".json",
                JSON.stringify({
                    address: newContact.address,
                    firstName: newContact.firstName,
                    lastName: newContact.lastName,
                    number: newContact.number
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
    };

  return {updateCompletedStatus:updateCompletedStatus, updateItem:updateItem,getSingleItem:getSingleItem,getContactList:getContactList, deleteItem:deleteItem, postNewItem:postNewItem};

});
