export default function SnackList() {
  const Snacks = [
    { name: 'Peanut Butter Cups', rank: 1 },
    { name: 'Oreo Cookies', rank: 2 },
    { name: 'Doritos', rank: 3 },
    { name: 'Gummy Clusters', rank: 11 },
    { name: 'Cheez-Its', rank: 6 },
    { name: 'Popcorn', rank: 5 },
    { name: 'Takis', rank: 14 },
    { name: 'Skittles', rank: 13 },
    { name: 'Salt Water Taffy', rank: 12 },
    { name: 'Pringles', rank: 4 },
    { name: 'Cheetos', rank: 7 },
    { name: 'Rice Krispies Treats', rank: 8 },
    { name: 'Beef Jerky', rank: 9 },
    { name: 'Twizzlers', rank: 10 },
  ];

  const Favorite = Snacks.toSorted((a, b) => b.rank - a.rank);

  return (
    <ul>
      {Favorite.map((item) => (
        <li key={item.rank}> {item.name} </li>
      ))}
    </ul>
  );
}
