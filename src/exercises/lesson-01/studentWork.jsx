//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Eduaina Brenda Ighalo';
  const age = 30;
  const hobbies = ['Reading', 'Watching Movies', 'Traveling', 'Baking'];

  return (
    <div>
      {/* add JSX here */}
      <h2>Hi, I&apos;m {name}. </h2>
      <p>
        I&apos;m {age} year old, and currently learning Frontend
        Development(React) with Code the Dream. I enjoy building and learning
        through hands on projects.
      </p>
      <ol>
        {' '}
        <p>Things I like to do include: </p>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ol>
    </div>
  );
}
