<template>
  <div>
    <transition-group name="list" tag="ul">
      <!-- <ul> -->

      <!-- store의 state 직접 접근 -->
      <!-- <li
        v-for="(todoItem, index) in this.$store.state.todoItems"
        v-bind:key="todoItem.item"
        class="shadow"
      > -->

      <!-- store의 getters 직접 접근 -->
      <!-- <li
        v-for="(todoItem, index) in this.todoItems"
        v-bind:key="todoItem.item"
        class="shadow"
      > -->
      <!-- helpper 를 이용한 getters 접근 -->
      <li
        v-for="(todoItem, index) in this.storedTodoItems"
        v-bind:key="todoItem.item"
        class="shadow"
      >
        <!-- <i
          class="checkBtn fas fa-check"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          v-on:click="toggleComplete(todoItem, index)"
        ></i> -->
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          v-on:click="toggleTodoComplete({ todoItem, index })"
        ></i>
        <span v-bind:class="{ textCompleted: todoItem.completed }">
          {{ todoItem.item }}
        </span>

        <!-- <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"> -->
        <span
          class="removeBtn"
          v-on:click="removeTodoItem({ todoItem, index })"
        >
          <i class="removeBtn fas fa-trash-alt"></i>
        </span>
      </li>
      <!-- </ul> -->
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  // props: ['todoItems'],
  methods: {
    // 호출하는 곳에서 인자를 넣었다면 이곳에서 암묵적으로 해당 인자를 그대로 넘긴다.
    ...mapMutations(['removeTodoItem', 'toggleTodoComplete']),
    // removeTodo(todoItem, index) {
    //   // this.$emit('removeTodoItem', todoItem, index);
    //   this.$store.commit('removeTodoItem', { todoItem, index });
    // },
    // toggleComplete(todoItem, index) {
    //   // this.$emit('toggleTodoComplete', todoItem, index);
    //   this.$store.commit('toggleTodoComplete', { todoItem, index });
    // },
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // },
    ...mapGetters(['storedTodoItems']),
    /* 아래와 같이 배열 대신 객체가 가능한데,
     *  컴포넌트에서 store에 정의된 이름말고, 다른 이름을 사용하려고 할때 사용한다.
     */
    // ...mapGetters({ todoItems: 'storedTodoItems' }),
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* transition css */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
