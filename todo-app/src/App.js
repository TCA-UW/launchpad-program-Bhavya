import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// initialize Supabase client
const supabase = createClient(
  import.meta.env.REACT_APP_SUPABASE_URL,
  import.meta.env.REACT_APP_SUPABASE_ANON_KEY
);

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch tasks from Supabase
  useEffect(() => {
    async function fetchTasks() {
      const { data, error } = await supabase.from('tasks').select('*');
      if (error) {
        console.error('Error fetching tasks:', error.message);
      } else {
        setTasks(data);
      }
      setLoading(false);
    }

    fetchTasks();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>My To-Do List</h1>

      {loading ? (
        <p>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.text} {task.completed ? '✅' : ''}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;