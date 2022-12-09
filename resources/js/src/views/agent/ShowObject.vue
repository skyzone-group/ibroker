<template>
    <div v-if="loaderProgress" class="loader-main-box" style="height: 100%;">
        <ProgressSpinner style="width:80px; height:80px" strokeWidth="3" fill="var(--surface-ground)" animationDuration="1s" />
    </div>
    <div v-else>
        <div id="inner" class="section" style="background: url('https://s3.amazonaws.com/content.har.com/awsbg/448838_bg.jpg') no-repeat center center;">
            <div class="agent-single_overlay">
                <nav-bar></nav-bar>
                <div id="header_content" v-for="user in owner" :key="user.id" class="container_medium" >
                    <a href="#!">
                        <div v-if="(user.image == null)" class="mh_img" style="background:url('https://pics.harstatic.com/agent/554530.jpg?ts=2021-01-05T12:50:00') no-repeat center top; background-size: cover;"></div>
                        <div v-else class="mh_img" :style="`background:url('/file/${user.image}') no-repeat center top; background-size: cover;`"></div>
                    </a>
                    <div class="member_header bordered-text">
                        <div class="mh_agent_name">
                            <h1 v-if="(user.firstname == null && user.lastname == null)">User {{user.id}}</h1>
                            <h1>{{user.firstname}} {{user.lastname}}</h1>
                        </div>
                        <a href="#!">
                            <div class="starimg d-flex" style="padding-top:10px;">
                                <Rating :modelValue="4" :readonly="true" :stars="5" :cancel="false"  class="pl-0"/>
                                <span>4/5</span>
                                <span>Посмотреть рейтинги</span>
                            </div>
                        </a>
                        <div class="contact_links">
                            <a :href="`mail:${user.email}`" class="emailicon nohover">
                                <i class="far fa-envelope mr-2"></i>
                                <span>Email</span>
                            </a>
                            <a :href="`tel:+${user.phone}`" class="phoneicon nohover">
                                <i class="fas fa-phone mr-2"></i>
                                <span>+{{user.phone}}</span>
                            </a>
                            <a href="#!" class="siteicon nohover">
                                <i class="fas fa-laptop mr-2"></i>
                                <span>https://www.ibroker.skybox.uz/javohir_toirov</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-object">
            <div class="container_medium">
                <div class="object_single_page_main_box">
                    <div class="product-page__content">
                        <div class="product-page__content_top_buttons product-page_btn_style justify-content-end">
                            <div class="product-page__content_top_buttons_item d-flex mr-0">
                                <div class="product-page__content_top_buttons_item_btn ml-0">
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
                            <div v-if="Sidebar" class="product-page__content_top_buttons_item ml-2">
                                <button type="button" id="send-message" class="object_single_page_btn_style dropdown-user-link">
                                    <span class="button-root__icon-8-1-3">
                                        <div class="icon-4-0-1">
                                            <i class="far fa-envelope" style="font-size: 16px;font-weight: 500;"></i>
                                        </div>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="product-page__content_mainBox">
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="main_block__price">
                                            <div class="main_block__price_box">
                                                <div class="price">
                                                    <span>{{vueNumberFormat(object.price, {})}} y.e</span>
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
                            </div>
                        </div>
                    </div>
                    <div v-if="!Sidebar" class="product-page__sidebar">
                        <div class="product-page__sticky">
                            <div class="product-page__sidebar_autor autor_box_style">
                                <div class="product-page__sidebar-form">
                                    <div class="block__header">
                                        <h3 class="title">Напишите автору</h3>
                                    </div>
                                    <div class="block__body">
                                        <form @submit.prevent="sendChatMessage(!v$.$invalid)" method="POST" class="sendChatMessage" :model="form">
                                            <div class="form-group">
                                                <span class="p-float-label">
                                                    <InputText id="form_name" type="text" v-model="v$.form.name.$model" :class="{'p-invalid': v$.form.name.$invalid && submitted}"/>
                                                    <label for="form_name">Ваше имя*</label>
                                                </span>
                                                <small v-if="(v$.form.name.$invalid && submitted) || v$.form.name.$pending.$response" class="p-error">{{v$.form.name.required.$message.replace('Value', 'Ваше имя*')}}</small>
                                            </div>
                                            <div class="form-group">
                                                <span class="p-float-label">
                                                    <InputText id="form_email" type="email" v-model="v$.form.email.$model" :class="{'p-invalid': v$.form.email.$invalid && submitted}"/>
                                                    <label for="form_email">Ваш email*</label>
                                                </span>
                                                <small v-if="(v$.form.email.$invalid && submitted) || v$.form.email.$pending.$response" class="p-error">{{v$.form.email.required.$message.replace('Value', 'Ваш email*')}}</small>
                                            </div>
                                            <div class="form-group">
                                                <span class="p-float-label">
                                                    <InputText id="form_phone" type="number" v-model="v$.form.phone.$model" :class="{'p-invalid': v$.form.phone.$invalid && submitted}"/>
                                                    <label for="form_phone">Ваш телефон*</label>
                                                </span>
                                                <small v-if="(v$.form.phone.$invalid && submitted) || v$.form.phone.$pending.$response" class="p-error">{{v$.form.phone.required.$message.replace('Value', 'Ваш телефон*')}}</small>
                                            </div>
                                            <div class="form-group">
                                                <span class="p-float-label">
                                                    <Textarea id="form_message" v-model="v$.form.message.$model" rows="3" :class="{'p-invalid': v$.form.message.$invalid && submitted}"/>
                                                    <label for="form_message">Ваше сообщение*</label>
                                                </span>
                                                <small v-if="(v$.form.message.$invalid && submitted) || v$.form.message.$pending.$response" class="p-error">{{v$.form.message.required.$message.replace('Value', 'Ваше сообщение*')}}</small>
                                            </div>
                                            <button type="submit" class="form-group_btn">
                                                <span>Отправить сообщение автору</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
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
</template>


