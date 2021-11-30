import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VueRouter)

/* Guest Component */
function setComponent(path_file) {
    const route_path = "./components/app/pages/" + path_file + "Component.vue";
    return import ("" + route_path);
}

const Routes = [
 { path: "*", component: () => setComponent("error/404") },
    {
        path: "/",
        redirect: { path: '/home' }
    },
    {
        path : "/register",
        component:() => setComponent("auth/Register"),
        name:"Register",
         meta:{
            middleware:"guest",
            title:`Login`
        }
    },
    {
        path : "/home",
        component:() => setComponent("Home"),
        name:"Home",
         meta:{
            middleware:"guest",

        }
    },
    {
        path : "/login",
        component:() => setComponent("auth/Login"),
        name:"Login",
         meta:{
            middleware:"guest",

        }
    },
    {
        path : "/dashboard",
        component:() => setComponent("dashboard/Dashboard"),
        name:"dashboard",
         meta:{
            middleware:"auth",

        },
         children:[
            {
                name:"dashboard",
                path: '/dashboard',
                component: setComponent("dashboard/Dashboard"),
                meta:{
                    title:`Dashboard`
                }
            }
        ]

    }
]

var router  = new VueRouter({
    mode: 'history',
    routes: Routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} - ${process.env.MIX_APP_NAME}`
    if(to.meta.middleware=="guest"){
        if(store.state.auth.authenticated){
            next({name:"dashboard"})
        }
        next()
    }else{
        if(store.state.auth.authenticated){
            next()
        }else{
            next({name:"login"})
        }
    }
})

export default router
// import Vue from "vue";
// import VueRouter from "vue-router";

// Vue.use(VueRouter);

// // function getRouteComponent(path_file) {
// //     return "./components/backend/" + path_file + "Component.vue";
// // }
// function setComponent(path_file) {
//     const route_path = "./components/app/pages/" + path_file + "Component.vue";
//     return import ("" + route_path);
// }

// const routes = [
//     { path: "*", component: () => setComponent("error/404") },
//     {
//         path: "/",
//         redirect: { path: '/home' }
//     },
//     {
//         path : "/register",
//         component:() => setComponent("auth/Register"),
//         name:"Register"
//     },
//     {
//         path : "/home",
//         component:() => setComponent("Home"),
//         name:"Home"
//     },
//     {
//         path : "/login",
//         component:() => setComponent("auth/Login"),
//         name:"Login"
//     }
//     {
//         path : "/dashboard",
//         component:() => setComponent("dashboard/Dashboard"),
//         name:"Dashboard"
//     }


// ];

// const router = new VueRouter({
//     routes,
//     mode: 'history',
//     linkActiveClass: "active",
//     linkExactActiveClass: "exact-active" // short for `
// });

// router.beforeResolve((to, from, next) => {
//     //
//     next();
// });

// router.afterEach((to, from) => {
//     // setTimeout(function() { $('.page-loader-wrapper').fadeOut(); }, 50);
// });
// export default router;
