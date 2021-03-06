'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _TestWrapper2 = require('./TestWrapper');

var _TestWrapper3 = _interopRequireDefault(_TestWrapper2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheerioTestWrapper = function (_TestWrapper) {
  _inherits(CheerioTestWrapper, _TestWrapper);

  function CheerioTestWrapper(wrapper) {
    _classCallCheck(this, CheerioTestWrapper);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CheerioTestWrapper).call(this));

    _this.wrapper = wrapper;
    return _this;
  }

  _createClass(CheerioTestWrapper, [{
    key: 'inspect',
    value: function inspect() {
      return 'the node in <??? />';
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      if (this.tagName() === 'noscript') {
        return true;
      }

      return _get(Object.getPrototypeOf(CheerioTestWrapper.prototype), 'isEmpty', this).call(this);
    }
  }, {
    key: 'attr',
    value: function attr(name) {
      return this.el.attr(name);
    }
  }, {
    key: 'html',
    value: function html() {
      return this.el.toString();
    }
  }, {
    key: 'style',
    value: function style(name) {
      return this.el.css(name);
    }
  }, {
    key: 'tagName',
    value: function tagName() {
      return this.el[0].name;
    }
  }, {
    key: 'data',
    value: function data(name) {
      return this.el.data(name);
    }
  }, {
    key: 'hasClass',
    value: function hasClass(name) {
      return this.el.hasClass(name);
    }
  }, {
    key: 'classNames',
    value: function classNames() {
      return this.el.attr('class');
    }
  }, {
    key: 'value',
    value: function value() {
      return this.el.attr('value');
    }
  }, {
    key: 'id',
    value: function id() {
      return this.el.attr('id');
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.is(':checked');
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.is(':disabled');
    }
  }, {
    key: 'isSelected',
    value: function isSelected() {
      return this.is(':selected');
    }
  }, {
    key: 'is',
    value: function is(selector) {
      return this.el.is(selector);
    }
  }, {
    key: 'hasNode',
    value: function hasNode() {
      throw new Error('static rendering does not support `contain` yet');
    }
  }, {
    key: 'state',
    value: function state() {
      throw new Error('static rendering does not support `state` yet');
    }
  }, {
    key: 'prop',
    value: function prop() {
      throw new Error('static rendering does not support `prop` yet');
    }
  }, {
    key: 'hasRef',
    value: function hasRef() {
      throw new Error('static rendering does not support refs');
    }
  }, {
    key: 'el',
    get: function get() {
      if (!this.__el) {
        if (this.wrapper.first()['0'].type === 'root') {
          this.__el = this.wrapper.children().first();
        } else {
          this.__el = this.wrapper.first();
        }
      }

      return this.__el;
    }
  }]);

  return CheerioTestWrapper;
}(_TestWrapper3.default);

exports.default = CheerioTestWrapper;