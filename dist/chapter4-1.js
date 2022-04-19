"use strict";

{
  var str1 = "a";
  var str2 = "\u20BB7";
  console.log(str2); //₻7
}

{
  var str3 = "\uD842\uDFB7";
  console.log("str3", str3); //str3 𠮷
}

{
  // for of
  // 在es6中，尽量使用for of 循环，它支持的比for循环更多
  var _str = "\uD842\uDFB7";
  for (var i = 0; i < _str.length; i++) {
    console.log("for", _str[i]); //for �
  }
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var word = _step.value;

      console.log("for-of", word); //for-of 𠮷
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
}

// 判断字符串是否包含指定字符串的几个方法
{
  var str = "123Azi456";
  console.log("includes", str.includes("Azi")); //includes true
  console.log("startsWith", str.startsWith("Azi", 3)); //startsWith true
  console.log("endsWidth", str.endsWith("Azi", 6)); //endsWidth true
  console.log("repeat", str.repeat(3)); //repeat 123Azi456123Azi456123Azi456
}

{
  var _str2 = "Azi";
  console.log("padStart", _str2.padStart(5, "超勇")); //padStart 超勇Azi
  console.log("padEnd", _str2.padEnd(5, "超勇")); //padEnd Azi超勇
}

{
  var name = "Azi";
  var age = 27;
  var _str3 = "我叫" + name + "，我今年" + age + "岁。";
  console.log("es5-str", _str3); //es5-str 我叫Azi，我今年27岁。
  var _str4 = "\u6211\u53EB" + name + "\uFF0C\u6211\u4ECA\u5E74" + age + "\u5C81\u3002";
  console.log("es6-str", _str4); //es6-str 我叫Azi，我今年27岁。
}