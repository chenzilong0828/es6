{
  let a, b, c;
  [a, b, c] = [1, 2, 3];
  console.log(a, b, c);
}

{
  let a, b, c;
  [a, b = 6, c] = [1, , 3];
  console.log(a, b, c);
}

{
  let a, arr;
  [a, ...arr] = [1, 3, 4];
  console.log(a, arr);
}

{
  let a, c;
  [a, , c] = [1, 2, 3];
  console.log(a, c);
}

{
  let a, b;
  ({ a, b } = { a: 2, b: 3 });
  console.log(a, b);
}

{
  let num, count;
  ({ a: num, b: count } = { a: 4, b: 6 });
  console.log(num, count);
}

{
  function fn() {
    return {
      name: "Azi",
      lastName: [
        {
          name: "xiaoAzi",
        },
      ],
    };
  }
  let b = fn();
  let {
    name: person,
    lastName: [{ name: otherPerson }],
  } = b;
  console.log(person, otherPerson);
}
