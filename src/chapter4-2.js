{
  let list = [1, 2, 3, 4, 5];
  let list2 = [...list]; // 相当于了一个浅拷贝的操作。
  list.push(6);
  console.log(list); // [1,2,3,4,5,6]
  console.log(list2); // [1,2,3,4,5]

  //分割数组
  let totalList = [1, "a", "b", "c"];
  let [, ...strList] = totalList; // 这里借助了占位符和扩展运算符，就进行了分割数组的操作
  console.log("strList", strList); // strList ['a', 'b', 'c']

  //给函数传递参数
  function add(x, y) {
    return x + y;
  }
  let addList = [1, 2];
  console.log(add(...addList)); // 3
}

{
  // fill 一般使用在数据的初始化时使用，作用是替换数组里的数据
  // fill() 方法用于将一个固定值替换数组的元素。可将一个数组中的部分或者全部内容替换为一个你想要的固定值
  let list = [1, 2, 3, 4, 5];
  let list2 = [...list].fill(3);
  console.log(list2); // [3, 3, 3, 3, 3]
  let list3 = [...list].fill(3, 1, 4); //这里第二个参数时数组下标，第三个参数是所在第几个的位置。
  console.log(list3); // [1, 3, 3, 3, 5]
}

{
  //find findIndex
  const list = [{ title: "html" }, { title: "css" }, { title: "js", id: 2 }, { title: "js", id: 3 }];
  let result = list.find((item) => {
    return item.title == "js";
  });
  console.log(result); // {title: 'js', id: 2}
  let result2 = list.findIndex((item) => {
    return item.title == "js";
  });
  console.log(result2); // 2
}

{
  // includes
  let list = [1, 2, 3, 4, 5, 6];
  let result = list.includes(2);
  console.log(result); // true
}

{
  //flat 展开数组的操作
  let list = [1, 2, 3, ["2nd", 4, 5, 6, ["3nd", 7, 8, 9]]];
  let result = [].concat(...list);
  console.log(result); // [1, 2, 3, '2nd', 4, 5, 6, Array(4)]  这里，用concat只能展开2级的数组，需要搭配循环来完全展开（不方便）
  let result2 = list.flat(2);
  console.log(result2); // [1, 2, 3, '2nd', 4, 5, 6, '3nd', 7, 8, 9]  这里，flat里传入的2代表要展开的层级数量
}
