//Use to instantiate app, connect factory & controllers and configure app.

var app = angular.module('myBlogApp', ['ngRoute', 'ngResource', 'myBlogApp.controllers', 'myBlogApp.factories']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/blogposts.html',
        controller: 'BlogPostsController'
    })
    .when('/posts/:id', {
        templateUrl: 'views/singlepost.html',
        controller: 'SinglePostController'
    })
    .when('/newpost', {
        templateUrl: 'views/newpost.html',
        controller: 'NewPostController'
    })
    .when('/posts/:id/editpost', {
        templateUrl: 'views/editpost.html',
        controller:  'EditPostController'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);