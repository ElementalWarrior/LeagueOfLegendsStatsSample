require("source-map-support").install();
exports.ids = ["home"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/History.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.History-root-ysafb {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.History-container-WbvlL {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n}\n\n.History-flex-1yTz0 {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n\n.History-flex-1yTz0 > div {\n  margin-right: 5px;\n}\n\n.History-listUnstyled-axkE9 {\n  list-style: none inside;\n  padding: 0;\n}\n\n.History-matchHistory-3VQoK {\n  font-size: 11pt;\n  text-align: center;\n}\n\n.History-championPortrait-2OJV2 {\n  height: auto;\n  width: 50px;\n}\n\n.History-matchHistoryIcon-1AgXE {\n  height: auto;\n  width: 30px;\n}\n\n.History-matchHistoryItem-1IqI9 {\n  padding: 5px;\n  margin-bottom: 10px;\n}\n\n.History-matchWon-Q6K-P {\n  background: #ddffdd;\n  border: 1px solid #88aa88;\n}\n\n.History-matchLost-ccaT4 {\n  background: #ffdddd;\n  border: 1px solid #aa8888;\n}\n\n.History-spells-eKp3- {\n  min-width:60px;\n}\n\n.History-itemLabel-1kvK4 {\n  text-align: left;\n}\n\n.History-deathStat-WPZzv {\n  color: #ff0000;\n  font-weight: bold;\n}", "", {"version":3,"sources":["C:/Projects/battlefy/react-starter-kit/src/routes/history/History.css"],"names":[],"mappings":";AACA;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,oCAAoC;CACrC;;AAED;EACE,uBAAuB;MACnB,oBAAoB;EACxB,qBAAqB;EACrB,cAAc;EACd,YAAY;CACb;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,wBAAwB;EACxB,WAAW;CACZ;;AAED;EACE,gBAAgB;EAChB,mBAAmB;CACpB;;AAED;EACE,aAAa;EACb,YAAY;CACb;;AAED;EACE,aAAa;EACb,YAAY;CACb;;AAED;EACE,aAAa;EACb,oBAAoB;CACrB;;AAED;EACE,oBAAoB;EACpB,0BAA0B;CAC3B;;AAED;EACE,oBAAoB;EACpB,0BAA0B;CAC3B;;AAED;EACE,eAAe;CAChB;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,kBAAkB;CACnB","file":"History.css","sourcesContent":["\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n}\n\n.flex {\n  -ms-flex-align: center;\n      align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n\n.flex > div {\n  margin-right: 5px;\n}\n\n.listUnstyled {\n  list-style: none inside;\n  padding: 0;\n}\n\n.matchHistory {\n  font-size: 11pt;\n  text-align: center;\n}\n\n.championPortrait {\n  height: auto;\n  width: 50px;\n}\n\n.matchHistoryIcon {\n  height: auto;\n  width: 30px;\n}\n\n.matchHistoryItem {\n  padding: 5px;\n  margin-bottom: 10px;\n}\n\n.matchWon {\n  background: #ddffdd;\n  border: 1px solid #88aa88;\n}\n\n.matchLost {\n  background: #ffdddd;\n  border: 1px solid #aa8888;\n}\n\n.spells {\n  min-width:60px;\n}\n\n.itemLabel {\n  text-align: left;\n}\n\n.deathStat {\n  color: #ff0000;\n  font-weight: bold;\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "History-root-ysafb",
	"container": "History-container-WbvlL",
	"flex": "History-flex-1yTz0",
	"listUnstyled": "History-listUnstyled-axkE9",
	"matchHistory": "History-matchHistory-3VQoK",
	"championPortrait": "History-championPortrait-2OJV2",
	"matchHistoryIcon": "History-matchHistoryIcon-1AgXE",
	"matchHistoryItem": "History-matchHistoryItem-1IqI9",
	"matchWon": "History-matchWon-Q6K-P",
	"matchLost": "History-matchLost-ccaT4",
	"spells": "History-spells-eKp3-",
	"itemLabel": "History-itemLabel-1kvK4",
	"deathStat": "History-deathStat-WPZzv"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/home/Home.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\r\n.Home-root-fisf4 {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n  }\r\n  \r\n  .Home-container-1yZ9z {\r\n    margin: 0 auto;\r\n    padding: 0 0 40px;\r\n    max-width: var(--max-content-width);\r\n    max-width: var(--max-content-width);\r\n  }", "", {"version":3,"sources":["C:/Projects/battlefy/react-starter-kit/src/routes/home/Home.css"],"names":[],"mappings":";AACA;IACI,mBAAmB;IACnB,oBAAoB;GACrB;;EAED;IACE,eAAe;IACf,kBAAkB;IAClB,oCAAoC;IACpC,oCAAoC;GACrC","file":"Home.css","sourcesContent":["\r\n.root {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n  }\r\n  \r\n  .container {\r\n    margin: 0 auto;\r\n    padding: 0 0 40px;\r\n    max-width: var(--max-content-width);\r\n    max-width: var(--max-content-width);\r\n  }"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Home-root-fisf4",
	"container": "Home-container-1yZ9z"
};

/***/ }),

/***/ "./src/routes/history/History.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/history/History.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/routes/history/History.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _History_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/history/History.css");
/* harmony import */ var _History_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_History_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Projects\\battlefy\\react-starter-kit\\src\\routes\\history\\History.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ddragon = "https://ddragon.leagueoflegends.com/";
var imagePathVersioned = ddragon + "cdn/8.18.1/img/";
var imagePath = ddragon + "cdn/img/";

