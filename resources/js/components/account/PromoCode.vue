<template>
    <div class="promocode_block mb-3">
        <Accordion class="accordion-custom" :activeIndex="1">
            <AccordionTab>
                <template #header>
                    <div class="title d-flex align-items-center">
                        <svg data-name="IconPresent" class="title-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 21">
                            <path fill="currentColor" stroke="currentColor" stroke-width=".7" d="M4.352 4.676a2.384 2.384 0 0 1-.443-1.52 2.26 2.26 0 0 1 .79-1.583 2.355 2.355 0 0 1 1.676-.57 2.26 2.26 0 0 1 1.582.792c.474.538.79 1.266 1.011 1.963.222-.697.538-1.393 1.012-1.963.411-.475.98-.76 1.581-.792a2.36 2.36 0 0 1 1.676.57c.474.412.759.982.79 1.583a2.384 2.384 0 0 1-.442 1.52h-1.36c.19-.127.348-.285.506-.443.253-.285.348-.633.316-.982a1.448 1.448 0 0 0-.474-.95 1.358 1.358 0 0 0-.885-.348h-.095c-.348.032-.696.19-.949.475-.506.602-.822 1.457-1.012 2.248H8.178c-.19-.791-.474-1.646-1.012-2.248a1.378 1.378 0 0 0-.949-.475h-.094c-.317 0-.633.127-.886.348a1.361 1.361 0 0 0-.126 1.932c.158.158.316.316.506.443H4.352zM17 5.784V9.33a.487.487 0 0 1-.474.475H9.474v9.245h5.534v-8.612h.949v9.087a.487.487 0 0 1-.475.475H2.518a.487.487 0 0 1-.475-.475v-9.087h.95v8.612h5.533V9.805H1.474A.487.487 0 0 1 1 9.33V5.784c0-.253.221-.475.474-.475h15.052c.253 0 .474.222.474.475zm-8.474.475H1.949v2.596h6.577V6.26zm7.525 0H9.474v2.596h6.577V6.26z">
                            </path>
                        </svg>
                        <span>Ввести промо-код</span>
                    </div>
                </template>
                <div class="input-div">
                    <form>
                        <div class="input-div-code">
                            <InputText type="text" v-model="prcode" class="w-100" placeholder="Введите промо-код" autocomplete="off" />
                        </div>
                        <div class="input-div-btns">
                            <Button label="Применить" />
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
            prcode: null,
        }
    },
}
</script>


<style> 
.promocode_block .p-accordion-header-link{
    flex-direction: row-reverse !important;
    justify-content: space-between !important;
}

.promocode_block .p-accordion-header-link:hover{
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
    border-color: #fff !important;
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