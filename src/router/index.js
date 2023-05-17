import Vue from 'vue'
import VueRouter from "vue-router"
import layout from "@/views/layout/layout";
import HomeView from "@/views/HomeView";
import login from "@/views/login/login";
import community from "@/views/community/community";
import admins from "@/views/community/admins";
import abnormal from "@/views/operator/abnormal";
import material from "@/views/operator/material";
import Cookie from "js-cookie";
import historyAbn from "@/views/operator/historyAbn";
import addAbno from "@/views/operator/addAbno";
import addMate from "@/views/operator/addMate";
import matelog from "@/views/operator/matelog";
import NewDetail from "@/views/layout/banner/NewDetail";
// const community=()=>import('../views/community/community')
// const admins=()=>import('../views/community/admins')
// const abno=()=>import('../views/operator/abnormal')
// const material=()=>import('../views/operator/material')
const serve=()=>import('../views/unserve/index')



Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        component:layout,
        name:"layout",
        children:[
            {
                path: '/inform/:info_id',
                component: NewDetail,
            },
            {
                path:'/',
                name:'home',
                component:HomeView,
            },
            {
                path:'community',
                name:'community',
                component:community,
            },
            {
                path:'admins',
                name:'admins',
                component:admins,
            },
            {
                path:'abno',
                name:'abno',
                component:abnormal,
                meta:{
                    isLogin:true
                },
                children:[
                    {
                        path:'/abnlog',
                        name:'abnlog',
                        component:historyAbn,
                        meta:{
                            isLogin:true
                        },
                    },
                    {
                        path:'/addAbno',
                        name:'addAbno',
                        component:addAbno,
                        meta:{
                            isLogin:true
                        },
                    },

                ]
            },
            {
                path:'material',
                name:'material',
                component:material,
                meta:{
                    isLogin:true
                },
                children: [
                    {
                        path: '/addMate',
                        name: 'addMate',
                        component: addMate,
                        meta:{
                            isLogin:true
                        },
                    },
                    {
                        path: '/matelog',
                        name: 'matelog',
                        component: matelog,
                        meta:{
                            isLogin:true
                        },
                    },
                ]
            },
            {
                path:'serve',
                name:'serve',
                component:serve,
                meta:{
                    isLogin:true
                }
            },
        ]
    },
    {
        path:'/login',
        name:'login',
        component: login
    }
]

const router=new VueRouter({
    routes
})
//路由拦截
router.beforeEach((to,from,next)=>{
    //判断当前路由是否需要登录
    if(to.meta.isLogin){
        const token  =Cookie.get('token')
        if(!token &&to.name!=='login'){
            next('/login')
        }else if(token&&to.name==='login'){
            next({name:'home'})
        }else{
            next()
        }
    }
    else{
        next()
    }
})


export default router
