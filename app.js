var app = angular.module('chat', []);

app.controller('addcommentfrominputbox', function($scope) {
    $scope.newcomment = '';

    $scope.comments = [
        'This is the first comment!', 
        'Here is the second one!',
        'And this is one more.',
        'Here is another one!'
    ];

    $scope.add = function(e) {
        if (e.which && e.which === 13) {
          $scope.comments.push($scope.newcomment);
          $scope.newcomment = '';
        }
    };

});
