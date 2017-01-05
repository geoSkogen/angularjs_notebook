//this doesn't work and I can't figure out why
//UPDATE:  use angular source script instead of CDN . .  weird
angular.module("albumList").component('albumList', {//Component Definition Object
    templateUrl: 'components.template.html',
    
    //as best practice, run this code server-side with 'templateUrl:' in place
    //of 'template:', where the referred-to document contains the HTML in
    //the following javascript string
    //place this component template doc, the app, and component script in a
    //subdirectory called album_list, eg
    
    //IN OTHER WORDS, don't do this:
    
    /*
    template: '<ul>' +
    '<li ng-repeat="album in $ctrl.albums">' +
    '<span><em>{{ album.title }}</em></span>' +
    '<p>{{ album.artist }}</p>' +
    '</li>' +
    '</ul>',
     */

    
    
    
    //OK, WHY don't the JSON data show up? Refer to get/httpControl.js for 
    //a successful application with the same function---differences, uses a .php
    //file instead of a .json file, and passes $scope to function call, note:
    //doesn't, make a difference . . . what's up?
    /*
    controller: ['$http', function albumListController($http) {
        var self = this;
        //self.orderSel = "year";
        $http.get('albums.json').then(function (response) {
            self.albums = response.data;
        });
       }
      ]
    */


    //this adds data to an instance of controller rather than to a scope;
    //this is what's known as an isolate scope
    controller: function albumListController() {
        this.albums = [
        { artist: "Upsilon Acrux", title: "Radian Futura", year: 2009, imgUrl: "images/upsilon_acruxRF.jpg", albumId: "radian-futura" },
        { artist: "Secret Chiefs 3", title: "Book of Horizons", year: 2004, imgUrl: "images/secret_chiefs_3BH.jpg", albumId: "book-of-horizons" },
        { artist: "Kayo Dot", title: "Choirs of the Eye", year: 2003, imgUrl: "images/kayo_dotCE.jpg", albumId: "choirs-of-the-eye" },
        { artist: "Sleepytime Gorilla Museum", title: "In Glorious Times", year: 2007, imgUrl: "images/sleepytime_gorilla_museumIGT.jpg", albumId: "in-glorious-times" },
        { artist: "Magma", title: "Kobaia", year: 1970, imgUrl: "images/magmaK.jpg", albumId: "kobaia" },
        { artist: "Hammers of Misfortune", title: "August Engine", year: 2003, imgUrl: "images/hammers_of_misfortuneAE.jpg", albumId: "august-engine" },
        { artist: "Comus", title: "First Utterance", year: 1971, imgUrl: "images/comusFU.jpg", albumId: "first-utterance"},
        { artist: "Judas Priest", title: "Sad Wings of Destiny", year: 1976, imgUrl: "images/judas_priestSWD.jpg", albumId: "sad-wings-of-destiny" },
        { artist: "Weakling", title: "Dead as Dreams", year: 2000, imgUrl: "images/weaklingDD.jpg", albumId: "dead-as-dreams" },
        { artist: "Iron Maiden", title: "Killers", year: 1981, imgUrl: "images/iron_maidenK.jpg", albumId: "killers" },
        { artist: "Death", title: "Individual Thought Patterns", year: 1993, imgUrl: "images/deathITP.jpg", albumId: "individual-thought-patterns" },
        { artist: "Ulver", title: "Nattens Madrigal", year: 1997, imgUrl: "images/ulverNM.jpg", albumId: "nattens-madrigal" },
        { artist: "Gorguts", title: "Obscura", year: 1998, imgUrl: "images/gorgutsO.jpg", albumId: "obscura"  },
        { artist: "Genesis", title: "Nursery Cryme", year: 1971, imgUrl: "images/genesisNC.jpeg", albumId: "nursery-cryme" }
        ];
    }
    
});

//document.getElementById("testMe").innerHTML = "angular";
