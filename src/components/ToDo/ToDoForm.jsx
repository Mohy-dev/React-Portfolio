import { useState } from "react";
import "../../views/css/ToDo.css";
import { useDispatch } from "react-redux";
import { addToDo } from "../../Redux";

function ToDoForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const addTodoItem = (task) => {
    console.log(task);
    dispatch(addToDo(task));
  };

  const resetSubmission = (e) => {
    if (title !== "" || content !== "") {
      e.preventDefault();
      addTodoItem({ title, content });
      setTitle("");
      setContent("");
    } else {
      e.preventDefault();
    }
  };

  return (
    <div>
      <h3 className="text-muted mb-4">Add a TODO</h3>

      <form onSubmit={resetSubmission}>
        Title <br />
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        Content <br />
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button className="my-4 btn btn-primary btn-sm px-4" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
