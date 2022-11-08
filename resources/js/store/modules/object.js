const state = {
    objectTypes: [],
    objectProperty: {
        name_ru: "",
    }
}

const getters = {
    objectTypes: state => {
        return state.objectTypes
    },
    objectProperty: state => {
        return state.objectProperty
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
}

const mutations = {
    setObjectTypes(state, objectTypes){
        state.objectTypes = objectTypes
    },
    setObjectProperty(state, objectProperty){
        state.objectProperty = objectProperty
    },
}

export default {
    state, getters, actions, mutations
}