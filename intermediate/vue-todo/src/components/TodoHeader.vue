<template>
  <header>
    <h1>
      <!-- header -->
      {{ this.$store.state.headerText }}
    </h1>
  </header>
</template>
<!-- scoped : 컴포넌트 안에서만 동작하도록 하는 속성 -->
<style scoped>
h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
