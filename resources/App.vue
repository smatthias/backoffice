<template>

  <nav class="bg-white border-gray-200 dark:bg-gray-900 w-full top-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://zuru.com/" class="flex items-center space-x-3 rtl:space-x-reverse nav-logo">
        <img src="./images/logo.png" class="h-8" alt="ZaphireZone Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ZaphireZone</span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto ms-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li class="nav-link">
            <RouterLink to="/signup">Sign up</RouterLink>
          </li>
          <li class="nav-link">
            <RouterLink to="/login">Login</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="grid grid-cols-6">
    <div>
      <Sidebar />
    </div>
    <div class="col-span-5 main-window">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/helpers/Sidebar.vue";
export default {
name: "App",
  components: {Sidebar}
}
</script>

<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey:#64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
.nav-link {
  color: white;
  margin: 2rem;
}
.nav-logo {
  margin-left: 2rem;
  span {
    margin-left: 1rem;
  }
  img {
    width: 4rem;
    height: 4rem;
  }
}

.main-window {
  margin: 5rem 2rem 0 0;
}
</style>
