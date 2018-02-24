import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex({

  state:{
    track: {


    },
    mutations : {
      setTrack (track){
        state.track = track
      }
    }
  }

});
export default store;
