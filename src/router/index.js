import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        component:()=>import('../view/Main.vue'),
        redirect:'home',
        children:[
            {
                path:'/home',
                name:'home',
                component:()=>import('../view/home/home.vue'),
            },
            {
                path:'/user',
                name:'user',
                component:()=>import('../view/user/User.vue'),
            },
            {
                path:'/page1',
                name:'page1',
                component:()=>import('../view/page1.vue'),
            },
            {
                path:'/page2',
                name:'page2',
                component:()=>import('../view/page2.vue'),
            },

        ],
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router