import { useState, useEffect } from "react";
import "./App.css";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
 

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("tasks is:-", tasks);
  }, [tasks]);


  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask }]);

    setNewTask("");
  };



  return (
    
    <div className={"min-h-screen p-4"}>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button onClick={addTask} className="p-2 bg-blue-500 text-white rounded">
          Add
        </button>
      </div>
      <div className="mt-4 p-4 border rounded">
        
        <h2 className="text-lg font-bold mb-2">Not Done</h2>
        {tasks.map((task) => (
          <div key={task.id} className="p-2 border rounded mb-2">
            {task.text}
          </div>
        ))}

        <h2 className="text-lg font-bold mb-2">Done</h2>

        <div className="p-2 border rounded mb-2"></div>
      </div>

      </div>
    
  );
};

export default ToDoApp;
