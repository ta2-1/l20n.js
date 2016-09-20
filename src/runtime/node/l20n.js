'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var babelPolyfill = require('babel-polyfill');
var fs = require('fs');

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/*eslint no-magic-numbers: [0]*/

var locales2rules = {
  'af': 3,
  'ak': 4,
  'am': 4,
  'ar': 1,
  'asa': 3,
  'az': 0,
  'be': 11,
  'bem': 3,
  'bez': 3,
  'bg': 3,
  'bh': 4,
  'bm': 0,
  'bn': 3,
  'bo': 0,
  'br': 20,
  'brx': 3,
  'bs': 11,
  'ca': 3,
  'cgg': 3,
  'chr': 3,
  'cs': 12,
  'cy': 17,
  'da': 3,
  'de': 3,
  'dv': 3,
  'dz': 0,
  'ee': 3,
  'el': 3,
  'en': 3,
  'eo': 3,
  'es': 3,
  'et': 3,
  'eu': 3,
  'fa': 0,
  'ff': 5,
  'fi': 3,
  'fil': 4,
  'fo': 3,
  'fr': 5,
  'fur': 3,
  'fy': 3,
  'ga': 8,
  'gd': 24,
  'gl': 3,
  'gsw': 3,
  'gu': 3,
  'guw': 4,
  'gv': 23,
  'ha': 3,
  'haw': 3,
  'he': 2,
  'hi': 4,
  'hr': 11,
  'hu': 0,
  'id': 0,
  'ig': 0,
  'ii': 0,
  'is': 3,
  'it': 3,
  'iu': 7,
  'ja': 0,
  'jmc': 3,
  'jv': 0,
  'ka': 0,
  'kab': 5,
  'kaj': 3,
  'kcg': 3,
  'kde': 0,
  'kea': 0,
  'kk': 3,
  'kl': 3,
  'km': 0,
  'kn': 0,
  'ko': 0,
  'ksb': 3,
  'ksh': 21,
  'ku': 3,
  'kw': 7,
  'lag': 18,
  'lb': 3,
  'lg': 3,
  'ln': 4,
  'lo': 0,
  'lt': 10,
  'lv': 6,
  'mas': 3,
  'mg': 4,
  'mk': 16,
  'ml': 3,
  'mn': 3,
  'mo': 9,
  'mr': 3,
  'ms': 0,
  'mt': 15,
  'my': 0,
  'nah': 3,
  'naq': 7,
  'nb': 3,
  'nd': 3,
  'ne': 3,
  'nl': 3,
  'nn': 3,
  'no': 3,
  'nr': 3,
  'nso': 4,
  'ny': 3,
  'nyn': 3,
  'om': 3,
  'or': 3,
  'pa': 3,
  'pap': 3,
  'pl': 13,
  'ps': 3,
  'pt': 3,
  'rm': 3,
  'ro': 9,
  'rof': 3,
  'ru': 11,
  'rwk': 3,
  'sah': 0,
  'saq': 3,
  'se': 7,
  'seh': 3,
  'ses': 0,
  'sg': 0,
  'sh': 11,
  'shi': 19,
  'sk': 12,
  'sl': 14,
  'sma': 7,
  'smi': 7,
  'smj': 7,
  'smn': 7,
  'sms': 7,
  'sn': 3,
  'so': 3,
  'sq': 3,
  'sr': 11,
  'ss': 3,
  'ssy': 3,
  'st': 3,
  'sv': 3,
  'sw': 3,
  'syr': 3,
  'ta': 3,
  'te': 3,
  'teo': 3,
  'th': 0,
  'ti': 4,
  'tig': 3,
  'tk': 3,
  'tl': 4,
  'tn': 3,
  'to': 0,
  'tr': 0,
  'ts': 3,
  'tzm': 22,
  'uk': 11,
  'ur': 3,
  've': 3,
  'vi': 0,
  'vun': 3,
  'wa': 4,
  'wae': 3,
  'wo': 0,
  'xh': 3,
  'xog': 3,
  'yo': 0,
  'zh': 0,
  'zu': 3
};

// utility functions for plural rules methods
function isIn(n, list) {
  return list.indexOf(n) !== -1;
}
function isBetween(n, start, end) {
  return (typeof n === 'undefined' ? 'undefined' : _typeof(n)) === (typeof start === 'undefined' ? 'undefined' : _typeof(start)) && start <= n && n <= end;
}

// list of all plural rules methods:
// map an integer to the plural form name to use
var pluralRules = {
  '0': function _() {
    return 'other';
  },
  '1': function _(n) {
    if (isBetween(n % 100, 3, 10)) {
      return 'few';
    }
    if (n === 0) {
      return 'zero';
    }
    if (isBetween(n % 100, 11, 99)) {
      return 'many';
    }
    if (n === 2) {
      return 'two';
    }
    if (n === 1) {
      return 'one';
    }
    return 'other';
  },
  '2': function _(n) {
    if (n !== 0 && n % 10 === 0) {
      return 'many';
    }
    if (n === 2) {
      return 'two';
    }
    if (n === 1) {
      return 'one';
    }
    return 'other';
  },
  '3': function _(n) {
    if (n === 1) {
      return 'one';
    }
    return 'other';
  },
  '4': function _(n) {
    if (isBetween(n, 0, 1)) {
      return 'one';
    }
    return 'other';
  },
  '5': function _(n) {
    if (isBetween(n, 0, 2) && n !== 2) {
      return 'one';
    }
    return 'other';
  },
  '6': function _(n) {
    if (n === 0) {
      return 'zero';
    }
    if (n % 10 === 1 && n % 100 !== 11) {
      return 'one';
    }
    return 'other';
  },
  '7': function _(n) {
    if (n === 2) {
      return 'two';
    }
    if (n === 1) {
      return 'one';
    }
    return 'other';
  },
  '8': function _(n) {
    if (isBetween(n, 3, 6)) {
      return 'few';
    }
    if (isBetween(n, 7, 10)) {
      return 'many';
    }
    if (n === 2) {
      return 'two';
    }
    if (n === 1) {
      return 'one';
    }
    return 'other';
  },
  '9': function _(n) {
    if (n === 0 || n !== 1 && isBetween(n % 100, 1, 19)) {
      return 'few';
    }
    if (n === 1) {
      return 'one';
    }
    return 'other';
  },
  '10': function _(n) {
    if (isBetween(n % 10, 2, 9) && !isBetween(n % 100, 11, 19)) {
      return 'few';
    }
    if (n % 10 === 1 && !isBetween(n % 100, 11, 19)) {
      return 'one';
    }
    return 'other';
  },
  '11': function _(n) {
    if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) {
      return 'few';
    }
    if (n % 10 === 0 || isBetween(n % 10, 5, 9) || isBetween(n % 100, 11, 14)) {
      return 'many';
    }
    if (n % 10 === 1 && n % 100 !== 11) {
      return 'one';
    }
    return 'other';
  },
  '12': function _(n) {
    if (isBetween(n, 2, 4)) {
      return 'few';
    }
    if (n === 1) {
      return 'one';
    }
    return 'other';
  },
  '13': function _(n) {
    if (n % 1 !== 0) {
      return 'other';
    }
    if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) {
      return 'few';
    }
    if (n !== 1 && isBetween(n % 10, 0, 1) || isBetween(n % 10, 5, 9) || isBetween(n % 100, 12, 14)) {
      return 'many';
    }
    if (n === 1) {
      return 'one';
    }
    return 'other';
  },
  '14': function _(n) {
    if (isBetween(n % 100, 3, 4)) {
      return 'few';
    }
    if (n % 100 === 2) {
      return 'two';
    }
    if (n % 100 === 1) {
      return 'one';
    }
    return 'other';
  },
  '15': function _(n) {
    if (n === 0 || isBetween(n % 100, 2, 10)) {
      return 'few';
    }
    if (isBetween(n % 100, 11, 19)) {
      return 'many';
    }
    if (n === 1) {
      return 'one';
    }
    return 'other';
  },
  '16': function _(n) {
    if (n % 10 === 1 && n !== 11) {
      return 'one';
    }
    return 'other';
  },
  '17': function _(n) {
    if (n === 3) {
      return 'few';
    }
    if (n === 0) {
      return 'zero';
    }
    if (n === 6) {
      return 'many';
    }
    if (n === 2) {
      return 'two';
    }
    if (n === 1) {
      return 'one';
    }
    return 'other';
  },
  '18': function _(n) {
    if (n === 0) {
      return 'zero';
    }
    if (isBetween(n, 0, 2) && n !== 0 && n !== 2) {
      return 'one';
    }
    return 'other';
  },
  '19': function _(n) {
    if (isBetween(n, 2, 10)) {
      return 'few';
    }
    if (isBetween(n, 0, 1)) {
      return 'one';
    }
    return 'other';
  },
  '20': function _(n) {
    if ((isBetween(n % 10, 3, 4) || n % 10 === 9) && !(isBetween(n % 100, 10, 19) || isBetween(n % 100, 70, 79) || isBetween(n % 100, 90, 99))) {
      return 'few';
    }
    if (n % 1000000 === 0 && n !== 0) {
      return 'many';
    }
    if (n % 10 === 2 && !isIn(n % 100, [12, 72, 92])) {
      return 'two';
    }
    if (n % 10 === 1 && !isIn(n % 100, [11, 71, 91])) {
      return 'one';
    }
    return 'other';
  },
  '21': function _(n) {
    if (n === 0) {
      return 'zero';
    }
    if (n === 1) {
      return 'one';
    }
    return 'other';
  },
  '22': function _(n) {
    if (isBetween(n, 0, 1) || isBetween(n, 11, 99)) {
      return 'one';
    }
    return 'other';
  },
  '23': function _(n) {
    if (isBetween(n % 10, 1, 2) || n % 20 === 0) {
      return 'one';
    }
    return 'other';
  },
  '24': function _(n) {
    if (isBetween(n, 3, 10) || isBetween(n, 13, 19)) {
      return 'few';
    }
    if (isIn(n, [2, 12])) {
      return 'two';
    }
    if (isIn(n, [1, 11])) {
      return 'one';
    }
    return 'other';
  }
};

var pluralForms = {
  '0': ['other'],
  '1': ['zero', 'one', 'two', 'few', 'many', 'other'],
  '2': ['one', 'two', 'many', 'other'],
  '3': ['one', 'other'],
  '4': ['zero', 'one', 'other'],
  '5': ['one', 'two', 'other'],
  '6': ['one', 'two', 'few', 'many', 'other'],
  '7': ['one', 'few', 'other'],
  '8': ['one', 'few', 'many', 'other'],
  '9': ['one', 'two', 'few', 'other']
};

var pluralFormRules = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '3',
  '5': '3',
  '6': '4',
  '7': '5',
  '8': '6',
  '9': '7',
  '10': '7',
  '11': '8',
  '12': '7',
  '13': '8',
  '14': '6',
  '15': '8',
  '16': '3',
  '17': '1',
  '18': '4',
  '19': '7',
  '20': '6',
  '21': '4',
  '22': '3',
  '23': '3',
  '24': '9'
};

function getPluralForms(localeCode) {
  var index = locales2rules[localeCode.replace(/-.*$/, '')];

  if (!(index in pluralFormRules)) {
    return ['other'];
  }
  return pluralForms[pluralFormRules[index]];
}

