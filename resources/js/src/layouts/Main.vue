<template>
    <div>
        <nav-bar :loggedIn="loggedIn"></nav-bar>
        <router-view class="main-view" name="main"></router-view>
        <auth-modal @loggedIn="authStatus" :loggedIn="loggedIn"></auth-modal>
    </div>
</template>

<script>
import NavBar from '../../components/SiteNavBar.vue'
import AuthModal from '../auth/AuthModal.vue'
export default {
    components: {
        NavBar,
        AuthModal
    },
    data() {
        return {
            loggedIn: false,
        }
    },
    methods: {
        authStatus(status){
            this.loggedIn = status;
        }
    },
    mounted() {
        this.loggedIn = localStorage.getItem('token') ? true : false;
        localStorage.clear();

    },
}
</script>
