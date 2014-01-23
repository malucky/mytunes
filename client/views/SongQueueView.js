// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  // initialize: function() {
  // },

  // render: function() {
  //   return this.$el;
  // }
  tagName: "table",

  initialize: function() {
    //this.on('change', this.render);
    _.bindAll(this, 'render');
    //this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render,this);
    window.vent.bind('enqueue', this.render);
    window.vent.bind('dequeue', this.render);
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    console.log('rendering');
    this.$el.children().detach();
    this.$el.html('<th>Song queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
