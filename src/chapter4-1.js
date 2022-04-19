{
  var str1 = "a";
  var str2 = "\u20BB7";
  console.log(str2); //₻7
}

{
  var str3 = "\u{20bb7}";
  console.log("str3", str3); //str3 𠮷
}

{
  // for of
  // 在es6中，尽量使用for of 循环，它支持的比for循环更多
  const str3 = "\u{20bb7}";
  for (let i = 0; i < str3.length; i++) {
    console.log("for", str3[i]); //for �
  }
  for (let word of str3) {
    console.log("for-of", word); //for-of 𠮷
  }
}

// 判断字符串是否包含指定字符串的几个方法
{
  let str = "123Azi456";
  console.log("includes", str.includes("Azi")); //includes true
  console.log("startsWith", str.startsWith("Azi", 3)); //startsWith true
  console.log("endsWidth", str.endsWith("Azi", 6)); //endsWidth true
  console.log("repeat", str.repeat(3)); //repeat 123Azi456123Azi456123Azi456
}

{
  let str = "Azi";
  console.log("padStart", str.padStart(5, "超勇")); //padStart 超勇Azi
  console.log("padEnd", str.padEnd(5, "超勇")); //padEnd Azi超勇
}

{
  const name = "Azi";
  const age = 27;
  const str = "我叫" + name + "，我今年" + age + "岁。";
  console.log("es5-str", str); //es5-str 我叫Azi，我今年27岁。
  const str2 = `我叫${name}，我今年${age}岁。`;
  console.log("es6-str", str2); //es6-str 我叫Azi，我今年27岁。
}
