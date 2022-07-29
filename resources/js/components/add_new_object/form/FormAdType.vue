<template>
    <div class="ad_type">
        <div class="header_title">
            <div class="header_title_content">
                <h4 class="header_title_content_txt">Тип объявления</h4>
            </div>
            <div>
                <div class="ad_type_item" style="margin-bottom: 20px;">
                    <div class="ad_type_item_content">
                        <div>
                            <span class="ad_type_item_content_span">Тип сделки</span>
                            <div class="single_button_select">
                                <div class="form__field d-flex">
                                    <form-button
                                    form-text="Продажа"
                                    :active-plan="activePlan"
                                    @onUpdatePlan="updateActivePlan"
                                    v-model="activePlan"
                                    ></form-button>
                                    <form-button
                                    form-text="Аренда"
                                    :active-plan="activePlan"
                                    @onUpdatePlan="updateActivePlan"
                                    v-model="activePlan"
                                    ></form-button>
                                </div>
                                <div>Тип сделки: {{ activePlan }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RadioButton from 'primevue/radiobutton';
import FormButton from '../../UI/FormButton.vue'
export default {
    components: {
        FormButton
    },
    data() {
        return {
            activePlan: "",
        }
    },
    methods: {
        updateActivePlan(plan){
            this.activePlan = plan
        }
    },
    mounted() {
        
    },
}
</script>

<style>
.header_title{
    display: flex;
    flex-direction: column;
    margin-bottom: 2.4rem;
}

.header_title_content{
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.header_title_content_txt{
    font-size: 23px;
    font-weight: 500;
    line-height: 3.2rem;
    margin-right: 0.8rem;
}

.ad_type_item_content{
    padding-bottom: 0.4rem;
}

.ad_type_item_content_span{
    color: #737476;
    display: block;
    font: normal 14px/20px;
    letter-spacing: normal;
    margin: 0;
    padding: 0;
    text-align: left;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
}

.single_button_select{
    border-radius: 5px;
    box-shadow: none;
    box-sizing: border-box;
    max-width: 100%;
    outline: none;
    overflow-x: auto;
    touch-action: pan-x;
}

.form__field{
    display: inline-block;
    vertical-align: middle;
    margin: 0.25rem;
}

.form__field_labael{
    color: #444;
    background-color: #fff;
    border-color: #e0e0e0;
    transition: all .2s ease-in-out;
}

.form__field_labael input:checked+label{
    z-index: 1;
    border-color: var(--primary_100);;
    background: rgba(21,34,66,.05);
    color: red;
}
</style>