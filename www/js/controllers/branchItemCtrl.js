'use strict';

/**
 * @ngdoc function
 * @name nodeTokenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeTokenApp
 */
angular.module('fastFood')
  .controller('branchitemCtrl', function ($scope,$stateParams,branches,branchitems) {

    //var testdata = $resource('testData/itemList.json');
    console.log($stateParams.id);
      branches.getBranchData($stateParams.id).then(function(data){

          $scope.restaurant = data;
          console.log($scope.restaurant);
  
          })
  	/*branchitems.getFoodList($stateParams.id).then(function(data){
      //console.log("success");
      
  		$scope.availableFood = data;
  		console.log($scope.availableFood);
  			
  	});*/

  });   
