define(function(require, module, exports) {
  var emptyDiv = $('<div/>');
  emptyDiv.html('<h1>Hello World!</h1>').appendTo($('.hero-unit'));
  var velocity = require('velocity');
  emptyDiv.velocity({
    opacity: 0.5,
    translateY: '60%'
  }, {delay: 2000});

});