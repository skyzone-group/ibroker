<template>
    <div class="user_account_main">
        <div v-if="isLoaded" class="loader-main-box">
            <ProgressSpinner style="width:80px; height:80px" strokeWidth="3" fill="var(--surface-ground)" animationDuration="1s" />
        </div>
        <div  v-if="!isLoaded" class="user_account_main_box w-100">
            <ul class="nav nav-tabs mb-4" role="tablist">
                <li class="nav-item">
                    <button class="nav-link d-flex align-items-center" id="information-tab" @click="(activeTab = 0)" :class="{'active' : activeTab == 0}">
                        <i class="feather icon-user mr-2"></i>
                        <span class="d-none d-sm-block">Личные данные</span>
                    </button>
                </li>
                <li class="nav-item">
                    <button class="nav-link d-flex align-items-center" id="password-tab" @click="(activeTab = 1)" :class="{'active' : activeTab == 1}">
                        <i class="feather icon-lock mr-2"></i>
                        <span class="d-none d-sm-block">Пароль</span>
                    </button>
                </li>
                <li class="nav-item">
                    <button class="nav-link d-flex align-items-center" id="social-tab" @click="(activeTab = 2)" :class="{'active' : activeTab == 2}">
                        <i class="feather icon-share-2 mr-2"></i>
                        <span class="d-none d-sm-block">Социальные сети</span>
                    </button>
                </li>
            </ul>
            <div v-if="(activeTab == 0)" class="user_account_information">
                <div class="user_account_main_block">
                    <div class="user_account_main_block-item">
                        <div>
                            <div class="user_account_main_block-item-card">
                                <div class="user_account_main_block-item-card_bottom">
                                    <div class="user_account_main_block-item-card_bottom_info">
                                        <form @submit.prevent="saveData()" class="profile_form" method="POST" :model="form">
                                            <!-- Avatar -->
                                            <div class="profile_form_avatar">
                                                <div class="user_account_main_block-item-card-header">
                                                    <div class="avatar">
                                                        <img v-if="user.image == null" :src="src" class="img-full-back" alt="user_avatar">
                                                        <div v-else class="img-full-back" :style="`background-image:url('/file/${user.image}')`"></div>
                                                    </div>
                                                    <div class="user_info">
                                                        <p class="mb-0 user_info-p">{{ user.firstname && user.firstname ? (`${user.firstname} ${user.lastname}`) : `User ${user.id}`}}</p>
                                                        <span class="user_info_span">{{ getFormattedDate(user.created_at) }} год</span>
                                                    </div>
                                                </div>
                                                <div class="profile_form_btns">
                                                    <input type="file" id="primary__avatar"  class="d-none" name="user_image" accept="image/png, image/jpeg, image/pjpeg"  @change="onInputChange"> 
                                                    <label  class="avatar__button p-button p-component mr-2 p-button-rounded" for="primary__avatar">
                                                        {{ user.image ? 'Обновить фото' : 'Сменить Аватар' }}
                                                    </label>
                                                    <Button @click="openBasic" label="Удалить фото" class="p-button-outlined p-button-danger p-button-rounded ml-2" />
                                                </div>
                                            </div>
                                            <!-- Avatar -->
                                            <div class="field mt-3">
                                                <label for="username1">Имя</label>
                                                <InputText v-if="!changeFullname && user.firstname" id="username1" type="text" class="w-100" :value="user.firstname" :disabled="user.firstname"/>
                                                <InputText v-if="changeFullname || !user.firstname" id="username1" v-model="form.firstname" type="text" class="w-100" required/>
                                            </div>
                                            <div class="field mt-3">
                                                <label for="username1">Фамилия</label>
                                                <InputText v-if="!changeFullname && user.lastname" id="lastname" type="text" class="w-100" :value="user.lastname" :disabled="user.lastname"/>
                                                <InputText v-if="changeFullname || !user.lastname" id="lastname" v-model="form.lastname" type="text" class="w-100" required/>
                                            </div>
                                            <!-- <div class="field mt-3">
                                                <label for="dateformat">Дата рождения</label>
                                                <Calendar id="dateformat" v-model="databirth"  dateFormat="mm-dd-yy" class="w-100" />
                                            </div> -->
                                            <div class="btn-save mt-3">
                                                <Button label="Сохранить" type="submit" class="p-button-rounded" />
                                                <Button label="Изменить" @click="changeFullname = true" type="button" class="p-button-rounded p-button-danger ml-2" :disabled="!user.firstname || !user.lastname" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="user_account_main_block-item">
                        <div>
                            <div class="widget_phone_email">
                                <div class="widget_phone">
                                    <div class="phone-div">
                                        <div class="phone-div_block">
                                            <div class="phone-div_block_content">
                                                <label class="phone-div_block_content_label">
                                                    <span class="phone-div_block_content_label_span">
                                                        Номер телефона
                                                        <!-- <span class="phone-div_block_content_label_span_notification span_warning" :class="changeNumber === true ? 'span_warning' : user.phone ? 'span_success' : ''">
                                                            {{ changeNumber === true ? 'Не подтверждён' : user.phone ? 'Номер подтверждён' : '' }}
                                                        </span> -->
                                                    </span>
                                                    <div v-show="FormPhone" class="alert alert-danger mb-0">
                                                        <span class="error-msg-phone" id="phone_error"></span>
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="phone-div_block_input mt-3">
                                                <label v-if="!changeNumber" class="phone-div_block_input_label">
                                                    <InputText type="text" class="w-100" :value="`+${user.phone}`" :disabled="user.phone" />
                                                    <button  class="phone-form-btn mt-2" type="button" @click="changeNumber = true">Изменить номер телефона</button>
                                                    <button  class="phone-form-btn mt-2 ml-3" type="button" style="color: var(--form-button-color-green);">Добавить номер</button>
                                                </label>
                                                <label v-if="!sendVerifCode && changeNumber" class="phone-div_block_input_label">
                                                    <form @submit.prevent="getVerifCode()" method="POST">
                                                        <InputText type="text" v-model="phone" class="w-100" placeholder="998901234567" required/>
                                                        <div class="d-flex mt-2">
                                                            <button type="submit" class="phone-form-btn">Отправить код</button>
                                                            <button type="button" @click="changeNumber = false" class="phone-form-btn ml-4" style="color: #D32F2F;">Отмена</button>
                                                            {{ exampleCode }}
                                                        </div>
                                                    </form>
                                                </label>
                                                <label v-if="sendVerifCode" class="phone-div_block_input_label">
                                                    <form @submit.prevent="saveData()" method="POST" :model="form">
                                                        <span style="color: red">[ Your code is {{ this.exampleCode }} ]</span>
                                                        <InputText type="text" v-model="form.code" class="w-100" />
                                                        <div class="d-flex mt-2">
                                                            <button type="submit" class="phone-form-btn">Отправить</button>
                                                        </div>
                                                    </form>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget_email">
                                    <form name="EmailForm"  @submit.prevent="saveData()" method="POST" :model="form">
                                        <div class="widget_email-div">
                                            <div class="widget_email-div_txt d-flex align-items-center">
                                                Электронная почта
                                                <svg v-if="!changeEmail && user.email" class="ml-2" data-name="IconCheck" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10"><path fill="currentColor" fill-rule="evenodd" d="M5.44 9.5h-.01a1.03 1.03 0 0 1-.727-.31L.293 4.68a1.03 1.03 0 0 1 1.473-1.44l3.686 3.77L12.247.297a1.03 1.03 0 1 1 1.447 1.464L6.164 9.2c-.194.19-.454.298-.725.298"></path></svg>
                                            </div>
                                            <div class="email-div_block_input mb-3">
                                                <label class="email-div_block_input_label">
                                                    <InputText v-if="changeEmail || !user.email" type="email" v-model="form.email" class="w-100"  required/>
                                                </label>
                                            </div>
                                            <p v-if="!changeEmail" class="widget_email-div__email">{{user.email}}</p>
                                            <button v-if="!changeEmail && user.email" type="button" @click="changeEmail = true" class="phone-form-btn">Изменить электронную почту</button>
                                            <button v-if="changeEmail || !user.email" type="submit" class="phone-form-btn">Сохранить электронную почту</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="widget_nickname">
                                    <form name="EmailForm"  @submit.prevent="saveData()" method="POST" :model="form">
                                        <div class="widget_email-div">
                                            <div class="widget_email-div_txt d-flex align-items-center">
                                                Ваш усернаме
                                                <svg v-if="user.username" class="ml-2" data-name="IconCheck" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10"><path fill="currentColor" fill-rule="evenodd" d="M5.44 9.5h-.01a1.03 1.03 0 0 1-.727-.31L.293 4.68a1.03 1.03 0 0 1 1.473-1.44l3.686 3.77L12.247.297a1.03 1.03 0 1 1 1.447 1.464L6.164 9.2c-.194.19-.454.298-.725.298"></path></svg>
                                            </div>
                                            <div v-show="FormValidate[1]" class="alert alert-danger">
                                                <span class="error-msg-password" id="password_error"></span>
                                            </div>
                                            <div class="email-div_block_input mb-3">
                                                <label v-if="!user.username" class="email-div_block_input_label">
                                                    <InputText type="text" v-model="form.username" class="w-100" v-tooltip.bottom="'Please be careful! You can enter username only once.You cannot change username'" placeholder="Напишите текст без пробелов" required />
                                                </label>
                                                <div v-else class="d-flex justify-content-between">
                                                    <router-link  target="_blank" :to="{name: 'agentHome', params: { id: user.username }, meta: { userCheck: true }}" class="widget_email-div__email mb-0">{{`http://ibroker.skybox.uz/rieltor/${user.username}`}}</router-link>                                   
                                                </div>
                                                <span v-if="!user.username" class="d-lg-none d-md-none d-sm-none d-block" style="font-style: italic; color: #EA5455!important;">Please be careful! You can enter username only once.You cannot change username</span>
                                            </div>
                                            <button v-if="!user.username" type="submit" class="phone-form-btn">Сохранить</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="agent-info mt-3">
                    <h1 class="block_title title mb-3">О себе</h1>
                    <div class="block__content">
                        <form :model="form">
                            <div class="form-group">
                                <Textarea v-model="form.about" rows="8" class="w-100" placeholder="О себе"/>
                            </div>
                            <div class="text-right">
                                <Button label="Сохранить" type="submit" class="p-button-rounded" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div v-else-if="(activeTab == 1)" class="agent-password">
                <div class="user_account_main_block-item-card password_box">
                    <div class="change_password-box">
                        <div class="change_password">
                            <div class="title d-flex align-items-center">
                                <span>Сменить пароль</span>
                            </div>
                            <div class="change_password_div">
                                <div v-show="FormValidate[1]" class="alert alert-danger">
                                    <span class="error-msg-password" id="password_error"></span>
                                </div>
                                <form @submit.prevent="saveData()" method="POST" :model="form">
                                    <div class="change_password_div_items">
                                        <Password v-model="form.password" :feedback="false" toggleMask placeholder="Старый пароль" required></Password>
                                    </div>
                                    <div class="change_password_div_items mb-3">
                                        <Password v-model="form.new_password" toggleMask placeholder="Новый пароль" required></Password>
                                    </div>
                                    <div class="change_password_div_btn d-flex justify-content-end">
                                        <Button type="submit" label="Сохранить" class="p-button-rounded" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="agent-social-links">
                <div class="user_account_main_block-item-card social_box">
                    <div class="social_box-block">
                        <div class="title d-flex align-items-center">
                                <span>Социальные сети</span>
                            </div>
                        <form @submit.prevent="saveData()" method="POST" :model="form">
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <fieldset>
                                        <label>Telegram</label>
                                        <div class="input-group mb-2">
                                            <div class="p-inputgroup">
                                                <span class="p-inputgroup-addon">
                                                    <i class="pi pi-telegram"></i>
                                                </span>
                                                <InputText :placeholder="user.telegram ? `https://t.me/${user.telegram}` : 'Telegram'" v-model="form.telegram" v-tooltip.bottom.focus="'Please enter your username'" :disabled="user.telegram"/>
                                            </div>
                                            <a v-if="user.telegram" target="_blank" :href="`https://t.me/${user.telegram}`" class="widget_email-div__email">{{`https://t.me/${user.telegram}`}}</a>
                                        </div>
                                        <label>Whatsapp</label>
                                        <div class="input-group">
                                            <div class="p-inputgroup">
                                                <span class="p-inputgroup-addon">
                                                    <i class="pi pi-whatsapp"></i>
                                                </span>
                                                <InputText placeholder="Whatsapp" v-model="form.whatsapp" v-tooltip.bottom.focus="'Please enter your username'"/>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <fieldset>
                                        <label>Facebook</label>
                                        <div class="input-group mb-2">
                                            <div class="p-inputgroup">
                                                <span class="p-inputgroup-addon">
                                                    <i class="pi pi-facebook"></i>
                                                </span>
                                                <InputText placeholder="Facebook" v-model="form.facebook" v-tooltip.bottom.focus="'Please enter your username'"/>
                                            </div>
                                        </div>
                                        <label>Instagram</label>
                                        <div class="input-group">
                                            <div class="p-inputgroup">
                                                <span class="p-inputgroup-addon">
                                                    <i class="pi pi-instagram"></i>
                                                </span>
                                                <InputText placeholder="Instagram" v-model="form.instagram" v-tooltip.bottom.focus="'Please enter your username'"/>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div class="col-12 mt-2">
                                    <div class="change_password_div_btn d-flex justify-content-end">
                                        <Button type="submit" label="Сохранить" class="p-button-rounded" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="user-info-succes-box">
                <Toast />
                <div class="profile_form-avatar-delete">
                    <form v-if="displayBasic" @submit.prevent="deleteImage()" class="profile_form" method="POST">
                        <Dialog header="Удалить фото профиля?" v-model:visible="displayBasic" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '40vw'}" class="delete_user_avatar-model" :modal="true" :dismissableMask="true" :draggable="false">
                            <template #footer>
                                <Button label="No" icon="pi pi-times" @click="closeBasic" class="p-button-text"/>
                                <Button label="Yes" type="submit" @click="deleteImage" icon="pi pi-check" class="p-button-danger"  autofocus />
                            </template>
                        </Dialog>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar';
