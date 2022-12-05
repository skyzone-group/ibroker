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
                        <div v-else>
                            <div v-if="(notifications.count == 0)">
                                <div class="empty_box notification-empty flex-column p-5">
                                    <figure>
                                        <img src="/images/icons/notification-bell.png" alt="">
                                    </figure>
                                    <div class="empty_box-content">
                                        <h5>Ещё нет уведомлений</h5>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <router-link :to="{name: (item.type == 'offer' ? 'friends' : '/')}" v-for="item in notifications.items" :key="item.id" class="notificatios_item nohover">
                                    <div class="notificatios_item-date">{{getFormattedDate(item.updated_at)}}</div>
                                    <div class="notificatios_item-time">{{getFormattedTime(item.updated_at)}}</div>
                                    <div class="notificatios_item-content d-flex align-items-center">
                                        <span style="-webkit-line-clamp: 2;">
                                            {{item.body}}
                                        </span>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProgressSpinner from 'primevue/progressspinner';
import moment from 'moment';
import { mapGetters } from 'vuex';
export default {
    components: {
        ProgressSpinner
    },
    data() {
        return {
            friendship: null,
            isLoaded: false,
            message: '',
            status: null,
        }
    },
    methods: {
        getFormattedDate(date) { // get only year from timestempt
            return moment(date).format('DD-MM-YYYY')
        },
        getFormattedTime(time){
            return moment(time).format('HH:mm')
        }
    },
    async mounted(){
        this.$store.dispatch('getNotification');
    },
    computed: {
        ...mapGetters([
            'isLoaded',
            'notifications'
        ]),
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
    width: 70%;
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

/* .notif-body{
    padding: 15px 20px;
} */

.notificatios_item{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    transition: background-color .3s ease-in;
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
    padding: 16px 30px;
    color: #7a7a7a;
    line-height: 20px;
}

.notificatios_item:hover{
    cursor: pointer;
    background-color: rgba(43,135,219,.1);
}
.notificatios_item-date{
    margin-right: 8px;
}

.notificatios_item-time{
    margin: 0 8px;
}

.notificatios_item-content{
    flex: 75 1;
    margin-left: 8px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
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