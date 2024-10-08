import React, { useEffect, useState } from "react";
import "./Todo.css";

function Task({ task, i, completeTask, removeTask }) {
  return (
    <div>
      <div
        className="task"
        style={{ textDecoration: task.completed ? "line-through" : "" }}
      >
        {task.title}
      </div>
      {task.completed ? null : (
        <button
          style={{ background: "#198754" }}
          onClick={() => {
            completeTask(i);
          }}
        >
          Complete
        </button>
      )}
      <button style={{ background: "#ff3100" }} onClick={() => removeTask(i)}>
        Remove
      </button>
    </div>
  );
}

function CreateTask({ addTask }) {
  const [newTaskValue, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTaskValue) return;
    addTask(newTaskValue);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={newTaskValue}
        placeholder="Add a new task and press enter"
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </form>
  );
}

function Todo() {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
      completed: true,
    },
    {
      title: "Do your workout",
      completed: true,
    },
    {
      title: "Hangout with friends",
      completed: false,
    },
  ]);

  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  });

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    console.log(newTasks);
    setTasks(newTasks);
  };

  const completeTask = (i) => {
    const newTasks = [...tasks];
    newTasks[i].completed = true;
    setTasks(newTasks);
  };

  const removeTask = (i) => {
    const newTasks = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  };
  return (
    <div className="todo-container">
      <div className="header">TODO - ITEMS</div>
      <div>Pending tasks ({tasksRemaining})</div>
      <div className="tasks">
        {tasks.map((task, i) => (
          <Task
            task={task}
            i={i}
            key={i}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
}

export default Todo;
