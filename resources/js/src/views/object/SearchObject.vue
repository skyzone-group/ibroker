<template>
    <div class="search-object-main">
        <div v-if="!sideBarFilter" class="search-object-top">
            <div class="container_fluid">
                <div class="search-object-top-box">
                    <form @submit.prevent="searchObjectTest" :model="form" method="GET">
                        <div class="d-flex w-100">
                            <button @click="openFilter" type="button" class="search-object-top-btn">
                                <div class="search-object-top-btn-box position-relative">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.32929 4C7.91746 5.16519 6.80622 6 5.5 6C4.19378 6 3.08254 5.16519 2.67071 4H1C0.447715 4 2.62268e-07 3.55228 2.62268e-07 3C2.62268e-07 2.44772 0.447715 2 1 2H2.67071C3.08254 0.834808 4.19378 0 5.5 0C6.80622 0 7.91746 0.834808 8.32929 2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H8.32929ZM4.5 3C4.5 2.44772 4.94772 2 5.5 2C6.05229 2 6.5 2.44772 6.5 3C6.5 3.55228 6.05229 4 5.5 4C4.94772 4 4.5 3.55228 4.5 3Z" fill="#242629"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.67071 10C6.08254 8.83481 7.19378 8 8.5 8C9.80622 8 10.9175 8.83481 11.3293 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H11.3293C10.9175 13.1652 9.80622 14 8.5 14C7.19378 14 6.08254 13.1652 5.67071 12H1C0.447715 12 4.82825e-08 11.5523 0 11C-4.8282e-08 10.4477 0.447715 10 1 10H5.67071ZM9.5 11C9.5 11.5523 9.05228 12 8.5 12C7.94772 12 7.5 11.5523 7.5 11C7.5 10.4477 7.94772 10 8.5 10C9.05228 10 9.5 10.4477 9.5 11Z" fill="#242629"></path>
                                    </svg>
                                    <span class="vx1-X position-relative">Фильтры</span>
                                    <div 
                                    v-if="form.room_count_from != '' || form.room_count_to != '' || form.floor_from != '' || form.floor_to != '' || form.floor_count_from != '' || form.floor_count_to != '' || form.price_from > 0 || form.price_to > 0" 
                                    class="+wich"></div>
                                </div>
                            </button>
                            <div class="search-object-top-dropdown position-relative">
                                <button type="button" class="search-object-top-btn" data-toggle="dropdown" aria-expanded="false">
                                    <span class="eefL3">{{form.object_deals == 'buy' ? 'Купить' : 'Снять'}}</span>
                                </button>
                                <div class="dropdown-menu">
                                    <div class="dropdown-filteritem-inputs">
                                        <div class="single_button_select_box d-flex">
                                            <label for="object_deals-buy" class="single_button_select_box_label" :class="{'active' : form.object_deals == 'buy'}">
                                                <input v-model="form.object_deals" id="object_deals-buy" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="buy">
                                                <span class="single_button_select_box_label_span" :class="{'active_span' : form.object_deals == 'buy'}">Купить</span>
                                            </label>
                                            <label for="object_deals-rent" class="single_button_select_box_label" :class="{'active' : form.object_deals == 'rent'}">
                                                <input v-model="form.object_deals" id="object_deals-rent" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="rent">
                                                <span class="single_button_select_box_label_span" :class="{'active_span' : form.object_deals == 'rent'}">Снять</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="search-object-top-dropdown position-relative">
                                <Dropdown v-model="form.object_type" :options="objectTypes" optionLabel="name_ru" optionValue="id" :loading="loading[0]" placeholder="Выберите" panelClass="p-multiselect-panell" />
                            </div>
                            <div v-if="addressDesktop" class="search-object-top-dropdown position-relative">
                                <Dropdown v-model="form.region_id" :options="regions" optionLabel="name_ru" :loading="loading[0]"  @change="getDistricts()" optionValue="id" placeholder="Выберите регион" panelClass="p-multiselect-panell" />
                            </div>
                            <div v-if="addressDesktop" class="search-object-top-dropdown position-relative">
                                <MultiSelect v-model="form.district_id" @change="getQuarters()" :options="districts"
                                optionLabel="name_ru" optionValue="id" display="chip" placeholder="Выберите район"
                                :filter="true" panelClass="p-multiselect-panell" />
                            </div>
                            <div v-if="addressDesktop" class="search-object-top-dropdown position-relative">
                                <MultiSelect v-model="form.quarter_id" :options="quarters"
                                optionLabel="name_ru" optionValue="id" display="chip" placeholder="Выберите улица"
                                :filter="true" panelClass="p-multiselect-panell" />
                            </div>
                            <div class="search-object-top-dropdown position-relative w-100">
                                <div>
                                    <div class="input-medium-6 dc-input-6-1-2 w-100">
                                        <div class="dc-input__input-container-6-1-2 input_div">
                                            <input id="keyword" class="dc-input__input-6-1-2" name="keyword" type="text" placeholder="Введите район, улицу..." tabindex="0" v-model="form.keyword" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="search-object-top--formbtn position-relative">
                                <!-- <button type="submit" class="search-object-top-form-btn">
                                    <div class="search-object-top-btn-box position-relative">
                                        <span class="vx1-X position-relative">Найти</span>
                                    </div>
                                </button> -->
                                <Button type="submit" :loading="loading[3]" class="search-object-top-form-btn" label="Найти"/>
                            </div>
                        </div>
                        <div class="search-object-top-more-filter">
                            <Dialog header="Фильтры" v-model:visible="moreOptions" 
                            class="more-filter-modal"
                            :breakpoints="{'960px': '75vw', '640px': '90vw'}" 
                            :style="{width: '50vw'}" 
                            :dismissableMask="true" 
                            :draggable="false" 
                            :modal="true">
                                <div>
                                    <div class="more-filter-item">
                                        <div class="more-filter-item-left">
                                            <div class="DPOrE">
                                                <span style="font-weight: 600;">Тип сделки</span>
                                            </div>
                                        </div>
                                        <div class="more-filter-item-first">
                                            <div class="single_button_select_box d-flex">
                                                <label for="object_deals-buy" class="single_button_select_box_label" :class="{'active' : form.object_deals == 'buy'}">
                                                    <input v-model="form.object_deals" id="object_deals-buy" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="buy">
                                                    <span class="single_button_select_box_label_span" :class="{'active_span' : form.object_deals == 'buy'}">Купить</span>
                                                </label>
                                                <label for="object_deals-rent" class="single_button_select_box_label" :class="{'active' : form.object_deals == 'rent'}">
                                                    <input v-model="form.object_deals" id="object_deals-rent" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="rent">
                                                    <span class="single_button_select_box_label_span" :class="{'active_span' : form.object_deals == 'rent'}">Снять</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="more-filter-item">
                                        <div class="more-filter-item-left">
                                            <div class="DPOrE">
                                                <span style="font-weight: 600;">Вид недвижимости</span>
                                            </div>
                                        </div>
                                        <div class="position-relative">
                                            <Dropdown v-model="form.object_type" :options="objectTypes" optionLabel="name_ru" optionValue="id" :loading="loading[0]" placeholder="Выберите"/>
                                        </div>
                                    </div>
                                    <div v-if="form.object_type === 3"  class="more-filter-item">
                                        <div class="more-filter-item-left">
                                            <div class="DPOrE">
                                                <span style="font-weight: 600;">Тип недвижимости</span>
                                            </div>
                                        </div>
                                        <div class="position-relative" style="width: 50%;">
                                            <div class="additional_options_main">
                                                <div class="row">
                                                    <div v-for="item in objectProperty" :key="item.id" class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <div class="additional_options_main_item adddtional_types_media">
                                                            <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                <div class="adddtional_main_block">
                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                        <Checkbox :id="`add_option_${item.id}`" name="options[]" :value="item.id" v-model="form.object_types_property_id"/>
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
                                    <div v-if="form.object_type != 3 && form.object_type != 5" class="more-filter-item">
                                        <div class="more-filter-item-left">
                                            <div class="DPOrE">
                                                <span style="font-weight: 600;">Количество комнат</span>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center more-filter-item-second">
                                            <div class="input-medium-6 dc-input-6-1-2">
                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                    <input id="room_to" class="dc-input__input-6-1-2" v-model="form.room_count_from" maxlength="24" name="room_to" type="number" placeholder="от" tabindex="0"  />
                                                </div>
                                            </div>
                                            <div class="input-medium-6 dc-input-6-1-2">
                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                    <input id="room_from" class="dc-input__input-6-1-2" v-model="form.room_count_to" maxlength="24" name="room_from" type="number" placeholder="до" tabindex="0"  />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="more-filter-item">
                                        <div class="more-filter-item-left">
                                            <div class="DPOrE">
                                                <span style="font-weight: 600;">Цена</span>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center more-filter-item-third">
                                            <div class="input-medium-6 dc-input-6-1-2">
                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                    <InputNumber inputClass="dc-input__input-6-1-2" inputId="price_from" min="0" v-model="form.price_from" placeholder="от" prefix="$"/>
                                                </div>                                        
                                            </div>
                                            <div class="input-medium-6 dc-input-6-1-2">
                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                    <InputNumber inputClass="dc-input__input-6-1-2" inputId="price_to" min="0" v-model="form.price_to" placeholder="до" prefix="$"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="form.object_type == 1" class="more-filter-item">
                                        <div class="more-filter-item-left">
                                            <div class="DPOrE">
                                                <span style="font-weight: 600;">Этаж</span>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center more-filter-item-second">
                                            <div class="input-medium-6 dc-input-6-1-2">
                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                    <input id="floor_from" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="от" type="number" tabindex="0" v-model.number="form.floor_from" name="floorFrom"/>
                                                </div>
                                            </div>
                                            <div class="input-medium-6 dc-input-6-1-2">
                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                    <input id="floor_to" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="до" type="number" tabindex="0" v-model.number="form.floor_to" name="floorTo"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="form.object_type != 3 && form.object_type != 5" class="more-filter-item">
                                        <div class="more-filter-item-left">
                                            <div class="DPOrE">
                                                <span style="font-weight: 600;">Этажность</span>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center more-filter-item-second">
                                            <div class="input-medium-6 dc-input-6-1-2">
                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                    <input id="floor_count_from" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="от" type="number" tabindex="0" v-model.number="form.floor_count_from" name="floorCountFrom"/>
                                                </div>
                                            </div>
                                            <div class="input-medium-6 dc-input-6-1-2">
                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                    <input id="floor_count_to" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="до" type="number" tabindex="0" v-model.number="form.floor_count_to" name="floorCountTo"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="more-filter-item">
                                        <div class="more-filter-item-left">
                                            <div class="DPOrE">
                                                <span style="font-weight: 600;">Общая площадь, м2</span>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center more-filter-item-second">
                                            <div class="input-medium-6 dc-input-6-1-2">
                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                    <input id="totalAreaTo" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="от" type="number" tabindex="0" v-model.number="form.total_area_from" name="totalAreaTo"/>
                                                </div>
                                            </div>
                                            <div class="input-medium-6 dc-input-6-1-2">
                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                    <input id="totalAreaTo" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="до" type="number" tabindex="0" v-model.number="form.total_area_to" name="totalAreaTo"/>
                                                </div>
                                                <div class="dc-input__input-icon-right dc-input__input-icon-right-font">м²</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="form.object_type == 2 || form.object_type == 4" class="more-filter-item">
                                        <div class="more-filter-item-left">
                                            <div class="DPOrE">
                                                <span style="font-weight: 600;">Площадь участка (сот.)</span>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center more-filter-item-second">
                                            <div class="input-medium-6 dc-input-6-1-2">
                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                    <input id="landAreaFrom" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="от" type="number" tabindex="0" v-model.number="form.land_area_from" name="landAreaFrom"/>
                                                </div>
                                            </div>
                                            <div class="input-medium-6 dc-input-6-1-2">
                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                    <input id="landAreaTo" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="до" type="number" tabindex="0" v-model.number="form.land_area_to" name="landAreaTo"/>
                                                </div>
                                                <div class="dc-input__input-icon-right dc-input__input-icon-right-font">м²</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <template #footer>
                                    <button @click="moreOptions = !moreOptions" class="more-filter-modal-btn button-root--primary-outline-8-2-0">
                                        <span class="button-root__text-8-2-0">Закрыть</span>
                                    </button>
                                    <Button @click="searchObjectTest" :loading="loading[3]" class="more-filter-modal-btn" label="Показать"/>
                                </template>

                            </Dialog>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="search-object-body" :class="{'h-100vh' : loaderProgress == true}">
            <div class="container_medium">
                <div class="search-object-body-box-content">
                    <div class="search-object-body-box-content-objects">
                        <div v-if="!sideBarFilter" class="objects-top row ml-0 mr-0">
                            <div class="col align-self-center pl-0">
                                <div class="objects-total">{{vueNumberFormat(objectsCount, {prefix: ''})}} объявлений</div>
                            </div>
                            <div class="col align-self-center pr-0">
                                <Dropdown @change="pushParamsURL()" 
                                v-model="form.sort_direction" 
                                :options="sortOptions" 
                                optionLabel="name_ru" 
                                optionValue="id" 
                                placeholder="Сортировка" 
                                panelClass="sort-object-dropdown"/>
                            </div>
                        </div>
                        <div v-if="sideBarFilter" class="mobile-filter-sort-box d-flex align-items-center justify-content-between">
                            <div class="objects-total">{{vueNumberFormat(objectsCount, {prefix: ''})}} объявлений</div>
                            <div class="mobile-filter-sort-btns">
                                <button @click="openModal('bottomright')" type="button" class="mobile-filter mobile-search-btn">
                                    <span class="dropdownButton-button__icon-0-7-0">
                                        <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.32929 4C7.91746 5.16519 6.80622 6 5.5 6C4.19378 6 3.08254 5.16519 2.67071 4H1C0.447715 4 2.62268e-07 3.55228 2.62268e-07 3C2.62268e-07 2.44772 0.447715 2 1 2H2.67071C3.08254 0.834808 4.19378 0 5.5 0C6.80622 0 7.91746 0.834808 8.32929 2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H8.32929ZM4.5 3C4.5 2.44772 4.94772 2 5.5 2C6.05229 2 6.5 2.44772 6.5 3C6.5 3.55228 6.05229 4 5.5 4C4.94772 4 4.5 3.55228 4.5 3Z" fill="#242629"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.67071 10C6.08254 8.83481 7.19378 8 8.5 8C9.80622 8 10.9175 8.83481 11.3293 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H11.3293C10.9175 13.1652 9.80622 14 8.5 14C7.19378 14 6.08254 13.1652 5.67071 12H1C0.447715 12 4.82825e-08 11.5523 0 11C-4.8282e-08 10.4477 0.447715 10 1 10H5.67071ZM9.5 11C9.5 11.5523 9.05228 12 8.5 12C7.94772 12 7.5 11.5523 7.5 11C7.5 10.4477 7.94772 10 8.5 10C9.05228 10 9.5 10.4477 9.5 11Z" fill="#242629"></path>
                                        </svg>
                                    </span>
                                </button>
                                <Dialog v-model:visible="displayModal" :closable="false" :breakpoints="{'640px': '100vw'}" :style="{width: '100vw'}" :position="position" :modal="true" class="mobile-filter-dialog">
                                    <template #header>
                                        <div class="d-flex align-items-center">
                                            <button @click="displayModal = !displayModal" class="p-dialog-header-icon p-dialog-header-close p-link" aria-label="close" type="button">
                                                <span class="p-dialog-header-close-icon pi pi-angle-left"></span>
                                            </button>
                                        </div>
                                        <h1 class="mobile-filter-dialog-header-title">Фильтры</h1>
                                        <button type="button" class="mobile-filter-dialog-header-clear" @click="clearForm">Сбросить</button>
                                    </template>
                                    <div class="mobile-filter-dialog-body">
                                        <form class="w-100 mobile-filter-dialog-form" :model="form">
                                            <div class="mobile-filter-dialog-form-header">
                                                <div class="Htvpx">
                                                    <div class="form-item">
                                                        <div class="single_button_select">
                                                            <div class="single_button_select_box d-flex">
                                                                <label for="object_deals_1" class="single_button_select_box_label" :class="{'active' : form.object_deals == 'buy'}">
                                                                    <input v-model="form.object_deals" id="object_deals_1" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="buy">
                                                                    <span class="single_button_select_box_label_span" :class="{'active_span' : form.object_deals == 'buy'}">Купить</span>
                                                                </label>
                                                                <label for="object_deals_2" class="single_button_select_box_label" :class="{'active' : form.object_deals == 'rent'}">
                                                                    <input v-model="form.object_deals" id="object_deals_2" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="rent">
                                                                    <span class="single_button_select_box_label_span" :class="{'active_span' : form.object_deals == 'rent'}">Снять</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-item">
                                                        <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                                            <span class="inputs_block_title">
                                                                Тип объекта
                                                            </span>
                                                            <div class="options_main__items_inputs_block d-flex flex-column">
                                                                <Dropdown v-model="form.object_type" optionValue="id" :options="objectTypes" optionLabel="name_ru" placeholder="Тип объекта" />
                                                            </div>
                                                        </div>
                                                    </div>
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
                                                                        <InputNumber inputClass="dc-input__input-6-1-2" inputId="price_from" min="0" v-model="form.price_from" placeholder="От" prefix="$"/>
                                                                    </div>
                                                                </div>
                                                                <div class="input-medium-6 dc-input-6-1-2 h-100 w-50">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <InputNumber inputClass="dc-input__input-6-1-2" inputId="price_to" min="0" v-model="form.price_to" placeholder="До" prefix="$"/>
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
                                        <Button @click="searchObjectTest" type="submit" :loading="loading[3]" label="Показать" icon="pi pi-search"/>
                                    </template>
                                </Dialog>
                                <button  @click="visibleBottom = true" type="button" class="mobile-sort mobile-search-btn">
                                    <span class="dropdownButton-button__icon-0-7-0">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" data-e2e-id="replacement-icon" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.5579 1.96142V11.373H14.4696C14.9369 11.373 15.1812 11.8922 14.8413 12.1902L11.8782 14.863C11.6658 15.0457 11.3365 15.0457 11.1241 14.863L8.16094 12.1902C7.82108 11.8922 8.05473 11.373 8.53266 11.373H10.4338V1.96142C10.4338 1.43264 10.9117 1 11.4958 1C12.08 1 12.5579 1.43264 12.5579 1.96142Z" fill="#242629"></path>
                                            <path d="M4.12783 1.13691L1.16113 3.81744C0.820865 4.11527 1.0548 4.63408 1.5333 4.63408H3.43667V14.0392C3.43667 14.5677 3.91517 15 4.5 15C5.08483 15 5.56333 14.5677 5.56333 14.0392V4.63408H7.4667C7.9452 4.63408 8.17914 4.11527 7.83887 3.81744L4.87217 1.13691C4.67013 0.954364 4.32987 0.954364 4.12783 1.13691Z" fill="#242629"></path>
                                        </svg>
                                    </span>
                                </button>
                                <Sidebar v-model:visible="visibleBottom" :baseZIndex="10000" position="bottom" class="slider-bottom">
                                    <div class="siber-bottom-header">
                                        <div @click="visibleBottom = !visibleBottom" class="siber-bottom-header-cancel-box" role="button" aria-label="Закрыть" tabindex="0">
                                            <svg class="c29edcec40--container--wOtqt c29edcec40--display_inline-block--DEn9_ c29edcec40--color_current_color--gpi6p" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="m8 9.414-5.65 5.65-1.415-1.413L6.585 8 .936 2.35 2.35.934 8 6.585l5.65-5.65 1.415 1.414L9.415 8l5.65 5.65-1.414 1.415L8 9.415Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                        <div class="siber-bottom-header-title">Сортировка</div>
                                    </div>
                                    <div class="siber-bottom-body">
                                        <div class="siber-bottom-body-box">
                                            <div class="siber-bottom-body-box-items">
                                                <label :for="`sort_option_${item.id}`" v-for="item in sortOptions" :key="item.id" class="siber-bottom-body-box-item position-relative">
                                                    <p class="siber-bottom-body-box-item-p mb-0" style="flex: 1 1;">{{item.name_ru}}</p>
                                                    <input @change="pushParamsURL()" @click="visibleBottom = !visibleBottom" :id="`sort_option_${item.id}`" type="radio" v-model="form.sort_direction" :value="item.id" tabindex="0" class="siber-bottom-body-box-items-input">
                                                    <div v-if="form.sort_direction === item.id" class="siber-bottom-body-box-items-svg">
                                                        <svg  aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="m14.733 4.68-8.067 8.688-5.299-4.327 1.265-1.549L6.478 10l6.79-6.68 1.466 1.36Z" fill="currentColor"></path>
                                                        </svg>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </Sidebar>
                            </div>
                        </div>
                        <div v-if="loaderProgress" class="loader-main-box">
                            <ProgressSpinner style="width:80px; height:80px" strokeWidth="3" fill="var(--surface-ground)" animationDuration="1s" />
                        </div>
                        <div v-else-if="objects.length == 0" class="h-100vh">
                            <h3 class="text-theme text-center" style="font-size: 25px;color: #000;font-weight: 700;">Результатов не найдено</h3>
                        </div>
                        <div v-else class="objects-box">
                            <div v-for="object in objects" :key="object.id"  class="object-item">
                                <router-link :to="{name: 'showObject', params: {type_deal: object.object_deals, type: object.object_type.id == 1 ? 'flat' : object.object_type.id == 2 ? 'house' : object.object_type.id == 3 ? 'commercial' : object.object_type.id == 4 ? 'suburban' : 'land', id: object.id}}">
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
                                                    <swiper-slide @click="this.$router.push({name: 'showObject', params: {type_deal: object.object_deals, type: object.object_type.id == 1 ? 'flat' : object.object_type.id == 2 ? 'house' : object.object_type.id == 3 ? 'commercial' : object.object_type.id == 4 ? 'suburban' : 'land', id: object.id}})" v-for="image in object.images" :key="image.id">
                                                        <img :src="`/file/${image.name}`" class="swiper-lazy"/>
                                                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div> 
                                                    </swiper-slide>
                                                </swiper>
                                            </div>
                                        </div>
                                        <div class="object-body">
                                            <div class="object-body-content">
                                                <div class="object-details">
                                                    <div v-if="mobilePrice == true" class="object-price-list d-flex align-items-center">
                                                        <p class="object-price-list-p">{{ vueNumberFormat(object.price, {}) }}</p>
                                                        <p class="object-price-list-desc ml-2">264 705$/м²</p>
                                                    </div>
                                                    <div class="object-details-item object-details-header">
                                                        <a class="NXJyid" :href="`/show/object/${object.object_deals}/${object.object_type.id == 1 ? 'flat' : object.object_type.id == 2 ? 'house' : object.object_type.id == 3 ? 'commercial' : object.object_type.id == 4 ? 'suburban' : 'land'}/${object.id}`" rel="noopener noreferrer">
                                                            <span v-if="object.object_type_id === 1" class="title">{{ object.object_type.name_ru }}, {{ object.room_count }}-комн , {{object.total_area }} м², {{ object.floor }} / {{ object.floor_count }} этаж</span>
                                                            <span v-if="object.object_type_id === 2" class="title">{{ object.object_type.name_ru }}, {{ object.room_count }}-комн , {{object.total_area }} м², {{ object.floor_count }} этаж, {{ object.land_area }}</span>
                                                            <span v-if="object.object_type_id === 3" class="title">{{ object.object_type.name_ru }}, {{object.total_area }} м²</span>
                                                            <span v-if="object.object_type_id === 4" class="title">{{ object.object_type.name_ru }}, {{object.total_area }} м², {{ object.floor_count }} этаж, {{ object.land_area }} м²</span>
                                                            <span v-if="object.object_type_id === 5" class="title">{{ object.object_type.name_ru }}, {{ object.land_area }} м²</span>
                                                        </a>
                                                    </div>
                                                    <div class="object-details-item object-details-address mt-3">
                                                        <div class="w-100 object-details-item align-items-center">
                                                            <i class="fas fa-map-marker-alt mr-1"></i>
                                                            <span class="PjgOZO">{{object.region.name_ru}}, {{object.district.name_ru}}, {{object.quarter.name_ru}}</span>
                                                        </div>
                                                    </div>
                                                    <div class="object-details-item mt-3">
                                                        <div class="object-details-description">
                                                            {{object.comment}}
                                                        </div>
                                                    </div>
                                                    <div class="object-details-addtional"></div>
                                                </div>
                                                <div v-if="!mobilePrice" class="object-price">
                                                    <div class="object-price-list">
                                                        <p class="object-price-list-p">{{ vueNumberFormat(object.price, {}) }}</p>
                                                        <p class="object-price-list-desc">264 705$/м²</p>
                                                    </div>
                                                </div>
                                                <div v-if="!objectBtns" class="object-actions">
                                                    <button @click.prevent type="button" class="object-actions-btn" title="Добавить в избранное">
                                                        <div class="icon-4-0-1">
                                                            <svg fill="#fff" style="stroke: grey; stroke-width: 1px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                <path clip-rule="evenodd" d="M1 7C.5 3.5 2.7 2 4.8 2 6.82 2 8 4 8 4s1.17-2 3.2-2c2.1 0 4.3 1.5 3.8 5s-5.83 7-7 7-6.5-3.5-7-7z"></path>
                                                            </svg>
                                                        </div>
                                                    </button>
                                                    <div>
                                                        <button @click.prevent type="button" class="object-actions-btn" title="Поделиться объявлением" data-toggle="dropdown">
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
                                                                    <div class="title" style="font-weight: 700;">Поделиться объявлением</div>
                                                                </div>
                                                                <div class="hint-content-0-9-4">
                                                                    <div id="share__content" class="share__content_div">
                                                                        <div class="share__content_div_socials">
                                                                            <div>
                                                                                <ShareNetwork
                                                                                    network="telegram"
                                                                                    class="share__content_div_socials_links"
                                                                                    :url="`http://ibroker.skybox.uz/show/object/${object.object_deals}/${object.object_type.id == 1 ? 'flat' : object.object_type.id == 2 ? 'house' : object.object_type.id == 3 ? 'commercial' : object.object_type.id == 4 ? 'suburban' : 'land'}/${object.id}`"
                                                                                    title="iBROKER.uz"
                                                                                    description="⭐ Помогу купить, продать, сдать и снять квартиру в Ташкенте.⭐ Благотворительность."
                                                                                    quote="The hot reload is so fast it\'s near instant. - Evan You"
                                                                                    hashtags="vuejs,vite,javascript"
                                                                                    twitterUser="youyuxi"
                                                                                    @click.prevent
                                                                                >
                                                                                    <i class="fab fah fa-lg fa-telegram-plane" style="color: #0088cc;"></i>
                                                                                </ShareNetwork>
                                                                                <ShareNetwork
                                                                                    network="whatsapp"
                                                                                    class="share__content_div_socials_links"
                                                                                    :url="`http://ibroker.skybox.uz/show/object/${object.object_deals}/${object.object_type.id == 1 ? 'flat' : object.object_type.id == 2 ? 'house' : object.object_type.id == 3 ? 'commercial' : object.object_type.id == 4 ? 'suburban' : 'land'}/${object.id}`"
                                                                                    title="iBROKER.uz"
                                                                                    description="⭐ Помогу купить, продать, сдать и снять квартиру в Ташкенте.⭐ Благотворительность."
                                                                                    quote="The hot reload is so fast it\'s near instant. - Evan You"
                                                                                    hashtags="vuejs,vite,javascript"
                                                                                    twitterUser="youyuxi"
                                                                                    @click.prevent
                                                                                >
                                                                                    <i class="fab fah fa-lg fa-whatsapp" style="color: #25d366;"></i>
                                                                                </ShareNetwork>
                                                                            </div>
                                                                        </div>
                                                                        <copy-to-clipboard v-slot="props">
                                                                            <button @click.prevent="props.copy(`http://ibroker.skybox.uz/show/object/${object.object_deals}/${object.object_type.id == 1 ? 'flat' : object.object_type.id == 2 ? 'house' : object.object_type.id == 3 ? 'commercial' : object.object_type.id == 4 ? 'suburban' : 'land'}/${object.id}`)" :disabled="props.status === 'copied'" type="button" class="object_single_page_btn_style w-100" :class="{'button-disabled' : props.status === 'copied'}">
                                                                                <span class="button-root__text-8-1-3">{{props.status === 'copied' ? 'Ссылка скопирована' : 'Скопировать ссылку'}}</span>
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
                                                    <div class="object-details-author">
                                                        <div class="author-box">
                                                            <div style="height: 100%;">
                                                                <picture class="author-box-pic">
                                                                    <img class="author-box-pic-img" src="https://img06.domclick.ru/s200x200q80/partnerhub/avatars/ff/16/84b1f568-7e09-4c67-b58d-f4f7286e63e5.png" alt="Елена">
                                                                </picture>
                                                            </div>
                                                        </div>
                                                        <span class="author-name">Лофт Балтийская</span>
                                                    </div>
                                                </div>
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
                                </router-link>
                            </div>
                        </div>
                        <div class="objects-paginator">
                            <Paginator
                                v-if="objectsCount > 0" 
                                :CurrentPageReport="pageInfo.current_page"  
                                @page="getObjects($event.page)" 
                                :rows="parseInt(pageInfo.per_page)" 
                                :totalRecords="pageInfo.total">
                            </Paginator>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
