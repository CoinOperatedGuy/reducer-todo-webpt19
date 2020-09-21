import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer } from "./reducers/reducer.js";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggle = itemId => {
      dispatch({type: 'TOGGLE_TODO', payload: itemId})
  };

  const deleteItem = (e) => {
      e.preventDefault();
      dispatch({type: "DELETE_TODO"})
  };

  const addItem = (e, item) => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', payload: item})
  }

    return (
      <div className='App'>
        <h1>Todo List</h1>
        <TodoForm addItem={addItem} />
        <TodoList todos={state.todos} toggle={toggle} />
        <button onClick={deleteItem}>Clear Selected</button>
      </div>
    );
}

export default App; 