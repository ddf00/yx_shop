import Home from "../pages/Home";
import CateGory from "../pages/CateGory";
import WorthBuy from "../pages/WorthBuy";
import ShopCar from "../pages/ShopCar";
import Personal from "../pages/Personal";

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
    }
]