// Always remember to import React into your component.
import React, { useState } from 'react';
import { Checklist } from './Checklist';
import { RiAddCircleLine } from 'react-icons/ri';

const todosStub = [
  { 
    id: 1,
    label: 'Learn React',
    status: 'Complete'
  },
  {
    id: 2,
    label: 'Learn GraphQL',
    status: 'In Progress'
  },
  {
    id: 3,
    label: 'Learn Apollo',
    status: 'In Progress'
  },
  {
    id: 4,
    label: 'Learn Apollo Client',
    status: 'In Progress'
  }
]

function Dashboard() {
  // Defining a state for todos. First value it reads the todo list and the second value changes the list.
  // A default value can be passed to use state.
  const [todos, setTodos] = useState(todosStub);

  console.log("list update", todos)

  const createTask = (label="New task", status="In Progress") => {
    const todo = {
      id: todos.length + 1,
      label,
      status
    };

    // structuredClone is an API that allows you to create a deep clone of structured data.
    // You won't usually need this.
    const newList = structuredClone(todos);
    // Add the new item to the array.
          newList.push(todo);
    // Update the state with the new updated list
    setTodos(newList);
  }

  const changeTask = (id, label="") => {
    const todo = todos.find(todo => todo.id === id);

    if (todo) {
      todo.label = label;

      const updatedList = structuredClone(todos).map(originalTodo => {
        if (todo.id === originalTodo.id) {
          return todo;
        }

        return originalTodo;
      });

      setTodos(updatedList);
    }
  }

  // TODO: Add remove task function.
  
  // Inside return is JSX (comments appear differently to JS).
  return (
    <main className="flex flex-col items-start justify-center gap-8 m-12 mx-auto p-8 rounded-lg border w-1/2">
      {/* Fragments allow you to have multiple child nodes from a component */}
      <div className="justify-self-start">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <section id="checklist-section" className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Checklist</h2>

          <button
            type="button"
            className="flex items-center gap-2 p-4 py-2 rounded font-bold text-sm text-emerald-700 hover:text-emerald-900 bg-emerald-100 hover:bg-emerald-200"
            onClick={() => createTask()}
          >
            Add Task
            <RiAddCircleLine />
          </button>
        </div>

        {/* Include component with prop */}
        <Checklist todos={todos} handleChange={changeTask} />
      </section>
    </main>
  );
}

// Always export component functions to import them elsewhere. e.g in App.js
export default Dashboard;