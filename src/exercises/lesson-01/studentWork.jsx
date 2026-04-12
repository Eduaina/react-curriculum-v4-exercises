//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const fullName = 'Eduaina Brenda Ighalo';
  const age = 30;
  const hobbies = [
    'All types of Board Games',
    'Reading',
    'Travelling',
    'Taking Walks',
    'Watching Anime',
    'Seeing a movie',
    'Sight Seeing',
    'Hanging out with friends, and doing adventurous stuff',
  ];

  return (
    <div>
      {/* add JSX here */}
      <h1>Hello I'm {fullName} </h1>
      <p>
        {' '}
        A Front-end focused developer building responsive apps with modern
        JavaScript and React. {age}, sharp, and serious about leveling up into
        tech related global opportunities.{' '}
      </p>
      <ol>
        {hobbies.map((hob, index) => (
          <li key={index}>{hob}</li>
        ))}
      </ol>
    </div>
  );
}
