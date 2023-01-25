<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user-circle"></i>
    </div>
    <div class="user-description">
      <!-- <div> {{ info.id }}</div> -->
      <slot name="username"></slot>

      <span class="time">
        <slot name="time"></slot>
        <!-- {{ info.created || info.time_ago }} -->
      </span>
      <slot name="karma"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
  // computed: {
  //   userInfo() {
  //     return this.$store.state.userInfo;
  //   },
  // },
};
</script>

<style>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
