
var Library = function(name,creator) {

  this.creator= creator;
  this.name  = name;
  this.playlists = [];

}
var Playlist = function(name) {

  this.name  = name;
  this.tracks= [];

}


var Track = function(title,rating,length) {
  this.title    = title;
  this.rating  = rating;
  this.length = length;
}



Playlist.prototype.overallRating = function() {
  let sum = 0;
  for(track of this.tracks) {
    sum += track.rating;
  }

  //sum = this.tracks.reduce((prev, track) => prev + track.rating, 0);

  return sum / this.tracks.length;
}

Playlist.prototype.totalDuration = function() {

  let sum = 0;
     for(each of this.tracks) {
      sum += each.length;
     }
  return sum
}

let NimaLib = new Library("classic rock","Nima");
let p01 = new Playlist("Pink Floyd");
let p02 = new Playlist("The doors");
let t01 = new Track("wish you were here",5,32400);
let t02 = new Track("Have a Cigar",3,31440);
let t03 = new Track("Soul Kitchen",2,20100);




p01.tracks.push(t01);
p01.tracks.push(t02);
p02.tracks.push(t03);
NimaLib.playlists.push(p01);
NimaLib.playlists.push(p02);

console.log(p01.totalDuration());


console.log(NimaLib.playlists[0])





