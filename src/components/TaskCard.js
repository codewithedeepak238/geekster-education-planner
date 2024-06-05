import React from "react";

export const TaskCard = ({ tasks, setTasks, task }) => {
  function add(task) {
    tasks.forEach((element) => {
      if (element.id === task.id) {
        element.hr = Number(element.hr) + 1;
      }
    });
    setTasks([...tasks]);
  }
  function minus(task) {
    tasks.forEach((element) => {
      if (element.id === task.id) {
        if (element.hr >= 1) {
          element.hr = Number(element.hr) - 1;
        }
      }
    });
    setTasks([...tasks]);
  }
  function deleteTask(task) {
    const newTasks = tasks.filter((element) => task.id !== element.id);
    setTasks([...newTasks]);
  }
  return (
    <div className="taskList" key={task.id}>
      <p>{task.sub} -</p>
      <p>{task.hr} hours</p>
      <button onClick={() => add(task)} id="add">
        +
      </button>
      <button onClick={() => minus(task)} id="remove">
        -
      </button>
      <button onClick={() => deleteTask(task)} id="delete">
        Completed
      </button>
    </div>
  );
};
