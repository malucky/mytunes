// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'div',

  template: _.template('<span class = "artist"><%= artist %></span> : <span class = "title"><%= title %></span>'),

    events: {
    'click': function() {
      console.log("click to remove");
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
