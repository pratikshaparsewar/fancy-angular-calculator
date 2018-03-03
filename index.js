var app = angular.module("app", []);
app.controller("ctrl1", function ($scope) {
    $scope.buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "*", "AC", "="];
    $scope.clickedValue = function(btn){
       if (btn == "=") {
        $scope.input = eval($scope.input);
    }
    else if (btn == "AC"){
        $scope.input = "";

    }
    else {
        $scope.input = $scope.input + btn ;
    }
}

});
