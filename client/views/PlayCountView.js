// PlayCountView.js - Defines a backbone view class for the music library.
var PlayCountView = Backbone.View.extend({

  className: "playCount",

  initialize: function() {
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<h1>Library</h1>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
