import { useState } from 'react';

import UserProfile from './components/UserProfile';
import FilterButtons from './components/FilterButtons';
import TaskItem from './components/TaskItem';

import useTasks from './hooks/useTasks';

import filterTasks from './utils/filterTasks';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');

  const { tasks, loading } = useTasks();

  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />

      <FilterButtons filter={filter} setFilter={setFilter} />

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

/*
EXPLANATION:

1. I extracted reusable UI into separate components:
- UserProfile
- FilterButtons
- TaskItem

Keeping StudentWork.jsx smaller and easier to read.

2. I moved the filtering logic into a helper function called filterTasks.
The helper contains only JavaScript logic and no React code.

3. I created a custom hook called useTasks to manage:
- fetching task data
- loading state
- useEffect logic

This separates stateful logic from UI rendering.

4. StudentWork.jsx is now focused mainly on composition.
It imports reusable components, the helper function,
and the custom hook instead of containing all logic directly.
*/
