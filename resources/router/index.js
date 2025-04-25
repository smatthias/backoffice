import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Login from "../components/login/LoginComponent.vue";

import {createMemoryHistory, createRouter} from "vue-router";

const index = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login}
];

const router = createRouter({
    history: createMemoryHistory(),
    routes: index,
});

export default router;
