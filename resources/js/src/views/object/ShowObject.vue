<template>
    <div class="object_single_page_frontend">
        <div class="object_single_page_main">
            <div class="container_fluid">
                <div v-if="loaderProgress" class="loader-main-box" style="height: 100vh;">
                    <ProgressSpinner style="width:80px; height:80px" strokeWidth="3" fill="var(--surface-ground)" animationDuration="1s" />
                </div>
                <div v-else class="object_single_page_main_box">
                    <div class="product-page__content">
                        <div class="product-page__content_top_buttons product-page_btn_style">
                            <div v-if="user.id == object.user_id" class="product-page__content_top_buttons_item ml-0">
                                <router-link tag="a" :to="{ name: 'myObjects'}" class="object_single_page_btn_style nohover">
                                    <span class="button-root__icon-8-1-3 button-root__icon--left-8-1-3"><div class="icon-4-0-1"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10.56 3.27a1 1 0 00-1.41-1.42l-5.3 5.3a1 1 0 000 1.41l5.3 5.3a1 1 0 001.41-1.42L6.33 8.2a.5.5 0 010-.71l4.23-4.23z"></path></svg></div></span><span class="button-root__text-8-1-3">Мои объявления</span>
                                </router-link>
                            </div>
                            <div v-else class="product-page__content_top_buttons_item ml-0">
                                <router-link tag="a" :to="{ name: 'siteIndex'}" class="object_single_page_btn_style nohover">
                                    <span class="button-root__icon-8-1-3 button-root__icon--left-8-1-3">
                                        <div class="icon-4-0-1"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <path d="M10.56 3.27a1 1 0 00-1.41-1.42l-5.3 5.3a1 1 0 000 1.41l5.3 5.3a1 1 0 001.41-1.42L6.33 8.2a.5.5 0 010-.71l4.23-4.23z"></path>
                                        </svg></div></span><span class="button-root__text-8-1-3">Назад</span>
                                </router-link>
                            </div>
                            <div class="product-page__content_top_buttons_item d-flex">
                                <div class="product-page__content_top_buttons_item_btn">
                                    <div class="position-relative">
                                        <button @click="toggle" type="button" id="favorites-add" class="object_single_page_btn_style dropdown-user-link" data-toggle="dropdown" aria-expanded="false">
                                            <span class="button-root__icon-8-1-3" :class="{'button-root__icon--left-8-1-3' : Sidebar == false}"><div class="icon-4-0-1"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10.54 2.09l4.1 4.13c.2.2.2.51 0 .7L10.52 11a.3.3 0 01-.51-.21V8.5a.3.3 0 00-.3-.3c-4.94.05-6.1 1.26-6.7 2.97a8.1 8.1 0 00-.3 2.61c0 .21-.26.27-.36.09-4.5-9.06 3.43-9.29 7.39-9.3a.3.3 0 00.3-.3V2.3c0-.27.32-.4.5-.21z"></path></svg></div></span>
                                            <span v-if="Sidebar == false" class="button-root__text-8-1-3">Поделиться</span>
                                        </button>
                                        <OverlayPanel ref="op" appendTo="body" id="overlay_panel" style="width: 450px"  class="social-icons-overlay">
                                            <div class="item">
                                                <div class="hint-head-0-9-4">
                                                    <div class="title" style="font-weight: 700;">Поделиться объявлением</div>
                                                </div>
                                                <div class="hint-content-0-9-4">
                                                    <div id="share__content" class="share__content_div">
                                                        <div class="share__content_div_socials">
                                                            <div>
                                                                <ShareNetwork
                                                                    v-for="network in networks"
                                                                    :network="network.network"
                                                                    :key="network.network"
                                                                    class="share__content_div_socials_links"
                                                                    :url="sharing.url"
                                                                    :title="sharing.title"
                                                                    :description="sharing.description"
                                                                    :quote="sharing.quote"
                                                                    :hashtags="sharing.hashtags"
                                                                    :twitterUser="sharing.twitterUser"
                                                                    popup="{width: 100%, height: 100%}"
                                                                >
                                                                    <i :class="network.icon" :style="{color: network.color}"></i>
                                                                </ShareNetwork>
                                                                <!-- <a href="#!" title="ok" class="share__content_div_socials_links socials_ok" target="_blank">
                                                                    <div class="icon-4-0-1 icon--32-4-0-1">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" class="socials_wk" fill="currentColor" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" id="mainIconPathAttribute"></path> </svg>
                                                                    </div>
                                                                </a>
                                                                <a href="#!" title="whatsapp" class="share__content_div_socials_links socials_ws" target="_blank">
                                                                    <div class="icon-4-0-1 icon--32-4-0-1">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="socials_ws" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" id="mainIconPathAttribute"></path> </svg>
                                                                    </div>
                                                                </a> -->
                                                            </div>
                                                        </div>
                                                        <copy-to-clipboard v-slot="props">
                                                            <button @click="props.copy(`http://ibroker.skybox.uz${route.path}`)" :disabled="props.status === 'copied'" type="button" class="object_single_page_btn_style w-100" :class="{'button-disabled' : props.status === 'copied'}">
                                                                <span class="button-root__text-8-1-3">{{props.status === 'copied' ? 'Ссылка скопирована' : 'Скопировать ссылку'}}</span>
                                                            </button>
                                                        </copy-to-clipboard>
                                                    </div>
                                                </div>
                                            </div>
                                        </OverlayPanel>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-page__content_mainBox" id="printMe">
                            <div class="product-page__content_flex d-flex flex-column">
                                <div class="product-page__section product-page__section--header">
                                    <div class="main_block__column">
                                        <div class="main_block__stretch">
                                            <div class="main_block__cardTitle">
                                                <h1 v-if="object.object_type_id == 1 || object.object_type_id == 2 || object.object_type_id == 4" id="title" class="h1_style text-lowercase  mb-0">{{object.room_count}}-комн, {{object.object_type.name_ru}}, {{object.total_area}} м²</h1>
                                                <h1 v-if="object.object_type_id == 3" id="title" class="h1_style mb-0 d-inline-flex">
                                                    <span v-for="item in object.object_types_property_values" :key="item.id">{{item.object_type_property.name_ru}},</span>{{object.total_area}} м²
                                                </h1>
                                                <h1 v-if="object.object_type_id == 5" id="title" class="h1_style mb-0">{{object.object_type.name_ru}}, {{object.land_area}} м²</h1>
                                            </div>
                                            <div class="main_block__subline">
                                                <div class="nameless_style_1">
                                                    <div class="nameless_style_1-1">
                                                        <span>{{object.object_deals == 'buy' ? 'продажа' : 'Аренда'}} - {{object.rent_type == 'long-terim' ? 'Долгосрочный' : 'Посуточно'}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <div class="main_block__subline">
                                                <div class="nameless_style_1">
                                                    <div class="nameless_style_1-1">
                                                        <span>15 часов назад</span>
                                                    </div>
                                                    <div class="nameless_style_1-1">
                                                        <div class="d-flex align-items-center">
                                                            <i class="feather icon-eye mr-2"></i>
                                                            <span>225</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> -->
                                            <div class="main_block__location">
                                                <div class="main_block__location_block">
                                                    <div class="main_block__location_title">
                                                        <span class="mr-2">
                                                            <a href="#!" class="nameless_style_2">
                                                                <i class="feather icon-map-pin"></i>
                                                                {{ object.quarter ? object.quarter.name_ru : "" }},
                                                                {{ object.district ? object.district.name_ru : "" }},
                                                                {{ object.region ? object.region.name_ru : "" }}
                                                            </a>
                                                        </span>
                                                        <!-- <a href="#!" class="product-location__on-map-link" id="product-location__on-map-link">На карте</a> -->
                                                    </div>
                                                    <!-- <div class="transport-points">
                                                        <div class="transport-points__point">
                                                            <span style="color: #242629;" class="d-flex align-items-center">
                                                                <span class="mr-2">
                                                                    <svg width="12" height="8" viewBox="0 0 12 8"><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z"></path></svg>
                                                                </span>
                                                                <a href="#!" class="nameless_style_2-1" target="_blank" rel="noopener noreferrer">станция Немчиновка</a>
                                                                <span style="color: #93989d;">, 1.5 км</span>
                                                                <span style="color: #93989d;">(17 мин.)</span>
                                                            </span>
                                                        </div>
                                                    </div> -->
                                                </div>
                                            </div>
                                        </div>
                                        <div class="main_block__price">
                                            <div class="main_block__price_box">
                                                <div class="price">
                                                    <span>{{vueNumberFormat(object.price, {})}}</span>
                                                </div>
                                                <!-- <div id="square-price" style="color: #737476;">
                                                    208 196 ₽/м²
                                                </div>
                                                <a href="#!" rel="noopener noreferrer" id="calculator-link" target="_blank" class="text-color">В ипотеку от 9,9%</a> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_block__gallery mt-3">
                                        <div id="gallery-widget" class="dc-gallery__root--b20e7">
                                            <galleria-image :images="object.images"></galleria-image>
                                        </div>
                                    </div>
                                    <div class="main_block__mainDetails">
                                        <ul id="main-details-block" class="d-flex" v-if="object.object_type_id == 1">
                                            <li class="main_block__mainDetails_ul_li desktop">
                                                <div title="10.5 м²" class="number_area">{{object.room_count}}</div>
                                                <span style="color: #4b545b99;">Комнат</span>
                                            </li>
                                            <li class="main_block__mainDetails_ul_li">
                                                <div title="61 м²" class="number_area">{{object.total_area}} м²</div>
                                                <span style="color: #4b545b99;">Общая</span>
                                            </li>
                                            <li class="main_block__mainDetails_ul_li">
                                                <div class="number_area d-flex align-items-center">
                                                    {{object.floor}}
                                                    <span style="color: #4b545b99;" class="ml-1">из {{object.floor_count}}</span>
                                                </div>
                                                <span style="color: #4b545b99;">Этаж</span>
                                            </li>
                                            <li v-if="object.build_year > 0" class="main_block__mainDetails_ul_li desktop">
                                                <div class="number_area">{{object.build_year}}</div>
                                                <span style="color: #4b545b99;">Год постройки</span>
                                            </li>
                                        </ul>
                                        <ul id="main-details-block" class="d-flex" v-if="object.object_type_id == 2 || object.object_type_id == 4">
                                            <li class="main_block__mainDetails_ul_li desktop">
                                                <div title="10.5 м²" class="number_area">{{object.room_count}}</div>
                                                <span style="color: #4b545b99;">Комнат</span>
                                            </li>
                                            <li class="main_block__mainDetails_ul_li">
                                                <div title="61 м²" class="number_area">{{object.total_area}} м²</div>
                                                <span style="color: #4b545b99;">Общая</span>
                                            </li>
                                            <li class="main_block__mainDetails_ul_li">
                                                <div title="61 м²" class="number_area">{{object.floor_count}}</div>
                                                <span style="color: #4b545b99;">Этажность</span>
                                            </li>
                                            <li class="main_block__mainDetails_ul_li">
                                                <div title="61 м²" class="number_area">{{object.land_area}} м²</div>
                                                <span style="color: #4b545b99;">Площадь участка</span>
                                            </li>
                                            <li v-if="object.build_year > 0" class="main_block__mainDetails_ul_li desktop">
                                                <div class="number_area">{{object.build_year}}</div>
                                                <span style="color: #4b545b99;">Год постройки</span>
                                            </li>
                                        </ul>
                                        <ul id="main-details-block" class="d-flex" v-if="object.object_type_id == 3">
                                            <li v-if="object.room_count > 0" class="main_block__mainDetails_ul_li desktop">
                                                <div title="10.5 м²" class="number_area">{{object.room_count}}</div>
                                                <span style="color: #4b545b99;">Комнат</span>
                                            </li>
                                            <li class="main_block__mainDetails_ul_li">
                                                <div title="61 м²" class="number_area">{{object.total_area}} м²</div>
                                                <span style="color: #4b545b99;">Общая</span>
                                            </li>
                                            <li v-if="object.floor_count > 0" class="main_block__mainDetails_ul_li">
                                                <div title="61 м²" class="number_area">{{object.floor_count}}</div>
                                                <span style="color: #4b545b99;">Этажность</span>
                                            </li>
                                            <li v-if="object.land_area > 0" class="main_block__mainDetails_ul_li">
                                                <div title="61 м²" class="number_area">{{object.land_area}} м²</div>
                                                <span style="color: #4b545b99;">Площадь участка</span>
                                            </li>
                                            <li v-if="object.build_year > 0" class="main_block__mainDetails_ul_li desktop">
                                                <div class="number_area">{{object.build_year}}</div>
                                                <span style="color: #4b545b99;">Год постройки</span>
                                            </li>
                                        </ul>
                                        <ul id="main-details-block" class="d-flex" v-if="object.object_type_id == 5">
                                            <li class="main_block__mainDetails_ul_li">
                                                <div title="61 м²" class="number_area">{{object.land_area}} м²</div>
                                                <span style="color: #4b545b99;">Площадь участка</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="main_block__plans"></div>
                                    <!-- <div class="main_block__features" id="features-block">
                                        <div class="main_block__features_block">
                                            <h2 class="main_block__features_block_title">Особенности</h2>
                                            <ul>
                                                <li class="d-flex align-items-center">
                                                    <i class="feather icon-check mr-1"></i>
                                                    <span>Свободная продажа</span>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <i class="feather icon-check mr-1"></i>
                                                    <span>Вид во двор</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> -->
                                    
                                    <!-- object.object_type -->
                                    <h4 class="_445so" data-testid="Квартира-заголовок">
                                        {{ object.object_type ? object.object_type.name_ru : "" }}
                                    </h4>
                                    <ul class="product-page__section_ul">
                                        <li v-if="object.room_count > 0" class="product-page__section_li">
                                            <span class="product-page__section_li_span-1">Комнат</span>
                                            <span class="product-page__section_li_span-2"></span>
                                            <span class="product-page__section_li_span-3">{{object.room_count}}</span>
                                        </li>
                                        <li v-if="object.land_area > 0" class="product-page__section_li">
                                            <span class="product-page__section_li_span-1">Площадь участка</span>
                                            <span class="product-page__section_li_span-2"></span>
                                            <span class="product-page__section_li_span-3"><span>{{object.land_area}} м<sup>2</sup></span></span>
                                        </li>
                                        <li v-if="object.total_area > 0" class="product-page__section_li">
                                            <span class="product-page__section_li_span-1">Площадь</span>
                                            <span class="product-page__section_li_span-2"></span>
                                            <span class="product-page__section_li_span-3"><span>{{object.total_area}} м<sup>2</sup></span></span>
                                        </li>
                                        <li v-if="object.living_area > 0" class="product-page__section_li">
                                            <span class="product-page__section_li_span-1">Жилая</span>
                                            <span class="product-page__section_li_span-2"></span>
                                            <span class="product-page__section_li_span-3"><span>{{object.living_area}} м<sup>2</sup></span></span>
                                        </li>
                                        <li v-if="object.build_year > 0" class="product-page__section_li">
                                            <span class="product-page__section_li_span-1">Год постройки</span>
                                            <span class="product-page__section_li_span-2"></span>
                                            <span class="product-page__section_li_span-3">{{object.build_year}}</span>
                                        </li>
                                        <li v-if="object.floor > 0" class="product-page__section_li">
                                            <span class="product-page__section_li_span-1">Этаж</span>
                                            <span class="product-page__section_li_span-2"></span>
                                            <span class="product-page__section_li_span-3">{{object.floor}}</span>
                                        </li>
                                        <li  v-if="object.floor_count > 0" class="product-page__section_li">
                                            <span class="product-page__section_li_span-1">Этажность</span>
                                            <span class="product-page__section_li_span-2"></span>
                                            <span class="product-page__section_li_span-3">{{object.floor_count}}</span>
                                        </li>
                                        <li  v-if="object.object_condition > 0" class="product-page__section_li">
                                            <span class="product-page__section_li_span-1">Ремонт</span>
                                            <span class="product-page__section_li_span-2"></span>
                                            <span class="product-page__section_li_span-3">{{object.object_condition == 1 ? 'Косметический' : object.object_condition == 2 ? 'Евро' : object.object_condition == 3 ? 'Дизайнерский' : 'Без ремонта'}}</span>
                                        </li>
                                        <li  v-if="object.object_material_type > 0" class="product-page__section_li">
                                            <span class="product-page__section_li_span-1">Материал стен</span>
                                            <span class="product-page__section_li_span-2"></span>
                                            <span class="product-page__section_li_span-3">{{object.object_material_type == 1 ? 'Кирпичный' : object.object_material_type == 2 ? 'Монолитный' : object.object_material_type == 3 ? 'Деревянный' : object.object_material_type == 4 ? 'Панельный' : 'Блочный'}}</span>
                                        </li>
                                        <li  v-if="object.object_time_type > 0" class="product-page__section_li">
                                            <span class="product-page__section_li_span-1">Тип недвижимости</span>
                                            <span class="product-page__section_li_span-2"></span>
                                            <span class="product-page__section_li_span-3">{{object.object_time_type == 1 ? 'Вторичка' : 'Новостройка'}}</span>
                                        </li>
                                    </ul>
                                    <!-- object.object_type -->
                                </div>
                                <!-- additional_values -->
                                <div v-if="object.additional_values != ''" class="product-page__section">
                                    <div id="Квартира">
                                        <h4 class="_445so" data-testid="Квартира-заголовок">Общая информация</h4>
                                        <ul class="addtional_options_ul">
                                            <li v-for="item in object.additional_values" :key="item.id" class="option_items">
                                                <img src="/images/icons/additional/fridge.svg" alt="">
                                                <span>{{item.additional_property.name_ru}}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- additional_values -->

                                <!-- description -->
                                <div class="product-page__section">
                                    <div id="Квартира">
                                        <h4 class="_445so" data-testid="Квартира-заголовок">
                                            Описание
                                        </h4>
                                        <div class="nameless_style_3" id="description">
                                            {{object.comment}}
                                        </div>
                                    </div>
                                </div>
                                <!-- description -->

                                <!-- youtube url -->
                                <div v-if="object.youtube_url > '0'" class="product-page__section">
                                    <div id="Квартира">
                                        <h4 class="_445so" data-testid="Квартира-заголовок">
                                            YouTube видео
                                        </h4>
                                        <iframe width="100%" height="350" :src="'http://www.youtube.com/embed/' + youtubeId + '?rel=0&hd=1&autoplay=1&showinfo=0'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                                <!-- youtube url -->

                                <!-- object_deals -->
                                <div class="product-page__section" id="deal-info-block">
                                    <div id="Сделка">
                                        <h2 class="_445so">Сделка</h2>
                                        <ul class="product-page__section_ul">
                                            <li class="product-page__section_li">
                                                <span class="product-page__section_li_span-1">Тип сделки</span>
                                                <span class="product-page__section_li_span-2"></span>
                                                <span class="product-page__section_li_span-3">{{object.object_deals == 'buy' ? 'продажа' : 'Аренда'}}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- object_deals -->

                                <!-- user info -->
                                <div v-for="user in object.user" :key="user.id" class="subscription__author product-page__section" id="author">
                                    <div class="subscription__author_block">
                                        <a href="/agent-single" target="_blank" class="subscription__author_block_avatar d-flex align-items-center justify-content-center">
                                            <img v-if="!user.image" :src="defaultImage" alt="user_avatar" class="w-100 h-100" style="object-fit: cover;">
                                            <img v-else :src="`/file/${user.image}`" alt="user_avatar" class="w-100 h-100" style="object-fit: cover;">
                                            <!-- JT -->
                                        </a>
                                        <div class="subscription__author_block_title">{{object.user_type == 1 ? 'Собственник' : 'Агент'}}</div>
                                        <div class="subscription__author_block_name d-flex align-items-center mb-1">
                                            <h4 class="subscription__author_name">{{ user.firstname }} {{ user.lastname }}</h4>
                                        </div>
                                        <div class="subscription__author_block_dignity d-flex">
                                            <div>
                                                <div class="subscription__author_block_dignity_item">
                                                    <div class="subscription__author_block_dignity_item-item">
                                                        <span class="subscription__author_block_dignity_item_span">
                                                            <span class="icon-4-4">
                                                                <svg class="icon-4-4-svg" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.085 2.272 8 0 5.915 2.272l-3.057-.4-.137 3.08-2.6 1.659 1.876 2.448L1.072 12l3.01.67 1.182 2.848L8 14.095l2.736 1.421 1.182-2.847 3.01-.67-.925-2.941L15.88 6.61l-2.754-1.752-5.321 7.858-3.68-4.73 1.68-1.495 2 2.849 5.045-7.431-2.764.362Z" fill="currentColor"></path></svg>
                                                            </span>
                                                            <span class="txt">Документы проверены</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="subscription__author_block_actions">
                                            <div class="subscription__author_block_actions_block flex-column">
                                                <button v-if="showPhone[1] == false" @click="showPhone[1] = true" type="button" class="button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3-4  button-root--type-button-reset-8-1-3 button-root-8-1-3">
                                                    <span class="button-root__text-8-1-3">Показать телефон</span>
                                                </button>
                                                <a v-if="showPhone[1] == true" :href="`tel:+${user.phone}`" class="nohover button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3-4  button-root--type-button-reset-8-1-3 button-root-8-1-3">
                                                    <span class="button-root__text-8-1-3">+{{user.phone}}</span>
                                                </a>
                                                <router-link target="_blank" :to="{name: 'userObjects', params: {id: user.id}, query: {object_deals: 'all', sort_direction: 'date_new'}}" type="button" class="button-root--fluid-8-1-3 button-root--show-all-object button-root--large-8-1-3-4 button-root--type-button-reset-8-1-3 button-root-8-1-3 nohover d-lg-none d-inline-flex" style="margin-top: 8px;">
                                                    <span class="button-root__text-8-1-3" style="font-weight: 600;">Показать все объявления</span>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- user info -->
                            </div>
                        </div>
                    </div>
                    <!-- sidebar -->
                    <div v-if="!Sidebar" class="product-page__sidebar">
                        <div class="product-page__sticky">
                            <aside v-for="user in owner" :key="user.id" class="product-page__sidebar_autor autor_box_style">
                                <div class="product-page__sidebar_autor_bottom autor_bottom_padding">
                                    <div class="product-page__sidebar_autor_bottom_top margin-bottom-24">
                                        <div class="d-flex flex-column align-items-center justify-content-center">
                                            <!-- <div v-if="!user.image" style="background-color: rgb(156, 198, 196);width: 60px;height: 60px;border-radius: 5px;" class="autor_bottom_top_style">TJ</div> -->
                                            <div style="width: 120px;height: 120px;" class="autor_bottom_top_style">
                                                <img v-if="!user.image" :src="defaultImage" alt="user_avatar_default" class="w-100 h-100" style="object-fit: cover;">
                                                <img v-else :src="`/file/${user.image}`" alt="user_avatar" class="w-100 h-100" style="object-fit: cover;">
                                            </div>
                                            <div class="product-page__sidebar_autor_bottom_content text-center" style="flex: auto;">
                                                <div class="autor_full_name justify-content-center">
                                                    <a href="/agent-single" target="_blank">{{ user.firstname }} {{ user.lastname }}</a>
                                                </div>
                                                <div class="autor_enter_date" style="color: #4b545b99;">
                                                    На iBroker 1 год 1 мес.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-page__sidebar_autor_bottom_button d-flex flex-column">
                                        <button v-if="showPhone[0] == false" @click="showPhone[0] = true" type="button" class="button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3-4 button-root--type-button-reset-8-1-3 button-root-8-1-3">
                                            <span class="button-root__text-8-1-3">Показать телефон</span>
                                        </button>
                                        <a v-if="showPhone[0] == true" :href="`tel:+${user.phone}`" class="nohover button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3-4 button-root--type-button-reset-8-1-3 button-root-8-1-3">
                                            <span class="button-root__text-8-1-3">+{{user.phone}}</span>
                                        </a>
                                        <router-link target="_blank" :to="{name: 'userObjects', params: {id: user.id}, query: {object_deals: 'all', sort_direction: 'date_new'}}" type="button" class="button-root--fluid-8-1-3 button-root--show-all-object button-root--large-8-1-3-4 button-root--type-button-reset-8-1-3 button-root-8-1-3 nohover" style="margin-top: 8px;">
                                            <span class="button-root__text-8-1-3" style="font-weight: 600;">Показать все объявления</span>
                                        </router-link>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Fixed author phone -->
            <div v-if="mobileContant" class="object_single_page_main_object_phone">
                <div v-for="user in owner" :key="user.id" class="object_single_page_main_object_phone_box">
                    <button v-if="!mobileContantPhone" @click="this.mobileContantPhone = true" class="button-root-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3 button-root--type-button-reset-8-1-3 button-root--fluid-8-1-3" type="button" data-e2e-id="sticky-footer-show-phone"><span class="button-root__text-8-1-3">Показать телефон</span></button>
                    <a v-if="mobileContantPhone == true" :href="`tel:+${user.phone}`" class="nohover button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3 button-root--type-button-reset-8-1-3 button-root-8-1-3">
                        <span class="button-root__text-8-1-3">+{{user.phone}}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Galleria from '../../../components/galleria/Galleria.vue'
import GalleriaImage from '../../../components/galleria/GalleriaImage.vue'

import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'
import InputText from 'primevue/inputtext';
import { ref } from 'vue';
import CopyToClipboard from '../../../components/CopyToClipboard.vue'
import defaultImage from "../../../../../public/images/avatar-dafault.png"
import { mapGetters } from 'vuex'
import OverlayPanel from 'primevue/overlaypanel';
import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';
export default {
    components: {
        Galleria,
        CopyToClipboard,
        InputText,
        GalleriaImage,
        OverlayPanel,
        Button,
        ProgressSpinner
    },
    data() {
        return {
            showPhone: [false,false],
            showPhoneSecond: false,
            Sidebar: false,
            mobileContant: false,
            mobileContantPhone: false,
            savedFavorites: false,
            messageModal: false,
            loaderProgress: false,
            formComment: {
                name: null,
                email: null,
                phone: null,
                message: null
            },
            defaultImage,
            object: [],
            owner: [],
            youtubeId: false,
            sharing: {
                url: `http://ibroker.skybox.uz${this.$route.path}`,
                title: 'iBROKER.uz',
                description: '⭐ Помогу купить, продать, сдать и снять квартиру в Ташкенте.⭐ Благотворительность.',
                quote: 'The hot reload is so fast it\'s near instant. - Evan You',
                hashtags: 'vuejs,vite,javascript',
                twitterUser: 'youyuxi'
            },
            networks: [
                { network: 'telegram', icon: 'fab fah fa-lg fa-telegram-plane', color: '#0088cc' },
                { network: 'whatsapp', icon: 'fab fah fa-lg fa-whatsapp', color: '#25d366' },
            ]
        }
    },
    methods: {
        async getObject(){
            this.loaderProgress = true;
            const token = localStorage.getItem('token');
            axios.get('/api/object/show/' + this.$route.params.id)
            .then(response => {
                this.object = response.data.result.object;
                this.owner = response.data.result.object.user;
                // set the youtube id if its youtube video
                this.youtubeId = this.isYoutube(this.object.youtube_url);
                this.loaderProgress = false;
            });
        },
        isYoutube(url) {
            let pattern = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
            let matches = url.match(pattern);
            if(matches){
                return matches[1];
            }
            return false;
        },
        open(url){
            console.log(url);
            window.open(url, '_blank').focus();
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 1024){
                this.Sidebar = true;
                this.mobileContant = true;
                this.messageModal = true;
                return;
            }
            this.Sidebar = false;
            this.mobileContant = false;
            this.messageModal = false;
            return;
        },
        print() {
            this.$htmlToPaper("printMe");
        }
    },
    async created() {
        this.getObject();
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();

    },
    setup() {
        const route = useRoute()
        const router = useRouter()
        const op = ref();
        const toggle = (event) => {
            op.value.toggle(event);
        };
        onMounted(async () => {
            await router.isReady()
            console.log('route.path', route.path);
        })

        return { op, toggle, route }
    },
    mounted(){
        this.$store.dispatch('getUserInfo');
    },
    computed: {
        ...mapGetters([
            'user',
            'isLoaded'
        ]),
        iconSaved(){
            return this.savedFavorites ? 'icon-saved' : '';
        }
    },
}
</script>

