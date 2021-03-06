'use strict';

var _debug = require('./debug');

var _debug2 = _interopRequireDefault(_debug);

var _checked = require('./assertions/checked');

var _checked2 = _interopRequireDefault(_checked);

var _className = require('./assertions/className');

var _className2 = _interopRequireDefault(_className);

var _contain = require('./assertions/contain');

var _contain2 = _interopRequireDefault(_contain);

var _descendants = require('./assertions/descendants');

var _descendants2 = _interopRequireDefault(_descendants);

var _disabled = require('./assertions/disabled');

var _disabled2 = _interopRequireDefault(_disabled);

var _empty = require('./assertions/empty');

var _empty2 = _interopRequireDefault(_empty);

var _exist = require('./assertions/exist');

var _exist2 = _interopRequireDefault(_exist);

var _generic = require('./assertions/generic');

var _generic2 = _interopRequireDefault(_generic);

var _html = require('./assertions/html');

var _html2 = _interopRequireDefault(_html);

var _id = require('./assertions/id');

var _id2 = _interopRequireDefault(_id);

var _match = require('./assertions/match');

var _match2 = _interopRequireDefault(_match);

var _ref = require('./assertions/ref');

var _ref2 = _interopRequireDefault(_ref);

var _selected = require('./assertions/selected');

var _selected2 = _interopRequireDefault(_selected);

var _tagName = require('./assertions/tagName');

var _tagName2 = _interopRequireDefault(_tagName);

var _text = require('./assertions/text');

var _text2 = _interopRequireDefault(_text);

var _value = require('./assertions/value');

var _value2 = _interopRequireDefault(_value);

var _exactly = require('./chains/exactly');

var _exactly2 = _interopRequireDefault(_exactly);

var _ChaiWrapper = require('./ChaiWrapper');

var _ChaiWrapper2 = _interopRequireDefault(_ChaiWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
  var debug = arguments.length <= 0 || arguments[0] === undefined ? _debug2.default : arguments[0];

  return function (chai, utils) {
    var chaiWrapper = new _ChaiWrapper2.default(chai, utils, debug);

    chaiWrapper.addAssertion((0, _generic2.default)('attr', 'attribute'), 'attr');
    chaiWrapper.addAssertion((0, _generic2.default)('data', 'data attribute'), 'data');
    chaiWrapper.addAssertion((0, _generic2.default)('style', 'CSS style property'), 'style');
    chaiWrapper.addAssertion((0, _generic2.default)('state', 'state'), 'state');
    chaiWrapper.addAssertion((0, _generic2.default)('prop', 'prop'), 'prop');

    chaiWrapper.addAssertion(_checked2.default);
    chaiWrapper.addAssertion(_className2.default);
    chaiWrapper.addAssertion(_disabled2.default);
    chaiWrapper.addAssertion(_id2.default);
    chaiWrapper.addAssertion(_selected2.default);
    chaiWrapper.addAssertion(_value2.default);
    chaiWrapper.addAssertion(_match2.default);
    chaiWrapper.addAssertion(_descendants2.default);
    chaiWrapper.addAssertion(_ref2.default);
    chaiWrapper.addAssertion(_html2.default);
    chaiWrapper.addAssertion(_tagName2.default);
    chaiWrapper.addAssertion(_text2.default);

    chaiWrapper.overwriteProperty(_empty2.default);
    chaiWrapper.addAssertion(_empty2.default, 'blank');

    chaiWrapper.overwriteProperty(_exist2.default);
    chaiWrapper.addAssertion(_exist2.default, 'present');

    chaiWrapper.overwriteChainableMethod(_contain2.default);

    chaiWrapper.addChainableMethod(_exactly2.default);
  };
};