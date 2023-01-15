const addTodoItem = (state, { newTodoItem }) => {
  if (localStorage.getItem(newTodoItem) !== null) {
    return;
  }

  const obj = {
    completed: false,
    item: newTodoItem,
  };

  localStorage.setItem(newTodoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
};

const removeTodoItem = (state, { todoItem, index }) => {
  localStorage.removeItem(todoItem.item);
  state.todoItems.splice(index, 1);
};

const toggleTodoComplete = (state, { todoItem, index }) => {
  // todoItem.completed = !todoItem.completed; // 안티패턴
  state.todoItems[index].completed = !state.todoItems[index].completed;
  localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
};

const clearAllTodoItems = state => {
  localStorage.clear();
  state.todoItems = [];
};

export { addTodoItem, removeTodoItem, toggleTodoComplete, clearAllTodoItems };
