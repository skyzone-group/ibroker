<template>
    <div class="new_object_frontend" style="background-color: #f2f4f6;">
        <div class="new_object_main_div container_medium_new">
            <div class="new_object_main_div_block">
                <div class="block__body position-relative">
                    <div class="form">
                        <div class="edit-object_header">
                            <h2 class="edit-object-title">РЕДАКТИРОВАНИЕ ОБЪЯВЛЕНИЯ №{{this.$route.params.id}}</h2>
                        </div>
                        <div class="block__body_main">
                            <div class="block__body_side-bar_content">
                                <form @submit.prevent="updateData()" id="file-dropzone" method="POST" :model="form">
                                        <!-- Тип объявления -->
                                        <div class="form-card" id="section-one">
                                            <div class="ad_type">
                                                <div class="header_title">
                                                    <div class="header_title_content">
                                                        <h4 class="header_title_content_txt">Тип объявления</h4>
                                                    </div>
                                                    <div>
                                                        <div class="ad_type_item" style="margin-bottom: 20px;">
                                                            <div class="ad_type_item_content">
                                                                <div>
                                                                    <span class="ad_type_item_content_span">Тип аккаунта</span>
                                                                    <div class="single_button_select">
                                                                        <div class="single_button_select_box d-flex">
                                                                            <label for="type__account_owner" class="single_button_select_box_label" :class="{'active' : this.form.account_type == 'owner'}">
                                                                                <input v-model="form.account_type" id="type__account_owner" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="owner">
                                                                                <span class="single_button_select_box_label_span" :class="{'active_span' : this.form.account_type == 'owner'}">Собственник</span>
                                                                            </label>
                                                                            <label for="type__account_agent" class="single_button_select_box_label" :class="{'active' : this.form.account_type == 'agent'}">
                                                                                <input v-model="form.account_type" id="type__account_agent" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="agent">
                                                                                <span class="single_button_select_box_label_span" :class="{'active_span' : this.form.account_type == 'agent'}">Агент</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ad_type_item" style="margin-bottom: 20px;">
                                                            <div class="ad_type_item_content">
                                                                <div>
                                                                    <span class="ad_type_item_content_span">Тип сделки</span>
                                                                    <div class="single_button_select">
                                                                        <div class="single_button_select_box d-flex">
                                                                            <label for="type__sell" class="single_button_select_box_label" :class="{'active' : this.form.object_deals == 'buy'}">
                                                                                <input v-model="form.object_deals" id="type__sell" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="buy">
                                                                                <span class="single_button_select_box_label_span" :class="{'active_span' : this.form.object_deals == 'buy'}">Продажа</span>
                                                                            </label>
                                                                            <label for="type__rent" class="single_button_select_box_label" :class="{'active' : this.form.object_deals == 'rent'}">
                                                                                <input v-model="form.object_deals" id="type__rent" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="rent">
                                                                                <span class="single_button_select_box_label_span" :class="{'active_span' : this.form.object_deals == 'rent'}">Аренда</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div v-if="form.object_deals === 'rent'" class="ad_type_item" style="margin-bottom: 20px;">
                                                            <div class="ad_type_item_content">
                                                                <div>
                                                                    <span class="ad_type_item_content_span">Тип аренды</span>
                                                                    <div class="single_button_select">
                                                                        <div class="single_button_select_box d-flex">
                                                                            <label for="type__rent_daily" class="single_button_select_box_label" :class="{'active' : this.form.rent_type == 'daily'}">
                                                                                <input v-model="form.rent_type" id="type__rent_daily" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="daily">
                                                                                <span class="single_button_select_box_label_span" :class="{'active_span' : this.form.rent_type == 'daily'}">Посуточно</span>
                                                                            </label>
                                                                            <label for="type__rent_long_term" class="single_button_select_box_label" :class="{'active' : this.form.rent_type == 'long-terim'}">
                                                                                <input v-model="form.rent_type" id="type__rent_long_term" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="long-terim">
                                                                                <span class="single_button_select_box_label_span" :class="{'active_span' : this.form.rent_type == 'long-terim'}">Долгосрочный</span>
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
                                                                        <div v-if="!MobileTypeEstate" class="single_button_select_box d-flex">
                                                                            <label @click="resetInputs" v-for="types in objectTypes" :key="types.id" :for="`type__${types.id}`" class="single_button_select_box_label" 
                                                                            :class="{'active' : this.form.object_type_id == types.id}">
                                                                                <input @change="getAdditionalFields()" v-model="form.object_type_id" :id="`type__${types.id}`" type="radio" class="single_button_select_box_label_inpt" tabindex="0" :value="types.id">
                                                                                <span class="single_button_select_box_label_span" :class="{'active_span' : this.form.object_type_id == types.id}">{{types.name_ru}}</span>
                                                                            </label>
                                                                        </div>
                                                                        <div v-if="MobileTypeEstate" class="mobile_button_select">
                                                                            <div class="w-100">
                                                                                <button data-toggle="modal" data-target="#typeHouseModal" class="d-flex align-items-center justify-content-between w-100 mobile-filter-views-house-item-btn" type="button">
                                                                                    <span>{{ this.form.object_type_id  != null ? this.form.object_type_id  : 'Тип недвижимости' }}</span>
                                                                                </button>
                                                                            </div>
                                                                            <!-- Modal -->
                                                                            <div class="mobile-filter-views-house-modal">
                                                                                <div class="modal" id="typeHouseModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"  aria-hidden="true">
                                                                                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                                                                                        <div  class="modal-content">
                                                                                            <div class="modal-header">
                                                                                                <h5 class="modal-title text-center" id="exampleModalLabel">Тип недвижимости</h5>
                                                                                            </div>
                                                                                            <div class="modal-body p-0">
                                                                                                <div class="modal-body-form">
                                                                                                    <form>
                                                                                                        <div class="FiltersFormFieldPanel__controls">
                                                                                                            <div class="mt-4">
                                                                                                                <div class="d-flex flex-column">
                                                                                                                    <div v-for="item in objectTypes" :key="item.id" @click="this.form.object_type_id = item.id" class="mobile-filter-views-house-modal-item flex-row-reverse">
                                                                                                                        <RadioButton :inputId="`type_commer_${item.id}`" name="type-commercial" :value="item.id" v-model="form.object_type_id" />
                                                                                                                        <label :for="`type_commer_${item.id}`" class="Tumbler__title" style="font-size: 18px; font-weight: 500;"> {{ item.name_ru }}</label>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div class="FiltersFormFieldPanel__actions">
                                                                                                            <button @click="this.form.object_type_id = ''"  data-dismiss="modal" aria-label="Close" class="Button Button_js_inited Button_size_l Button_theme_islands Button_type_button FiltersFormFieldPanel__cancel" type="button"><span class="Button__text">Отменить</span></button>
                                                                                                            <button @click="getAdditionalFields()" data-dismiss="modal" aria-label="Close" class="Button Button_js_inited Button_size_l Button_theme_realty Button_type_button Button_theme_islands Button_view_yellow FiltersFormFieldPanel__save" type="button"><span class="Button__text d-block">Выбирать</span></button>
                                                                                                        </div>
                                                                                                    </form>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <!-- Modal -->
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="radio-inputs">
                                                            <div class="radio-inputs_group">
                                                                <!-- <transition name="component-fade" mode="out-in">
                                                                </transition> -->
                                                                <div v-if="this.form.object_type_id === 3" class="additional_options_main">
                                                                    <div class="row">
                                                                        <div v-for="item in objectProperty" :key="item.id" class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                            <div class="additional_options_main_item adddtional_types_media">
                                                                                <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                    <div class="adddtional_main_block">
                                                                                        <div class="field-checkbox d-flex align-items-center">
                                                                                            <Checkbox :id="`add_option_${item.id}`" name="options[]" :value="item.id" v-model="form.object_types_property_id"   @change="form.object_types_property_id"/>
                                                                                            <label :for="`add_option_${item.id}`">{{item.name_ru}}</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div v-if="this.form.object_type_id === 1" class="ad_type_item" style="margin-bottom: 20px;">
                                                            <div class="ad_type_item_content">
                                                                <div>
                                                                    <span class="ad_type_item_content_span">Тип недвижимости</span>
                                                                    <div class="single_button_select">
                                                                        <div class="single_button_select_box d-flex">
                                                                            <label for="condition_house_1" class="single_button_select_box_label" :class="{'active' : this.form.object_time_type == '0'}">
                                                                                <input v-model="form.object_time_type" id="condition_house_1" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="0">
                                                                                <span class="single_button_select_box_label_span" :class="{'active_span' : this.form.object_time_type == '0'}">Вторичка</span>
                                                                            </label>
                                                                            <label for="condition_house_2" class="single_button_select_box_label" :class="{'active' : this.form.object_time_type == '1'}">
                                                                                <input v-model="form.object_time_type" id="condition_house_2" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="1">
                                                                                <span class="single_button_select_box_label_span" :class="{'active_span' : this.form.object_time_type == '1'}">Новостройка</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Тип объявления -->
                                        
                                        <!-- Address -->
                                        <div class="form-card" id="section-two">
                                            <div class="address_map">
                                                <div class="header_title">
                                                    <div class="header_title_content d-flex flex-column">
                                                        <h4 class="header_title_content_txt mb-0">
                                                            Адрес
                                                            <div class="required_inputs"></div>
                                                        </h4>
                                                        <!-- <span class="header_title_content_txt_sub">Укажите адрес или передвиньте метку на карте</span> -->
                                                    </div>
                                                    <div id="address" class="postion-relative">
                                                        <div class="address_block">
                                                            <div class="address_block_div">
                                                                <div class="row">
                                                                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                                                        <div class="address_block_div-drop mb-lg-0 mb-3">
                                                                            <label>Регион</label>
                                                                            <Dropdown @change="getDistricts()" v-model="form.region_id" :options="regions" optionLabel="name_uz" optionValue="id" placeholder="Выбирать регион"  class="w-100" name="region_id"/>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                                                        <div class="address_block_div-drop mb-lg-0 mb-3">
                                                                            <label>Район</label>
                                                                            <Dropdown @change="getQuarters()" v-model="form.district_id" :options="districts" optionLabel="name_uz" optionValue="id" placeholder="Выбирать район"  class="w-100"/>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-4 col-12">
                                                                        <div class="address_block_div-drop">
                                                                            <label>Улица</label>
                                                                            <Dropdown v-model="form.quarter_id" :options="quarters" optionLabel="name_uz" optionValue="id" placeholder="Выбирать улица"  class="w-100"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Address -->
                                        
                                        <!-- Image upload -->
                                        <div class="form-card" id="section-three">
                                            <div id="upload_img">
                                                <div class="header_title">
                                                    <div class="header_title_content d-flex flex-column">
                                                        <h4 class="header_title_content_txt mb-3">
                                                            Фотографии
                                                            <div class="required_inputs"></div>
                                                        </h4>
                                                        <div class="image-desc">
                                                            <h5 class="image-desc-title">Покупателей привлекают качественные фотографии</h5>
                                                            Добавьте от 3 фото. Покажите комнаты, кухню, санузел, вид из окна, подъезд, фасад здания, парковку.
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <upload-box @updateImagesBox="updateImagesBox"></upload-box>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Image upload -->
                                </form>
                            </div>
                            <div class="block__body_side-bar  d-lg-block d-md-block d-none">
                                <div class="form_inficator_box">
                                    <div class="step_form">
                                        <h3 class="step_form_title">Обязательно для заполнения</h3>
                                        <VScrollActive offset="40" :hash="false" @update="handleNavbarChange">
                                            <nav class="d-flex flex-column">
                                                <div class="steps_item">
                                                    <button data-scroll-active="section-one" class="steps_item_btn steps_item_btn_icon_left" role="button">
                                                        <div class="link_icon">
                                                            <div class="icon_div">
                                                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm3.8-8.3a1 1 0 00-1.42-1.4L7.2 8.46a.28.28 0 01-.4 0l-1.1-1.1A1 1 0 004.3 8.8l2.08 2.09c.34.34.9.34 1.24 0L11.8 6.7z"></path></svg>
                                                            </div>
                                                        </div>
                                                        <span class="link_txt">
                                                            <span>Тип объявления</span>
                                                        </span>
                                                    </button>
                                                </div>
                                                <div class="steps_item">
                                                    <button data-scroll-active="section-two" class="steps_item_btn steps_item_btn_icon_left" role="button">
                                                        <div class="link_icon">
                                                            <div class="icon_div">
                                                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm3.8-8.3a1 1 0 00-1.42-1.4L7.2 8.46a.28.28 0 01-.4 0l-1.1-1.1A1 1 0 004.3 8.8l2.08 2.09c.34.34.9.34 1.24 0L11.8 6.7z"></path></svg>
                                                            </div>
                                                        </div>
                                                        <span class="link_txt">
                                                            <span>Адрес</span>
                                                        </span>
                                                    </button>
                                                </div>
                                                <div class="steps_item">
                                                    <button data-scroll-active="section-three" class="steps_item_btn steps_item_btn_icon_left" role="button">
                                                        <div class="link_icon">
                                                            <div class="icon_div">
                                                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm3.8-8.3a1 1 0 00-1.42-1.4L7.2 8.46a.28.28 0 01-.4 0l-1.1-1.1A1 1 0 004.3 8.8l2.08 2.09c.34.34.9.34 1.24 0L11.8 6.7z"></path></svg>
                                                            </div>
                                                        </div>
                                                        <span class="link_txt">
                                                            <span>Фотографии</span>
                                                        </span>
                                                    </button>
                                                </div>
                                                <div class="steps_item">
                                                    <button data-scroll-active="section-four" class="steps_item_btn steps_item_btn_icon_left" role="button">
                                                        <div class="link_icon">
                                                            <div class="icon_div">
                                                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm3.8-8.3a1 1 0 00-1.42-1.4L7.2 8.46a.28.28 0 01-.4 0l-1.1-1.1A1 1 0 004.3 8.8l2.08 2.09c.34.34.9.34 1.24 0L11.8 6.7z"></path></svg>
                                                            </div>
                                                        </div>
                                                        <span class="link_txt">
                                                            <span>Параметры</span>
                                                        </span>
                                                    </button>
                                                </div>
                                                <div class="steps_item">
                                                    <button data-scroll-active="section-five" class="steps_item_btn steps_item_btn_icon_left" role="button">
                                                        <div class="link_icon">
                                                            <div class="icon_div">
                                                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm3.8-8.3a1 1 0 00-1.42-1.4L7.2 8.46a.28.28 0 01-.4 0l-1.1-1.1A1 1 0 004.3 8.8l2.08 2.09c.34.34.9.34 1.24 0L11.8 6.7z"></path></svg>
                                                            </div>
                                                        </div>
                                                        <span class="link_txt">
                                                            <span>Цена</span>
                                                        </span>
                                                    </button>
                                                </div>
                                                <div class="steps_item">
                                                    <button data-scroll-active="section-six" class="steps_item_btn steps_item_btn_icon_left" role="button">
                                                        <div class="link_icon">
                                                            <div class="icon_div">
                                                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm3.8-8.3a1 1 0 00-1.42-1.4L7.2 8.46a.28.28 0 01-.4 0l-1.1-1.1A1 1 0 004.3 8.8l2.08 2.09c.34.34.9.34 1.24 0L11.8 6.7z"></path></svg>
                                                            </div>
                                                        </div>
                                                        <span class="link_txt">
                                                            <span>Описание</span>
                                                        </span>
                                                    </button>
                                                </div>
                                                <div class="steps_item">
                                                    <button data-scroll-active="section-seven" class="steps_item_btn steps_item_btn_icon_left" role="button" :class="{'succes-input' : loggedIn === true}">
                                                        <div class="link_icon">
                                                            <div class="icon_div">
                                                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm3.8-8.3a1 1 0 00-1.42-1.4L7.2 8.46a.28.28 0 01-.4 0l-1.1-1.1A1 1 0 004.3 8.8l2.08 2.09c.34.34.9.34 1.24 0L11.8 6.7z"></path></svg>
                                                            </div>
                                                        </div>
                                                        <span class="link_txt">
                                                            <span>Контакты</span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </nav>
                                        </VScrollActive>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Media Styles
