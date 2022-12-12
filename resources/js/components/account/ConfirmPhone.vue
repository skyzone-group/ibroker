<template>
    <div class="confirm_phone mb-3">
        <Accordion class="accordion-custom" :activeIndex="1">
            <AccordionTab>
                <template #header>
                    <div class="title d-flex align-items-center">
                        <svg data-name="IconPhone" class="title-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 20"><path fill="currentColor" fill-rule="evenodd" d="M0 1.99C0 .892.897 0 2.006 0h9.988C13.102 0 14 .898 14 1.99v16.02c0 1.1-.897 1.99-2.006 1.99H2.006A2.003 2.003 0 0 1 0 18.01V1.99zm2 .508v13.004c0 .278.228.498.51.498h8.98c.282 0 .51-.223.51-.498V2.498A.502.502 0 0 0 11.49 2H2.51a.504.504 0 0 0-.51.498zM7 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>
                        <span>Подтвердите телефон</span>
                    </div>
                </template>
                <div class="input-div">
                    <form>
                        <div class="input-div-code">
                            <div class="field">
                                <label for="phone">Номер телефона</label>
                                <InputText id="phone" v-model="phone" type="username" class="w-100" />
                            </div>
                        </div>
                        <div class="input-div-btns">
                            <Button label="Отправить код" />
                            <Button label="Отмена" class="p-button-outlined" />
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
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
    components: {
        Accordion,
        AccordionTab,
        InputText,
        Button
    },
    data() {
        return {
            phone: "+99890 359-22-84",
        }
    },
}
</script>


<style> 
.confirm_phone .p-accordion-header-link{
    flex-direction: row-reverse !important;
    justify-content: space-between !important;
}

.confirm_phone .p-accordion-header-link:hover{
    text-decoration: none !important;
}
.title-icon{
    margin-right: 10px;
    width: 14px;
    height: 17px;
    color: #1983e1;
}

.p-accordion-tab{
    position: relative;
    box-sizing: border-box;
    margin-bottom: 10px;
    box-shadow: 0 1px 0 0 #e4e4e4;
    border: 1px solid #1983e1;
    border-radius: 3px;
    background-color: #fff;
}

.p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus {
    box-shadow: unset !important;
}

.p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    background: #fff !important;
    border-color: #dee2e6 !important;
}

.input-div-code{
    position: relative;
}

.input-div-btns button:first-child{
    margin-right: 10px;
}
/* ************************************************* */
@media (min-width: 1025px){
    .input-div-code {
        margin-bottom: 15px;
        width: 270px;
    }
}
</style>