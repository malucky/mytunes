// PlayCountModel.js - Defines a backbone model class for songs.
var PlayCountModel = Backbone.Model.extend({
  count: 0,
  increment: function(){
    count++;
  }
});