import Toast from 'primevue/toast';
import Password from 'primevue/password';
import Dialog from 'primevue/dialog';
import defaultImage from "../../../../../public/images/avatar-dafault.png"
import ProgressSpinner from 'primevue/progressspinner';
import { mapGetters } from 'vuex'
// Moment
import moment from 'moment'

export default {
    components: {
        Button,
        InputText,
        Calendar,
        Toast,
        Password,
        Dialog,
        ProgressSpinner,
        Textarea
    },
    props: {
        defimage: {
            type: String
        },
    },
    data() {
        return {
            form: {
                image: "",
                firstname: "",
                lastname: "",
                code: '',
                email: "",
                password: "",
                new_password: "",
                username: "",
                telegram: "",
                whatsapp: "",
                facebook: "",
                instagram: "",
                about: ""
            },
            phone: "",
            exampleCode: "",
            databirth: null,
            changeNumber: false,
            changeEmail: false,
            sendVerifCode: false,
            src: defaultImage,
            file: null,
            delete_image: false,
            changeFullname: false,
            FormValidate: [false,false],
            FormPhone: false,
            displayBasic: false,
            activeTab: 0
        }
    },
    methods: {
        async onInputChange(e){
            this.file = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = (e) => {
                this.src = e.target.result;
                // console.log(this.src);
                this.profileUpload(e.target.result);
            }; 
        },
        profileUpload(file){  // insert new file or image by this code
            // token
            const token = localStorage.getItem('token');
            // image
            if(this.src == file){
                let formm = new FormData();
                formm.append('image', this.src);
                axios.post('/api/user/update', formm, {
                    headers: {
                        'Authorization': `Bearer ${token}`, 
                    }
                })
                .then(response => {
                    console.log(response);
                    this.$store.dispatch('getUserInfo');
                })
                .catch(function (error) {
                    console.log("889");
                    alert("bad");
                });
            }
        },
        saveData(){ // save user informations
            const token = localStorage.getItem('token');
            axios.post('/api/user/update',  this.form, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            }).then(response => {
                console.log(response);
                if (response.data.status == true) {
                    this.showSuccess();
                    this.FormValidate[1] = false;
                    setTimeout(() => {
                        this.$store.dispatch('getUserInfo'); 
                        this.reset();
                    }, 1000);
                }
                else{
                    var password_error = response.data.error.message;
                    $(".error-msg-password").each(function() {
                        $(this).text(password_error);
                    });
                    this.FormValidate[1] = true;
                }
            })
            .catch(function (error) {
                alert(error);
            });
        },
        getVerifCode(){ // get verification code
            const token = localStorage.getItem('token');
            let formm = new FormData();
            formm.append('phone', this.phone);
            
            axios.post('/api/user-phone/update',  formm, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            }).then(response => {
                console.log(response);
                if (response.data.status) {
                    this.exampleCode = response.data.result.code;
                    this.sendVerifCode = true;
                }
                else if(response.data.error){
                    $(".error-msg-phone").each(function() {
                        $(this).text('Телефон уже занят!');
                    });
                    this.FormPhone = true;
                }
                else{
                    this.FormPhone = false;
                }
                
                //window.location.href = '/account/summary';
            })
            .catch(function (error) {
                // this.onFailure(error.response.data.message);
                alert(error);
                this.sendVerifCode = false;
                console.log(error);
            });
        },
        deleteImage(){ // delete inserted image
            const token = localStorage.getItem('token');
            this.delete_image = true;
            let formm = new FormData();
            formm.append('delete_image', this.delete_image);
            axios.post('/api/user/update', formm, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            })
            .then(response => {
                window.location.reload();
                this.displayBasic = false;
            })
            .catch(function (error) {
                console.log("889");
                alert("bad");
            });
        },
        showSuccess() { // success message
            this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
        },
        getFormattedDate(date) { // get only year from timestempt
            return moment(date).format("YYYY")
        },
        openBasic() { // open imaga delete model
            this.displayBasic = true;
        },
        closeBasic() { // close imaga delete model
            this.displayBasic = false;
        },
        reset () {
            this.form.image = "";
            this.form.firstname = "";
            this.form.lastname = "";
            this.form.code =  '',
            this.form.email = "";
            this.form.password = "";
            this.form.new_password = "";
            this.form.username = "";
        }
    },
    mounted(){
        this.$store.dispatch('getUserInfo');
    },
    computed: {
        ...mapGetters([
            'user',
            'isLoaded',
            'additionalInfo'
        ]),
    },
    created() {
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today,invalidDate];
        
    },
}
</script>