var History =
/*#__PURE__*/
function (_React$Component) {
  _inherits(History, _React$Component);

  function History() {
    _classCallCheck(this, History);

    return _possibleConstructorReturn(this, _getPrototypeOf(History).apply(this, arguments));
  }

  _createClass(History, [{
    key: "parseDuration",
    // static propTypes = {
    //   news: PropTypes.arrayOf(
    //     PropTypes.shape({
    //       title: PropTypes.string.isRequired,
    //       link: PropTypes.string.isRequired,
    //       content: PropTypes.string,
    //     }),
    //   ).isRequired,
    // };
    value: function parseDuration(seconds) {
      var formatted = '';

      if (parseInt(seconds / 3600) > 0) {
        formatted += Math.floor(seconds / 3600) + 'h ';
      }

      if (parseInt(seconds / 60) > 0) {
        formatted += Math.floor(seconds / 60) + 'm ';
      }

      formatted += seconds % 60 + 's';
      return formatted;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      console.log(this);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Summoner ", this.props.summoner.name, " Match History"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.listUnstyled + ' ' + _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.matchHistory,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.props.summoner.matches.map(function (match) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.matchHistoryItem + ' ' + (match.won ? _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.matchWon : _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.matchLost),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.flex,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.gameDuration,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, _this.parseDuration(match.gameDuration)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.gameWon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, match.won ? "You won!" : "You lost :(")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: imagePathVersioned + 'champion/' + match.championName + '.png',
          alt: match.championName,
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.championPortrait,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, match.championName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.spells,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, !match.summonerSpells || match.summonerSpells.map(function (spell) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: imagePathVersioned + 'spell/' + spell.imageUrl,
            className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.matchHistoryIcon,
            alt: spell.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          });
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.runs,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, !match.runes || match.runes.map(function (rune) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: imagePath + rune.icon,
            alt: rune.name,
            className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.matchHistoryIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          });
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, "Level ", match.championLevel), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, match.kills, " / ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.deathStat,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, match.deaths), " / ", match.assists), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, match.creepScore, " (", match.creepScorePerMinute.toFixed(2), "/min) CS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.itemLabel,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, "Items:"), match.itemsBought.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            src: imagePathVersioned + 'item/' + item.imageUrl,
            alt: item.name,
            className: _History_css__WEBPACK_IMPORTED_MODULE_3___default.a.matchHistoryIcon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          });
        }))));
      }))));
    }
  }]);

  return History;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_History_css__WEBPACK_IMPORTED_MODULE_3___default.a)(History));

/***/ }),

/***/ "./src/routes/history/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _History__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/routes/history/History.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Layout/Layout.js");
var _jsxFileName = "C:\\Projects\\battlefy\\react-starter-kit\\src\\routes\\history\\index.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





function action(_x) {
  return _action.apply(this, arguments);
}

