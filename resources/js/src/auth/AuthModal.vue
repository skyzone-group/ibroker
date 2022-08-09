<template>
    <!-- Modal -->
    <div class="auth_modal_box">
        <div class="modal"  id="animation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel6" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div v-show="formData.form === 'login'" class="modal-content">
                    <div class="modal-header text-center">
                        <div class="w-100">
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
                    <form>
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
                                            <button type="submit" class="block btn btn-primary mr-1 mb-1">
                                                Продолжить
                                            </button>
                                        </div>
                                        <div class="col-12">
                                            <button @click="formData.form = 'register'" type="button"
                                                    class="block btn btn-flat-secondary text-dark">
                                                Зарегистрироваться
                                            </button>
                                            <button @click="formData.form = 'forget'" type="button"
                                                    class="block btn btn-flat-secondary text-dark">
                                                Забыли пароль?
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </form>
                </div>
                <div v-show="formData.form === 'register'" class="modal-content">
                    <div class="modal-header text-center">
                        <div class="w-100">
                            <h2 class="modal-title text-text-bold-600 text-center mt-1 mb-1" id="cal-modal">
                                Регистрация в личном кабинете
                            </h2>
                        </div>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form>
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
                                            <button @click="formData.form = 'code'"  type="button" class="block btn btn-primary mr-1 mb-1">
                                                Отправить
                                            </button>
                                        </div>
                                        <div class="col-12">
                                            <button @click="formData.form = 'login'" type="button"
                                                    class="block btn btn-flat-secondary text-dark">
                                                Уже зарегистрирован
                                            </button>
                                            <button @click="formData.form = 'forget'" type="button"
                                                    class="block btn btn-flat-secondary text-dark">
                                                Забыли пароль?
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </form>
                </div>
                <div v-show="formData.form === 'forget'" class="modal-content">
                    <div class="modal-header text-center">
                        <div class="w-100">
                            <h2 class="modal-title text-text-bold-600 text-center mt-1 mb-1" id="cal-modal">
                                Восстановление пароля
                            </h2>
                        </div>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form>
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
                                            <button type="submit" class="block btn btn-primary mr-1 mb-1">
                                                Отправить
                                            </button>
                                        </div>
                                        <div class="col-12">
                                            <button type="button" @click="formData.form = 'register'"
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
                    </form>
                </div>
                <div v-show="formData.form === 'code'" class="modal-content">
                    <div class="modal-header text-center">
                        <div class="w-100">
                            <h2 class="modal-title text-text-bold-600 text-center mt-1 mb-1" id="cal-modal">
                                Код отправлен
                            </h2>
                        </div>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form>
                        <div class="modal-body">
                            <form @submit.prevent="handleSubmit" class="form form-vertical">
                                <div class="form-body">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="contact-info-icon">Код подтверждения</label>
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
                                            <button type="submit" class="block btn btn-primary mr-1 mb-1">
                                                Отправить
                                            </button>
                                        </div>
                                        <div class="col-12">
                                            <button v-if="formData.form === 'code' ? counting = true : counting = false"  type="button" class="block btn btn-primary mr-1 mb-1 mt-2 w-100" :disabled="counting" @click="startCountdown">
                                                <vue-countdown v-if="counting" :time="60000" @end="onCountdownEnd" v-slot="{ totalSeconds }">Отправить код еще раз {{ totalSeconds }} seconds later</vue-countdown>
                                                <span v-else>Отправить код еще раз</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </form>
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
        Button
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
            code: false
        };
    },
    methods: {
        handleSubmit() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/' + this.formData.form, this.formData).then(response => {
                    if (response.data.status) {
                        this.$emit("loggedIn", true);
                        localStorage.setItem('token', response.data.result.access_token);
                        $("#animation").modal('hide');
                        console.log( localStorage.getItem('token'))
                    }
                    else {
                        if(this.formData.form == 'login'){
                            alert('Login or Password is incorrect!');
                        }
                        else if(this.formData.form == 'register') {
                            alert(response.data.error.message);
                        }
                    }
                })
            });
        },
        startCountdown: function () {
            this.counting = true;
        },
        onCountdownEnd: function () {
            this.counting = false;
        },
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
}
</style>
