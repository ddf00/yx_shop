import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import store from "./store";
import router from "./router";
import { Tabbar, TabbarItem, Icon, Swipe, SwipeItem, DropdownMenu, DropdownItem } from 'vant';

Vue.config.productionTip = false
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