function getPluralRule(code) {
  // return a function that gives the plural form name for a given integer
  var index = locales2rules[code.replace(/-.*$/, '')];
  if (!(index in pluralRules)) {
    return function () {
      return 'other';
    };
  }
  return pluralRules[index];
}

var L10nError = function (_Error) {
  inherits(L10nError, _Error);

  function L10nError(message, id, lang) {
    classCallCheck(this, L10nError);

    var _this = possibleConstructorReturn(this, (L10nError.__proto__ || Object.getPrototypeOf(L10nError)).call(this));

    _this.name = 'L10nError';
    _this.message = message;
    _this.id = id;
    _this.lang = lang;
    return _this;
  }

  return L10nError;
}(Error);

/*eslint no-magic-numbers: [0]*/

var MAX_PLACEABLES = 100;

var ParseContext = function () {
  function ParseContext(string) {
    classCallCheck(this, ParseContext);

    this._source = string;
    this._index = 0;
    this._length = string.length;

    this._lastGoodEntryEnd = 0;
  }

  createClass(ParseContext, [{
    key: 'getResource',
    value: function getResource() {
      var entries = {};
      var errors = [];

      this.getWS();
      while (this._index < this._length) {
        try {
          this.getEntry(entries);
        } catch (e) {
          if (e instanceof L10nError) {
            errors.push(e);
            this.getJunkEntry();
          } else {
            throw e;
          }
        }
        this.getWS();
      }

      return [entries, errors];
    }
  }, {
    key: 'getEntry',
    value: function getEntry(entries) {
      if (this._index !== 0 && this._source[this._index - 1] !== '\n') {
        throw this.error('Expected new line and a new entry');
      }

      var ch = this._source[this._index];

      if (ch === '#') {
        this.getComment();
        return;
      }

      if (ch === '[') {
        this.getSection();
        return;
      }

      if (ch !== '\n') {
        this.getEntity(entries);
      }
      return;
    }
  }, {
    key: 'getSection',
    value: function getSection() {
      this._index += 1;
      if (this._source[this._index] !== '[') {
        throw this.error('Expected "[[" to open a section');
      }

      this._index += 1;

      this.getLineWS();
      this.getKeyword();
      this.getLineWS();

      if (this._source[this._index] !== ']' || this._source[this._index + 1] !== ']') {
        throw this.error('Expected "]]" to close a section');
      }

      this._index += 2;

      // sections are ignored in the runtime ast
      return undefined;
    }
  }, {
    key: 'getEntity',
    value: function getEntity(entries) {
      var id = this.getIdentifier();

      this.getLineWS();

      var ch = this._source[this._index];

      if (ch !== '=') {
        throw this.error('Expected "=" after Entity ID');
      }
      ch = this._source[++this._index];

      this.getLineWS();

      var val = this.getPattern();

      ch = this._source[this._index];

      if (ch === '\n') {
        this._index++;
        this.getLineWS();
        ch = this._source[this._index];
      }

      if (ch === '[' && this._source[this._index + 1] !== '[' || ch === '*') {

        var members = this.getMembers();
        entries[id] = {
          traits: members[0],
          def: members[1],
          val: val
        };
      } else if (typeof val === 'string') {
        entries[id] = val;
      } else if (val === undefined) {
        throw this.error('Expected a value (like: " = value") or a trait (like: "[key] value")');
      } else {
        entries[id] = {
          val: val
        };
      }
    }
  }, {
    key: 'getWS',
    value: function getWS() {
      var cc = this._source.charCodeAt(this._index);
      // space, \n, \t, \r
      while (cc === 32 || cc === 10 || cc === 9 || cc === 13) {
        cc = this._source.charCodeAt(++this._index);
      }
    }
  }, {
    key: 'getLineWS',
    value: function getLineWS() {
      var cc = this._source.charCodeAt(this._index);
      // space, \t
      while (cc === 32 || cc === 9) {
        cc = this._source.charCodeAt(++this._index);
      }
    }
  }, {
    key: 'getIdentifier',
    value: function getIdentifier() {
      var start = this._index;
      var cc = this._source.charCodeAt(this._index);

      if (cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc === 95) {
        // _
        cc = this._source.charCodeAt(++this._index);
      } else {
        throw this.error('Expected an identifier (starting with [a-zA-Z_])');
      }

      while (cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc >= 48 && cc <= 57 || // 0-9
      cc === 95 || cc === 45) {
        // _-
        cc = this._source.charCodeAt(++this._index);
      }

      return this._source.slice(start, this._index);
    }
  }, {
    key: 'getKeyword',
    value: function getKeyword() {
      var name = '';
      var namespace = this.getIdentifier();

      if (this._source[this._index] === '/') {
        this._index++;
      } else if (namespace) {
        name = namespace;
        namespace = null;
      }

      var start = this._index;
      var cc = this._source.charCodeAt(this._index);

      if (cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc === 95 || cc === 32) {
        //  _
        cc = this._source.charCodeAt(++this._index);
      } else if (name.length === 0) {
        throw this.error('Expected an identifier (starting with [a-zA-Z_])');
      }

      while (cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc >= 48 && cc <= 57 || // 0-9
      cc === 95 || cc === 45 || cc === 32) {
        //  _-
        cc = this._source.charCodeAt(++this._index);
      }

      name += this._source.slice(start, this._index).trimRight();

      return namespace ? { type: 'kw', ns: namespace, name: name } : { type: 'kw', name: name };
    }
  }, {
    key: 'getPattern',
    value: function getPattern() {
      var start = this._index;
      if (this._source[start] === '"') {
        return this.getComplexPattern();
      }
      var eol = this._source.indexOf('\n', this._index);

      if (eol === -1) {
        eol = this._length;
      }

      var line = start !== eol ? this._source.slice(start, eol) : undefined;

      if (line !== undefined && line.includes('{')) {
        return this.getComplexPattern();
      }

      this._index = eol + 1;

      // ADD TO TESTS
      this.getLineWS();

      if (this._source[this._index] === '|') {
        this._index = start;
        return this.getComplexPattern();
      }

      return line;
    }

    /* eslint-disable complexity */

  }, {
    key: 'getComplexPattern',
    value: function getComplexPattern() {
      var buffer = '';
      var content = [];
      var placeables = 0;
      var quoteDelimited = null;
      var firstLine = true;

      var ch = this._source[this._index];

      if (ch === '\\' && (this._source[this._index + 1] === '"' || this._source[this._index + 1] === '{' || this._source[this._index + 1] === '\\')) {
        buffer += this._source[this._index + 1];
        this._index += 2;
        ch = this._source[this._index];
      } else if (ch === '"') {
        quoteDelimited = true;
        this._index++;
        ch = this._source[this._index];
      }

      while (this._index < this._length) {
        if (ch === '\n') {
          if (quoteDelimited) {
            throw this.error('Unclosed string');
          }
          this._index++;
          this.getLineWS();
          if (this._source[this._index] !== '|') {
            break;
          }
          if (firstLine && buffer.length) {
            throw this.error('Multiline string should have the ID line empty');
          }
          firstLine = false;
          this._index++;
          if (this._source[this._index] === ' ') {
            this._index++;
          }
          if (buffer.length) {
            buffer += '\n';
          }
          ch = this._source[this._index];
          continue;
        } else if (ch === '\\') {
          var ch2 = this._source[this._index + 1];
          if (quoteDelimited && ch2 === '"' || ch2 === '{') {
            ch = ch2;
            this._index++;
          }
        } else if (quoteDelimited && ch === '"') {
          this._index++;
          quoteDelimited = false;
          break;
        } else if (ch === '{') {
          if (buffer.length) {
            content.push(buffer);
          }
          if (placeables > MAX_PLACEABLES - 1) {
            throw this.error('Too many placeables, maximum allowed is ' + MAX_PLACEABLES);
          }
          buffer = '';
          content.push(this.getPlaceable());
          ch = this._source[this._index];
          placeables++;
          continue;
        }

        if (ch) {
          buffer += ch;
        }
        this._index++;
        ch = this._source[this._index];
      }

      if (quoteDelimited) {
        throw this.error('Unclosed string');
      }

      if (content.length === 0) {
        if (quoteDelimited !== null) {
          return buffer.length ? buffer : '';
        }
        return buffer.length ? buffer : undefined;
      }

      if (buffer.length) {
        content.push(buffer);
      }

      return content;
    }
    /* eslint-enable complexity */

  }, {
    key: 'getPlaceable',
    value: function getPlaceable() {
      this._index++;

      var expressions = [];

      this.getLineWS();

      while (this._index < this._length) {
        var start = this._index;
        try {
          expressions.push(this.getPlaceableExpression());
        } catch (e) {
          throw this.error(e.description, start);
        }
        var ch = this._source[this._index];
        if (ch === '}') {
          this._index++;
          break;
        } else if (ch === ',') {
          this._index++;
          this.getWS();
        } else {
          throw this.error('Expected "}" or ","');
        }
      }

      return expressions;
    }
  }, {
    key: 'getPlaceableExpression',
    value: function getPlaceableExpression() {
      var selector = this.getCallExpression();
      var members = void 0;

      this.getWS();

      var ch = this._source[this._index];

      if (ch !== '}' && ch !== ',') {
        if (ch !== '-' || this._source[this._index + 1] !== '>') {
          throw this.error('Expected "}", "," or "->"');
        }
        this._index += 2; // ->

        this.getLineWS();

        if (this._source[this._index] !== '\n') {
          throw this.error('Members should be listed in a new line');
        }

        this.getWS();

        members = this.getMembers();

        if (members[0].length === 0) {
          throw this.error('Expected members for the select expression');
        }
      }

      if (members === undefined) {
        return selector;
      }
      return {
        type: 'sel',
        exp: selector,
        vars: members[0],
        def: members[1]
      };
    }
  }, {
    key: 'getCallExpression',
    value: function getCallExpression() {
      var exp = this.getMemberExpression();

      if (this._source[this._index] !== '(') {
        return exp;
      }

      this._index++;

      var args = this.getCallArgs();

      this._index++;

      if (exp.type === 'ref') {
        exp.type = 'fun';
      }

      return {
        type: 'call',
        name: exp,
        args: args
      };
    }
  }, {
    key: 'getCallArgs',
    value: function getCallArgs() {
      var args = [];

      if (this._source[this._index] === ')') {
        return args;
      }

      while (this._index < this._length) {
        this.getLineWS();

        var exp = this.getCallExpression();

        if (exp.type !== 'ref' || exp.namespace !== undefined) {
          args.push(exp);
        } else {
          this.getLineWS();

          if (this._source[this._index] === ':') {
            this._index++;
            this.getLineWS();

            var val = this.getCallExpression();

            if (val.type === 'ref' || val.type === 'member') {
              this._index = this._source.lastIndexOf('=', this._index) + 1;
              throw this.error('Expected string in quotes');
            }

            args.push({
              type: 'kv',
              name: exp.name,
              val: val
            });
          } else {
            args.push(exp);
          }
        }

        this.getLineWS();

        if (this._source[this._index] === ')') {
          break;
        } else if (this._source[this._index] === ',') {
          this._index++;
        } else {
          throw this.error('Expected "," or ")"');
        }
      }

      return args;
    }
  }, {
    key: 'getNumber',
    value: function getNumber() {
      var num = '';
      var cc = this._source.charCodeAt(this._index);

      if (cc === 45) {
        num += '-';
        cc = this._source.charCodeAt(++this._index);
      }

      if (cc < 48 || cc > 57) {
        throw this.error('Unknown literal "' + num + '"');
      }

      while (cc >= 48 && cc <= 57) {
        num += this._source[this._index++];
        cc = this._source.charCodeAt(this._index);
      }

      if (cc === 46) {
        num += this._source[this._index++];
        cc = this._source.charCodeAt(this._index);

        if (cc < 48 || cc > 57) {
          throw this.error('Unknown literal "' + num + '"');
        }

        while (cc >= 48 && cc <= 57) {
          num += this._source[this._index++];
          cc = this._source.charCodeAt(this._index);
        }
      }

      return {
        type: 'num',
        val: num
      };
    }
  }, {
    key: 'getMemberExpression',
    value: function getMemberExpression() {
      var exp = this.getLiteral();

      while (this._source[this._index] === '[') {
        var keyword = this.getMemberKey();
        exp = {
          type: 'mem',
          key: keyword,
          obj: exp
        };
      }

      return exp;
    }
  }, {
    key: 'getMembers',
    value: function getMembers() {
      var members = [];
      var index = 0;
      var defaultIndex = void 0;

      while (this._index < this._length) {
        var ch = this._source[this._index];

        if ((ch !== '[' || this._source[this._index + 1] === '[') && ch !== '*') {
          break;
        }
        if (ch === '*') {
          this._index++;
          defaultIndex = index;
        }

        if (this._source[this._index] !== '[') {
          throw this.error('Expected "["');
        }

        var key = this.getMemberKey();

        this.getLineWS();

        var member = {
          key: key,
          val: this.getPattern()
        };
        members[index++] = member;

        this.getWS();
      }

      return [members, defaultIndex];
    }
  }, {
    key: 'getMemberKey',
    value: function getMemberKey() {
      this._index++;

      var cc = this._source.charCodeAt(this._index);
      var literal = void 0;

      if (cc >= 48 && cc <= 57 || cc === 45) {
        literal = this.getNumber();
      } else {
        literal = this.getKeyword();
      }

      if (this._source[this._index] !== ']') {
        throw this.error('Expected "]"');
      }

      this._index++;
      return literal;
    }
  }, {
    key: 'getLiteral',
    value: function getLiteral() {
      var cc = this._source.charCodeAt(this._index);
      if (cc >= 48 && cc <= 57 || cc === 45) {
        return this.getNumber();
      } else if (cc === 34) {
        // "
        return this.getPattern();
      } else if (cc === 36) {
        // $
        this._index++;
        return {
          type: 'ext',
          name: this.getIdentifier()
        };
      }

      return {
        type: 'ref',
        name: this.getIdentifier()
      };
    }
  }, {
    key: 'getComment',
    value: function getComment() {
      var eol = this._source.indexOf('\n', this._index);

      while (eol !== -1 && this._source[eol + 1] === '#') {
        this._index = eol + 2;

        eol = this._source.indexOf('\n', this._index);

        if (eol === -1) {
          break;
        }
      }

      if (eol === -1) {
        this._index = this._length;
      } else {
        this._index = eol + 1;
      }
    }
  }, {
    key: 'error',
    value: function error(message) {
      var start = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      var pos = this._index;

      if (start === null) {
        start = pos;
      }
      start = this._findEntityStart(start);

      var context = this._source.slice(start, pos + 10);

      var msg = '\n\n  ' + message + '\nat pos ' + pos + ':\n------\n…' + context + '\n------';
      var err = new L10nError(msg);

      var row = this._source.slice(0, pos).split('\n').length;
      var col = pos - this._source.lastIndexOf('\n', pos - 1);
      err._pos = { start: pos, end: undefined, col: col, row: row };
      err.offset = pos - start;
      err.description = message;
      err.context = context;
      return err;
    }
  }, {
    key: 'getJunkEntry',
    value: function getJunkEntry() {
      var pos = this._index;

      var nextEntity = this._findNextEntryStart(pos);

      if (nextEntity === -1) {
        nextEntity = this._length;
      }

      this._index = nextEntity;

      var entityStart = this._findEntityStart(pos);

      if (entityStart < this._lastGoodEntryEnd) {
        entityStart = this._lastGoodEntryEnd;
      }
    }
  }, {
    key: '_findEntityStart',
    value: function _findEntityStart(pos) {
      var start = pos;

      while (true) {
        start = this._source.lastIndexOf('\n', start - 2);
        if (start === -1 || start === 0) {
          start = 0;
          break;
        }
        var cc = this._source.charCodeAt(start + 1);

        if (cc >= 97 && cc <= 122 || // a-z
        cc >= 65 && cc <= 90 || // A-Z
        cc === 95) {
          // _
          start++;
          break;
        }
      }

      return start;
    }
  }, {
    key: '_findNextEntryStart',
    value: function _findNextEntryStart(pos) {
      var start = pos;

      while (true) {
        if (start === 0 || this._source[start - 1] === '\n') {
          var cc = this._source.charCodeAt(start);

          if (cc >= 97 && cc <= 122 || // a-z
          cc >= 65 && cc <= 90 || // A-Z
          cc === 95 || cc === 35 || cc === 91) {
            // _#[
            break;
          }
        }

        start = this._source.indexOf('\n', start);

        if (start === -1) {
          break;
        }
        start++;
      }

      return start;
    }
  }]);
  return ParseContext;
}();

