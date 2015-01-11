salterhebble = angular.module('salterhebble',['duScroll','ngAnimate'])

  salterhebble.config(['$animateProvider', function ($animateProvider){
  
  $animateProvider.classNameFilter(/angular-animate/);
}])

salterhebble.directive('scroller2', function($window) {
	
    return function(scope, element, attrs) {
    	console.log(this)


    	
        angular.element($window).bind("scroll", function() {
     	var h1 = document.querySelector("#header1");
var h1top = h1.getBoundingClientRect().top;

        	var h2 = document.querySelector("#header2down");
var h2top = h2.getBoundingClientRect().top;

        	var h3 = document.querySelector("#header3");
var h3top = h3.getBoundingClientRect().top;
var h3bottom = h3.getBoundingClientRect();
var footer = document.querySelector("#footer");
var footertop = footer.getBoundingClientRect().top;
var footerbottom = footer.getBoundingClientRect().bottom;
console.log("JS top: "+footertop);
console.log("JS bottom: "+footerbottom);
        	  

console.log(h3top)
if (h3top <1){
	  	scope.aboutme = false
			scope.projects = false
			scope.contacts = true
}
            else  if (h2top >= 1) {
           
                 scope.aboutme = false;
                 	scope.projects = true
			scope.contacts = false
  
             } else if (h2top < 1) {
             
                 		scope.aboutme = true
			scope.projects = false
			scope.contacts = false
     
             } else{
          
             	scope.aboutme = false
			scope.projects = true
			scope.contacts = false
}
            scope.$apply();
        });
    };
});

// salterhebble.directive('scroller', function($timeout) {
// 	console.log("scroller")
//     return {
//         restrict: 'A', // this gets tacked on to an existing <div>
//         scope: {},
//         link: function(scope, elm, attrs) {
//             var raw = elm[0];  // get raw element object to access its scrollTop property
            
//             elm.bind('scroll', function() {
//                 // remember where we are
//                 // rememberService.scrollTop = raw.scrollTop;
//             });

//             // Need to wait until the digest cycle is complete to apply this property change to the element.
//             $timeout(function() {
//                 // raw.scrollTop = rememberService.scrollTop;
//             });
//         }
//     };
// })



 

salterhebble.controller('siteController', function($scope,$document){
	 

	console.log("hello")
	$scope.projects = true

	  $scope.scroll = 0;

	$scope.showProjects = function(){
		
	
			$scope.projects = true
	
	}

		$scope.showAboutMe = function(){
			console.log("hello2")
			$scope.aboutme = true
	
			$scope.showContacts = function(){
				$scope.contacts = true
			}
	}




})

