"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _difference = _interopRequireDefault(require("lodash/difference"));

var _simpleUi = require("@yosmy/simple-ui");

var _compoundUi = require("@yosmy/compound-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputPassword =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputPassword, _React$Component);

  function InputPassword() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InputPassword);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InputPassword)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      password: null,
      error: null,
      progress: false
    });

    _defineProperty(_assertThisInitialized(_this), "_handleSubmit", function () {
      _this.setState({
        error: null,
        progress: true
      }, function () {
        _this.props.onFinish(_this.state.password, // onInvalidPassword
        function () {
          _this.setState({
            error: "El pin es incorrecto. Intente otra vez",
            progress: false
          });
        });
      });
    });

    return _this;
  }

  _createClass(InputPassword, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return (0, _difference["default"])(this.state, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(this.props.ui.layout, {
        info: _react["default"].createElement(_compoundUi.Phone, {
          country: this.props.phone.country,
          prefix: this.props.phone.prefix,
          number: this.props.phone.number
        }),
        input: _react["default"].createElement(_simpleUi.Container, {
          align: {
            alignItems: "center"
          }
        }, _react["default"].createElement(_simpleUi.Input, {
          start: this.props.ui.icons.objects.password,
          value: this.state.password,
          placeholder: "Pin",
          keyboard: "number",
          secure: true,
          onChange: function onChange(value) {
            _this2.setState({
              password: value
            });
          },
          onEnter: this._handleSubmit,
          width: 200,
          margin: {
            top: 2
          }
        })),
        error: this.state.error && _react["default"].createElement(_compoundUi.Error, {
          margin: {
            top: 2
          }
        }, this.state.error),
        buttons: _react["default"].createElement(_simpleUi.Container, null, _react["default"].createElement(_simpleUi.Container, {
          flow: _simpleUi.Platform.dimensions.isXsDown(this.props.width) ? "column" : "row",
          align: _simpleUi.Platform.dimensions.isXsDown(this.props.width) ? {
            justifyContent: "flex-start",
            alignItems: "center"
          } : {
            justifyContent: "center",
            alignItems: "center"
          },
          margin: {
            top: 2
          }
        }, _react["default"].createElement(_simpleUi.Button, {
          variant: "contained",
          color: "primary",
          progress: this.state.progress,
          disabled: this.state.progress,
          onClick: this._handleSubmit
        }, _react["default"].createElement(this.props.ui.icons.actions["continue"], null), _react["default"].createElement(_simpleUi.Text, null, "Continuar")), _react["default"].createElement(_simpleUi.Button, {
          variant: "cleared",
          disabled: this.state.progress,
          onClick: this.props.onBack,
          margin: {
            top: _simpleUi.Platform.dimensions.isSmDown(this.props.width) ? 1 : undefined,
            left: _simpleUi.Platform.dimensions.isSmDown(this.props.width) ? undefined : 1
          }
        }, _react["default"].createElement(this.props.ui.icons.actions.back, null), _react["default"].createElement(_simpleUi.Text, null, "Corregir n\xFAmero"))), _react["default"].createElement(_simpleUi.Container, {
          flow: "row wrap",
          align: {
            justifyContent: "center",
            alignItems: "flex-start"
          },
          margin: {
            top: 2
          }
        }, _react["default"].createElement(_simpleUi.Button, {
          variant: "cleared",
          disabled: this.state.progress,
          onClick: this.props.onForgot
        }, _react["default"].createElement(this.props.ui.icons.objects.help, null), _react["default"].createElement(_simpleUi.Text, null, "Olvid\xE9 mi pin"))))
      });
    }
  }]);

  return InputPassword;
}(_react["default"].Component);

_defineProperty(InputPassword, "propTypes", {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired,
    // (info, error, input, buttons),
    icons: _propTypes["default"].shape({
      actions: _propTypes["default"].shape({
        "continue": _propTypes["default"].func.isRequired,
        back: _propTypes["default"].func.isRequired
      }),
      objects: _propTypes["default"].shape({
        password: _propTypes["default"].func.isRequired,
        help: _propTypes["default"].func.isRequired
      })
    }).isRequired
  }).isRequired,
  phone: _propTypes["default"].shape({
    country: _propTypes["default"].string,
    prefix: _propTypes["default"].string,
    number: _propTypes["default"].string
  }),
  onFinish: _propTypes["default"].func.isRequired,
  // (password, onInvalidPassword)
  onBack: _propTypes["default"].func.isRequired,
  // ()
  onForgot: _propTypes["default"].func.isRequired // ()

});

var _default = _simpleUi.Platform.dimensions.withWidth()(InputPassword);

exports["default"] = _default;