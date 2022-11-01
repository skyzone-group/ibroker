<template>
    <div>
        <nav-bar :loggedIn="loggedIn" :defimage="defaultImage"></nav-bar>
        <auth-modal @loggedIn="authStatus" :loggedIn="loggedIn"></auth-modal>
        <router-view class="main-view" name="main" :loggedIn="loggedIn"></router-view>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
import NavBar from '../../components/SiteNavBar.vue'
import AuthModal from '../auth/AuthModal.vue'
import FooterNav from '../../components/SiteFooter.vue'
import defaultImage from "../../../../public/images/avatar-dafault.png"
export default {
    components: {
        NavBar,
        AuthModal,
        FooterNav
    },
    data() {
        return {
            loggedIn: false,
            defaultImage
        }
    },
    methods: {
        authStatus(status){
            this.loggedIn = status;
        }
    },
    mounted() {
        this.loggedIn = localStorage.getItem('token') ? true : false;
        // localStorage.clear();
    },
}
</script>
