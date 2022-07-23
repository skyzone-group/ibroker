<template>
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
</template>

<script>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Password from 'primevue/password';
import Button from 'primevue/button';
export default {
    components: {
        Accordion,
        AccordionTab,
        Password,
        Button
    },
    data() {
        return {
            old_password: null,
            new_password: null
        }
    },
    setup() {
        
    },
}
</script>

<style>
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
    /* ********************************************* */
    @media (min-width: 1025px){
        .change_password_div_items {
            max-width: 270px;
        }
    }
</style>