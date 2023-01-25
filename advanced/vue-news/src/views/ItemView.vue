<template>
  <div>
    <section>
      <!-- 질문 상세 영역 -->
      <user-profile :info="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time">{{ 'Posted: ' + fetchedItem.time_ago }}</template>
      </user-profile>

      <h2>
        <!-- {{ this.$store.state.commentItem.title }} -->
        {{ fetchedItem.title }}
      </h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
      <!-- {{ fetchedItem.content }} -->
    </section>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemId = this.$route.params.id;
    console.log(itemId);
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
};
</script>

<style scoped>
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
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>
