// (function(){
// 'use strict';
//   angular.module('LunchCheck',[])
//   .controller('LunchCheckController',LunchCheckController);
//
// LunchCheckController.$inject=['$scope'];
//
// function LunchCheckController($scope){
//   $scope.items="";
//   $scope.istoomuch="";
//   $scope.colorObj="";
//   $scope.borderColorObj="";
//
//
//   $scope.checkNumberOfItems=function(){
//
//     var noOfItems=getNoOfItems($scope.items);
//         if(noOfItems==0){
//           $scope.istoomuch="Please enter data first";
//           $scope.colorObj={'color':'red'};
//           $scope.borderColorObj={'border-color':'red'};
//         }
//         else if(noOfItems<=3){
//           $scope.istoomuch="Enjoy!";
//             $scope.colorObj={'color':'green'};
//               $scope.borderColorObj={'border-color':'green'};
//         }
//         else{
//           $scope.istoomuch="Too much!";
//             $scope.colorObj={'color':'green'};
//               $scope.borderColorObj={'border-color':'green'};
//         }
//
//   };
//
//   function getNoOfItems(string){
//       var items=string.split(","),
//      arr=[];
//       for(var i=0;i<items.length;i++){
//         if(items[i]!=""){
//           arr.push(items[i]);
//         }
//
//       }
//       return arr.length;
//
//   }
// }
//
// })();
// //!function(){"use strict";angular.module("MyTestApp",[]).controller("FirstController",["$scope",function(t){t.name="Mithun",t.test="love",t.changeMe=function(){t.test="like"}}])}();

!function(){"use strict";function o(o){function r(o){for(var r=o.split(","),e=[],c=0;c<r.length;c++)""!=r[c]&&e.push(r[c]);return e.length}o.items="",o.istoomuch="",o.colorObj="",o.borderColorObj="",o.checkNumberOfItems=function(){var e=r(o.items);0==e?(o.istoomuch="Please enter data first",o.colorObj={color:"red"},o.borderColorObj={"border-color":"red"}):3>=e?(o.istoomuch="Enjoy!",o.colorObj={color:"green"},o.borderColorObj={"border-color":"green"}):(o.istoomuch="Too much!",o.colorObj={color:"green"},o.borderColorObj={"border-color":"green"})}}angular.module("LunchCheck",[]).controller("LunchCheckController",o),o.$inject=["$scope"]}();
