<template>
    <div class="main_nav d-flex align-items-center" :class="{ 'sticky': scrollPosition > 50}">
        <button type="button" class="menu_btn d-flex align-items-center" :class="{ 'mhscrolled': scrollPosition > 50}">
            <i class="fas fa-bars mr-2"></i>
            <span>Menu</span>
        </button>
        <a href="#!">
            <div v-if="(user.image == null)" class="alt_mhimg" :class="{ 'mhscrolled': scrollPosition > 50}" :style="`background:url('/file/${defaultImage}') no-repeat center center; background-size: cover;`"></div>
            <div v-else class="alt_mhimg" :class="{ 'mhscrolled': scrollPosition > 50}" :style="`background:url('/file/${user.image}') no-repeat center center; background-size: cover;`"></div>
        </a>
        <span class="agentwebsitename" :class="{ 'mhscrolled': scrollPosition > 50}">
            <a href="#!" class="nohover"> {{user.firstname}} {{user.lastname}} </a>
        </span>
        <div class="menu_left_items d-flex">
            <div class="contact_links" :class="{ 'mhscrolled': scrollPosition > 50}">
                <a href="#!" class="emailicon nohover">
                    <i class="far fa-envelope mr-2"></i>
                    <span>Email</span>
                </a>
                <a href="#!" class="phoneicon nohover">
                    <i class="fas fa-phone mr-2"></i>
                    <span>+{{user.phone}}</span>
                </a>
            </div>
            <button type="button" class="signup_btn" :class="{ 'mhscrolled': scrollPosition > 50}">Share</button>
        </div>
    </div>
</template>


<script>
import defaultImage from '../../../../public/images/avatar-dafault.png'
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            scrollPosition: null,
            defaultImage,
            user: []
        }
    },
    methods: {
        handleScroll() {
            this.scrollPosition = window.scrollY
        },
        async getInfo(){
            // this.loaderProgress = true;
            axios.get('/api/agent/info/' + this.$route.params.id)
            .then(response => {
                this.user = response.data.result.user;
                // this.loaderProgress = false;
            });
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll);
    },
    created() {
        this.getInfo();
    },
}
</script>


<style scoped>
.main_nav {
    border-bottom: 1px solid rgba(255,255,255,0.1);
    transition: all 0.3s ease-in-out;
}
.sticky.main_nav  {
    border-bottom: 1px solid rgba(255,255,255,0.1);
    background-color: #0B50D2;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 1000;
    transition: all 0.3s ease-in-out;
    min-height: 47px;
    height: 47px;
}

/* .sticky.main_nav  {
    background-color: #425767;
} */

.bordered-text {
    text-shadow: 1px 1px 6px rgb(0 0 0 / 45%);
}

.menu_btn {
    line-height: 48px;
    padding-left: 15px;
    font-size: 16px;
    color: #ffffff;
}


.alt_mhimg.mhscrolled {
    width: 60px;
    height: 60px;
    margin-left: 10px;
    border-radius: 4px;
    overflow: hidden;
    display: inline-block;
    position: absolute;
    top: 0;
}

.alt_mhimg {
    display: none;
}

.agentwebsitename.mhscrolled {
    padding-left: 84px;
}

.agentwebsitename {
    padding-left: 10px;
    color: #FFFFFF;
    font-size: 20px;
    display: inline-block;
    font-weight: bold;
}

.menu_left_items {
    float: right;
    margin-left: auto;
    padding-right: 15px;
}

.signup_btn {
    background: #0000;
    border: 1px solid #d3d4d4;
    border-radius: 4px;
    font-size: 16px;
    color: #242629;
    line-height: 18px;
    float: right;
    padding: 5px 7px;
    white-space: nowrap;
    color: #FFFFFF;
}

.menu_left_items .contact_links {
    float: left;
    display: none;
}

.sticky .menu_left_items .contact_links {
    display: flex;
}

.menu_left_items .contact_links a {
    line-height: 30px;
    display: flex;
    align-items: center;
    clear: none;
    margin-right: 10px;
    font-size: 16px !important;
    font-weight: normal !important;
    color: #FFFFFF;
}

/* *************************************** Media **************************************************** */
@media only screen and (min-width: 501px) and (max-width: 770px){
    .agentwebsitename {
        font-size: 16px;
    }
}


@media only screen and (min-width: 230px) and (max-width: 650px){
    .alt_mhimg.mhscrolled {
        display: none;
    }

    .agentwebsitename {
        font-size: 18px;
    }

    .agentwebsitename.mhscrolled {
        padding-left: 10px;
    }
}


@media only screen and (min-width: 230px) and (max-width: 550px){

    .phoneicon span {
        display: none;
        font-size: 14px;
        font-weight: normal;
    }

    .sticky .menu_left_items .emailicon span, .sticky .menu_left_items .phoneicon span {
        display: none;
    }
}

@media (max-width: 690px){
    .menu_left_items .contact_links {
        display: flex;
    }

    /* .menu_left_items .contact_links a{
        color: #FFFFFF;
    }

    .menu_left_items .contact_links.mhscrolled a{
        color: #FFFFFF;
    } */

    .agentwebsitename {
        display: none;
    }
}
</style>