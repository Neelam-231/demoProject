import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import router from './router';
import Printd from 'printd';

Vue.config.productionTip = false;

export const eventBus = new Vue({
  methods:{
    changeAge(age){
      this.$emit("userAgeEdited",age); 
    }
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
