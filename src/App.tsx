import { useEffect, useState } from "react";
import "./App.css";

// COMPONENTS
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

// INTERFACE

import { ITaskList } from "./interfaces/TaskList";

function App() {
  const [taskList, setTaskList] = useState<ITaskList[]>([]);

  // EVENTO PARA REMOVER UMA TAREFA

  const deleteTodo = (id: number): void => {
    const deleteTodo = taskList.filter((elements) => elements.id !== id);
    setTaskList(deleteTodo);
  };

  useEffect(() => {}, [taskList]);

  return (
    <>
      <Header />
      <div className="main_container">
        <TaskForm
          btnText="Criar tarefa"
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <hr />
        <h2 className="tarefas">Tarefas</h2>
        <TaskList taskList={taskList} deleteTodo={deleteTodo} />
      </div>
      <Footer />
    </>
  );
}

export default App;
