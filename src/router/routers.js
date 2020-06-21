import Home from "../pages/Home";
import CateGory from "../pages/CateGory";
import WorthBuy from "../pages/WorthBuy";
import ShopCar from "../pages/ShopCar";
import Personal from "../pages/Personal";
import Login from "../pages/Login";
import CateNavList from "../components/cateNavList";
import Search from "../pages/Search";
import waterfall from "../components/waterfall";
export default [
    {
        path: "/",
        component: Home
    },
    {
        path: "/category",
        component: CateGory
    },
    {
        path: "/worthbuy",
        component: WorthBuy
    },
    {
        path: "/shopcar",
        component: ShopCar
    },
    {
        path: "/personal",
        component: Personal
    },
    {
        path: "/login",
        component: Login,
        meta: {
            isHide: true
        }
    },
    {
        path: '/catenavlist',
        component: CateNavList
    },
    {
        path: "/search",
        component: Search,
        meta: {
            isHide: true
        }
    },
    {
        path: '/waterfall',
        component: waterfall
    }
]