<style>

.user_account_main_box .nav.nav-tabs .nav-item,
.objects-main-div_nav .nav.nav-tabs .nav-item{
    position: relative;
    margin-bottom: -1px;
}

.user_account_main_box .nav.nav-tabs .nav-item .nav-link {
    color: #000;
    font-size: 16px;
    border: none;
    min-width: auto;
    font-weight: 600;
    padding: 0.5em 0.9375em;
    border-radius: 0;
}

.user_account_main_box .nav.nav-tabs .nav-item .nav-link.active{
    color: var(--form-button-color);
}
.user_account_main_box .nav.nav-tabs .nav-item .nav-link.active:after {
    background: var(--form-button-color) !important;
    box-shadow: unset !important;
}

.change_password-box, .social_box-block{
    padding: 15px;
}

.user_account_main{
    display: flex;
    flex: 1 1;
    max-width: 100%;
}

.user_account_main_block{
    display: flex;
    flex: 1 1;
    margin-bottom: 20px;
}

.user_account_main_block-item{
    flex: 1 1;
    margin-left: 10px;
}

.user_account_main_block-item:first-child{
    margin-left: 0;
}


.user_account_main_block-item-card{
    box-shadow: 0 1px 0 0 #e4e4e4;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    background-color: #fff;
}

.user_account_main_block-item-card.password_box,
.user_account_main_block-item-card.social_box{
    max-width: 50%;
    width: 100%;
}