<style>
.object_single_page_main_box,
.agent_objects_page_main_box{
    display: flex;
    margin: 0 auto;
    padding: 30px 34px 0;
    width: 100%;
}

.product-page__content{
    flex: 1;
    min-width: 0;
}

.product-page__sidebar {
    flex: none;
    margin-left: 20px;
    padding-top: 50px;
    width: 380px;
}

.product-page_btn_style{
    display: flex;
    padding: 20px 0;
    position: relative;
    margin-top: -35px;
}

.object_single_page_btn_style{
    color: #242629;
    padding-left: 12px;
    transition: border-color .5s;
    background-color: #fff;
    border-color: #d3d4d4 !important;
    height: 40px;
    padding: 0 16px;
    box-shadow: none;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: center;
    position: relative;
    text-align: center;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 5px;
}

.object_single_page_btn_style:active{
    border-color: transparent !important;
    color: #242629 !important;
    background-color: #d3d4d4 !important;
}
.object_single_page_btn_style:hover{
    border-color: transparent !important;
    color: #242629 !important;
    background-color: #d3d4d4 !important;
}

.product-page__sticky{
    position: sticky;
    top: 20px;
    width: 100%;
}

.autor_box_style{
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 #00000012;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.autor_box_style-2{
    border-bottom: 1px solid #c9cbcd;
    padding: 8px 32px;
}

