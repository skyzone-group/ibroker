<template>
    <div class="widget_profile d-lg-none d-flex">
        <div class="widget_profile_avatar">
            <img v-if="user.image" :src="`/file/${user.image}`" alt="user_avatar" class="img-full" style="object-fit: cover;">
            <img v-else :src="src" alt="user_avatar" class="img-full" style="object-fit: cover;">
        </div>
        <div class="widget_profile-content">
            <p class="mb-0">{{ user.firstname && user.firstname ? (`${user.firstname} ${user.lastname}`) : `User ${user.id}`}}</p>
            <div class="widget_profile-content_id_btn mt-1 d-flex justify-content-between">
                <span>ID {{user.id}}</span>
                <router-link :to="{ name: 'myaccount'}" class="d-flex align-items-center">
                    Профиль
                    <svg data-name="IconArrowRight" class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 9.999"><path fill="currentColor" d="M.28 1.627L3.68 5 .28 8.37c-.37.37-.375.97-.006 1.342l.007.007c.38.37.986.37 1.36 0l4.08-4.05c.373-.368.376-.968.008-1.34l-.008-.01L1.64.28C1.265-.094.66-.094.28.28c-.37.37-.374.97-.004 1.343.002 0 .004.003.005.004z"></path></svg>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
import defaultImage from "../../../../public/images/avatar-dafault.png"
import { mapGetters } from 'vuex'
export default {
    setup() {
        
    },
    props: {
        defimage: {
            type: String
        }
    },
    data() {
        return {
            src: defaultImage,
        }
    },
    mounted(){
        this.$store.dispatch('getUserInfo');
    },
    computed: {
        ...mapGetters([
            'user',
            'isLoaded'
        ]),
    },
}
</script>

<style scoped>
.widget_profile{
    display: flex;
    position: relative;
    margin-bottom: 10px;
    box-shadow: 0 1px 0 0 #e4e4e4;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    background-color: #fff;
    padding: 15px;
}

.widget_profile_avatar{
    display: flex;
    flex: 0 0 48px;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    border-radius: 50%;
    background-color: #eee;
    height: 48px;
    width: 48px;
    overflow: hidden;
    user-select: none;
}
.widget_profile_avatar img{
    background-size: cover;
    width: 100%;
    height: 100%;
}

.widget_profile-content{
    display: flex;
    flex: 1 1;
    flex-direction: column;
    justify-content: center;
}
.widget_profile-content p{
    color: #121212;
    font-size: 16px;
    line-height: normal;
}

.widget_profile-content_id_btn a{
    cursor: pointer;
    color: #2b87db;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.29;
    text-decoration: none;
}
.widget_profile-content_id_btn .svg{
    margin-left: 5px;
    width: 6px;
    height: 100%;
}
</style>