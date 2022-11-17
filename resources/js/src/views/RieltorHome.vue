<template>
    <div class="agent-single-page">
        <div class="agent-single-div">
            <div class="agent-single-div-header">
                <div class="agent-single-div-header-main">
                    <div class="agent-single-div-header-main-content">
                        <div class="header-main-content-top">
                            <div class="container_fluid">
                                <div class="header-main-content-top-main">
                                    <div class="realtor-header">
                                        <div class="col-lg-8 col-12">
                                            <div class="realtor__info-main">
                                                <div class="realtor__info-main_img">
                                                    <div class="realtor__info-main_img_photo">
                                                        <div class="img-box" style="width: 128px; height: 128px;">
                                                            <div>
                                                                <img src="/images/agent-img-avatar.png" alt="" class="wDiYI" style="min-width: 128px; max-width: 128px; min-height: 128px;">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="PwHgU realtor__info-main_img__rating">
                                                        <div class="fTgnJ bvmhS It1BH">
                                                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13.423 2.836a1.848 1.848 0 0 0-3.093.002l-2.526 3.85a.25.25 0 0 1-.134.102L3.304 8.155c-1.214.38-1.697 1.849-.944 2.882l2.812 3.858a.25.25 0 0 1 .048.154l-.124 4.785c-.034 1.318 1.265 2.253 2.494 1.798l4.32-1.599a.25.25 0 0 1 .179.002l4.059 1.597c1.224.456 2.523-.47 2.497-1.785l-.095-4.8a.25.25 0 0 1 .047-.15l2.797-3.864c.747-1.033.264-2.497-.947-2.877L16.088 6.79a.25.25 0 0 1-.134-.102l-2.53-3.852z"></path></svg>
                                                            <span>5.0</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="realtor__info-main-content">
                                                    <div class="realtor__info-main-content_position">Специалист по недвижимости</div>
                                                    <div class="realtor__info-main-content_separator"></div>
                                                    <a href="#!" class="realtor__info-main-content_name">
                                                        <h1 class="realtor__info-main-content_fio text-bold">Javohir Toirov</h1>
                                                    </a>
                                                    <div class="d-flex align-items-center justify-content-lg-start justify-content-md-start justify-content-sm-start justify-content-center">
                                                        <div class="realtor__info-main-content_city">Город: Ташкент</div>
                                                        <div class="realtor__info-main-content_email d-flex align-items-center ml-2">
                                                            <span>Email: </span> 
                                                            <a href="test@gmail.com" class="ml-2">test@gmail.com</a> 
                                                        </div>
                                                    </div>
                                                    <div class="realtor__info-main-content_buttons">
                                                        <div class="realtor__info-main-content_call-button mx-1">
                                                            <a href="/agent-info" class="button-link btn btn-block btn-default btn-with-icon btn-lg h-100">
                                                                <span>About me</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="realtor__info-main-filter mt-5">
                                            <!-- Desktop Filter start -->
                                            <div v-if="DesktopFilter" class="realtor__info-main-filter-filters">
                                                <form class="FiltersForm_name_main">
                                                    <div class="FiltersForm__content">
                                                        <div class="filters-tabs">
                                                            <div class="filters-tabs-wrapper d-flex align-items-center">
                                                                <label for="type__filter" class="filters-tabs-item Radio_theme_realty" :class="{'active' : this.typeSearch == 'buy'}">
                                                                    <input v-model="typeSearch" id="type__filter" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="buy">
                                                                    Купить
                                                                </label>
                                                                <label for="type__filter_2" class="filters-tabs-item Radio_theme_realty" :class="{'active' : this.typeSearch == 'rent'}">
                                                                    <input v-model="typeSearch" id="type__filter_2" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="rent">
                                                                    Снять
                                                                </label>
                                                                <label for="type__filter_3" class="filters-tabs-item Radio_theme_realty" :class="{'active' : this.typeSearch == 'hourly'}">
                                                                    <input v-model="typeSearch" id="type__filter_3" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="hourly">
                                                                    Посуточно
                                                                </label>
                                                                <label for="type__filter_4" class="filters-tabs-item Radio_theme_realty" :class="{'active' : this.typeSearch == 'new_buildings'}">
                                                                    <input v-model="typeSearch" id="type__filter_4" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="new_buildings">
                                                                    Новостройки
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="FiltersForm__content-filters mb-4">
                                                            <div class="filters-wrapper w-100 d-flex">
                                                                <div class="filters-wrapper-item filters-wrapper-item-container-1">
                                                                    <Dropdown v-model="selectedCity1" :options="typeSearch == 'buy' || typeSearch == 'rent' ? cities : typeSearch == 'hourly'  ? hourlyType : newBuildingsType" optionLabel="name" optionValue="code" placeholder="Выберите тип" />
                                                                </div>
                                                                <div v-if="selectedCity1 === 'apartment'" class="filters-wrapper-item filters-wrapper-item-container-2 FiltersFormField_name_roomsTotal FiltersFormField">
                                                                    <div class='apartment-type h-100 d-flex align-items-center filters-wrapper-item-padding'>
                                                                        <!-- <label for="studio" class="apartment-type_label">
                                                                            <button class="apartment-type-btn" type="button" :class="{'apartment-type-btn-active' : roomsTotal === true}">
                                                                            <input v-model="roomsTotal" type="checkbox" id="studio" value="studio" class="apartment-type_label-input">
                                                                                <span class="Button__text">Студия</span>
                                                                            </button>
                                                                        </label> -->
                                                                        <label for="studio" class="apartment-type_label">
                                                                            <input v-if="Studio" name="roomstotal[]" id="studio" value="studio" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Studio = !this.Studio" class="apartment-type-btn" type="button" :class="{'apartment-type-btn-active' : this.Studio === true}">
                                                                                <span class="Button__text">Студия</span>
                                                                            </button>
                                                                        </label>
                                                                        <label for="studio" class="apartment-type_label">
                                                                            <input v-if="Room1" name="roomstotal[]" id="studio" value="1" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Room1 = !this.Room1" class="apartment-type-btn apartment-type-btn-border" type="button" :class="{'apartment-type-btn-active' : this.Room1 === true}">
                                                                                <span class="Button__text">1</span>
                                                                            </button>
                                                                        </label>
                                                                        <label for="studio" class="apartment-type_label">
                                                                            <input v-if="Room2" name="roomstotal[]" id="studio" value="2" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Room2 = !this.Room2" class="apartment-type-btn apartment-type-btn-border" type="button" :class="{'apartment-type-btn-active' : this.Room2 === true}">
                                                                                <span class="Button__text">2</span>
                                                                            </button>
                                                                        </label>
                                                                        <label for="studio" class="apartment-type_label">
                                                                            <input v-if="Room3" name="roomstotal[]" id="studio" value="3" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Room3 = !this.Room3" class="apartment-type-btn apartment-type-btn-border" type="button" :class="{'apartment-type-btn-active' : this.Room3 === true}">
                                                                                <span class="Button__text">3</span>
                                                                            </button>
                                                                        </label>
                                                                        <label for="room4" class="apartment-type_label">
                                                                            <input v-if="Room4"  name="roomstotal[]" id="room4" value="4" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Room4 = !this.Room4" class="apartment-type-btn apartment-type-btn-border" type="button" :class="{'apartment-type-btn-active' : this.Room4 === true}">
                                                                                <span class="Button__text">4+</span>
                                                                            </button>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div v-if="selectedCity1 === 'house'" class="filters-wrapper-item filters-wrapper-item-container-2 FiltersFormField_name_roomsTotal FiltersFormField">
                                                                    <MultiSelect v-model="houseType" :options="typesHouse" optionLabel="name" placeholder="Тип" display="chip" />
                                                                </div>
                                                                <div v-if="selectedCity1 === 'garage'" class="filters-wrapper-item filters-wrapper-item-container-2 FiltersFormField_name_roomsTotal FiltersFormField">
                                                                    <MultiSelect v-model="garageType" :options="typesGarage" optionLabel="name" placeholder="Тип" display="chip" />
                                                                </div>
                                                                <div v-if="selectedCity1 === 'commercial'" class="filters-wrapper-item filters-wrapper-item-container-2 FiltersFormField_name_roomsTotal FiltersFormField">
                                                                    <MultiSelect v-model="commercialType" :options="typesCommercial" optionLabel="name" placeholder="Тип" display="chip" />
                                                                </div>
                                                                <div class="filters-wrapper-item filters-wrapper-item-container-2 FiltersFormField_name_price-type FiltersFormField">
                                                                    <div class="filter-price-type d-flex align-items-center filters-wrapper-item-padding">
                                                                        <div class="filter-price-type-wrapper">
                                                                            <div class="filter-price-type-wrapper-item">
                                                                                <span class="TextInput__box">
                                                                                    <input type="text" class="TextInput__control" id="filters_control_price_from" name="priceMin" value="" placeholder="Цена от" maxlength="15" autocomplete="off" inputmode="numeric">
                                                                                </span>
                                                                            </div>
                                                                            <span class="NumberRange__separator">–</span>
                                                                            <div class="filter-price-type-wrapper-item">
                                                                                <span class="TextInput__box">
                                                                                    <input type="text" class="TextInput__control" id="filters_control_price_from" name="priceMax" value="" placeholder="до" maxlength="15" autocomplete="off" inputmode="numeric">
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="filters-wrapper-item filters-wrapper-item-container-2 FiltersFormField FiltersFormField_name_address">
                                                                    <div class="filter-price-type d-flex align-items-center filters-wrapper-item-padding w-100">
                                                                        <span class="TextInput__box w-100">
                                                                            <input type="text" class="TextInput__control" value="" placeholder="Адрес, ЖК или Ж/Д станция" maxlength="200" autocomplete="off">
                                                                        </span>
                                                                        <label class="TextInput__extra">
                                                                            <div class="FiltersFormField__refinements">
                                                                                <div class="FiltersFormField__refinements-selector">
                                                                                    <span class="Link Link_js_inited Link_size_xxl Link_theme_islands" role="button">Метро</span>
                                                                                    <span class="Link Link_js_inited Link_size_xxl Link_theme_islands" role="button">Район</span>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="filters-wrapper w-100 d-flex">
                                                            <div class="filters-button-container d-flex justify-content-end w-100">
                                                                <div class="FiltersFormField_name_map-submit">
                                                                    <div class="FormField__control w-100">
                                                                        <a href="#!" class="Button Button_js_inited Button_size_xxl Button_theme_realty Button_type_link Button_view_white w-100" role="link">
                                                                            <span class="Button__text">
                                                                                <img src="images/icons/location.png" alt="location" class="map-location-img IconSvg">
                                                                                Смотреть на карте
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="FiltersFormField_name_counter-submit">
                                                                    <div class="w-100">
                                                                        <button class="Button w-100 Button_size_xxl Button_view_yellow Button_theme_realty">
                                                                            <span class="Button__text d-block">Показать</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <!-- Desktop Filter end -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="agent-single-div-header-background"></div>
                <div class="agent-single-div-header-banner"></div>
            </div>
            
            <!-- Mobile Filter start -->
            <div v-if="!DesktopFilter"  class="mobile-filter realtor__info-main-filter-filters">
                <div class="mobile-filter-view">
                    <form autocomplete="off">
                        <div class="mobile-filter-view-box">
                            <div class="mobile-filter-view-tabs">
                                <ul class="mobile-filter-view-tabs-ul">
                                    <li class="mobile-filter-view-tabs-ul-li">
                                        <button @click="active4 = 0" class="mobile-filter-view-tabs-btn" :class="{'mobile-filter-view-tabs-btn-active' : active4 === 0}" type="button">
                                            Купить
                                        </button>
                                    </li>
                                    <li class="mobile-filter-view-tabs-ul-li">
                                        <button @click="active4 = 1" class="mobile-filter-view-tabs-btn" :class="{'mobile-filter-view-tabs-btn-active' : active4 === 1}" type="button">
                                            Снять
                                        </button>
                                    </li>
                                    <li class="mobile-filter-view-tabs-ul-li">
                                        <button @click="active4 = 2" class="mobile-filter-view-tabs-btn" :class="{'mobile-filter-view-tabs-btn-active' : active4 === 2}" type="button">
                                            Посуточно
                                        </button>
                                    </li>
                                </ul>
                                <div class="mobile-filter-view-tabs-view">
                                    <TabView ref="tabview5" v-model:activeIndex="active4">
                                        <TabPanel>
                                            <div class="mobile-filter-view-tabs-view-item">
                                                <Dropdown v-model="selectedCity1" :options="cities" optionLabel="name" optionValue="code" placeholder="Выберите тип" class="w-100" />
                                            </div>
                                            <div v-if="selectedCity1 === 'apartment'" class="mobile-filter-view-tabs-view-item">
                                                <div class="mobile-filter-apartment-types">
                                                    <label for="all-types" class="mobile-filter-apartment-types-label" :class="{'active' : this.typeApartment == 'all-types'}">
                                                        <input v-model="typeApartment" id="all-types" type="radio" value="all-types" tabindex="0">
                                                        Все
                                                    </label>
                                                    <label for="new-buildings" class="mobile-filter-apartment-types-label" :class="{'active' : this.typeApartment == 'new-buildings'}">
                                                        <input v-model="typeApartment" id="new-buildings" type="radio" value="new-buildings" tabindex="0">
                                                        Новостройка
                                                    </label>
                                                    <label for="resale" class="mobile-filter-apartment-types-label" :class="{'active' : this.typeApartment == 'resale'}">
                                                        <input v-model="typeApartment" id="resale" type="radio" value="resale" tabindex="0">
                                                        Вторичка
                                                    </label>
                                                </div>
                                            </div>
                                            <div v-if="selectedCity1 === 'house'" class="mobile-filter-view-tabs-view-item">
                                                <div class="mobile-filter-apartment-types">
                                                    <label for="all-types" class="mobile-filter-apartment-types-label" :class="{'active' : this.typeHouse == 'all-types'}">
                                                        <input v-model="typeHouse" id="all-types" type="radio" value="all-types" tabindex="0">
                                                        Все
                                                    </label>
                                                    <label for="cottage" class="mobile-filter-apartment-types-label" :class="{'active' : this.typeHouse == 'cottage'}">
                                                        <input v-model="typeHouse" id="cottage" type="radio" value="cottage" tabindex="0">
                                                        Коттеджный пос.
                                                    </label>
                                                    <label for="resale" class="mobile-filter-apartment-types-label" :class="{'active' : this.typeHouse == 'resale'}">
                                                        <input v-model="typeHouse" id="resale" type="radio" value="resale" tabindex="0">
                                                        Вторичка
                                                    </label>
                                                </div>
                                            </div>
                                            <div v-if="selectedCity1 === 'house' || selectedCity1 === 'garage' || selectedCity1 === 'commercial'" class="mobile-filter-view-tabs-view-item">
                                                <div>
                                                    <div>
                                                        <label class="mobile-filter-view-tabs-view-item-label">
                                                            {{ selectedCity1 == 'house' ? 'Тип дома' : selectedCity1 == 'garage' ? 'Тип гаража' : 'Тип коммерческой недвижимости' }}
                                                        </label>
                                                    </div>
                                                    <div class="mobile-filter-view-tabs-view-item-content-wrapper">
                                                        <div class="mobile-filter-views-house-container">
                                                            <div class="mobile-filter-views-house-item w-100">
                                                                <button data-toggle="modal" data-target="#typeHouseModal"  class="d-flex align-items-center justify-content-between w-100 mobile-filter-views-house-item-btn" type="button">
                                                                    <span>{{ selectedCity1 == 'house' ? 'Тип дома' : selectedCity1 == 'garage' ? 'Тип гаража' : 'Тип коммерческой недвижимости' }}</span>
                                                                    <span>неважно</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-if="selectedCity1 === 'apartment'" class="mobile-filter-view-tabs-view-item">
                                                <div>
                                                    <div>
                                                        <label class="mobile-filter-view-tabs-view-item-label">
                                                            Количество комнат
                                                        </label>
                                                    </div>
                                                    <div class="mobile-filter-view-tabs-view-item-content-wrapper">
                                                        <div class="w-100">
                                                            <div class="">
                                                                <div class="mobile-filter-views-room-types">
                                                                    <div class="mobile-filter-views-room-item">
                                                                        <label for="room1" class="apartment-type_label">
                                                                            <input v-if="Room1" name="roomstotal[]" id="room1" value="room-1" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Room1 = !this.Room1" class="apartment-type-btn" type="button" :class="{'active' : this.Room1 === true}">
                                                                                <span class="Button__text">1</span>
                                                                            </button>
                                                                        </label>
                                                                    </div>
                                                                    <div class="mobile-filter-views-room-item">
                                                                        <label for="room2" class="apartment-type_label">
                                                                            <input v-if="Room2" name="roomstotal[]" id="room2" value="room-2" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Room2 = !this.Room2" class="apartment-type-btn" type="button" :class="{'active' : this.Room2 === true}">
                                                                                <span class="Button__text">2</span>
                                                                            </button>
                                                                        </label>
                                                                    </div>
                                                                    <div class="mobile-filter-views-room-item">
                                                                        <label for="room3" class="apartment-type_label">
                                                                            <input v-if="Room3" name="roomstotal[]" id="room3" value="room-3" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Room3 = !this.Room3" class="apartment-type-btn" type="button" :class="{'active' : this.Room3 === true}">
                                                                                <span class="Button__text">3</span>
                                                                            </button>
                                                                        </label>
                                                                    </div>
                                                                    <div class="mobile-filter-views-room-item">
                                                                        <label for="room4" class="apartment-type_label">
                                                                            <input v-if="Room4" name="roomstotal[]" id="room4" value="room-4" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Room4 = !this.Room4" class="apartment-type-btn" type="button" :class="{'active' : this.Room4 === true}">
                                                                                <span class="Button__text">4+</span>
                                                                            </button>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div class="w-100 mt-3">
                                                                    <div class="mobile-filter-views-room-item w-100">
                                                                        <label for="studio" class="apartment-type_label w-100">
                                                                            <input v-if="Studio" name="roomstotal[]" id="studio" value="studio" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Studio = !this.Studio" class="apartment-type-btn" type="button" :class="{'active' : this.Studio === true}">
                                                                                <span class="Button__text">Студия</span>
                                                                            </button>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mobile-filter-view-tabs-view-item">
                                                <div>
                                                    <div>
                                                        <label class="mobile-filter-view-tabs-view-item-label">
                                                            Цена <b>сум</b>
                                                        </label>
                                                    </div>
                                                    <div class="mobile-filter-view-tabs-view-item-content-wrapper">
                                                        <div>
                                                            <div class="w-100 d-flex align-items-center">
                                                                <div class="w-100 d-flex" style="flex-grow: 1;">
                                                                    <span class="mobile-filter-view-tabs-view-item-content-price-span">
                                                                        <input type="text" class="mobile-filter-view-tabs-view-item-content-price-span-input" id="filter-price-min" minlength="0"  maxlength="16" autocomplete="off" placeholder="от" name="price_min">
                                                                    </span>
                                                                    <span class="mobile-filter-view-tabs-view-item-content-price-span">
                                                                        <input type="text" class="mobile-filter-view-tabs-view-item-content-price-span-input" id="filter-price-max" minlength="0"  maxlength="16" autocomplete="off" placeholder="до" name="price_max">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-if="selectedCity1 === 'apartment' || selectedCity1 === 'commercial'" class="mobile-filter-view-tabs-view-item">
                                                <div class="mobile-filter-apartment-types mobile-filter-price-types">
                                                    <label for="for-all" class="mobile-filter-apartment-types-label" :class="{'active' : this.typePrice == 'for-all'}">
                                                        <input v-model="typePrice" id="for-all" type="radio" value="for-all" tabindex="0">
                                                        За всё
                                                    </label>
                                                    <label for="per_m²" class="mobile-filter-apartment-types-label" :class="{'active' : this.typePrice == 'per_m²'}">
                                                        <input v-model="typePrice" id="per_m²" type="radio" value="per_m²" tabindex="0">
                                                        За м²
                                                    </label>
                                                </div>
                                            </div>
                                            <div v-if="selectedCity1 === 'plot'" class="mobile-filter-view-tabs-view-item">
                                                <div class="mobile-filter-apartment-types mobile-filter-price-types">
                                                    <label for="for-all" class="mobile-filter-apartment-types-label" :class="{'active' : this.typePrice == 'for-all'}">
                                                        <input v-model="typePrice" id="for-all" type="radio" value="for-all" tabindex="0">
                                                        За всё
                                                    </label>
                                                    <label for="per_hundred" class="mobile-filter-apartment-types-label" :class="{'active' : this.typePrice == 'per_hundred'}">
                                                        <input v-model="typePrice" id="per_hundred" type="radio" value="per_hundred" tabindex="0">
                                                        За сот
                                                    </label>
                                                </div>
                                            </div>
                                            <div v-if="selectedCity1 != 'garage'" class="mobile-filter-view-tabs-view-item">
                                                <div>
                                                    <div>
                                                        <label class="mobile-filter-view-tabs-view-item-label">
                                                            Площадь <b>{{ selectedCity1 === 'plot' ? 'сот.' : 'м²' }}</b>
                                                        </label>
                                                    </div>
                                                    <div class="mobile-filter-view-tabs-view-item-content-wrapper">
                                                        <div>
                                                            <div class="w-100 d-flex align-items-center">
                                                                <div class="w-100 d-flex" style="flex-grow: 1;">
                                                                    <span class="mobile-filter-view-tabs-view-item-content-price-span">
                                                                        <input type="text" class="mobile-filter-view-tabs-view-item-content-price-span-input" id="filter-area-min" minlength="0"  maxlength="16" autocomplete="off" placeholder="от" name="area_min">
                                                                    </span>
                                                                    <span class="mobile-filter-view-tabs-view-item-content-price-span">
                                                                        <input type="text" class="mobile-filter-view-tabs-view-item-content-price-span-input" id="filter-area-max" minlength="0"  maxlength="16" autocomplete="off" placeholder="до" name="area_max">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mobile-filter-view-tabs-view-item">
                                                <div>
                                                    <!-- <div>
                                                        <label class="mobile-filter-view-tabs-view-item-label">
                                                            Цена <b>сум</b>
                                                        </label>
                                                    </div> -->
                                                    <div class="mobile-filter-view-tabs-view-item-content-wrapper">
                                                        <div>
                                                            <div class="w-100 d-flex align-items-center">
                                                                <div class="w-100" style="flex-grow: 1;">
                                                                    <span class="mobile-filter-view-tabs-view-item-content-price-span">
                                                                        <input type="text" class="mobile-filter-view-tabs-view-item-content-address-span-input" id="address" minlength="0"  maxlength="255" autocomplete="off" name="address-name" placeholder="Город, адрес, метро, район">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div class="mobile-filter-view-tabs-view-item">
                                                <Dropdown v-model="selectedCity1" :options="cities" optionLabel="name" optionValue="code" placeholder="Выберите тип" class="w-100" />
                                            </div>
                                            <div v-if="selectedCity1 === 'apartment'" class="mobile-filter-view-tabs-view-item">
                                                <div>
                                                    <div>
                                                        <label class="mobile-filter-view-tabs-view-item-label">
                                                            Количество комнат
                                                        </label>
                                                    </div>
                                                    <div class="mobile-filter-view-tabs-view-item-content-wrapper">
                                                        <div class="w-100">
                                                            <div class="">
                                                                <div class="mobile-filter-views-room-types">
                                                                    <div class="mobile-filter-views-room-item">
                                                                        <label for="room1" class="apartment-type_label">
                                                                            <input v-if="Room1" name="roomstotal[]" id="room1" value="room-1" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Room1 = !this.Room1" class="apartment-type-btn" type="button" :class="{'active' : this.Room1 === true}">
                                                                                <span class="Button__text">1</span>
                                                                            </button>
                                                                        </label>
                                                                    </div>
                                                                    <div class="mobile-filter-views-room-item">
                                                                        <label for="room2" class="apartment-type_label">
                                                                            <input v-if="Room2" name="roomstotal[]" id="room2" value="room-2" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Room2 = !this.Room2" class="apartment-type-btn" type="button" :class="{'active' : this.Room2 === true}">
                                                                                <span class="Button__text">2</span>
                                                                            </button>
                                                                        </label>
                                                                    </div>
                                                                    <div class="mobile-filter-views-room-item">
                                                                        <label for="room3" class="apartment-type_label">
                                                                            <input v-if="Room3" name="roomstotal[]" id="room3" value="room-3" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Room3 = !this.Room3" class="apartment-type-btn" type="button" :class="{'active' : this.Room3 === true}">
                                                                                <span class="Button__text">3</span>
                                                                            </button>
                                                                        </label>
                                                                    </div>
                                                                    <div class="mobile-filter-views-room-item">
                                                                        <label for="room4" class="apartment-type_label">
                                                                            <input v-if="Room4" name="roomstotal[]" id="room4" value="room-4" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Room4 = !this.Room4" class="apartment-type-btn" type="button" :class="{'active' : this.Room4 === true}">
                                                                                <span class="Button__text">4+</span>
                                                                            </button>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div class="w-100 mt-3">
                                                                    <div class="mobile-filter-views-room-item w-100">
                                                                        <label for="studio" class="apartment-type_label w-100">
                                                                            <input v-if="Studio" name="roomstotal[]" id="studio" value="studio" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Studio = !this.Studio" class="apartment-type-btn" type="button" :class="{'active' : this.Studio === true}">
                                                                                <span class="Button__text">Студия</span>
                                                                            </button>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-if="selectedCity1 === 'house' || selectedCity1 === 'garage' || selectedCity1 === 'commercial'" class="mobile-filter-view-tabs-view-item">
                                                <div>
                                                    <div>
                                                        <label class="mobile-filter-view-tabs-view-item-label">
                                                            {{ selectedCity1 == 'house' ? 'Тип дома' : selectedCity1 == 'garage' ? 'Тип гаража' : 'Тип коммерческой недвижимости' }}
                                                        </label>
                                                    </div>
                                                    <div class="mobile-filter-view-tabs-view-item-content-wrapper">
                                                        <div class="mobile-filter-views-house-container">
                                                            <div class="mobile-filter-views-house-item w-100">
                                                                <button data-toggle="modal" data-target="#typeHouseModal"  class="d-flex align-items-center justify-content-between w-100 mobile-filter-views-house-item-btn" type="button">
                                                                    <span>{{ selectedCity1 == 'house' ? 'Тип дома' : selectedCity1 == 'garage' ? 'Тип гаража' : 'Тип коммерческой недвижимости' }}</span>
                                                                    <span>неважно</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mobile-filter-view-tabs-view-item">
                                                <div>
                                                    <div>
                                                        <label class="mobile-filter-view-tabs-view-item-label">
                                                            Цена <b>сум</b>
                                                        </label>
                                                    </div>
                                                    <div class="mobile-filter-view-tabs-view-item-content-wrapper">
                                                        <div>
                                                            <div class="w-100 d-flex align-items-center">
                                                                <div class="w-100 d-flex" style="flex-grow: 1;">
                                                                    <span class="mobile-filter-view-tabs-view-item-content-price-span">
                                                                        <input type="text" class="mobile-filter-view-tabs-view-item-content-price-span-input" id="filter-price-min" minlength="0"  maxlength="16" autocomplete="off" placeholder="от" name="price_min">
                                                                    </span>
                                                                    <span class="mobile-filter-view-tabs-view-item-content-price-span">
                                                                        <input type="text" class="mobile-filter-view-tabs-view-item-content-price-span-input" id="filter-price-max" minlength="0"  maxlength="16" autocomplete="off" placeholder="до" name="price_max">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-if="selectedCity1 === 'commercial'" class="mobile-filter-view-tabs-view-item">
                                                <div class="mobile-filter-apartment-types mobile-filter-price-types">
                                                    <label for="for-all" class="mobile-filter-apartment-types-label" :class="{'active' : this.typePrice == 'for-all'}">
                                                        <input v-model="typePrice" id="for-all" type="radio" value="for-all" tabindex="0">
                                                        За всё
                                                    </label>
                                                    <label for="per_m²" class="mobile-filter-apartment-types-label" :class="{'active' : this.typePrice == 'per_m²'}">
                                                        <input v-model="typePrice" id="per_m²" type="radio" value="per_m²" tabindex="0">
                                                        За м²
                                                    </label>
                                                </div>
                                            </div>
                                            <div v-if="selectedCity1 != 'garage'" class="mobile-filter-view-tabs-view-item">
                                                <div>
                                                    <div>
                                                        <label class="mobile-filter-view-tabs-view-item-label">
                                                            Площадь <b>{{ selectedCity1 === 'plot' ? 'сот.' : 'м²' }}</b>
                                                        </label>
                                                    </div>
                                                    <div class="mobile-filter-view-tabs-view-item-content-wrapper">
                                                        <div>
                                                            <div class="w-100 d-flex align-items-center">
                                                                <div class="w-100 d-flex" style="flex-grow: 1;">
                                                                    <span class="mobile-filter-view-tabs-view-item-content-price-span">
                                                                        <input type="text" class="mobile-filter-view-tabs-view-item-content-price-span-input" id="filter-area-min" minlength="0"  maxlength="16" autocomplete="off" placeholder="от" name="area_min">
                                                                    </span>
                                                                    <span class="mobile-filter-view-tabs-view-item-content-price-span">
                                                                        <input type="text" class="mobile-filter-view-tabs-view-item-content-price-span-input" id="filter-area-max" minlength="0"  maxlength="16" autocomplete="off" placeholder="до" name="area_max">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mobile-filter-view-tabs-view-item">
                                                <div>
                                                    <!-- <div>
                                                        <label class="mobile-filter-view-tabs-view-item-label">
                                                            Цена <b>сум</b>
                                                        </label>
                                                    </div> -->
                                                    <div class="mobile-filter-view-tabs-view-item-content-wrapper">
                                                        <div>
                                                            <div class="w-100 d-flex align-items-center">
                                                                <div class="w-100" style="flex-grow: 1;">
                                                                    <span class="mobile-filter-view-tabs-view-item-content-price-span">
                                                                        <input type="text" class="mobile-filter-view-tabs-view-item-content-address-span-input" id="address" minlength="0"  maxlength="255" autocomplete="off" name="address-name" placeholder="Город, адрес, метро, район">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div class="mobile-filter-view-tabs-view-item">
                                                <Dropdown v-model="selectedCity1" :options="hourlyType" optionLabel="name" optionValue="code" placeholder="Выберите тип" class="w-100" />
                                            </div>
                                            <div v-if="selectedCity1 === 'apartment'" class="mobile-filter-view-tabs-view-item">
                                                <div>
                                                    <div>
                                                        <label class="mobile-filter-view-tabs-view-item-label">
                                                            Количество комнат
                                                        </label>
                                                    </div>
                                                    <div class="mobile-filter-view-tabs-view-item-content-wrapper">
                                                        <div class="w-100">
                                                            <div class="">
                                                                <div class="mobile-filter-views-room-types">
                                                                    <div class="mobile-filter-views-room-item">
                                                                        <label for="room1" class="apartment-type_label">
                                                                            <input v-if="Room1" name="roomstotal[]" id="room1" value="room-1" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Room1 = !this.Room1" class="apartment-type-btn" type="button" :class="{'active' : this.Room1 === true}">
                                                                                <span class="Button__text">1</span>
                                                                            </button>
                                                                        </label>
                                                                    </div>
                                                                    <div class="mobile-filter-views-room-item">
                                                                        <label for="room2" class="apartment-type_label">
                                                                            <input v-if="Room2" name="roomstotal[]" id="room2" value="room-2" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Room2 = !this.Room2" class="apartment-type-btn" type="button" :class="{'active' : this.Room2 === true}">
                                                                                <span class="Button__text">2</span>
                                                                            </button>
                                                                        </label>
                                                                    </div>
                                                                    <div class="mobile-filter-views-room-item">
                                                                        <label for="room3" class="apartment-type_label">
                                                                            <input v-if="Room3" name="roomstotal[]" id="room3" value="room-3" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Room3 = !this.Room3" class="apartment-type-btn" type="button" :class="{'active' : this.Room3 === true}">
                                                                                <span class="Button__text">3</span>
                                                                            </button>
                                                                        </label>
                                                                    </div>
                                                                    <div class="mobile-filter-views-room-item">
                                                                        <label for="room4" class="apartment-type_label">
                                                                            <input v-if="Room4" name="roomstotal[]" id="room4" value="room-4" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Room4 = !this.Room4" class="apartment-type-btn" type="button" :class="{'active' : this.Room4 === true}">
                                                                                <span class="Button__text">4+</span>
                                                                            </button>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div class="w-100 mt-3">
                                                                    <div class="mobile-filter-views-room-item w-100">
                                                                        <label for="studio" class="apartment-type_label w-100">
                                                                            <input v-if="Studio" name="roomstotal[]" id="studio" value="studio" type="hidden" class="apartment-type_label-input" tabindex="0">
                                                                            <button @click="this.Studio = !this.Studio" class="apartment-type-btn" type="button" :class="{'active' : this.Studio === true}">
                                                                                <span class="Button__text">Студия</span>
                                                                            </button>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-if="selectedCity1 === 'house'" class="mobile-filter-view-tabs-view-item">
                                                <div>
                                                    <div>
                                                        <label class="mobile-filter-view-tabs-view-item-label">
                                                            {{ selectedCity1 == 'house' ? 'Тип дома' : selectedCity1 == 'garage' ? 'Тип гаража' : 'Тип коммерческой недвижимости' }}
                                                        </label>
                                                    </div>
                                                    <div class="mobile-filter-view-tabs-view-item-content-wrapper">
                                                        <div class="mobile-filter-views-house-container">
                                                            <div class="mobile-filter-views-house-item w-100">
                                                                <button data-toggle="modal" data-target="#typeHouseModal"  class="d-flex align-items-center justify-content-between w-100 mobile-filter-views-house-item-btn" type="button">
                                                                    <span>{{ selectedCity1 == 'house' ? 'Тип дома' : selectedCity1 == 'garage' ? 'Тип гаража' : 'Тип коммерческой недвижимости' }}</span>
                                                                    <span>неважно</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mobile-filter-view-tabs-view-item">
                                                <div>
                                                    <div>
                                                        <label class="mobile-filter-view-tabs-view-item-label">
                                                            Цена <b>сум</b>
                                                        </label>
                                                    </div>
                                                    <div class="mobile-filter-view-tabs-view-item-content-wrapper">
                                                        <div>
                                                            <div class="w-100 d-flex align-items-center">
                                                                <div class="w-100 d-flex" style="flex-grow: 1;">
                                                                    <span class="mobile-filter-view-tabs-view-item-content-price-span">
                                                                        <input type="text" class="mobile-filter-view-tabs-view-item-content-price-span-input" id="filter-price-min" minlength="0"  maxlength="16" autocomplete="off" placeholder="от" name="price_min">
                                                                    </span>
                                                                    <span class="mobile-filter-view-tabs-view-item-content-price-span">
                                                                        <input type="text" class="mobile-filter-view-tabs-view-item-content-price-span-input" id="filter-price-max" minlength="0"  maxlength="16" autocomplete="off" placeholder="до" name="price_max">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  class="mobile-filter-view-tabs-view-item">
                                                <div>
                                                    <div>
                                                        <label class="mobile-filter-view-tabs-view-item-label">
                                                            Площадь <b>{{ selectedCity1 === 'plot' ? 'сот.' : 'м²' }}</b>
                                                        </label>
                                                    </div>
                                                    <div class="mobile-filter-view-tabs-view-item-content-wrapper">
                                                        <div>
                                                            <div class="w-100 d-flex align-items-center">
                                                                <div class="w-100 d-flex" style="flex-grow: 1;">
                                                                    <span class="mobile-filter-view-tabs-view-item-content-price-span">
                                                                        <input type="text" class="mobile-filter-view-tabs-view-item-content-price-span-input" id="filter-area-min" minlength="0"  maxlength="16" autocomplete="off" placeholder="от" name="area_min">
                                                                    </span>
                                                                    <span class="mobile-filter-view-tabs-view-item-content-price-span">
                                                                        <input type="text" class="mobile-filter-view-tabs-view-item-content-price-span-input" id="filter-area-max" minlength="0"  maxlength="16" autocomplete="off" placeholder="до" name="area_max">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mobile-filter-view-tabs-view-item">
                                                <div>
                                                    <!-- <div>
                                                        <label class="mobile-filter-view-tabs-view-item-label">
                                                            Цена <b>сум</b>
                                                        </label>
                                                    </div> -->
                                                    <div class="mobile-filter-view-tabs-view-item-content-wrapper">
                                                        <div>
                                                            <div class="w-100 d-flex align-items-center">
                                                                <div class="w-100" style="flex-grow: 1;">
                                                                    <span class="mobile-filter-view-tabs-view-item-content-price-span">
                                                                        <input type="text" class="mobile-filter-view-tabs-view-item-content-address-span-input" id="address" minlength="0"  maxlength="255" autocomplete="off" name="address-name" placeholder="Город, адрес, метро, район">
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    </TabView>
                                    <!-- Modal -->
                                    <div class="mobile-filter-views-house-modal">
                                        <div class="modal" id="typeHouseModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"  aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                                                <div v-if="selectedCity1 === 'house'" class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title text-center" id="exampleModalLabel">Тип дома</h5>
                                                    </div>
                                                    <div class="modal-body p-0">
                                                        <div class="modal-body-form">
                                                            <form>
                                                                <div class="FiltersFormFieldPanel__controls">
                                                                    <div class="mt-4">
                                                                        <div class="d-flex flex-column">
                                                                            <div v-for="(item, index) in typesHouse" :key="item.code" class="mobile-filter-views-house-modal-item">
                                                                                <div class="Tumbler__title">{{ item.name }}</div>
                                                                                <InputSwitch v-model="checked1[index]" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="FiltersFormFieldPanel__actions">
                                                                    <button  data-dismiss="modal" aria-label="Close" class="Button Button_js_inited Button_size_l Button_theme_islands Button_type_button FiltersFormFieldPanel__cancel" type="button"><span class="Button__text">Отменить</span></button>
                                                                    <button class="Button Button_js_inited Button_size_l Button_theme_realty Button_type_button Button_theme_islands Button_view_yellow FiltersFormFieldPanel__save" type="submit"><span class="Button__text d-block">Поиск</span></button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-if="selectedCity1 === 'garage'" class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title text-center" id="exampleModalLabel">Тип гаража</h5>
                                                    </div>
                                                    <div class="modal-body p-0">
                                                        <div class="modal-body-form">
                                                            <form>
                                                                <div class="FiltersFormFieldPanel__controls">
                                                                    <div class="mt-4">
                                                                        <div class="d-flex flex-column">
                                                                            <div v-for="(item, index) in typesGarage" :key="item.code" class="mobile-filter-views-house-modal-item">
                                                                                <div class="Tumbler__title">{{ item.name }}</div>
                                                                                <InputSwitch v-model="checked1[index]" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="FiltersFormFieldPanel__actions">
                                                                    <button  data-dismiss="modal" aria-label="Close" class="Button Button_js_inited Button_size_l Button_theme_islands Button_type_button FiltersFormFieldPanel__cancel" type="button"><span class="Button__text">Отменить</span></button>
                                                                    <button class="Button Button_js_inited Button_size_l Button_theme_realty Button_type_button Button_theme_islands Button_view_yellow FiltersFormFieldPanel__save" type="submit"><span class="Button__text d-block">Поиск</span></button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div v-if="selectedCity1 === 'commercial'" class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title text-center" id="exampleModalLabel">Тип коммерческой недвижимости</h5>
                                                    </div>
                                                    <div class="modal-body p-0">
                                                        <div class="modal-body-form">
                                                            <form>
                                                                <div class="FiltersFormFieldPanel__controls">
                                                                    <div class="mt-4">
                                                                        <div class="d-flex flex-column">
                                                                            <div v-for="(item, index) in typesCommercial" :key="item.code" class="mobile-filter-views-house-modal-item">
                                                                                <div class="Tumbler__title">{{ item.name }}</div>
                                                                                <InputSwitch v-model="checked1[index]" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="FiltersFormFieldPanel__actions">
                                                                    <button  data-dismiss="modal" aria-label="Close" class="Button Button_js_inited Button_size_l Button_theme_islands Button_type_button FiltersFormFieldPanel__cancel" type="button"><span class="Button__text">Отменить</span></button>
                                                                    <button class="Button Button_js_inited Button_size_l Button_theme_realty Button_type_button Button_theme_islands Button_view_yellow FiltersFormFieldPanel__save" type="submit"><span class="Button__text d-block">Поиск</span></button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Modal -->
                                    
                                    <!-- mobile-filter-views Buttons  -->
                                    <div class="mobile-filter-views-buttons-container">
                                        <div class="FormFieldSet__controls Grid">
                                            <div class="mobile-filter-views-btn GridCell_size_3">
                                                <button class="w-100 mobile-filter-views-btn-block" type="button">
                                                    <img src="images/icons/location.png" alt="location" class="map-location-img IconSvg">
                                                    <span class="Button__text">На карте</span>
                                                </button>
                                            </div>
                                            <div class="mobile-filter-views-btn GridCell_size_5">
                                                <button class="w-100 mobile-filter-views-btn-block button-yellow" type="button">
                                                    <i class="feather icon-search"></i>
                                                    <span class="Button__text">Найти</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!-- Mobile Filter end -->
            
            <div class="agent-single-div-content my-5">
                <div class="agent-single-div-content-block">
                    <div class="container_fluid">
                        <div class="agent-single-div-content-div">
                            <div class="row flex-lg-row flex-column-reverse">
                                <div class="col-lg-9 col-12">
                                    <div class="agent-single-div-content-div-objects">
                                        <h1 class="agent-single-div-content-div-objects-title">Мои объявления</h1>
                                        <div class="row ml-0 mr-0">
                                            <!-- <div class="col-lg-4 col-md-4 col-sm-6">
                                                <div class="commercial_page_div_objects_lists_item">
                                                    <div class="objects_lists_item_box">
                                                        <div class="objects_lists_item_box_header">
                                                            <div class="objects_lists_item_box_header_carousel w-100">
                                                                <swiper 
                                                                :pagination="{
                                                                    type: 'fraction',
                                                                }"
                                                                :navigation="true" 
                                                                :modules="modules" class="mySwiper"
                                                                >
                                                                    <swiper-slide>
                                                                        <a href="#!" target="_blank" class="text-dark">
                                                                            <picture class="h-auto w-100">
                                                                                <source class="w-100" srcset="images/architecture.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/architecture.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </a>
                                                                    </swiper-slide>
                                                                    <swiper-slide>
                                                                        <a href="#!" target="_blank" class="text-dark">
                                                                            <picture class="h-auto w-100">
                                                                                <source class="w-100" srcset="images/buy_office.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/buy_office.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </a>
                                                                    </swiper-slide>
                                                                </swiper>
                                                            </div>
                                                        </div>
                                                        <div class="objects_lists_item_box_content">
                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                <p class="total_price">46 500 y.e</p>
                                                                <span>652 y.e / м²</span>
                                                            </div>
                                                            <div class="objects_carousel_item_box_content_title">
                                                                <h4><a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a></h4>
                                                            </div>
                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                <a href="#!" class="text-left"><i class="feather icon-map-pin"></i> Юсуфа Хос Ходжиба (улица), Яккасарайский район </a>
                                                            </div>
                                                            <div class="objects_carousel_item_box_content_show_contant mt-3">
                                                                <a href="tel:+998903592284" class="button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3-4 button-root--type-button-reset-8-1-3 button-root-8-1-3 button-root-8-1-3-4 button-root--primary-8-1-3-4 align-items-center">
                                                                    <i class="feather icon-phone mr-2"></i>
                                                                    <span class="button-root__text-8-1-3">
                                                                        Позвонить
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <button class="objects_lists_item_box_btn_saved">
                                                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="_DEYS" style="color: rgb(132, 132, 132);"><path d="M10.72 19.84c-2.58-2.33-4.7-4.26-6.18-6.07-1.48-1.8-2.29-3.46-2.29-5.27A5.2 5.2 0 017.5 3.25c1.57 0 3.08.69 4.12 1.8.2.21.55.21.76 0a5.74 5.74 0 014.12-1.8 5.2 5.2 0 015.25 5.25c0 1.8-.81 3.47-2.29 5.27-1.47 1.8-3.58 3.73-6.15 6.06l-.03.02-.77.7a.75.75 0 01-1.01 0l-.78-.7z"></path></svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> -->
                                            <div class="col-12">
                                                <div class="object-item">
                                                    <div class="object-item-block">
                                                        <div class="object-photos">
                                                            <div class="object-photos-thumb">
                                                                <swiper
                                                                    :style="{
                                                                    '--swiper-navigation-color': '#fff',
                                                                    '--swiper-pagination-color': '#fff',
                                                                    }"
                                                                    :pagination="{
                                                                        type: 'fraction',
                                                                    }"
                                                                    :loop="true"
                                                                    :lazy="true"
                                                                    :spaceBetween="10"
                                                                    :navigation="true"
                                                                    :thumbs="{ swiper: thumbsSwiper }"
                                                                    :modules="modules"
                                                                    class="mySwiper2 w-100"
                                                                >
                                                                    <swiper-slide>
                                                                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" class="swiper-lazy"/>
                                                                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div> 
                                                                    </swiper-slide>
                                                                    <swiper-slide>
                                                                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" class="swiper-lazy"/>
                                                                    </swiper-slide>
                                                                    <swiper-slide>
                                                                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" class="swiper-lazy"/>
                                                                    </swiper-slide>
                                                                    <swiper-slide
                                                                    ><img
                                                                        src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
                                                                    ><swiper-slide
                                                                    ><img
                                                                        src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
                                                                    ><swiper-slide
                                                                    ><img
                                                                        src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
                                                                    ><swiper-slide
                                                                    ><img
                                                                        src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
                                                                    ><swiper-slide
                                                                    ><img
                                                                        src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
                                                                    ><swiper-slide
                                                                    ><img
                                                                        src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
                                                                    ><swiper-slide
                                                                    ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
                                                                    /></swiper-slide>
                                                                </swiper>
                                                            </div>
                                                        </div>
                                                        <div class="object-body">
                                                            <div class="object-body-content">
                                                                <div class="object-details">
                                                                    <div v-if="mobilePrice == true" class="object-price-list d-flex align-items-center">
                                                                        <p class="object-price-list-p">22 500 000 ₽</p>
                                                                        <p class="object-price-list-desc ml-2">264 705$/м²</p>
                                                                    </div>
                                                                    <div class="object-details-item object-details-header">
                                                                        <a class="NXJyid" href="https://domclick.ru/card/sale__flat__1564626862" target="_blank" rel="noopener noreferrer">
                                                                            <span class="title">2-комн. квартира 51 м² 2/9 этаж</span>
                                                                        </a>
                                                                    </div>
                                                                    <div class="object-details-item object-details-address mt-3">
                                                                        <div class="w-100 object-details-item align-items-center">
                                                                            <i class="fas fa-map-marker-alt mr-1"></i>
                                                                            <span class="PjgOZO">Москва, Чертановская улица, 21к1</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="object-details-item mt-3">
                                                                        <div class="object-details-description">
                                                                            СВОБОДНАЯ ПРОДАЖА!   Продается 2-х ком. Кв. м. Южная, ул. Чертановская, д. 21, корп.1 на 2-м этаже 9-ти этажного панельного дома в менее 10-ти минутах пешего хода от метро.  Общая площадь – 51м2, комнаты изолированные – 20  и 15 м2, кухня 7м2, с/у – раздельный.  Окна во двор.  Балкона – нет. Ремонт косметический. Дом располагается в районе с развитой инфраструктурой в шаговой доступности множество популярных сетевых магазинов, ТЦ.  Хорошая транспортная доступность до нескольких станций метро.  
                                                                        </div>
                                                                    </div>
                                                                    <div class="object-details-addtional"></div>
                                                                </div>
                                                                <div v-if="!mobilePrice" class="object-price">
                                                                    <div class="object-price-list">
                                                                        <p class="object-price-list-p">22 500 000 ₽</p>
                                                                        <p class="object-price-list-desc">264 705$/м²</p>
                                                                    </div>
                                                                </div>
                                                                <div v-if="!objectBtns" class="object-actions">
                                                                    <button type="button" class="object-actions-btn" title="Добавить в избранное">
                                                                        <div class="icon-4-0-1">
                                                                            <svg fill="#fff" style="stroke: grey; stroke-width: 1px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                                <path clip-rule="evenodd" d="M1 7C.5 3.5 2.7 2 4.8 2 6.82 2 8 4 8 4s1.17-2 3.2-2c2.1 0 4.3 1.5 3.8 5s-5.83 7-7 7-6.5-3.5-7-7z"></path>
                                                                            </svg>
                                                                        </div>
                                                                    </button>
                                                                    <div>
                                                                        <button type="button" class="object-actions-btn" title="Поделиться объявлением" data-toggle="dropdown">
                                                                            <div class="icon-4-0-1">
                                                                                <div class="icon-4-0-1">
                                                                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                                        <path d="M10.54 2.09l4.1 4.13c.2.2.2.51 0 .7L10.52 11a.3.3 0 01-.51-.21V8.5a.3.3 0 00-.3-.3c-4.94.05-6.1 1.26-6.7 2.97a8.1 8.1 0 00-.3 2.61c0 .21-.26.27-.36.09-4.5-9.06 3.43-9.29 7.39-9.3a.3.3 0 00.3-.3V2.3c0-.27.32-.4.5-.21z"></path>
                                                                                    </svg>
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                        <div class="dropdown-menu dropdown-menu-left">
                                                                            <div class="item">
                                                                                <div class="hint-head-0-9-4">
                                                                                    <div class="hint-title-0-9-4">
                                                                                        <div class="hint-title-content-0-9-4">
                                                                                            <div class="hint-text-wrap-0-9-4 w-100">
                                                                                                <div data-e2e-id="share_hint__title" class="title">Поделиться объявлением</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="hint-content-0-9-4">
                                                                                    <div id="share__content" class="share__content_div">
                                                                                        <div class="share__content_div_socials">
                                                                                            <div>
                                                                                                <a href="#!" title="ok" class="share__content_div_socials_links socials_ok" target="_blank">
                                                                                                    <div class="icon-4-0-1 icon--32-4-0-1">
                                                                                                        <svg fill="currentColor" class="socials_ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 10.8c0-2.73 0-4.1.53-5.14a4.88 4.88 0 012.13-2.13C6.71 3 8.07 3 10.8 3h10.4c2.73 0 4.1 0 5.14.53a4.88 4.88 0 012.13 2.13C29 6.71 29 8.07 29 10.8v10.4c0 2.73 0 4.1-.53 5.14a4.88 4.88 0 01-2.13 2.13c-1.05.53-2.41.53-5.14.53H10.8c-2.73 0-4.1 0-5.14-.53a4.88 4.88 0 01-2.13-2.13C3 25.29 3 23.93 3 21.2V10.8zm13 5.46a4.18 4.18 0 004.15-4.19c0-2.31-1.86-4.2-4.15-4.2a4.18 4.18 0 00-4.15 4.2 4.18 4.18 0 004.15 4.2zm1.72-4.19A1.73 1.73 0 0016 10.33a1.73 1.73 0 00-1.72 1.74A1.73 1.73 0 0016 13.81a1.73 1.73 0 001.72-1.74zm2.37 6.6a7.72 7.72 0 01-2.41 1.01L20 22.03c.45.48.45 1.23 0 1.7a1.2 1.2 0 01-1.72.04L16 21.47l-2.3 2.3c-.22.24-.53.35-.84.35-.32 0-.63-.12-.86-.35l-.02-.02a1.23 1.23 0 01.02-1.72l2.32-2.35a7.68 7.68 0 01-2.4-1 1.24 1.24 0 01-.39-1.7 1.2 1.2 0 011.68-.39 5.22 5.22 0 005.58 0 1.2 1.2 0 011.63.38 1.24 1.24 0 01-.33 1.7z"></path></svg>
                                                                                                    </div>
                                                                                                </a>
                                                                                                <a href="#!" title="wk" class="share__content_div_socials_links socials_wk" target="_blank">
                                                                                                    <div class="icon-4-0-1 icon--32-4-0-1">
                                                                                                        <svg fill="currentColor" class="socials_wk" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.53 5.66C3 6.7 3 8.07 3 10.8v10.4c0 2.73 0 4.1.53 5.14a4.88 4.88 0 002.13 2.13c1.05.53 2.41.53 5.14.53h10.4c2.73 0 4.1 0 5.14-.53a4.88 4.88 0 002.13-2.13c.53-1.05.53-2.41.53-5.14V10.8c0-2.73 0-4.1-.53-5.14a4.88 4.88 0 00-2.13-2.13C25.29 3 23.93 3 21.2 3H10.8c-2.73 0-4.1 0-5.14.53a4.88 4.88 0 00-2.13 2.13zM22.1 21.55H24c.52 0 .8-.28.61-.8a8.21 8.21 0 00-1.6-2.23c-.22-.26-.5-.53-.74-.77s-.46-.45-.55-.58c-.28-.37-.2-.52 0-.85 0 0 2.3-3.27 2.55-4.37.12-.4 0-.7-.57-.7h-1.9c-.47 0-.7.26-.82.54 0 0-.97 2.35-2.33 3.87-.44.44-.64.59-.88.59-.11 0-.3-.15-.3-.55v-3.77c0-.47-.14-.7-.54-.7h-2.98a.46.46 0 00-.47.45c0 .17.1.3.22.46.2.25.48.6.53 1.4v2.78c0 .6-.11.72-.35.72-.64 0-2.2-2.37-3.14-5.07-.18-.51-.37-.73-.84-.73H8c-.52 0-.63.26-.63.53 0 .51.64 3 2.99 6.3 1.56 2.25 3.78 3.46 5.78 3.46 1.2 0 1.35-.27 1.35-.73v-1.7c0-.54.11-.65.5-.65.28 0 .77.15 1.9 1.23.36.37.64.69.87.95.57.63.83.92 1.34.92z"></path></svg>
                                                                                                    </div>
                                                                                                </a>
                                                                                                <a href="#!" title="whatsapp" class="share__content_div_socials_links socials_ws" target="_blank">
                                                                                                    <div class="icon-4-0-1 icon--32-4-0-1">
                                                                                                        <svg fill="currentColor" class="socials_ws" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.75 22.42a8.08 8.08 0 004.43 1.32 8.03 8.03 0 008.04-8c0-4.4-3.6-7.98-8.05-7.98a8.03 8.03 0 00-8.05 7.99c0 1.75.57 3.37 1.54 4.68l-1 2.97 3.09-.98zm1.67-11c.23.01.35.03.51.4l.2.47.52 1.26c.06.11.12.27.04.43-.07.15-.14.22-.24.34l-.02.02-.15.17a3.42 3.42 0 00-.2.22c-.12.13-.23.27-.1.5.14.23.61 1 1.3 1.6.83.74 1.52 1.01 1.82 1.13l.08.03c.19.08.42.06.56-.09.16-.16.34-.42.54-.69l.1-.13c.15-.23.36-.26.57-.18.22.08 1.37.64 1.6.76l.14.07c.16.07.27.12.31.2.06.1.06.57-.13 1.11-.2.55-.97 1-1.58 1.13-.42.09-.97.16-2.82-.6-2.2-.9-3.66-3.02-3.96-3.45l-.05-.07-.01-.01a4.5 4.5 0 01-.95-2.4c0-1.1.56-1.67.8-1.92l.03-.02c.19-.2.51-.28.82-.28h.27z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.53 5.66C3 6.7 3 8.07 3 10.8v10.4c0 2.73 0 4.1.53 5.14a4.88 4.88 0 002.13 2.13c1.05.53 2.41.53 5.14.53h10.4c2.73 0 4.1 0 5.14-.53a4.88 4.88 0 002.13-2.13c.53-1.05.53-2.41.53-5.14V10.8c0-2.73 0-4.1-.53-5.14a4.88 4.88 0 00-2.13-2.13C25.29 3 23.93 3 21.2 3H10.8c-2.73 0-4.1 0-5.14.53a4.88 4.88 0 00-2.13 2.13zm3.08 10.09c0-5.25 4.28-9.5 9.57-9.5a9.54 9.54 0 019.57 9.5c0 5.24-4.29 9.5-9.57 9.5a9.6 9.6 0 01-4.63-1.19l-5.3 1.69 1.73-5.1a9.42 9.42 0 01-1.37-4.9z"></path></svg>
                                                                                                    </div>
                                                                                                </a>
                                                                                                <a href="#!" title="viber" class="share__content_div_socials_links socials_vb" target="_blank">
                                                                                                    <div class="icon-4-0-1 icon--32-4-0-1">
                                                                                                        <svg fill="currentColor" class="socials_vb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.2 22.34c.92-.21 3.44-.8 3.9-4.56.54-4.31-.19-7.25-1.62-8.48-.44-.4-2.3-1.57-6.2-1.58 0 0-4.6-.3-6.83 1.72-1.25 1.23-1.67 3.06-1.71 5.29v.22c-.06 2.28-.15 6.3 3.8 7.4l-.02 3.44c0 .2.03.33.14.36.08.02.2-.02.3-.13.65-.65 2.74-3.17 2.74-3.17a17.2 17.2 0 005.5-.51zm-2.87-4.53c-.2.25-.57.22-.57.22-2.67-.69-3.38-3.39-3.38-3.39s-.03-.37.2-.56l.5-.39c.23-.18.38-.63.14-1.07-.41-.73-1-1.51-1.32-1.84-.24-.28-.59-.35-.96-.15a4 4 0 00-.99.8c-.32.38-.5.81-.35 1.28h.01a13.04 13.04 0 003.97 5.82 15.48 15.48 0 004.1 2.26l.02.02c.46.15.9-.03 1.27-.35.34-.31.6-.64.8-.99.2-.38.13-.73-.15-.97-.51-.48-1.26-.99-1.84-1.32-.44-.24-.89-.09-1.07.15l-.38.48zm3.9-2.29a.26.26 0 01-.26.26.26.26 0 01-.26-.25 5.02 5.02 0 00-1.4-3.72 4.82 4.82 0 00-3.45-1.36.26.26 0 01-.26-.26.26.26 0 01.26-.26c1.51.01 2.8.52 3.81 1.51a5.53 5.53 0 011.56 4.08zm-1.63-.27a.26.26 0 00.26-.25 3.55 3.55 0 00-.91-2.57 3.78 3.78 0 00-2.61-1.15.26.26 0 00-.04.52c.99.07 1.73.4 2.27.98a3 3 0 01.77 2.2.26.26 0 00.26.27zm-1.6-.7a.26.26 0 00.27.25h.01a.26.26 0 00.25-.27c-.06-1.15-.68-1.8-1.8-1.85a.26.26 0 00-.03.52c.85.04 1.26.47 1.3 1.36z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.53 5.66C3 6.7 3 8.07 3 10.8v10.4c0 2.73 0 4.1.53 5.14a4.88 4.88 0 002.13 2.13c1.05.53 2.41.53 5.14.53h10.4c2.73 0 4.1 0 5.14-.53a4.88 4.88 0 002.13-2.13c.53-1.05.53-2.41.53-5.14V10.8c0-2.73 0-4.1-.53-5.14a4.88 4.88 0 00-2.13-2.13C25.29 3 23.93 3 21.2 3H10.8c-2.73 0-4.1 0-5.14.53a4.88 4.88 0 00-2.13 2.13zm12.84.6c4.6.02 6.67 1.52 7.18 2 1.7 1.47 2.63 4.73 2 9.89-.56 4.55-3.73 5.36-4.8 5.63l-.25.07c-.28.1-2.82.73-6.12.45-.37.43-.85.98-1.2 1.36l-.3.33c-.47.54-.84.96-1.4.78-.55-.17-.52-1-.52-1v-2.08c-4.82-1.36-4.75-6.36-4.7-9.03.06-2.67.58-4.82 2.05-6.3 2.64-2.42 8.06-2.1 8.06-2.1z"></path></svg>
                                                                                                    </div>
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <copy-to-clipboard>
                                                                                            <button type="button" class="object_single_page_btn_style w-100">
                                                                                                <span class="button-root__text-8-1-3">Скопировать ссылку</span>
                                                                                            </button>
                                                                                        </copy-to-clipboard>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="object-body-footer">
                                                                <div class="object-details-item">
                                                                    <button v-if="2 != open" @click="toggle(2)" class="object-details-item-btn" type="button">
                                                                        <span class="object-details-item-btn-txt">Показать телефон</span>
                                                                    </button>
                                                                    <a v-if="2 === open" href="tel:+998903592284" class="object-details-item-btn">
                                                                        <span class="object-details-item-btn-txt">+99890 359-22-84</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="object-item">
                                                    <div class="object-item-block">
                                                        <div class="object-photos">
                                                            <div class="object-photos-thumb">
                                                                <swiper
                                                                    :style="{
                                                                    '--swiper-navigation-color': '#fff',
                                                                    '--swiper-pagination-color': '#fff',
                                                                    }"
                                                                    :pagination="{
                                                                        type: 'fraction',
                                                                    }"
                                                                    :loop="true"
                                                                    :lazy="true"
                                                                    :spaceBetween="10"
                                                                    :navigation="true"
                                                                    :thumbs="{ swiper: thumbsSwiper }"
                                                                    :modules="modules"
                                                                    class="mySwiper2 w-100"
                                                                >
                                                                    <swiper-slide>
                                                                        <img src="/images/luxury-house.jpg" class="swiper-lazy"/>
                                                                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div> 
                                                                    </swiper-slide>
                                                                    <swiper-slide>
                                                                        <img src="/images/luxury-house-2.jpg" class="swiper-lazy"/>
                                                                    </swiper-slide>
                                                                    <swiper-slide>
                                                                        <img src="/images/luxury-house-3.jpg" class="swiper-lazy"/>
                                                                    </swiper-slide>
                                                                    <swiper-slide
                                                                    ><img
                                                                        src="/images/luxury-house-4.jpg" /></swiper-slide
                                                                    ><swiper-slide
                                                                    ><img
                                                                        src="/images/luxury-house-5.jpg" /></swiper-slide
                                                                    ><swiper-slide
                                                                    ><img
                                                                        src="/images/luxury-house-6.jpg" /></swiper-slide
                                                                    >
                                                                </swiper>
                                                            </div>
                                                        </div>
                                                        <div class="object-body">
                                                            <div class="object-body-content">
                                                                <div class="object-details">
                                                                    <div v-if="mobilePrice == true" class="object-price-list d-flex align-items-center">
                                                                        <p class="object-price-list-p">22 500 000 ₽</p>
                                                                        <p class="object-price-list-desc ml-2">264 705$/м²</p>
                                                                    </div>
                                                                    <div class="object-details-item object-details-header">
                                                                        <a class="NXJyid" href="https://domclick.ru/card/sale__flat__1564626862" target="_blank" rel="noopener noreferrer">
                                                                            <span class="title">2-комн. квартира 51 м² 2/9 этаж</span>
                                                                        </a>
                                                                    </div>
                                                                    <div class="object-details-item object-details-address mt-3">
                                                                        <div class="w-100 object-details-item align-items-center">
                                                                            <i class="fas fa-map-marker-alt mr-1"></i>
                                                                            <span class="PjgOZO">Москва, Чертановская улица, 21к1</span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="object-details-item mt-3">
                                                                        <div class="object-details-description">
                                                                            СВОБОДНАЯ ПРОДАЖА!   Продается 2-х ком. Кв. м. Южная, ул. Чертановская, д. 21, корп.1 на 2-м этаже 9-ти этажного панельного дома в менее 10-ти минутах пешего хода от метро.  Общая площадь – 51м2, комнаты изолированные – 20  и 15 м2, кухня 7м2, с/у – раздельный.  Окна во двор.  Балкона – нет. Ремонт косметический. Дом располагается в районе с развитой инфраструктурой в шаговой доступности множество популярных сетевых магазинов, ТЦ.  Хорошая транспортная доступность до нескольких станций метро.  
                                                                        </div>
                                                                    </div>
                                                                    <div class="object-details-addtional"></div>
                                                                </div>
                                                                <div v-if="!mobilePrice" class="object-price">
                                                                    <div class="object-price-list">
                                                                        <p class="object-price-list-p">22 500 000 ₽</p>
                                                                        <p class="object-price-list-desc">264 705$/м²</p>
                                                                    </div>
                                                                </div>
                                                                <div v-if="!objectBtns" class="object-actions">
                                                                    <button type="button" class="object-actions-btn" title="Добавить в избранное">
                                                                        <div class="icon-4-0-1">
                                                                            <svg fill="#fff" style="stroke: grey; stroke-width: 1px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                                <path clip-rule="evenodd" d="M1 7C.5 3.5 2.7 2 4.8 2 6.82 2 8 4 8 4s1.17-2 3.2-2c2.1 0 4.3 1.5 3.8 5s-5.83 7-7 7-6.5-3.5-7-7z"></path>
                                                                            </svg>
                                                                        </div>
                                                                    </button>
                                                                    <div>
                                                                        <button type="button" class="object-actions-btn" title="Поделиться объявлением" data-toggle="dropdown">
                                                                            <div class="icon-4-0-1">
                                                                                <div class="icon-4-0-1">
                                                                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                                        <path d="M10.54 2.09l4.1 4.13c.2.2.2.51 0 .7L10.52 11a.3.3 0 01-.51-.21V8.5a.3.3 0 00-.3-.3c-4.94.05-6.1 1.26-6.7 2.97a8.1 8.1 0 00-.3 2.61c0 .21-.26.27-.36.09-4.5-9.06 3.43-9.29 7.39-9.3a.3.3 0 00.3-.3V2.3c0-.27.32-.4.5-.21z"></path>
                                                                                    </svg>
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                        <div class="dropdown-menu dropdown-menu-left">
                                                                            <div class="item">
                                                                                <div class="hint-head-0-9-4">
                                                                                    <div class="hint-title-0-9-4">
                                                                                        <div class="hint-title-content-0-9-4">
                                                                                            <div class="hint-text-wrap-0-9-4 w-100">
                                                                                                <div data-e2e-id="share_hint__title" class="title">Поделиться объявлением</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="hint-content-0-9-4">
                                                                                    <div id="share__content" class="share__content_div">
                                                                                        <div class="share__content_div_socials">
                                                                                            <div>
                                                                                                <a href="#!" title="ok" class="share__content_div_socials_links socials_ok" target="_blank">
                                                                                                    <div class="icon-4-0-1 icon--32-4-0-1">
                                                                                                        <svg fill="currentColor" class="socials_ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 10.8c0-2.73 0-4.1.53-5.14a4.88 4.88 0 012.13-2.13C6.71 3 8.07 3 10.8 3h10.4c2.73 0 4.1 0 5.14.53a4.88 4.88 0 012.13 2.13C29 6.71 29 8.07 29 10.8v10.4c0 2.73 0 4.1-.53 5.14a4.88 4.88 0 01-2.13 2.13c-1.05.53-2.41.53-5.14.53H10.8c-2.73 0-4.1 0-5.14-.53a4.88 4.88 0 01-2.13-2.13C3 25.29 3 23.93 3 21.2V10.8zm13 5.46a4.18 4.18 0 004.15-4.19c0-2.31-1.86-4.2-4.15-4.2a4.18 4.18 0 00-4.15 4.2 4.18 4.18 0 004.15 4.2zm1.72-4.19A1.73 1.73 0 0016 10.33a1.73 1.73 0 00-1.72 1.74A1.73 1.73 0 0016 13.81a1.73 1.73 0 001.72-1.74zm2.37 6.6a7.72 7.72 0 01-2.41 1.01L20 22.03c.45.48.45 1.23 0 1.7a1.2 1.2 0 01-1.72.04L16 21.47l-2.3 2.3c-.22.24-.53.35-.84.35-.32 0-.63-.12-.86-.35l-.02-.02a1.23 1.23 0 01.02-1.72l2.32-2.35a7.68 7.68 0 01-2.4-1 1.24 1.24 0 01-.39-1.7 1.2 1.2 0 011.68-.39 5.22 5.22 0 005.58 0 1.2 1.2 0 011.63.38 1.24 1.24 0 01-.33 1.7z"></path></svg>
                                                                                                    </div>
                                                                                                </a>
                                                                                                <a href="#!" title="wk" class="share__content_div_socials_links socials_wk" target="_blank">
                                                                                                    <div class="icon-4-0-1 icon--32-4-0-1">
                                                                                                        <svg fill="currentColor" class="socials_wk" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.53 5.66C3 6.7 3 8.07 3 10.8v10.4c0 2.73 0 4.1.53 5.14a4.88 4.88 0 002.13 2.13c1.05.53 2.41.53 5.14.53h10.4c2.73 0 4.1 0 5.14-.53a4.88 4.88 0 002.13-2.13c.53-1.05.53-2.41.53-5.14V10.8c0-2.73 0-4.1-.53-5.14a4.88 4.88 0 00-2.13-2.13C25.29 3 23.93 3 21.2 3H10.8c-2.73 0-4.1 0-5.14.53a4.88 4.88 0 00-2.13 2.13zM22.1 21.55H24c.52 0 .8-.28.61-.8a8.21 8.21 0 00-1.6-2.23c-.22-.26-.5-.53-.74-.77s-.46-.45-.55-.58c-.28-.37-.2-.52 0-.85 0 0 2.3-3.27 2.55-4.37.12-.4 0-.7-.57-.7h-1.9c-.47 0-.7.26-.82.54 0 0-.97 2.35-2.33 3.87-.44.44-.64.59-.88.59-.11 0-.3-.15-.3-.55v-3.77c0-.47-.14-.7-.54-.7h-2.98a.46.46 0 00-.47.45c0 .17.1.3.22.46.2.25.48.6.53 1.4v2.78c0 .6-.11.72-.35.72-.64 0-2.2-2.37-3.14-5.07-.18-.51-.37-.73-.84-.73H8c-.52 0-.63.26-.63.53 0 .51.64 3 2.99 6.3 1.56 2.25 3.78 3.46 5.78 3.46 1.2 0 1.35-.27 1.35-.73v-1.7c0-.54.11-.65.5-.65.28 0 .77.15 1.9 1.23.36.37.64.69.87.95.57.63.83.92 1.34.92z"></path></svg>
                                                                                                    </div>
                                                                                                </a>
                                                                                                <a href="#!" title="whatsapp" class="share__content_div_socials_links socials_ws" target="_blank">
                                                                                                    <div class="icon-4-0-1 icon--32-4-0-1">
                                                                                                        <svg fill="currentColor" class="socials_ws" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.75 22.42a8.08 8.08 0 004.43 1.32 8.03 8.03 0 008.04-8c0-4.4-3.6-7.98-8.05-7.98a8.03 8.03 0 00-8.05 7.99c0 1.75.57 3.37 1.54 4.68l-1 2.97 3.09-.98zm1.67-11c.23.01.35.03.51.4l.2.47.52 1.26c.06.11.12.27.04.43-.07.15-.14.22-.24.34l-.02.02-.15.17a3.42 3.42 0 00-.2.22c-.12.13-.23.27-.1.5.14.23.61 1 1.3 1.6.83.74 1.52 1.01 1.82 1.13l.08.03c.19.08.42.06.56-.09.16-.16.34-.42.54-.69l.1-.13c.15-.23.36-.26.57-.18.22.08 1.37.64 1.6.76l.14.07c.16.07.27.12.31.2.06.1.06.57-.13 1.11-.2.55-.97 1-1.58 1.13-.42.09-.97.16-2.82-.6-2.2-.9-3.66-3.02-3.96-3.45l-.05-.07-.01-.01a4.5 4.5 0 01-.95-2.4c0-1.1.56-1.67.8-1.92l.03-.02c.19-.2.51-.28.82-.28h.27z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.53 5.66C3 6.7 3 8.07 3 10.8v10.4c0 2.73 0 4.1.53 5.14a4.88 4.88 0 002.13 2.13c1.05.53 2.41.53 5.14.53h10.4c2.73 0 4.1 0 5.14-.53a4.88 4.88 0 002.13-2.13c.53-1.05.53-2.41.53-5.14V10.8c0-2.73 0-4.1-.53-5.14a4.88 4.88 0 00-2.13-2.13C25.29 3 23.93 3 21.2 3H10.8c-2.73 0-4.1 0-5.14.53a4.88 4.88 0 00-2.13 2.13zm3.08 10.09c0-5.25 4.28-9.5 9.57-9.5a9.54 9.54 0 019.57 9.5c0 5.24-4.29 9.5-9.57 9.5a9.6 9.6 0 01-4.63-1.19l-5.3 1.69 1.73-5.1a9.42 9.42 0 01-1.37-4.9z"></path></svg>
                                                                                                    </div>
                                                                                                </a>
                                                                                                <a href="#!" title="viber" class="share__content_div_socials_links socials_vb" target="_blank">
                                                                                                    <div class="icon-4-0-1 icon--32-4-0-1">
                                                                                                        <svg fill="currentColor" class="socials_vb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.2 22.34c.92-.21 3.44-.8 3.9-4.56.54-4.31-.19-7.25-1.62-8.48-.44-.4-2.3-1.57-6.2-1.58 0 0-4.6-.3-6.83 1.72-1.25 1.23-1.67 3.06-1.71 5.29v.22c-.06 2.28-.15 6.3 3.8 7.4l-.02 3.44c0 .2.03.33.14.36.08.02.2-.02.3-.13.65-.65 2.74-3.17 2.74-3.17a17.2 17.2 0 005.5-.51zm-2.87-4.53c-.2.25-.57.22-.57.22-2.67-.69-3.38-3.39-3.38-3.39s-.03-.37.2-.56l.5-.39c.23-.18.38-.63.14-1.07-.41-.73-1-1.51-1.32-1.84-.24-.28-.59-.35-.96-.15a4 4 0 00-.99.8c-.32.38-.5.81-.35 1.28h.01a13.04 13.04 0 003.97 5.82 15.48 15.48 0 004.1 2.26l.02.02c.46.15.9-.03 1.27-.35.34-.31.6-.64.8-.99.2-.38.13-.73-.15-.97-.51-.48-1.26-.99-1.84-1.32-.44-.24-.89-.09-1.07.15l-.38.48zm3.9-2.29a.26.26 0 01-.26.26.26.26 0 01-.26-.25 5.02 5.02 0 00-1.4-3.72 4.82 4.82 0 00-3.45-1.36.26.26 0 01-.26-.26.26.26 0 01.26-.26c1.51.01 2.8.52 3.81 1.51a5.53 5.53 0 011.56 4.08zm-1.63-.27a.26.26 0 00.26-.25 3.55 3.55 0 00-.91-2.57 3.78 3.78 0 00-2.61-1.15.26.26 0 00-.04.52c.99.07 1.73.4 2.27.98a3 3 0 01.77 2.2.26.26 0 00.26.27zm-1.6-.7a.26.26 0 00.27.25h.01a.26.26 0 00.25-.27c-.06-1.15-.68-1.8-1.8-1.85a.26.26 0 00-.03.52c.85.04 1.26.47 1.3 1.36z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.53 5.66C3 6.7 3 8.07 3 10.8v10.4c0 2.73 0 4.1.53 5.14a4.88 4.88 0 002.13 2.13c1.05.53 2.41.53 5.14.53h10.4c2.73 0 4.1 0 5.14-.53a4.88 4.88 0 002.13-2.13c.53-1.05.53-2.41.53-5.14V10.8c0-2.73 0-4.1-.53-5.14a4.88 4.88 0 00-2.13-2.13C25.29 3 23.93 3 21.2 3H10.8c-2.73 0-4.1 0-5.14.53a4.88 4.88 0 00-2.13 2.13zm12.84.6c4.6.02 6.67 1.52 7.18 2 1.7 1.47 2.63 4.73 2 9.89-.56 4.55-3.73 5.36-4.8 5.63l-.25.07c-.28.1-2.82.73-6.12.45-.37.43-.85.98-1.2 1.36l-.3.33c-.47.54-.84.96-1.4.78-.55-.17-.52-1-.52-1v-2.08c-4.82-1.36-4.75-6.36-4.7-9.03.06-2.67.58-4.82 2.05-6.3 2.64-2.42 8.06-2.1 8.06-2.1z"></path></svg>
                                                                                                    </div>
                                                                                                </a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <copy-to-clipboard>
                                                                                            <button type="button" class="object_single_page_btn_style w-100">
                                                                                                <span class="button-root__text-8-1-3">Скопировать ссылку</span>
                                                                                            </button>
                                                                                        </copy-to-clipboard>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="object-body-footer">
                                                                <div class="object-details-item">
                                                                    <button v-if="2 != open" @click="toggle(2)" class="object-details-item-btn" type="button">
                                                                        <span class="object-details-item-btn-txt">Показать телефон</span>
                                                                    </button>
                                                                    <a v-if="2 === open" href="tel:+998903592284" class="object-details-item-btn">
                                                                        <span class="object-details-item-btn-txt">+99890 359-22-84</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="objects-paginator">
                                            <Paginator :rows="10" 
                                            template="PrevPageLink PageLinks NextPageLink"
                                            :totalRecords="totalRecords"></Paginator>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="DesktopFilter" class="col-lg-3 col-12">
                                    <div class="agent-single-div-info">
                                        <div class="agent-single-div-info-avatar">
                                            <div class="img-box">
                                                <div>
                                                    <figure>
                                                        <img src="/images/agent-img-avatar.png" alt="" class="wDiYI w-100 h-auto">
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="agentCard_ratingContainter mb-3">
                                            <div class="ppr-container-6-0-1 ppr-container--inline-6-0-1">
                                                <div class="ppr-target-6-0-1">
                                                    <div class="agentCard_ratingTooltipContent">
                                                        <div class="agentCard_starsWrap">
                                                            <div class="agentCard_starRaiting">
                                                                <span class="agentCard_ratingText" data-test-id="starRating">5.0</span>
                                                                <div class="agentCard_star agentCard_star--100">
                                                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1937 0.538032C11.492 -0.17916 12.508 -0.179163 12.8063 0.538029L15.4908 6.99237C15.6165 7.29472 15.9009 7.5013 16.2273 7.52747L23.1953 8.08609C23.9695 8.14816 24.2835 9.11442 23.6936 9.61974L18.3847 14.1674C18.136 14.3804 18.0274 14.7147 18.1034 15.0332L19.7253 21.8328C19.9056 22.5883 19.0836 23.1855 18.4207 22.7806L12.4552 19.1369C12.1757 18.9662 11.8242 18.9662 11.5448 19.1369L5.57922 22.7806C4.91633 23.1855 4.09439 22.5883 4.27461 21.8328L5.89656 15.0332C5.97254 14.7147 5.86393 14.3804 5.61524 14.1674L0.306364 9.61974C-0.283547 9.11442 0.0304063 8.14816 0.804675 8.08609L7.77268 7.52747C8.09909 7.5013 8.38342 7.29472 8.50918 6.99237L11.1937 0.538032Z" fill="#D3D4D4"></path></svg>
                                                                </div>
                                                                <div class="agentCard_star agentCard_star--100">
                                                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1937 0.538032C11.492 -0.17916 12.508 -0.179163 12.8063 0.538029L15.4908 6.99237C15.6165 7.29472 15.9009 7.5013 16.2273 7.52747L23.1953 8.08609C23.9695 8.14816 24.2835 9.11442 23.6936 9.61974L18.3847 14.1674C18.136 14.3804 18.0274 14.7147 18.1034 15.0332L19.7253 21.8328C19.9056 22.5883 19.0836 23.1855 18.4207 22.7806L12.4552 19.1369C12.1757 18.9662 11.8242 18.9662 11.5448 19.1369L5.57922 22.7806C4.91633 23.1855 4.09439 22.5883 4.27461 21.8328L5.89656 15.0332C5.97254 14.7147 5.86393 14.3804 5.61524 14.1674L0.306364 9.61974C-0.283547 9.11442 0.0304063 8.14816 0.804675 8.08609L7.77268 7.52747C8.09909 7.5013 8.38342 7.29472 8.50918 6.99237L11.1937 0.538032Z" fill="#D3D4D4"></path></svg>
                                                                </div>
                                                                <div class="agentCard_star agentCard_star--100">
                                                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1937 0.538032C11.492 -0.17916 12.508 -0.179163 12.8063 0.538029L15.4908 6.99237C15.6165 7.29472 15.9009 7.5013 16.2273 7.52747L23.1953 8.08609C23.9695 8.14816 24.2835 9.11442 23.6936 9.61974L18.3847 14.1674C18.136 14.3804 18.0274 14.7147 18.1034 15.0332L19.7253 21.8328C19.9056 22.5883 19.0836 23.1855 18.4207 22.7806L12.4552 19.1369C12.1757 18.9662 11.8242 18.9662 11.5448 19.1369L5.57922 22.7806C4.91633 23.1855 4.09439 22.5883 4.27461 21.8328L5.89656 15.0332C5.97254 14.7147 5.86393 14.3804 5.61524 14.1674L0.306364 9.61974C-0.283547 9.11442 0.0304063 8.14816 0.804675 8.08609L7.77268 7.52747C8.09909 7.5013 8.38342 7.29472 8.50918 6.99237L11.1937 0.538032Z" fill="#D3D4D4"></path></svg>
                                                                </div>
                                                                <div class="agentCard_star agentCard_star--100">
                                                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1937 0.538032C11.492 -0.17916 12.508 -0.179163 12.8063 0.538029L15.4908 6.99237C15.6165 7.29472 15.9009 7.5013 16.2273 7.52747L23.1953 8.08609C23.9695 8.14816 24.2835 9.11442 23.6936 9.61974L18.3847 14.1674C18.136 14.3804 18.0274 14.7147 18.1034 15.0332L19.7253 21.8328C19.9056 22.5883 19.0836 23.1855 18.4207 22.7806L12.4552 19.1369C12.1757 18.9662 11.8242 18.9662 11.5448 19.1369L5.57922 22.7806C4.91633 23.1855 4.09439 22.5883 4.27461 21.8328L5.89656 15.0332C5.97254 14.7147 5.86393 14.3804 5.61524 14.1674L0.306364 9.61974C-0.283547 9.11442 0.0304063 8.14816 0.804675 8.08609L7.77268 7.52747C8.09909 7.5013 8.38342 7.29472 8.50918 6.99237L11.1937 0.538032Z" fill="#D3D4D4"></path></svg>
                                                                </div>
                                                                <div class="agentCard_star agentCard_star--100">
                                                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1937 0.538032C11.492 -0.17916 12.508 -0.179163 12.8063 0.538029L15.4908 6.99237C15.6165 7.29472 15.9009 7.5013 16.2273 7.52747L23.1953 8.08609C23.9695 8.14816 24.2835 9.11442 23.6936 9.61974L18.3847 14.1674C18.136 14.3804 18.0274 14.7147 18.1034 15.0332L19.7253 21.8328C19.9056 22.5883 19.0836 23.1855 18.4207 22.7806L12.4552 19.1369C12.1757 18.9662 11.8242 18.9662 11.5448 19.1369L5.57922 22.7806C4.91633 23.1855 4.09439 22.5883 4.27461 21.8328L5.89656 15.0332C5.97254 14.7147 5.86393 14.3804 5.61524 14.1674L0.306364 9.61974C-0.283547 9.11442 0.0304063 8.14816 0.804675 8.08609L7.77268 7.52747C8.09909 7.5013 8.38342 7.29472 8.50918 6.99237L11.1937 0.538032Z" fill="#D3D4D4"></path></svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="agentCard_ratingStats">533 сделки (2 отзыва)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="agent-info-desc">
                                            <div class="agent-info-fio">
                                                <a href="#!" class="agent-info-fio-info-more">
                                                    <h2 class="agentCard_agentName" data-v-c79ffa70="">Javohir Toirov</h2>
                                                </a>
                                            </div>
                                            <div class="agent-info-buttons">
                                                <div class="telephony_button">
                                                    <button v-if="!showPhoneNumber" @click="showPhoneNumber = true" class="button-root-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3 button-root--type-button-reset-8-1-3 root--with-icon button-root--with-icon-left-8-1-3 button-root--fluid-8-1-3" type="button">
                                                        <span class="button-root__icon-8-1-3 button-root__icon--left-8-1-3">
                                                            <div class="icon-4-0-1">
                                                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13.43 10.74c-.9-.72-1.83-1.16-2.72-.44l-.54.44c-.39.32-1.12 1.8-3.93-1.22-2.82-3.01-1.14-3.48-.75-3.8l.54-.43c.89-.73.55-1.64-.09-2.58l-.39-.56a1.82 1.82 0 00-2.72-.45 4.2 4.2 0 00-1.77 2.8c-.32 1.98.7 4.26 3.02 6.76 2.33 2.5 4.61 3.75 6.77 3.73a4.7 4.7 0 003.21-1.24c.9-.72.83-1.85-.08-2.58l-.55-.44z"></path></svg>
                                                            </div>
                                                        </span>
                                                        <span class="button-root__text-8-1-3">Позвонить бесплатно</span>
                                                    </button>
                                                    <a v-if="showPhoneNumber" href="tel:+998903592284" class="button-root-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3 button-root--type-button-reset-8-1-3 root--with-icon button-root--with-icon-left-8-1-3 button-root--fluid-8-1-3">
                                                        <span class="button-root__icon-8-1-3 button-root__icon--left-8-1-3">
                                                            <div class="icon-4-0-1">
                                                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13.43 10.74c-.9-.72-1.83-1.16-2.72-.44l-.54.44c-.39.32-1.12 1.8-3.93-1.22-2.82-3.01-1.14-3.48-.75-3.8l.54-.43c.89-.73.55-1.64-.09-2.58l-.39-.56a1.82 1.82 0 00-2.72-.45 4.2 4.2 0 00-1.77 2.8c-.32 1.98.7 4.26 3.02 6.76 2.33 2.5 4.61 3.75 6.77 3.73a4.7 4.7 0 003.21-1.24c.9-.72.83-1.85-.08-2.58l-.55-.44z"></path></svg>
                                                            </div>
                                                        </span>
                                                        <span class="button-root__text-8-1-3">+99890 359-22-84</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="agent-single-div-info">
                                        <div class="agent-single-div-info_social">
                                            Social Links
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <!-- Actions Mobile -->
            <div v-if="actionMobile" class="actions-mobile-main">
                <div class="actions-mobile-main-item">
                    <a href="tel:+998903592284" class="actions-btn-content w-100">
                        <svg class="actions-btn-content-svg" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.73 2.736a7.369 7.369 0 0 1 2.554-1.664A1.12 1.12 0 0 1 4.694 1c.334 0 1.086.173 1.28.706.329.908.74 2.093 1.04 3.226.088.329 0 1.128-.462 1.423l-1.016.644a.496.496 0 0 0 .115.313A14.75 14.75 0 0 0 7.057 8.96c.51.505 1.055.97 1.634 1.394.153.112.275.119.315.116l.646-1.02c.302-.476 1.066-.491 1.152-.491.082 0 .163.008.243.025 1.395.312 2.228.58 3.295 1.064.494.223.807 1.115.587 1.675a7.331 7.331 0 0 1-1.66 2.55c-.206.205-.601.709-.834.717-.234.01-.42.01-.42.01-2.675 0-5.442-1.232-7.59-3.38l-.044-.046C2.159 9.334.942 6.51 1.006 3.784c0 0-.052-.142.143-.388.181-.23.375-.451.581-.66z" fill="currentColor"></path></svg>
                        <span class="actions-btn-content-txt">Позвонить</span>
                    </a>
                </div>
                <!-- <div class="actions-mobile-main-item">
                    <button data-toggle="modal" data-target="#actionCommentModal" class="actions-btn-content w-100" type="button">
                        <svg class="actions-btn-content-svg" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M1 1a1 1 0 0 0-1 1v2.429L8 9l8-4.571V2a1 1 0 0 0-1-1H1z"></path><path d="M8 11.071 0 6.5V14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6.5l-8 4.571z"></path></g></svg>
                        <span class="actions-btn-content-txt">Написать</span>
                    </button>
                </div> -->
                
                <!-- Action comment -->
                <div class="actions-comment-modal">
                    <div class="modal fade" id="actionCommentModal" tabindex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Фильтр</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="modal-body-form">
                                        <form>
                                            <div class="modal-body-form-row">
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                                    <button type="button" class="btn btn-primary"> <i class="feather icon-search mr-1"></i> Поиск</button>
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
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Lazy, FreeMode, Navigation, Thumbs } from "swiper";
import CopyToClipboard from '../../components/CopyToClipboard.vue'
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import InputSwitch from 'primevue/inputswitch';
import Paginator from 'primevue/paginator';
export default {
    components: {
        Swiper,
        SwiperSlide,
        Dropdown,
        MultiSelect,
        TabView,
        TabPanel,
        InputSwitch,
        CopyToClipboard,
        Paginator
    },
    data() {
        return {
            showPhoneNumber: false,
            Studio: false,
            Room1: false,
            Room2: false,
            Room3: false,
            Room4: false,
            houseType: null,
            garageType: null,
            commercialType: null,
            active4: 0,
            DesktopFilter: false,
            mobilePrice: false,
            objectBtns: false,
            open: null,
            totalRecords: 120,
            typeSearch: 'buy',
            test: "",
            selectedCity1: '',
            cities: [
                {name: 'Квартиру', code: 'apartment'},
                {name: 'Комнату', code: 'room'},
                {name: 'Дом', code: 'house'},
                {name: 'Участок', code: 'plot'},
                {name: 'Гараж или машиноместо', code: 'garage'},
                {name: 'Коммерческую недвижимость', code: 'commercial'}
            ],
            hourlyType: [
                {name: 'Квартиру', code: 'apartment'},
                {name: 'Комнату', code: 'room'},
                {name: 'Дом', code: 'house'},
            ],
            newBuildingsType: [
                {name: 'Срок сдачи', code: 'deadline'},
                {name: 'Сдан', code: 'was_passed'},
                {name: 'Строится', code: 'under_construction'},
                {name: 'Полгода', code: 'half_a_year'},
                {name: '1 год', code: 'a_year'},
                {name: '1,5 года', code: 'a_half_year'},
            ],
            typesHouse: [
                {name: 'Отдельный дом', code: 'separate_house'},
                {name: 'Часть дома', code: 'part_house'},
                {name: 'Таунхаус', code: 'townhouse'}
            ],
            typesGarage: [
                {name: 'Бокс', code: 'box'},
                {name: 'Гараж', code: 'garage'},
                {name: 'Машиноместо', code: 'parking_place'}
            ],
            typesCommercial: [
                {name: 'Офисное помещение', code: 'office'},
                {name: 'Торговое помещение', code: 'commercial_premises'},
                {name: 'Помещение свободного назначения', code: 'free_space'},
                {name: 'Складское помещение', code: 'warehouse_space'},
                {name: 'Производственное помещение', code: 'production_room'},
                {name: 'Земельный участок', code: 'land_plot'},
                {name: 'Общепит', code: 'public_catering'},
            ],
            typeApartment: 'all-types',
            typeHouse: 'all-types',
            typePrice: 'for-all',
            checked1: false,
            actionMobile: false

        }
    },
    setup() {
        return {
            modules: [Autoplay,Pagination,Lazy,FreeMode,Navigation,Thumbs],
        };
    },
    methods: {
        toggle(id) {
            this.open = this.open === id ? null : id
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 1000){
                this.mobilePrice = true;
                if(this.windowWidth <= 736){
                    this.objectBtns = true;
                }
                if(this.windowWidth <= 575){
                    this.DesktopFilter = false;
                    this.actionMobile = true;
                }
                return;
            }
            this.objectBtns = false;
            this.DesktopFilter = true;
            this.actionMobile = false;
            this.mobilePrice = false
            return;
        },
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen()
    },
}
</script>


