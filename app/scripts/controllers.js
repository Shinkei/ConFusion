'use strict';

var app = angular.module('confusionApp');

app.controller('MenuController',['$scope', 'menuFactory', function($scope, menuFactory) {
    $scope.tab = 1;
    $scope.filtText = ''; // Filter
    $scope.showDetails = false;
    $scope.showMenu = false;
    $scope.message = "Loading...";

    $scope.dishes = {};
    menuFactory.getDishesResource().query(
        function(response){
            $scope.dishes = response;
            $scope.showMenu = true;
        },
        function(response){
            $scope.message = "ERROR:"+response.status+" "+response.statusText;
        }
    );

    $scope.select = function(setTab){
        $scope.tab = setTab;

        // Filter
        if(setTab === 2){
            $scope.filtText = "appetizer";
        }
        else if (setTab === 3){
            $scope.filtText = "mains";
        }
        else if (setTab === 4){
            $scope.filtText = "dessert";
        }
        else{
            $scope.filtText = "";
        }
    };

    $scope.isSelected = function(value){
        return ($scope.tab === value);
    };

    $scope.toggleDetails = function(){
        $scope.showDetails = !$scope.showDetails;
    };
}]);

// Contact controller
app.controller('ContactController',['$scope', function($scope){
    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:""};

    var channels = [{value:"tel", label:"Tel."},
                    {value:"Email", label:"Email"}];
    $scope.channels = channels;
    $scope.invalidChannelSelection = false;

}]);

// Feddback Controller
app.controller('FeedbackController', ['$scope', 'feedbackFactory', function($scope, feedbackFactory){

    $scope.sendFeedback = function(){

        console.log($scope.feedback);
        if($scope.feedback.agree && ($scope.feedback.mychannel === "" || $scope.feedback.mychannel === null) && !$scope.feedback.mychannel){
            $scope.invalidChannelSelection = true;
            console.log('incorrect');
        }else{
            $scope.invalidChannelSelection = false;
            feedbackFactory.getFeedbackResource().save($scope.feedback);
            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:""};
            $scope.feedback.mychannel = "";
            $scope.feedbackForm.$setPristine();
            console.log($scope.feedback);
        }
    };

}]);

// Dishes Details
app.controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

    $scope.showDish = false;
    $scope.message = "Loading...";
    $scope.dish = {};
    menuFactory.getDish(parseInt($stateParams.id, 10))
        .then(
            function(response){
                $scope.dish = response.data;
                $scope.showDish = true;
            },
            function(response){
                $scope.message = "ERROR: "+response.status+" "+response.statusText;
            }
        );

    $scope.filt = "";

}]);

// DishComments
app.controller('DishCommentController', ['$scope', 'menuFactory', function($scope, menuFactory){

    $scope.comment = {rating:5, comment:"", author:"", date:""};

    $scope.submitComment = function(){

        $scope.comment.date = new Date().toISOString();
        $scope.dish.comments.push($scope.comment);
        menuFactory.getDishesResource().update({id:$scope.dish.id}, $scope.dish);
        $scope.comment = {rating:5, comment:"", author:"", date:""};
        $scope.commentForm.$setPristine();
    };
}]);

// Index Controller
app.controller('IndexController', ['$scope', 'menuFactory', 'corporateService', function($scope, menuFactory, corporateService){

    $scope.showDishes = false;
    $scope.showDish = false;
    $scope.messageDishes = "Loading...";
    $scope.messageDish = "Loading...";

    $scope.dishes = {};
    menuFactory.getDishes()
        .then(
            function(response){
                $scope.dishes = response.data;
                $scope.showDishes = true;
            },
            function(response){
                $scope.messageDishes = "ERROR:"+response.status+" "+response.statusText;
            }
        );

    $scope.dish = {};
    menuFactory.getDish(0)
        .then(
            function(response){
                $scope.dish = response.data;
                $scope.showDish = true;
            },
            function(response){
                $scope.messageDish = "ERROR: "+response.status+" "+response.statusText;
            }
        );

    $scope.promotion = {};
    $scope.showPromotion = false;
    $scope.messagePromotion = "Loading...";
    menuFactory.getPromoResource().get({id:0})
        .$promise.then(
            function(response){
                $scope.promotion = response;
                $scope.showPromotion = true;
            },
            function(response){
                $scope.messagePromotion = "ERROR: "+response.status+" "+response.statusText;
            });

    $scope.ceo = {};
    $scope.showCEO = false;
    $scope.messageCEO = "Loading...";
    corporateService.getLeaderResource().get({id:0})
        .$promise.then(
            function(response){
                $scope.ceo = response;
                $scope.showCEO = true;
            },
            function(response){
                $scope.messageCEO = "ERROR: "+response.status+" "+response.statusText;
            }
        );

}]);

app.controller('AboutController', ['$scope', 'corporateService',function($scope, corporateService){
    $scope.showLeaders = false;
    $scope.messageLeaders = 'Loading...';
    $scope.leaders = {};
    corporateService.getLeaderResource().query(
        function(response){
            $scope.leaders = response;
            $scope.showLeaders = true;
        },
        function(response){
            $scope.messageLeaders = "ERROR: "+response.status+" "+response.statusText;
        }
    );

}]);