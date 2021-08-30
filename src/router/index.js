import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import ItemDetail from '../views/ItemDetail.vue'
import Login from '../views/Login.vue'
import OrderComp from "../views/OrderComp.vue";
import OrderHistory from "../views/OrderHistory.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/itemdetail/:item.id",
    name: "ItemDetail",
    component: ItemDetail,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/ordercomp",
    name: "OrderComp",
    component: OrderComp,
  },
  {
    path: "/orderhistory",
    name: "OrderHistory",
    component: OrderHistory,
  },
 
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
