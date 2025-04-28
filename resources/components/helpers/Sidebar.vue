<template>
<aside v-bind:class="{'is-expanded': is_expanded, '': !is_expanded}">
  <div class="logo">

  </div>

  <div class="menu-toggle-wrap">
    <button class="menu-toggle" @click="ToggleMenu()">
      <span class="material-icons">keyboard_double_arrow_right</span>
    </button>
  </div>

  <h3 class="bg-red-500">Menu</h3>
  <div class="menu">
    <ul>
      <router-link class="button" to="/">
        <li>
          <div class="menu-button">
              <span class="material-icons">home</span>
              <span v-bind:class="{'show-text': is_expanded, 'hide-text': !is_expanded}">Home</span>
          </div>
        </li>
      </router-link>
      <router-link class="button" to="/dashboard">
        <li>
            <span class="material-symbols-outlined" style="color:white;">monitoring</span>
            <span v-bind:class="{'show-text': is_expanded, 'hide-text': !is_expanded}">Dashboard</span>
        </li>
      </router-link>
      <router-link class="button" to="/customer">
        <li>
            <span class="material-icons" style="color:white;">person_search</span>
            <span v-bind:class="{'show-text': is_expanded, 'hide-text': !is_expanded}">Customer</span>
        </li>
      </router-link>
      <router-link class="button" to="/bookings">
        <li>
            <span class="material-icons" style="color:white;">event</span>
            <span v-bind:class="{'show-text': is_expanded, 'hide-text': !is_expanded}">Bookings</span>
        </li>
      </router-link>
      <router-link class="button" to="/settings">
        <li>
            <span class="material-icons" style="color:white;">settings</span>
            <span v-bind:class="{'show-text': is_expanded, 'hide-text': !is_expanded}">Settings</span>
        </li>
      </router-link>
      <router-link class="button" to="/cms">
        <li>
            <span class="material-icons" style="color:white;">web</span>
            <span v-bind:class="{'show-text': is_expanded, 'hide-text': !is_expanded}">Content</span>
        </li>
      </router-link>
      <router-link class="button" to="/profile">
        <li>
          <span class="material-icons" style="color:white;">person</span>
          <span v-bind:class="{'show-text': is_expanded, 'hide-text': !is_expanded}">CMS</span>
        </li>
      </router-link>
      <router-link class="button" to="/logout">
        <li>
          <span class="material-icons" style="color:white;">logout</span>
          <span v-bind:class="{'show-text': is_expanded, 'hide-text': !is_expanded}">Logout</span>
        </li>
      </router-link>
    </ul>
  </div>
</aside>
</template>

<script>
import { ref } from 'vue';

let is_expanded = ref(false);

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value;
}

export default {
  name: "Sidebar",
  methods: {
    ToggleMenu
  },
  data: function() {
    return {
      is_expanded
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  text-decoration: none;
}
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;

  background-color: var(--dark);
  color: var(--light);
  transition: 0.2s ease-out;

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;
    }

    .menu-toggle {
      transform: rotate(-180deg);
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;

    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }
      &:hover {
        .material-icons {
          color: var(--light);
          transform: translateX(0.5rem);
        }

      }
    }
    .material-icons {
      color: var(--light);
    }border-bottom: white 1px;
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 999;
  }

  .logo {

    padding: 1rem;

    img {
      width:3rem;
    }
  }
  span {
    color: white;
  }
  .material-symbols-outlined {
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
  }

  .show-text {
    visibility: visible;
    margin-left: 1rem;
  }

  .hide-text {
    visibility: hidden;
  }

  ul {
    list-style-type: none;
    text-decoration: none;
  }

  li {
    padding: 1.5rem 1rem 1.5rem 1rem;
    border-bottom: white solid 1px;
  }


  h3 {
    padding: 1rem;
  }

  li:hover {
    background-color: #1c345b;
  }
}
</style>
