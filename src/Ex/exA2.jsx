import React from "react";

const data = [
  {
    name: "Arsenal",
    points: 99,
    GD: 45,
  },
  {
    name: "Chelsea",
    points: 75,
    GD: 39,
  },
  {
    name: "Manchester United",
    points: 60,
    GD: 29,
  },
  {
    name: "Liverpool",
    points: 88,
    GD: 39,
  },
];

console.log(data);

const charts = data.sort((a, b) => b.points - a.points);

console.log(charts)

const ExA2 = () => {
  return (
    <>
      <div>Bài A - 2</div>
    </>
  );
};

export default ExA2;
