<template>
    <div>
        <nav-bar :loggedIn="loggedIn"></nav-bar>
        <router-view class="main-view" name="main"></router-view>
        <auth-modal @loggedIn="authStatus" :loggedIn="loggedIn"></auth-modal>
        <footer></footer>
    </div>
</template>

<script>
import NavBar from '../../components/SiteNavBar.vue'
import AuthModal from '../auth/AuthModal.vue'
import Footer from '../../components/SiteFooter.vue'
export default {
    components: {
        NavBar,
        AuthModal,
        Footer
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
