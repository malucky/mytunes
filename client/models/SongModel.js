// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  playCount: 0,

  retrievePlayCount: function() {
    var that = this;
    that.playCount = window.localStorage.getItem(that.get('title')) || 0;
  },

  initialize: function() {
    this.retrievePlayCount();
  },

  increment: function(){
    this.playCount++
    window.localStorage.setItem(this.get('title'), this.playCount);
    window.vent.trigger('increment', this);
  },

  play: function(){
    window.vent.trigger('play', this);
  },

  enqueue: function() {
    //this.trigger('enqueue', this);
    console.log('enqueue triggered');
    window.vent.trigger('enqueue', this);
  },

  dequeue: function() {
    window.vent.trigger('dequeue', this);
    console.log('remove triggered');
  },

  ended: function() {
    window.vent.trigger('ended', this);
    console.log('ended triggered');
  }
});
