import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

// 导入所有vant-ui组件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

// 引入ElementUI 所有组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
