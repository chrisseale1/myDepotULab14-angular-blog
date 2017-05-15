//Logic for page actions here. 

var c = angular.module('myBlogApp.controllers', []);
c.controller('BlogPostsController', ['$scope', 'BlogPost','$location', function($scope, BlogPost, $location){
        // var post = BlogPost.get({ id: $scope.id }, function() { //gets single post
        //     console.log(entry);
        // });
        $scope.blogposts = BlogPost.query(function(){         //gets all posts
            console.log($scope.blogposts);
        });
        // $scope.post = new Post();              //instantiates a new post

        // $scope.post.data = 'some data';

        // Post.save($scope.post, function(){          //saves a post
        //         //data saved to do something here
        // });

        $scope.goToNewPost = function() {
            $location.path('/newpost');
        }
     
        $scope.goToPostId = function(id) {
            $location.path('/posts/' + id);
        }
}]);

c.controller('NewPostController', ['$scope', '$location', 'BlogPost', function($scope, $location, BlogPost){
        $scope.blogpost = {
            title: '',
            author: '',
            content: '',
        }

        $scope.saveBlogPost = function(){
            var b = new BlogPost($scope.blogpost);
            b.$save(function(){
                $location.path('/');
                }, function(err) {
                    console.log(err);   
        });
        };
}]);

c.controller('SinglePostController', ['$scope', '$routeParams', 'BlogPost', '$location', function($scope, $routeParams, BlogPost, $location){
        var id = $routeParams.id;
        $scope.blogpost = BlogPost.get({id : id});

        $scope.deleteBlogPost = function(){
            $scope.blogpost.$delete(function(){
                $location.path('/');
                }, function(err) {
                    console.log(err);
            });
        };
        $scope.editBlogPost = function(){
            $location.path('/editpost/');
            }, function(err) {
                    console.log(err);
        };
}]);

c.controller('EditPostController', ['$scope', '$routeParams', 'BlogPost', '$location', function($scope, $routeParams, BlogPost, $location){

}])

c.controller('ContactController', ['$scope', '$routeParams', 'Blogpost', '$location', function($scope, $routeParams, Blogpost, $location){
        $scope.goToContact = function(){
            $location.path('/contact/');
            }, function(err) {
                console.log(err);
            };
}]);

c.controller('AboutController', ['$scope', '$routeParams', 'Blogpost', '$location', function($scope, $routeParams, Blogpost, $location){
        $scope.goToAbout = function(){
            $location.path('/about/');
            }, function(err) {
                console.log(err);
            };
}]);