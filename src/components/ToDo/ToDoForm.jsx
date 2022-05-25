import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../Redux";
import "../../views/css/ToDo.css";

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
    <div className="border m-3 p-2">
      <h3 className="text-muted mb-4">Add a TODO</h3>

      <form onSubmit={resetSubmission}>
        <div className="text-white">Title</div>
        <br />
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-white"
          required
        />
        <br />
        <div className="text-white mt-2">Content</div>
        <br />
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
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
