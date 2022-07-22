<template>
    <!-- Modal -->
    <div>
        <div class="modal"  id="animation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel6" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div v-show="form === 'login'" class="modal-content">
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
                                                    <input type="number" v-model="phone" id="contact-info-icon"
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
                                                    <input type="password" v-model="password" id="password-icon"
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
                                            <button @click="form = 'register'" type="button"
                                                class="block btn btn-flat-secondary text-dark">
                                                Зарегистрироваться
                                            </button>
                                            <button @click="form = 'forget'" type="button"
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
                <div v-show="form === 'register'" class="modal-content">
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
                                                    <input type="number" v-model="phone" id="contact-info-icon"
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
                                                    <input type="password" v-model="password" id="password-icon"
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
                                                    <input type="password" v-model="confirm_password" id="password-icon"
                                                        class="form-control" name="contact-icon"
                                                        placeholder="Повторите пароль" />
                                                    <div class="form-control-position">
                                                        <i class="feather icon-lock"></i>
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
                                            <button @click="form = 'login'" type="button"
                                                class="block btn btn-flat-secondary text-dark">
                                                Уже зарегистрирован
                                            </button>
                                            <button @click="form = 'forget'" type="button"
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
                <div v-show="form === 'forget'" class="modal-content">
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
                                                    <input type="number" v-model="phone" id="contact-info-icon"
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
                                            <button type="button" @click="form = 'register'"
                                                class="block btn btn-flat-secondary text-dark">
                                                Зарегистрироваться
                                            </button>
                                            <button type="button" @click="form = 'login'"
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
            </div>
        </div>
    </div>
    <!-- Basic Modals end -->
</template>

<script>
import Button from 'primevue/button';

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
            phone: "",
            password: "",
            confirm_password: "",
            form: "login",
        };
    },
    methods: {
        handleSubmit() {
            console.log(this.phone + this.password);
            this.$emit("loggedIn", true);
            this.toggleDialog();
        },
        
        toggleDialog() {
            this.showMessage = !this.showMessage;
            
            if(!this.showMessage) {
                this.resetForm();
            }
        },
        resetForm() {
            this.phone = '';
            this.password = '';
            this.confirm_password = '';
            this.form = "login"
        }
    },
    props: ["loggedIn"],
};
</script>

<style>

</style>