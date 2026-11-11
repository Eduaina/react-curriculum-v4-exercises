// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render

import { useState } from 'react';

export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((count) => count + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

/*
I used useState because I want the counter to update in the UI.
The setter function updates the count whenever the button is clicked.
I tried useRef, it didn't work here because it didn't trigger a re-render.
*/
