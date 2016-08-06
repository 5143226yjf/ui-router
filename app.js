/**
 * Created by yangjinfeng on 2016/8/6.
 */
var app=angular.module('myApp',['ui.router']);
app.controller('myCtrl',myCtrl);
function myCtrl($scope){
    $scope.name='yjf';
    console.log($scope.name);
}
app.run(['$rootScope', '$state', '$stateParams',
   function($rootScope, $state, $stateParams) {
       $rootScope.$state = $state;
       $rootScope.$stateParams = $stateParams;
    }
]);
  app.config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider){
          $stateProvider
              .state('view1', {
                  url: '/view1',
                  templateUrl: './template/view1.html'
              })
              .state('view2', {
                  url: '/view2',
                  templateUrl: './template/view2.html'
              })
              .state('view3', {
                  url: '/view3',
                  templateUrl: './template/view3.html'
              })
              .state('view4', {
                  url: '/view4',
                  templateUrl: './template/view4.html'
              })
              .state('view5', {
                  url: '/view5',
                  templateUrl: './template/view5.html'
              })
              .state('view1.sub1',{
                  url:'/sub1',
                  templateUrl:'./template/view1-sub/sub1.html'
              })
              .state('view1.sub2',{
                  url:'/sub2',
                  templateUrl:'./template/view1-sub/sub2.html'
              })
              .state('view1.sub3',{
                  url:'/sub3',
                  templateUrl:'./template/view1-sub/sub3.html'
              })
              .state('view1.sub4',{
                  url:'/sub4',
                  templateUrl:'./template/view1-sub/sub4.html'
              });
          $urlRouterProvider.otherwise('/view1')

      }
  ]);
