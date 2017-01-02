//this doesn't work and I can't figure out why
//UPDATE:  use angular source script instead of CDN . .  weird
listCompApp.component('albumList', {//Component Definition Object
  //as best practice, run this code server-side with 'templateUrl:' in place
  //of 'template:', where the referred-to document contains the HTML in
  //the following javascript string
  //place this component template doc, the app, and component script in a
  //subdirectory called album_list, eg
  template: '<ul>' +
  //the $ctrl is the default alias of the controller instance
              '<li ng-repeat="album in $ctrl.albums">' +
              '<span><em>{{ album.title }}</em></span>' +
              '<p>{{ album.artist }}</p>' +
              '</li>' +
            '</ul>',
   //this adds data to an instance of controller rather than to a scope;
   //this is what's known as an isolate scope
   controller: function albumListController() {
     this.albums = [
       { artist: "Upsilon Acrux", title: "Radian Futura" },
       { artist: "Secret Chiefs 3", title: "Book of Horizons"},
       { artist: "Kayo Dot", title: "Choirs of the Eye"}
     ];
   }
});

document.getElementById("testMe").innerHTML = "angular";
