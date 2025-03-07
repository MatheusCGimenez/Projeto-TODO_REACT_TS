// STYLES
import styles from "./TaskList.module.css";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

// INTERFACE

import { ITaskList } from "../../interfaces/TaskList";

type Props = {
  taskList: ITaskList[];
  deleteTodo: (id: number) => void;
};

const TaskList = ({ taskList, deleteTodo }: Props) => {
  const handleOnDeleteTodo = (id: number) => {
    deleteTodo(id);
  };
  return (
    <section className={styles.task_container}>
      <div className={styles.tasklist}>
        {taskList.length > 0 ? (
          taskList.map((element, index) => (
            <h3 key={index}>
              {element.todo_title}
              <div className={styles.actions}>
                <FaTrash
                  onClick={() => {
                    handleOnDeleteTodo(element.id);
                  }}
                  className={styles.icon}
                />
                <MdEdit className={styles.icon} />
              </div>
            </h3>
          ))
        ) : (
          <h3>Nenhuma tarefa cadastrada!</h3>
        )}
      </div>
    </section>
  );
};

export default TaskList;
