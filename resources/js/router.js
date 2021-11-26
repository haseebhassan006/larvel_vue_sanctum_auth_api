import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// function getRouteComponent(path_file) {
//     return "./components/backend/" + path_file + "Component.vue";
// }
function setComponent(path_file) {
    const route_path = "./components/app/pages/" + path_file + "Component.vue";
    return import ("" + route_path);
}

const routes = [
    { path: "*", component: () => setComponent("error/404") },
    {
        path: "/",
        redirect: { path: '/home' }
    },
    {
        path : "/register",
        component:() => setComponent("auth/Register"),
        name:"Register"
    },
    {
        path : "/home",
        component:() => setComponent("Home"),
        name:"Home"
    },
    {
        path : "/login",
        component:() => setComponent("auth/Login"),
        name:"Login"
    }


];

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active" // short for `
});

router.beforeResolve((to, from, next) => {
    //
    next();
});

router.afterEach((to, from) => {
    // setTimeout(function() { $('.page-loader-wrapper').fadeOut(); }, 50);
});
export default router;
