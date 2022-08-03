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
                                <div class="single_button_select_box d-flex">
                                    <label for="type__sell" class="single_button_select_box_label" :class="{'active' : this.typeDeal == 'Продажа'}">
                                        <input v-model="typeDeal" id="type__sell" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="Продажа">
                                        <span class="single_button_select_box_label_span" :class="{'active_span' : this.typeDeal == 'Продажа'}">Продажа</span>
                                    </label>
                                    <label for="type__rent" class="single_button_select_box_label" :class="{'active' : this.typeDeal == 'Аренда'}">
                                        <input v-model="typeDeal" id="type__rent" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="Аренда">
                                        <span class="single_button_select_box_label_span" :class="{'active_span' : this.typeDeal == 'Аренда'}">Аренда</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ad_type_item" style="margin-bottom: 20px;">
                    <div class="ad_type_item_content">
                        <div>
                            <span class="ad_type_item_content_span">Вид недвижимости</span>
                            <div class="single_button_select">
                                <div class="single_button_select_box d-flex">
                                    <label @click="this.step = 1" for="type__residential" class="single_button_select_box_label" :class="{'active' : this.typeProperty == 'Жилая'}">
                                        <input v-model="typeProperty" id="type__residential" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="Жилая">
                                        <span class="single_button_select_box_label_span" :class="{'active_span' : this.typeProperty == 'Жилая'}">Жилая</span>
                                    </label>
                                    <label @click="this.step = 2" for="type__commercial" class="single_button_select_box_label"
                                    :class="{'active' : this.typeProperty == 'Коммерческая'}">
                                        <input v-model="typeProperty" id="type__commercial" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="Коммерческая">
                                        <span class="single_button_select_box_label_span" :class="{'active_span' : this.typeProperty == 'Коммерческая'}">Коммерческая</span>
                                    </label>
                                    <label @click="this.step = 3" for="type__garage" class="single_button_select_box_label" 
                                    :class="{'active' : this.typeProperty == 'Гараж'}">
                                        <input v-model="typeProperty" id="type__garage" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="Гараж">
                                        <span class="single_button_select_box_label_span" :class="{'active_span' : this.typeProperty == 'Гараж'}">Гараж</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="radio-inputs">
                    <div class="radio-inputs_group">
                         <transition name="component-fade" mode="out-in">
                            <div v-if="step == 1" class="radio-inputs_group_item">
                                <div class="radio-inputs_column">
                                    <div class="field-radiobutton">
                                        <RadioButton id="flat" name="flat" value="flat" v-model="offerType" />
                                        <label for="flat">Квартира</label>
                                    </div>
                                    <div class="field-radiobutton">
                                        <RadioButton id="room" name="room" value="room" v-model="offerType" />
                                        <label for="room">Комната</label>
                                    </div>
                                    <div class="field-radiobutton">
                                        <RadioButton id="house" name="house" value="house" v-model="offerType" />
                                        <label for="house">Дом</label>
                                    </div>
                                </div>
                                <div class="radio-inputs_column">
                                    <div class="field-radiobutton">
                                        <RadioButton id="house_part" name="house_part" value="house_part" v-model="offerType" />
                                        <label for="house_part">Часть дома</label>
                                    </div>
                                    <div class="field-radiobutton">
                                        <RadioButton id="lot" name="lot" value="lot" v-model="offerType" />
                                        <label for="lot">Участок</label>
                                    </div>
                                </div>
                            </div>
                            <div v-if="step == 2" class="radio-inputs_group_item">
                                <div class="radio-inputs_column">
                                    <div class="field-radiobutton">
                                        <RadioButton id="office" name="office" value="office" v-model="offerType" />
                                        <label for="office">Офис</label>
                                    </div>
                                    <div class="field-radiobutton">
                                        <RadioButton id="retail" name="retail" value="retail" v-model="offerType" />
                                        <label for="retail">Торговое помещение</label>
                                    </div>
                                    <div class="field-radiobutton">
                                        <RadioButton id="catering" name="catering" value="catering" v-model="offerType" />
                                        <label for="catering">Общепит</label>
                                    </div>
                                    <div class="field-radiobutton">
                                        <RadioButton id="free_purpose" name="free_purpose" value="free_purpose" v-model="offerType" />
                                        <label for="free_purpose">Свободного назначения</label>
                                    </div>
                                </div>
                                <div class="radio-inputs_column">
                                    <div class="field-radiobutton">
                                        <RadioButton id="warehouse" name="warehouse" value="warehouse" v-model="offerType" />
                                        <label for="warehouse">Склад</label>
                                    </div>
                                    <div class="field-radiobutton">
                                        <RadioButton id="manufacturing" name="manufacturing" value="manufacturing" v-model="offerType" />
                                        <label for="manufacturing">Производство</label>
                                    </div>
                                    <div class="field-radiobutton">
                                        <RadioButton id="hotel" name="hotel" value="hotel" v-model="offerType" />
                                        <label for="hotel">Гостиница</label>
                                    </div>
                                    <div class="field-radiobutton">
                                        <RadioButton id="commercial_land" name="commercial_land" value="commercial_land" v-model="offerType" />
                                        <label for="commercial_land">Земельный участок</label>
                                    </div>
                                </div>
                            </div>
                            <div v-if="step == 3" class="radio-inputs_group_item">
                                <div class="radio-inputs_column">
                                    <div class="field-radiobutton">
                                        <RadioButton id="garage" name="garage" value="garage" v-model="offerType" />
                                        <label for="garage">Гараж</label>
                                    </div>
                                    <div class="field-radiobutton">
                                        <RadioButton id="garage_box" name="garage_box" value="garage_box" v-model="offerType" />
                                        <label for="garage_box">Бокс</label>
                                    </div>
                                    <div class="field-radiobutton">
                                        <RadioButton id="parking_place" name="parking_place" value="parking_place" v-model="offerType" />
                                        <label for="parking_place">Машиноместо</label>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                    {{offerType}}
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
        FormButton,
        RadioButton
    },
    data() {
        return {
            typeDeal: '',
            typeProperty: '',
            offerType: null,
            step: 0,
        }
    },
    methods: {
        
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

.radio-inputs{
    max-width: 30rem;
}

.radio-inputs_group_item{
    display: flex;
    flex-direction: row;
    line-height: 20px;
}

.radio-inputs_column{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.radio-inputs_column .field-radiobutton:not(:first-child) {
    margin-top: 16px;
}

.radio-inputs_column .field-radiobutton label{
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    line-height: 20px;
    padding-left: 8px;
    font-size: 14px;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
    margin-top: 2px;
    vertical-align: top;
}

.radio-inputs_column .field-radiobutton .p-radiobutton .p-radiobutton-box.p-highlight {
    border-color: var(--form-button-color);
    background: var(--white_100);
}

.radio-inputs_column .field-radiobutton .p-radiobutton .p-radiobutton-box:not(.p-disabled):not(.p-highlight):hover {
    border-color: var(--form-button-color);
}

.radio-inputs_column .field-radiobutton .p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
    border-color: var(--white_100);
    background: var(--white_100);
    color: #ffffff;
}

.radio-inputs_column .field-radiobutton .p-radiobutton .p-radiobutton-box:not(.p-disabled).p-focus{
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #3aaf53;
}

.radio-inputs_column .field-radiobutton .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
    width: 12px;
    height: 12px;
    transition-duration: 0.2s;
    background-color: #53b374;
}

.component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to{
    opacity: 0;
}
</style>