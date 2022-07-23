<template>
    <div>
        <div class="user_account_main_block-item-card">
            <div class="user_account_main_block-item-card-header">
                <div class="avatar">
                    <img src="../../../../public/images/avatar.jpg" alt="user_avatar" class="img-full">
                </div>
                <div class="user_info">
                    <p class="mb-0 user_info-p">Javohir Toirov</p>
                    <span class="user_info_span">2022 год</span>
                </div>
            </div>
            <div class="user_account_main_block-item-card_bottom">
                <div class="user_account_main_block-item-card_bottom_info">
                    <form class="profile_form">
                        <div class="profile_form_btns">
                            <input type="file" id="primary__avatar"  class="d-none" name="user_image" accept="image/png, image/jpeg, image/pjpeg">
                            <label  class="avatar__button p-button p-component mr-2 p-button-rounded" for="primary__avatar">
                                Сменить Аватар
                            </label>
                            <Button label="Удалить фото" class="p-button-outlined p-button-danger p-button-rounded" />
                        </div>
                        <div class="field mt-3">
                            <label for="username1">Имя</label>
                            <InputText id="username1" v-model="first_name" type="username" class="w-100"/>
                        </div>
                        <div class="field mt-3">
                            <label for="username1">Фамилия</label>
                            <InputText id="username1" v-model="last_name" type="username" class="w-100"/>
                        </div>
                        <div class="field mt-3">
                            <label for="dateformat">Дата рождения</label>
                            <Calendar id="dateformat" v-model="databirth"  dateFormat="mm-dd-yy" class="w-100" />
                        </div>
                        <div class="btn-save mt-3">
                            <Button label="Сохранить" class="p-button-rounded" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
export default {
    components: {
        Button,
        InputText,
        Calendar,
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
    data() {
        return {
            first_name: "Javohir",
            last_name: "Toirov",
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
			]
        }
    },
    setup() {
        
    },
}
</script>

<style scoped>
.user_account_main_block-item-card{
    box-shadow: 0 1px 0 0 #e4e4e4;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    background-color: #fff;
}

.user_account_main_block-item-card-header{
    display: flex;
    position: relative;
    padding: 15px;
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
    padding-top: 15px;
}

.user_account_main_block-item-card_bottom_info{
    display: flex;
    flex: 1 1;
    max-width: 100%;
}

.profile_form{
    display: block;
    padding: 5px 15px 15px;
}

.profile_form_btns{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
/* *************************************************************** */
@media (min-width: 1025px){
    .profile_form {
        width: 300px;
    }
    
}

@media (max-width: 640px){   
    .user_account_main_block-item-card_bottom_info{
        display: block;
    }
}
</style>