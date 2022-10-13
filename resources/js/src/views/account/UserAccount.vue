<template>
    <div class="user_account_main">
        <div class="user_account_main_block">
            <div class="user_account_main_block-item">
                <div>
                    <div class="user_account_main_block-item-card">
                        <div class="user_account_main_block-item-card_bottom">
                            <div class="user_account_main_block-item-card_bottom_info">
                                <form @submit.prevent="saveData()" class="profile_form" method="POST" :model="form">
                                    <user-avatar @updateImagesBox="updateImagesBox" :defaultSrc="defaultImage"></user-avatar>
                                    <div class="field mt-3">
                                        <label for="username1">Имя</label>
                                        <InputText id="username1" v-model.trim="form.first_name" type="username" class="w-100"/>
                                    </div>
                                    <div class="field mt-3">
                                        <label for="username1">Фамилия</label>
                                        <InputText id="username1" v-model.trim="form.last_name" type="username" class="w-100"/>
                                    </div>
                                    <!-- <div class="field mt-3">
                                        <label for="dateformat">Дата рождения</label>
                                        <Calendar id="dateformat" v-model="databirth"  dateFormat="mm-dd-yy" class="w-100" />
                                    </div> -->
                                    <div class="btn-save mt-3">
                                        <Button label="Сохранить" type="submit" class="p-button-rounded" />
                                    </div>
                                    <pre>
                                        {{this.form.image}}
                                    </pre>
                                </form>
                            </div>
                            <div class="user-info-succes-box">
                                <Toast />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="user_account_main_block-item">
                <div>
                    <div class="widget_phone_email">
                        <div class="widget_phone">
                            <form class="phone-form position-relative">
                                <div class="phone-div">
                                    <div class="phone-div_block">
                                        <div class="phone-div_block_content">
                                            <label class="phone-div_block_content_label">
                                                <span class="phone-div_block_content_label_span">
                                                    Номер телефона
                                                    <span class="phone-div_block_content_label_span_notification span_warning">Не подтверждён</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div class="phone-div_block_input mt-3">
                                            <label class="phone-div_block_input_label">
                                                <InputText type="text" v-model="phone" class="w-100" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <a href="#!" class="phone-form-btn">Подтвердить номер телефона</a>
                                </div>
                            </form>
                        </div>
                        <div class="widget_email">
                            <div class="widget_email-div">
                                <div class="widget_email-div_txt">
                                    Электронная почта 
                                    <svg data-name="IconCheck" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10"><path fill="currentColor" fill-rule="evenodd" d="M5.44 9.5h-.01a1.03 1.03 0 0 1-.727-.31L.293 4.68a1.03 1.03 0 0 1 1.473-1.44l3.686 3.77L12.247.297a1.03 1.03 0 1 1 1.447 1.464L6.164 9.2c-.194.19-.454.298-.725.298"></path></svg>
                                </div>
                                <p class="widget_email-div__email">toirov1427@gmail.com</p>
                                <a href="#!" class="phone-form-btn">Сменить электронную почту</a>
                            </div>
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
                                <form>
                                    <div class="change_password_div_items">
                                        <Password v-model="old_password" :feedback="false" toggleMask placeholder="Старый пароль"></Password>
                                    </div>
                                    <div class="change_password_div_items mb-3">
                                        <Password v-model="new_password" toggleMask placeholder="Новый пароль"></Password>
                                    </div>
                                    <div class="change_password_div_btn">
                                        <Button label="Сохранить" class="p-button-rounded" />
                                    </div>
                                </form>
                            </div>
                        </AccordionTab>
                    </Accordion>
                </div>
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

export default {
    components: {
        Button,
        InputText,
        Calendar,
        Toast,
        UserAvatar,
        Accordion,
        AccordionTab,
        Password
    },
    data() {
        return {
            form: {
                image: [],
                first_name: "",
                last_name: "",
            },
            phone: "+99890 359-22-84",
            databirth: null,
            responsiveOptions: [
                {
					breakpoint: '1400px',
					numMonths: 2
				},
				{
					breakpoint: '1200px',
					numMonths: 1
				}
			],
            defaultImage: defaultImage,
            user: [],
            old_password: null,
            new_password: null
        }
    },
    methods: {
        saveData(){
            const token = localStorage.getItem('token');
            console.log(token);
            console.log(this.form.image);
            axios.post('/api/user/info',  this.form, {
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
            axios.get('/api/user')
            .then(response => {
                this.user = response.data.result
            });
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
    background-color: #49ff43;
    padding: 2px 6px;
    color: #fff;
    font-weight: 700;
    font-size: 11px;
    line-height: 16px;
}

/* ******************* */
.phone-div_block_input_label{
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
    
    .phone-div_block_input_label{
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