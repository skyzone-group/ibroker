<template>
    <div>
        <router-view class="main-view" name="agent"></router-view>
    </div>
</template>

<script>
import NavBar from '../../components/SiteNavBar.vue'
import AuthModal from '../auth/AuthModal.vue'
import FooterNav from '../../components/SiteFooter.vue'
import defaultImage from "../../../../public/images/avatar-dafault.png"
export default {
    components: {
    },
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>