var FTLRuntimeParser = {
  parseResource: function parseResource(string) {
    var parseContext = new ParseContext(string);
    return parseContext.getResource();
  }
};

var ReadWrite = function () {
  function ReadWrite(fn) {
    classCallCheck(this, ReadWrite);

    this.fn = fn;
  }

  createClass(ReadWrite, [{
    key: "run",
    value: function run(ctx) {
      return this.fn(ctx);
    }
  }, {
    key: "flatMap",
    value: function flatMap(fn) {
      var _this = this;

      return new ReadWrite(function (ctx) {
        var cur = _this.run(ctx);
        return fn(cur).run(ctx);
      });
    }
  }]);
  return ReadWrite;
}();

function ask() {
  return new ReadWrite(function (ctx) {
    return ctx;
  });
}

function tell(log) {
  return new ReadWrite(function (ctx) {
    ctx.errors.push(log);
    return null;
  });
}

function unit(val) {
  return new ReadWrite(function () {
    return val;
  });
}

function resolve(iter) {
  return function step(resume) {
    var i = iter.next(resume);
    var rw = i.value instanceof ReadWrite ? i.value : unit(i.value);
    return i.done ? rw : rw.flatMap(step);
  }();
}

var FTLBase = function () {
  function FTLBase(value, opts) {
    classCallCheck(this, FTLBase);

    this.value = value;
    this.opts = opts;
  }

  createClass(FTLBase, [{
    key: 'valueOf',
    value: function valueOf() {
      return this.value;
    }
  }]);
  return FTLBase;
}();

var FTLNone = function (_FTLBase) {
  inherits(FTLNone, _FTLBase);

  function FTLNone() {
    classCallCheck(this, FTLNone);
    return possibleConstructorReturn(this, (FTLNone.__proto__ || Object.getPrototypeOf(FTLNone)).apply(this, arguments));
  }

  createClass(FTLNone, [{
    key: 'toString',
    value: function toString() {
      return this.value || '???';
    }
  }]);
  return FTLNone;
}(FTLBase);

var FTLNumber = function (_FTLBase2) {
  inherits(FTLNumber, _FTLBase2);

  function FTLNumber(value, opts) {
    classCallCheck(this, FTLNumber);
    return possibleConstructorReturn(this, (FTLNumber.__proto__ || Object.getPrototypeOf(FTLNumber)).call(this, parseFloat(value), opts));
  }

  createClass(FTLNumber, [{
    key: 'toString',
    value: function toString(ctx) {
      var nf = ctx._memoizeIntlObject(Intl.NumberFormat, this.opts);
      return nf.format(this.value);
    }
  }]);
  return FTLNumber;
}(FTLBase);

var FTLDateTime = function (_FTLBase3) {
  inherits(FTLDateTime, _FTLBase3);

  function FTLDateTime(value, opts) {
    classCallCheck(this, FTLDateTime);
    return possibleConstructorReturn(this, (FTLDateTime.__proto__ || Object.getPrototypeOf(FTLDateTime)).call(this, new Date(value), opts));
  }

  createClass(FTLDateTime, [{
    key: 'toString',
    value: function toString(ctx) {
      var dtf = ctx._memoizeIntlObject(Intl.DateTimeFormat, this.opts);
      return dtf.format(this.value);
    }
  }]);
  return FTLDateTime;
}(FTLBase);

var FTLKeyword = function (_FTLBase4) {
  inherits(FTLKeyword, _FTLBase4);

  function FTLKeyword() {
    classCallCheck(this, FTLKeyword);
    return possibleConstructorReturn(this, (FTLKeyword.__proto__ || Object.getPrototypeOf(FTLKeyword)).apply(this, arguments));
  }

  createClass(FTLKeyword, [{
    key: 'toString',
    value: function toString() {
      var _value = this.value;
      var name = _value.name;
      var namespace = _value.namespace;

      return namespace ? namespace + ':' + name : name;
    }
  }, {
    key: 'match',
    value: function match(ctx, other) {
      var _value2 = this.value;
      var name = _value2.name;
      var namespace = _value2.namespace;

      if (other instanceof FTLKeyword) {
        return name === other.value.name && namespace === other.value.namespace;
      } else if (namespace) {
        return false;
      } else if (typeof other === 'string') {
        return name === other;
      } else if (other instanceof FTLNumber) {
        var pr = ctx._memoizeIntlObject(Intl.PluralRules, other.opts);
        return name === pr.select(other.valueOf());
      }
      return false;
    }
  }]);
  return FTLKeyword;
}(FTLBase);

var FTLList = function (_Array) {
  inherits(FTLList, _Array);

  function FTLList() {
    classCallCheck(this, FTLList);
    return possibleConstructorReturn(this, (FTLList.__proto__ || Object.getPrototypeOf(FTLList)).apply(this, arguments));
  }

  createClass(FTLList, [{
    key: 'toString',
    value: function toString(ctx) {
      var lf = ctx._memoizeIntlObject(Intl.ListFormat // XXX add this.opts
      );
      var elems = this.map(function (elem) {
        return elem.toString(ctx);
      });
      return lf.format(elems);
    }
  }]);
  return FTLList;
}(Array);

// each builtin takes two arguments:
//  - args = an array of positional args
//  - opts  = an object of key-value args

var builtins = {
  'NUMBER': function NUMBER(_ref, opts) {
    var _ref2 = slicedToArray(_ref, 1);

    var arg = _ref2[0];
    return new FTLNumber(arg.valueOf(), merge(arg.opts, opts));
  },
  'PLURAL': function PLURAL(_ref3, opts) {
    var _ref4 = slicedToArray(_ref3, 1);

    var arg = _ref4[0];
    return new FTLNumber(arg.valueOf(), merge(arg.opts, opts));
  },
  'DATETIME': function DATETIME(_ref5, opts) {
    var _ref6 = slicedToArray(_ref5, 1);

    var arg = _ref6[0];
    return new FTLDateTime(arg.valueOf(), merge(arg.opts, opts));
  },
  'LIST': function LIST(args) {
    return FTLList.from(args);
  },
  'LEN': function LEN(_ref7) {
    var _ref8 = slicedToArray(_ref7, 1);

    var arg = _ref8[0];
    return new FTLNumber(arg.valueOf().length);
  },
  'TAKE': function TAKE(_ref9) {
    var _ref10 = slicedToArray(_ref9, 2);

    var num = _ref10[0];
    var arg = _ref10[1];
    return FTLList.from(arg.valueOf().slice(0, num.value));
  },
  'DROP': function DROP(_ref11) {
    var _ref12 = slicedToArray(_ref11, 2);

    var num = _ref12[0];
    var arg = _ref12[1];
    return FTLList.from(arg.valueOf().slice(num.value));
  }
};

