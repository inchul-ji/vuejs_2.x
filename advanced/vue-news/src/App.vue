<template>
  <div id="app">
    <ToolBar />
    <transition name="page">
      <router-view></router-view>
    </transition>
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
import Spinner from '@/components/Spinner.vue';
import bus from '@/utils/bus';

export default {
  name: 'App',
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  method: {
    startSpinner() {
      console.log('startSpinner', this.loadingStatus);
      this.loadingStatus = true;
    },
    endSpinner() {
      console.log('endSpinner', this.loadingStatus);
      this.loadingStatus = false;
    },
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  },
};
</script>

<style>
body {
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-active {
  text-decoration: underline;
}

/* Router Transition */
.routing-fade-enter-active,
.routing-fade-leave-active {
  transition: opacity 0.3s ease;
}
.routing-fade-enter, .routing-fade-leave-to
/* .routing-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
