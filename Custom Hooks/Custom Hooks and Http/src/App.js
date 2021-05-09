import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useTasks from "./hooks/use-tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const tansformTasks = (tasksObj) => {
    const loadedTasks = [];
    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }
    setTasks(loadedTasks);
  };

  const httpData = useTasks();

  // sendRequests: fetchTasks --_> Here we give sendRequests an alias
  const { isLoading, error, sendRequests: fetchTasks } = httpData;

  useEffect(() => {
    fetchTasks(
      {
        url:
          "https://reactdb587587-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
      },
      tansformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
