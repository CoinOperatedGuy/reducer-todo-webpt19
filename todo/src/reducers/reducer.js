export const initialState = {
    todos: [{
    item: "Learn about reducers",
    selected: false,
    id: 3892987589}]
  }

  export function reducer(state = initialState, action) {
    switch (action.type) {
        // add
        case "ADD_TODO":
          const newItem = {
            item: action.payload,
            id: Date.now(),
            selected: false
          };
          return {
            ...state,
              todos:  [...state.todos, newItem]
          }

          // toggle
        case "TOGGLE_TODO":
          let newTodos = state.todos.map(todo => {
            if (action.payload === todo.id) {
              return {
                ...todo,
                selected: !todo.selected
              };
            }
            return todo;
          })
          return {
            ...state,
              todos:  [...newTodos]
          }
        // delete  
        case "DELETE_TODO":
          let deletedTodos = state.todos.filter(item => {
            return !item.selected;
          })
          return {
            ...state,
            todos:  [...deletedTodos]
          }

        // default    
        default:
          return state;
    }
  }  