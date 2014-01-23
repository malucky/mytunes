// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){
    _.bindAll(this, "addSong", "removeSong", "playNext");
    // this.on('ended', function() {
    //   console.log("im done!");
    // }),
    window.vent.bind("enqueue", this.addSong);
    window.vent.bind('dequeue', this.removeSong);
    window.vent.bind('ended', this.playNext);
  },

  playFirst: function() {
    console.log('playing');
    this.models[0].play();
    this.models[0].increment();
  },

  addSong: function(song) {
    this.add(song);
    console.log(this.length);
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playNext: function(song) {
    console.log(this);
    this.remove(this.models[0]);
    if(this.length > 0) {
      this.playFirst();
    }
  },

  removeSong: function(song) {
    this.remove(song);
    if(this.length > 0) {
      this.playFirst();
    }
    console.log(this.length);
  }

});