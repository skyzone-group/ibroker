<template>
    <div id="inner" class="section" style="background: url('https://s3.amazonaws.com/content.har.com/awsbg/448838_bg.jpg') no-repeat center center;">
        <div class="agent-single_overlay">
            <nav-bar></nav-bar>
            <div id="header_content" class="container_medium">
                <a href="#!">
                    <div class="mh_img" style="background:url('https://pics.harstatic.com/agent/554530.jpg?ts=2021-01-05T12:50:00') no-repeat center top; background-size: cover;"></div>
                </a>
                <div class="member_header bordered-text">
                    <div class="mh_agent_name">
                        <h1>Javohir Toirov</h1>
                    </div>
                    <a href="#!">
                        <div class="starimg d-flex" style="padding-top:10px;">
                            <Rating :modelValue="4" :readonly="true" :stars="5" :cancel="false"  class="pl-0"/>
                            <span>4/5</span>
                            <span>Посмотреть рейтинги</span>
                        </div>
                    </a>
                    <div class="contact_links">
                        <a href="#!" class="emailicon nohover">
                            <i class="far fa-envelope mr-2"></i>
                            <span>Email</span>
                        </a>
                        <a href="#!" class="phoneicon nohover">
                            <i class="fas fa-phone mr-2"></i>
                            <span>+99890 359-22-84</span>
                        </a>
                        <a href="#!" class="siteicon nohover">
                            <i class="fas fa-laptop mr-2"></i>
                            <span>https://www.ibroker.skybox.uz/javohir_toirov</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section-object">
        <div class="container_medium">
            <div class="object_single_page_main_box">
                <div class="product-page__content">
                    <div class="product-page__content_mainBox">
                        <div class="product-page__content_flex d-flex flex-column">
                            <div class="product-page__section product-page__section--header">
                                <div class="main_block__column">
                                    <div class="main_block__stretch">
                                        <div class="main_block__cardTitle">
                                            <h1 id="title" class="h1_style text-lowercase mb-0">12-комн, Квартира, 12 м²</h1>
                                        </div>
                                        <div class="main_block__subline">
                                            <div class="nameless_style_1">
                                                <div class="nameless_style_1-1">
                                                    <span>продажа - Посуточно</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_block__price">
                                        <div class="main_block__price_box">
                                            <div class="price">
                                                <span>$200 000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="main_block__gallery mt-3">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-page__sidebar">
                    <div class="product-page__sticky">
                        <div class="product-page__sidebar_autor autor_box_style">
                            <div class="product-page__sidebar-form">
                                <div class="block__header">
                                    <h3 class="title">Напишите автору</h3>
                                </div>
                                <div class="block__body">
                                    <form @submit.prevent="sendChatMessage(!v$.$invalid)" method="POST" class="sendChatMessage" :model="form">
                                        <div class="form-group">
                                            <span class="p-float-label">
                                                <InputText id="form_name" type="text" v-model="v$.form.name.$model" :class="{'p-invalid': v$.form.name.$invalid && submitted}"/>
                                                <label for="form_name">Ваше имя*</label>
                                            </span>
                                            <small v-if="(v$.form.name.$invalid && submitted) || v$.form.name.$pending.$response" class="p-error">{{v$.form.name.required.$message.replace('Value', 'Ваше имя*')}}</small>
                                        </div>
                                        <div class="form-group">
                                            <span class="p-float-label">
                                                <InputText id="form_email" type="email" v-model="v$.form.email.$model" :class="{'p-invalid': v$.form.email.$invalid && submitted}"/>
                                                <label for="form_email">Ваш email*</label>
                                            </span>
                                            <small v-if="(v$.form.email.$invalid && submitted) || v$.form.email.$pending.$response" class="p-error">{{v$.form.email.required.$message.replace('Value', 'Ваш email*')}}</small>
                                        </div>
                                        <div class="form-group">
                                            <span class="p-float-label">
                                                <InputText id="form_phone" type="number" v-model="v$.form.phone.$model" :class="{'p-invalid': v$.form.phone.$invalid && submitted}"/>
                                                <label for="form_phone">Ваш телефон*</label>
                                            </span>
                                            <small v-if="(v$.form.phone.$invalid && submitted) || v$.form.phone.$pending.$response" class="p-error">{{v$.form.phone.required.$message.replace('Value', 'Ваш телефон*')}}</small>
                                        </div>
                                        <div class="form-group">
                                            <span class="p-float-label">
                                                <Textarea id="form_message" v-model="v$.form.message.$model" rows="3" :class="{'p-invalid': v$.form.message.$invalid && submitted}"/>
                                                <label for="form_message">Ваше сообщение*</label>
                                            </span>
                                            <small v-if="(v$.form.message.$invalid && submitted) || v$.form.message.$pending.$response" class="p-error">{{v$.form.message.required.$message.replace('Value', 'Ваше сообщение*')}}</small>
                                        </div>
                                        <button type="submit" class="form-group_btn">
                                            <span>Отправить сообщение автору</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
