<template>
    <div class="new_object_frontend" style="background-color: #f2f4f6;">
        <div class="new_object_main_div container_medium_new">
            <div class="new_object_main_div_block">
                <!-- <header class="block_header d-flex align-items-center">
                    <b class="block_title title">Добавление объявления</b>
                    <span class="text-secondary">Вы можете бесплатно добавить до 2 объявлений в месяц</span>
                </header> -->
                <div class="block__body">
                    <div class="form">
                        <div class="block__body_main">
                            <div class="block__body_side-bar_content">
                                <form @submit.prevent="saveData()" id="file-dropzone" method="POST" :model="form">
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
                                                                        <label for="type__account_owner" class="single_button_select_box_label" :class="{'active' : this.typeAccount == 'owner'}">
                                                                            <input v-model="typeAccount" id="type__account_owner" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="owner">
                                                                            <span class="single_button_select_box_label_span" :class="{'active_span' : this.typeAccount == 'owner'}">Собственник</span>
                                                                        </label>
                                                                        <label for="type__account_agent" class="single_button_select_box_label" :class="{'active' : this.typeAccount == 'agent'}">
                                                                            <input v-model="typeAccount" id="type__account_agent" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="agent">
                                                                            <span class="single_button_select_box_label_span" :class="{'active_span' : this.typeAccount == 'agent'}">Агент</span>
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
                                                                        <label for="type__sell" class="single_button_select_box_label" :class="{'active' : this.deal_type == 'buy'}">
                                                                            <input v-model="deal_type" id="type__sell" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="buy">
                                                                            <span class="single_button_select_box_label_span" :class="{'active_span' : this.deal_type == 'buy'}">Продажа</span>
                                                                        </label>
                                                                        <label for="type__rent" class="single_button_select_box_label" :class="{'active' : this.deal_type == 'rent'}">
                                                                            <input v-model="deal_type" id="type__rent" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="rent">
                                                                            <span class="single_button_select_box_label_span" :class="{'active_span' : this.deal_type == 'rent'}">Аренда</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div v-if="deal_type === 'rent'" class="ad_type_item" style="margin-bottom: 20px;">
                                                        <div class="ad_type_item_content">
                                                            <div>
                                                                <span class="ad_type_item_content_span">Тип аренды</span>
                                                                <div class="single_button_select">
                                                                    <div class="single_button_select_box d-flex">
                                                                        <label for="type__rent_daily" class="single_button_select_box_label" :class="{'active' : this.typeRent == 'daily'}">
                                                                            <input v-model="typeRent" id="type__rent_daily" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="daily">
                                                                            <span class="single_button_select_box_label_span" :class="{'active_span' : this.typeRent == 'daily'}">Посуточно</span>
                                                                        </label>
                                                                        <label for="type__rent_long_term" class="single_button_select_box_label" :class="{'active' : this.typeRent == 'long-terim'}">
                                                                            <input v-model="typeRent" id="type__rent_long_term" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="long-terim">
                                                                            <span class="single_button_select_box_label_span" :class="{'active_span' : this.typeRent == 'long-terim'}">Долгосрочный</span>
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
                                                                        <label for="type__residential" class="single_button_select_box_label" 
                                                                        :class="{'active' : this.type == 'flat'}">
                                                                            <input v-model="type" id="type__residential" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="flat">
                                                                            <span class="single_button_select_box_label_span" :class="{'active_span' : this.type == 'flat'}">Квартира</span>
                                                                        </label>
                                                                        <label for="type__house" class="single_button_select_box_label" 
                                                                        :class="{'active' : this.type == 'home'}">
                                                                            <input v-model="type" id="type__house" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="home">
                                                                            <span class="single_button_select_box_label_span" :class="{'active_span' : this.type == 'home'}">Дом</span>
                                                                        </label>
                                                                        <label  for="type__commercial" class="single_button_select_box_label"
                                                                        :class="{'active' : this.type == 'office'}">
                                                                            <input v-model="type" id="type__commercial" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="office">
                                                                            <span class="single_button_select_box_label_span" :class="{'active_span' : this.type == 'office'}">Коммерческая</span>
                                                                        </label>
                                                                        <label for="type__dacha" class="single_button_select_box_label"
                                                                        :class="{'active' : this.type == 'villa'}">
                                                                            <input v-model="type" id="type__dacha" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="villa">
                                                                            <span class="single_button_select_box_label_span" :class="{'active_span' : this.type == 'villa'}">Дача</span>
                                                                        </label>
                                                                        <label for="type__earth" class="single_button_select_box_label"
                                                                        :class="{'active' : this.type == 'land'}">
                                                                            <input v-model="type" id="type__earth" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="land">
                                                                            <span class="single_button_select_box_label_span" :class="{'active_span' : this.type == 'land'}">Земля</span>
                                                                        </label>
                                                                    </div>
                                                                    <div v-if="MobileTypeEstate" class="mobile_button_select">
                                                                        <div class="w-100">
                                                                            <button data-toggle="modal" data-target="#typeHouseModal" class="d-flex align-items-center justify-content-between w-100 mobile-filter-views-house-item-btn" type="button">
                                                                                <span>{{ type != '' ? type : 'Тип недвижимости' }}</span>
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
                                                                                                                <div v-for="item in typeOfProperty" :key="item.id" @click="type = item.value" class="mobile-filter-views-house-modal-item flex-row-reverse">
                                                                                                                    <RadioButton :inputId="`type_commer_${item.id}`" name="type-commercial" :value="item.value" v-model="type" />
                                                                                                                    <label :for="`type_commer_${item.id}`" class="Tumbler__title" style="font-size: 18px; font-weight: 500;"> {{ item.text }}</label>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="FiltersFormFieldPanel__actions">
                                                                                                        <button @click="type = ''"  data-dismiss="modal" aria-label="Close" class="Button Button_js_inited Button_size_l Button_theme_islands Button_type_button FiltersFormFieldPanel__cancel" type="button"><span class="Button__text">Отменить</span></button>
                                                                                                        <button data-dismiss="modal" aria-label="Close" class="Button Button_js_inited Button_size_l Button_theme_realty Button_type_button Button_theme_islands Button_view_yellow FiltersFormFieldPanel__save" type="button"><span class="Button__text d-block">Выбирать</span></button>
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
                                                            <div v-if="type == 'office'" class="additional_options_main">
                                                                <div class="row">
                                                                    <div v-for="item in commercialTypes" :key="item.id" class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div class="additional_options_main_item adddtional_types_media">
                                                                            <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                <div class="adddtional_main_block">
                                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                                        <Checkbox :id="`add_option_${item.id}`" name="options[]" :value="item.value" v-model="form.commercialOptions" />
                                                                                        <label :for="`add_option_${item.id}`">{{item.text}}</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
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
                                                    <h4 class="header_title_content_txt mb-0">Адрес</h4>
                                                    <!-- <span class="header_title_content_txt_sub">Укажите адрес или передвиньте метку на карте</span> -->
                                                </div>
                                                <div id="address" class="postion-relative">
                                                    <div class="address_block">
                                                        <div class="address_block_div">
                                                            <div class="row">
                                                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                                                    <div class="address_block_div-drop mb-lg-0 mb-3">
                                                                        <label>Регион</label>
                                                                        <Dropdown @change="getDistricts()" v-model="region_id" :options="regions" optionLabel="name_uz" optionValue="id" placeholder="Выбирать регион"  class="w-100"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                                                    <div class="address_block_div-drop mb-lg-0 mb-3">
                                                                        <label>Район</label>
                                                                        <Dropdown @change="getQuarters()" v-model="district_id" :options="districts" optionLabel="name_uz" optionValue="id" placeholder="Выбирать район"  class="w-100"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-4 col-12">
                                                                    <div class="address_block_div-drop">
                                                                        <label>Улица</label>
                                                                        <Dropdown v-model="quarter_id" :options="quarters" optionLabel="name_uz" optionValue="id" placeholder="Выбирать улица"  class="w-100"/>
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
                                                    <h4 class="header_title_content_txt mb-0">Фотографии 2</h4>
                                                </div>
                                                <div>
                                                        <upload-box @updateImagesBox="updateImagesBox"></upload-box>
                                                </div>
                                                <pre>
                                                    {{this.form.images}}
                                                </pre>
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
                                                <div id="address" class="postion-relative">
                                                    <div class="address_block">
                                                        <div class="address_block_div d-flex align-items-center">
                                                            <div class="address_block_div_item w-100">
                                                                <input id="youtebe-link" class="dc-input__input-6-1-2" name="total_area" type="text" placeholder="Ссылка на видео с YouTube" tabindex="0" v-model="form.youtube_video" />
                                                            </div>
                                                            <div class="youtube_block_div_button ml-lg-2 ml-md-2 ml-0">
                                                                <button class="youtube_block_div_btn" :class="{'button-disabled' : form.youtube_video.length <= 0}"  :disabled="form.youtube_video.length <= 0">
                                                                    <span class="youtube_block_div-span">Добавить</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- You tube video -->

                                    <!-- Options -->
                                    <div class="form-card" id="section-four">
                                        <div class="options_main">
                                            <div class="header_title">
                                                <div class="header_title_content">
                                                    <h4 class="header_title_content_txt">Параметры</h4>
                                                </div>
                                                <div class="options_div">
                                                    <!-- Area options -->
                                                    <div class="options_main__items mt-4 d-flex">
                                                        <!-- Количество комнат-->
                                                        <div v-if="type != 'land'" class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                            <span class="inputs_block_title">Количество комнат</span>
                                                            <div class="options_main__items_inputs_block d-flex flex-column">
                                                                <div class="input-medium-6 dc-input-6-1-2">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="kitchen_area" class="dc-input__input-6-1-2" maxlength="24" placeholder="" type="number" tabindex="0" v-model.number="form.room_count">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Количество комнат-->
                                                            <!-- Общая площадь -->
                                                            <div v-if="type != 'land'" class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                                <span class="inputs_block_title">Общая площадь</span>
                                                                <div class="options_main__items_inputs_block d-flex flex-column">
                                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                                            <input id="space" class="dc-input__input-6-1-2" maxlength="24" name="total_area" type="number" placeholder="" tabindex="0" v-model.number="form.total_area" />
                                                                        </div>
                                                                        <div class="dc-input__input-icon-right dc-input__input-icon-right-font">м²</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- Общая площадь -->

                                                        <!-- Жилая площадь -->
                                                        <div v-if="type != 'land'" class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                            <span class="inputs_block_title">Жилая площадь | DOP</span>
                                                            <div class="options_main__items_inputs_block d-flex flex-column">
                                                                <div class="input-medium-6 dc-input-6-1-2">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="living_space" class="dc-input__input-6-1-2" maxlength="24" placeholder="" type="number" tabindex="0" v-model.number="form.livingSpace">
                                                                    </div>
                                                                    <div class="dc-input__input-icon-right dc-input__input-icon-right-font">м²</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Жилая площадь -->
                                                    </div>
                                                    <!-- Area options -->

                                                    <!-- Hight options -->
                                                    <div class="options_main__items options_main__items_inputs_media mt-4 d-flex">
                                                        <!-- Этаж -->
                                                        <div v-if="type == 'flat'" class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                            <span class="inputs_block_title">Этаж</span>
                                                            <div class="options_main__items_inputs_block d-flex flex-column">
                                                                <div class="input-medium-6 dc-input-6-1-2">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="floor" class="dc-input__input-6-1-2" maxlength="24" placeholder="" type="number" tabindex="0" v-model.number="form.floor">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Этаж -->

                                                        <!-- Этажность -->
                                                        <div v-if="type != 'land'" class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                            <span class="inputs_block_title">Этажность</span>
                                                            <div class="options_main__items_inputs_block d-flex flex-column">
                                                                <div class="input-medium-6 dc-input-6-1-2">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="floor_house" class="dc-input__input-6-1-2" maxlength="24" placeholder="" type="number" tabindex="0" v-model.number="form.floorHouse">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Этажность -->

                                                        <!-- Площадь участка -->
                                                        <div v-if="type != 'flat'" class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                            <span class="inputs_block_title">Площадь участка</span>
                                                            <div class="options_main__items_inputs_block d-flex flex-column">
                                                                <div class="input-medium-6 dc-input-6-1-2">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="space" class="dc-input__input-6-1-2" maxlength="24" name="total_area" type="number" placeholder="" tabindex="0" v-model.number="form.land_area" />
                                                                    </div>
                                                                    <div class="dc-input__input-icon-right dc-input__input-icon-right-font">м²</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Площадь участка -->
                                                    </div>
                                                    <!-- Hight options -->
                                                    <div>
                                                        <!-- Bathroom -->
                                                        <div  v-if="type == 'flat'"  class="options_main__items mt-4">
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
                                                        </div>
                                                        <!-- Bathroom -->

                                                        <!-- Балкон/Лоджия -->
                                                        <div  v-if="type == 'flat'" class="options_main__items mt-4">
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
                                                        </div>
                                                        <!-- Балкон/Лоджия -->

                                                        <!-- Ремонт -->
                                                        <div v-if="type != 'land'" class="options_main__items mt-4">
                                                            <div class="options_main__item d-flex align-items-lg-end align-items-md-end align-items-start flex-lg-row flex-md-row flex-column">
                                                                <div id="rooms" class="options_main__item_first">
                                                                    <div class="options_main__item_first_content">
                                                                        <span class="options_main__item_first_content_title">Ремонт</span>
                                                                    </div>
                                                                    <div class="options_main__item_first_btns">
                                                                        <label for="condition1" class="option_btn" :class="{'active' : this.form.houseCondition == 'cosmetic'}">
                                                                            <input v-model="form.houseCondition" id="condition1" type="radio" tabindex="0" value="cosmetic">
                                                                            Косметический
                                                                        </label>
                                                                        <label for="condition2" class="option_btn" :class="{'active' : this.form.houseCondition == 'euro'}">
                                                                            <input v-model="form.houseCondition" id="condition2" type="radio" tabindex="0" value="euro">
                                                                            Евро
                                                                        </label>
                                                                        <label for="condition3" class="option_btn" :class="{'active' : this.form.houseCondition == 'designer'}">
                                                                            <input v-model="form.houseCondition" id="condition3" type="radio" tabindex="0" value="designer">
                                                                            Дизайнерский
                                                                        </label>
                                                                        <label for="condition4" class="option_btn" :class="{'active' : this.form.houseCondition == 'withoutrepair'}">
                                                                            <input v-model="form.houseCondition" id="condition4" type="radio" tabindex="0" value="withoutrepair">
                                                                            Без ремонта
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div class="options_main__item_second option_class_one mb-0 option_class_second">
                                                                    <div class="d-flex align-items-center">
                                                                        <div class="field-checkbox d-flex align-items-center">
                                                                            <Checkbox id="redevelopment" name="redevelopment" value="redevelopment" v-model="form.redevelopment" />
                                                                            <label for="redevelopment">Перепланировка</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Ремонт -->

                                                        <!-- Год постройки -->
                                                        <div v-if="type != 'land'" class="options_main__items mt-4 d-flex">
                                                            <div class="options_main__items_inputs options_main__items_inputs_media  d-flex flex-column">
                                                                <span class="inputs_block_title">Год постройки</span>
                                                                <div class="options_main__items_inputs_block d-flex flex-column">
                                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                                            <InputMask class="dc-input__input-6-1-2" mask="9999" v-model="form.yearofBuilding" placeholder="2022" />
                                                                        </div>
                                                                        <div class="dc-input__input-icon-right dc-input__input-icon-right-font">г</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Год постройки -->

                                                        <!-- Тип дома -->
                                                        <div v-if="type != 'land'" class="options_main__items mt-4">
                                                            <div class="options_main__item d-flex align-items-end">
                                                                <div id="rooms" class="options_main__item_first">
                                                                    <div class="options_main__item_first_content">
                                                                        <span class="options_main__item_first_content_title">Тип дома</span>
                                                                    </div>
                                                                    <div class="options_main__item_first_btns">
                                                                        <label for="house_type1" class="option_btn" :class="{'active' : this.form.houseType == 'brick'}">
                                                                            <input v-model="form.houseType" id="house_type1" type="radio" tabindex="0" value="brick">
                                                                            Кирпичный
                                                                        </label>
                                                                        <label for="house_type2" class="option_btn" :class="{'active' : this.form.houseType == 'monolithic'}">
                                                                            <input v-model="form.houseType" id="house_type2" type="radio" tabindex="0" value="monolithic">
                                                                            Монолитный
                                                                        </label>
                                                                        <label for="house_type3" class="option_btn" :class="{'active' : this.form.houseType == 'wood'}">
                                                                            <input v-model="form.houseType" id="house_type3" type="radio" tabindex="0" value="wood">
                                                                            Деревянный
                                                                        </label>
                                                                        <label for="house_type4" class="option_btn" :class="{'active' : this.form.houseType == 'panel'}">
                                                                            <input v-model="form.houseType" id="house_type4" type="radio" tabindex="0" value="panel">
                                                                            Панельный
                                                                        </label>
                                                                        <label for="house_type5" class="option_btn" :class="{'active' : this.form.houseType == 'blocky'}">
                                                                            <input v-model="form.houseType" id="house_type5" type="radio" tabindex="0" value="blocky">
                                                                            Блочный
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Тип дома -->

                                                        <!-- Дополнительно -->
                                                        <div id="additional_options" class="mt-5">
                                                            <h2 class="header_title_content_txt">Дополнительно</h2>
                                                            <div class="additional_options_main">
                                                                <div class="row">
                                                                    <div v-for="item in addoptions" :key="item.id" class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div class="additional_options_main_item adddtional_types_media">
                                                                            <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                <div class="adddtional_main_block">
                                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                                        <Checkbox :id="`add_option_${item.id}`" name="options[]" :value="item.value" v-model="form.additionalOptions" />
                                                                                        <label :for="`add_option_${item.id}`">{{item.text}}</label>
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
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Options -->

                                    <!-- Price -->
                                    <div class="form-card" id="section-five">
                                        <div class="price_box_main">
                                            <div class="header_title mb-0">
                                                <div class="header_title_content d-flex flex-column">
                                                    <h4 class="header_title_content_txt mb-4">Цена и условия продажи</h4>
                                                </div>
                                                <div class="price_box_main_input d-flex flex-column">
                                                    <div class="d-flex flex-column">
                                                        <div class="price_box_main_input_flex d-flex align-items-center">
                                                            <div class="price_box_main_input_flex_input">
                                                                <div class="input-medium-6 dc-input-6-1-2 w-100">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="priceHouse" class="dc-input__input-6-1-2" maxlength="24" placeholder="" tabindex="0" type="number" v-model.number="form.priceHouse">
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
                                                                <Checkbox id="price_checkbox" name="price_check" value="yes" v-model="form.priceCheckbox" />
                                                                <label for="infrastrucure_option_1">Торг уместен</label>
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
                                                    <h4 class="header_title_content_txt mb-4">Описание</h4>
                                                </div>
                                                <div class="description_box_main_text_area">
                                                    <Textarea v-model="form.description" rows="5" cols="100" class="w-100" placeholder="Расскажите о недвижимости, собственниках, соседях, транспортной доступности и инфраструктуре" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- description -->

                                    <!-- online display -->
                                    <div class="form-card">
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
                                            <div class="form-buttons w-100 d-flex align-items-center mt-3 justify-content-lg-end justify-content-md-end justify-content-center">
                                                <button type="button" class="form-buttons_btn">Сохранить черновик</button>
                                                <button type="submit" class="form-buttons_btn">Разместить объявление</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- online display -->
                                </Form>
                            </div>
                            <div class="block__body_side-bar  d-lg-block d-md-block d-none">
                                <form-indicator></form-indicator>
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
import UploadBox from '../../../components/Upload.vue'
// Form
import FormInput from '../../../components/add_new_object/form/FormInput.vue'
import UploadImage from '../../../components/add_new_object/form/FormImages.vue'
import TestUpload from '../../../components/TestUpload.vue'
import FormButton from '../../../components/UI/FormButton.vue'
import RadioButton from 'primevue/radiobutton';
// Media Styles
import  '../../../../../public/css/media-one.css'

