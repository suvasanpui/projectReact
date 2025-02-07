import { FC } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const Example: FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default Example;
