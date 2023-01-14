<template>
  <header>
    <h1>{{ headerStr }}</h1>
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    headerStr: String,
  },
  methods: {
    sendEvent: function () {
      this.$emit("renew");
    },
  },
};
</script>

<style></style>