<script>
// Navbar
import NavBar from '../../../components/agent/NavBar.vue';
// Components
import Rating from 'primevue/rating';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ProgressSpinner from 'primevue/progressspinner';
import OverlayPanel from 'primevue/overlaypanel';
import CopyToClipboard from '../../../components/CopyToClipboard.vue'
// Validation
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
// Image Gallery
import GalleriaImage from '../../../components/galleria/GalleriaImage.vue';
// 
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { ref } from 'vue';
export default {
    // setup: () => ({  }),
    components: {
        NavBar,
        Rating,
        InputText,
        Textarea,
        GalleriaImage,
        ProgressSpinner,
        OverlayPanel,
        CopyToClipboard
    },
    data() {
        return {
            form: {
                name: "",
                email: "",
                phone: null,
                message: ""
            },
            submitted: false,
            Sidebar: false,
            object: [],
            owner: [],
            youtubeId: false,
            loaderProgress: false,
            mobileContant: false,
            mobileContantPhone: false,
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
    validations() {
        return {
            form: {
                name: { required },
                email: { required },
                phone: { required },
                message: { required },
            },
        }
    },
    methods: {
        sendChatMessage(isFormValid){
            this.submitted = true;
            if (!isFormValid) {
                return;
            }
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 1024){
                this.Sidebar = true;
                this.mobileContant = true;
                return;
            }
            this.mobileContant = false;
            this.Sidebar = false;
            return;
        },
        async getObject(){
            this.loaderProgress = true;
            axios.get('/api/agent/object/show/' + this.$route.params.object_id)
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
        })
        return {
            v$: useVuelidate(),
            op, toggle, route
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
        this.getObject();
    },
}
</script>


<style>
#inner.section {
    background-size: cover;
    position: relative;
    background-attachment: fixed;
    position: relative;
    margin: 0px !important;
    padding: 0px !important;
    min-height: 230px;
}

#inner .mh_img {
    margin-top: 28px;
    position: absolute;
    z-index: 200;
    width: 167px;
    height: 167px;
    border-radius: 4px;
    overflow: hidden;
}

#inner .member_header {
    float: left;
    max-width: 100%;
    padding-left: 30px;
    margin-left: 180px;
    padding-top: 10px;
}


.member_header {
    margin-top: 10px;
    max-width: 570px;
}

.mh_agent_name h1 {
    font-weight: 500 !important;
    font-size: 48px;
    color: #FFFFFF;
    line-height: 58px;
}


#inner .mh_agent_name h1 {
    font-size: 32px;
    line-height: 34px;
}

.starimg .p-rating .p-rating-icon {
    color: #fff;
}

.starimg .p-rating span{
    padding-left: 0;
}

.starimg span {
    font-size: 16px;
    color: #ffffff;
    padding-left: 10px;
}


#inner .member_header .contact_links {
    padding-top: 15px;
    display: flex;
    align-items: center;
}

#inner .member_header .contact_links a {
    font-size: 18px;
    line-height: 22px;
    clear: none;
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.contact_links a {
    font-size: 24px;
    color: #FFFFFF;
    line-height: 32px;
    background-position: left center;
    background-repeat: no-repeat;
    display: block;
    clear: both;
}

.product-page__sidebar-form .block__header{
    padding: 1.5rem 1.5rem 0;
}

.product-page__sidebar-form .block__body {
    padding: 1.5rem 1.5rem;
}

.product-page__sidebar-form .block__header .title{
    font-size: 1.25rem;
    color: #000;
}

.product-page__sidebar-form .block__body .p-inputtext{
    padding: 12px 10px;
    width: 100%;
    border-radius: 4px;
}

.section-object .product-page__sidebar {
    padding-top: 0;
    width: 300px;
}

.product-page__sidebar-form .block__body .form-group_btn{
    color: #fff;
    background-color: #588ed8;
    border-color: #588ed8;
    line-height: 1.5rem;
    padding: 10px;
    font-size: 14px;
    border-radius: 4px;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    width: 100%;
}

.section-object .object_single_page_main_box{
    padding: 30px 0;
}
/* ********************************************************************************************** */
@media only screen and (min-width: 230px) and (max-width: 550px){
    .member_header .contact_links a {
        font-size: 18px;
    }

    #inner .mh_agent_name h1 {
        font-size: 24px;
    }

    #inner .mh_img {
        width: 70px;
        height: 70px;
        margin-top: 10px;
    }

    #inner .member_header {
        padding-top: 0px;
        margin-left: 80px;
    }

    #inner.section {
        min-height: 160px;
    }
}

@media only screen and (max-width: 991px){
    #inner .member_header .contact_links {
        flex-direction: column;
        align-items: flex-start;
    }
}

@media only screen and (max-height: 700px){
    .member_header {
        margin-top: 0px;
    }

    .mh_agent_name h1 {
        font-size: 32px;
    }
}

@media (max-width: 690px){
    #inner .member_header .contact_links {
        display: none;
    }
}

@media only screen and (max-width: 575px){
    .section-object .container_medium {
        padding: 0 !important;
    }
}


@media (max-width: 475px){
    #inner .starimg {
        padding-top: 0 !important;
        flex-wrap: wrap;
    }

    #inner .starimg .p-rating .p-rating-icon:not(:first-child) {
        display: none;
    }

}

@media (max-width: 320px){
    #inner .starimg span:not(:first-child){
        padding-left: 0;
    }
}
</style>