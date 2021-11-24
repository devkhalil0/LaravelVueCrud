
require('./bootstrap');

window.Vue = require('vue').default;

// main component
Vue.component('main-component', require('./App.vue').default);

Vue.component('example-component', require('./Components/ExampleComponent.vue').default);
Vue.component('login-component', require('./Components/login.vue').default);


// Vue Router
import router from './Router/index'

const app = new Vue({
    router,
    el: '#app',
});
