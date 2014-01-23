// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'div',

  template: _.template('<span class="artist"><%= artist %> : </span><span class="title"><%= title %></span> <span class = "count">Play Count: <span class="number"><%= this.model.playCount %></span></span>'),

  initialize: function(){
    _.bindAll(this, 'render');
    window.vent.bind('increment', this.render);
  },
  events: {
    'click': function() {
      console.log("click");
      this.model.enqueue();
    },
  },

  render: function(){
    console.log('re-rendering');
    return this.$el.html(this.template(this.model.attributes));
  }

});
