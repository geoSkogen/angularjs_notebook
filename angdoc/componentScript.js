//this doesn't work and I can't figure out why
//UPDATE:  use angular source script instead of CDN . .  weird
listCompApp.component('albumList', {
  template: '<ul>' +
              '<li ng-repeat="album in $ctrl.albums">' +
              '<span><em>{{ album.title }}</em></span>' +
              '<p>{{ album.artist }}</p>' +
              '</li>' +
            '</ul>',
   controller: function albumListController() {
     this.albums = [
       { artist: "Upsilon Acrux", title: "Radian Futura" },
       { artist: "Secret Chiefs 3", title: "Book of Horizons"},
       { artist: "Kayo Dot", title: "Choirs of the Eye"}
     ];
   }
});

document.getElementById("testMe").innerHTML = "angular";
