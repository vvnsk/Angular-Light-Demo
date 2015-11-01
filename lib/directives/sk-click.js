/* global Provider */
Provider.directive('sk-click', function () {
  'use strict';
  return {
    scope: false,
    link: function (el, scope, exp) {
      el.onclick = function () {
        scope.$eval(exp);
        scope.$digest();
      };
    }
  };
});
