//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((num) => num + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// The useEffect ran after every render creating an infinite loop.
// Adding an empty dependency array ensures the effect runs only once when the component mounts.
