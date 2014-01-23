// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){
    _.bindAll(this, "addSong", "removeSong");
    // this.on('ended', function() {
    //   console.log("im done!");
    // }),
    window.vent.bind("enqueue", this.addSong);
    window.vent.bind('dequeue', this.removeSong);

  },

  playFirst: function() {
    console.log('playing');
    this.models[0].play();
  },

  addSong: function(song) {
    this.add(song);
    console.log(this.length);
    if (this.length === 1) {
      this.playFirst();
    }
  },

  removeSong: function(song) {
    this.remove(song);
    console.log(this.length);
  }

});