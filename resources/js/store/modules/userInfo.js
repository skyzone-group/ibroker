const state = {
    user: {
        id: "",
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        image: "",
        created_at: ""
    },
    friends: [],
    notifications: [],
    isLoaded: false,
    loadingBtn: [false, false],
}

const getters = {
    user: state => {
        return state.user
    },
    isLoaded: state => {
        return state.isLoaded
    },
    loadingBtn: state => {
        return state.loadingBtn.find(item => item);
    },
    friends: state => {
        return state.friends
    },
    notifications: state => {
        return state.notifications
    }
}

const actions = {
    // Get user informations on database
    getUserInfo({state, commit}){ 
        const token = localStorage.getItem('token');
        commit('isLoaded', true);
        axios.get('/api/getme', {
            headers: {
                'Authorization': `Bearer ${token}`, 
            }
        })
        .then(response => {
            commit('setUser', response.data.result);
            commit('isLoaded', false);
        });
    },
    
    // Get all friends
    getFriends({state, commit}){
        const token = localStorage.getItem('token');
        commit('isLoaded', true);
        axios.get('/api/friend/all', {
            headers: {
                'Authorization': `Bearer ${token}`, 
            }
        })
        .then(response => {
            commit('setFriends', response.data.result);
            commit('isLoaded', false);
        });
    },
    
    // Confirm Friend request
    confirmFriendship({commit}, id){
        const token = localStorage.getItem('token');
        commit('loadingBtn[1]', true);
        let friend = id;
        let form = new FormData();
        form.append('friendId', friend);
        axios.post('/api/friend/confirm', form, {
            headers: {
                'Authorization': `Bearer ${token}`, 
            }
        }).then(response => {
            setTimeout(() => commit('loadingBtn[1]', false), 1000);
            window.location.reload();
            // window.location.href = '/account/user/list/objects';
        })
        .catch(function (error) {
            // this.onFailure(error.response.data.message);
            alert(error);
        });
    },
    
    // Delete friend
    deleteFriend({commit}, id) {
        const token = localStorage.getItem('token');
        commit('isLoaded', true);
        let friend = id;
        let formDelete = new FormData();
        formDelete.append('friendId', friend);
        axios.post('/api/friend/delete', formDelete, {
            headers: {
                'Authorization': `Bearer ${token}`, 
            }
        }).then(response => {
            setTimeout(() => commit('isLoaded', false), 1000);
            window.location.reload();
            // this.$toast.add({severity:'success', summary: 'Друг удален', detail: 'Product Deleted', life: 3000});
            // window.location.reload();
        })
        .catch(function (error) {
            alert(error);
        });
    },

    // Notification All
    getNotification({state, commit}){
        const token = localStorage.getItem('token');
        commit('isLoaded', true);
        axios.get('/api/notification/all', {
            headers: {
                'Authorization': `Bearer ${token}`, 
            }
        })
        .then(response => {
            commit('setNotifications', response.data.result);
            commit('isLoaded', false);
        });
    }
}

const mutations = {
    setUser(state, user){
        state.user = user
    },
    setFriends(state, friends){
        state.friends = friends
    },
    setNotifications(state, notifications){
        state.notifications = notifications
    },
    isLoaded(state, newLoadingStatus){
        state.isLoaded = newLoadingStatus
    },
    loadingBtn(state, loadingBtn){
        state.isLoaded = loadingBtn
    },
}

export default {
    state, getters, actions, mutations
}