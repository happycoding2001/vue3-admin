import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        component:()=>import('../view/Main.vue'),
        children:[
            {
                path:'/',
                name:'home',
                component:()=>import('../view/home/home.vue'),
            },
        ],
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router