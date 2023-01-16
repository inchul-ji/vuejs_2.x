<template>
  <div>
    <!-- news -->
    <div v-for="user in users" v-bind:key="user.id">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from '@/api';

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    const vm = this;
    fetchNewsList()
      .then(response => {
        console.log(response);
        vm.users = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>

<style></style>
