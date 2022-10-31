<template>
    <div class="notification-page-main">
        <div class="notification-page-main-box">
            <div class="notif-container">
                <div class="notif-widget">
                    <div class="notif-header">
                        <span class="title">Уведомления</span>
                    </div>
                    <div class="notif-body">
                        <friendship-request v-if="friendship" :data="friendship"></friendship-request>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import FriendshipRequest from '../views/notifications/Friendship.vue'
export default {
    components: {
        FriendshipRequest
    },
    data() {
        return {
            friendship: null
        }
    },
    created() {
        this.getFriendship();
    },
    methods: {
        getFriendship(){
            const token = localStorage.getItem('token');
            axios.get('/api/friendship/requests', {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            })
            .then(response => {
                this.friendship = response.data.result;
                // Array.from(data).forEach(file => this.friends.push(file.user));
                // console.log(this.friends);
                // console.log(this.users);
            });
        }
    },
}
</script>

<style scoped>
.notification-page-main{
    display: flex;
    flex: 1 1;
    max-width: 100%;
}

.notification-page-main-box{
    flex: 1 1;
    margin-bottom: 20px;
}

.notif-container{
    flex: 1 1;
    background-color: #f4f4f4;
    overflow: hidden;
    display: flex;
    justify-content: center;
}

.notif-widget{
    position: relative;
    box-shadow: 0 1px 0 0 #e4e4e4;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    background-color: #fff;
    width: 80%;
}

.notif-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e4e4e4;
    padding: 15px 30px;
}

.notif-header .title{
    color: #121212;
    font-style: normal;
    font-weight: 700;
    font-stretch: normal;
    font-size: 18px;
    line-height: 1.27;
    letter-spacing: normal;
}

.notif-body{
    padding: 15px 20px;
}
</style>