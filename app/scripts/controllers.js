'use strict';

var app = angular.module('confusionApp');

app.controller('MenuController',['$scope', 'menuFactory', function($scope, menuFactory) {
    var dishes = menuFactory.getDishes();

    $scope.tab = 1;
    $scope.dishes = dishes;
    $scope.filtText = ''; // Filter
    $scope.showDetails = false;

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
        // if($scope.tab === value){
        //     return true;
        // }
        // return false;
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
app.controller('FeedbackController', ['$scope', function($scope){

    $scope.sendFeedback = function(){

        console.log($scope.feedback);
        if($scope.feedback.agree && ($scope.feedback.mychannel === "" || $scope.feedback.mychannel === null) && !$scope.feedback.mychannel){
            $scope.invalidChannelSelection = true;
            console.log('incorrect');
        }else{
            $scope.invalidChannelSelection = false;
            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:""};
            $scope.feedback.mychannel = "";
            $scope.feedbackForm.$setPristine();
            console.log($scope.feedback);
        }
    };

}]);

// Dishes Details
app.controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

    var dish = menuFactory.getDish(parseInt($stateParams.id, 10));
    $scope.dish = dish;
    $scope.filt = "";

}]);

// DishComments
app.controller('DishCommentController', ['$scope', function($scope){

    $scope.comment = {rating:5, comment:"", author:"", date:""};

    $scope.submitComment = function(){

        console.log($scope.comment);
        $scope.comment.date = new Date().toISOString();
        $scope.dish.comments.push($scope.comment);
        $scope.comment = {rating:5, comment:"", author:"", date:""};
        $scope.commentForm.$setPristine();
    };
}]);

// Index Controller
app.controller('IndexController', ['$scope', 'menuFactory', 'corporateService', function($scope, menuFactory, corporateService){

    $scope.dishes = menuFactory.getDishes();
    $scope.dish = menuFactory.getRandomDish();
    $scope.promotion = menuFactory.getPromotion(0);
    $scope.ceo = corporateService.getLeader(0);

}]);

app.controller('AboutController', ['$scope', 'corporateService',function($scope, corporateService){

    $scope.leaders = corporateService.getLeaders();

}]);