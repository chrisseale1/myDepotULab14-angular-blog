//The action to call the local API should be here

var app = angular.module('myBlogApp.factories', []);

app.factory('BlogPost', ['$resource', function($resource){
    return $resource('http://localhost:3000/api/posts/:id',{ id: '@id'}, {
            'update': { method: 'PUT' }
        });
}]);

