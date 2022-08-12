<template>
    <!-- Modal -->
    <div class="auth_modal_box auth_modal_block">
        <div class="modal"  id="animation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel6" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div v-show="formData.form === 'login'" class="modal-content">
                    <div class="modal-header text-center">
                        <div class="w-100 modal-header_text">
                            <h2 class="modal-title text-text-bold-600 text-center mt-1 mb-1" id="cal-modal">
                                Авторизация в личном кабинете
                            </h2>
                            <h5 class="text-text-bold-600 text-center mt-1 mb-1" id="cal-modal">
                                Для продолжения введите номер телефона
                            </h5>
                        </div>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="handleSubmit" class="form form-vertical">
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div v-show="FormValidate" class="alert alert-danger">
                                            <span class="error-msg-password" id="password_error"></span>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="contact-info-icon">Mobile</label>
                                            <div class="position-relative has-icon-left">
                                                <input type="number" v-model="formData.phone" id="contact-info-icon"
                                                    class="form-control" name="phone" placeholder="+998 XX XXX-XX-XX" />
                                                <div class="form-control-position">
                                                    <i class="feather icon-smartphone"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="password-icon">Password</label>
                                            <div class="position-relative has-icon-left">
                                                <input type="password" v-model="formData.password" id="password-icon"
                                                    class="form-control" name="contact-icon" placeholder="Ваш пароль" />
                                                <div class="form-control-position">
                                                    <i class="feather icon-lock"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <Button type="submit" class="block btn btn-primary mr-1 mb-1" :loading="loading[2]" @click="load(2)" label="Продолжить" :class="{'button-disabled' : (formData.phone.length == 0) || formData.password.length == 0}" :disabled="(formData.phone.length == 0) || formData.password.length == 0" />
                                    </div>
                                    <div class="col-12">
                                        <button @click="formData.form = 'send-code'" type="button"
                                                class="block btn btn-flat-secondary text-dark">
                                            Зарегистрироваться
                                        </button>
                                        <button @click="formData.form = 'reset-password-request'" type="button"
                                                class="block btn btn-flat-secondary text-dark">
                                            Забыли пароль?
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="login_by_socials">
                                <div class="login_by_socials_block d-flex justify-content-center">
                                    <ul class="login_by_socials_block_list">
                                        <li class="login_by_socials_block_list_item">
                                            <button class="login_by_socials_block_list_item_btn login_by_socials_block_list_item_btn_back" style="background: url('images/google.svg')" type="button">
                                            </button>
                                        </li>
                                        <li class="login_by_socials_block_list_item">
                                            <button class="login_by_socials_block_list_item_btn login_by_socials_block_list_item_btn_back" style="background: url('images/facebook.svg')" type="button">
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div> -->
                        </form>
                    </div>
                </div>
                <div v-show="formData.form === 'send-code'" class="modal-content">
                    <div class="modal-header text-center">
                        <div class="w-100 modal-header_text">
                            <h2 class="modal-title text-text-bold-600 text-center mt-1 mb-1" id="cal-modal">
                                Регистрация в личном кабинете
                            </h2>
                        </div>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="handleSubmit" class="form form-vertical">
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div v-show="FormValidate" class="alert alert-danger">
                                            <span class="error-msg-password" id="password_error"></span>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="contact-info-icon">Mobile</label>
                                            <div class="position-relative has-icon-left">
                                                <input type="number" v-model="formData.phone" id="contact-info-icon"
                                                    class="form-control" name="phone" placeholder="+998 XX XXX-XX-XX" />
                                                <div class="form-control-position">
                                                    <i class="feather icon-smartphone"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="password-icon">Password</label>
                                            <div class="position-relative has-icon-left">
                                                <input type="password" v-model="formData.password" id="password-icon"
                                                    class="form-control" name="contact-icon" placeholder="Ваш пароль" />
                                                <div class="form-control-position">
                                                    <i class="feather icon-lock"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="password-icon">Confirm-password</label>
                                            <div class="position-relative has-icon-left">
                                                <input type="password" v-model="formData.password_confirmation" id="password-icon"
                                                    class="form-control" name="contact-icon"
                                                    placeholder="Повторите пароль" />
                                                <div class="form-control-position">
                                                    <i class="feather icon-lock"></i>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <!-- <button
                                            type="submit"
                                            :disabled="(formData.password_confirmation !== formData.password) || formData.password.length == 0"
                                            class="block btn btn-primary mr-1 mb-1"
                                            :class="{'button-disabled' : (formData.password_confirmation !== formData.password) || formData.password.length == 0}"
                                        >
                                            Отправить
                                        </button> -->
                                        <Button type="submit" class="block btn btn-primary mr-1 mb-1" :loading="loading[2]" @click="load(2)" label="Отправить" :class="{'button-disabled' : (formData.password_confirmation !== formData.password) || formData.password.length == 0}" :disabled="(formData.password_confirmation !== formData.password) || formData.password.length == 0" />
                                    </div>
                                    <div class="col-12">
                                        <button @click="formData.form = 'login'" type="button"
                                                class="block btn btn-flat-secondary text-dark">
                                            Уже зарегистрирован
                                        </button>
                                        <button @click="formData.form = 'reset-password-request'" type="button"
                                                class="block btn btn-flat-secondary text-dark">
                                            Забыли пароль?
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div v-show="formData.form === 'reset-password-request'" class="modal-content">
                    <div class="modal-header text-center">
                        <div class="w-100 modal-header_text">
                            <h2 class="modal-title text-text-bold-600 text-center mt-1 mb-1" id="cal-modal">
                                Восстановление пароля
                            </h2>
                        </div>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="handleSubmit" class="form form-vertical">
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="contact-info-icon">Mobile</label>
                                            <div class="position-relative has-icon-left">
                                                <input type="number" v-model="formData.phone" id="contact-info-icon"
                                                    class="form-control" name="phone" placeholder="+998 XX XXX-XX-XX" />
                                                <div class="form-control-position">
                                                    <i class="feather icon-smartphone"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <!-- <button type="submit" class="block btn btn-primary mr-1 mb-1">
                                            Отправить
                                        </button> -->
                                        <Button type="submit" class="block btn btn-primary mr-1 mb-1" :loading="loading[2]" @click="load(2)" label="Отправить" :class="{'button-disabled' : formData.phone.length == 0}" :disabled="formData.phone.length == 0" />
                                    </div>
                                    <div class="col-12">
                                        <button type="button" @click="formData.form = 'send-code'"
                                                class="block btn btn-flat-secondary text-dark">
                                            Зарегистрироваться
                                        </button>
                                        <button type="button" @click="formData.form = 'login'"
                                                class="block btn btn-flat-secondary text-dark">
                                            Уже зарегистрирован
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div v-show="formData.form === 'register' || formData.form === 'reset-password'" class="modal-content">
                    <div class="modal-header text-center">
                        <div class="w-100 modal-header_text">
                            <h2 class="modal-title text-text-bold-600 text-center mt-1 mb-1" id="cal-modal">
                                Код отправлен
                            </h2>
                        </div>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="handleSubmit" class="form form-vertical">
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="contact-info-icon">Код подтверждения <span style="color: red" v-if="formData.form === 'register' || formData.form === 'reset-password'">[ Your code is {{ this.exampleCode }} ]</span></label>
                                            <div class="position-relative has-icon-left">
                                                <input type="number" v-model="formData.code" id="contact-info-icon"
                                                    class="form-control" name="verif-code" placeholder="1234" />
                                                <div class="form-control-position">
                                                    <i class="feather icon-mail"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <!-- <button type="submit" class="block btn btn-primary mr-1 mb-1">
                                            Отправить
                                        </button> -->
                                        <Button type="submit" class="block btn btn-primary mr-1 mb-1" :loading="loading[2]" @click="load(2)" label="Отправить" :class="{'button-disabled' : formData.code.length == 0}" :disabled="formData.code.length == 0" />
                                    </div>
                                    <div class="col-12">
                                        <button v-if="formData.form === 'register' || formData.form === 'reset-password'"  type="button" class="block btn btn-primary mr-1 mb-1 mt-2 w-100" :disabled="counting" @click="startCountdown">
                                            <vue-countdown v-if="counting" :time="60000" @end="onCountdownEnd" v-slot="{ totalSeconds }">Отправить код еще раз {{ totalSeconds }} seconds later</vue-countdown>
                                            <span v-else>Отправить код еще раз</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Basic Modals end -->
