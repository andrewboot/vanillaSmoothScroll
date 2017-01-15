var offset = require('document-offset');

function doScrolling(elementY, duration) {
  var startingY = window.pageYOffset;
  var diff = elementY - startingY;

  var start;

  var easing = function (t) {
    return (t < 0.5) ? (4 * t * t * t) : ((t - 1) * ((2 * t) - 2) * ((2 * t) - 2)) + 1;
  };

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    var time = timestamp - start;
    var percent = Math.min(time / duration, 1);
    percent = easing(percent);
    window.scrollTo(0, startingY + (diff * percent));
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}


function scrollToAlias(buttonId, alias) {
  var button = document.getElementById(buttonId);
  var where = document.getElementById(alias);
  var aliasOffset = offset(where);

  button.addEventListener('click', function(e) {
    e.preventDefault();
    doScrolling(aliasOffset.top, 500);
  });
}

function smoothScrolling(buttons) {
  var allLinks;
  if (buttons.hasOwnProperty('length')) {
    allLinks = [].concat.apply([], buttons)
  } else {
    allLinks = [buttons];
  }

  for (var i = 0; i < allLinks.length; i++) {
    scrollToAlias(allLinks[i].id, allLinks[i].dataset.href);
  }
}

module.exports = smoothScrolling;
