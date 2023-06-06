import { useState } from 'react';
import React from 'react';

export default function Counter() {
  const [points, setPoints] = useState(0);

  function handleClick() {
    console.log(points)
    setPoints(points + 1);
  }

  return (
    <button onClick={handleClick}>
      You have this many  {points}  points
    </button>
  );
}
