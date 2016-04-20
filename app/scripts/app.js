'use strict';

var app = angular.module('confusionApp', []);

    app.controller('menuController', function() {
        var dishes =[{name:'Uthapizza', image:'images/uthapizza.png', category:'mains', label:'Hot', price: '4.99', description:'Aunique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vadalia onion, Guntur chillies and Buffalo Panner.', comment:''}, {name:'Zucchipakoda', image:'images/zucchipakoda.png', category:'appetizer', label:'', price:'1.99', description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarin sauce', comment:''}, {name:'Vadonut', image:'images/vadonut.png', category:'appetizer', label:'New', price:'1.99', description:'A quintessential ConFusion experience, is it a vada or is it a donut?', comment:''},{name:'ElaiCheese Cake', image:'images/elaicheesecake.png', category:'dessert', label:'', price:'2.99', description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham crust and spiced with Indian cardamoms', comment:''}];

        this.tab = 1;
        this.dishes = dishes;
        this.filtText = ''; // Filter

        this.select = function(setTab){
            this.tab = setTab;

            // Filter
            if(setTab === 2){
                this.filtText = "appetizer";
            }
            else if (setTab === 3){
                this.filtText = "mains";
            }
            else if (setTab === 4){
                this.filtText = "dessert";
            }
            else{
                this.filtText = "";
            }
        };

        this.isSelected = function(value){
            // if(this.tab === value){
            //     return true;
            // }
            // return false;
            return (this.tab === value);
        };

    });

// Dishes angular code
        var app2 = angular.module('confusionApp2',[]);
        
        app2.controller('dishDetailController', function() {

            var dish={
                          name:'Uthapizza',
                          image: 'images/uthapizza.png',
                          category: 'mains', 
                          label:'Hot',
                          price:'4.99',
                          description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                    };
            
            this.dish = dish;
            this.filt = "";
        });
// Code for the carousel and buttons
$(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
            // carousel buttons
            $("#mycarousel").carousel({interval:2000});
            $("#carousel-pause").click(function(){
                $("#mycarousel").carousel('pause');
            });
            $("#carousel-play").click(function(){
                $("#mycarousel").carousel('cycle');
            });
            $("#login").click(function(){
                $("#loginModal").modal("show");
            });
            $("#reserve").click(function(){
                $("#reservationModal").modal("show");
            });
});