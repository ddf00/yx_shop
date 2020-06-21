import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import store from "./store";
import router from "./router";
import {
  Tabbar,
  TabbarItem,
  Icon,
  Swipe,
  SwipeItem,
  DropdownMenu,
  DropdownItem,
  Form,
  Field,
  CountDown,
} from 'vant';

Vue.config.productionTip = false
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Form);
Vue.use(Field);
Vue.use(CountDown);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')