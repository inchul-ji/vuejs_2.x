<template>
  <div>
    ask
    <div v-for="item in ask" v-bind:key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { fetchAskList } from '@/api';
export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    const vm = this;
    fetchAskList()
      .then(response => {
        console.log(response);
        vm.ask = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>

<style></style>
