import { createRouter, createWebHistory } from "vue-router";
const Login = () => import("@/view/Login/index.vue")
const Home = () => import("@/view/Interface/Home/index.vue")
const Attraction = () => import("@/view/Interface/Attraction/index.vue")
const Food = () => import("@/view/Interface/Food/index.vue")
const Hotels = () => import("@/view/Interface/Hotels/index.vue")
const Leisure = () => import("@/view/Interface/Leisure/index.vue")
const Market = () => import("@/view/Interface/Market/index.vue")
const PersonalCenter = () => import("@/view/Interface/PersonalCenter/index.vue")
const Travel = () => import("@/view/Interface/Travel/index.vue")
const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            // 系统功能
            {
                path: "/login",
                component: Login,
            },
            {
                path: "/home",
                component: Home,
                redirect: "/attraction",
                children: [
                    {
                        path: "/attraction",
                        component: Attraction,
                    },
                    {
                        path: "/food",
                        component: Food,
                    },
                    {
                        path: "/hotel",
                        component: Hotels,
                    },
                    {
                        path: "/leisure",
                        component: Leisure,
                    },
                    {
                        path: "/market",
                        component: Market,
                    },
                    {
                        path: "/personal_center",
                        component: PersonalCenter,
                    },
                    {
                        path: "/travel",
                        component: Travel
                    }
                ]
            },
            // 后台管理
        ]
    }
)
export default router