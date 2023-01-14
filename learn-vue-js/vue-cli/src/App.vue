<template>
  <div>
    <!-- <app-header v-bind:프롭스속성이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header v-bind:headerStr="str" v-on:renew="reNewStr"></app-header>
    app
    <div>{{ str }}</div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  data: function () {
    return {
      str: "Header!!!",
    };
  },
  components: {
    "app-header": AppHeader,
  },
  methods: {
    reNewStr: function () {
      this.str = "hi ~0~";
    },
  },
};
</script>

<style></style>
