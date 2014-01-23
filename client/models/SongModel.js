// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
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
    console.log('ended');
    this.trigger('ended', this);
  }
});
