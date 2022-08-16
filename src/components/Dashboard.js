// Always remember to import React into your component.
import React, { useState } from 'react';
import { Checklist } from './Checklist';
import { Progress } from './Progress';
import { RiAddCircleLine } from 'react-icons/ri';

const todosStub = [
  { 
    id: 1,
    label: 'Learn React',
    status: 'Complete'
  },
  {
    id: 2,
    label: 'Learn to juggle',
    status: 'In Progress'
  },
  {
    id: 3,
    label: 'Learn origami',
    status: 'In Progress'
  },
  {
    id: 4,
    label: 'Boogie',
    status: 'In Progress'
  }
]

function Dashboard() {
  // Defining a state for todos. First value it reads the todo list and the second value changes the list.
  // A default value can be passed to use state.
  const [todos, setTodos] = useState(todosStub);

  const createTask = (todos, label="New task", status="In Progress",) => {
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

  const changeTask = (id, label="", todos) => {
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


  const removeTask = (id, todos) => {
    const todo = todos.find(todo => todo.id === id);    

    if (todo) {
      const pos = todos.indexOf(todo);
      const updatedList = structuredClone(todos);

      updatedList.splice(pos, 1);
      
      setTodos(updatedList);

    }
  }


  const updateStatus = (id, todos) => {
    const todo = todos.find(todo => todo.id === id);  
    
    if(todo) {
      if (todo.status.toLowerCase() !== "complete") {
        todo.status = "Complete";
      }
      else {
        todo.status = "In Progress";
      }
      
      const updatedList = structuredClone(todos).map(originalTodo => {
        if (todo.id === originalTodo.id) {
          return todo;
        }

        return originalTodo;
      })

      setTodos(updatedList);

    }
  }

  const completedTasks = () => {
    return todos.filter(todo => todo.status.toLowerCase() === "complete").length;
  }
  const inProgressTasks = () => {
    return todos.filter(todo => todo.status.toLowerCase() === "in progress").length;
  }
  

  // Inside return is JSX (comments appear differently to JS).
  return (
    <main className="flex flex-col items-start justify-center gap-8 
    m-12 mx-auto p-8 rounded-lg border w-1/2  bg-cream-500 outline outline-offset-8 outline-2 outline-cream-500 max-w-2xl">
      {/* Fragments allow you to have multiple child nodes from a component */}
      <div className="justify-self-start">
        <h1 className="text-2xl font-bold text-slate-700">Dashboard</h1>
      </div>

      <section id="checklist-section" className="space-y-6 w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-700">Checklist</h2>

          <button
            type="button"
            className="flex items-center gap-2 p-4 py-2 rounded 
            font-bold text-sm transition-colors text-dentist-900 
            hover:text-dentist-800 bg-dentist-200 hover:bg-dentist-300 outline outline-offset-2 outline-2 outline-dentist-500"
            onClick={() => createTask(todos)}
          >
            Add Task
            <RiAddCircleLine />
          </button>
        </div>

        {/* Include component with prop */}
        <Checklist 
          todos={todos}
          handleChange={changeTask}
          handleRemove={removeTask} 
          handleStatus={updateStatus}
        />
      </section>
    
      <section className="progress-section space-y-6 w-full">
        <h2 className="text-lg font-bold text-slate-700">Progress</h2>
        <Progress
          label={"Completed"}
          percentage={Math.round(completedTasks() * 100 / todos.length)}
        />

        <Progress
          label={"In Progress"}
          percentage={Math.round(inProgressTasks() * 100 / todos.length)}
        />
      </section>

      
    </main>
  );
}

// Always export component functions to import them elsewhere. e.g in App.js
export default Dashboard;