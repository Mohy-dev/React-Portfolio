import "../../views/css/ToDo.css";

function ToDoList({ toDos, deleteToDo }) {
  const todosList =
    toDos && toDos.length > 0 ? (
      toDos.map((todo, i) => {
        return (
          <ul key={i}>
            <li className="border d-flex">
              <div className="text-white m-2">
                <p>Index : {i}</p>
                <p>Title : {todo.title}</p>
                <p>Content : {todo.content}</p>
                <button onClick={() => deleteToDo(i)} class="btn btn-danger">
                  delete
                </button>
              </div>
            </li>
          </ul>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
}

export default ToDoList;
