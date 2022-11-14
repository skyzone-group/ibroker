<template>
  <div class="search-object-main">
    <div v-if="!sideBarFilter" class="search-object-top">
      <div class="container_fluid">
        <div class="search-object-top-box">
            <div class="search-object-top-filters d-flex">
                <div class="d-flex">
                    <div class="search-object-top-filters-item">
                        <div class="filters-item-select">
                            <button @click="toggle" aria-haspopup="true" aria-controls="overlay_panel" tabindex="-1" type="button" class="filters-item-button">
                                <span class="filters-item-button-txt">{{form.object_deals == 'buy' ? 'Купить' : 'Снять'}}</span>
                            </button>
                            <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true" id="overlay_panel" style="width: 220px" :breakpoints="{'960px': '75vw'}" class="filters-item-select-overlay">
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
                            </OverlayPanel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="search-object-body">
      <div class="container_fluid">
        <div class="search-object-body-box-content">
          <div class="search-object-body-box-content-objects">
            <div v-if="!sideBarFilter" class="objects-top row ml-0 mr-0">
                <div v-if="!searchObject" class="col align-self-center pl-0">
                    <a href="https://uybor.uz/ru/listing/search/sale" class="objects-top-link active">
                        Всего
                        <span class="ml-1">(4801)</span>
                    </a>
                    <a href="https://uybor.uz/ru/listing/search/sale" class="objects-top-link">
                        Вторичка
                        <span class="ml-1">(4801)</span>
                    </a>
                    <a href="https://uybor.uz/ru/listing/search/sale" class="objects-top-link">
                        Новостройки
                        <span class="ml-1">(4801)</span>
                    </a>
                </div>
                <div class="col align-self-center pr-0">
                    <Dropdown v-model="selectedCity1" :options="sortOptions" optionLabel="name" optionValue="code" placeholder="Сортировка" />
                </div>
            </div>
            <div v-if="sideBarFilter" class="mobile-filter-sort-box d-flex align-items-center justify-content-between">
                <div class="objects-total">80 106 объявлений</div>
                <div class="mobile-filter-sort-btns">
                    <button @click="openModal" type="button" class="mobile-filter mobile-search-btn">
                        <span class="dropdownButton-button__icon-0-7-0">
                            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.32929 4C7.91746 5.16519 6.80622 6 5.5 6C4.19378 6 3.08254 5.16519 2.67071 4H1C0.447715 4 2.62268e-07 3.55228 2.62268e-07 3C2.62268e-07 2.44772 0.447715 2 1 2H2.67071C3.08254 0.834808 4.19378 0 5.5 0C6.80622 0 7.91746 0.834808 8.32929 2H13C13.5523 2 14 2.44772 14 3C14 3.55228 13.5523 4 13 4H8.32929ZM4.5 3C4.5 2.44772 4.94772 2 5.5 2C6.05229 2 6.5 2.44772 6.5 3C6.5 3.55228 6.05229 4 5.5 4C4.94772 4 4.5 3.55228 4.5 3Z" fill="#242629"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.67071 10C6.08254 8.83481 7.19378 8 8.5 8C9.80622 8 10.9175 8.83481 11.3293 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H11.3293C10.9175 13.1652 9.80622 14 8.5 14C7.19378 14 6.08254 13.1652 5.67071 12H1C0.447715 12 4.82825e-08 11.5523 0 11C-4.8282e-08 10.4477 0.447715 10 1 10H5.67071ZM9.5 11C9.5 11.5523 9.05228 12 8.5 12C7.94772 12 7.5 11.5523 7.5 11C7.5 10.4477 7.94772 10 8.5 10C9.05228 10 9.5 10.4477 9.5 11Z" fill="#242629"></path>
                            </svg>
                        </span>
                    </button>
                    <Dialog v-model:visible="displayModal" :closable="false" :breakpoints="{'640px': '100vw'}" :style="{width: '100vw'}" :modal="true" class="mobile-filter-dialog">
                        <template #header>
                            <div class="d-flex align-items-center">
                                <button @click="displayModal = !displayModal" class="p-dialog-header-icon p-dialog-header-close p-link" aria-label="close" type="button">
                                    <span class="p-dialog-header-close-icon pi pi-angle-left"></span>
                                </button>
                            </div>
                            <h1 class="mobile-filter-dialog-header-title">Фильтры</h1>
                            <button type="button" class="mobile-filter-dialog-header-clear">Сбросить</button>
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
                            <Button type="submit" label="Показать" icon="pi pi-search"/>
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
                                    <div v-for="item in sortOptions" :key="item.code" class="siber-bottom-body-box-item">
                                        <p class="siber-bottom-body-box-item-p mb-0" style="flex: 1 1;">{{item.name}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Sidebar>
                </div>
            </div>
            <div class="objects-box">
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
                    <!-- <div class="object-photos-gallery mt-2">
                        <swiper
                            @swiper="setThumbsSwiper"
                            :loop="true"
                            :spaceBetween="10"
                            :slidesPerView="3"
                            :freeMode="true"
                            :watchSlidesProgress="true"
                            :modules="modules"
                            class="mySwiper  w-100"
                        >
                            <swiper-slide>
                                <div class="object-photos-gallery-wrapper">
                                    <img  src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                </div>
                            </swiper-slide
                            ><swiper-slide
                            ><img
                                src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
                            ><swiper-slide
                            ><img
                                src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
                            ><swiper-slide
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
                    </div> -->
                  </div>
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
                    <div class="object-details-item  mt-3">
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
                    <div class="object-details-item  mt-3">
                        <button v-if="2 != open" @click="toggle(2)" class="object-details-item-btn" type="button">
                            <span class="object-details-item-btn-txt">Показать телефон</span>
                        </button>
                        <a v-if="2 === open" href="tel:+998903592284" class="object-details-item-btn">
                            <span class="object-details-item-btn-txt">+99890 359-22-84</span>
                        </a>
                    </div>
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
                    <div style="flex-grow: 1;"></div>
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
              </div>
              <div class="objects-paginator">
                <Paginator :rows="10" 
                template="PrevPageLink PageLinks NextPageLink JumpToPageDropdown"
                :totalRecords="totalRecords" 
                :rowsPerPageOptions="[10,20,30]"></Paginator>
              </div>
            </div>
          </div>
          <div v-if="sideBar" class="search-object-sidebar">
            <div class="search-object-sidebar-content">
              <div class="search-object-sidebar-box">
                <div class="slider-agents-box">
                    <swiper
                    :style="{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                        }"
                        :pagination="{
                            clickable: true
                        }"
                        :autoplay="{
                            delay: 2500,
                            disableOnInteraction: false,
                        }"
                        :loop="true"
                        :lazy="true"
                        :spaceBetween="10"
                        :modules="modules"
                        class="sidebar-agents-slider w-100"
                    >
                        <swiper-slide>
                            <div class="slider-agents-box-body">
                                <div class="slider-agents-top text-center">
                                    <h2 class="sidebar-title" style="margin-bottom: 0px">Мансурова Мухаё</h2>
                                    <p style="font-size: 15px; font-style: italic;">
                                        Менеджер по продажам
                                    </p>
                                    <Rating :modelValue="3" :readonly="true" :stars="5" :cancel="false" />
                                </div>
                                <div class="slider-agents-body">
                                    <img src="https://api.jibox.ru/file/p1653714268468.jpg" alt="agent-2" class="img-fluid"/>
                                </div>
                                <div class="slider-agents-footer">
                                    <button v-if="4 != open" @click="toggle(4)" class="object-details-item-btn w-100" type="button">
                                        <span class="object-details-item-btn-txt">Показать телефон</span>
                                    </button>
                                    <a v-if="4 === open" href="tel:+998903592284" class="object-details-item-btn w-100">
                                        <span class="object-details-item-btn-txt">+99890 359-22-84</span>
                                    </a>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="slider-agents-box-body">
                                <div class="slider-agents-top text-center">
                                    <h2 class="sidebar-title" style="margin-bottom: 0px">Мансурова Мухаё</h2>
                                    <p style="font-size: 15px; font-style: italic;">
                                        Менеджер по продажам
                                    </p>
                                    <Rating :modelValue="3" :readonly="true" :stars="5" :cancel="false" />
                                </div>
                                <div class="slider-agents-body">
                                    <img src="https://api.jibox.ru/file/p1653714268468.jpg" alt="agent-2" class="img-fluid"/>
                                </div>
                                <div class="slider-agents-footer">
                                    <button v-if="4 != open" @click="toggle(4)" class="object-details-item-btn w-100" type="button">
                                        <span class="object-details-item-btn-txt">Показать телефон</span>
                                    </button>
                                    <a v-if="4 === open" href="tel:+998903592284" class="object-details-item-btn w-100">
                                        <span class="object-details-item-btn-txt">+99890 359-22-84</span>
                                    </a>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
              </div>
              <div class="search-object-sidebar-box sidebar-object-form">
                <h3 class="sidebar-title">Свяжитесь с нами</h3>
                <div class="s-border"></div>
                <div class="m-border"></div>
                <form  @submit.prevent="saveData(!v$.$invalid)" :model="form">
                    <div class="sidebar-form">
                        <div id="messageDiv"></div>
                        <div class="form-group">
                            <input type="text" v-model="v$.form.name.$model" class="form-control" placeholder="Введите ваше имя..." :class="{'p-invalid':(v$.form.name.$invalid && submitted)}">
                            <small v-if="(((v$.form.name.$invalid && submitted) || v$.form.name.$pending.$response))" class="p-error">{{v$.form.name.required.$message.replace('Value', 'Введите ваше имя !')}}</small>
                        </div>
                        <div class="form-group">
                            <input type="tel" v-model="v$.form.phone.$model" class="form-control" placeholder="Введите свой номер..." :class="{'p-invalid':(v$.form.phone.$invalid && submitted)}">
                            <small v-if="(((v$.form.phone.$invalid && submitted) || v$.form.phone.$pending.$response))" class="p-error">{{v$.form.phone.required.$message.replace('Value', 'Введите свой номер !')}}</small>
                        </div>
                        <div class="form-group mb-0">
                            <button class="object-details-item-btn w-100" type="submit">
                                <span class="object-details-item-btn-txt">Отправить</span>
                            </button>
                        </div>
                    </div>
                </form>
              </div>
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
import OverlayPanel from 'primevue/overlaypanel';
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
import { ref } from "vue";
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
    OverlayPanel
  },
  data() {
    return {
      thumbsSwiper: null,
      index: null,
      open: null,
      submitted: false,
      sideBar: true,
      mobilePrice: false,
      objectBtns: false,
      searchObject: false,
      totalRecords: 120,
      selectedCity1: null,
      visibleBottom: false,
      sideBarFilter: false,
      displayModal: false,
      regions: [],
      districts: [],
      quarters: [],
      form: {
        name: '',
        phone: '',
        object_type: 1,
        object_deals: '',
        region_id: null,
        district_id: [],
        quarter_id: [],
        object_types_property_id: [],
        price_from: '',
        price_to: '',
        room_count_from: '',
        room_count_to: '',
        floor_from: '',
        floor_to: '',
        floor_count_from: '',
        floor_count_to: '',
        total_area_from: '',
        total_area_to: '',
        land_area_from: '',
        land_area_to: ''
      },
      sortOptions: [
            {name: 'Самые новые', code: 'NY'},
            {name: 'Самые дешевые', code: 'RM'},
            {name: 'Самые дорогие', code: 'LDN'},
        ],
    }
  },
  validations() {
        return {
            form: {
                name: { required }, 
                phone: { required }, 
            }
        }
    },
  methods: {
    openModal() {
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
    getRegions() {
        axios.get('/api/allRegions')
        .then(response => {
            this.regions = response.data.result
        });
    },
    getDistricts() {
        let region_id = this.form.region_id;
        axios.get('/api/districts/' + region_id)
        .then(response => {
            this.districts = response.data.result
            this.quarters = []
        });
    },
    getQuarters() {
        let district_id = this.form.district_id;
        axios.get('/api/quarters/' + district_id)
        .then(response => {
            this.quarters = response.data.result
        });
    },
    checkScreen() {
        this.windowWidth = window.innerWidth;
        if(this.windowWidth <= 1000){
            this.sideBar = false;
            this.searchObject = true;
            this.mobilePrice = true;
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
        this.sideBar = true;
        this.mobilePrice = false
        return;
    },
  },
  mounted() {
        this.$store.dispatch('getObjectTypes');
        this.$store.dispatch('getObjectTypesProperty');
        this.form = this.$route.query;
    },
    computed: {
        ...mapGetters([
            'objectTypes',
            'objectProperty',
        ]),
    },
    async created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        this.getRegions();
        // let uri = window.location.href.split('?');
        // if(uri.length == 2) {
        //     let vars = uri[1].split('&');
        //     let getVars = {};
        //     let tmp = '';
        //     vars.forEach(function(v) {
        //         tmp = v.split('=');
        //         if(tmp.length == 2)
        //         getVars[tmp[0]] = tmp[1];
        //     });
        //     console.log(getVars);
        // }
    },
  setup() {
    const op = ref();
    const toggle = (event) => {
        op.value.toggle(event);
    };
    const v$ = useVuelidate();
    return {
      modules: [Autoplay,Pagination,Lazy,FreeMode,Navigation,Thumbs],
      v$, op, toggle
    };
  }
};
</script>