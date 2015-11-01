/* global Provider, DOMCompiler */
function TodoCtrl($scope) {
    'use strict';
    $scope.todos = [];
    $scope.add = function () {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
    };
}

Provider.controller('TodoCtrl', TodoCtrl);

function TwoWayDataBinding($scope) {
    'use strict';
    $scope.xyz = "";
}

Provider.controller('TodoCtrl', TodoCtrl);

Provider.controller('TwoWayDataBinding', TwoWayDataBinding);

DOMCompiler.bootstrap();