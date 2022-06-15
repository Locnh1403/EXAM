import React from "react";

const arr1 = [1, 2, 5, 6, 7];
const arr2 = [2, 8, 6, 4, 3];
const newArr = [...arr1, ...arr2];
const result = newArr.filter((v, i) => newArr.indexOf(v) === i);

console.log(result);

const ExA1 = () => {
  return <div>Bài A - 1</div>;
};

export default ExA1;
