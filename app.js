/**
 * Created by UmairAhmed on 6/2/2017.
 */

angular.module("todoApp", [])

    //create main controller.
    .controller("mainCtrl", function($scope) {

        //initialization with default values.
        $scope.todo = {completed: false, text: ''};
        $scope.selectAll = false;
        $scope.todoList = [
            {completed: false, isSelected: false, text: 'create todo app'},
            {completed: false, isSelected: false, text: 'push the code'}
        ];

        //Add todo function.
        $scope.addTodo = function(form){
            if(form.$valid){
                $scope.todoList.unshift(angular.copy($scope.todo));
                $scope.todo.text = '';
            }
        };

        //Remove/Delete todo function.
        $scope.removeTodo = function(index){
            $scope.todoList.splice(index, 1);
        };

        //Toggle select all value.
        $scope.toggleSelectAll = function () {
            angular.forEach($scope.todoList, function(obj){
                obj.isSelected = $scope.selectAll
            });
        };

        //Toggle individual todo.
        $scope.toggleSelect = function (val, index) {
            $scope.todoList[index].isSelected = val;
        };

        //Delete selected.
        $scope.deleteSelected = function () {
            $scope.todoList = $scope.todoList.filter(function(obj){
                return !obj.isSelected
            });
            $scope.selectAll = false;
        }

    });