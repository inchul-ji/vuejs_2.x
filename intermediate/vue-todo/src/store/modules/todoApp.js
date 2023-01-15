const storage = {
  fetch() {
    const arr = [];
    for (var i = 0; i < localStorage.length; i++) {
      if (!localStorage.key(i).includes('webpack')) {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return arr;
  },
};

const state = {
  headerText: 'TODO it!',
  todoItems: storage.fetch(),
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
};

const mutations = {
  addTodoItem(state, { newTodoItem }) {
    if (localStorage.getItem(newTodoItem) !== null) {
      return;
    }
    const obj = {
      completed: false,
      item: newTodoItem,
    };
    localStorage.setItem(newTodoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeTodoItem(state, { todoItem, index }) {
    localStorage.removeItem(todoItem.item);
    state.todoItems.splice(index, 1);
  },
  toggleTodoComplete(state, { todoItem, index }) {
    // todoItem.completed = !todoItem.completed; // 안티패턴
    state.todoItems[index].completed = !state.todoItems[index].completed;
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  },
  clearAllTodoItems(state) {
    localStorage.clear();
    state.todoItems = [];
  },
};

export default {
  state,
  getters,
  mutations,
};
