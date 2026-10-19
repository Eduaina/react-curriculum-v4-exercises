export default function SnackList() {
  const snacks = [
    { name: 'Chips', rank: 5 },
    { name: 'Puff-Puff', rank: 4 },
    { name: 'Chin-chin', rank: 3 },
    { name: 'Peanuts', rank: 2 },
    { name: 'Biscuit', rank: 1 },
  ];

  const SortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <div>
      <ol>
        {SortedSnacks.map((snack) => (
          <li key={snack.rank}> {snack.name} </li>
        ))}
      </ol>
    </div>
  );
}
