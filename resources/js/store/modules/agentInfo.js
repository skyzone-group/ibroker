const state = {
    agent: {
        id: "",
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        image: "",
        created_at: "",
        additional_info: {
            facebook: "",
            instagram: "",
            main_color: "",
            telegram: "",
            username: "",
            whatsapp: ""
        }
    },
    objects: [],
    owner: [],
    isLoaded: false,
}

const getters = {
    agent: state => {
        return state.agent
    },
    objects: state => {
        return state.objects
    },
    owner: state => {
        return state.owner
    },
    isLoaded: state => {
        return state.isLoaded
    },
}

const actions = {
    // Notification All
    async getInfo({state, commit}, id){
        commit('isLoaded', true);
        axios.get('/api/agent/info/' + id)
        .then(response => {
            commit('setAgent', response.data.result.user);
            commit('setObjects', response.data.result.objects);
            commit('setOwner', response.data.result.owner);
            commit('isLoaded', false);
        })
        .catch(error => {
            if (error.response && error.response.status === 500) {
                window.location.href = "/";
            } else {
                // Handle error however you want
            }
        });
    }
}

const mutations = {
    setAgent(state, agent){
        state.agent = agent
    },
    setObjects(state, objects){
        state.objects = objects
    },
    setOwner(state, owner){
        state.owner = owner;
    },
    isLoaded(state, newLoadingStatus){
        state.isLoaded = newLoadingStatus
    },
}

export default {
    state, getters, actions, mutations
}