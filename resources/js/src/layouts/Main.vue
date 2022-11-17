<template>
    <div>
        <nav-bar :loggedIn="loggedIn" :defimage="defaultImage"></nav-bar>
        <auth-modal @loggedIn="authStatus" :loggedIn="loggedIn"></auth-modal>
        
        <router-view class="main-view" name="main" :loggedIn="loggedIn"></router-view>
        <footer-nav v-if="mobileView == false"></footer-nav>
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
            defaultImage,
            mobileView: false,
        }
    },
    methods: {
        authStatus(status){
            this.loggedIn = status;
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 991){
                this.mobileView = true;
                return;
            }
            this.mobileView = false;
            return;
        },
    },
    mounted() {
        this.loggedIn = localStorage.getItem('token') ? true : false;
        // localStorage.clear();
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen()
    }
}
</script>