.title, .title_img{
    overflow: hidden;
}
.product-page__sidebar_autor_top_box .title{
    color: #242629;
    flex-grow: 1;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-overflow: ellipsis;
}
.product-page__sidebar_autor_top_box .title_img{
    background: no-repeat 50%/contain;
    flex-shrink: 0;
    height: 40px;
    margin-left: 8px;
    width: 40px;
}
.autor_bottom_padding{
    padding: 32px;
}

.margin-bottom-24{
    margin-bottom: 24px;
}

.autor_bottom_top_style{
    align-items: center;
    color: #fff;
    display: flex;
    flex: none;
    font-size: 18px;
    font-weight: 500;
    justify-content: center;
    line-height: 24px;
    margin: 0 0 15px 0;
}

.autor_bottom_top_style img{
    border-radius: 50%;
}

.autor_full_name{
    display: flex;
    font-weight: 500;
    margin-bottom: 2px;
}

.autor_full_name a{
    color: inherit;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
}

.autor_full_name a:hover{
    color: #53b374;
}

.comments_modal_box .modal-body {
    padding: 2rem 0 0 0!important;
}

.button-root--show-all-object{
    background-color: rgba(8, 241, 4, 0.1);
    color: var(--form-button-color-green);
}

.button-root--show-all-object:hover{
    background-color: var(--fill_secondary_hover_20);
}

.button-root--show-all-object:hover .button-root__text-8-1-3{
    color: var(--form-button-color-green);
}
</style>