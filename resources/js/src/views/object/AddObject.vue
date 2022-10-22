<template>
    <div class="new_object_frontend" style="background-color: #f2f4f6;">
        <div class="new_object_main_div container_medium_new">
            <div class="new_object_main_div_block">
                <!-- <header class="block_header d-flex align-items-center">
                    <b class="block_title title">Добавление объявления</b>
                    <span class="text-secondary">Вы можете бесплатно добавить до 2 объявлений в месяц</span>
                </header> -->
                <div class="block__body position-relative">
                    <!-- loader start -->
                    <div v-if="isLoaded" class="loader_box w-100 h-100 d-flex justify-content-center align-items-center">
                        <ProgressSpinner style="width:50px;height:50px" strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"/>
                    </div>
                    <!-- loader end -->
                    
                    <div class="form">
                        <div class="block__body_main">
                            <div class="block__body_side-bar_content">
                                <form @submit.prevent="saveData(!v$.$invalid)" id="file-dropzone" method="POST" :model="form">
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
                                                                        <label for="type__account_owner" class="single_button_select_box_label" :class="{'active' : this.form.user_type == '0'}">
                                                                            <input v-model="form.user_type" id="type__account_owner" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="0">
                                                                            <span class="single_button_select_box_label_span" :class="{'active_span' : this.form.user_type == '0'}">Собственник</span>
                                                                        </label>
                                                                        <label for="type__account_agent" class="single_button_select_box_label" :class="{'active' : this.form.user_type == '1'}">
                                                                            <input v-model="form.user_type" id="type__account_agent" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="1">
                                                                            <span class="single_button_select_box_label_span" :class="{'active_span' : this.form.user_type == '1'}">Агент</span>
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
                                                                                        <Checkbox :id="`add_option_${item.id}`" name="options[]" :value="item.id" v-model="form.object_types_property_id"   @change="$v.form.object_types_property_id.$touch()" :class="{'p-invalid': v$.form.object_types_property_id.$invalid && submitted}" />
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
                                                                        <Dropdown @change="getDistricts()" v-model="v$.form.region_id.$model" :options="regions" optionLabel="name_uz" optionValue="id" placeholder="Выбирать регион"  class="w-100" :class="{'p-invalid':v$.form.region_id.$invalid && submitted}" name="region_id"/>
                                                                        <small v-if="(v$.form.region_id.$invalid && submitted) || v$.form.region_id.$pending.$response" class="p-error">{{v$.form.region_id.required.$message.replace('Value', 'Регион')}}</small>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                                                    <div class="address_block_div-drop mb-lg-0 mb-3">
                                                                        <label>Район</label>
                                                                        <Dropdown @change="getQuarters()" v-model="v$.form.district_id.$model" :options="districts" optionLabel="name_uz" optionValue="id" placeholder="Выбирать район"  class="w-100" :class="{'p-invalid':v$.form.district_id.$invalid && submitted}" name="district_id" />
                                                                        <small v-if="(v$.form.district_id.$invalid && submitted) || v$.form.district_id.$pending.$response" class="p-error">{{v$.form.district_id.required.$message.replace('Value', 'Район')}}</small>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-12">
                                                                    <div class="address_block_div-drop">
                                                                        <label>Улица</label>
                                                                        <Dropdown v-model="v$.form.quarter_id.$model" :options="quarters" optionLabel="name_uz" optionValue="id" placeholder="Выбирать улица"  class="w-100" 
                                                                        :class="{'p-invalid':v$.form.quarter_id.$invalid && submitted}" name="quarter_id" />
                                                                        <small v-if="(v$.form.quarter_id.$invalid && submitted) || v$.form.quarter_id.$pending.$response" class="p-error">{{v$.form.quarter_id.required.$message.replace('Value', 'Улица')}}</small>
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
                                                    <upload-box @updateImagesBox="updateImagesBox" :images="form.images"></upload-box>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Image upload -->

                                    <!-- You tube video -->
                                    <div class="form-card">
                                        <div class="address_map">
                                            <div class="header_title">
                                                <div class="header_title_content d-flex flex-column">
                                                    <h4 class="header_title_content_txt mb-0">Видео с YouTube</h4>
                                                    <span class="header_title_content_txt_sub">Добавьте видео вашей недвижимости. Объявления с видео привлекают больше внимания и получают больше звонков</span>
                                                </div>
                                                <div v-if="!youtube_thumbnail_downloader" id="address" class="postion-relative">
                                                    <div class="address_block flex-column">
                                                        <div class="address_block_div d-flex align-items-center">
                                                            <div class="address_block_div_item w-100" :class="{'error-border-color' : this.errorURL == true}">
                                                                <input id="youtebe-link" class="dc-input__input-6-1-2" name="total_area" autocomplete="false" type="text" placeholder="Ссылка на видео с YouTube" tabindex="0" v-model="form.youtube_url" />
                                                            </div>
                                                            <!-- <div class="youtube_block_div_button ml-lg-2 ml-md-2 ml-0">
                                                                <button class="youtube_block_div_btn" :class="{'button-disabled' : form.youtube_url.length <= 0}"  :disabled="form.youtube_url.length <= 0">
                                                                    <span class="youtube_block_div-span">Добавить</span>
                                                                </button>
                                                            </div> -->
                                                        </div>
                                                        <span v-show="errorURL" class="error-msg-password mt-1">Введенный URL-адрес может быть неверным. Пожалуйста, введите правильный URL.</span>
                                                    </div>
                                                </div>
                                                <div v-if="youtube_thumbnail_downloader" class="youtube_thumbnail d-flex">
                                                    <a :href="form.youtube_url" target="_blank" rel="noopener noreferrer" id="youtube__video" class="youtube__video-thumb">
                                                        <picture class="youtube__video-thumb-box">
                                                            <img alt="фото" :src="thumbnailpreview" class="youtube__video-thumb-img">
                                                        </picture>
                                                        <div class="back-hover"></div>
                                                    </a>
                                                    <div class="youtube_thumbnail-link">
                                                        <p class="youtube-link d-lg-block d-md-block d-sm-block d-none">{{ form.youtube_url }}</p>
                                                        <p class="youtube-link d-lg-none d-md-none d-sm-none d-block" style="color: #242629;font-weight: 500;">Видео добавлено</p>
                                                        <button @click="form.youtube_url = ''" class="youtube__delete_button" type="button" id="youtube__delete_button"><span class="button-root__text-8-2-0">Удалить</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- You tube video -->

                                    <!-- Options -->
                                    <div class="form-card" id="section-four">
                                        <div class="options_main">
                                            <div class="header_title position-relative">
                                                <div class="header_title_content">
                                                    <h4 class="header_title_content_txt">Параметры</h4>
                                                </div>
                                                <div class="options_div mb-5">
                                                    <!-- Area options -->
                                                    <div class="options_main__items d-flex">
                                                        <!-- Количество комнат-->
                                                        <div v-if="this.form.object_type_id != 5" class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                            <span class="inputs_block_title">
                                                                Количество комнат
                                                                <div v-show="this.form.object_type_id != 3" class="required_inputs"></div>
                                                            </span>
                                                            <div class="options_main__items_inputs_block d-flex flex-column">
                                                                <div class="input-medium-6 dc-input-6-1-2" :class="{'p-invalid':(this.form.object_type_id != 3 ? v$.form.room_count.$invalid && submitted : '')}">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="room_count" class="dc-input__input-6-1-2" maxlength="24" placeholder="" type="number" tabindex="0" v-model.number="v$.form.room_count.$model" name="room_count"  >
                                                                        <small v-if="(this.form.object_type_id != 3 ? ((v$.form.room_count.$invalid && submitted) || v$.form.room_count.$pending.$response) : '')" class="p-error">{{v$.form.room_count.required.$message.replace('Value', 'Количество комнат')}}</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Количество комнат-->
                                                        
                                                        <!-- Общая площадь -->
                                                        <div v-if="this.form.object_type_id != 5" class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                            <span class="inputs_block_title">
                                                                Общая площадь
                                                                <div class="required_inputs"></div>
                                                            </span>
                                                            <div class="options_main__items_inputs_block d-flex flex-column">
                                                                <div class="input-medium-6 dc-input-6-1-2" :class="{'p-invalid':v$.form.total_area.$invalid && submitted}">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="space" class="dc-input__input-6-1-2" maxlength="24" name="total_area" type="number" placeholder="" tabindex="0" v-model.number="v$.form.total_area.$model" />
                                                                        <small v-if="(v$.form.total_area.$invalid && submitted) || v$.form.total_area.$pending.$response" class="p-error">{{v$.form.total_area.required.$message.replace('Value', 'Количество комнат')}}</small>
                                                                    </div>
                                                                    <div class="dc-input__input-icon-right dc-input__input-icon-right-font">м²</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Общая площадь -->

                                                        <!-- Этаж -->
                                                        <div v-if="this.form.object_type_id == 1" class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                            <span class="inputs_block_title">
                                                                Этаж
                                                                <div class="required_inputs"></div>
                                                            </span>
                                                            <div class="options_main__items_inputs_block d-flex flex-column">
                                                                <div class="input-medium-6 dc-input-6-1-2" :class="{'p-invalid':v$.form.floor.$invalid && submitted}">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="floor" class="dc-input__input-6-1-2" maxlength="24" placeholder="" type="number" tabindex="0" v-model.number="v$.form.floor.$model">
                                                                        <small v-if="(v$.form.floor.$invalid && submitted) || v$.form.floor.$pending.$response" class="p-error">{{v$.form.floor.required.$message.replace('Value', 'Количество комнат')}}</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Этаж -->
                                                    </div>
                                                    <!-- Area options -->
                                                    
                                                    <div class="options_main__items mt-4 d-flex">
                                                        <!-- Этажность -->
                                                        <div v-if="this.form.object_type_id != 5" class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                            <span class="inputs_block_title">
                                                                Этажность
                                                                <div v-show="this.form.object_type_id != 3" class="required_inputs"></div>
                                                            </span>
                                                            <div class="options_main__items_inputs_block d-flex flex-column">
                                                                <div class="input-medium-6 dc-input-6-1-2" :class="{'p-invalid':v$.form.floor_count.$invalid && submitted}">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="floor_house" class="dc-input__input-6-1-2" maxlength="24" placeholder="" type="number" tabindex="0" v-model.number="v$.form.floor_count.$model">
                                                                        <small v-if="(v$.form.floor_count.$invalid && submitted) || v$.form.floor_count.$pending.$response" class="p-error">{{v$.form.floor_count.required.$message.replace('Value', 'Количество комнат')}}</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Этажность -->
                                                        
                                                        <!-- Площадь участка -->
                                                        <div v-if="this.form.object_type_id != 1" class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                            <span class="inputs_block_title">
                                                                Площадь участка
                                                                <div v-show="this.form.object_type_id != 3" class="required_inputs"></div>
                                                            </span>
                                                            <div class="options_main__items_inputs_block d-flex flex-column">
                                                                <div class="input-medium-6 dc-input-6-1-2" :class="{'p-invalid':(this.form.object_type_id != 1 ? v$.form.land_area.$invalid && submitted : '')}">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="space" class="dc-input__input-6-1-2" maxlength="24" name="total_area" type="number" placeholder="" tabindex="0" v-model.number="v$.form.land_area.$model" />
                                                                        <small v-if="(this.form.object_type_id != 1 ? ((v$.form.land_area.$invalid && submitted) || v$.form.land_area.$pending.$response) : '')" class="p-error">{{v$.form.land_area.required.$message.replace('Value', 'Количество комнат')}}</small>
                                                                    </div>
                                                                    <div class="dc-input__input-icon-right dc-input__input-icon-right-font">м²</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Площадь участка -->
                                                    </div>
                                                    
                                                    
                                                    <div v-if="showMoreOptions">
                                                        
                                                        <!-- Hight options -->
                                                        <div class="options_main__items options_main__items_inputs_media mt-4 d-flex">
                                                            <!-- Жилая площадь -->
                                                            <div v-if="this.form.object_type_id == 1 || this.form.object_type_id == 2" class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                                <span class="inputs_block_title">Жилая площадь | DOP</span>
                                                                <div class="options_main__items_inputs_block d-flex flex-column">
                                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                                            <input id="living_space" class="dc-input__input-6-1-2" maxlength="24" placeholder="" type="number" tabindex="0" v-model.number="form.living_area">
                                                                        </div>
                                                                        <div class="dc-input__input-icon-right dc-input__input-icon-right-font">м²</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- Жилая площадь -->
                                                            
                                                            <!-- Полезная площадь  -->
                                                            <div v-if="this.form.object_type_id == 3" class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                                <span class="inputs_block_title">Полезная площадь | DOP</span>
                                                                <div class="options_main__items_inputs_block d-flex flex-column">
                                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                                            <input id="done_area" class="dc-input__input-6-1-2" maxlength="24" placeholder="" type="number" tabindex="0" v-model.number="form.done_area">
                                                                        </div>
                                                                        <div class="dc-input__input-icon-right dc-input__input-icon-right-font">м²</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- Полезная площадь  -->
                                                        </div>
                                                        <!-- Hight options -->
                                                        
                                                        <!-- Bathroom -->
                                                        <!-- <div  v-if="this.form.object_id == 1"  class="options_main__items mt-4">
                                                            <div class="options_main__item d-flex align-items-end">
                                                                <div id="rooms" class="options_main__item_first">
                                                                    <div class="options_main__item_first_content">
                                                                        <span class="options_main__item_first_content_title">Санузел</span>
                                                                    </div>
                                                                    <div class="options_main__item_first_btns">
                                                                        <label for="combined" class="option_btn" :class="{'active' : this.form.bathroomType == 'combined'}">
                                                                            <input v-model="form.bathroomType" id="combined" type="radio" tabindex="0" value="combined">
                                                                            Совмещенный
                                                                        </label>
                                                                        <label for="separated" class="option_btn" :class="{'active' : this.form.bathroomType == 'separated'}">
                                                                            <input v-model="form.bathroomType" id="separated" type="radio" tabindex="0" value="separated">
                                                                            Раздельный
                                                                        </label>
                                                                        <label for="moreOne" class="option_btn" :class="{'active' : this.form.bathroomType == 'moreOne'}">
                                                                            <input v-model="form.bathroomType" id="moreOne" type="radio" tabindex="0" value="moreOne">
                                                                            Более одного
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> -->
                                                        <!-- Bathroom -->

                                                        <!-- Балкон/Лоджия -->
                                                        <!-- <div  v-if="this.form.object_id == 1"  class="options_main__items mt-4">
                                                            <div class="options_main__item d-flex align-items-end">
                                                                <div id="rooms" class="options_main__item_first">
                                                                    <div class="options_main__item_first_content">
                                                                        <span class="options_main__item_first_content_title">Балкон/Лоджия</span>
                                                                    </div>
                                                                    <div class="options_main__item_first_btns">
                                                                        <label for="balcon1" class="option_btn" :class="{'active' : this.form.numberBalcons == '1'}">
                                                                            <input v-model="form.numberBalcons" id="balcon1" type="radio" tabindex="0" value="1">
                                                                            1
                                                                        </label>
                                                                        <label for="balcon2" class="option_btn" :class="{'active' : this.form.numberBalcons == '2'}">
                                                                            <input v-model="form.numberBalcons" id="balcon2" type="radio" tabindex="0" value="2">
                                                                            2
                                                                        </label>
                                                                        <label for="balcon3" class="option_btn" :class="{'active' : this.form.numberBalcons == '3'}">
                                                                            <input v-model="form.numberBalcons" id="balcon3" type="radio" tabindex="0" value="3">
                                                                            3+
                                                                        </label>
                                                                        <label for="nobalcons" class="option_btn" :class="{'active' : this.form.numberBalcons == 'nobalcons'}">
                                                                            <input v-model="form.numberBalcons" id="nobalcons" type="radio" tabindex="0" value="nobalcons">
                                                                            Нет
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> -->
                                                        <!-- Балкон/Лоджия -->

                                                        <!-- Ремонт -->
                                                        <div v-if="this.form.object_type_id != 5" class="options_main__items mt-4">
                                                            <div class="options_main__item d-flex align-items-lg-end align-items-md-end align-items-start flex-lg-row flex-md-row flex-column">
                                                                <div id="rooms" class="options_main__item_first">
                                                                    <div class="options_main__item_first_content">
                                                                        <span class="options_main__item_first_content_title">Ремонт</span>
                                                                    </div>
                                                                    <div class="options_main__item_first_btns">
                                                                        <label for="condition1" class="option_btn" :class="{'active' : this.form.object_condition == '1'}">
                                                                            <input v-model="form.object_condition" id="condition1" type="radio" tabindex="0" value="1">
                                                                            Косметический
                                                                        </label>
                                                                        <label for="condition2" class="option_btn" :class="{'active' : this.form.object_condition == '2'}">
                                                                            <input v-model="form.object_condition" id="condition2" type="radio" tabindex="0" value="2">
                                                                            Евро
                                                                        </label>
                                                                        <label for="condition3" class="option_btn" :class="{'active' : this.form.object_condition == '3'}">
                                                                            <input v-model="form.object_condition" id="condition3" type="radio" tabindex="0" value="3">
                                                                            Дизайнерский
                                                                        </label>
                                                                        <label for="condition4" class="option_btn" :class="{'active' : this.form.object_condition == '4'}">
                                                                            <input v-model="form.object_condition" id="condition4" type="radio" tabindex="0" value="4">
                                                                            Без ремонта
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Ремонт -->

                                                        <!-- Год постройки -->
                                                        <div v-if="this.form.object_type_id != 5" class="options_main__items mt-4 d-flex">
                                                            <div class="options_main__items_inputs options_main__items_inputs_media  d-flex flex-column">
                                                                <span class="inputs_block_title">Год постройки</span>
                                                                <div class="options_main__items_inputs_block d-flex flex-column">
                                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                                            <InputMask class="dc-input__input-6-1-2" mask="9999" v-model="form.build_year" placeholder="2022" />
                                                                        </div>
                                                                        <div class="dc-input__input-icon-right dc-input__input-icon-right-font">г</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Год постройки -->

                                                        <!-- Тип дома -->
                                                        <div v-if="this.form.object_type_id != 5" class="options_main__items mt-4">
                                                            <div class="options_main__item d-flex align-items-end">
                                                                <div id="rooms" class="options_main__item_first">
                                                                    <div class="options_main__item_first_content">
                                                                        <span class="options_main__item_first_content_title">Тип дома</span>
                                                                    </div>
                                                                    <div class="options_main__item_first_btns">
                                                                        <label for="house_type1" class="option_btn" :class="{'active' : this.form.object_material_type == '1'}">
                                                                            <input v-model="form.object_material_type" id="house_type1" type="radio" tabindex="0" value="1">
                                                                            Кирпичный
                                                                        </label>
                                                                        <label for="house_type2" class="option_btn" :class="{'active' : this.form.object_material_type == '2'}">
                                                                            <input v-model="form.object_material_type" id="house_type2" type="radio" tabindex="0" value="2">
                                                                            Монолитный
                                                                        </label>
                                                                        <label for="house_type3" class="option_btn" :class="{'active' : this.form.object_material_type == '3'}">
                                                                            <input v-model="form.object_material_type" id="house_type3" type="radio" tabindex="0" value="3">
                                                                            Деревянный
                                                                        </label>
                                                                        <label for="house_type4" class="option_btn" :class="{'active' : this.form.object_material_type == '4'}">
                                                                            <input v-model="form.object_material_type" id="house_type4" type="radio" tabindex="0" value="4">
                                                                            Панельный
                                                                        </label>
                                                                        <label for="house_type5" class="option_btn" :class="{'active' : this.form.object_material_type == '5'}">
                                                                            <input v-model="form.object_material_type" id="house_type5" type="radio" tabindex="0" value="5">
                                                                            Блочный
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Тип дома -->

                                                        <!-- Дополнительно -->
                                                        <div v-if="additionalFields.length != ''"  id="additional_options" class="mt-5">
                                                            <h2 class="header_title_content_txt">Дополнительно</h2>
                                                            <div class="additional_options_main">
                                                                <div class="row">
                                                                    <div v-for="item in additionalFields" :key="item.id" class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div class="additional_options_main_item adddtional_types_media">
                                                                            <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                <div class="adddtional_main_block">
                                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                                        <Checkbox :id="`add_option_${item.id}`" name="options[]" :value="item.id" v-model="form.additional_field_id" />
                                                                                        <label :for="`add_option_${item.id}`">{{item.additional.name_ru}}</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- <div class="col-12 mt-3">
                                                                        <div class="additional_options_main_button d-flex w-100">
                                                                            <button type="button" class="option_btn active">Выбрать все</button>
                                                                            <button type="button" class="option_btn active">Выбрать все</button>
                                                                        </div>
                                                                    </div> -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Дополнительно -->
                                                    </div>
                                                </div>
                                                <div  v-if="!showMoreOptions" class="show-all-parametres">
                                                    <div class="show-all-parametres_box">
                                                        <button @click="this.showMoreOptions = true" class="button-root-primary" type="button" data-e2e-id="expand-params">
                                                            <span class="button-root__icon-8-2-0 button-root__icon--left-8-2-0">
                                                                <div class="icon-4-1-1">
                                                                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                        <path d="M9 2a1 1 0 10-2 0v5H2a1 1 0 000 2h5v5a1 1 0 102 0V9h5a1 1 0 100-2H9V2z" fill="currentColor"></path>
                                                                    </svg>
                                                                </div>
                                                            </span>
                                                            <span class="button-root__text-8-2-2">Все параметры</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Options -->

                                    <!-- Price -->
                                    <div class="form-card" id="section-five">
                                        <div class="price_box_main">
                                            <div class="header_title mb-0">
                                                <div class="header_title_content d-flex flex-column">
                                                    <h4 class="header_title_content_txt mb-4">
                                                        Цена и условия продажи
                                                        <div class="required_inputs"></div>
                                                    </h4>
                                                </div>
                                                <div class="price_box_main_input d-flex flex-column">
                                                    <div class="d-flex flex-column">
                                                        <div class="price_box_main_input_flex d-flex align-items-center">
                                                            <div class="price_box_main_input_flex_input">
                                                                <div class="input-medium-6 dc-input-6-1-2 w-100" :class="{'p-invalid': v$.form.price.$invalid && submitted }">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="price" class="dc-input__input-6-1-2" maxlength="24" placeholder="" tabindex="0" type="number" v-model.number="v$.form.price.$model">
                                                                        <small v-if="(v$.form.price.$invalid && submitted) || v$.form.price.$pending.$response" class="p-error">{{v$.form.price.required.$message.replace('Value', 'Name')}}</small>
                                                                    </div>
                                                                    <div class="dc-input__input-icon-right dc-input__input-icon-right-font">$</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="price_box_main_checkbox mt-4">
                                                    <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                        <div class="d-flex align-items-center">
                                                            <div class="field-checkbox d-flex align-items-center">
                                                                <Checkbox id="price_checkbox" name="negotiable" value="1" v-model="form.negotiable" />
                                                                <label for="price_checkbox">Торг уместен</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Price -->

                                    <!-- description -->
                                    <div class="form-card" id="section-six">
                                        <div class="description_box_main">
                                            <div class="header_title mb-0">
                                                <div class="header_title_content d-flex flex-column">
                                                    <h4 class="header_title_content_txt mb-4">
                                                        Описание
                                                        <div class="required_inputs"></div>
                                                    </h4>
                                                </div>
                                                <div class="description_box_main_text_area">
                                                    <Textarea v-model="v$.form.comment.$model" rows="5" cols="100" class="w-100" placeholder="Расскажите о недвижимости, собственниках, соседях, транспортной доступности и инфраструктуре" :class="{'p-invalid': v$.form.comment.$invalid && submitted }" />
                                                    <small v-if="(v$.form.comment.$invalid && submitted) || v$.form.comment.$pending.$response" class="p-error">{{v$.form.comment.required.$message.replace('Value', 'Описание')}}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- description -->

                                    <!-- online display -->
                                    <!-- <div class="form-card">
                                        <div class="show_house_box_main">
                                            <div class="header_title mb-0">
                                                <div class="header_title_content d-flex flex-column">
                                                    <h4 class="header_title_content_txt mb-0">Готовность к онлайн-показу</h4>
                                                    <span class="header_title_content_txt_sub">Выберите, если готовы показать объект с помощью видео-звонка — например, через WhatsApp, Zoom, Skype или другой сервис. В объявлении появится значок «Онлайн-показ».</span>
                                                </div>
                                                <div class="show_house_box_main_checkbox mt-3 d-flex align-items-center">
                                                    <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                        <div class="d-flex align-items-center">
                                                            <div class="field-checkbox d-flex align-items-center">
                                                                <Checkbox id="show_online" name="show_online" value="yes" v-model="form.showOnline" />
                                                                <label for="show_online">Готов показать объект онлайн</label>
                                                            </div>
                                                            <div class="show_house_box_main_tooltip ml-2 d-flex" v-tooltip="'Покупатель позвонит вам по телефону. Вы договоритесь, через какой сервис провести видео-звонок'">
                                                                <div class="show_house_box_main_tooltip_block position-relative display-inline-flex">
                                                                    <div class="display-inherit">
                                                                        <div class="icon-4-0-1">
                                                                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 15A7 7 0 108 1a7 7 0 000 14zM6.1 4.43c.5-.5 1.18-.74 2.02-.74.74 0 1.37.2 1.84.62.48.42.71 1 .71 1.7a2.3 2.3 0 01-.44 1.44v.01c-.11.12-.44.42-.96.89h-.01a1.41 1.41 0 00-.44.59c-.14.34-.45.7-.89.7-.42 0-.82-.34-.72-.8.04-.18.1-.34.17-.49.09-.17.24-.37.46-.6.21-.24.5-.52.86-.83l.12-.15c.18-.22.26-.45.26-.68 0-.33-.1-.58-.26-.76-.17-.17-.43-.26-.77-.26-.45 0-.73.13-.92.38-.08.1-.14.25-.18.41-.1.38-.4.74-.84.74-.42 0-.8-.35-.72-.8.1-.55.33-1.01.7-1.37zm1.13 6.03a.95.95 0 01.7-.27c.27 0 .52.09.71.27.19.19.3.42.3.7a1 1 0 01-.3.72c-.2.18-.44.27-.71.27a.96.96 0 01-.7-.28.9.9 0 01-.3-.7.9.9 0 01.3-.71z"></path></svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                                    <!-- online display -->
                                    
                                    <!-- contacts -->
                                    <div class="form-card" id="section-seven">
                                        <div class="contacts_box_main">
                                            <div class="header_title mb-0">
                                                <div class="header_title_content d-flex flex-column">
                                                    <div class="protec-auth-box">
                                                        <img src="/images/icons/protection.png" class="protec-auth-box-img" alt="protection" width="40" height="40">
                                                        <h4 class="header_title_content_txt mb-0">
                                                            Чтобы опубликовать объявление, пройдите идентификацию
                                                            <div class="required_inputs"></div>
                                                        </h4>
                                                    </div>
                                                    <span class="header_title_content_txt_sub">Так мы боремся с мошенниками. Нам важно, чтобы все звонки доставались честным людям.</span>
                                                </div>
                                            </div>
                                            <div class="form-buttons w-100 d-flex align-items-center mt-3 justify-content-lg-end justify-content-md-end justify-content-center">
                                                <button type="button" class="form-buttons_btn" data-toggle="modal" data-target="#animation" :class="{'button-disabled' : loggedIn === true}" :disabled="loggedIn === true">Пройти идентификацию</button>
                                                <button type="submit" class="form-buttons_btn ml-3" :class="{'button-disabled' : loggedIn === false}" :disabled="loggedIn === false">Опубликовать объявлению</button>
                                            </div>
                                            <div class="created-object">
                                                <Toast />
                                            </div>
                                        </div>
                                    </div>
                                    <!-- contacts -->
                                </Form>
                            </div>
                            <div class="block__body_side-bar  d-lg-block d-md-block d-none">
                                <div class="form_inficator_box">
                                    <div class="step_form">
                                        <h3 class="step_form_title">Обязательно для заполнения</h3>
                                        <VScrollActive offset="40" :hash="false" @update="handleNavbarChange">
                                            <nav class="d-flex flex-column">
                                                <div class="steps_item">
                                                    <button data-scroll-active="section-one" class="steps_item_btn steps_item_btn_icon_left" :class="{'succes-input' : (form.object_type_id != '' && form.account_type != '')}" role="button">
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
                                                    <button data-scroll-active="section-two" class="steps_item_btn steps_item_btn_icon_left" :class="(v$.form.region_id.$invalid || v$.form.district_id.$invalid || v$.form.quarter_id.$invalid) && submitted ? 'input-invalid' : (!v$.form.region_id.$invalid && !v$.form.district_id.$invalid && !v$.form.quarter_id.$invalid) ? 'succes-input' : ''" role="button">
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
                                                    <button data-scroll-active="section-three" class="steps_item_btn steps_item_btn_icon_left" role="button" :class="{'succes-input' : form.images.length}">
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
                                                    <button data-scroll-active="section-four" class="steps_item_btn steps_item_btn_icon_left" :class="{'input-invalid': ((this.form.object_type_id == 1 ? (v$.form.floor.$invalid || v$.form.floor_count.$invalid || v$.form.room_count.$invalid) : '') || (this.form.object_type_id == 2 ? (v$.form.room_count.$invalid || v$.form.total_area.$invalid || v$.form.floor_count.$invalid || v$.form.land_area.$invalid) : '') || (this.form.object_type_id != 5 ? v$.form.total_area.$invalid : '') || (this.form.object_type_id != 1 ? v$.form.land_area.$invalid : '')) && submitted}" role="button">
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
                                                    <button data-scroll-active="section-five" class="steps_item_btn steps_item_btn_icon_left" role="button" :class="(v$.form.price.$invalid) && submitted ? 'input-invalid' : (!v$.form.price.$invalid) ? 'succes-input' : ''">
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
                                                    <button data-scroll-active="section-six" class="steps_item_btn steps_item_btn_icon_left" role="button" :class="(v$.form.comment.$invalid) && submitted ? 'input-invalid' : (!v$.form.comment.$invalid) ? 'succes-input' : ''">
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
import FormIndicator from '../../../components/add_new_object/StepFormIndicator.vue'
import Checkbox from 'primevue/checkbox';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import Toast from 'primevue/toast';
import UploadBox from '../../../components/Upload.vue'
// Validation
import { required, requiredIf } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
// Form
import FormInput from '../../../components/add_new_object/form/FormInput.vue'
import UploadImage from '../../../components/add_new_object/form/FormImages.vue'
import TestUpload from '../../../components/TestUpload.vue'
import FormButton from '../../../components/UI/FormButton.vue'
import RadioButton from 'primevue/radiobutton';
// Media Styles
import  '../../../../../public/css/media-one.css'
import VScrollActive from '../../../components/VScrollActive.vue';
// Loader
import ProgressSpinner from 'primevue/progressspinner';
export default {
    setup: () => ({ v$: useVuelidate() }),
    components: {
        FormIndicator,
        UploadImage,
        UploadBox,
        FormButton,
        Checkbox,
        InputMask,
        InputNumber,
        Textarea,
        RadioButton,
        Dropdown,
        Toast,
        VScrollActive,
        ProgressSpinner,
    },
    data() {
        return {
            form: {
                user_type: '',
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
            addoptions: [
                {id: 1,text: "Лифт",value: "elevator"},
                {id: 2,text: "Кондиционер",value: "conditioner"},
                {id: 3,text: "Интернет",value: "internet"},
                {id: 4,text: "Стиральная машина",value: "washing_machine"},
                {id: 5,text: "Бассейн",value: "swimming_pool"},
                {id: 6,text: "Сауна",value: "sauna"},
            ],
            commercialTypes: [
                {id: 1, text: "Офис", value: "office"},
                {id: 2, text: "Салон", value: "salon"},
                {id: 3, text: "Склад", value: "stock"},
                {id: 4, text: "Часть здания", value: "part-building"},
                {id: 5, text: "Общепит", value: "public-catering"},
                {id: 6, text: "Магазин/Бутик", value: "shop-boutique"},
                {id: 7, text: "Здание", value: "building"},
                {id: 8, text: "Под производство", value: "production"},
                {id: 9, text: "Другая", value: "other"},
            ],
            typeOfProperty: [
                {id: 1, text: "Квартира", value: "Квартира"},
                {id: 2, text: "Дом", value: "Дом"},
                {id: 3, text: "Коммерческая", value: "Коммерческая"},
                {id: 4, text: "Дача", value: "Дача"},
                {id: 5, text: "Земля", value: "Земля"},
            ],
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
    validations() {
        return {
            form: {
                region_id: { required },
                district_id: { required },
                quarter_id: { required },
                room_count: {
                    required: requiredIf(function (room_count) {
                        if(this.form.object_type_id == 1 || this.form.object_type_id == 2 || this.form.object_type_id == 4){
                            return true
                        }
                    }),
                },
                object_types_property_id: {
                    required: requiredIf(function (object_types_property_id) {
                        if(this.form.object_type_id == 3){
                            return true
                        }
                    }),
                },
                total_area: {
                    required: requiredIf(function (total_area) {
                        if(this.form.object_type_id != 5){
                            return true
                        }
                    }),
                },
                floor: {
                    required: requiredIf(function (floor) {
                        if(this.form.object_type_id == 1){
                            return true
                        }
                    }),
                },
                floor_count: {
                    required: requiredIf(function (floor_count) {
                        if(this.form.object_type_id == 1 || this.form.object_type_id == 2 || this.form.object_type_id == 4){
                            return true
                        }
                    }),
                },
                land_area: {
                    required: requiredIf(function (land_area) {
                        if(this.form.object_type_id == 2 || this.form.object_type_id == 4 || this.form.object_type_id == 5){
                            return true
                        }
                    }),
                },
                price: { required },
                comment: { required }
            }
        }
    },
    props: {
        loggedIn: {
            type: Boolean,
        }
    },
    computed:{
        youtube_thumbnail_downloader(){
            var vm = this;
            if(vm.form.youtube_url){
                var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
                    match = vm.form.youtube_url.match(regExp),
                    vidurl = '',
                    thumbnailpreview = '';
                if (match &&  match[1].length == 11) 
                {
                    vidurl = match[1];
                    thumbnailpreview = 'http://img.youtube.com/vi/'+vidurl+'/mqdefault.jpg';
                } 
                else 
                {
                    alert("The URL you have entered maybe incorrect. Please Enter a correct URL.");
                    this.errorURL = true;
                    return false
                }
                vm.thumbnailpreview = thumbnailpreview;
                return true
            }else{
                this.errorURL = false;
                return false
            }
        },
    },
    methods: {
        additonalOptions(){
            axios.get('/addiotonal/options')
            .then(response => this.options = response.data);
        },
        saveData(isFormValid){
            // let region_id = this.region_id;
            // console.log(`Submitted + ${region_id}`);
            this.submitted = true;
            if (!isFormValid) {
                return;
            }
            const token = localStorage.getItem('token');
            console.log(token);
            
            axios.post('/api/object/create',  this.form, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            }).then(response => {
                // this.onSuccess(response.data.message);
                console.log(response);
                // alert("ok");
                this.showSuccess();
                // window.location.reload();
                window.location.href = '/account/user/list/objects';
            })
            .catch(function (error) {
                // this.onFailure(error.response.data.message);
                alert(error);
                console.log(error);
            });
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
        uploadPhoto(e){
            console.log('ok');
            this.image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(this.image);
            reader.onload = e => {
                this.imageprevi = e.target.result;
            };
            this.profileUpload();
        },
        profileUpload(){  // insert new file or image by this code
            let formm = new FormData();
            formm.append('image', this.image);
            console.log(formm);
            axios.post('/api/upload_image', formm, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(function (error) {
                console.log("889");
            });
        },
        updateImagesBox(data){
            this.form.images = data;
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
            // let object_id = 3;;
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
        handleNavbarChange(id) {
            
        },
        resetInputs(){
            this.form.room_count = "";
            this.form.total_area = "";
            this.form.floor = "";
            this.form.floor_count = "";
            this.form.land_area = "";
            this.form.done_area = ""
        },
        showSuccess() {
            this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
        },
        showError() {
            this.$toast.add({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});
        }
    },
    async created() {
        this.additonalOptions();
        this.getRegions();
        this.getObjectTypes();
        this.getObjectTypesProperty();
        
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    mounted() {
        // document.onreadystatechange = () => {
        //     if(document.readyState == "complete"){
        //         this.isLoaded = true;
        //     }
        // }
    }
}
</script>

<style>
.new_object_frontend{
    display: flex;
    overflow: unset;
    flex: 1 1;
    flex-direction: column;
}

.container_medium_new{
    min-width: 320px;
    max-width: 1320px;
    padding: 0 16px;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
}
/* .new_object_main_div {
    margin: 3.2rem auto 0;
}     */
.block_header{
    margin-bottom: 1.875rem;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid #cccbca;
}

.block_title{
    display: inline-block;
    margin-right: 1.125rem;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #303549;
}

.text-secondary{
    color: #588ed8!important;
}

.form-card{
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.2rem 0.4rem 0 #00000012;
    padding: 3.2rem;
    width: 100%;
    margin-bottom: 20px;
}

/* ******************************************************* */
.header_title{
    display: flex;
    flex-direction: column;
    /* margin-bottom: 2.4rem; */
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
    align-items: center;
    display: flex;
    margin-bottom: 0.8rem;
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
    /* overflow-x: auto; */
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

/* .radio-inputs{
    max-width: 30rem;
} */

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
/* ******************************************************* */
.single_button_select_box_label{
    height: 40px;
    align-items: center;
    background-color: #fff;
    border: 1px solid #d3d4d4;
    box-shadow: none;
    box-sizing: border-box;
    color: #242629;
    cursor: pointer;
    display: flex;
    font: 500 14px/20px;
    justify-content: center;
    letter-spacing: normal;
    margin: 0;
    max-width: 100%;
    min-width: 0;
    outline: none;
    padding: 0 16px;
    position: relative;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
}

.single_button_select_box_label_inpt{
    box-shadow: none;
    box-sizing: border-box;
    height: 0;
    opacity: 0;
    outline: none;
    position: absolute;
    width: 0;
    z-index: -1;
}

.single_button_select_box_label_span{
    color: #242629;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: normal;
    margin: 0;
    overflow: hidden;
    padding: 0;
    text-decoration: none;
    text-indent: 0;
    text-overflow: ellipsis;
    text-shadow: none;
    text-transform: none;
    user-select: none;
    white-space: nowrap;
}



.single_button_select_box_label:first-child {
    border-radius: 5px 0 0 5px;
}

.single_button_select_box_label:not(:last-child) {
    border-right: 0;
}

.single_button_select_box_label:last-child {
    border-radius: 0 5px 5px 0;
}

.single_button_select_box_label.active{
    background-color: var(--form-button-color);
    border-bottom-color: var(--form-button-color);
    border-top-color: var(--form-button-color);
    color: #fff;
}
.single_button_select_box_label_span.active_span{
    color: #fff;
}

.single_button_select_box_label.active:first-child {
    border-left-color: var(--form-button-color);
}
.single_button_select_box_label.active:last-child {
    border-left-color: var(--form-button-color);
}

.youtube_block_div_btn{
    background-color: #242629;
    border-color: transparent;
    height: 40px;
    padding: 0 16px;
    -webkit-appearance: button;
    box-shadow: none;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    position: relative;
    text-align: center;
    border: 1px solid transparent;
    border-radius: 5px;
    color: #fff;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}

.youtube_block_div-span{
    font-size: 14px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 500;
    letter-spacing: normal;
    overflow: hidden;
    text-decoration: none;
    text-indent: 0;
    text-overflow: ellipsis;
    text-shadow: none;
    text-transform: none;
    transition: color .15s;
    white-space: nowrap;
}

/* *****************OPTIONS******************************************** */
.options_main__item_first{
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
    position: relative;
}

.options_main__item_first_content{
    align-items: baseline;
    display: flex;
    margin: 0 0.2rem 0.8rem;
}

.options_main__item_first_content_title{
    font-size: 16px;
    font-weight: 500;
    line-height: 1.9rem;
    text-align: left;
}
.options_main__item_first_btns{
    display: flex;
    flex-wrap: wrap;
    margin: -0.8rem 0 0 -0.8rem;
}
.option_btn{
    background-color: #fff;
    border: 0.1rem solid #c9cbcd;
    border-radius: 0.5rem;
    color: #242629;
    cursor: pointer;
    font-size: 17px;
    height: 3rem;
    margin: 0.8rem 0 0 0.8rem;
    min-width: 3rem;
    outline: none;
    padding: 0 0.8rem;
    transition: border-color .2s ease 0s,background-color .2s ease 0s;
    user-select: none;
    will-change: border-color,background-color;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.option_btn input{
    position: absolute;
    width: 0;
    opacity: 0;
    z-index: -2;
}


.option_btn.active{
    background-color: #53b374;
    border-color: #53b374;
    color: #fff;
}
.option_class_one{
    display: flex;
    margin-left: 1.6rem;
}

.option_class_second{
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    height: 3rem;
    letter-spacing: normal;
}

.options_main__item_second .p-checkbox{
    appearance: none;
    background-color: #fff;
    border: 1px solid #c9cbcd;
    border-radius: 0.5rem;
    color: #242629;
    height: 25px;
    margin: 0 0.8rem 0 0;
    outline: none;
    transition: border-color .2s ease 0s;
    width: 25px;
    will-change: border-color;
}

.options_main__item_second .p-checkbox .p-checkbox-box {
    border: none !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 0.5rem !important;
}

.options_main__item_second .p-checkbox .p-checkbox-box.p-highlight {
    background: #53b374;
}

.options_main__item_second .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {
    background: #53b374;
    color: #ffffff;
}

.options_main__item_second .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
    box-shadow: unset;
    border-color: #53b374;
}

.options_main__item_second .field-checkbox label {
    color: #464646;
    margin-bottom: 0;
    padding-left: 0.2rem;
    font-size: 14px;
    font-weight: 500;
}

.options_main__items_inputs{
    margin-bottom: 0;
    max-width: 15.2rem;
    width: 100%;
}

.options_main__items_inputs+.options_main__items_inputs {
margin-left: 2.4rem;
}


.inputs_block_title{
    align-items: center;
    display: flex;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.9rem;
    margin: 0 0.2rem 0.8rem;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.dc-input-6-1-2{
    align-items: center;
    background-color: var(--white_100);
    border: 1px solid var(--dc-color-grey-200);
    border-radius: 5px;
    display: inline-flex;
    justify-content: center;
    position: relative;
    transition: border-color .2s;
    vertical-align: middle;
}
.dc-input-6-1-2:hover{
    border: 1px solid var(--black_100);
}
.input_div{
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
}

.dc-input__input-6-1-2 {
    background-color: initial !important;
    border: 0 !important;
    border-radius: 5px !important;
    box-shadow: none !important;
    box-sizing: border-box !important;
    color: var(--dc-color-afro,#242629) !important;
    font-size: 16px !important;
    height: calc(100% - 2px) !important;
    margin: 1px 0 !important;
    outline: none !important;
    padding: 11px 12px !important;
    text-overflow: ellipsis !important;
    width: 100% !important;
}
.dc-input__input-6-1-2 {
    padding-right: 0;
}

.dc-input__input-6-1-2{
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
}

.dc-input__input-icon-right{
    padding-right: 12px;
    padding-left: 8px;
    align-items: center;
    border: 0;
    box-shadow: none;
    color: #a7a8a9;
    display: flex;
    font-size: 14px;
    font-weight: 500;
    height: 100%;
    justify-content: center;
    line-height: normal;
    transition: .2s;
    white-space: nowrap;
}

.dc-input__input-icon-right-font{
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
}

.window_view{
    color: #242629;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
}

.window_checbox{
    grid-row-gap: 1.6rem;
    display: grid;
    grid-template-columns: repeat(4,13rem);
}

.price_box_main_input_flex_input{
    width: 300px;
}

.description_box_main_text_area .p-inputtext:enabled:hover {
    border-color: var(--black_100);
}

.description_box_main_text_area .p-inputtext:enabled:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: unset !important;
    border-color: var(--black_100);
}

.icon-4-0-1{
    display: inline-block;
    height: 16px;
    line-height: 16px;
    min-height: 16px;
    min-width: 16px;
    overflow: hidden;
    width: 16px;
    color: #a7a8a9;
    cursor: help;
    transition: color .2s;
}

.form-buttons_btn{
    position: relative;
    cursor: pointer;
    border: 1px solid var(--form-button-color);
    border-radius: 4px;
    background-color: transparent;
    padding: 0 16px;
    height: 40px;
    overflow: hidden;
    color: var(--form-button-color);
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    user-select: none;
    text-decoration: none;
    border-color: var(--form-button-color);
    background-color: var(--form-button-color);
    color: #fff;
}

/* .form-buttons_btn:nth-child(2){
    margin-left: 10px;
   
    color: #fff;
} */

.block__body_main{
    display: flex;
    margin: 0 auto;
    padding: 20px 0;
    width: 100%;
}

.block__body_side-bar_content{
    flex: 1;
    min-width: 0;
}

.block__body_side-bar{
    flex: none;
    margin-left: 20px;
    /* padding-top: 50px; */
    width: 300px;
}

.block__body_side-bar .form_inficator_box{
    position: sticky;
    top: 20px;
    width: 100%;
}

.address_block_div  .p-dropdown{
    height: 40px !important;
    align-items: center;
    border: 0.1rem solid #c9cbcd;
    border-radius: 0.5rem !important;
}

.address_block_div .p-dropdown:not(.p-disabled):hover,
.address_block_div .p-dropdown:not(.p-disabled).p-focus{
    border-color: var(--form-button-color) !important;
}

.address_block_div .p-dropdown-items-wrapper {
    max-height: 200px !important;
}

.address_block_div  .p-dropdown-panel{
    border: 0 none;
    border-radius: 6px !important;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%) !important;
    min-width: unset !important;
}

/* ********************************************************************************* */
.youtube__video-thumb{
    height: 9.2rem;
    position: relative;
    width: 11.4rem;
}

.youtube__video-thumb-box{
    border-radius: 0.5rem;
    height: 9.2rem;
    width: 11.4rem;
    display: block;
}

.youtube__video-thumb-img{
    object-fit: cover;
    border-radius: 0.5rem;
    height: 9.2rem;
    width: 11.4rem;
}

.back-hover{
    background-color: #24262966;
    border-radius: 0.5rem;
    bottom: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity .2s;
    z-index: 1;
}

.back-hover:hover{
    opacity: 1;
}

.youtube_thumbnail-link{
    margin-left: 1.6rem;
    min-width: 0;
}

.youtube-link{
    color: #737476;
    line-height: 2rem;
    margin-bottom: 1.2rem;
    margin-top: 0.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.youtube__delete_button{
    background-color: #fff;
    border-color: #d3d4d4 !important;
    transition: border-color .5s;
    height: 40px;
    padding: 0 16px;
    -webkit-appearance: button;
    box-shadow: none;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 5px;
    color: #fff;
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: center;
    position: relative;
    text-align: center;
    align-items: center;
}

.youtube__delete_button:hover{
    border-color: transparent !important;
    background-color: #e5e5e5 !important;
}

.button-root__text-8-2-0 {
    color: #242629;
    font-size: 14px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 500;
    letter-spacing: normal;
    overflow: hidden;
    text-decoration: none;
    text-indent: 0;
    text-overflow: ellipsis;
    text-shadow: none;
    text-transform: none;
    transition: color .15s;
    white-space: nowrap;
}

.protec-auth-box-img{
    margin-bottom: 16px;
}

.protec-auth-box .header_title_content_txt{
    font-size: 20px !important;
}
/* *********************************************** Media *********************** */
@media (max-width: 575px){
    .new_object_frontend {
        overflow: hidden !important;
    }

    .block__body {
        padding: 0;
        margin: 0 -16px;
    }

    .mobile-filter-views-house-modal .FiltersFormFieldPanel__controls .p-radiobutton,
    .mobile-filter-views-house-modal .FiltersFormFieldPanel__controls .p-radiobutton .p-radiobutton-box {
        width: 30px !important;
        height: 30px !important;
    }

    .mobile-filter-views-house-modal .FiltersFormFieldPanel__controls .p-radiobutton .p-radiobutton-box .p-radiobutton-icon{
        width: 20px !important;
        height: 20px !important;
    }

    .p-radiobutton .p-radiobutton-box.p-highlight {
        border-color: #2196F3;
        background: #fff !important;
    }

    .p-radiobutton .p-radiobutton-box.p-highlight  .p-radiobutton-icon{
        background: #2196F3 !important;
    }
}
</style>