function _action() {
  _action = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var fetch,
        params,
        summonerName,
        resp,
        _ref2,
        data,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fetch = _ref.fetch, params = _ref.params;
            console.log(_args);
            summonerName = params[0];

            if (!(!summonerName || !summonerName.trim())) {
              _context.next = 5;
              break;
            }

            throw new Error("Must pass summoner name.");

          case 5:
            _context.next = 7;
            return fetch('/graphql', {
              body: JSON.stringify({
                query: '{summoner(name:"' + summonerName + '"){matches{gameId, gameDuration,summonerSpells{id, name, key, description,imageUrl},championName, won, kills,deaths,assists, championLevel,creepScore,creepScorePerMinute, itemsBought{name, description, plaintext, imageUrl}, runes{id, key, name, icon, shortDesc, longDesc}}}}'
              })
            });

          case 7:
            resp = _context.sent;
            _context.next = 10;
            return resp.json();

          case 10:
            _ref2 = _context.sent;
            data = _ref2.data;

            if (!(!data || !data.summoner)) {
              _context.next = 14;
              break;
            }

            throw new Error('Failed to load the match data.');

          case 14:
            return _context.abrupt("return", {
              title: 'Match history for ' + summonerName,
              chunks: ['home'],
              component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_History__WEBPACK_IMPORTED_MODULE_1__["default"], {
                summoner: data.summoner,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              }))
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _action.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),

/***/ "./src/routes/home/Home.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./src/routes/home/Home.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/routes/home/Home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/home/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Link/Link.js");
var _jsxFileName = "C:\\Projects\\battlefy\\react-starter-kit\\src\\routes\\home\\Home.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      summonerName: 'BFY Meowington',
      loading: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "inputChange", function (event) {
      _this.setState({
        summonerName: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "click", function () {
      _this.setState({
        loading: true
      });
    });

    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Home_css__WEBPACK_IMPORTED_MODULE_2___default.a.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, this.state.loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Loading..."), !this.state.loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Home_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Enter your summoner name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.summonerName,
        onChange: this.inputChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        to: "summoner/" + this.state.summonerName,
        onClick: this.click,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Show my history")));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_Home_css__WEBPACK_IMPORTED_MODULE_2___default.a)(Home));

/***/ }),

/***/ "./src/routes/home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/routes/home/Home.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Layout/Layout.js");
var _jsxFileName = "C:\\Projects\\battlefy\\react-starter-kit\\src\\routes\\home\\index.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





function action(_x) {
  return _action.apply(this, arguments);
}

