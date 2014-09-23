define(function(require, module, exports) {
  // require dependencies
  require('velocity');
  require('velocity-ui');
  var projectModel = require('models/projects');

  // app here
  $(document).ready(function() {
    var myApp = function() {
      var proj1 = new projectModel;
      var emptyDiv = $('<div/>');
      emptyDiv.html('<h1>Hello World!</h1>').appendTo($('.hero-unit'));
      emptyDiv.velocity("transition.shrinkIn", {
          stagger: 125
      })
      .velocity({
        opacity: 0.5,
        translateY: '80%'
      }, {stagger: 200})
      .velocity({
        translateY: 0,
        opacity: 0.2
      }, {duration: 1299})
      .velocity("transition.whirlIn", 1400);
    }
    myApp();
  });

});