import { useState } from "react";
import { TaskCard } from "./components/TaskCard";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  function handleAdd(e) {
    e.preventDefault();
    const task = {
      id: Math.random() * 10 * Math.random(),
      sub: e.target.subject.value,
      hr: e.target.hours.value,
    };
    e.target.subject.value = "";
    e.target.hours.value = "";
    setTasks([...tasks, task]);
    console.log(tasks);
  }
  return (
    <div className="App">
      <h1>Geekster Education Planner</h1>
      <div>
        <form onSubmit={handleAdd} className="inputbox">
          <input
            name="subject"
            id="subject"
            type="text"
            placeholder="Subject"
            required
          />
          <input
            name="hours"
            id="hours"
            type="number"
            min="0"
            placeholder="Hours"
            required
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div id="displayarea">
        {tasks &&
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              tasks={tasks}
              setTasks={setTasks}
              task={task}
            />
          ))}
      </div>
    </div>
  );
}