function merge(argopts, opts) {
  return Object.assign({}, argopts, valuesOf(opts));
}

function valuesOf(opts) {
  return Object.keys(opts).reduce(function (seq, cur) {
    return Object.assign({}, seq, defineProperty({}, cur, opts[cur].valueOf()));
  }, {});
}

var _marked = [mapValues, DefaultMember, EntityReference, MemberExpression, SelectExpression, Value, ExternalArgument, FunctionReference, CallExpression, Pattern, Entity, toFTLType].map(regeneratorRuntime.mark);

// Unicode bidi isolation characters
var FSI = '⁨';
var PDI = '⁩';

var MAX_PLACEABLE_LENGTH = 2500;

function mapValues(arr) {
  var values, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, elem;

  return regeneratorRuntime.wrap(function mapValues$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          values = new FTLList();
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 4;
          _iterator = arr[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 15;
            break;
          }

          elem = _step.value;
          _context.t0 = values;
          return _context.delegateYield(Value(elem), 't1', 10);

        case 10:
          _context.t2 = _context.t1;

          _context.t0.push.call(_context.t0, _context.t2);

        case 12:
          _iteratorNormalCompletion = true;
          _context.next = 6;
          break;

        case 15:
          _context.next = 21;
          break;

        case 17:
          _context.prev = 17;
          _context.t3 = _context['catch'](4);
          _didIteratorError = true;
          _iteratorError = _context.t3;

        case 21:
          _context.prev = 21;
          _context.prev = 22;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 24:
          _context.prev = 24;

          if (!_didIteratorError) {
            _context.next = 27;
            break;
          }

          throw _iteratorError;

        case 27:
          return _context.finish(24);

        case 28:
          return _context.finish(21);

        case 29:
          return _context.abrupt('return', values);

        case 30:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[4, 17, 21, 29], [22,, 24, 28]]);
}

// Helper for choosing entity value
function DefaultMember(members, def) {
  return regeneratorRuntime.wrap(function DefaultMember$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!members[def]) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt('return', members[def]);

        case 2:
          _context2.next = 4;
          return tell(new RangeError('No default'));

        case 4:
          return _context2.abrupt('return', { val: new FTLNone() });

        case 5:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

// Half-resolved expressions evaluate to raw Runtime AST nodes

function EntityReference(_ref) {
  var name = _ref.name;

  var _ref2, ctx, entity;

  return regeneratorRuntime.wrap(function EntityReference$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return ask();

        case 2:
          _ref2 = _context3.sent;
          ctx = _ref2.ctx;
          entity = ctx.messages.get(name);

          if (entity) {
            _context3.next = 9;
            break;
          }

          _context3.next = 8;
          return tell(new ReferenceError('Unknown entity: ' + name));

        case 8:
          return _context3.abrupt('return', new FTLNone(name));

        case 9:
          return _context3.abrupt('return', entity);

        case 10:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

function MemberExpression(_ref3) {
  var obj = _ref3.obj;
  var key = _ref3.key;

  var entity, _ref4, ctx, keyword, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, member, memberKey;

  return regeneratorRuntime.wrap(function MemberExpression$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.delegateYield(EntityReference(obj), 't0', 1);

        case 1:
          entity = _context4.t0;

          if (!(entity instanceof FTLNone)) {
            _context4.next = 4;
            break;
          }

          return _context4.abrupt('return', { val: entity });

        case 4:
          _context4.next = 6;
          return ask();

        case 6:
          _ref4 = _context4.sent;
          ctx = _ref4.ctx;
          return _context4.delegateYield(Value(key), 't1', 9);

        case 9:
          keyword = _context4.t1;
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context4.prev = 13;
          _iterator2 = entity.traits[Symbol.iterator]();

        case 15:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context4.next = 24;
            break;
          }

          member = _step2.value;
          return _context4.delegateYield(Value(member.key), 't2', 18);

        case 18:
          memberKey = _context4.t2;

          if (!keyword.match(ctx, memberKey)) {
            _context4.next = 21;
            break;
          }

          return _context4.abrupt('return', member);

        case 21:
          _iteratorNormalCompletion2 = true;
          _context4.next = 15;
          break;

        case 24:
          _context4.next = 30;
          break;

        case 26:
          _context4.prev = 26;
          _context4.t3 = _context4['catch'](13);
          _didIteratorError2 = true;
          _iteratorError2 = _context4.t3;

        case 30:
          _context4.prev = 30;
          _context4.prev = 31;

          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }

        case 33:
          _context4.prev = 33;

          if (!_didIteratorError2) {
            _context4.next = 36;
            break;
          }

          throw _iteratorError2;

        case 36:
          return _context4.finish(33);

        case 37:
          return _context4.finish(30);

        case 38:
          _context4.next = 40;
          return tell(new ReferenceError('Unknown trait: ' + keyword.toString(ctx)));

        case 40:
          return _context4.delegateYield(Entity(entity), 't4', 41);

        case 41:
          _context4.t5 = _context4.t4;
          return _context4.abrupt('return', {
            val: _context4.t5
          });

        case 43:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this, [[13, 26, 30, 38], [31,, 33, 37]]);
}

function SelectExpression(_ref5) {
  var exp = _ref5.exp;
  var vars = _ref5.vars;
  var def = _ref5.def;

  var selector, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, variant, key, _ref6, ctx;

  return regeneratorRuntime.wrap(function SelectExpression$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.delegateYield(Value(exp), 't0', 1);

        case 1:
          selector = _context5.t0;

          if (!(selector instanceof FTLNone)) {
            _context5.next = 5;
            break;
          }

          return _context5.delegateYield(DefaultMember(vars, def), 't1', 4);

        case 4:
          return _context5.abrupt('return', _context5.t1);

        case 5:
          _iteratorNormalCompletion3 = true;
          _didIteratorError3 = false;
          _iteratorError3 = undefined;
          _context5.prev = 8;
          _iterator3 = vars[Symbol.iterator]();

        case 10:
          if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
            _context5.next = 25;
            break;
          }

          variant = _step3.value;
          return _context5.delegateYield(Value(variant.key), 't2', 13);

        case 13:
          key = _context5.t2;

          if (!(key instanceof FTLNumber && selector instanceof FTLNumber && key.valueOf() === selector.valueOf())) {
            _context5.next = 16;
            break;
          }

          return _context5.abrupt('return', variant);

        case 16:
          _context5.next = 18;
          return ask();

        case 18:
          _ref6 = _context5.sent;
          ctx = _ref6.ctx;

          if (!(key instanceof FTLKeyword && key.match(ctx, selector))) {
            _context5.next = 22;
            break;
          }

          return _context5.abrupt('return', variant);

        case 22:
          _iteratorNormalCompletion3 = true;
          _context5.next = 10;
          break;

        case 25:
          _context5.next = 31;
          break;

        case 27:
          _context5.prev = 27;
          _context5.t3 = _context5['catch'](8);
          _didIteratorError3 = true;
          _iteratorError3 = _context5.t3;

        case 31:
          _context5.prev = 31;
          _context5.prev = 32;

          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }

        case 34:
          _context5.prev = 34;

          if (!_didIteratorError3) {
            _context5.next = 37;
            break;
          }

          throw _iteratorError3;

        case 37:
          return _context5.finish(34);

        case 38:
          return _context5.finish(31);

        case 39:
          return _context5.delegateYield(DefaultMember(vars, def), 't4', 40);

        case 40:
          return _context5.abrupt('return', _context5.t4);

        case 41:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this, [[8, 27, 31, 39], [32,, 34, 38]]);
}

// Fully-resolved expressions evaluate to FTL types

function Value(expr) {
  var ref, mem, sel;
  return regeneratorRuntime.wrap(function Value$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if (!(typeof expr === 'string' || expr instanceof FTLNone)) {
            _context6.next = 2;
            break;
          }

          return _context6.abrupt('return', expr);

        case 2:
          if (!Array.isArray(expr)) {
            _context6.next = 5;
            break;
          }

          return _context6.delegateYield(Pattern(expr), 't0', 4);

        case 4:
          return _context6.abrupt('return', _context6.t0);

        case 5:
          _context6.t1 = expr.type;
          _context6.next = _context6.t1 === 'kw' ? 8 : _context6.t1 === 'num' ? 9 : _context6.t1 === 'ext' ? 10 : _context6.t1 === 'fun' ? 12 : _context6.t1 === 'call' ? 14 : _context6.t1 === 'ref' ? 16 : _context6.t1 === 'mem' ? 20 : _context6.t1 === 'sel' ? 24 : 28;
          break;

        case 8:
          return _context6.abrupt('return', new FTLKeyword(expr));

        case 9:
          return _context6.abrupt('return', new FTLNumber(expr.val));

        case 10:
          return _context6.delegateYield(ExternalArgument(expr), 't2', 11);

        case 11:
          return _context6.abrupt('return', _context6.t2);

        case 12:
          return _context6.delegateYield(FunctionReference(expr), 't3', 13);

        case 13:
          return _context6.abrupt('return', _context6.t3);

        case 14:
          return _context6.delegateYield(CallExpression(expr), 't4', 15);

        case 15:
          return _context6.abrupt('return', _context6.t4);

        case 16:
          return _context6.delegateYield(EntityReference(expr), 't5', 17);

        case 17:
          ref = _context6.t5;
          return _context6.delegateYield(Entity(ref), 't6', 19);

        case 19:
          return _context6.abrupt('return', _context6.t6);

        case 20:
          return _context6.delegateYield(MemberExpression(expr), 't7', 21);

        case 21:
          mem = _context6.t7;
          return _context6.delegateYield(Value(mem.val), 't8', 23);

        case 23:
          return _context6.abrupt('return', _context6.t8);

        case 24:
          return _context6.delegateYield(SelectExpression(expr), 't9', 25);

        case 25:
          sel = _context6.t9;
          return _context6.delegateYield(Value(sel.val), 't10', 27);

        case 27:
          return _context6.abrupt('return', _context6.t10);

        case 28:
          return _context6.delegateYield(Value(expr.val), 't11', 29);

        case 29:
          return _context6.abrupt('return', _context6.t11);

        case 30:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked[5], this);
}

