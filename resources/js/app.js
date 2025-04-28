import './bootstrap';
import { createApp } from 'vue'
import App from '../App.vue'
import { createI18n } from 'vue-i18n'
import tagsDe from "../locales/de_tags";
import tagsEn from "../locales/en_tags";
import router from '../router';
import '../styles.css';

const i18n = createI18n({
    locale: 'de',
    fallbackLocale: 'en',
    messages: {
        en: tagsEn,
        de: tagsDe,
    }
})
i18n.global.locale = 'en'


const app = createApp(App)
    .use(i18n)
    .use(router)
    .mount('#app')
