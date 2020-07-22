import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import VueWilltable from "vue-willtable";

import vtable from "./components/vtable.vue";
const common = {
  //全局安装
  install: function(Vue) {
    Vue.component("vTable", vtable);
  }
};

// import "vue-willtable/dist/vue-willtable.min.css";

// Vue.component("VueWilltable", VueWilltable);

// 引入样式
import "vue-easytable/libs/themes-base/index.css";
// 导入 table 和 分页组件
import { VTable, VPagination } from "vue-easytable";

// 注册到全局
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);

Vue.use(common);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");