</template>

<script>
import Button from 'primevue/button';
import ProgressBar from 'primevue/progressbar';

// Style
import '../../../../public/app-assets/css/bootstrap-extended.min.css'
//import '../../../../public/app-assets/css/bootstrap.css'
import '../../../../public/app-assets/css/colors.min.css'
import '../../../../public/app-assets/css/components.min.css'

// Icons
import '../../../../public/app-assets/fonts/feather/iconfont.css'


export default {
    components: {
        Button,
    },
    data() {
        return {
            formData: {
                phone: "",
                password: "",
                password_confirmation: "",
                code: "",
                form: "login"
            },
            counting: false,
            code: false,
            exampleCode: '',
            loading: [false, false, false],
            errors: {},
            FormValidate: false
        };
    },
    methods: {
        handleSubmit() {
            axios.get('/sanctum/csrf-cookie')
            .then(response => {
                axios.post('/api/' + this.formData.form, this.formData).then(response => {
                    // checking response status true or false
                    if (response.data.status) {
                        if(this.formData.form === 'send-code'){
                            this.formData.form = 'register';
                            this.counting = true;
                            this.exampleCode = response.data.result.code;
                        }
                        else if(this.formData.form === 'register' || this.formData.form === 'login' || this.formData.form === 'reset-password'){
                            this.counting = true;
                            this.$emit("loggedIn", true);
                            localStorage.setItem('token', response.data.result.access_token);
                            $("#animation").modal('hide');
                        }
                        else if(this.formData.form === 'reset-password-request'){
                            this.formData.form = 'reset-password';
                            this.exampleCode = response.data.result.code;
                        }
                    }
                    else {
                        if(this.formData.form === 'login'){
                            // alert('Login or Password is incorrect!');
                            $(".error-msg-password").each(function() {
                                $(this).text('Login or Password is incorrect!');
                            });
                        }
                        else{
                            var password_error = response.data.error.message;
                            $(".error-msg-password").each(function() {
                                $(this).text(password_error);
                            });
                        }
                        this.FormValidate = true;
                    }
                })
            })
        },
        startCountdown: function () {
            this.counting = true;
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.get('/api/resend-code').then(response => {
                    if (response.data.status) {
                        this.exampleCode = response.data.result.code;
                    }
                })
            });
        },
        onCountdownEnd: function () {
            this.counting = false;
        },
        
        load(index) {
            this.loading[index] = true;
            setTimeout(() => this.loading[index] = false, 1000);
        }
    },
    mounted() {

    },
    props: ["loggedIn"],
};
</script>

