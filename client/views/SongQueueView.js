// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  // initialize: function() {
  // },

  // render: function() {
  //   return this.$el;
  // }
  tagName: "div",
  className: "songQueue",

  initialize: function() {
    _.bindAll(this, 'render');
    this.collection.on('remove', this.render,this);
    window.vent.bind('enqueue', this.render, this);
    window.vent.bind('dequeue', this.render, this);
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html('<h1>Song Queue</h1>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