<style>
.agent-single-div-header{
    padding-top: 40px;
    position: relative;
    height: 550px;
}

.agent-single-div-header-background{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(21, 25, 27, 0.61);
    width: 100%;
    height: 550px;
}

.agent-single-div-header-banner{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-position: 50% 50% !important;
    background-size: cover !important;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background: url('/images/agent-single.jpg');
}

.agent-single-div-header-main{
    position: relative;
    z-index: 3;
}

.agent-single-div-header-main-content{
    position: relative;
}

.agent-single-div-header-main-content .header-main-content-top{
    position: relative;
    z-index: 5;
}


.realtor__info-main{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.realtor__info-main_img{
    position: relative;
    margin: 40px 30px 30px 0;
}

.realtor__info-main_img_photo{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: normal;
    align-items: flex-start;
    position: relative;
    width: 128px;
    height: 128px;
    border-radius: 50%;
    background-color: #fff;
    overflow: hidden;
}

.img-box{
    position: relative;
    overflow: hidden;
    border-radius: 50%;
}

.wDiYI {
    display: block;
    object-fit: cover;
    object-position: center top;
}

.realtor__info-main_img_photo img:after, 
.realtor__info-main_img_photo object:after,
.agent-single-div-info-avatar img:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 128px;
    height: 128px;
    background: url('https://cdn.esoft.digital/content/media/site/1e/54/7d662dcc6c409c2ba787ec760d8e27503dc8ab27.svg') no-repeat;
    background-size: contain;
}

