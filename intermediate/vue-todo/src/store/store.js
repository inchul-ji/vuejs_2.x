import Vue from 'vue';
import Vuex from 'vuex';
// import * as getters from '@/store/getters';
// import * as mutations from '@/store/mutations';
import todoApp from '@/store/modules/todoApp';

Vue.use(Vuex);

// const storage = {
//   fetch() {
//     const arr = [];
//     for (var i = 0; i < localStorage.length; i++) {
//       if (!localStorage.key(i).includes('webpack')) {
//         arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//       }
//     }
//     return arr;
//   },
// };

export const store = new Vuex.Store({
  modules: {
    todoApp,
  },
});

// export const store = new Vuex.Store({
//   state: {
//     headerText: 'TODO it!',
//     todoItems: storage.fetch(),
//   },
//   getters: getters,
//   // getters: {
//   //   storedTodoItems(state) {
//   //     return state.todoItems;
//   //   },
//   // },

//   mutations: mutations,
//   // mutations: {
//   //   addTodoItem(state, { newTodoItem }) {
//   //     if (localStorage.getItem(newTodoItem) !== null) {
//   //       return;
//   //     }
//   //     const obj = {
//   //       completed: false,
//   //       item: newTodoItem,
//   //     };
//   //     localStorage.setItem(newTodoItem, JSON.stringify(obj));
//   //     state.todoItems.push(obj);
//   //   },
//   //   removeTodoItem(state, { todoItem, index }) {
//   //     localStorage.removeItem(todoItem.item);
//   //     state.todoItems.splice(index, 1);
//   //   },
//   //   toggleTodoComplete(state, { todoItem, index }) {
//   //     // todoItem.completed = !todoItem.completed; // 안티패턴
//   //     state.todoItems[index].completed = !state.todoItems[index].completed;
//   //     localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
//   //   },
//   //   clearAllTodoItems(state) {
//   //     localStorage.clear();
//   //     state.todoItems = [];
//   //   },
//   // },
// });
