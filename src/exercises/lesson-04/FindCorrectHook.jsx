// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';

export default function FindCorrectHook() {
  const clickCount = useRef(0);

  function handleClick() {
    clickCount.current++;
    console.log('Clicks:', clickCount.current);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>Clicks</button>
    </div>
  );
}

// Explanation:
// Since a normal variable resets on every render, it cannot persist values.
// useRef allows for a value to persist across renders without a re-render.
// Updating clickCount.current does not update the UI, which is why I logged the value in the console instead.
// This shows how useRef is useful for storing values that do not need to trigger UI updates.
