var app = angular.module('toDoApp', []);

app.controller('ToDoController', ['$scope', function ($scope) {
  $scope.tasks = [];
  $scope.editIndex = false;
  $scope.addTask = function () {
      if( $scope.editIndex === false){
          $scope.tasks.push({task: $scope.task, done: false, dueDate: $scope.dueDate})
      } else {
          $scope.tasks[$scope.editIndex].task = $scope.task;
      }
      $scope.editIndex = false;
      $scope.task = '';
  }
  $scope.editTask = function (index)
  {
    $scope.task = $scope.tasks[index].task;
    $scope.editIndex = index;
  }
  $scope.doneTask = function (index)
  {
    $scope.tasks[index].done = true;
  }
  $scope.unDoneTask = function (index)
  {
    $scope.tasks[index].done = false;
  }
  $scope.deleteTask = function (index)
  {
    $scope.tasks.splice(index, 1);
  }

  $scope.enterTask = function (keyEvent)
  {
    if (keyEvent.which === 13)
    {
      if( $scope.editIndex === false){
          $scope.tasks.push({task: $scope.task, done: false})
      } else {
          $scope.tasks[$scope.editIndex].task = $scope.task;
      }
      $scope.editIndex = false;
      $scope.task = '';
    }
  }

  $scope.search = function (inSearch)
  {
    $filter('filter')($scope.tasks, {task: inSearch}, true);
  }

  $scope.enterTask = function (keyEvent)
  {
    if (keyEvent.which === 13)
    {
      $filter('filter')($scope.tasks, {task: inSearch}, true);
    }
  }

}])