.user_account_main_block-item-card.social_box{
    max-width: 80%;
}

.user_account_main_block-item-card-header{
    display: flex;
    position: relative;
    padding: 10px 0;
    border-bottom: 1px solid #e4e4e4;
    margin-bottom: 15px;
}
.user_account_main_block-item-card-header .avatar{
    display: flex;
    position: relative;
    flex: 0 0 48px;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    border-radius: 50%;
    background-color: #eee;
    height: 48px;
    overflow: hidden;
    -ms-user-select: none;
    user-select: none;
}

.user_info{
    display: flex;
    position: relative;
    flex: 1 1;
    flex-direction: column;
    justify-content: center;
    align-self: center;
}

.user_info-p{
    margin-bottom: 6px;
    color: #121212;
    font-size: 16px;
    line-height: 1.2;
}

.user_info_span{
    color: #7a7a7a;
    font-size: 14px;
    line-height: 1.29;
}

.user_account_main_block-item-card_bottom{
    position: relative;
    /* border-top: 1px solid #e4e4e4; */
    /* padding-top: 15px; */
}

.user_account_main_block-item-card_bottom_info{
    display: block;
    flex: 1;
    max-width: 100%;
}

.profile_form{
    display: block;
    padding: 5px 15px 15px;
}

.profile_form_btns{
    /* display: flex; */
    justify-content: space-between;
    margin-bottom: 20px;
}

