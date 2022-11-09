const state = {
    objectTypes: [],
    objectProperty: [],
    regions: []
}

const getters = {
    objectTypes: state => {
        return state.objectTypes
    },
    objectProperty: state => {
        return state.objectProperty
    },
    regions: state => {
        return state.regions
    },
}

const actions = {
    // Object types
    getObjectTypes({state, commit}){
        axios.get('/api/objectTypes')
        .then(response => {
            commit('setObjectTypes', response.data.result);
        });
    },
    // Commercial object types
    getObjectTypesProperty({state, commit}){
        axios.get('/api/objectProperty')
        .then(response => {
            commit('setObjectProperty', response.data.result);
        });
    },
    // Get all regions
    getRegions({state, commit}) {
        axios.get('/api/allRegions')
        .then(response => {
            commit('setRegions', response.data.result);
        });
    },
}

const mutations = {
    setObjectTypes(state, objectTypes){
        state.objectTypes = objectTypes
    },
    setObjectProperty(state, objectProperty){
        state.objectProperty = objectProperty
    },
    setRegions(state, regions){
        state.regions = regions
    },
}

export default {
    state, getters, actions, mutations
}