app.controller("ItemNewCtrl", function ($scope) {
  $scope.newContact = {};
  $scope.item = [
{
      id: 0,
      firstname: "sequina",
      lastName: "caro",
      number: "123-456-7890",
      address: "123 grand street"

    },
    {
       id: 1,
      firstname: "brad",
      lastName: "wilter",
      numer: "345-654-2059",
      address: "360 foster ave."
    },
    {
       id: 2,
      firstname: "tina",
      lastName: "rillo",
      number: "805-789-2345",
      address: "503 sapphire dr."
    }
  ];
  $scope.addnewContact = function() {
    console.log("added new contact");

  }
})