function ExternalArgument(_ref7) {
  var name = _ref7.name;

  var _ref8, args, arg;

  return regeneratorRuntime.wrap(function ExternalArgument$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return ask();

        case 2:
          _ref8 = _context7.sent;
          args = _ref8.args;

          if (!(!args || !args.hasOwnProperty(name))) {
            _context7.next = 8;
            break;
          }

          _context7.next = 7;
          return tell(new ReferenceError('Unknown external: ' + name));

        case 7:
          return _context7.abrupt('return', new FTLNone(name));

        case 8:
          arg = args[name];

          if (!(arg instanceof FTLBase)) {
            _context7.next = 11;
            break;
          }

          return _context7.abrupt('return', arg);

        case 11:
          _context7.t0 = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);
          _context7.next = _context7.t0 === 'string' ? 14 : _context7.t0 === 'number' ? 15 : _context7.t0 === 'object' ? 16 : 21;
          break;

        case 14:
          return _context7.abrupt('return', arg);

        case 15:
          return _context7.abrupt('return', new FTLNumber(arg));

        case 16:
          if (!Array.isArray(arg)) {
            _context7.next = 19;
            break;
          }

          return _context7.delegateYield(mapValues(arg), 't1', 18);

        case 18:
          return _context7.abrupt('return', _context7.t1);

        case 19:
          if (!(arg instanceof Date)) {
            _context7.next = 21;
            break;
          }

          return _context7.abrupt('return', new FTLDateTime(arg));

        case 21:
          _context7.next = 23;
          return tell(new TypeError('Unsupported external type: ' + name + ', ' + (typeof arg === 'undefined' ? 'undefined' : _typeof(arg))));

        case 23:
          return _context7.abrupt('return', new FTLNone(name));

        case 24:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked[6], this);
}

function FunctionReference(_ref9) {
  var name = _ref9.name;

  var _ref10, functions, func;

  return regeneratorRuntime.wrap(function FunctionReference$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return ask();

        case 2:
          _ref10 = _context8.sent;
          functions = _ref10.ctx.functions;
          func = functions[name] || builtins[name];

          if (func) {
            _context8.next = 9;
            break;
          }

          _context8.next = 8;
          return tell(new ReferenceError('Unknown built-in: ' + name + '()'));

        case 8:
          return _context8.abrupt('return', new FTLNone(name + '()'));

        case 9:
          if (!(typeof func !== 'function')) {
            _context8.next = 13;
            break;
          }

          _context8.next = 12;
          return tell(new TypeError('Function ' + name + '() is not callable'));

        case 12:
          return _context8.abrupt('return', new FTLNone(name + '()'));

        case 13:
          return _context8.abrupt('return', func);

        case 14:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked[7], this);
}

function CallExpression(_ref11) {
  var name = _ref11.name;
  var args = _ref11.args;

  var callee, posargs, keyargs, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, arg;

  return regeneratorRuntime.wrap(function CallExpression$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          return _context9.delegateYield(FunctionReference(name), 't0', 1);

        case 1:
          callee = _context9.t0;

          if (!(callee instanceof FTLNone)) {
            _context9.next = 4;
            break;
          }

          return _context9.abrupt('return', callee);

        case 4:
          posargs = [];
          keyargs = [];
          _iteratorNormalCompletion4 = true;
          _didIteratorError4 = false;
          _iteratorError4 = undefined;
          _context9.prev = 9;
          _iterator4 = args[Symbol.iterator]();

        case 11:
          if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
            _context9.next = 25;
            break;
          }

          arg = _step4.value;

          if (!(arg.type === 'kv')) {
            _context9.next = 18;
            break;
          }

          return _context9.delegateYield(Value(arg.val), 't1', 15);

        case 15:
          keyargs[arg.name] = _context9.t1;
          _context9.next = 22;
          break;

        case 18:
          _context9.t2 = posargs;
          return _context9.delegateYield(Value(arg), 't3', 20);

        case 20:
          _context9.t4 = _context9.t3;

          _context9.t2.push.call(_context9.t2, _context9.t4);

        case 22:
          _iteratorNormalCompletion4 = true;
          _context9.next = 11;
          break;

        case 25:
          _context9.next = 31;
          break;

        case 27:
          _context9.prev = 27;
          _context9.t5 = _context9['catch'](9);
          _didIteratorError4 = true;
          _iteratorError4 = _context9.t5;

        case 31:
          _context9.prev = 31;
          _context9.prev = 32;

          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }

        case 34:
          _context9.prev = 34;

          if (!_didIteratorError4) {
            _context9.next = 37;
            break;
          }

          throw _iteratorError4;

        case 37:
          return _context9.finish(34);

        case 38:
          return _context9.finish(31);

        case 39:
          return _context9.abrupt('return', callee(posargs, keyargs));

        case 40:
        case 'end':
          return _context9.stop();
      }
    }
  }, _marked[8], this, [[9, 27, 31, 39], [32,, 34, 38]]);
}

function Pattern(ptn) {
  var _ref12, ctx, dirty, result, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, part, value, str;

  return regeneratorRuntime.wrap(function Pattern$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return ask();

        case 2:
          _ref12 = _context10.sent;
          ctx = _ref12.ctx;
          dirty = _ref12.dirty;

          if (!dirty.has(ptn)) {
            _context10.next = 9;
            break;
          }

          _context10.next = 8;
          return tell(new RangeError('Cyclic reference'));

        case 8:
          return _context10.abrupt('return', new FTLNone());

        case 9:

          dirty.add(ptn);
          result = '';
          _iteratorNormalCompletion5 = true;
          _didIteratorError5 = false;
          _iteratorError5 = undefined;
          _context10.prev = 14;
          _iterator5 = ptn[Symbol.iterator]();

        case 16:
          if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
            _context10.next = 41;
            break;
          }

          part = _step5.value;

          if (!(typeof part === 'string')) {
            _context10.next = 22;
            break;
          }

          result += part;
          _context10.next = 38;
          break;

        case 22:
          if (!(part.length === 1)) {
            _context10.next = 27;
            break;
          }

          return _context10.delegateYield(Value(part[0]), 't1', 24);

        case 24:
          _context10.t0 = _context10.t1;
          _context10.next = 29;
          break;

        case 27:
          return _context10.delegateYield(mapValues(part), 't2', 28);

        case 28:
          _context10.t0 = _context10.t2;

        case 29:
          value = _context10.t0;
          str = value.toString(ctx);

          if (!(str.length > MAX_PLACEABLE_LENGTH)) {
            _context10.next = 37;
            break;
          }

          _context10.next = 34;
          return tell(new RangeError('Too many characters in placeable ' + ('(' + str.length + ', max allowed is ' + MAX_PLACEABLE_LENGTH + ')')));

        case 34:
          result += FSI + str.substr(0, MAX_PLACEABLE_LENGTH) + PDI;
          _context10.next = 38;
          break;

        case 37:
          result += FSI + str + PDI;

        case 38:
          _iteratorNormalCompletion5 = true;
          _context10.next = 16;
          break;

        case 41:
          _context10.next = 47;
          break;

        case 43:
          _context10.prev = 43;
          _context10.t3 = _context10['catch'](14);
          _didIteratorError5 = true;
          _iteratorError5 = _context10.t3;

        case 47:
          _context10.prev = 47;
          _context10.prev = 48;

          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }

        case 50:
          _context10.prev = 50;

          if (!_didIteratorError5) {
            _context10.next = 53;
            break;
          }

          throw _iteratorError5;

        case 53:
          return _context10.finish(50);

        case 54:
          return _context10.finish(47);

        case 55:

          dirty.delete(ptn);
          return _context10.abrupt('return', result);

        case 57:
        case 'end':
          return _context10.stop();
      }
    }
  }, _marked[9], this, [[14, 43, 47, 55], [48,, 50, 54]]);
}

function Entity(entity) {
  var def;
  return regeneratorRuntime.wrap(function Entity$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          if (!(entity.val !== undefined)) {
            _context11.next = 3;
            break;
          }

          return _context11.delegateYield(Value(entity.val), 't0', 2);

        case 2:
          return _context11.abrupt('return', _context11.t0);

        case 3:
          if (entity.traits) {
            _context11.next = 6;
            break;
          }

          return _context11.delegateYield(Value(entity), 't1', 5);

        case 5:
          return _context11.abrupt('return', _context11.t1);

        case 6:
          return _context11.delegateYield(DefaultMember(entity.traits, entity.def), 't2', 7);

        case 7:
          def = _context11.t2;
          return _context11.delegateYield(Value(def), 't3', 9);

        case 9:
          return _context11.abrupt('return', _context11.t3);

        case 10:
        case 'end':
          return _context11.stop();
      }
    }
  }, _marked[10], this);
}

// evaluate `entity` to an FTL Value type: string or FTLNone
function toFTLType(entity) {
  return regeneratorRuntime.wrap(function toFTLType$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          return _context12.delegateYield(Entity(entity), 't0', 1);

        case 1:
          return _context12.abrupt('return', _context12.t0);

        case 2:
        case 'end':
          return _context12.stop();
      }
    }
  }, _marked[11], this);
}

function format(ctx, args, entity) {
  var errors = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

  return resolve(toFTLType(entity)).run({
    ctx: ctx, args: args, errors: errors, dirty: new WeakSet()
  });
}

var MessageContext = function () {
  function MessageContext(lang) {
    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var functions = _ref.functions;
    classCallCheck(this, MessageContext);

    this.lang = lang;
    this.functions = functions || {};
    this.messages = new Map();
    this.intls = new WeakMap();
  }

  createClass(MessageContext, [{
    key: 'addMessages',
    value: function addMessages(source) {
      var _FTLRuntimeParser$par = FTLRuntimeParser.parseResource(source);

      var _FTLRuntimeParser$par2 = slicedToArray(_FTLRuntimeParser$par, 2);

      var entries = _FTLRuntimeParser$par2[0];
      var errors = _FTLRuntimeParser$par2[1];

      for (var id in entries) {
        this.messages.set(id, entries[id]);
      }

      return errors;
    }

    // format `entity` to a string or null

  }, {
    key: 'format',
    value: function format$$(entity, args, errors) {
      // optimize entities which are simple strings by skipping resultion
      if (typeof entity === 'string') {
        return entity;
      }

      if (typeof entity.val === 'string') {
        return entity.val;
      }

      // optimize entities with null values and no default traits
      if (entity.val === undefined && entity.def === undefined) {
        return null;
      }

      var result = format(this, args, entity, errors);
      return result instanceof FTLNone ? null : result;
    }
  }, {
    key: '_memoizeIntlObject',
    value: function _memoizeIntlObject(ctor, opts) {
      var cache = this.intls.get(ctor) || {};
      var id = JSON.stringify(opts);

      if (!cache[id]) {
        cache[id] = new ctor(this.lang, opts);
        this.intls.set(ctor, cache);
      }

      return cache[id];
    }
  }]);
  return MessageContext;
}();

Intl.MessageContext = MessageContext;
Intl.MessageNumberArgument = FTLNumber;
Intl.MessageDateTimeArgument = FTLDateTime;

if (!Intl.NumberFormat) {
  Intl.NumberFormat = function () {
    return {
      format: function format(n) {
        return n;
      }
    };
  };
}

if (!Intl.PluralRules) {
  Intl.PluralRules = function (code) {
    var fn = getPluralRule(code);
    return {
      select: function select(n) {
        return fn(n);
      }
    };
  };
}

if (!Intl.ListFormat) {
  Intl.ListFormat = function () {
    return {
      format: function format(list) {
        return list.join(', ');
      }
    };
  };
}

