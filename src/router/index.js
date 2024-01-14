
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)


const routes  = [
    {
        path:'/',
        redirect:'/inicio',
        
    },
    {
        path: '/',
        component : {
            render(h) {
                return h('router-view')
            },
        },
        children: [
            {
                path:'/inicio',
                name: 'inicio',
                component: () => import('../components/Inicio.vue')
            },
            {
                path:'/tercero',
                name: 'tercero',
                component: () => import('../components/Tercero.vue')
            },
            {
                path:'/main',
                name: 'main',
                component: () => import('../components/Main.vue')
            },
            {
                path:'/landpage',
                name:'landpage',
                component: () => import('../components/LandPage.vue')
            },
            {
                path:'/rentar',
                name:'rentar',
                component: () => import('../components/Rentar.vue')
            },
            {
                path:'/informacion',
                name:'informacion',
                component: () => import('../components/Informacion.vue')
            },
            {
                path:'/ofertar',
                name:'ofertar',
                component: () => import('../components/Ofertar.vue')
            },
            {
                path:'/rentar2',
                name:'rentar2',
                component: () => import('../components/Rentar2.vue')
            },
            {
                path:'/catalogo',
                name:'catalogo',
                component: () => import('../components/Catalogo.vue')
            },
            {
                path:'/detalles',
                name:'detalles',
                component: () => import('../components/Detalles.vue')
            }
        ]
    }


]

const router = new VueRouter({routes})
export default router