// Navbar
import NavBar from '../../../components/agent/NavBar.vue';
// Components
import Rating from 'primevue/rating';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
// Validation
import { required, requiredIf } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
    // setup: () => ({  }),
    components: {
        NavBar,
        Rating,
        InputText,
        Textarea
    },
    data() {
        return {
            form: {
                name: "",
                email: "",
                phone: null,
                message: ""
            },
            submitted: false,
        }
    },
    validations() {
        return {
            form: {
                name: { required },
                email: { required },
                phone: { required },
                message: { required },
            }
        }
    },
    methods: {
        sendChatMessage(isFormValid){
            this.submitted = true;
            if (!isFormValid) {
                return;
            }
        }
    },
    setup() {
        return {
            v$: useVuelidate()
        }
    },
}
</script>


<style>
#inner.section {
    background-size: cover;
    position: relative;
    background-attachment: fixed;
    position: relative;
    margin: 0px !important;
    padding: 0px !important;
    min-height: 230px;
}

#inner .mh_img {
    margin-top: 28px;
    position: absolute;
    z-index: 200;
    width: 167px;
    height: 167px;
    border-radius: 4px;
    overflow: hidden;
}

#inner .member_header {
    float: left;
    max-width: 100%;
    padding-left: 30px;
    margin-left: 180px;
    padding-top: 10px;
}


.member_header {
    margin-top: 10px;
    max-width: 570px;
}

.mh_agent_name h1 {
    font-weight: 500 !important;
    font-size: 48px;
    color: #FFFFFF;
    line-height: 58px;
}


#inner .mh_agent_name h1 {
    font-size: 32px;
    line-height: 34px;
}

.starimg .p-rating .p-rating-icon {
    color: #fff;
}

.starimg .p-rating span{
    padding-left: 0;
}

.starimg span {
    font-size: 16px;
    color: #ffffff;
    padding-left: 10px;
}


#inner .member_header .contact_links {
    padding-top: 15px;
    display: flex;
    align-items: center;
}

#inner .member_header .contact_links a {
    font-size: 18px;
    line-height: 22px;
    clear: none;
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.contact_links a {
    font-size: 24px;
    color: #FFFFFF;
    line-height: 32px;
    background-position: left center;
    background-repeat: no-repeat;
    display: block;
    clear: both;
}

.product-page__sidebar-form .block__header{
    padding: 1.5rem 1.5rem 0;
}

.product-page__sidebar-form .block__body {
    padding: 1.5rem 1.5rem;
}

.product-page__sidebar-form .block__header .title{
    font-size: 1.25rem;
    color: #000;
}

.product-page__sidebar-form .block__body .p-inputtext{
    padding: 12px 10px;
    width: 100%;
    border-radius: 4px;
}

.section-object .product-page__sidebar {
    padding-top: 0;
    width: 300px;
}

.product-page__sidebar-form .block__body .form-group_btn{
    color: #fff;
    background-color: #588ed8;
    border-color: #588ed8;
    line-height: 1.5rem;
    padding: 10px;
    font-size: 14px;
    border-radius: 4px;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    width: 100%;
}

.section-object .object_single_page_main_box{
    padding: 30px 0;
}
/* ********************************************************************************************** */
@media only screen and (min-width: 230px) and (max-width: 550px){
    .member_header .contact_links a {
        font-size: 18px;
    }
}
@media only screen and (max-height: 700px){
    .member_header {
        margin-top: 0px;
    }

    .mh_agent_name h1 {
        font-size: 32px;
    }
}
</style>