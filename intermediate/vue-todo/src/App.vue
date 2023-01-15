<template>
  <div id="app">
    <TodoHeader />
    <!-- <TodoInput v-on:addTodoItem="addTodoItem" /> -->
    <TodoInput />
    <!-- <TodoList
      v-bind:todoItems="todoItems"
      v-on:removeTodoItem="removeTodoItem"
      v-on:toggleTodoComplete="toggleTodoComplete"
    /> -->
    <TodoList />
    <!-- <TodoFooter v-on:clearAllTodoItems="clearAllTodoItems" /> -->
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import TodoFooter from '@/components/TodoFooter.vue';

export default {
  name: 'App',
  // data() {
  //   return {
  //     todoItems: [],
  //   };
  // },
  methods: {
    // addTodoItem(todoItem) {
    //   if (localStorage.getItem(todoItem) !== null) {
    //     return;
    //   }
    //   const obj = {
    //     completed: false,
    //     item: todoItem,
    //   };
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // removeTodoItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);
    // },
    // toggleTodoComplete(todoItem, index) {
    //   // todoItem.completed = !todoItem.completed; // 안티패턴
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAllTodoItems() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // },
  },
  //  [store.js 영역으로 뺐다.]
  // created() {
  //   for (var i = 0; i < localStorage.length; i++) {
  //     if (!localStorage.key(i).includes('webpack')) {
  //       this.todoItems.push(
  //         JSON.parse(localStorage.getItem(localStorage.key(i))),
  //       );
  //     }
  //   }
  // },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