var serializer = {
  serialize: function serialize(_ref) {
    var body = _ref.body;
    var comment = _ref.comment;

    var string = '';
    if (comment !== null) {
      string += this.dumpComment(comment) + '\n\n';
    }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = body[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var entry = _step.value;

        string += this.dumpEntry(entry);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return string;
  },

  dumpEntry: function dumpEntry(entry) {
    switch (entry.type) {
      case 'Entity':
        return this.dumpEntity(entry) + '\n';
      case 'Comment':
        return this.dumpComment(entry) + '\n\n';
      case 'Section':
        return this.dumpSection(entry) + '\n';
      case 'JunkEntry':
        return '';
      default:
        throw new L10nError('Unknown entry type.');
    }
  },

  dumpEntity: function dumpEntity(entity) {
    var str = '';

    if (entity.comment) {
      str += '\n' + this.dumpComment(entity.comment) + '\n';
    }
    var id = this.dumpIdentifier(entity.id);
    var value = this.dumpPattern(entity.value);

    if (entity.traits.length) {
      var traits = this.dumpMembers(entity.traits, 2);
      str += id + ' = ' + value + '\n' + traits;
    } else {
      str += id + ' = ' + value;
    }
    return str;
  },

  dumpComment: function dumpComment(comment) {
    return '# ' + comment.content.replace(/\n/g, '\n# ');
  },

  dumpSection: function dumpSection(section) {
    var str = '\n\n';
    if (section.comment) {
      str += this.dumpComment(section.comment) + '\n';
    }
    str += '[[ ' + this.dumpKeyword(section.key) + ' ]]\n\n';

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = section.body[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var entry = _step2.value;

        str += this.dumpEntry(entry);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return str;
  },

  dumpIdentifier: function dumpIdentifier(id) {
    return id.name;
  },

  dumpKeyword: function dumpKeyword(kw) {
    if (kw.namespace) {
      return kw.namespace + '/' + kw.name;
    }
    return kw.name;
  },

  dumpPattern: function dumpPattern(pattern) {
    var _this = this;

    if (pattern === null) {
      return '';
    }
    if (pattern._quoteDelim) {
      return '"' + pattern.source + '"';
    }
    var str = '';

    pattern.elements.forEach(function (elem) {
      if (elem.type === 'TextElement') {
        if (elem.value.includes('\n')) {
          str += '\n  | ' + elem.value.replace(/\n/g, '\n  | ');
        } else {
          str += elem.value;
        }
      } else if (elem.type === 'Placeable') {
        str += _this.dumpPlaceable(elem);
      }
    });
    return str;
  },

  dumpPlaceable: function dumpPlaceable(placeable) {
    var _this2 = this;

    var source = placeable.expressions.map(function (exp) {
      return _this2.dumpExpression(exp);
    }).join(', ');

    if (source.endsWith('\n')) {
      return '{ ' + source + '}';
    }
    return '{ ' + source + ' }';
  },

  dumpExpression: function dumpExpression(exp) {
    switch (exp.type) {
      case 'Identifier':
      case 'FunctionReference':
      case 'EntityReference':
        return this.dumpIdentifier(exp);
      case 'ExternalArgument':
        return '$' + this.dumpIdentifier(exp);
      case 'SelectExpression':
        var sel = this.dumpExpression(exp.expression);
        var variants = this.dumpMembers(exp.variants, 2);
        return sel + ' ->\n' + variants + '\n';
      case 'CallExpression':
        var id = this.dumpExpression(exp.callee);
        var args = this.dumpCallArgs(exp.args);
        return id + '(' + args + ')';
      case 'Pattern':
        return this.dumpPattern(exp);
      case 'Number':
        return exp.value;
      case 'Keyword':
        return this.dumpKeyword(exp);
      case 'MemberExpression':
        var obj = this.dumpExpression(exp.object);
        var key = this.dumpExpression(exp.keyword);
        return obj + '[' + key + ']';
      default:
        throw new L10nError('Unknown expression type ' + exp.type);
    }
  },

  dumpCallArgs: function dumpCallArgs(args) {
    var _this3 = this;

    return args.map(function (arg) {
      if (arg.type === 'KeyValueArg') {
        return arg.name + ': ' + _this3.dumpExpression(arg.value);
      }
      return _this3.dumpExpression(arg);
    }).join(', ');
  },

  dumpMembers: function dumpMembers(members, indent) {
    var _this4 = this;

    return members.map(function (member) {
      var key = _this4.dumpExpression(member.key);
      var value = _this4.dumpPattern(member.value);
      var prefix = member.default ? ' '.repeat(indent - 1) + '*' : '' + ' '.repeat(indent);
      return prefix + '[' + key + '] ' + value;
    }).join('\n');
  }
};

var Node = function Node() {
  classCallCheck(this, Node);
};

var Resource = function (_Node) {
  inherits(Resource, _Node);

  function Resource() {
    var body = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var comment = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    classCallCheck(this, Resource);

    var _this = possibleConstructorReturn(this, (Resource.__proto__ || Object.getPrototypeOf(Resource)).call(this));

    _this.type = 'Resource';
    _this.body = body;
    _this.comment = comment;
    return _this;
  }

  return Resource;
}(Node);

var Entry = function (_Node2) {
  inherits(Entry, _Node2);

  function Entry() {
    classCallCheck(this, Entry);

    var _this2 = possibleConstructorReturn(this, (Entry.__proto__ || Object.getPrototypeOf(Entry)).call(this));

    _this2.type = 'Entry';
    return _this2;
  }

  return Entry;
}(Node);

var Identifier = function (_Node3) {
  inherits(Identifier, _Node3);

  function Identifier(name) {
    classCallCheck(this, Identifier);

    var _this3 = possibleConstructorReturn(this, (Identifier.__proto__ || Object.getPrototypeOf(Identifier)).call(this));

    _this3.type = 'Identifier';
    _this3.name = name;
    return _this3;
  }

  return Identifier;
}(Node);

var Section = function (_Node4) {
  inherits(Section, _Node4);

  function Section(key) {
    var body = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
    var comment = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
    classCallCheck(this, Section);

    var _this4 = possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this));

    _this4.type = 'Section';
    _this4.key = key;
    _this4.body = body;
    _this4.comment = comment;
    return _this4;
  }

  return Section;
}(Node);

var Pattern$1 = function (_Node5) {
  inherits(Pattern, _Node5);

  function Pattern(source, elements) {
    classCallCheck(this, Pattern);

    var _this5 = possibleConstructorReturn(this, (Pattern.__proto__ || Object.getPrototypeOf(Pattern)).call(this));

    _this5.type = 'Pattern';
    _this5.source = source;
    _this5.elements = elements;
    return _this5;
  }

  return Pattern;
}(Node);

var Member = function (_Node6) {
  inherits(Member, _Node6);

  function Member(key, value) {
    var def = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
    classCallCheck(this, Member);

    var _this6 = possibleConstructorReturn(this, (Member.__proto__ || Object.getPrototypeOf(Member)).call(this));

    _this6.type = 'Member';
    _this6.key = key;
    _this6.value = value;
    _this6.default = def;
    return _this6;
  }

  return Member;
}(Node);

var Entity$1 = function (_Entry) {
  inherits(Entity, _Entry);

  function Entity(id) {
    var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    var traits = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
    var comment = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
    classCallCheck(this, Entity);

    var _this7 = possibleConstructorReturn(this, (Entity.__proto__ || Object.getPrototypeOf(Entity)).call(this));

    _this7.type = 'Entity';
    _this7.id = id;
    _this7.value = value;
    _this7.traits = traits;
    _this7.comment = comment;
    return _this7;
  }

  return Entity;
}(Entry);

var Placeable = function (_Node7) {
  inherits(Placeable, _Node7);

  function Placeable(expressions) {
    classCallCheck(this, Placeable);

    var _this8 = possibleConstructorReturn(this, (Placeable.__proto__ || Object.getPrototypeOf(Placeable)).call(this));

    _this8.type = 'Placeable';
    _this8.expressions = expressions;
    return _this8;
  }

  return Placeable;
}(Node);

var SelectExpression$1 = function (_Node8) {
  inherits(SelectExpression, _Node8);

  function SelectExpression(expression) {
    var variants = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    classCallCheck(this, SelectExpression);

    var _this9 = possibleConstructorReturn(this, (SelectExpression.__proto__ || Object.getPrototypeOf(SelectExpression)).call(this));

    _this9.type = 'SelectExpression';
    _this9.expression = expression;
    _this9.variants = variants;
    return _this9;
  }

  return SelectExpression;
}(Node);

var MemberExpression$1 = function (_Node9) {
  inherits(MemberExpression, _Node9);

  function MemberExpression(obj, keyword) {
    classCallCheck(this, MemberExpression);

    var _this10 = possibleConstructorReturn(this, (MemberExpression.__proto__ || Object.getPrototypeOf(MemberExpression)).call(this));

    _this10.type = 'MemberExpression';
    _this10.object = obj;
    _this10.keyword = keyword;
    return _this10;
  }

  return MemberExpression;
}(Node);

var CallExpression$1 = function (_Node10) {
  inherits(CallExpression, _Node10);

  function CallExpression(callee, args) {
    classCallCheck(this, CallExpression);

    var _this11 = possibleConstructorReturn(this, (CallExpression.__proto__ || Object.getPrototypeOf(CallExpression)).call(this));

    _this11.type = 'CallExpression';
    _this11.callee = callee;
    _this11.args = args;
    return _this11;
  }

  return CallExpression;
}(Node);

var ExternalArgument$1 = function (_Node11) {
  inherits(ExternalArgument, _Node11);

  function ExternalArgument(name) {
    classCallCheck(this, ExternalArgument);

    var _this12 = possibleConstructorReturn(this, (ExternalArgument.__proto__ || Object.getPrototypeOf(ExternalArgument)).call(this));

    _this12.type = 'ExternalArgument';
    _this12.name = name;
    return _this12;
  }

  return ExternalArgument;
}(Node);

var KeyValueArg = function (_Node12) {
  inherits(KeyValueArg, _Node12);

  function KeyValueArg(name, value) {
    classCallCheck(this, KeyValueArg);

    var _this13 = possibleConstructorReturn(this, (KeyValueArg.__proto__ || Object.getPrototypeOf(KeyValueArg)).call(this));

    _this13.type = 'KeyValueArg';
    _this13.name = name;
    _this13.value = value;
    return _this13;
  }

  return KeyValueArg;
}(Node);

var EntityReference$1 = function (_Identifier) {
  inherits(EntityReference, _Identifier);

  function EntityReference(name) {
    classCallCheck(this, EntityReference);

    var _this14 = possibleConstructorReturn(this, (EntityReference.__proto__ || Object.getPrototypeOf(EntityReference)).call(this, name));

    _this14.type = 'EntityReference';
    return _this14;
  }

  return EntityReference;
}(Identifier);

var FunctionReference$1 = function (_Identifier2) {
  inherits(FunctionReference, _Identifier2);

  function FunctionReference(name) {
    classCallCheck(this, FunctionReference);

    var _this15 = possibleConstructorReturn(this, (FunctionReference.__proto__ || Object.getPrototypeOf(FunctionReference)).call(this, name));

    _this15.type = 'FunctionReference';
    return _this15;
  }

  return FunctionReference;
}(Identifier);

var Keyword = function (_Identifier3) {
  inherits(Keyword, _Identifier3);

  function Keyword(name) {
    var namespace = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    classCallCheck(this, Keyword);

    var _this16 = possibleConstructorReturn(this, (Keyword.__proto__ || Object.getPrototypeOf(Keyword)).call(this, name));

    _this16.type = 'Keyword';
    _this16.namespace = namespace;
    return _this16;
  }

  return Keyword;
}(Identifier);

