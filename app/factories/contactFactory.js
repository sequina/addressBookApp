app.factory("contactStorage", function($q, $http, firebaseURL, authFactory){

  var getContactList = function(){
    var contacts = [];
    let user = authFactory.getUser();
    return $q(function(resolve, reject){
      console.log("using link next");
      $http.get(`${firebaseURL}contacts.json?orderBy="uid"&equalTo= "${user.uid}"`)
        .success(function(itemObject){
          var itemCollection = itemObject;
          // console.log("itemCollection:", itemCollection);
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
              .delete( firebaseURL + `contacts/${contactId}.json`)
              .success(function(objectFromFirebase){
                resolve(objectFromFirebase);
              });
        });
  };

  var postNewContact = function(newContact){
        return $q(function(resolve, reject) {
            $http.post(
                firebaseURL + "contacts.json",
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
      $http.get( firebaseURL + "contacts/"+contactId+".json")
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
                firebaseURL + "contacts/" + contactId + ".json",
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
                firebaseURL + "contacts/" + newContact.id + ".json",
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

  return {updateCompletedStatus:updateCompletedStatus, updateItem:updateItem,getSingleItem:getSingleItem,getContactList:getContactList, deleteItem:deleteItem, postNewContact:postNewContact};

});