import  '../../../../../public/css/media-one.css';
import VScrollActive from '../../../components/VScrollActive.vue';
import Checkbox from 'primevue/checkbox';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import Toast from 'primevue/toast';
import UploadBox from '../../../components/Upload.vue';
import FormButton from '../../../components/UI/FormButton.vue';
import RadioButton from 'primevue/radiobutton';
export default {
    components: {
        VScrollActive,
        Checkbox,
        InputMask,
        InputNumber,
        Textarea,
        Dropdown,
        Toast,
        UploadBox,
        FormButton,
        RadioButton
    },
    props: {
        loggedIn: {
            type: Boolean,
        }
    },
    data() {
        return {
            form: {
                account_type: '',
                object_deals: '',
                rent_type: '',
                object_type_id : null,
                object_time_type: '',
                region_id: null,
                district_id: null,
                quarter_id: null,
                youtube_url: "",
                apartments:  "",
                kitchenArea: "",
                living_area: "",
                floor: "",
                floor_count: '',
                room_count: "",
                total_area: "",
                done_area: "",
                land_area: "",
                bathroomType: "",
                numberBalcons: "",
                object_condition: "",
                build_year: "",
                object_material_type: "",
                additional_field_id: [],
                object_types_property_id: [],
                price: "",
                negotiable: "",
                comment: "",
                showOnline: "",
                images: []
            },
            options: [],
            offerType: null,
            MobileTypeEstate: false,
            regions: [],
            districts: [],
            quarters: [],
            objectTypes: [],
            objectProperty: [],
            additionalFields: [],
            image: null,
            imageprevi: null,
            // loggedIn: false,
            errorURL: false,
            success: false,
            error: false,
            showMoreOptions: false,
            submitted: false,
            thumbnailpreview: "",
            isLoaded: false,
            messages: [],
        }
    },
    methods: {
        getValues(){
            const token = localStorage.getItem('token');
            axios.get('/api/object/edit/' + this.$route.params.id, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            })
            .then(response => {
                this.form = response.data.result.objects;
            });
        },
        getRegions(){
            axios.get('/api/allRegions')
            .then(response => {
                this.regions = response.data.result
            });
        },
        getDistricts(){
            let region_id = this.form.region_id;
            axios.get('/api/districts/' + region_id)
            .then(response => {
                this.districts = response.data.result
                this.quarters = []
            });
        },
        getQuarters(){
            let district_id = this.form.district_id;
            axios.get('/api/quarters/' + district_id)
            .then(response => {
                this.quarters = response.data.result
            });
        },
        getObjectTypes(){
            axios.get('/api/objectTypes')
            .then(response => {
                this.objectTypes = response.data.result
            });
        },
        getObjectTypesProperty(){
            axios.get('/api/objectProperty')
            .then(response => {
                this.objectProperty = response.data.result
            });
            
        },
        getAdditionalFields(){
            let object_id = this.form.object_type_id;
            axios.get('/api/additional/' + object_id)
            .then(response => {
                this.additionalFields = response.data.result
            });
        },
        updateImagesBox(data){
            this.form.images = data;
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 575){
                this.MobileTypeEstate = true;
                return;
            }
            this.MobileTypeEstate = false;
            return;
        },
        handleNavbarChange(id) {
        },
    },
    async created() {
        this.getRegions();
        this.getObjectTypes();
        this.getObjectTypesProperty();
        this.getValues();
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
}
</script>

<style>
.edit-object_header{
    padding-bottom: 1.25rem;
    border-bottom: 1px solid #cccbca;
}

.edit-object-title{
    display: inline-block;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #303549;
}
</style>