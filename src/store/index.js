import {createStore} from 'vuex'

export default createStore({
    state:{
        isCollapse:false
    },
    mutations:{
        updateIsCollapse(state,payload){
            state.isCollapse = !state.isCollapse;
            
        }
    },
})