import Vue from 'vue';
import Router from 'vue-router';

// here any thing about router and config it
import About from "../views/About.vue"
import Home  from "../views/Home.vue"

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
       {
           path:"/",
           name:"home",
           component:Home
       },
       {
        path:"/about",
        name:"about",
        component:About
    }
    ]
});


