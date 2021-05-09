import useTasks from "../../hooks/use-tasks";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  // Alias again ----> sendRequests: sendTaskRequest
  const { isLoading, error, sendRequests: sendTaskRequest } = useTasks();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url:
          "https://reactdb587587-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: {
          "Content-Type": "application/json",
        },
      },

      // BIND --> ( first paramerter specifies the 'this' inside the function
      // The rest are the parameters of the function )
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
