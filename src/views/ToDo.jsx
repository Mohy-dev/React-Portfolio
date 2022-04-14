import ToDoForm from "../../src/components/ToDo/ToDoForm";
import ToDoList from "../../src/components/ToDo/ToDoList";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, deleteToDo } from "../Redux/index";

function ToDo() {
  const toDos = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const addTodoItem = (task) => {
    dispatch(addToDo(task));
  };

  const deleteToDoItem = (index) => {
    dispatch(deleteToDo(index));
  };

  return (
    <div className="text-center py-2 todo-wrapper container">
      <ToDoForm addToDo={addTodoItem} />
      <ToDoList toDos={toDos} deleteToDo={deleteToDoItem} />
    </div>
  );
}

export default ToDo;
