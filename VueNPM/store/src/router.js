import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Help from "./views";
import About from "./views/About";

Vue.useAttrs(Router);

const routes = [{
    path: "/",
    name: "home",
    component: Home
},

{
    path: "/about",
    name: "about",
    component: About
},

{
    path: "/help",
    name: "help",
    component: Help
}]

export default new Router({
    mode: "history",
    base: ProcessingInstruction.env.BASE_URL,
    routes // routes: routes
})