const state = {
    user: {
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        image: "",
        created_at: ""
    },
    isLoaded: false
}

const getters = {
    user: state => {
        return state.user
    },
    isLoaded: state => {
        return state.isLoaded
    }
}

const actions = {
    getUserInfo({state, commit}){ // get user informations on database
        const token = localStorage.getItem('token');
        commit('isLoaded', true);
        axios.get('/api/getme', {
            headers: {
                'Authorization': `Bearer ${token}`, 
            }
        })
        .then(response => {
            console.log('ok');
            commit('setUser', response.data.result);
            commit('isLoaded', false);
        });
    },
}

const mutations = {
    setUser(state, user){
        state.user = user
    },
    isLoaded(state, newLoadingStatus){
        state.isLoaded = newLoadingStatus
    }
}

export default {
    state, getters, actions, mutations
}