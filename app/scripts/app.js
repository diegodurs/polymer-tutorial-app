(function (document) {
  'use strict';

  var tabs = document.querySelector('paper-tabs');
  tabs.addEventListener('core-select', function() {
    console.log("Selected: " + tabs.selected);
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
