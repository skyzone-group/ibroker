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
                                            
                                        </div>
                                    </div>
                                </div>
                                <!-- Mobile Filter start -->
                                <div v-if="!DesktopFilter"  class="mobile-filter realtor__info-main-filter-filters">
                                    <div class="mobile-filter-view">
                                        <form autocomplete="off" method="GET" :model="form">
                                            <div class="mobile-filter-view-box">
                                                <div class="mobile-filter-view-tabs">
                                                    <div class="single_button_select_box d-flex">
                                                        <label for="object_deals_buy" class="single_button_select_box_label" :class="{'active' : form.object_deals == 'buy'}">
                                                            <input v-model="form.object_deals" id="object_deals_buy" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="buy">
                                                            <span class="single_button_select_box_label_span" :class="{'active_span' : form.object_deals == 'buy'}">Купить</span>
                                                        </label>
                                                        <label for="object_deals_rent" class="single_button_select_box_label" :class="{'active' : form.object_deals == 'rent'}">
                                                            <input v-model="form.object_deals" id="object_deals_rent" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="rent">
                                                            <span class="single_button_select_box_label_span" :class="{'active_span' : form.object_deals == 'rent'}">Снять</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="mobile-filter-view-form">
                                                    <div class="mobile-filter-view-form-guides">
                                                        <div v-for="item in objectTypes" :key="item.id" class="mobile-filter-guide">
                                                            <label :for="`item__${item.id}`" class="single_button_select_box_label" :class="{'active' : form.object_type == item.id}">
                                                                <input v-model="form.object_type" :id="`item__${item.id}`" type="radio" class="single_button_select_box_label_inpt" tabindex="0" :value="item.id">
                                                                <div class="mobile-filter-guide-icon d-flex align-items-center">
                                                                    <img style="width: 30px" :src="`/images/icons/quickfilter/${item.id == 1 ? 'flat' : item.id == 2 ? 'home' : item.id == 3 ? 'office' : item.id == 4 ? 'villa' : 'land'}.png`" alt="">
                                                                    <span class="single_button_select_box_label_span" :class="{'active_span' : form.object_type == item.id}">{{item.name_ru}}</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div class="mobile-filter-guide">
                                                            <button @click="openFilter('bottomright')" class="more-filter-btn" type="button">
                                                                <span class="mobile-filter-guide-icon d-flex align-items-center justify-content-center">
                                                                    <i class="fas fa-filter"></i>
                                                                    Ещё
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="mobile-filter-view-form-btn mt-4">
                                                        <Button type="submit" label="Показать" @click="filterData" :loading="loading[3]"  class="mobile-filter-view-form-btn-submit" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <Dialog v-model:visible="openMobileFilter" :closable="false" :breakpoints="{'640px': '100vw'}" :style="{width: '100vw'}" :position="position" :modal="true" class="mobile-filter-dialog">
                                            <template #header>
                                                <div class="d-flex align-items-center">
                                                    <button @click="openMobileFilter = !openMobileFilter" class="p-dialog-header-icon p-dialog-header-close p-link" aria-label="close" type="button">
                                                        <span class="p-dialog-header-close-icon pi pi-angle-left"></span>
                                                    </button>
                                                </div>
                                                <h1 class="mobile-filter-dialog-header-title">Фильтры</h1>
                                                <button type="button" class="mobile-filter-dialog-header-clear">Сбросить</button>
                                            </template>
                                            <div class="mobile-filter-dialog-body">
                                                <form class="w-100 mobile-filter-dialog-form" :model="form" method="GET">
                                                    <div class="mobile-filter-dialog-form-header">
                                                        <div class="Htvpx">
                                                            <div class="form-item">
                                                                <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                                                    <span class="inputs_block_title">
                                                                        Регион
                                                                    </span>
                                                                    <div class="options_main__items_inputs_block d-flex flex-column">
                                                                        <Dropdown v-model="form.region_id" @change="getDistricts()"
                                                                        optionValue="id" :options="regions" optionLabel="name_ru" placeholder="Выберите регион" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-item">
                                                                <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                                                    <span class="inputs_block_title">
                                                                        Район
                                                                    </span>
                                                                    <div class="options_main__items_inputs_block d-flex flex-column">
                                                                        <MultiSelect v-model="form.district_id" @change="getQuarters()" :options="districts"
                                                                        optionLabel="name_ru" optionValue="id" display="chip" placeholder="Выберите район"
                                                                        :filter="true" panelClass="mobile-filter-form-item-panell"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-item">
                                                                <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                                                    <span class="inputs_block_title">
                                                                        Улица
                                                                    </span>
                                                                    <div class="options_main__items_inputs_block d-flex flex-column">
                                                                        <MultiSelect v-model="form.quarter_id" :options="quarters"
                                                                        optionLabel="name_ru" optionValue="id" display="chip" placeholder="Выберите район"
                                                                        :filter="true" panelClass="mobile-filter-form-item-panell" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div v-if="form.object_type == 3" class="form-item">
                                                                <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                                                    <span class="inputs_block_title">
                                                                        Тип недвижимости
                                                                    </span>
                                                                    <div class="options_main__items_inputs_block d-flex flex-column">
                                                                        <MultiSelect v-model="form.object_types_property_id" :options="objectProperty"
                                                                        optionLabel="name_ru" optionValue="id" display="chip" placeholder="Тип недвижимости"
                                                                        :filter="true" panelClass="mobile-filter-form-item-panell" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-item">
                                                                <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                                                    <span class="inputs_block_title">
                                                                        Цена, y.e.
                                                                    </span>
                                                                    <div class="options_main__items_inputs_block d-flex align-items-center justify-content-center">
                                                                        <div class="input-medium-6 dc-input-6-1-2 h-100 mr-2 w-50">
                                                                            <div class="dc-input__input-container-6-1-2 input_div">
                                                                                <!-- <input id="room_count" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="От" type="number" tabindex="0" v-model.number="form.price_from" name="room_count"> -->
                                                                                <VueNumberFormat v-model:value="form.price_from" class="dc-input__input-6-1-2"></VueNumberFormat>
                                                                            </div>
                                                                        </div>
                                                                        <div class="input-medium-6 dc-input-6-1-2 h-100 w-50">
                                                                            <div class="dc-input__input-container-6-1-2 input_div">
                                                                                <VueNumberFormat v-model:value="form.price_to" class="dc-input__input-6-1-2"></VueNumberFormat>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div v-if="form.object_type != 3 && form.object_type != 5" class="form-item">
                                                                <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                                                    <span class="inputs_block_title">
                                                                        Комнатность
                                                                    </span>
                                                                    <div class="options_main__items_inputs_block d-flex align-items-center justify-content-between">
                                                                        <div class="input-medium-6 dc-input-6-1-2 h-100 mr-2 w-50">
                                                                            <div class="dc-input__input-container-6-1-2 input_div">
                                                                                <input id="room_count_1" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="От" type="number" tabindex="0" v-model.number="form.room_count_from" name="roomCountFrom"/>
                                                                            </div>
                                                                        </div>
                                                                        <div class="input-medium-6 dc-input-6-1-2 h-100 w-50">
                                                                            <div class="dc-input__input-container-6-1-2 input_div">
                                                                                <input id="room_count_2" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="До" type="number" tabindex="0" v-model.number="form.room_count_to" name="roomCountTo"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div v-if="form.object_type == 1" class="form-item">
                                                                <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                                                    <span class="inputs_block_title">
                                                                        Этаж
                                                                    </span>
                                                                    <div class="options_main__items_inputs_block d-flex align-items-center justify-content-between">
                                                                        <div class="input-medium-6 dc-input-6-1-2 h-100 mr-2 w-50">
                                                                            <div class="dc-input__input-container-6-1-2 input_div">
                                                                                <input id="floor_from" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="От" type="number" tabindex="0" v-model.number="form.floor_from" name="floorFrom"/>
                                                                            </div>
                                                                        </div>
                                                                        <div class="input-medium-6 dc-input-6-1-2 h-100 w-50">
                                                                            <div class="dc-input__input-container-6-1-2 input_div">
                                                                                <input id="floor_to" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="До" type="number" tabindex="0" v-model.number="form.floor_to" name="floorTo"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-item">
                                                                <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                                                    <span class="inputs_block_title">
                                                                        Этажность
                                                                    </span>
                                                                    <div class="options_main__items_inputs_block d-flex align-items-center justify-content-between">
                                                                        <div class="input-medium-6 dc-input-6-1-2 h-100 mr-2 w-50">
                                                                            <div class="dc-input__input-container-6-1-2 input_div">
                                                                                <input id="floor_from" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="От" type="number" tabindex="0" v-model.number="form.floor_count_from" name="floorCountFrom"/>
                                                                            </div>
                                                                        </div>
                                                                        <div class="input-medium-6 dc-input-6-1-2 h-100 w-50">
                                                                            <div class="dc-input__input-container-6-1-2 input_div">
                                                                                <input id="floor_to" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="До" type="number" tabindex="0" v-model.number="form.floor_count_to" name="floorCountTo"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-item">
                                                                <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                                                    <span class="inputs_block_title">
                                                                        Площадь, м2
                                                                    </span>
                                                                    <div class="options_main__items_inputs_block d-flex align-items-center justify-content-between">
                                                                        <div class="input-medium-6 dc-input-6-1-2 h-100 mr-2 w-50">
                                                                            <div class="dc-input__input-container-6-1-2 input_div">
                                                                                <input id="totalAreaTo" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="От" type="number" tabindex="0" v-model.number="form.total_area_from" name="totalAreaTo"/>
                                                                            </div>
                                                                        </div>
                                                                        <div class="input-medium-6 dc-input-6-1-2 h-100 w-50">
                                                                            <div class="dc-input__input-container-6-1-2 input_div">
                                                                                <input id="totalAreaTo" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="До" type="number" tabindex="0" v-model.number="form.total_area_to" name="totalAreaTo"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <duv v-if="form.object_type == 2 || form.object_type == 4 || form.object_type == 5" class="form-item">
                                                                <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                                                    <span class="inputs_block_title">
                                                                        Площадь участка (сот.)
                                                                    </span>
                                                                    <div class="options_main__items_inputs_block d-flex align-items-center justify-content-between">
                                                                        <div class="input-medium-6 dc-input-6-1-2 h-100 mr-2 w-50">
                                                                            <div class="dc-input__input-container-6-1-2 input_div">
                                                                                <input id="landAreaFrom" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="От" type="number" tabindex="0" v-model.number="form.land_area_from" name="landAreaFrom"/>
                                                                            </div>
                                                                        </div>
                                                                        <div class="input-medium-6 dc-input-6-1-2 h-100 w-50">
                                                                            <div class="dc-input__input-container-6-1-2 input_div">
                                                                                <input id="landAreaTo" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="До" type="number" tabindex="0" v-model.number="form.land_area_to" name="landAreaTo"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </duv>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <template #footer>
                                                <Button type="submit" @click="filterData" :loading="loading[3]" label="Показать" icon="pi pi-search"/>
                                            </template>
                                        </Dialog>
                                    </div>
                                </div>
                                <!-- Mobile Filter end -->
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <!-- Desktop Filter start -->
                <div v-if="DesktopFilter" class="realtor__info-main-filter-filters desktop-filter">
                    <div class="container_medium" style="position: relative; top: 90px">
                        <form action='' class="FiltersForm_name_main" :model="form" method="GET">
                            <div class="filters-tabs">
                                <div class="filters-tabs-wrapper">
                                    <div class="filters-tabs-wrapper-inner">
                                        <div class="filters-tabs-buttons">
                                            <label for="type__filter_buy" class="filters-tabs-item Radio_theme_realty" :class="{'active' : form.object_deals == 'buy'}">
                                                <input v-model="form.object_deals" id="type__filter_buy" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="buy">
                                                Купить
                                            </label>
                                            <label for="type__filter_rent" class="filters-tabs-item Radio_theme_realty" :class="{'active' : form.object_deals == 'rent'}">
                                                <input v-model="form.object_deals" id="type__filter_rent" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="rent">
                                                Снять
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="FiltersForm__content-filters">
                                <div class="filters-wrapper-item filters-wrapper-item-container-1">
                                    <Dropdown v-model="form.object_type" 
                                    :options="objectTypes" 
                                    optionLabel="name_ru" 
                                    optionValue="id" 
                                    placeholder="Выберите тип"
                                    panelClass="p-multiselect-panell" />
                                </div>
                                <div v-if="form.object_type === 3" class="filters-wrapper-item filters-wrapper-item-container-2 FiltersFormField_name_commercial-type FiltersFormField">
                                    <MultiSelect v-model="form.object_property_id" :options="objectProperty" optionLabel="name_ru" optionValue="id" placeholder="Тип" display="chip" />
                                </div>
                                <div class="filters-wrapper-item filters-wrapper-item-container-2 FiltersFormField_name_price-type FiltersFormField">
                                    <div class="dropdown-filteritem dropdown-room w-100">
                                        <a class="filters-wrapper-item-dropdown dropdown-toggle nohover" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                            <div class="dropdown-label">
                                                {{ (form.price_to != '' && form.price_from != '') ? (`${vueNumberFormat(form.price_to, {})} - ${vueNumberFormat(form.price_from, {})}`) : form.price_to != '' ? `от ${vueNumberFormat(form.price_to, {})}` : form.price_from != '' ? `до ${vueNumberFormat(form.price_from, {})}` : 'Цена'}}         
                                            </div>                               
                                            <div class="dropdown-icon" role="button">
                                                <span><i class="feather icon-chevron-down"></i></span>
                                            </div>
                                        </a>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-filteritem-inputs">
                                                <div class="dropdown-filteritem-inputs-wrapper-groups">
                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                            <input id="room_to" class="dc-input__input-6-1-2" v-model="form.price_to" maxlength="24" name="room_to" type="number" placeholder="от" tabindex="0"  />
                                                        </div>
                                                    </div>
                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                            <input id="room_from" class="dc-input__input-6-1-2" v-model="form.price_from" maxlength="24" name="room_from" type="number" placeholder="до" tabindex="0"  />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="form.object_type != 3 && form.object_type != 5" class="filters-wrapper-item filters-wrapper-item-container-2 FiltersFormField_name_room_count FiltersFormField">
                                    <div class="dropdown-filteritem dropdown-room w-100">
                                        <a class="filters-wrapper-item-dropdown dropdown-toggle nohover" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                            <div class="dropdown-label">
                                                {{ (form.room_to != '' && form.room_from != '') ? (`${form.room_to} - ${form.room_from}`) : form.room_to != '' ? `от ${form.room_to}` : form.room_from != '' ? `до ${form.room_from}` : 'Комнат'}}
                                            </div> 
                                            <div class="dropdown-icon" role="button">
                                                <span><i class="feather icon-chevron-down"></i></span>
                                            </div>
                                        </a>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-filteritem-inputs">
                                                <div class="dropdown-filteritem-inputs-wrapper-groups">
                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                            <input id="room_to" class="dc-input__input-6-1-2" v-model="form.room_to" maxlength="24" name="room_to" type="number" placeholder="от" tabindex="0"  />
                                                        </div>
                                                    </div>
                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                            <input id="room_from" class="dc-input__input-6-1-2" v-model="form.room_from" maxlength="24" name="room_from" type="number" placeholder="до" tabindex="0"  />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="filters-wrapper-item filters-wrapper-item-container-2 FiltersFormField FiltersFormField_name_address">
                                    <div class="filter-price-type d-flex align-items-center filters-wrapper-item-padding w-100">
                                        <span class="TextInput__box w-100">
                                            <input type="text" class="TextInput__control" v-model="form.keyword" name="keyword" placeholder="Введите район, улицу..." maxlength="200" autocomplete="off">
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div v-if="FilterMoreOptions" class="FiltersForm__content-filters">
                                <div class="filters-wrapper-item filters-wrapper-item-container-1">
                                    <Dropdown v-model="form.region_id" 
                                    :options="regions" 
                                    optionLabel="name_ru" 
                                    optionValue="id" 
                                    :loading="loading[0]"
                                    @change="getDistricts()" 
                                    placeholder="Выберите регион"
                                    panelClass="p-multiselect-panell" />
                                </div>
                                <div class="filters-wrapper-item filters-wrapper-item-container-1">
                                    <MultiSelect v-model="form.district_id" @change="getQuarters()" 
                                    :loading="loading[1]"
                                    :options="districts"
                                    optionLabel="name_ru" 
                                    optionValue="id" 
                                    display="chip" 
                                    placeholder="Выберите район"
                                    :filter="true" panelClass="p-multiselect-panell">
                                        <template #empty>
                                            <div class="flex align-items-center p-2" style="height: 38px" >
                                                No available options
                                            </div>
                                        </template>
                                    </MultiSelect>
                                </div>
                                <div class="filters-wrapper-item filters-wrapper-item-container-1">
                                    <MultiSelect v-model="form.quarter_id" 
                                    :loading="loading[2]"
                                    :options="quarters"
                                    optionLabel="name_ru" 
                                    optionValue="id" 
                                    display="chip" 
                                    placeholder="Выберите улица"
                                    :filter="true" panelClass="p-multiselect-panell">
                                        <template #empty>
                                            <div class="flex align-items-center p-2" style="height: 38px" >
                                                No available options
                                            </div>
                                        </template>
                                    </MultiSelect>
                                </div>
                                <div v-if="form.object_type == 1" class="filters-wrapper-item filters-wrapper-item-container-2 FiltersFormField_name_price-type FiltersFormField">
                                    <div class="dropdown-filteritem dropdown-room w-100">
                                        <a class="filters-wrapper-item-dropdown dropdown-toggle nohover" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                            <div class="dropdown-label">
                                                {{ (form.floor_from != '' && form.floor_to != '') ? (`${form.floor_from} - ${form.floor_to}`) : form.floor_from != '' ? `от ${form.floor_from}` : form.floor_to != '' ? `до ${form.floor_to}` : 'Этаж'}}         
                                            </div>                               
                                            <div class="dropdown-icon" role="button">
                                                <span><i class="feather icon-chevron-down"></i></span>
                                            </div>
                                        </a>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-filteritem-inputs">
                                                <div class="dropdown-filteritem-inputs-wrapper-groups">
                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                            <input id="room_to" class="dc-input__input-6-1-2" v-model="form.floor_from" maxlength="24" name="room_to" type="number" placeholder="от" tabindex="0"  />
                                                        </div>
                                                    </div>
                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                            <input id="room_from" class="dc-input__input-6-1-2" v-model="form.floor_to" maxlength="24" name="room_from" type="number" placeholder="до" tabindex="0"  />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="filters-wrapper-item filters-wrapper-item-container-2 FiltersFormField_name_price-type FiltersFormField">
                                    <div class="dropdown-filteritem dropdown-room w-100">
                                        <a class="filters-wrapper-item-dropdown dropdown-toggle nohover" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                            <div class="dropdown-label">
                                                {{ (form.floor_count_from != '' && form.floor_count_to != '') ? (`${form.floor_count_from} - ${form.floor_count_to}`) : form.floor_count_from != '' ? `от ${form.floor_count_from}` : form.floor_count_to != '' ? `до ${form.floor_count_to}` : 'Этажность'}}         
                                            </div>                               
                                            <div class="dropdown-icon" role="button">
                                                <span><i class="feather icon-chevron-down"></i></span>
                                            </div>
                                        </a>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-filteritem-inputs">
                                                <div class="dropdown-filteritem-inputs-wrapper-groups">
                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                            <input id="room_to" class="dc-input__input-6-1-2" v-model="form.floor_count_from" maxlength="24" name="room_to" type="number" placeholder="от" tabindex="0"  />
                                                        </div>
                                                    </div>
                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                            <input id="room_from" class="dc-input__input-6-1-2" v-model="form.floor_count_to" maxlength="24" name="room_from" type="number" placeholder="до" tabindex="0"  />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="filters-wrapper-item filters-wrapper-item-container-2 FiltersFormField_name_price-type FiltersFormField" style="max-width: 100%; flex: 1;">
                                    <div class="dropdown-filteritem dropdown-room w-100">
                                        <a class="filters-wrapper-item-dropdown dropdown-toggle nohover" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                            <div class="dropdown-label">
                                                {{ (form.total_area_from != '' && form.total_area_to != '') ? (`${form.total_area_from} - ${form.total_area_to}`) : form.total_area_from != '' ? `от ${form.total_area_from}` : form.total_area_to != '' ? `до ${form.total_area_to}` : 'Площадь, м2'}}         
                                            </div>                               
                                            <div class="dropdown-icon" role="button">
                                                <span><i class="feather icon-chevron-down"></i></span>
                                            </div>
                                        </a>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-filteritem-inputs">
                                                <div class="dropdown-filteritem-inputs-wrapper-groups">
                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                            <input id="totalAreaFrom" class="dc-input__input-6-1-2" v-model="form.total_area_from" maxlength="24" name="totalAreaFrom" type="number" placeholder="от" tabindex="0"  />
                                                        </div>
                                                    </div>
                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                            <input id="totalAreaTo" class="dc-input__input-6-1-2" v-model="form.total_area_to" maxlength="24" name="totalAreaTo" type="number" placeholder="до" tabindex="0"  />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="form.object_type == 2 || form.object_type == 4 || form.object_type == 5" class="filters-wrapper-item filters-wrapper-item-container-2 FiltersFormField_name_price-type FiltersFormField" style="max-width: 100%; flex: 1;">
                                    <div class="dropdown-filteritem dropdown-room w-100">
                                        <a class="filters-wrapper-item-dropdown dropdown-toggle nohover" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                            <div class="dropdown-label">
                                                {{ (form.land_area_from != '' && form.land_area_to != '') ? (`${form.land_area_from} - ${form.land_area_to}`) : form.land_area_from != '' ? `от ${form.land_area_from}` : form.land_area_to != '' ? `до ${form.land_area_to}` : 'Площадь участка (сот.)'}}         
                                            </div>                               
                                            <div class="dropdown-icon" role="button">
                                                <span><i class="feather icon-chevron-down"></i></span>
                                            </div>
                                        </a>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-filteritem-inputs">
                                                <div class="dropdown-filteritem-inputs-wrapper-groups">
                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                            <input id="landAreaFrom" class="dc-input__input-6-1-2" v-model="form.land_area_from" maxlength="24" name="landAreaFrom" type="number" placeholder="от" tabindex="0"  />
                                                        </div>
                                                    </div>
                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                            <input id="landAreaTo" class="dc-input__input-6-1-2" v-model="form.land_area_to" maxlength="24" name="landAreaTo" type="number" placeholder="до" tabindex="0"  />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="filters-wrapper mt-4 w-100 d-flex">
                                <div class="filters-button-container d-flex align-items-center justify-content-end w-100">
                                    <span class="filter_search_btn">
                                        <Button  @click="FilterMoreOptions = !FilterMoreOptions" type="button" icon="pi pi-sliders-v" label="Дополнительные параметры" class="p-button-link" style="font-size: 14px;" />
                                    </span>
                                    <span class="filter_search_btn">
                                        <Button @click="filterData" :loading="loading[3]" type="submit" label="Найти" class="filter_search_btn-link" />
                                    </span>
                                </div>
                                <Dialog :draggable="false" :dismissableMask="true" header="Header" v-model:visible="displayModal" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}" :modal="true">
                                    <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <template #footer>
                                        <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
                                        <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus />
                                    </template>
                                </Dialog>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- Desktop Filter end -->
                </div>
            </div>
            
            <div class="agent-single-div-content">
                <div class="agent-single-div-content-block">
                    <div class="agent-single-container">
                        <div class="agent-single-div-content-div">
                            <h1 class="agent-single-div-content-div-objects-title">Мои объявления</h1>
                            <div class="row">
                                <div class="col-lg-3">
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
                                                        <div class="object-price-list d-flex align-items-center">
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
                                                </div>
                                                <div class="object-body-footer justify-content-end">
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
                                <div class="col-lg-3">
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
                                                        <div class="object-price-list d-flex align-items-center">
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
                                                </div>
                                                <div class="object-body-footer justify-content-end">
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
                                    <div class="objects-paginator">
                                        <Paginator :rows="10" 
                                        template="PrevPageLink PageLinks NextPageLink"
                                        :totalRecords="totalRecords"></Paginator>
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
import '../../../../public/css/mobile-filter-page.css'
// import required modules
import { Autoplay, Pagination, Lazy, FreeMode, Navigation } from "swiper";
import CopyToClipboard from '../../components/CopyToClipboard.vue'
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
import InputSwitch from 'primevue/inputswitch';
import Paginator from 'primevue/paginator';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import { mapGetters } from 'vuex'
export default {
    components: {
        Swiper,
        SwiperSlide,
        Dropdown,
        MultiSelect,
        InputSwitch,
        CopyToClipboard,
        Paginator,
        Button,
        Dialog
    },
    data() {
        return {
            form: {
                object_deals: 'buy',
                object_type: 1,
                room_to: '',
                room_from: '',
                price_to: '',
                price_from: '',
                object_property_id: [],
                keyword: '',
                region_id: null,
                district_id: [],
                quarter_id: [],
                floor_from: '',
                floor_to: '',
                floor_count_from: '',
                floor_count_to: '',
                total_area_from: '',
                total_area_to: '',
                land_area_from: '',
                land_area_to: '',
            },
            regions: [],
            districts: [],
            quarters: [],
            loading: [false,false,false,false],
            showPhoneNumber: false,
            active4: 0,
            DesktopFilter: false,
            mobilePrice: false,
            objectBtns: false,
            open: null,
            totalRecords: 120,
            typeSearch: 'buy',
            newBuildingsType: [
                {name: 'Срок сдачи', code: 'deadline'},
                {name: 'Сдан', code: 'was_passed'},
                {name: 'Строится', code: 'under_construction'},
                {name: 'Полгода', code: 'half_a_year'},
                {name: '1 год', code: 'a_year'},
                {name: '1,5 года', code: 'a_half_year'},
            ],
            checked1: false,
            actionMobile: false,
            displayModal: false,
            FilterMoreOptions: false,
            openMobileFilter: false,
            position: false,

        }
    },
    setup() {
        return {
            modules: [Autoplay,Pagination,Lazy,FreeMode,Navigation],
        };
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        this.allRegionQuarterDistrict();
    },
    methods: {
        filterData(){
            this.loading[3] = true;
            axios.get('/api/object/search', this.form)
            .then(response => {
                setTimeout(() => {
                    this.loading[3] = false;
                },1000);
            })
            .catch(function (error){
                alert(error);
            });
        },
        toggle(id) {
            this.open = this.open === id ? null : id
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            
            if(this.windowWidth <= 767){
                this.DesktopFilter = false;
                this.actionMobile = true;
                return;
            }
            
            this.DesktopFilter = true;
            this.actionMobile = false;
            return;
        },
        openModal() {
            this.displayModal = true;
        },
        openFilter(position){
            this.position = position;
            this.openMobileFilter = true;
        },
        allRegionQuarterDistrict(){
            this.loading[0] = true;
            axios.get('/api/allRegionQuarterDistrict')
            .then(response => {
                this.regions = response.data.result
                this.loading[0] = false;
            })
            .catch(function (error){
                this.loading[0] = false;
            });
        },
        
        getDistricts() {
            this.loading[1] = true;
            let region_id = this.form.region_id;
            this.form.district_id = [];
            this.form.quarter_id = [];

            this.regions.forEach(region => {
                if(region.id == this.form.region_id){
                    this.districts = region.districts;
                }
            })

            this.loading[1] = false;
        },
        getQuarters() {
            this.loading[2] = true;
            this.form.quarter_id = [];
            this.quarters = [];

            this.regions.forEach(region => {
                if(region.id == this.form.region_id){
                    region.districts.forEach(district => {
                        if(this.form.district_id.includes(district.id)){
                            this.quarters.push(...district.quarters);
                        }
                    })
                }
            })
            this.quarters.sort(function (a, b) {
                return a.name_ru.localeCompare(b.name_ru);
            });
            this.loading[2] = false;
        }
    },
    mounted() {
        this.$store.dispatch('getObjectTypes');
        this.$store.dispatch('getObjectTypesProperty');
    },
    computed: {
        ...mapGetters([
            'objectTypes',
            'objectProperty',
        ]),
    },
}
</script>