export default {
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
    },
    data() {
        return {
            form: {
                address: "",
                youtube_video: "",
                apartments:  "",
                // totalArea: "",
                kitchenArea: "",
                livingSpace: "",
                floor: "",
                floor_count: "",
                room_count: "",
                total_area: "",
                // floorHouse: "",
                ceilingHeight: "",
                bathroomType: "",
                numberBalcons: "",
                houseCondition: "",
                redevelopment: "",
                yearofBuilding: "",
                houseType: "",
                additionalOptions: [],
                commercialOptions: [],
                priceHouse: "",
                priceCheckbox: "",
                description: "",
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
            deal_type: '',
            typeAccount: '',
            typeRent: '',
            type: '',
            offerType: null,
            MobileTypeEstate: false,
            region_id: null,
            district_id: null,
            quarter_id: null,
            regions: [],
            districts: [],
            quarters: [],
            image: null,
            imageprevi: null,
        }
    },
    methods: {
        additonalOptions(){
            axios.get('/addiotonal/options')
            .then(response => this.options = response.data);
        },
        saveData(){
            console.log("Submitted");
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
            let region_id = this.region_id;
            axios.get('/api/districts/' + region_id)
            .then(response => {
                this.districts = response.data.result
                this.quarters = []
            });
        },
        getQuarters(){
            let district_id = this.district_id;
            axios.get('/api/quarters/' + district_id)
            .then(response => {
                this.quarters = response.data.result
            });
        }
    },
    created() {
        this.additonalOptions();
        this.getRegions();
        
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen()
    },
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
}

.form-buttons_btn:nth-child(2){
    margin-left: 10px;
    border-color: var(--form-button-color);
    background-color: var(--form-button-color);
    color: #fff;
}

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
    border: 0.1rem solid #c9cbcd !important;
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
