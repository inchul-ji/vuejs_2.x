<template>
  <div class="inputBox shadow">
    <!-- v-on:keyup.enter : 엔터를 클릭하면 동작하도록 함 -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <!-- @click : v-on:click 의 축양형 -->
      <h3 slot="header" @click="showModal = false">
        HEADER! 경고! 닫기!
      </h3>
      <div slot="body">
        TODO를 입력해 주세요.
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/common/Modal.vue';

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem.trim().length === 0) {
        this.showModal = !this.showModal;
        return;
      }

      // this.$emit('addTodoItem', this.newTodoItem);
      this.$store.commit('addTodoItem', { newTodoItem: this.newTodoItem });

      // 초기화
      this.clearInput();
    },
    clearInput() {
      this.newTodoItem = '';
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>
