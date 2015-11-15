Provider.directive('ngl-bind', function () {
    'use strict';
    return {
        scope: false,
        link: function (el, scope, exp) {
            el.innerHTML = scope.$eval(exp);
            scope.$watch(exp, function (val) {
                el.innerHTML = val;
            });
        }
    };
});

Provider.directive('ngl-click', function () {
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

Provider.directive('ngl-controller', function () {
    'use strict';
    return {
        scope: true,
        link: function (el, scope, exp) {
            var ctrl = Provider.get(exp + Provider.CONTROLLERS_SUFFIX);
            Provider.invoke(ctrl, { $scope: scope });
        }
    };
});

Provider.directive('ngl-model', function () {
    'use strict';
    return {
        link:  function (el, scope, exp) {
            el.onkeyup = function () {
                scope[exp] = el.value;
                scope.$digest();
            };
            scope.$watch(exp, function (val) {
                el.value = val;
            });
        }
    };
});