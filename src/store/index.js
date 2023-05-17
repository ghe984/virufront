import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        user_id:'',
    },
    actions:{
        changeId(ctx,payload){
            ctx.commit('changeId',payload.id)
        }
    },
    mutations:{
        changeId(state,payload){
            state.user_id=payload.id
        }
    }
})
