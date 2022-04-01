import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import subject from './subject';
import user from './user';
export default new Vuex.Store({
    modules:{
        subject,
        user
    }
});