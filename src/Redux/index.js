import { combineReducers, createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const PLUS = "PLUS_COUNTER";
const MINUS = "MINUS_COUNTER";

export const addToDo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const initialState = {
  todoList: [
    {
      title: "title test",
      content: "content test",
    },
  ],
  counter: 0,
};

const counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case PLUS:
      return { ...state, counter: ++state.counter };
    case MINUS:
      return {
        ...state,
        counter: --state.counter,
      };
    default:
      return state;
  }
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todoList: [...state.todoList, action.payload] };
    case DELETE_TODO:
      return {
        ...state,
        todoList: [...state.todoList.filter((item, id) => id !== action.id)],
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todoReducer,
  counterReducer,
});

export const store = createStore(todoReducer);
