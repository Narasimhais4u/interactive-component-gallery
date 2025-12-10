import { useState, type ChangeEvent, type FormEvent } from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

function TodoDemo() {
 const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Learn React', completed: true, priority: 'high' },
    { id: 2, text: 'Build a project', completed: false, priority: 'medium' },
    { id: 3, text: 'Deploy to production', completed: false, priority: 'low' },
  ]);
  const [newTask, setNewTask] = useState<string>('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask.trim() === '') return;

    const task: Task = {
      id: Date.now(),
      text: newTask,
      completed: false,
      priority: priority
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#22c55e';
      default: return '#64748b';
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '600px' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Todo Manager</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <input
            type="text"
            value={newTask}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            style={{
              flex: 1,
              padding: '0.75rem',
              border: '2px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
          <select
            value={priority}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setPriority(e.target.value as any)}
            style={{
              padding: '0.75rem',
              border: '2px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button
            type="submit"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600'
            }}
          >
            Add
          </button>
        </div>
      </form>

      <div>
        {tasks.length === 0 ? (
          <div style={{
            padding: '3rem',
            textAlign: 'center',
            color: '#94a3b8',
            backgroundColor: '#f8fafc',
            borderRadius: '12px'
          }}>
            <p style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Check</p>
            <p>No tasks yet. Add one above!</p>
          </div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tasks.map(task => (
              <li
                key={task.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  marginBottom: '0.5rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  borderLeft: `4px solid ${getPriorityColor(task.priority)}`
                }}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  style={{ cursor: 'pointer', width: '18px', height: '18px' }}
                />
                <span
                  style={{
                    flex: 1,
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? '#94a3b8' : '#1e293b',
                    fontWeight: task.priority === 'high' ? '600' : '400'
                  }}
                >
                  {task.text}
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.5rem',
                    backgroundColor: getPriorityColor(task.priority),
                    color: 'white',
                    borderRadius: '4px',
                    fontWeight: '600',
                    textTransform: 'uppercase'
                  }}
                >
                  {task.priority}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  style={{
                    padding: '0.5rem 0.75rem',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.875rem'
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: '#f8fafc',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.875rem',
        color: '#64748b'
      }}>
        <span>Total: {tasks.length}</span>
        <span>Completed: {tasks.filter(t => t.completed).length}</span>
        <span>Remaining: {tasks.filter(t => !t.completed).length}</span>
      </div>
    </div>
  );
}

export default TodoDemo;