<template>
<aside class="`${is_expanded && 'is_expanded'}`">
  <div class="logo">
    <img alt="vue logo" src="../../images/logo.png" width="32px" />
  </div>

  <div class="menu-toggle-wrap">
    <button class="menu-toggle" @click="ToggleMenu">
      <span class="material-icons">keyboard_double_arrow_right</span>
    </button>
  </div>
</aside>
</template>

<script>
import { ref } from 'vue';

const is_expanded = ref(false);

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value;
}

export default {
name: "Sidebar"
}
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  background-color: var(--dark);
  color: var(--light);
  transition: 0.2s ease-out;

  @media (max-width: 768px) {
    position: fixed;
    z-index: 999;
  }
}

.logo {
  margin-bottom: 1rem;
}
</style>
