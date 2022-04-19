"use strict";

{
  var json = [{ title: "html", status: 1 }, { title: "css", status: 0 }, { title: "js", status: 0 }, { title: "webpack", status: 1 }];
  var result = json.map(function (item, index, array) {
    console.log(item, index, array);
    // return {
    //   title: item.title,
    //   status: item.status == 1 ? "已上线" : "未上线",
    // };
    var obj = {};
    Object.assign(obj, item);
    obj.status = item.status ? "已上线" : "未上线";
    return obj;
  });
  console.log(result);
}

{
  //reduce 求和
  var arr = [1, 2, 3, 4, 5];
  var _result = arr.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  console.log(_result); // 15
}

{
  var _arr = [[1, 2, 3], 4, 5, [6, 7, 8]];
  var _result2 = _arr.reduce(function (acc, cur) {
    return acc.concat(cur);
  }, []);
  console.log(_result2); // [1,2,3,4,5,6,7,8]
}

{
  var letterList = "adfcscscscscwersfscsew";
  var _result3 = letterList.split("").reduce(function (acc, cur) {
    acc[cur] ? acc[cur]++ : acc[cur] = 1;
    return acc;
  }, {});
  console.log(_result3); // {a: 1, d: 1, f: 2, c: 6, s: 7, w: 2}
}

{
  var list = [["1st", 2, 3, ["2st", 4, 5, ["3st", 6, 7]]]];
  var deepFlat = function deepFlat(list) {
    return list.reduce(function (acc, cur) {
      return acc.concat(Array.isArray(cur) ? deepFlat(cur) : cur);
    }, []);
  };
  console.log(deepFlat(list)); // ['1st', 2, 3, '2st', 4, 5, '3st', 6, 7]
}