<style>

/* ********************************************** */
.modal-content {
    background-color: #fff !important;
}

.auth_modal_block .modal-content .modal-title{
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 500;
    margin: 10px 0 20px !important;
}
    
.auth_modal_block .modal-content .modal-header_text h5{
    font-size: 1.125rem !important;
    line-height: 1.5rem !important;
    margin: 1.5rem 0 !important;
    color: #848484 !important;
}


.login_by_socials{
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0;
    border-top: 1px solid #e4e4e4;
}

.login_by_socials:after{
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--white_100);
    padding: 0 16px;
    height: 20px;
    content: "или";
    color: #7a7a7a;
    font-size: 14px;
    line-height: 1;
}

.login_by_socials_block_list{
    display: flex;
    margin: 0;
    padding: 11px 16px 4px;
    list-style: none;
}

.login_by_socials_block_list_item{
    scroll-snap-align: end;
    display: flex;
    margin-top: 12px;
    margin-left: 8px;
}

.login_by_socials_block_list_item_btn{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);
    transition: transform .2s,-webkit-transform .2s,-moz-transform .2s,-o-transform .2s;
    cursor: pointer;
    outline: none;
    border: 1px solid rgba(21,34,66,.2);
    border-radius: 4px;
    background-color: var(--white_100);
    width: 48px;
    min-width: 48px;
    height: 48px;
    color: var(--white_100);
    user-select: none;
}

.login_by_socials_block_list_item_btn_back{
    background-position: 50% !important;
    background-size: 24px !important;
    background-repeat: no-repeat !important;
}

.spinner_main{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #00000069;
}

.error-msg-password{
    color: red;
    font-size: 12px;
}
/* **************************  Meida ********************************************** */
@media (max-width: 575px){
    /* .auth_modal_block{
        width: 100%;
        height: 100vh;
    } */
    
    .auth_modal_block .modal{
        padding: 0;
        width: 100%;
        height: 100%;
    }
    
    .auth_modal_block .modal-dialog{
        margin: 0;
        width: 100%;
        height: 100%;
    }
    
    .auth_modal_block .modal-content {
        width: 100%;
        height: 100%;
    }
    
    .auth_modal_block .modal .modal-header{
        flex-direction: column-reverse !important;
        align-items: end !important;
    }
    
    .auth_modal_block .modal .modal-header .close{
        margin: 0;
    }
    
    .auth_modal_block .modal .modal-header_text{
        margin-top: 30px;
    }
    
    .auth_modal_block .modal-body{
        margin: 20px 0 0 0;
        overflow-x: scroll;
    }
    
    
}

@media (max-width: 450px){
    .auth_modal_box .modal-content h2{
        font-size: 24px;
    }

    .auth_modal_box .modal-content h5{
        font-size: 13px;
    }

    .auth_modal_box .modal-body .form-group{
        margin-bottom: 10px;
    }
    
    .auth_modal_block .modal .modal-header_text {
        margin-top: 20px;
    }
}
</style>
