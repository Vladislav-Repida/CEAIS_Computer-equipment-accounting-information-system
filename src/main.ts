import { createApp } from "vue";
import App from "../src/App.vue";
import registerComponents from "@/register-components";
import "@mdi/font/css/materialdesignicons.min.css";
import "@/assets/style/main.less";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();
app.use(registerComponents);
app.use(pinia);

app.mount("#app");