.widget_phone_email{
    margin-bottom: 10px;
    box-shadow: 0 1px 0 0 #e4e4e4;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    background-color: #fff;
}

.widget_phone, 
.widget_email{
    border-bottom: 1px solid #e4e4e4;
    padding: 15px;
}

.widget_nickname{
    padding: 15px;
}
/* .phone-div{
    margin-bottom: 10px;
} */

.phone-div_block_content_label{
    display: inline-block;
    cursor: pointer;
    color: #7a7a7a;
}

.phone-div_block_content_label_span{
    font-size: 14px;
}

/* Phone notification classses */
.span_warning{
    margin-left: 8px;
    border-radius: 3px;
    background-color: #ff4b43;
    padding: 2px 6px;
    color: #fff;
    font-weight: 700;
    font-size: 11px;
    line-height: 16px;
}


.span_success{
    margin-left: 8px;
    border-radius: 3px;
    background-color: #28C76F !important;
    padding: 2px 6px;
    color: #fff;
    font-weight: 700;
    font-size: 11px;
    line-height: 16px;
}

/* ******************* */
.phone-div_block_input_label , .email-div_block_input_label{
    display: block;
    position: relative;
}

.phone-form-btn{
    cursor: pointer;
    color: #2b87db;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
}

.phone-form-btn:hover{
    color: #1a62a6;
}


