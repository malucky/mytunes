// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  

  initialize: function(){
    window.vent.bind("enqueue", this.addSong, this);
    window.vent.bind('dequeue', this.removeSong, this);
    window.vent.bind('ended', this.playNext, this);
  },

  playFirst: function() {
    console.log('playing');
    if(!app.get('currentSong').get('title') || !(this.models[0].get('title') === app.get('currentSong').get('title'))){
      this.models[0].increment();
    }
    this.models[0].play();
  },

  addSong: function(song) {
    this.add(song);
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playNext: function(song) {
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
  }

});