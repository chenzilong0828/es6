"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

{
  var a = void 0,
      b = void 0,
      c = void 0;
  a = 1;
  b = 2;
  c = 3;

  console.log(a, b, c);
}

{
  var _a = void 0,
      _b = void 0,
      _c = void 0;
  _a = 1;

  var _ref;

  _b = _ref === undefined ? 6 : _ref;
  _c = 3;

  console.log(_a, _b, _c);
}

{
  var _a2 = void 0,
      arr = void 0;
  _a2 = 1;
  arr = [3, 4];

  console.log(_a2, arr);
}

{
  var _a3 = void 0,
      _c2 = void 0;
  var _ref2 = [1, 2, 3];
  _a3 = _ref2[0];
  _c2 = _ref2[2];

  console.log(_a3, _c2);
}

{
  var _a4 = void 0,
      _b2 = void 0;
  var _a$b = { a: 2, b: 3 };
  _a4 = _a$b.a;
  _b2 = _a$b.b;

  console.log(_a4, _b2);
}

{
  var num = void 0,
      count = void 0;
  var _a$b2 = { a: 4, b: 6 };
  num = _a$b2.a;
  count = _a$b2.b;

  console.log(num, count);
}

{
  var fn = function fn() {
    return {
      name: "Azi",
      lastName: [{
        name: "xiaoAzi"
      }]
    };
  };

  var _b3 = fn();

  var person = _b3.name,
      _b3$lastName = _slicedToArray(_b3.lastName, 1),
      otherPerson = _b3$lastName[0].name;

  console.log(person, otherPerson);
}