.widget_email-div_txt{
    margin-bottom: 6px;
    color: #7a7a7a;
}

.widget_email-div_txt svg{
    margin-left: 4px;
    width: 14px;
    height: 9.5px;
    color: #2e9e00;
}

.widget_email-div__email{
    margin-bottom: 6px;
    font-size: 16px;
    line-height: 18px;
}
    
    
.change_password .title,
.social_box-block .title{
    margin-bottom: 15px;
    font-size: 16px;
}

.accordion-custom i, span {
    vertical-align: middle;
}

.accordion-custom span {
    margin: 0 .5rem;
}


.p-accordion p {
    line-height: 1.5;
    margin: 0;
}

.user_account_main_block-item .p-accordion-header-link{
    flex-direction: row-reverse !important;
    justify-content: space-between !important;
}

.p-accordion-header-link:hover{
    text-decoration: none !important;
}

.change_password_div_items{
    position: relative;
    margin-bottom: 10px;
}

.change_password_div_items .p-component{
    width: 100%;
}
/* ************************************** */
/* *************************************************************** */
/* *************************************************** */
@media (min-width: 1025px){
    .profile_form {
        width: 100%;
    }
    
    /* .phone-div {
        margin-bottom: 7px;
    } */

    .phone-div_block_content_label_span{
        font-size: 12px;
    }
    
    .phone-div_block_input_label, .email-div_block_input_label{
        width: 70%;
    }
    
    .phone-form-btn{
        line-height: 1.43;
    }
}

@media (max-width: 991px){
    .user_account_main_block-item-card.social_box {
        max-width: 100%;
    }
}

@media (max-width: 767px){
    .user_account_main_block-item-card.password_box{
        max-width: 100%;
    }
}

@media (max-width: 640px){   
    .user_account_main_block-item-card_bottom_info{
        display: block;
    }
}

@media (max-width: 640px){
    .user_account_main_block{
        flex-direction: column;
    }
    .user_account_main_block-item:nth-child(2){
        margin: 15px 0 0 0;
    }
}
</style>