import { createRouter, createWebHistory } from "vue-router";
// 
const Login = () => import("@/view/Login/index.vue")
const Home = () => import("@/view/Interface/Home/index.vue")
const Commodity = () => import("@/view/Interface/Commodity/index.vue")
const StorePage = () => import("@/view/Interface/StorePage/index.vue")
const TradePage = () => import("@/view/Interface/TradePage/index.vue")
const Authentication = () => import("@/view/Interface/Authentication/index.vue")
const PersonalCenter = () => import("@/view/Interface/PersonalCenter/index.vue")
// 
const Page = () => import("@/view/Background/Page/index.vue")
const UserManagement = () => import("@/view/Background/UserManagement/index.vue")
const StoreManagement = () => import("@/view/Background/StoreManagement/index.vue")
const CommodityManagement = () => import("@/view/Background/CommodityManagement/index.vue")
const TradeManagement = () => import("@/view/Background/TradeManagement/index.vue")
const AuthorityManagement = () => import("@/view/Background/AuthorityManagement/index.vue")
const StatisticAnalysis = () => import("@/view/Background/StatisticAnalysis/index.vue")
// 
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
                path: "/",
                component: Home,
                redirect: "/commodity",
                children: [
                    {
                        path: "/commodity",
                        component: Commodity,
                    },
                    {
                        path: "/store_page",
                        component: StorePage
                    },
                    {
                        path: "/trade_page",
                        component: TradePage
                    },
                ]
            },
            {
                path: "/personal_center",
                component: PersonalCenter,
                children: [
                    {
                        path: "/authentication",
                        component: Authentication
                    }
                ]
            },
            // 后台管理
            {
                path: "/page",
                component: Page,
                redirect: "/user_management",
                children: [
                    {
                        path: "/user_management",
                        component: UserManagement,
                    },
                    {
                        path: "/store_management",
                        component: StoreManagement,
                    },
                    {
                        path: "/commodity_management",
                        component: CommodityManagement,
                    },
                    {
                        path: "/trade_management",
                        component: TradeManagement,
                    },
                    {
                        path: "/authority_management",
                        component: AuthorityManagement,
                    },
                    {
                        path: "/statisticAnalysis",
                        component: StatisticAnalysis,
                    },
                ]
            }
        ]
    }
)
export default router