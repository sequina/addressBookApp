app.controller("ItemNewCtrl", function ($scope) {
  $scope.newContact = {};
  $scope.item = [
{
      id: 0,
      firstname: "sequina",
      lastName: "caro",
      number: "123-456-7890",
      address: "123 grand street",
      isAdded: true

    },
    {
       id: 1,
      firstname: "brad",
      lastName: "wilter",
      numer: "345-654-2059",
      address: "360 foster ave.",
      isAdded: true
    },
    {
       id: 2,
      firstname: "tina",
      lastName: "rillo",
      number: "805-789-2345",
      address: "503 sapphire dr.",
      isAdded: true
    }
  ];
  $scope.addNewContact = function() {
    console.log("added new contact");
    $scope.newContact.isAdded = false;
    $scope.newContact.id = $scope.item.length;
    console.log("added new contact", $scope.newContact );
    $scope.item.push($scope.newContact);
    $scope.newContact="";
  };
});