import CopyToClipboard from '../../../components/CopyToClipboard.vue'
import Rating from 'primevue/rating';
import Paginator from 'primevue/paginator';
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
import Sidebar from 'primevue/sidebar';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import ProgressSpinner from 'primevue/progressspinner';
import OverlayPanel from 'primevue/overlaypanel';
import InputNumber from 'primevue/inputnumber';
// Validation
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
// import required modules
import { Autoplay, Pagination, Lazy, FreeMode, Navigation, Thumbs } from "swiper";
import { mapGetters } from 'vuex'
export default {
//   setup: () => ({ v$: useVuelidate() }),
    components: {
        Swiper,
        SwiperSlide,
        CopyToClipboard,
        Rating,
        Paginator,
        Dropdown,
        Sidebar,
        Dialog,
        MultiSelect,
        Button,
        Checkbox,
        ProgressSpinner,
        OverlayPanel,
        InputNumber
    },
    data() {
        return {
            thumbsSwiper: null,
            index: null,
            open: null,
            moreOptions: false,
            submitted: false,
            mobilePrice: false,
            objectBtns: false,
            searchObject: false,
            addressDesktop: true,
            totalRecords: 120,
            pageInfo: null,
            totalObject: null,
            total: 2,
            selectedCity1: null,
            visibleBottom: false,
            sideBarFilter: false,
            displayModal: false,
            loaderProgress: false,
            objectsCount: null,
            position: 'center',
            loading: [false,false,false,false],
            regions: [],
            districts: [],
            quarters: [],
            objects: [],
            form: {
                object_deals: this.$route.query.object_deals,
                object_type: Number(this.$route.query.object_type),
                object_deals: this.$route.query.object_deals,
                region_id: null,
                district_id: [],
                quarter_id: [],
                object_types_property_id: [],
                price_from: this.$route.query.price_from,
                price_to: this.$route.query.price_to,
                room_count_from: this.$route.query.room_count_from,
                room_count_to: this.$route.query.room_count_to,
                floor_from: this.$route.query.floor_from,
                floor_to: this.$route.query.floor_to,
                floor_count_from: this.$route.query.floor_count_from,
                floor_count_to: this.$route.query.floor_count_to,
                total_area_from: this.$route.query.total_area_from,
                total_area_to: this.$route.query.total_area_to,
                land_area_from: this.$route.query.land_area_from,
                land_area_to: this.$route.query.land_area_to,
                keyword: '',
                sort_direction: ''
            },
            sharing: {
                url: `http://ibroker.skybox.uz${this.$route.path}`,
                title: 'Say hi to Vite! A brand new, extremely fast development setup for Vue.',
                description: 'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.',
                quote: 'The hot reload is so fast it\'s near instant. - Evan You',
                hashtags: 'vuejs,vite,javascript',
                twitterUser: 'youyuxi'
            },
            networks: [
                { network: 'telegram', icon: 'fab fah fa-lg fa-telegram-plane', color: '#0088cc' },
                { network: 'whatsapp', icon: 'fab fah fa-lg fa-whatsapp', color: '#25d366' },
            ],
            sortOptions: [
                {name_ru: 'Самые новые', name_uz: 'Eng yangi', id: 'date_new'},
                {name_ru: 'Самые старые', name_uz: 'Eng eski', id: 'date_old'},
                {name_ru: 'Самые дорогие', name_uz: 'Eng qimmat', id: 'price_expensive'},
                {name_ru: 'Самые дешевые', name_uz: 'Eng arzon', id: 'price_cheap'},
            ],
        }
    },
    methods: {
        openModal(position) {
            this.position = position;
            this.displayModal = true;
        },
        setThumbsSwiper(swiper) {
        this.thumbsSwiper = swiper;
        },
        toggle(id) {
            this.open = this.open === id ? null : id
        },
        saveData(isFormValid){
            this.submitted = true;
            if (!isFormValid) {
                return;
            }

        },
        testMethod(){
            console.log('click');
        },
        pushParamsURL(){
            this.$router.push(
            {
                name: "SearchObject",
                query: {
                    object_deals: this.form.object_deals,
                    object_type: this.form.object_type,
                    region_id: this.form.region_id,
                    'district_id[]': this.form.district_id.map(e => e),
                    'quarter_id[]' : this.form.quarter_id.map(e => e),
                    'object_types_property_id[]' : this.form.object_types_property_id.map(e => e),
                    price_from: this.form.price_from,
                    price_to: this.form.price_to,
                    room_count_from: this.form.room_count_from,
                    room_count_to: this.form.room_count_to,
                    floor_from: this.form.floor_from,
                    floor_to: this.form.floor_to,
                    floor_count_from: this.form.floor_count_from,
                    floor_count_to: this.form.floor_count_to,
                    total_area_from: this.form.total_area_from,
                    total_area_to: this.form.total_area_to,
                    land_area_from: this.form.land_area_from,
                    land_area_to: this.form.land_area_to,
                    sort_direction: this.form.sort_direction
                }
            });
        },
        searchObjectTest(){
            this.loading[3] = true;
            setTimeout(() => {
                this.loading[3] = false;
                this.pushParamsURL();
                this.displayModal = false;
                this.moreOptions = false;
            },1000);
        },
        async getObjects(page){
            this.loaderProgress = true;
            axios.get(`/api/object/search?page=${page+=1}&total=${this.total}`, { params: this.$route.query})
            .then(response => {
                this.objects = response.data.result.objects.data;
                this.pageInfo = response.data.result.objects;
                this.totalObject = response.data.result.total;
                this.objectsCount = response.data.result.count;
                this.loaderProgress = false;
            })
            .catch(function (error){
                alert(error);
            });
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
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 1000){
                this.searchObject = true;
                this.mobilePrice = true;
                if(this.windowWidth <= 991){
                    this.addressDesktop = false;
                }
                if(this.windowWidth <= 736){
                    this.objectBtns = true;
                }
                if(this.windowWidth <= 575){
                    this.sideBarFilter = true;
                }
                return;
            }
            this.sideBarFilter = false;
            this.searchObject = false;
            this.objectBtns = false;
            this.mobilePrice = false;
            this.addressDesktop = true;
            return;
        },
        clearForm(){
            this.form.object_type = null;
            this.form.object_deals = '';
            this.form.region_id = null;
            this.form.price_from = '';
            this.form.price_to = '';
            this.form.room_count_from = '';
            this.form.room_count_to = '';
            this.form.floor_from = '';
            this.form.floor_to = '';
            this.form.floor_count_from = '';
            this.form.floor_count_to = '';
            this.form.total_area_from = '';
            this.form.total_area_to = '';
            this.form.land_area_from = '';
            this.form.land_area_to = '';
        },
        checkAddress(){
            this.form.region_id = Number(this.$route.query.region_id);
            this.allRegionQuarterDistrict();
        },
        openFilter(){
            this.moreOptions = true;
        },
    },
    mounted() {
        this.$store.dispatch('getObjectTypes');
        this.$store.dispatch('getObjectTypesProperty');
        
        this.checkAddress();
    },
    computed: {
        ...mapGetters([
            'objectTypes',
            'objectProperty',
        ])
    },
    async created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        this.allRegionQuarterDistrict();
        this.getObjects();
        this.$watch(() => this.$route.query, this.getObjects);
    },
    setup() {
        return {
            modules: [Autoplay,Pagination,Lazy,FreeMode,Navigation,Thumbs],
        };
    }
};
</script>