var Number = function (_Node13) {
  inherits(Number, _Node13);

  function Number(value) {
    classCallCheck(this, Number);

    var _this17 = possibleConstructorReturn(this, (Number.__proto__ || Object.getPrototypeOf(Number)).call(this));

    _this17.type = 'Number';
    _this17.value = value;
    return _this17;
  }

  return Number;
}(Node);

var TextElement = function (_Node14) {
  inherits(TextElement, _Node14);

  function TextElement(value) {
    classCallCheck(this, TextElement);

    var _this18 = possibleConstructorReturn(this, (TextElement.__proto__ || Object.getPrototypeOf(TextElement)).call(this));

    _this18.type = 'TextElement';
    _this18.value = value;
    return _this18;
  }

  return TextElement;
}(Node);

var Comment = function (_Node15) {
  inherits(Comment, _Node15);

  function Comment(content) {
    classCallCheck(this, Comment);

    var _this19 = possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this));

    _this19.type = 'Comment';
    _this19.content = content;
    return _this19;
  }

  return Comment;
}(Node);

var JunkEntry = function (_Entry2) {
  inherits(JunkEntry, _Entry2);

  function JunkEntry(content) {
    classCallCheck(this, JunkEntry);

    var _this20 = possibleConstructorReturn(this, (JunkEntry.__proto__ || Object.getPrototypeOf(JunkEntry)).call(this));

    _this20.type = 'JunkEntry';
    _this20.content = content;
    return _this20;
  }

  return JunkEntry;
}(Entry);

var AST = {
  Node: Node,
  Pattern: Pattern$1,
  Member: Member,
  Identifier: Identifier,
  Entity: Entity$1,
  Section: Section,
  Resource: Resource,
  Placeable: Placeable,
  SelectExpression: SelectExpression$1,
  MemberExpression: MemberExpression$1,
  CallExpression: CallExpression$1,
  ExternalArgument: ExternalArgument$1,
  KeyValueArg: KeyValueArg,
  Number: Number,
  EntityReference: EntityReference$1,
  FunctionReference: FunctionReference$1,
  Keyword: Keyword,
  TextElement: TextElement,
  Comment: Comment,
  JunkEntry: JunkEntry
};

/*eslint no-magic-numbers: [0]*/

var MAX_PLACEABLES$1 = 100;

var ParseContext$1 = function () {
  function ParseContext(string) {
    classCallCheck(this, ParseContext);

    this._source = string;
    this._index = 0;
    this._length = string.length;

    this._lastGoodEntryEnd = 0;
  }

  createClass(ParseContext, [{
    key: '_isIdentifierStart',
    value: function _isIdentifierStart(cc) {
      return cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc === 95; // _
    }
  }, {
    key: 'getResource',
    value: function getResource() {
      var resource = new AST.Resource();
      var errors = [];
      var comment = null;

      var section = resource.body;

      if (this._source[this._index] === '#') {
        comment = this.getComment();

        var cc = this._source.charCodeAt(this._index);
        if (!this._isIdentifierStart(cc)) {
          resource.comment = comment;
          comment = null;
        }
      }

      this.getWS();
      while (this._index < this._length) {
        try {
          var entry = this.getEntry(comment);
          if (entry.type === 'Section') {
            resource.body.push(entry);
            section = entry.body;
          } else {
            section.push(entry);
          }
          this._lastGoodEntryEnd = this._index;
          comment = null;
        } catch (e) {
          if (e instanceof L10nError) {
            errors.push(e);
            section.push(this.getJunkEntry());
          } else {
            throw e;
          }
        }
        this.getWS();
      }

      return [resource, errors];
    }
  }, {
    key: 'getEntry',
    value: function getEntry() {
      var comment = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (this._index !== 0 && this._source[this._index - 1] !== '\n') {
        throw this.error('Expected new line and a new entry');
      }

      if (comment === null && this._source[this._index] === '#') {
        comment = this.getComment();
      }

      this.getLineWS();

      if (this._source[this._index] === '[') {
        return this.getSection(comment);
      }

      if (this._index < this._length && this._source[this._index] !== '\n') {
        return this.getEntity(comment);
      }
      return comment;
    }
  }, {
    key: 'getSection',
    value: function getSection() {
      var comment = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      this._index += 1;
      if (this._source[this._index] !== '[') {
        throw this.error('Expected "[[" to open a section');
      }

      this._index += 1;

      this.getLineWS();

      var key = this.getKeyword();

      this.getLineWS();

      if (this._source[this._index] !== ']' || this._source[this._index + 1] !== ']') {
        throw this.error('Expected "]]" to close a section');
      }

      this._index += 2;

      return new AST.Section(key, [], comment);
    }
  }, {
    key: 'getEntity',
    value: function getEntity() {
      var comment = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      var id = this.getIdentifier();

      var members = [];
      var value = null;

      this.getLineWS();

      var ch = this._source[this._index];

      if (ch !== '=') {
        throw this.error('Expected "=" after Entity ID');
      }
      ch = this._source[++this._index];

      this.getLineWS();

      value = this.getPattern();

      ch = this._source[this._index];

      if (ch === '\n') {
        this._index++;
        this.getLineWS();
        ch = this._source[this._index];
      }

      if (ch === '[' && this._source[this._index + 1] !== '[' || ch === '*') {
        members = this.getMembers();
      } else if (value === null) {
        throw this.error('Expected a value (like: " = value") or a trait (like: "[key] value")');
      }

      return new AST.Entity(id, value, members, comment);
    }
  }, {
    key: 'getWS',
    value: function getWS() {
      var cc = this._source.charCodeAt(this._index);
      // space, \n, \t, \r
      while (cc === 32 || cc === 10 || cc === 9 || cc === 13) {
        cc = this._source.charCodeAt(++this._index);
      }
    }
  }, {
    key: 'getLineWS',
    value: function getLineWS() {
      var cc = this._source.charCodeAt(this._index);
      // space, \t
      while (cc === 32 || cc === 9) {
        cc = this._source.charCodeAt(++this._index);
      }
    }
  }, {
    key: 'getIdentifier',
    value: function getIdentifier() {
      var name = '';

      var start = this._index;
      var cc = this._source.charCodeAt(this._index);

      if (this._isIdentifierStart(cc)) {
        cc = this._source.charCodeAt(++this._index);
      } else if (name.length === 0) {
        throw this.error('Expected an identifier (starting with [a-zA-Z_])');
      }

      while (cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc >= 48 && cc <= 57 || // 0-9
      cc === 95 || cc === 45) {
        // _-
        cc = this._source.charCodeAt(++this._index);
      }

      name += this._source.slice(start, this._index);

      return new AST.Identifier(name);
    }
  }, {
    key: 'getKeyword',
    value: function getKeyword() {
      var name = '';
      var namespace = this.getIdentifier().name;

      if (this._source[this._index] === '/') {
        this._index++;
      } else if (namespace) {
        name = namespace;
        namespace = null;
      }

      var start = this._index;
      var cc = this._source.charCodeAt(this._index);

      if (this._isIdentifierStart(cc)) {
        cc = this._source.charCodeAt(++this._index);
      } else if (name.length === 0) {
        throw this.error('Expected an identifier (starting with [a-zA-Z_])');
      }

      while (cc >= 97 && cc <= 122 || // a-z
      cc >= 65 && cc <= 90 || // A-Z
      cc >= 48 && cc <= 57 || // 0-9
      cc === 95 || cc === 45 || cc === 32) {
        //  _-
        cc = this._source.charCodeAt(++this._index);
      }

      name += this._source.slice(start, this._index).trimRight();

      return new AST.Keyword(name, namespace);
    }

    /* eslint-disable complexity */

  }, {
    key: 'getPattern',
    value: function getPattern() {
      var buffer = '';
      var source = '';
      var placeables = 0;
      var content = [];
      var quoteDelimited = null;
      var firstLine = true;

      var ch = this._source[this._index];

      if (ch === '\\' && (this._source[this._index + 1] === '"' || this._source[this._index + 1] === '{' || this._source[this._index + 1] === '\\')) {
        buffer += this._source[this._index + 1];
        this._index += 2;
        ch = this._source[this._index];
      } else if (ch === '"') {
        quoteDelimited = true;
        this._index++;
        ch = this._source[this._index];
      }

      while (this._index < this._length) {
        if (ch === '\n') {
          if (quoteDelimited) {
            throw this.error('Unclosed string');
          }
          this._index++;
          this.getLineWS();
          if (this._source[this._index] !== '|') {
            break;
          }
          if (firstLine && buffer.length) {
            throw this.error('Multiline string should have the ID line empty');
          }
          firstLine = false;
          this._index++;
          if (this._source[this._index] === ' ') {
            this._index++;
          }
          if (buffer.length) {
            buffer += '\n';
          }
          ch = this._source[this._index];
          continue;
        } else if (ch === '\\') {
          var ch2 = this._source[this._index + 1];
          if (quoteDelimited && ch2 === '"' || ch2 === '{') {
            ch = ch2;
            this._index++;
          }
        } else if (quoteDelimited && ch === '"') {
          this._index++;
          quoteDelimited = false;
          break;
        } else if (ch === '{') {
          if (buffer.length) {
            content.push(new AST.TextElement(buffer));
          }
          if (placeables > MAX_PLACEABLES$1 - 1) {
            throw this.error('Too many placeables, maximum allowed is ' + MAX_PLACEABLES$1);
          }
          source += buffer;
          buffer = '';
          var start = this._index;
          content.push(this.getPlaceable());
          source += this._source.substring(start, this._index);
          ch = this._source[this._index];
          placeables++;
          continue;
        }

        if (ch) {
          buffer += ch;
        }
        this._index++;
        ch = this._source[this._index];
      }

      if (quoteDelimited) {
        throw this.error('Unclosed string');
      }

      if (buffer.length) {
        source += buffer;
        content.push(new AST.TextElement(buffer));
      }

      if (content.length === 0) {
        if (quoteDelimited !== null) {
          content.push(new AST.TextElement(source));
        } else {
          return null;
        }
      }

      var pattern = new AST.Pattern(source, content);
      pattern._quoteDelim = quoteDelimited !== null;
      return pattern;
    }
    /* eslint-enable complexity */

  }, {
    key: 'getPlaceable',
    value: function getPlaceable() {
      this._index++;

      var expressions = [];

      this.getLineWS();

      while (this._index < this._length) {
        var start = this._index;
        try {
          expressions.push(this.getPlaceableExpression());
        } catch (e) {
          throw this.error(e.description, start);
        }
        this.getWS();
        if (this._source[this._index] === '}') {
          this._index++;
          break;
        } else if (this._source[this._index] === ',') {
          this._index++;
          this.getWS();
        } else {
          throw this.error('Expected "}" or ","');
        }
      }

      return new AST.Placeable(expressions);
    }
  }, {
    key: 'getPlaceableExpression',
    value: function getPlaceableExpression() {
      var selector = this.getCallExpression();
      var members = null;

      this.getWS();

      if (this._source[this._index] !== '}' && this._source[this._index] !== ',') {
        if (this._source[this._index] !== '-' || this._source[this._index + 1] !== '>') {
          throw this.error('Expected "}", "," or "->"');
        }
        this._index += 2; // ->

        this.getLineWS();

        if (this._source[this._index] !== '\n') {
          throw this.error('Members should be listed in a new line');
        }

        this.getWS();

        members = this.getMembers();

        if (members.length === 0) {
          throw this.error('Expected members for the select expression');
        }
      }

      if (members === null) {
        return selector;
      }
      return new AST.SelectExpression(selector, members);
    }
  }, {
    key: 'getCallExpression',
    value: function getCallExpression() {
      var exp = this.getMemberExpression();

      if (this._source[this._index] !== '(') {
        return exp;
      }

      this._index++;

      var args = this.getCallArgs();

      this._index++;

      if (exp instanceof AST.EntityReference) {
        exp = new AST.FunctionReference(exp.name);
      }

      return new AST.CallExpression(exp, args);
    }
  }, {
    key: 'getCallArgs',
    value: function getCallArgs() {
      var args = [];

      if (this._source[this._index] === ')') {
        return args;
      }

      while (this._index < this._length) {
        this.getLineWS();

        var exp = this.getCallExpression();

        if (!(exp instanceof AST.EntityReference)) {
          args.push(exp);
        } else {
          this.getLineWS();

          if (this._source[this._index] === ':') {
            this._index++;
            this.getLineWS();

            var val = this.getCallExpression();

            if (val instanceof AST.EntityReference || val instanceof AST.MemberExpression) {
              this._index = this._source.lastIndexOf('=', this._index) + 1;
              throw this.error('Expected string in quotes');
            }

            args.push(new AST.KeyValueArg(exp.name, val));
          } else {
            args.push(exp);
          }
        }

        this.getLineWS();

        if (this._source[this._index] === ')') {
          break;
        } else if (this._source[this._index] === ',') {
          this._index++;
        } else {
          throw this.error('Expected "," or ")"');
        }
      }

      return args;
    }
  }, {
    key: 'getNumber',
    value: function getNumber() {
      var num = '';
      var cc = this._source.charCodeAt(this._index);

      if (cc === 45) {
        num += '-';
        cc = this._source.charCodeAt(++this._index);
      }

      if (cc < 48 || cc > 57) {
        throw this.error('Unknown literal "' + num + '"');
      }

      while (cc >= 48 && cc <= 57) {
        num += this._source[this._index++];
        cc = this._source.charCodeAt(this._index);
      }

      if (cc === 46) {
        num += this._source[this._index++];
        cc = this._source.charCodeAt(this._index);

        if (cc < 48 || cc > 57) {
          throw this.error('Unknown literal "' + num + '"');
        }

        while (cc >= 48 && cc <= 57) {
          num += this._source[this._index++];
          cc = this._source.charCodeAt(this._index);
        }
      }

      return new AST.Number(num);
    }
  }, {
    key: 'getMemberExpression',
    value: function getMemberExpression() {
      var exp = this.getLiteral();

      while (this._source[this._index] === '[') {
        var keyword = this.getMemberKey();
        exp = new AST.MemberExpression(exp, keyword);
      }

      return exp;
    }
  }, {
    key: 'getMembers',
    value: function getMembers() {
      var members = [];

      while (this._index < this._length) {
        if ((this._source[this._index] !== '[' || this._source[this._index + 1] === '[') && this._source[this._index] !== '*') {
          break;
        }
        var def = false;
        if (this._source[this._index] === '*') {
          this._index++;
          def = true;
        }

        if (this._source[this._index] !== '[') {
          throw this.error('Expected "["');
        }

        var key = this.getMemberKey();

        this.getLineWS();

        var value = this.getPattern();

        var member = new AST.Member(key, value, def);

        members.push(member);

        this.getWS();
      }

      return members;
    }
  }, {
    key: 'getMemberKey',
    value: function getMemberKey() {
      this._index++;

      var cc = this._source.charCodeAt(this._index);
      var literal = void 0;

      if (cc >= 48 && cc <= 57 || cc === 45) {
        literal = this.getNumber();
      } else {
        literal = this.getKeyword();
      }

      if (this._source[this._index] !== ']') {
        throw this.error('Expected "]"');
      }

      this._index++;
      return literal;
    }
  }, {
    key: 'getLiteral',
    value: function getLiteral() {
      var cc = this._source.charCodeAt(this._index);
      if (cc >= 48 && cc <= 57 || cc === 45) {
        return this.getNumber();
      } else if (cc === 34) {
        // "
        return this.getPattern();
      } else if (cc === 36) {
        // $
        this._index++;
        var _name = this.getIdentifier().name;
        return new AST.ExternalArgument(_name);
      }

      var name = this.getIdentifier().name;
      return new AST.EntityReference(name);
    }
  }, {
    key: 'getComment',
    value: function getComment() {
      this._index++;
      if (this._source[this._index] === ' ') {
        this._index++;
      }

      var content = '';

      var eol = this._source.indexOf('\n', this._index);

      content += this._source.substring(this._index, eol);

      while (eol !== -1 && this._source[eol + 1] === '#') {
        this._index = eol + 2;

        if (this._source[this._index] === ' ') {
          this._index++;
        }

        eol = this._source.indexOf('\n', this._index);

        if (eol === -1) {
          break;
        }

        content += '\n' + this._source.substring(this._index, eol);
      }

      if (eol === -1) {
        this._index = this._length;
      } else {
        this._index = eol + 1;
      }

      return new AST.Comment(content);
    }
  }, {
    key: 'error',
    value: function error(message) {
      var start = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      var pos = this._index;

      if (start === null) {
        start = pos;
      }
      start = this._findEntityStart(start);

      var context = this._source.slice(start, pos + 10);

      var msg = '\n\n  ' + message + '\nat pos ' + pos + ':\n------\n…' + context + '\n------';
      var err = new L10nError(msg);

      var row = this._source.slice(0, pos).split('\n').length;
      var col = pos - this._source.lastIndexOf('\n', pos - 1);
      err._pos = { start: pos, end: undefined, col: col, row: row };
      err.offset = pos - start;
      err.description = message;
      err.context = context;
      return err;
    }
  }, {
    key: 'getJunkEntry',
    value: function getJunkEntry() {
      var pos = this._index;

      var nextEntity = this._findNextEntryStart(pos);

      if (nextEntity === -1) {
        nextEntity = this._length;
      }

      this._index = nextEntity;

      var entityStart = this._findEntityStart(pos);

      if (entityStart < this._lastGoodEntryEnd) {
        entityStart = this._lastGoodEntryEnd;
      }

      var junk = new AST.JunkEntry(this._source.slice(entityStart, nextEntity));
      return junk;
    }
  }, {
    key: '_findEntityStart',
    value: function _findEntityStart(pos) {
      var start = pos;

      while (true) {
        start = this._source.lastIndexOf('\n', start - 2);
        if (start === -1 || start === 0) {
          start = 0;
          break;
        }
        var cc = this._source.charCodeAt(start + 1);

        if (this._isIdentifierStart(cc)) {
          start++;
          break;
        }
      }

      return start;
    }
  }, {
    key: '_findNextEntryStart',
    value: function _findNextEntryStart(pos) {
      var start = pos;

      while (true) {
        if (start === 0 || this._source[start - 1] === '\n') {
          var cc = this._source.charCodeAt(start);

          if (this._isIdentifierStart(cc) || cc === 35 || cc === 91) {
            break;
          }
        }

        start = this._source.indexOf('\n', start);

        if (start === -1) {
          break;
        }
        start++;
      }

      return start;
    }
  }]);
  return ParseContext;
}();

