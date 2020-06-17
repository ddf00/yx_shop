import {reqIndexData} from "../../api";

const state = {
    indexData: {}
}
const mutations = {
    CHANGEINDEXDATA(state, indexData) {
        state.indexData = indexData
        console.log(indexData)
    }
}

const actions = {
    async getIndexData({commit}) {
        let result = await reqIndexData()
        commit('CHANGEINDEXDATA', result)
        console.log(result)
    }
}

const getters = {
    
}

export default {
    state, 
    mutations,
    actions,
    getters
}
