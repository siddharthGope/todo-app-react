import React from "react";
import "./Todo.css";
import { useState } from "react";

function Task({ task }) {
  console.log(Task);
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
    </div>
  );
}

function Todo() {
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
  return (
    <div className="todo-container">
      <div className="header">TODO - ITEMS</div>
      <div className="tasks">
        {tasks.map((task, i) => (
          <Task task={task} i={i} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Todo;
