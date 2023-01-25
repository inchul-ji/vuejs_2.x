<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="item in listItems" v-bind:key="item.id">
        <div class="points">
          {{ item.points || 0 }}
        </div>

        <div>
          <!-- 리스트 아이템 타이틀 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>

          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
              v-if="item.user"
              v-bind:to="`/user/${item.user}`"
              class="link-text"
            >
              {{ item.user }}
            </router-link>
            <a v-bind:href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    const routeName = this.$route.name;
    if (routeName === 'news') {
      this.$store.dispatch('FETCH_NEWS');
    } else if (routeName === 'ask') {
      this.$store.dispatch('FETCH_ASKS');
    } else if (routeName === 'jobs') {
      this.$store.dispatch('FETCH_JOBS');
    }
    // console.log(this.$route.name);
  },
  computed: {
    listItems() {
      const routeName = this.$route.name;
      if (routeName === 'news') {
        return this.$store.state.news;
      } else if (routeName === 'ask') {
        return this.$store.state.asks;
      }
      return this.$store.state.jobs;
    },
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
