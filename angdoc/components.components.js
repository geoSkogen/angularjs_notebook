//this doesn't work and I can't figure out why
//UPDATE:  use angular source script instead of CDN . .  weird
listCompApp.component('albumList', {//Component Definition Object
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
        { artist: "Upsilon Acrux", title: "Radian Futura", year: 2009, imgUrl: "images/upsilon_acruxRF.jpg" },
        { artist: "Secret Chiefs 3", title: "Book of Horizons", year: 2004, imgUrl: "images/secret_chiefs_3BH.jpg" },
        { artist: "Kayo Dot", title: "Choirs of the Eye", year: 2003, imgUrl: "kayo_dotCE.jpg" },
        { artist: "Sleepytime Gorilla Museum", title: "In Glorious Times", year: 2007, imgUrl: "sleepytime_gorilla_museumIGT.jpg" },
        { artist: "Magma", title: "Kobaia", year: 1970, imageUrl: "magmaK.jpg" },
        { artist: "Hammers of Misfortune", title: "August Engine", year: 2003, imageUrl: "hammers_of_misfortuneAE.jpg" },
        { artist: "Comus", title: "First Utterance", year: 1971, imageUrl: "comusFU.jpg"},
        { artist: "Judas Priest", title: "Sad Wings of Destiny", year: 1976, imageUrl: "judas_priestSWD.jpg" },
        { artist: "Weakling", title: "Dead as Dreams", year: 2000, imageUrl: "weaklingDD.jpg" },
        { artist: "Iron Maiden", title: "Killers", year: 1981, imageUrl: "iron_maidenK.jpg" },
        { artist: "Death", title: "Individual Thought Patterns", year: 1993, imageUrl: "deathITP.jpg" },
        { artist: "Ulver", title: "Nattens Madrigal", year: 1997, imgUrl: "ulverNM.jpg" },
        { artist: "Gorguts", title: "Obscura", year: 1998: imgUrl: "gorgutsO.jpg"  },
        { artist: "Genesis", title: "Nursery Cryme", year: 1971, imgUrl: "genesisNC.jpg" }
        ];
    }
});

//document.getElementById("testMe").innerHTML = "angular";
