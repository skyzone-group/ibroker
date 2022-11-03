<template>
    <div class="notification-page-main">
        <div class="notification-page-main-box">
            <div class="notif-container">
                <div class="notif-widget">
                    <div class="notif-header">
                        <span class="title">Уведомления</span>
                    </div>
                    <div class="notif-body">
                        <div v-if="isLoaded" class="loader-main-box">
                            <ProgressSpinner style="width:80px; height:80px" strokeWidth="3" fill="var(--surface-ground)" animationDuration="1s" />
                        </div>
                        <div v-else-if="!friendship">
                            <div class="empty_box notification-empty flex-column">
                                <figure>
                                    <img src="/images/icons/notification-bell.png" alt="">
                                </figure>
                                <div class="empty_box-content">
                                    <h5>Ещё нет уведомлений</h5>
                                </div>
                            </div>
                        </div>
                        <div v-else class="notificatios=item">
                            <friendship-request :data="friendship"></friendship-request>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FriendshipRequest from '../views/notifications/Friendship.vue'
import ProgressSpinner from 'primevue/progressspinner';
export default {
    components: {
        FriendshipRequest,
        ProgressSpinner
    },
    data() {
        return {
            friendship: null,
            isLoaded: false
        }
    },
    created() {
        this.getFriendship();
    },
    methods: {
        getFriendship(){
            this.isLoaded = true ;
            const token = localStorage.getItem('token');
            axios.get('/api/friend/all', {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            })
            .then(response => {
                this.friendship = response.data.result;
                this.isLoaded = false;
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

.empty_box-content{
    padding-top: 20px;
}

.empty_box-content h5{
    font-weight: 700;
    line-height: 22px;
    font-size: 18px;
    letter-spacing: normal;
}

/* ********************************************************************** */
/* /////////////////////////////////// Meida /////////////////////////////////// */
@media (max-width: 475px){
    .notif-widget {
        width: 100%;
    }
}
</style>