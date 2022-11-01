const state = {
    user: null
}

const getters = {
    user: state => {
        return state.user
    }
}

const actions = {
    getUserInfo({state, commit}){ // get user informations on database
        const token = localStorage.getItem('token');
        axios.get('/api/getme', {
            headers: {
                'Authorization': `Bearer ${token}`, 
            }
        })
        .then(response => {
            console.log('ok');
            commit('setUser', response.data.result);
        });
    },
}

const mutations = {
    setUser(state, user){
        state.user = user
    }
}

export default {
    state, getters, actions, mutations
}