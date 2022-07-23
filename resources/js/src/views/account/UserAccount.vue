<template>
    <div class="user_account_main">
        <div class="user_account_main_block">
            <div class="user_account_main_block-item">
                <user-info></user-info>
            </div>
            <div class="user_account_main_block-item">
                <user-phone-email></user-phone-email>
            </div>
        </div>
    </div>
</template>



<script>
import UserPhoneEmail from '../../../components/account/UserPhoneEmail.vue'
import UserInfo from '../../../components/account/UserInfo.vue'
export default {
    components: {
        UserPhoneEmail,
        UserInfo
    },
    
}
</script>


<style scoped>
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
</style>