.agent-single-div-info-avatar img:after{
    width: 140px;
    height: 140px;
}

.PwHgU {
    display: flex;
    align-items: center;
}

.realtor__info-main_img__rating {
    position: absolute;
    bottom: -0.75rem;
    left: 55%;
}

.It1BH {
    color: #fff;
    background-color: #F6A623;
}
.bvmhS {
    padding: 0.375rem 0.5rem!important;
    font-size: .875rem!important;
    line-height: 1.25rem!important;
    border-radius: 2rem!important;
    min-width: 2rem!important;
    min-height: 2rem!important;
}

.fTgnJ, .fTgnJ .M5PoM {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
}

.bvmhS svg:first-child {
    margin-right: 0.25rem;
    margin-left: unset!important;
}

.It1BH svg {
    fill: #fff;
}

.bvmhS svg {
    max-width: 1.25rem;
    max-height: 1.25rem;
    margin: auto 0.25rem;
}

.realtor__info-main-content{
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: normal;
    align-items: normal;
    color: #fff;
    font-size: 18px;
    line-height: 23px;
}

.realtor__info-main-content_position {
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.realtor__info-main-content_separator {
    width: 100%;
    border-bottom: 1px solid hsla(0,0%,100%,.5);
    margin: 15px 0 20px;
}

.realtor__info-main-content_city, .realtor__info-main-content_email>span {
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.realtor__info-main-content_fio {
    margin-bottom: 10px !important;
}

.realtor__info-main-content_fio {
    margin: 0;
    font-size: 24px;
    line-height: 31px;
}

.text-bold {
    font-weight: 700;
}

.realtor__info-main-content_email>a {
    color: inherit!important;
}

.realtor__info-main-content_email>a:hover{
    color: var(--form-button-color) !important;
}

.realtor__info-main-content_buttons {
    display: flex;
    flex-wrap: wrap;
}

.realtor__info-main-content_buttons>div {
    margin-top: 15px;
}

/* .realtor__info-main-content_call-button {
    margin-right: 20px;
} */

.realtor__info-main-content_call-button {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.realtor__info-main-content_call-button .button-root__icon-8-1-3 {
    width: unset;
    height: unset;
}

.realtor__info-main-content_call-button .button-link{
    padding: 5px 10px;
    background: var(--form-button-color);
    color: #fff;
    border-radius: 5px;
    outline: none;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 16px;
}
.realtor__info-main-content_call-button .button-link:hover{
    background: #fff;
    color: var(--form-button-color);
    border-color: var(--form-button-color);
}

.realtor__info-main-content_call-button .button-link:hover .button-root__icon-8-1-3{
    color: var(--form-button-color) !important;
}

.realtor__info-main-filter{
    -webkit-box-flex: 0;
    flex-grow: 0;
    flex-shrink: 0;
    z-index: 2;
}

.FiltersForm_name_main{
    width: 100%;
}

.FiltersForm__content {
    height: 100%;
    max-width: 1109px;
    margin: 0 auto;
}
.FiltersForm__content-filters{
    display: flex;
    border-radius: 8px;
    background-color: #fff;
    height: 50px;
    position: relative;
}
.agent-single-div-info{
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 #00000012;
    display: flex;
    flex-direction: column;
    height: auto;
}

.agent-single-div-info-avatar,
.agent-info-desc,
.agent-single-div-info_social{
    padding: 16px;
}

.agent-single-div-info-avatar{
    align-items: flex-start;
    position: relative;
    width: auto;
    height: auto;
    border-radius: 50%;
    background-color: #fff;
    overflow: hidden;
}

.agent-single-div-info-avatar .img-box{
    overflow: unset;
}

.agent-single-div-info-avatar .img-box figure{
    width: 140px;
    height: 140px;
    margin: 0 auto;
}

.agent-info-fio{
    padding-top: 15px;
    border-top: 1px solid #e5e5e5;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.agent-info-fio .agentCard_agentName{
    font-size: 20px;
}

.agent-info-fio-info-more:hover .agentCard_agentName,
.realtor__info-main-content_name:hover .realtor__info-main-content_fio{
    color: var(--form-button-color) !important;
}

.agent-single-div-content-div-objects-title{
    padding-left: 15px;
    font-size: 30px;
    font-weight: 600;
    color: #000;
    margin-bottom: 40px;
}

.agent-single-div-info:not(:last-child){
    margin-bottom: 20px;
}

.filters-wrapper-item{
    position: relative;
    border-right: 1px solid #f4f4f4;
    height: 100%;
}

.filters-wrapper-item-container-1{
    width: 100%;
    max-width: 140px;
}

.FiltersFormField_name_roomsTotal{
    flex-basis: 250px;
    max-width: 250px;
}

.FiltersFormField_name_price-type{
    flex-basis: 260px;
    max-width: 260px;
}

.FiltersFormField_name_address{
    width: 100%;
}

.FiltersFormField_name_address .TextInput__box{
    border-color: transparent;
    border-radius: 0;
    border-right: 1px solid #f4f4f4;
    font-size: 16px;
    height: 100%;
    width: 100%;
}
/* .FiltersFormField:not(:last-child):before {
    background: rgba(0,0,0,.12);
    bottom: 6px;
    content: "";
    position: absolute;
    right: -15px;
    top: 6px;
    width: 1px;
    z-index: 1;
} */

.filters-wrapper-item-btn{
    cursor: pointer;
    border: none;
    background: none;
    padding: 20px 38px 20px 24px;
    width: 100%;
    overflow: hidden;
    color: #121212;
    font-size: 14px;
    line-height: 1.43;
    text-align: left;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.filters-wrapper-item:first-of-type .filters-wrapper-item-btn {
    -moz-border-radius-topleft: 8px;
    -moz-border-radius-bottomleft: 8px;
    -webkit-border-top-left-radius: 8px;
    border-top-left-radius: 8px;
    -webkit-border-bottom-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.filters-wrapper-item-btn:after {
    display: block;
    position: absolute;
    top: 50%;
    right: 16px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    -moz-transform: translateY(-50%) rotate(45deg);
    -o-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    -o-transition: -o-transform .3s;
    -moz-transition: transform .3s,-moz-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s,-moz-transform .3s,-o-transform .3s;
    border-right: 2px solid #c9c9c9;
    border-bottom: 2px solid #c9c9c9;
    width: 6px;
    height: 6px;
    content: "";
}
.filters-wrapper-item-btn.filters-wrapper-item-btn-active:after{
    transform: translateY(-10%) rotate(225deg);
}
.filters-wrapper-item-dropdwon{
    position: absolute;
    left: 0;
    z-index: 10;
    margin-top: 8px;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);
    border-radius: 10px;
    background-color: #fff;
    /* padding: 16px; */
    min-width: 284px;
}

.filters-wrapper-item-dropdwon-item{
    font-size: 16px;
    height: 36px;
    line-height: 36px;
    width: 100%;
    overflow: hidden;
    padding: 0 12px;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
}

.filters-wrapper-item-dropdwon-item:hover{
    color: var(--form-button-color);
}

.filters-wrapper-item .p-dropdown{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px 0 0 8px;
}

.filters-wrapper-item .p-dropdown .p-dropdown-label,
.filters-wrapper-item .p-multiselect .p-multiselect-label.p-placeholder {
    background: transparent;
    border: 0 none;
    font-size: 16px;
    line-height: 48px;
    font-weight: 500;
    color: #000;
}

/* .p-dropdown:not(.p-disabled):hover {
    border-color: transparent !important;
} */

.p-dropdown:not(.p-disabled).p-focus{
    box-shadow: unset !important;
    /* border-color: transparent !important; */
}

.p-dropdown-panel,
.p-multiselect-panel{
    /* top: 400px !important; */
    /* border-radius: 8px !important; */
    min-width: 284px !important;
}

.p-multiselect-panel .p-multiselect-header{
    border-radius: 10px 10px 0 0 !important;
}
/* .pi {
    font-size: 8px !important;
} */

.p-dropdown-panel .p-dropdown-items .p-dropdown-item,
.p-multiselect-panel .p-multiselect-items .p-multiselect-item{
    font-size: 16px !important;
    height: 36px !important;
    line-height: 36px !important;
    width: 100% !important;
    overflow: hidden !important;
    padding: 0 12px !important;
    position: relative !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    cursor: pointer !important;
}

.p-dropdown-items-wrapper{
    max-height: 100% !important;
}

.filters-wrapper-item-padding{
    padding: 3px;
    position: relative;
    vertical-align: top;
}

.apartment-type_label:hover{
    cursor: pointer;
}

.apartment-type_label{
    -webkit-box-align: center;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    align-items: center;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    line-height: 20px;
}

.apartment-type_label-input{
    position: absolute;
    width: 0;
    opacity: 0;
}

.apartment-type-btn{
    background-color: #fff;
    border-radius: 6px;
    color: rgba(0,0,0,.92);
    line-height: 1;
    margin-right: 1px;
    overflow: visible;
    padding: 12px;
    position: relative;
}

.apartment-type-btn-border:before{
    background: #d6d6d6;
    content: "";
    height: 50%;
    left: -1px;
    position: absolute;
    top: 25%;
    width: 1px;
}
.apartment-type:before{
    background-color: #fff;
    bottom: 3px;
    content: "";
    left: 2px;
    position: absolute;
    top: 3px;
    width: 1px;
    z-index: 1;
}

.apartment-type-btn.apartment-type-btn-active{
    background-color: #e0edfa;
}

.Button__text {
    display: inline-block;
    overflow: hidden;
    position: relative;
    text-align: center;
    text-overflow: ellipsis;
    vertical-align: top;
    font-weight: 500;
    color: #000;
}

.filter-price-type{
    flex-grow: 1;
    position: relative;
    min-width: 195px;
    height: 100%;
}


.filter-price-type-wrapper{
    width: 100%;
    font-size: 16px;
    font-family: inherit;
    line-height: normal;
    position: relative;
    height: 100%;
        display: inline-flex;
    vertical-align: top;
}

/* .filter-price-type-wrapper:before{
    bottom: 0!important;
    left: 0!important;
    right: 0!important;
    top: 0!important;
    content: "";
    background-color: #fff;
    position: absolute;
} */

.filter-price-type-wrapper-item{
    -webkit-box-flex: 1;
    flex: 1 1;
    margin: 0;
    min-width: 50px;
    height: 100%;
}

.filter-price-type-wrapper-item .TextInput__box{
    background: transparent;
    border: 1px solid transparent;
    margin: 0;
    font-size: 16px;
    height: 100%;
    flex-grow: 1;
    position: relative;
}
.filter-price-type-wrapper-item .TextInput__control,
.FiltersFormField_name_address .TextInput__control{
    box-sizing: border-box;
    max-width: 100%;
    width: 100%;
    font-size: 16px;
    height: 100%;
    color: rgba(0,0,0,.92);
    flex: 1 1;
    font-family: inherit;
    outline: none;
    padding: 0 12px;
    text-overflow: ellipsis;
    -webkit-box-flex: 1;
    background: transparent;
    border: none;
}

.NumberRange__separator {
    -webkit-box-pack: center;
    flex-basis: 5%;
    justify-content: center;
}

.NumberRange__separator {
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    display: -webkit-box;
    display: flex;
    position: relative;
}

.NumberRange__separator {
    color: #999;
}

.TextInput__extra{
    border-color: transparent;
    font-size: 16px;
    height: 100%;
}

.FiltersFormField__refinements{
    align-items: center;
    display: flex;
    height: 100%;
    padding-right: 10px;
}

.FiltersFormField__refinements-selector{
    flex-grow: 1;
    padding-right: 0;
    white-space: nowrap;
}

.FiltersFormField__refinements-selector .Link {
    font-size: 14px;
}

.FiltersFormField__refinements-selector .Link+.Link {
    margin-left: 15px;
}

.Link_theme_islands.Link_size_xxl {
    line-height: 26px;
}

.Link_theme_islands {
    -webkit-tap-highlight-color: rgba(0,0,0,.1);
    color: #0065d9;
    cursor: pointer;
    outline: 0;
    text-decoration: none;
    transition: color .15s ease-out;
}

.Link {
    touch-action: manipulation;
}


.filters-wrapper-item:last-child{
    border-right: unset !important;
}

.filters-wrapper-item .p-multiselect{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border: none;
}

/* .p-multiselect:not(.p-disabled):hover {
    border-color: transparent !important;
}

.p-multiselect:not(.p-disabled).p-focus{
    box-shadow: unset !important;
} */

/* .p-multiselect.p-multiselect-chip .p-multiselect-token {
    background: var(--primary_100) !important;
    color: #fff !important;
    border-radius: 10px !important;
} */

.filters-tabs-item{
    font-size: 16px;
    font-weight: 500;
    height: auto;
    line-height: 38px;
    background: rgba(0,0,0,.56);
    color: #fff;
    font-family: inherit;
    -webkit-box-align: center;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    align-items: center;
    border: 0;
    border-radius: 64px;
    box-sizing: border-box;
    display: flex;
    margin: 0;
    outline: 0;
    overflow: hidden;
    padding: 0 16px;
    position: relative;
    text-align: center;
    cursor: pointer;
    margin-bottom: 10px;
}

.filters-tabs-item:not(:last-child){
    margin-right: 8px;
}
.filters-tabs-item.active{
    background: #fff;
    color: rgba(0,0,0,.92);
}

.FiltersFormField_name_map-submit{
    flex-basis: 220px;
}

.FiltersFormField_name_counter-submit{
    flex-basis: 250px;
    margin-left: 16px;
}

.FiltersFormField_name_map-submit .Button{
    width: 100%;
}

.filters-button-container .Button:not(.Button_view_blue):not(.Button_focused):before {
    bottom: 0!important;
    left: 0!important;
    right: 0!important;
    top: 0!important;
}

.Button_theme_realty.Button_view_white:before {
    background-color: #fff;
}

.Button_theme_realty:before{
    border-radius: 8px;
    content: "";
    position: absolute;
    transition: background-color .1s ease;
}

.Button_theme_realty.Button_size_xxl {
    font-size: 16px;
    line-height: 48px;
    padding: 0 16px;
}

.Button_theme_realty.Button_view_white {
    color: #141414;
}

.Button_theme_realty.Button_type_link {
    text-decoration: none;
}

.Button_theme_realty {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    background-color: transparent;
    border: 0;
    border-radius: 8px;
    box-sizing: border-box;
    color: #000;
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    margin: 0;
    outline: 0;
    overflow: hidden;
    padding: 0;
    position: relative;
    text-align: center;
    -webkit-transition: color .1s ease;
    transition: color .1s ease;
    -webkit-user-select: none;
    user-select: none;
    white-space: nowrap;
}

.Button_theme_realty .Button__icon, .Button_theme_realty .Button__text {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    text-align: center;
    text-overflow: ellipsis;
    vertical-align: top;
}

.Button_theme_realty.Button_size_xxl {
    font-size: 16px;
    line-height: 48px;
}

.Button_theme_realty.Button_view_white {
    color: #141414;
}

.map-location-img{
    width: 24px;
    height: 24px;
    margin-right: 8px;
}

.Button .IconSvg {
    vertical-align: middle;
}

.Button_theme_realty .Button_view_yellow {
    color: #000;
}

.Button_theme_realty.Button_view_yellow:before {
    background-color: #ffde5a !important;
}

/* *********************************************************************************** */
/* *************************** Mobile Filter *************************************** */
.mobile-filter-view-box{
    margin: 20px 10px 10px 10px;
}

.mobile-filter-view-tabs-ul{
    display: flex;
    margin: 0 0 -1px;
    padding: 0;
    list-style: none;
}

.mobile-filter-view-tabs-ul-li:first-of-type {
    margin-right: 3px;
}

.mobile-filter-view-tabs-ul-li{
    display: block;
    flex-grow: 1;
    width: 100%;
}

.mobile-filter-view-tabs-btn{
    display: block;
    position: relative;
    border-radius: 3px 3px 0 0;
    transition: color .2s,background .2s,border .2s;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: transparent;
    padding: 13px 13px 9px;
    width: 100%;
    color: #2b87db;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.6px;
    text-align: center;
    text-transform: uppercase;
}

.mobile-filter-view-tabs-btn-active{
    border-color: #e4e4e4;
    border-bottom-color: transparent;
    background-color: #fff;
    color: #121212;
}

.mobile-filter-view-tabs-view{
    display: block;
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
    padding: 25px 15px;
    width: 100%;
}

.mobile-filter-view-tabs-view .p-tabview-nav-content{
    display: none !important;
}

.mobile-filter-view-tabs-view-item:not(:last-child){
    margin-bottom: 25px;
}

.mobile-filter-view-tabs-view-item .p-dropdown{
    border-radius: 40px !important;
}

.mobile-filter-view-tabs-view-item .p-inputtext{
    padding: 10px 15px !important; 
    font-size: 16px !important;
}

.mobile-filter-view-tabs-view-item .p-dropdown .p-dropdown-label.p-placeholder{
    color: #000 !important;
}

.mobile-filter-view-tabs-view-item .p-dropdown:not(.p-disabled).p-focus{
    border: 1px solid #e4e4e4 !important;
}

.mobile-filter-view-tabs-view-item .p-dropdown-panel{
    box-shadow: 0 8px 32px rgb(0 0 0 / 24%) !important;
}

.mobile-filter-view-tabs-view-item-label{
    display: inline-block;
    cursor: pointer;
    color: #7a7a7a;
    font-size: 16px;
    padding-left: 0 !important;
}

.mobile-filter-view-tabs-view-item-content-wrapper{
    margin-top: 6px;
}

.mobile-filter-view-tabs-view-item-content-price-span{
    display: flex;
    align-self: center;
    flex-grow: 1;
    position: relative;
}

.mobile-filter-view-tabs-view-item-content-address-span-input{
    border-radius: 3px;
}
.mobile-filter-view-tabs-view-item-content-price-span-input:first-child{
    border-radius: 3px 0 0 3px;
}

.mobile-filter-view-tabs-view-item-content-price-span-input:last-child{
    border-radius: 0 3px 3px 0;
}

.mobile-filter-view-tabs-view-item-content-price-span-input,
.mobile-filter-view-tabs-view-item-content-address-span-input{
    background: transparent;
    flex-grow: 1;
    padding: 9px 9px 10px;
    font-size: 16px;
    line-height: 1.2;
    transition: border .15s,color .15s;
    outline: none;
    border: 1px solid #c9c9c9;
    width: 100%;
}
.mobile-filter-view-tabs-view-item-content-price-span-input:focus{
    border-color: var(--form-button-color);
}
.mobile-filter-view-tabs-view-item .mobile-filter-apartment-types{
    height: 40px;
    align-items: stretch;
    align-content: stretch;
    display: flex;
    position: relative;
}

.mobile-filter-apartment-types-label{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    padding-right: 20px;
    padding-left: 20px;
    font-size: 16px;
    white-space: nowrap;
    transition: background .15s,border .15s,color .15s;
    cursor: pointer;
    border: 1px solid #c9c9c9;
    position: relative;
    z-index: 0;
    max-width: 100%;
    min-width: 0;
    outline: none;
    color: #000;
}
.mobile-filter-apartment-types-label.active{
    border-color: var(--form-button-color);
    background-color: var(--form-button-color);
    color: #fff;
}
.mobile-filter-apartment-types-label:first-child{
    border-radius: 100px 0 0 100px;
}
.mobile-filter-apartment-types-label:last-child{
    border-radius: 0 100px 100px 0;
}

.mobile-filter-apartment-types-label:not(:first-child) {
    margin-left: -1px;
}

.mobile-filter-apartment-types-label input{
    box-shadow: none;
    height: 0;
    opacity: 0;
    outline: none;
    position: absolute;
    width: 0;
    z-index: -1;
}

/* .mobile-filter-views-room-item .apartment-type_label{
    display: inline-flex;
    align-items: center;
    padding: 0 15px 0 14px;
    min-width: 41px;
    line-height: 19px;
    cursor: pointer;
    border: 1px solid #c9c9c9;
    border-radius: 100px;
    background-color: transparent;
    width: 100%;
    color: #121212;
    font-size: 16px;
    user-select: none;
    text-align: center;
} */

.mobile-filter-views-room-item .apartment-type-btn{
    align-items: center;
    padding: 0 15px 0 14px;
    min-width: 60px;
    height: 41px;
    line-height: 19px;
    user-select: none;
    text-align: center;
    display: inline-flex;
    cursor: pointer;
    border: 1px solid #c9c9c9;
    -webkit-justify-content: center;
    justify-content: center;
    width: 100%;
    border-radius: 100px;
    background-color: transparent;
}

.mobile-filter-views-room-item .apartment-type-btn.active{
    background: var(--form-button-color);
    border-color: var(--form-button-color);
}

.mobile-filter-views-room-item .apartment-type-btn.active .Button__text{
    color: #fff !important;
}

.mobile-filter-views-room-types{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0;
}

.mobile-filter-views-room-item .apartment-type_label{
    width: 100%;
}
.mobile-filter-views-house-item-btn{
    color: #000 !important;
    background: #ffffff;
    border: 1px solid #ced4da;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    padding: 10px 15px !important;
    font-size: 16px !important;
    border-radius: 3px !important;
    cursor: pointer;
    position: relative;
    outline: unset;
}

.mobile-filter-views-house-item-btn:focus{
    border-color: var(--form-button-color);
}

.mobile-filter-views-buttons-container{
    margin-top: 16px;
    max-width: inherit!important;
    width: inherit!important;
}

.mobile-filter-views-buttons-container .Grid{
    margin: 0 auto;
    max-width: 640px;
    width: inherit!important;
}

.Grid {
    -webkit-box-align: start;
    -webkit-box-pack: justify;
    align-items: flex-start;
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.GridCell_size_3{
    width: calc(37.5% - 5px);
}

.GridCell_size_5{
    width: calc(62.5% - 3px);
}

.mobile-filter-views-btn-block{
    font-size: 16px;
    line-height: 44px;
    color: #141414;
    box-shadow: 0 2px 16px #2426291f;
    /* border: 1px solid #141414; */
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    margin: 0;
    outline: 0;
    overflow: hidden;
    position: relative;
    text-align: center;
    transition: color .1s ease;
    user-select: none;
    white-space: nowrap;
    background-color: #fff;
}

.mobile-filter-view-tabs-view .p-tabview .p-tabview-panels{
    padding: 0 !important;
}

.button-yellow{
    background-color: #ffde5a !important;
}

.mobile-filter-views-btn-block i{
    font-size: 20px;
    margin-right: 8px;
}

.agent-single-div-content-div-objects .object-details {
    width: 300px;
}

/* .agent-single-div-content-div-objects  .object-details-description {
    -webkit-line-clamp: 3;
} */

.agent-single-div-content-div-objects .object-details-header .title {
    font-size: 20px;
    line-height: 25px;
}

.agent-single-div-content-div-objects .object-price-list-p {
    font-size: 22px;
    line-height: 25px;
}

.agent-single-div-content-div-objects .object-body-footer {
    justify-content: flex-end;
}

.agent-single-div-content-div-objects .object-item{
    margin-bottom: 20px;
}
/* *************************** Mobile Filter *************************************** */
/* *********************************************************************************** */
/* ************************************* MEDIA *********************************** */
@media screen and (max-width: 575px){
    .realtor__info-main-content {
        flex: 100%;
        text-align: center;
    }
    
    .realtor__info-main_img {
        margin: 40px auto 30px;;
    }
    
    .agent-single-div-header {
        padding-top: 0;
        height: auto;
    }
    
    .agent-single-div-content-div-objects .commercial_page_div_objects_lists_item {
        width: 100%;
    }
    
    /* .realtor__info-main_img_photo,
    .img-box{
        width: 80px !important;
        height: 80px !important;
    }
    
    .img-box img{
        min-width: 80px !important;
        max-width: 80px !important;
        min-height: 80px !important;
    }
    .bvmhS {
        padding: 0 5px !important;
        font-size: .875rem!important;
        min-width: 10px!important;
        min-height: 10px!important;
    }
    
    .realtor__info-main_img__rating {
        bottom: -5px !important;
    } */
    
    .agent-single-div-header-background{
        height: 100%;
    }
    
    .realtor__info-main-content_buttons{
        justify-content: center;
    }
    
    .realtor__info-main-content_call-button:first-child{
        width: 30%;
    }
    
    .realtor-header{
        padding: 20px 0;
    }
    
    
    .mobile-filter-views-house-modal .modal{
        padding: 0 !important;
        width: 100%;
        height: 100%;
    }

    .mobile-filter-views-house-modal .modal-dialog {
        margin: 0;
        width: 100%;
        height: 100%;
    }
    
    .mobile-filter-views-house-modal .modal-content {
        width: 100%;
        height: 100%;
    }
    
    .mobile-filter-views-house-modal .modal .modal-header{
        padding: 16px 16px 0 !important;
        background: #fff;
    }
    
    .mobile-filter-views-house-modal .modal-header .modal-title{
        color: rgba(0,0,0,.92);
        font-size: 20px;
        font-stretch: normal;
        font-style: normal;
        font-weight: 700;
        letter-spacing: normal;
        line-height: 26px;
    }
    
    .mobile-filter-views-house-modal .FiltersFormFieldPanel__controls{
        position: relative;
        z-index: 1;
        visibility: visible;
    }
    
    .mobile-filter-views-house-modal-item{
        -webkit-box-align: center;
        -webkit-box-pack: justify;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        align-items: center;
        cursor: pointer;
        display: flex;
        font-size: 16px;
        justify-content: space-between;
        overflow: hidden;
        position: relative;
        touch-action: manipulation;
        user-select: none;
        z-index: 0;
        line-height: 44px;
        padding: 0 16px;
    }
    
    .Tumbler__title {
        margin-right: 16px;
        color: #000;
    }
    
    .mobile-filter-views-house-modal-item+.mobile-filter-views-house-modal-item:before{
        background: rgba(0,0,0,.08);
        content: " ";
        display: block;
        height: 1px;
        left: 16px;
        position: absolute;
        right: 16px;
        top: 0;
    }
    
    .mobile-filter-views-house-modal-item .p-inputswitch {
        width: 56px;
        height: 32px;
    }
    
    .mobile-filter-views-house-modal-item .p-inputswitch .p-inputswitch-slider:before{
        width: 24px;
        height: 24px;
        margin-top: -12px;
    }
    
    .mobile-filter-views-house-modal-item .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
        transform: translateX(1.8rem);
    }
    
    .FiltersFormFieldPanel__actions{
        display: flex;
        padding: 16px;
    }
    
    .FiltersFormFieldPanel__actions>.Button:not(:last-child) {
        margin-right: 4px;
    }
    
    .FiltersFormFieldPanel__actions>.Button {
        -webkit-box-flex: 1;
        flex-grow: 1;
        width: 100%;
    }
    
    .FiltersFormFieldPanel__actions .Button_theme_islands.Button_size_l {
        font-size: 16px;
        line-height: 44px;
    }
    
    .FiltersFormFieldPanel__actions .Button_theme_islands {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        background: rgba(0,0,0,.2);
        border: 0;
        border-radius: 3px;
        color: #000;
        display: inline-block;
        margin: 0;
        outline: 0;
        padding: 0;
        position: relative;
        text-align: center;
        -webkit-user-select: none;
        user-select: none;
        white-space: nowrap;
    }
    
    .FiltersFormFieldPanel__actions .Button_theme_islands:before {
        background: #fff;
        border-radius: 2px;
        bottom: 1px;
        content: "";
        left: 1px;
        position: absolute;
        right: 1px;
        top: 1px;
        -webkit-transition: background .15s ease-in-out;
        transition: background .15s ease-in-out;
    }
    
    .FiltersFormFieldPanel__actions>.Button:not(:first-child) {
        margin-left: 4px;
    }
    
    .FiltersFormFieldPanel__actions .Button_theme_realty.Button_view_yellow:before {
        background-color: #ffde5a;
    }
    
    .FiltersFormFieldPanel__actions .Button_theme_realty:before {
        border-radius: 8px;
        bottom: 0;
        content: "";
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        -webkit-transition: background-color .1s ease;
        transition: background-color .1s ease;
    }
    
    .FiltersFormFieldPanel__actions .Button_theme_realty.Button_size_l {
        font-size: 16px;
        line-height: 40px;
        padding: 0 16px;
    }
    
    .FiltersFormFieldPanel__actions  .Button_theme_realty.Button_view_yellow {
        color: #000;
    }
    
    .FiltersFormFieldPanel__actions .Button_theme_realty {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        background-color: transparent;
        border: 0;
        border-radius: 8px;
        box-sizing: border-box;
        color: #000;
        cursor: pointer;
        display: inline-block;
        font-family: inherit;
        margin: 0;
        outline: 0;
        overflow: hidden;
        padding: 0;
        position: relative;
        text-align: center;
        -webkit-transition: color .1s ease;
        transition: color .1s ease;
        -webkit-user-select: none;
        user-select: none;
        white-space: nowrap;
    }
    
    .agent-single-div-header-main{
        display: flex;
        justify-content: center;
        height: 100%;
        align-items: center;
    }
}   

@media screen and (max-width: 475px){
    .mobile-filter-apartment-types-label{
        font-size: 14px;
        padding-right: 10px;
        padding-left: 10px;
    }
    
    .mobile-filter-view-tabs-view-item-label,
    .apartment-type_label{
        font-size: 14px;
    }
}

@media screen and (max-width: 450px){
    /* .mobile-filter-views-room-types {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 10px;
    } */
}
</style>