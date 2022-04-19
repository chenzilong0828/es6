{
  const json = [
    { title: "html", status: 1 },
    { title: "css", status: 0 },
    { title: "js", status: 0 },
    { title: "webpack", status: 1 },
  ];
  const result = json.map((item, index, array) => {
    console.log(item, index, array);
    // return {
    //   title: item.title,
    //   status: item.status == 1 ? "已上线" : "未上线",
    // };
    let obj = {};
    Object.assign(obj, item);
    obj.status = item.status ? "已上线" : "未上线";
    return obj;
  });
  console.log(result);
}

{
  //reduce 求和
  let arr = [1, 2, 3, 4, 5];
  let result = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  console.log(result); // 15
}

{
  let arr = [[1, 2, 3], 4, 5, [6, 7, 8]];
  let result = arr.reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);
  console.log(result); // [1,2,3,4,5,6,7,8]
}

{
  const letterList = "adfcscscscscwersfscsew";
  const result = letterList.split("").reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});
  console.log(result); // {a: 1, d: 1, f: 2, c: 6, s: 7, w: 2}
}

{
  const list = [["1st", 2, 3, ["2st", 4, 5, ["3st", 6, 7]]]];
  const deepFlat = function (list) {
    return list.reduce((acc, cur) => {
      return acc.concat(Array.isArray(cur) ? deepFlat(cur) : cur);
    }, []);
  };
  console.log(deepFlat(list)); // ['1st', 2, 3, '2st', 4, 5, '3st', 6, 7]
}
