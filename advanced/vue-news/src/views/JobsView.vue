<template>
  <div>
    <list-item></list-item>
    <!-- <li
      class="post"
      v-for="item in this.$store.state.jobs"
      v-bind:key="item.id"
    >
      <div class="points">
        {{ item.points || 0 }}
      </div>

      <div>
        <p class="news-title">
          <router-link v-bind:to="item.url">
            {{ item.title }}
          </router-link>
        </p>
        <small>
          {{ item.time_ago }} by
          <a v-bind:href="item.url">
            {{ item.domain }}
          </a>
        </small>
      </div>
    </li> -->
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
export default {
  components: {
    ListItem,
  },
  created() {
    // this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  color: #41b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
