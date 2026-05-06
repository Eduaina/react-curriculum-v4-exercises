export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

// Explanation:
// State is managed in the Parent component.
// The Parent passes a function (increment) to the Child as a prop.
// The Child calls this function when the button is clicked.
// This allows the Child to update the Parent's state.
