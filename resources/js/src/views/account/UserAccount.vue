<template>
    <div class="user_account_main">
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
                                                <img :src="src" alt="user_avatar" class="img-full">
                                            </div>
                                            <div class="user_info">
                                                <p class="mb-0 user_info-p">{{ user.firstname && user.firstname ? (`${user.firstname} ${user.lastname}`) : `User ${user.id}`}}</p>
                                                <span class="user_info_span">{{ getFormattedDate(user.created_at) }} год</span>
                                            </div>
                                        </div>
                                        <div class="profile_form_btns">
                                            <input type="file" id="primary__avatar"  class="d-none" name="user_image" accept="image/png, image/jpeg, image/pjpeg"  @change="onInputChange"> 
                                            <label  class="avatar__button p-button p-component mr-2 p-button-rounded" for="primary__avatar">
                                                Сменить Аватар
                                            </label>
                                            <Button label="Удалить фото" class="p-button-outlined p-button-danger p-button-rounded ml-2" />
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
                                    <pre>
                                        {{this.form.image}}
                                    </pre>
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
                            <form @submit.prevent="saveData()"  method="POST" :model="form" class="phone-form position-relative">
                                <div class="phone-div">
                                    <div class="phone-div_block">
                                        <div class="phone-div_block_content">
                                            <label class="phone-div_block_content_label">
                                                <span class="phone-div_block_content_label_span">
                                                    Номер телефона
                                                    <span class="phone-div_block_content_label_span_notification span_warning" :class="changeNumber === true ? 'span_warning' : user.phone ? 'span_success' : ''">
                                                        {{ changeNumber === true ? 'Не подтверждён' : user.phone ? 'Номер подтверждён' : '' }}
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                        <div class="phone-div_block_input mt-3">
                                            <label class="phone-div_block_input_label">
                                                <InputText v-if="!changeNumber" type="text" class="w-100" :value="`+${user.phone}`" :disabled="user.phone" />
                                                <InputText v-if="changeNumber" type="text" v-model="form.phone" class="w-100" placeholder="998901234567" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button v-if="!changeNumber" class="phone-form-btn" type="button" @click="changeNumber = true">Изменить номер телефона</button>
                                    <button v-if="changeNumber" type="submit" class="phone-form-btn">Сохранить номер телефона</button>
                                </div>
                            </form>
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
                    </div>
                </div>
                <div class="change_password">
                    <Accordion :activeIndex="1">
                        <AccordionTab>
                            <template #header>
                                <div class="title d-flex align-items-center">
                                    <span>Сменить пароль</span>
                                </div>
                            </template>
                            <div class="change_password_div">
                                <form @submit.prevent="saveData()" method="POST" :model="form">
                                    <div class="change_password_div_items">
                                        <Password v-model="form.password" :feedback="false" toggleMask placeholder="Старый пароль"></Password>
                                    </div>
                                    <div class="change_password_div_items mb-3">
                                        <Password v-model="form.new_password" toggleMask placeholder="Новый пароль"></Password>
                                    </div>
                                    <div class="change_password_div_btn">
                                        <Button type="submit" label="Сохранить" class="p-button-rounded" />
                                    </div>
                                </form>
                            </div>
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
            <div class="user-info-succes-box">
                <Toast />
            </div>
        </div>
    </div>
</template>



<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import Toast from 'primevue/toast';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Password from 'primevue/password';
import UserAvatar from '../../../components/account/UserAvatar.vue'

import defaultImage from "../../../../../public/images/avatar-dafault.png"

// Moment
import moment from 'moment'

export default {
    components: {
        Button,
        InputText,
        Calendar,
        Toast,
        Accordion,
        AccordionTab,
        Password
    },
    data() {
        return {
            form: {
                image: [],
                firstname: "",
                lastname: "",
                phone: '',
                email: "",
                password: "",
                new_password: "",
            },
            databirth: null,
            user: [],
            changeNumber: false,
            changeEmail: false,
            src: defaultImage,
            file: null,
            changeFullname: false,
        }
    },
    methods: {
        async onInputChange(e){
            this.file = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = (e) => {
                this.src = e.target.result;
                console.log(this.src);
            }; 
            this.updateImagesBox();
            console.log(this.file);
            
        },
        saveData(){
            const token = localStorage.getItem('token');
            console.log(token);
            console.log(this.form.image);
            axios.post('/api/user/update',  this.form, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            }).then(response => {
                console.log(response);
                // alert("ok");
                this.showSuccess();
                window.location.reload();
                //window.location.href = '/account/summary';
            })
            .catch(function (error) {
                // this.onFailure(error.response.data.message);
                alert(error);
                console.log(error);
            });
        },
        updateImagesBox(data){
            this.form.image = data;
        },
        showSuccess() {
            this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
        },
        getUserInfo(){
            const token = localStorage.getItem('token');
            console.log(token);
            axios.get('/api/getme', {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            })
            .then(response => {
                this.user = response.data.result
            });
        },
        getFormattedDate(date) {
            return moment(date).format("YYYY")
        }
    },
    async created() {
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
        
        // 
        this.getUserInfo();
    },
}
</script>


<style>
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
    border-top: 1px solid #e4e4e4;
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

.widget_phone{
    border-bottom: 1px solid #e4e4e4;
    padding: 15px;
}

.phone-div{
    margin-bottom: 10px;
}

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
.phone-div_block_input_labelm , .email-div_block_input_label{
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

.widget_email{
    padding: 15px;
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
    
    
.change_password{
    margin-bottom: 10px;
    box-shadow: 0 1px 0 0 #e4e4e4;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    background-color: #fff;
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
    
    .phone-div {
        margin-bottom: 7px;
    }

    .phone-div_block_content_label_span{
        font-size: 12px;
    }
    
    .phone-div_block_input_label, .email-div_block_input_label{
        width: 201px;
    }
    
    .phone-form-btn{
        line-height: 1.43;
    }
    
    .change_password_div_items {
        max-width: 270px;
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