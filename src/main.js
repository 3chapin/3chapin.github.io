import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import MsnyAssignments from '@/components/MsnyAssignments'
import SvcAssignments from '@/components/SvcAssignments'
import TeachAssignments from '@/components/TeachAssignments'
import PrevNextBtns from '@/components/PrevNextBtns'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('Navbar', Navbar)
Vue.component('Footer', Footer)
Vue.component('Home', Home)
Vue.component('Contact', Contact)
Vue.component('MsnyAssignments', MsnyAssignments)
Vue.component('SvcAssignments', SvcAssignments)
Vue.component('TeachAssignments', TeachAssignments)
Vue.component('PrevNextBtns', PrevNextBtns)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
