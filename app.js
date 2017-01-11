(function (){
'use strict';

angular.module('LunchCheckApp', [])

.controller('LunchCheckController', FoodWatchController);

FoodWatchController.$inject = ['$scope'];

function FoodWatchController ($scope) {
$scope.items = "" ;
$scope.message = "";
$scope.emptyStringMessage = "";

$scope.checkFood = function (){
  var messageString = getMessage($scope.items);
  $scope.message = messageString;
};

function getMessage(string) {
var totalItems = string.split(',');

if(totalItems.length ==1 && totalItems[0].length==0){
$scope.emptyStringMessage = "";
return "Please enter data first"  ;
}

for(var i=0;i<totalItems.length;i++){
  var lunchItem =totalItems[i];
  if(lunchItem.trim().length==0){
    $scope.emptyStringMessage = "Do not enter any empty item or space";
    return "";
  }
}

if(totalItems.length <=3){
$scope.emptyStringMessage = "";
return "Enjoy!"  ;
}

else{
$scope.emptyStringMessage = "";
return "Too much!" ;
}
};

}

})();
