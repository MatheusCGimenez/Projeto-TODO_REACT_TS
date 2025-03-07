// STYLES

import styles from "./TaskForm.module.css";

// INTERFACE

import { ITaskList } from "../../interfaces/TaskList";
import { ChangeEvent, FormEvent, SetStateAction, useState } from "react";

type Props = {
  btnText: string;
  taskList: ITaskList[];
  setTaskList: React.Dispatch<SetStateAction<ITaskList[]>>;
};

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  // ESTADOS
  const [id, setId] = useState<number>(Date.now());
  const [title, setTitle] = useState<string>("");

  // EVENTO DE SUBMISSÃO DO FORMULÁRIO
  const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setId(Date.now());

    const newTask: ITaskList = {
      id,
      todo_title: title,
    };

    setTaskList([...taskList, newTask]);

    console.log(taskList);

    // ZERANDO INPUTS
    setTitle("");
  };

  // EVENTO DE ALTERAÇÃO DE ESTADO DO INPUT

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
  };

  return (
    <form onSubmit={addTaskHandle} className={styles.form}>
      <div>
        <label htmlFor="todo_title">
          Título da Tarefa <span>*</span>
        </label>
        <input
          onChange={handleOnChange}
          type="text"
          name="title"
          required
          placeholder="Trabalho da Faculdade..."
          value={title}
        />
        <button type="submit">{btnText}</button>
      </div>
    </form>
  );
};

export default TaskForm;