function _action() {
  _action = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var fetch, params;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fetch = _ref.fetch, params = _ref.params;
            return _context.abrupt("return", {
              title: "Home",
              chunks: ['home'],
              component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 9
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 9
                },
                __self: this
              }))
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _action.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2hvbWUuanMiLCJzb3VyY2VzIjpbIkM6L1Byb2plY3RzL2JhdHRsZWZ5L3JlYWN0LXN0YXJ0ZXIta2l0L3NyYy9yb3V0ZXMvaGlzdG9yeS9IaXN0b3J5LmNzcyIsIkM6L1Byb2plY3RzL2JhdHRsZWZ5L3JlYWN0LXN0YXJ0ZXIta2l0L3NyYy9yb3V0ZXMvaG9tZS9Ib21lLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2hpc3RvcnkvSGlzdG9yeS5jc3M/NTQwOCIsIkM6L1Byb2plY3RzL2JhdHRsZWZ5L3JlYWN0LXN0YXJ0ZXIta2l0L3NyYy9yb3V0ZXMvaGlzdG9yeS9IaXN0b3J5LmpzIiwiQzovUHJvamVjdHMvYmF0dGxlZnkvcmVhY3Qtc3RhcnRlci1raXQvc3JjL3JvdXRlcy9oaXN0b3J5L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvaG9tZS9Ib21lLmNzcz85ODYzIiwiQzovUHJvamVjdHMvYmF0dGxlZnkvcmVhY3Qtc3RhcnRlci1raXQvc3JjL3JvdXRlcy9ob21lL0hvbWUuanMiLCJDOi9Qcm9qZWN0cy9iYXR0bGVmeS9yZWFjdC1zdGFydGVyLWtpdC9zcmMvcm91dGVzL2hvbWUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4uSGlzdG9yeS1yb290LXlzYWZiIHtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5IaXN0b3J5LWNvbnRhaW5lci1XYnZsTCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMCA0MHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBtYXgtd2lkdGg6IHZhcigtLW1heC1jb250ZW50LXdpZHRoKTtcXG59XFxuXFxuLkhpc3RvcnktZmxleC0xeVR6MCB7XFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLkhpc3RvcnktZmxleC0xeVR6MCA+IGRpdiB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLkhpc3RvcnktbGlzdFVuc3R5bGVkLWF4a0U5IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmUgaW5zaWRlO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLkhpc3RvcnktbWF0Y2hIaXN0b3J5LTNWUW9LIHtcXG4gIGZvbnQtc2l6ZTogMTFwdDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLkhpc3RvcnktY2hhbXBpb25Qb3J0cmFpdC0yT0pWMiB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNTBweDtcXG59XFxuXFxuLkhpc3RvcnktbWF0Y2hIaXN0b3J5SWNvbi0xQWdYRSB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLkhpc3RvcnktbWF0Y2hIaXN0b3J5SXRlbS0xSXFJOSB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uSGlzdG9yeS1tYXRjaFdvbi1RNkstUCB7XFxuICBiYWNrZ3JvdW5kOiAjZGRmZmRkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4YWE4ODtcXG59XFxuXFxuLkhpc3RvcnktbWF0Y2hMb3N0LWNjYVQ0IHtcXG4gIGJhY2tncm91bmQ6ICNmZmRkZGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWE4ODg4O1xcbn1cXG5cXG4uSGlzdG9yeS1zcGVsbHMtZUtwMy0ge1xcbiAgbWluLXdpZHRoOjYwcHg7XFxufVxcblxcbi5IaXN0b3J5LWl0ZW1MYWJlbC0xa3ZLNCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uSGlzdG9yeS1kZWF0aFN0YXQtV1BaenYge1xcbiAgY29sb3I6ICNmZjAwMDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1Byb2plY3RzL2JhdHRsZWZ5L3JlYWN0LXN0YXJ0ZXIta2l0L3NyYy9yb3V0ZXMvaGlzdG9yeS9IaXN0b3J5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7RUFDRTs7Z0ZBRThFOztFQUU5RSxrRUFBa0U7O0VBRWxFOztnRkFFOEU7O0VBRTlFLDRCQUE0Qjs7RUFFNUI7O2dGQUU4RTs7RUFFOUUsdUJBQXVCLEVBQUUsZ0NBQWdDO0VBQ3pELHVCQUF1QixFQUFFLDJCQUEyQjtFQUNwRCx1QkFBdUIsRUFBRSw2QkFBNkI7RUFDdEQsd0JBQXdCLENBQUMsaUNBQWlDO0NBQzNEOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG9DQUFvQztDQUNyQzs7QUFFRDtFQUNFLHVCQUF1QjtNQUNuQixvQkFBb0I7RUFDeEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsV0FBVztDQUNaOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtDQUNiOztBQUVEO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQiwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsMEJBQTBCO0NBQzNCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7Q0FDbkJcIixcImZpbGVcIjpcIkhpc3RvcnkuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4ucm9vdCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAwIDQwcHg7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIG1heC13aWR0aDogdmFyKC0tbWF4LWNvbnRlbnQtd2lkdGgpO1xcbn1cXG5cXG4uZmxleCB7XFxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZsZXggPiBkaXYge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5saXN0VW5zdHlsZWQge1xcbiAgbGlzdC1zdHlsZTogbm9uZSBpbnNpZGU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWF0Y2hIaXN0b3J5IHtcXG4gIGZvbnQtc2l6ZTogMTFwdDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNoYW1waW9uUG9ydHJhaXQge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5tYXRjaEhpc3RvcnlJY29uIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4ubWF0Y2hIaXN0b3J5SXRlbSB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubWF0Y2hXb24ge1xcbiAgYmFja2dyb3VuZDogI2RkZmZkZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4OGFhODg7XFxufVxcblxcbi5tYXRjaExvc3Qge1xcbiAgYmFja2dyb3VuZDogI2ZmZGRkZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYTg4ODg7XFxufVxcblxcbi5zcGVsbHMge1xcbiAgbWluLXdpZHRoOjYwcHg7XFxufVxcblxcbi5pdGVtTGFiZWwge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmRlYXRoU3RhdCB7XFxuICBjb2xvcjogI2ZmMDAwMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkhpc3Rvcnktcm9vdC15c2FmYlwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkhpc3RvcnktY29udGFpbmVyLVdidmxMXCIsXG5cdFwiZmxleFwiOiBcIkhpc3RvcnktZmxleC0xeVR6MFwiLFxuXHRcImxpc3RVbnN0eWxlZFwiOiBcIkhpc3RvcnktbGlzdFVuc3R5bGVkLWF4a0U5XCIsXG5cdFwibWF0Y2hIaXN0b3J5XCI6IFwiSGlzdG9yeS1tYXRjaEhpc3RvcnktM1ZRb0tcIixcblx0XCJjaGFtcGlvblBvcnRyYWl0XCI6IFwiSGlzdG9yeS1jaGFtcGlvblBvcnRyYWl0LTJPSlYyXCIsXG5cdFwibWF0Y2hIaXN0b3J5SWNvblwiOiBcIkhpc3RvcnktbWF0Y2hIaXN0b3J5SWNvbi0xQWdYRVwiLFxuXHRcIm1hdGNoSGlzdG9yeUl0ZW1cIjogXCJIaXN0b3J5LW1hdGNoSGlzdG9yeUl0ZW0tMUlxSTlcIixcblx0XCJtYXRjaFdvblwiOiBcIkhpc3RvcnktbWF0Y2hXb24tUTZLLVBcIixcblx0XCJtYXRjaExvc3RcIjogXCJIaXN0b3J5LW1hdGNoTG9zdC1jY2FUNFwiLFxuXHRcInNwZWxsc1wiOiBcIkhpc3Rvcnktc3BlbGxzLWVLcDMtXCIsXG5cdFwiaXRlbUxhYmVsXCI6IFwiSGlzdG9yeS1pdGVtTGFiZWwtMWt2SzRcIixcblx0XCJkZWF0aFN0YXRcIjogXCJIaXN0b3J5LWRlYXRoU3RhdC1XUFp6dlwiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4uSG9tZS1yb290LWZpc2Y0IHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuSG9tZS1jb250YWluZXItMXlaOXoge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMCAwIDQwcHg7XFxyXFxuICAgIG1heC13aWR0aDogdmFyKC0tbWF4LWNvbnRlbnQtd2lkdGgpO1xcclxcbiAgICBtYXgtd2lkdGg6IHZhcigtLW1heC1jb250ZW50LXdpZHRoKTtcXHJcXG4gIH1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovUHJvamVjdHMvYmF0dGxlZnkvcmVhY3Qtc3RhcnRlci1raXQvc3JjL3JvdXRlcy9ob21lL0hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7R0FDckI7O0VBRUQ7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxvQ0FBb0M7R0FDckNcIixcImZpbGVcIjpcIkhvbWUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi5yb290IHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDAgMCA0MHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IHZhcigtLW1heC1jb250ZW50LXdpZHRoKTtcXHJcXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJIb21lLXJvb3QtZmlzZjRcIixcblx0XCJjb250YWluZXJcIjogXCJIb21lLWNvbnRhaW5lci0xeVo5elwiXG59OyIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vSGlzdG9yeS5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi9pbnNlcnRDc3MuanNcIik7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBtb2R1bGUuZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50LnRvU3RyaW5nKCk7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuICAgIFxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vSGlzdG9yeS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9IaXN0b3J5LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9IaXN0b3J5LmNzcyc7XG5cbmNvbnN0IGRkcmFnb24gPSBcImh0dHBzOi8vZGRyYWdvbi5sZWFndWVvZmxlZ2VuZHMuY29tL1wiO1xuY29uc3QgaW1hZ2VQYXRoVmVyc2lvbmVkID0gZGRyYWdvbiArIFwiY2RuLzguMTguMS9pbWcvXCI7XG5jb25zdCBpbWFnZVBhdGggPSBkZHJhZ29uICsgXCJjZG4vaW1nL1wiO1xuY2xhc3MgSGlzdG9yeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gIC8vICAgbmV3czogUHJvcFR5cGVzLmFycmF5T2YoXG4gIC8vICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAvLyAgICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAvLyAgICAgICBsaW5rOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIC8vICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8vICAgICB9KSxcbiAgLy8gICApLmlzUmVxdWlyZWQsXG4gIC8vIH07XG4gIFxuICBwYXJzZUR1cmF0aW9uKHNlY29uZHMpIHtcbiAgICBsZXQgZm9ybWF0dGVkID0gJyc7XG4gICAgaWYocGFyc2VJbnQoc2Vjb25kcyAvIDM2MDApID4gMCkge1xuICAgICAgZm9ybWF0dGVkICs9IE1hdGguZmxvb3Ioc2Vjb25kcy8zNjAwKSArICdoICc7XG4gICAgfVxuICAgIGlmKHBhcnNlSW50KHNlY29uZHMgLyA2MCkgPiAwKSB7XG4gICAgICBmb3JtYXR0ZWQgKz0gTWF0aC5mbG9vcihzZWNvbmRzLzYwKSArICdtICc7XG4gICAgfVxuICAgIGZvcm1hdHRlZCArPSBzZWNvbmRzICUgNjAgKyAncyc7XG4gICAgcmV0dXJuIGZvcm1hdHRlZDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGgxPlN1bW1vbmVyIHt0aGlzLnByb3BzLnN1bW1vbmVyLm5hbWV9IE1hdGNoIEhpc3Rvcnk8L2gxPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3MubGlzdFVuc3R5bGVkICsgJyAnICsgcy5tYXRjaEhpc3Rvcnl9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuc3VtbW9uZXIubWF0Y2hlcy5tYXAobWF0Y2ggPT4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzLm1hdGNoSGlzdG9yeUl0ZW0gKyAnICcgKyAobWF0Y2gud29uID8gcy5tYXRjaFdvbiA6IHMubWF0Y2hMb3N0KX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZmxleH0+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmdhbWVEdXJhdGlvbn0+e3RoaXMucGFyc2VEdXJhdGlvbihtYXRjaC5nYW1lRHVyYXRpb24pfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5nYW1lV29ufT57bWF0Y2gud29uID8gXCJZb3Ugd29uIVwiOiBcIllvdSBsb3N0IDooXCJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VQYXRoVmVyc2lvbmVkICsgJ2NoYW1waW9uLycgKyBtYXRjaC5jaGFtcGlvbk5hbWUgKyAnLnBuZyd9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXttYXRjaC5jaGFtcGlvbk5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmNoYW1waW9uUG9ydHJhaXR9XG4gICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PnttYXRjaC5jaGFtcGlvbk5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc3BlbGxzfT57IW1hdGNoLnN1bW1vbmVyU3BlbGxzIHx8IG1hdGNoLnN1bW1vbmVyU3BlbGxzLm1hcChzcGVsbCA9PiBcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlUGF0aFZlcnNpb25lZCArICdzcGVsbC8nICsgc3BlbGwuaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MubWF0Y2hIaXN0b3J5SWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17c3BlbGwubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5ydW5zfT57IW1hdGNoLnJ1bmVzIHx8IG1hdGNoLnJ1bmVzLm1hcChydW5lID0+IFxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VQYXRoICsgcnVuZS5pY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtydW5lLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MubWF0Y2hIaXN0b3J5SWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5MZXZlbCB7bWF0Y2guY2hhbXBpb25MZXZlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57bWF0Y2gua2lsbHN9IC8gPHNwYW4gY2xhc3NOYW1lPXtzLmRlYXRoU3RhdH0+e21hdGNoLmRlYXRoc308L3NwYW4+IC8ge21hdGNoLmFzc2lzdHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e21hdGNoLmNyZWVwU2NvcmV9ICh7bWF0Y2guY3JlZXBTY29yZVBlck1pbnV0ZS50b0ZpeGVkKDIpfS9taW4pIENTPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaXRlbUxhYmVsfT5JdGVtczo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge21hdGNoLml0ZW1zQm91Z2h0Lm1hcChpdGVtID0+IFxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VQYXRoVmVyc2lvbmVkICsgJ2l0ZW0vJyArIGl0ZW0uaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5tYXRjaEhpc3RvcnlJY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEhpc3RvcnkpO1xuIiwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhpc3RvcnkgZnJvbSAnLi9IaXN0b3J5JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5hc3luYyBmdW5jdGlvbiBhY3Rpb24oeyBmZXRjaCwgcGFyYW1zIH0pIHtcbiAgY29uc29sZS5sb2coYXJndW1lbnRzKTtcbiAgbGV0IHN1bW1vbmVyTmFtZT0gcGFyYW1zWzBdO1xuICBpZighc3VtbW9uZXJOYW1lIHx8ICFzdW1tb25lck5hbWUudHJpbSgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBwYXNzIHN1bW1vbmVyIG5hbWUuXCIpO1xuICB9XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgcXVlcnk6ICd7c3VtbW9uZXIobmFtZTpcIicgKyBzdW1tb25lck5hbWUgKyAnXCIpe21hdGNoZXN7Z2FtZUlkLCBnYW1lRHVyYXRpb24sc3VtbW9uZXJTcGVsbHN7aWQsIG5hbWUsIGtleSwgZGVzY3JpcHRpb24saW1hZ2VVcmx9LGNoYW1waW9uTmFtZSwgd29uLCBraWxscyxkZWF0aHMsYXNzaXN0cywgY2hhbXBpb25MZXZlbCxjcmVlcFNjb3JlLGNyZWVwU2NvcmVQZXJNaW51dGUsIGl0ZW1zQm91Z2h0e25hbWUsIGRlc2NyaXB0aW9uLCBwbGFpbnRleHQsIGltYWdlVXJsfSwgcnVuZXN7aWQsIGtleSwgbmFtZSwgaWNvbiwgc2hvcnREZXNjLCBsb25nRGVzY319fX0nLFxuICAgIH0pLFxuICB9KTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgaWYgKCFkYXRhIHx8ICFkYXRhLnN1bW1vbmVyKSB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHRoZSBtYXRjaCBkYXRhLicpO1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnTWF0Y2ggaGlzdG9yeSBmb3IgJyArIHN1bW1vbmVyTmFtZSxcbiAgICBjaHVua3M6IFsnaG9tZSddLFxuICAgIGNvbXBvbmVudDogKDxMYXlvdXQ+PEhpc3Rvcnkgc3VtbW9uZXI9e2RhdGEuc3VtbW9uZXJ9Lz48L0xheW91dD4pLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG4iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0hvbWUuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL0hvbWUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vSG9tZS5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcclxuaW1wb3J0IHMgZnJvbSAnLi9Ib21lLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGluayc7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHN1bW1vbmVyTmFtZTogJ0JGWSBNZW93aW5ndG9uJyxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIGlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN1bW1vbmVyTmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG4gICAgY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cclxuICAgICAgICB7IXRoaXMuc3RhdGUubG9hZGluZyAmJiAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoMT5FbnRlciB5b3VyIHN1bW1vbmVyIG5hbWU8L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zdW1tb25lck5hbWV9IG9uQ2hhbmdlPXt0aGlzLmlucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwOzxMaW5rIHRvPXtcInN1bW1vbmVyL1wiICArIHRoaXMuc3RhdGUuc3VtbW9uZXJOYW1lIH0gb25DbGljaz17dGhpcy5jbGlja30+U2hvdyBteSBoaXN0b3J5PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEhvbWUpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWN0aW9uKHsgZmV0Y2gsIHBhcmFtcyB9KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlOiBcIkhvbWVcIixcclxuICAgIGNodW5rczogWydob21lJ10sXHJcbiAgICBjb21wb25lbnQ6ICg8TGF5b3V0PjxIb21lLz48L0xheW91dD4pLFxyXG4gIH07XHJcbiAgLy8gcmV0dXJuIHtcclxuICAvLyAgIHRpdGxlOiAnUmVhY3QgU3RhcnRlciBLaXQnLFxyXG4gIC8vICAgY2h1bmtzOiBbJ2hvbWUnXSxcclxuICAvLyAgIGNvbXBvbmVudDogKFxyXG4gIC8vICAgICA8TGF5b3V0PlxyXG4gIC8vICAgICAgIDxIb21lIG5ld3M9e2RhdGEubmV3c30gLz5cclxuICAvLyAgICAgPC9MYXlvdXQ+XHJcbiAgLy8gICApLFxyXG4gIC8vIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQVlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQTVDQTtBQTREQTs7OztBQXpGQTtBQUNBO0FBMkZBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBREE7QUFDQTtBQVBBO0FBTUE7QUFOQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBV0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBb0JBOzs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBWUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTs7OztBQXpCQTtBQUNBO0FBMkJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQWlCQTs7OztBIiwic291cmNlUm9vdCI6IiJ9