var parser = {
  parseResource: function parseResource(string) {
    var parseContext = new ParseContext$1(string);
    return parseContext.getResource();
  }
};

function transformEntity(entity) {
  if (entity.traits.length === 0) {
    var val = transformPattern(entity.value);
    return Array.isArray(val) ? { val: val } : val;
  }

  var _transformMembers = transformMembers(entity.traits);

  var _transformMembers2 = slicedToArray(_transformMembers, 2);

  var traits = _transformMembers2[0];
  var def = _transformMembers2[1];

  var ret = {
    traits: traits,
    def: def
  };

  return entity.value !== null ? Object.assign(ret, { val: transformPattern(entity.value) }) : ret;
}

function transformExpression(exp) {
  switch (exp.type) {
    case 'EntityReference':
      return {
        type: 'ref',
        name: exp.name
      };
    case 'FunctionReference':
      return {
        type: 'fun',
        name: exp.name
      };
    case 'ExternalArgument':
      return {
        type: 'ext',
        name: exp.name
      };
    case 'Pattern':
      return transformPattern(exp);
    case 'Number':
      return {
        type: 'num',
        val: exp.value
      };
    case 'Keyword':
      var kw = {
        type: 'kw',
        name: exp.name
      };

      return exp.namespace ? Object.assign(kw, { ns: exp.namespace }) : kw;
    case 'KeyValueArg':
      return {
        type: 'kv',
        name: exp.name,
        val: transformExpression(exp.value)
      };
    case 'SelectExpression':
      var _transformMembers3 = transformMembers(exp.variants);

      var _transformMembers4 = slicedToArray(_transformMembers3, 2);

      var vars = _transformMembers4[0];
      var def = _transformMembers4[1];

      return {
        type: 'sel',
        exp: transformExpression(exp.expression),
        vars: vars,
        def: def
      };
    case 'MemberExpression':
      return {
        type: 'mem',
        obj: transformExpression(exp.object),
        key: transformExpression(exp.keyword)
      };
    case 'CallExpression':
      return {
        type: 'call',
        name: transformExpression(exp.callee),
        args: exp.args.map(transformExpression)
      };
    default:
      return exp;
  }
}

function transformPattern(pattern) {
  if (pattern === null) {
    return null;
  }

  if (pattern.elements.length === 1 && pattern.elements[0].type === 'TextElement') {
    return pattern.source;
  }

  return pattern.elements.map(function (chunk) {
    if (chunk.type === 'TextElement') {
      return chunk.value;
    }
    if (chunk.type === 'Placeable') {
      return chunk.expressions.map(transformExpression);
    }
    return chunk;
  });
}

function transformMembers(members) {
  var def = members.findIndex(function (member) {
    return member.default;
  });
  if (def === -1) {
    def = undefined;
  }
  var traits = members.map(transformMember);
  return [traits, def];
}

function transformMember(member) {
  var ret = {
    key: transformExpression(member.key),
    val: transformPattern(member.value)
  };

  return ret;
}

function getEntitiesFromBody(body) {
  var entities = {};
  body.forEach(function (entry) {
    if (entry.type === 'Entity') {
      entities[entry.id.name] = transformEntity(entry);
    } else if (entry.type === 'Section') {
      Object.assign(entities, getEntitiesFromBody(entry.body));
    }
  });
  return entities;
}

function createEntriesFromAST(_ref) {
  var _ref2 = slicedToArray(_ref, 2);

  var resource = _ref2[0];
  var errors = _ref2[1];

  var entities = getEntitiesFromBody(resource.body);
  return [entities, errors];
}

/* jshint node:true */

function load(url) {
  return new Promise(function (resolve, reject) {
    fs.readFile(url, function (err, data) {
      if (err) {
        reject(new L10nError(err.message));
      } else {
        resolve(data.toString());
      }
    });
  });
}

function fetchResource(res, _ref) {
  var code = _ref.code;

  var url = res.replace('{locale}', code);
  return load(url).catch(function (e) {
    return e;
  });
}

exports.FTLASTSerializer = serializer;
exports.FTLASTParser = parser;
exports.FTLEntriesParser = FTLRuntimeParser;
exports.createEntriesFromAST = createEntriesFromAST;
exports.getPluralForms = getPluralForms;
exports.fetchResource = fetchResource;