<style>
.agent-single-div-header{
    background: url('/images/agent-single.jpg') top left repeat;
    background-size: cover;
    background-color: #b4b5b8;
    height: 400px;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
}

.agent-single-div-header:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

.agent-single-container{
    padding: 0 16px;
}

/* .agent-single-div-header-background{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(21, 25, 27, 0.61);
    width: 100%;
    height: 400px;
} */

/* .agent-single-div-header-banner{
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
} */

.desktop-filter{
    transition: all 0.4s;
    position: absolute;
    bottom: 0;
    width: 100%;
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
    padding: 20px 24px 24px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 6px 1px #24262914;
}

.filters-tabs{
    max-width: 100vw;
    position: relative;
}

.filters-tabs-wrapper {
    overflow: hidden;
    position: relative;
    user-select: none;
    z-index: 1;
}

.filters-tabs-wrapper-inner{
    overflow-x: auto;
    overflow-y: hidden;
}

.filters-tabs-buttons{
    display: table;
    white-space: nowrap;
}

.FiltersForm__content {
    height: 100%;
    max-width: 1109px;
    margin: 0 auto;
}
.FiltersForm__content-filters{
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    display: flex;
    margin-top: 12px;
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

.agent-single-div-content{
    margin-top: 120px;
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
    align-items: center;
    display: flex;
}


.filters-wrapper-item+.filters-wrapper-item {
    border-left: 1px solid #e5e5e5;
}

.filters-wrapper-item-container-1{
    flex-shrink: 0;
    width: 200px;
}

.filters-wrapper-item .p-inputtext {
    font-size: 14px;
    padding: 15px 10px;
}

.filters-wrapper-item-dropdown{
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    width: 100%;
}

.filters-wrapper-item-dropdown .dropdown-label{
    padding: 15px 10px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
}

.filters-wrapper-item-dropdown .dropdown-icon{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: #6c757d;
    width: 2.357rem;
}


.filters-wrapper-item-dropdown .dropdown-icon span i{
    font-size: 20px;
}

.filters-wrapper-item .dropdown-filteritem .dropdown-toggle::after {
    display: none;
}


.filters-wrapper-item .dropdown-filteritem .dropdown-filteritem-inputs{
    padding: 16px;
}

.filters-wrapper-item .dropdown-filteritem .dropdown-filteritem-inputs .dropdown-filteritem-inputs-wrapper-groups{
    display: flex;
    position: relative;
    flex-wrap: nowrap;
}

.dropdown-filteritem-inputs-wrapper-groups .input-medium-6, 
.dropdown-filteritem-inputs-wrapper-groups .dc-input__input-container-6-1-2 {
    height: 35px;
}

.dropdown-filteritem-inputs-wrapper-groups .dc-input__input-6-1-2{
    display: block;
    outline: none !important;
    border: none !important;
    background: transparent;
    padding: 0 !important;
    width: 100% !important;
    overflow: visible;
    font-size: inherit !important;
    line-height: inherit;
}

.dropdown-filteritem-inputs-wrapper-groups .input-medium-6:not(:first-child){
    margin-left: 8px;
}

.dropdown-filteritem-inputs-wrapper-groups  .input_div {
    overflow: hidden;
    padding-left: 8px;
}

.FiltersFormField_name_roomsTotal{
    flex-basis: 250px;
    max-width: 250px;
}

.FiltersFormField_name_price-type, 
.FiltersFormField_name_room_count,
.FiltersFormField_name_commercial-type{
    max-width: 156px;
    flex: 0 0 156px;
    width: 100%;
}


.filter_search_btn .p-button.p-button-link:enabled:focus {
    background: transparent;
    box-shadow: unset;
    border-color: transparent;
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
.filters-wrapper-item .p-multiselect .p-multiselect-label.p-placeholder,
.filters-wrapper-item .filters-wrapper-item-dropdown {
    background: transparent;
    line-height: 20px;
    font-weight: 400;
    color: #242629;
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
    appearance: none;
    background: none;
    border: none;
    border-bottom: 2px solid #0000;
    box-shadow: none;
    box-sizing: border-box;
    color: #737476;
    cursor: pointer;
    display: inline-block;
    font: 600 14px/20px Lato,sans-serif;
    height: 32px;
    letter-spacing: normal;
    margin: 0;
    outline: none;
    padding: 0;
    text-align: left;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
    transition: .15s ease-in-out;
    white-space: nowrap;
}

.filters-tabs-item+.filters-tabs-item {
    margin-left: 32px;
}

.filters-tabs-item.active{
    border-bottom-color: var(--form-button-color);
    color: var(--form-button-color);
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
    margin: 0 0 20px 0;
}

.mobile-filter-view-tabs .single_button_select_box_label{
    background-color: hsla(0,0%,96.5%,.5);
    border: 1px solid transparent;
    border-radius: 3px 3px 0 0;
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.6px;
    padding: 13px 13px 9px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    height: unset;
    transition: color .2s,background .2s,border .2s;
    width: 100%;
}


.mobile-filter-view-tabs .single_button_select_box_label_span{
    color: #fff;
    font-size: 16px;
}

.mobile-filter-view-tabs .single_button_select_box_label.active{
    background-color: #fff;
    border-color: #e4e4e4 #e4e4e4 transparent;
}

.mobile-filter-view-tabs .single_button_select_box_label_span.active_span{
    color: #121212;
}

.mobile-filter-view-form{
    background-color: #fff;
    border: 1px solid #e4e4e4;
    /* border-radius: 0 0 3px 3px; */
    box-sizing: border-box;
    display: block;
    padding: 25px 10px;
    width: 100%;
}

.mobile-filter-view-form-guides .mobile-filter-guide .single_button_select_box_label.active {
    background-color: #d7f9e3;
    border: 1px solid var(--form-button-color);
}

.mobile-filter-view-form-btn  .p-button{
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    font-size: 17px;
    line-height: 1.5rem;
    background-color: var(--form-button-color);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: color .3s,background-color .3s;
    -webkit-tap-highlight-color: transparent;
}

.mobile-filter-view-form-btn  .p-button:enabled:hover,
.mobile-filter-view-form-btn  .p-button:enabled:active {
    background: #d7f9e3;
    color: #000;
    border-color: #d7f9e3;
}

.mobile-filter-view-form-btn .p-button:focus {
    box-shadow: unset;
}

.agent-single-div-content-div .object-item-block {
    flex-direction: column;
}

.agent-single-div-content-div .object-photos {
    width: 100%;
}

.agent-single-div-content-div  .object-body,
.agent-single-div-content-div .object-body-footer{
    margin: 15px 0 0 0;
}

.agent-single-div-content-div .object-details-description {
    -webkit-line-clamp: 3;
}

.agent-single-div-content-div .object-photos-thumb {
    height: 200px;
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