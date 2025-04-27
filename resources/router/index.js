import {createMemoryHistory, createRouter} from "vue-router";
import Dashboard from "../components/Dashboard.vue";

const index = [
    { path: '/dashboard', component: Dashboard },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes: index,
});

export default router;
