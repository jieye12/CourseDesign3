import { statisticProps } from "element-plus";
import { createRouter, createWebHistory } from "vue-router";
// 
const Login = () => import("@/view/Login/index.vue")
const Home = () => import("@/view/Interface/Home/index.vue")
const Commodity = () => import("@/view/Interface/Commodity/index.vue")
const DefaultList = () => import("@/view/Interface/Commodity/DefaultList/index.vue")
const CommodityList = () => import("@/view/Interface/Commodity/CommodityList/index.vue")
const CommodityDetail = () => import("@/view/Interface/Commodity/CommodityDetail/index.vue")
const StorePage = () => import("@/view/Interface/StorePage/index.vue")
const OrderInfo = () => import("@/view/Interface/TradePage/OrderInfo/index.vue")
const TradePage = () => import("@/view/Interface/TradePage/index.vue")
const Authentication = () => import("@/view/Interface/Authentication/index.vue")
const PersonalCenter = () => import("@/view/Interface/PersonalCenter/index.vue")
const MyInformation = () => import("@/view/Interface/PersonalCenter/MyInformation/index.vue")
const MyOrder = () => import("@/view/Interface/PersonalCenter/MyOrder/index.vue")
const MyStore = () => import("@/view/Interface/PersonalCenter/MyStore/index.vue")
const HangOut = () => import("@/view/Interface/PersonalCenter/Hangout/index.vue")
const Stastistics = () => import("@/view/Interface/PersonalCenter/Statistics/index.vue")
// 
const Layout = () => import("@/layout/index.vue")
const Page = () => import("@/view/Background/Page/index.vue")
// 
const User = () => import("@/view/Background/personnel/user/index.vue")
const Seller = () => import("@/view/Background/personnel/seller/index.vue")
// 
const Iventory = () => import("@/view/Background/store/iventory/index.vue")
const Credit = () => import("@/view/Background/store/credit/index.vue")
// 
const Category = () => import("@/view/Background/commodity/category/index.vue")
const State = () => import("@/view/Background/commodity/state/index.vue")
// 
const Order = () => import("@/view/Background/trade/order/index.vue")
const Logistics = () => import("@/view/Background/trade/logistics/index.vue")
// 
const Authority = () => import("@/view/Background/authority/index.vue")
// 
const Sales = () => import("@/view/Background/statistics/sales/index.vue")
const Goods = () => import("@/view/Background/statistics/goods/index.vue")
const Visualization = () => import("@/view/Background/statistics/visualization/index.vue")
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
                path: "/home",
                component: Home,
                redirect: "/commodity",
                children: [
                    {
                        path: "/commodity",
                        component: Commodity,
                        redirect: "/default_list",
                        children: [
                            {
                                path: "/default_list",
                                component: DefaultList
                            },
                            {
                                path: "/commodity_list",
                                component: CommodityList,
                            },
                        ]
                    },
                    {
                        path: "/store_page",
                        component: StorePage
                    },
                    {
                        path: "/order_info",
                        component: OrderInfo,
                    },
                    {
                        path: "/trade_page",
                        component: TradePage
                    },
                    {
                        path: '/commodity_detail',
                        component: CommodityDetail,
                    },
                    {
                        path: "/personal_center",
                        component: PersonalCenter,
                        redirect: "/my_information",
                        children: [
                            {
                                path: "/my_information",
                                component: MyInformation,
                            },

                            {
                                path: "/authentication",
                                component: Authentication
                            },
                            {
                                path: "/my_order",
                                component: MyOrder,
                            },
                            {
                                path: "/my_store",
                                component: MyStore,
                            },
                            {
                                path: "/hang_out",
                                component: HangOut
                            },
                            {
                                path: "/statistics",
                                component: Stastistics
                            }

                        ]
                    },
                ]
            },
            // 后台管理
            {
                path: "/layout",
                component: Layout,
                // redirect:"/",
                name: "layout",
                meta: {
                    title: '',
                    hidden: false,
                    icon: 'HomeFilled',
                },
                redirect: "/page",
                children: [
                    {
                        path: "/page",
                        component: Page,
                        meta: {
                            title: "首页",
                            hidden: false,
                            icon: "HomeFilled"
                        }
                    },
                    {
                        path: "/personnel",
                        name: "Personnel",
                        meta: {
                            title: "人员管理",
                            icon: "User",
                        },
                        redirect: "/personnel/user",
                        children: [
                            {
                                path: "/personnel/user",
                                name: "User",
                                meta: {
                                    title: "用户管理",
                                    icon: "User"
                                },
                                component: User,
                            },
                            {
                                path: "/personnel/seller",
                                name: "Seller",
                                meta: {
                                    title: "卖家管理",
                                    icon: "User"
                                },
                                component: Seller,
                            },
                        ]
                    },
                    {
                        path: "/store",
                        name: "Store",
                        meta: {
                            title: "店铺管理",
                            icon: "Goods",
                        },
                        redirect: "/store/iventory",
                        children: [
                            {
                                path: "/store/iventory",
                                name: "Iventory",
                                meta: {
                                    title: "库存管理",
                                    icon: "Goods",
                                },
                                component: Iventory,
                            },
                            {
                                path: "/store/credit",
                                name: "Credit",
                                meta: {
                                    title: "信誉管理",
                                    icon: "Goods",
                                },
                                component: Credit
                            }
                        ]
                    },
                    {
                        path: "/commodity",
                        name: "Commodity",
                        meta: {
                            title: "物品管理",
                            icon: "Goods",
                        },
                        redirect: "/commodity/category",
                        children: [
                            {
                                path: "/commodity/category",
                                name: "Category",
                                meta: {
                                    title: "类别管理",
                                    icon: "Goods",
                                },
                                component: Category,
                            },
                            {
                                path: "/commodity/state",
                                name: "State",
                                meta: {
                                    title: "状态管理",
                                    icon: "Goods",
                                },
                                component: State,
                            }
                        ]
                    },
                    {
                        path: "/trade",
                        name: "Trade",
                        meta: {
                            title: "交易管理",
                            icon: "Goods",
                        },
                        redirect: "/trade/order",
                        children: [
                            {
                                path: "/trade/order",
                                name: "Order",
                                meta: {
                                    title: "订单管理",
                                    icon: "Goods",
                                },
                                component: Order,
                            },
                            {
                                path: "/trade/logistics",
                                name: "Logistics",
                                meta: {
                                    title: "物流管理",
                                    icon: "Goods",
                                },
                                component: Logistics
                            }
                        ]
                    },
                    {
                        path: "/authority",
                        name: "Authority",
                        meta: {
                            title: "权限管理",
                            icon: "Goods",
                        },
                        component: Authority,
                        // redirect: "/authority",
                    },
                    {
                        path: "/statistics",
                        name: "Stastics",
                        meta: {
                            title: "数据统计",
                            icon: "Goods",
                        },
                        redirect: "/statistics/sales",
                        children: [
                            {
                                path: "/statistics/sales",
                                name: "Sales",
                                meta: {
                                    title: "销售管理",
                                    icon: "Goods",
                                },
                                component: Sales
                            },
                            {
                                path: "/statistics/goods",
                                name: "Goods",
                                meta: {
                                    title: "商品统计",
                                    icon: "Goods",
                                },
                                component: Goods
                            },
                            {
                                path: "/statistics/visualization",
                                name: "Visualization",
                                meta: {
                                    title: "可视化分析",
                                    icon: "Flag"
                                },
                                component: Visualization,
                            }
                        ]
                    }
                ]
            },
        ],
        scrollBehavior() {
            return {
                left: 0,
                top: 0,
            }
        }
    }
)
export const asyncRoute = [
    {
        path: "/page",
        name: "Page",
        meta: {
            title: "首页",
            icon: "House"
        },
        component: Page,
    },
    {
        path: "/personnel",
        name: "Personnel",
        meta: {
            title: "人员管理",
            icon: "User",
        },
        component: Layout,
        redirect: "/personnel/user",
        children: [
            {
                path: "/personnel/user",
                name: "User",
                meta: {
                    title: "用户管理",
                    icon: "UserFilled"
                },
                component: User,
            },
            {
                path: "/personnel/seller",
                name: "Seller",
                meta: {
                    title: "卖家管理",
                    icon: "Avatar"
                },
                component: Seller,
            },
        ]
    },
    {
        path: "/store",
        name: "Store",
        meta: {
            title: "店铺管理",
            icon: "Odometer",
        },
        component: Layout,
        redirect: "/store/iventory",
        children: [
            {
                path: "/store/iventory",
                name: "Iventory",
                meta: {
                    title: "库存管理",
                    icon: "Ticket",
                },
                component: Iventory,
            },
            {
                path: "/store/credit",
                name: "Credit",
                meta: {
                    title: "信誉管理",
                    icon: "Management",
                },
                component: Credit
            }
        ]
    },
    {
        path: "/commodity",
        name: "Commodity",
        component: Layout,
        meta: {
            title: "物品管理",
            icon: "Goods",
        },
        redirect: "/commodity/category",
        children: [
            {
                path: "/commodity/category",
                name: "Category",
                meta: {
                    title: "类别管理",
                    icon: "Platform",
                },
                component: Category,
            },
            {
                path: "/commodity/state",
                name: "State",
                meta: {
                    title: "状态管理",
                    icon: "BellFilled",
                },
                component: State,
            }
        ]
    },
    {
        path: "/trade",
        name: "Trade",
        meta: {
            title: "交易管理",
            icon: "Van",
        },
        component: Layout,
        redirect: "/trade/order",
        children: [
            {
                path: "/trade/order",
                name: "Order",
                meta: {
                    title: "订单管理",
                    icon: "ChromeFilled",
                },
                component: Order,
            },
            {
                path: "/trade/logistics",
                name: "Logistics",
                meta: {
                    title: "物流管理",
                    icon: "ElemeFilled",
                },
                component: Logistics
            }
        ]
    },
    {
        path: "/authority",
        name: "Authority",
        meta: {
            title: "权限管理",
            icon: "Compass",
        },
        component: Authority,
    },
    {
        path: "/statistics",
        name: "Stastics",
        meta: {
            title: "数据统计",
            icon: "PieChart",
        },
        component: Layout,
        redirect: "/statistics/sales",
        children: [
            {
                path: "/statistics/sales",
                name: "Sales",
                meta: {
                    title: "销售管理",
                    icon: "TrendCharts",
                },
                component: Sales
            },
            {
                path: "/statistics/goods",
                name: "Goods",
                meta: {
                    title: "商品统计",
                    icon: "List",
                },
                component: Goods
            }, {
                path: "/statistics/visualization",
                name: "Visualization",
                meta: {
                    title: "可视化分析",
                    icon: "Flag"
                },
                component: Visualization,
            }
        ]
    }
]
export default router