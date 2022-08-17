<template>
    <div class="home_page">
        <div class="home_page_div">
            <div v-show="filterBlock" class="filter-block">
                <div class="filter-block-inputs">
                    <div class="filter-block-inputs_content">
                        <div class="filter-block-inputs_content-top">
                            <div class="filter-block-inputs_content-top-txt">
                                <h1 class="title">Недвижимость в Ташкенте</h1>
                                <div class="filtr_block-container">
                                    <div class="filtr_block-wrapper">
                                        <filter-block></filter-block>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="filter-block-back"></div>
                <div class="filter-block-back__img"></div>
            </div>
            <div v-show="sectionComponents" class="section__components m-0">
                <quick-filtr></quick-filtr>
                <services></services>
            </div>
            <useful-links></useful-links>
            <objects></objects>
            <div class="popular_links mb-5">
                <div class="popular_links_block">
                    <div class="container_fluid">
                        <div class="popular_links_block_main main_box_style">
                            <div class="popular_links_block_main_header">
                                <h2 class="main_box_title">Популярное</h2>
                            </div>
                            <div class="popular_links_block_main_content">
                                <div class="row">
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                                        <a target="_blank" href="#!" class="popular_links_block_main_content_item">
                                            <div class="opular_links_block_main_content_item_header _7dCpz ODGnz">
                                            </div>
                                            <p class="text-1">Калькулятор<br> ипотеки</p>
                                            <p class="text-2">Рассчитайте платежи<br>и&nbsp;отправьте заявку </p>
                                        </a>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                                        <a target="_blank" href="#!" class="popular_links_block_main_content_item">
                                            <div class="opular_links_block_main_content_item_header _7dCpz ODGnz-2">
                                            </div>
                                            <p class="text-1">Одобрение квартиры<br> в банке</p>
                                            <p class="text-2">Отправьте квартиру<br>на одобрение с сайта</p>
                                        </a>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                                        <a target="_blank" href="#!" class="popular_links_block_main_content_item">
                                            <div class="opular_links_block_main_content_item_header _7dCpz ODGnz-3">
                                            </div>
                                            <p class="text-1">Войти<br> в личный кабинет</p>
                                            <p class="text-2">Вход в личный кабинет<br>для клиентов и партнеров</p>
                                        </a>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                                        <a target="_blank" href="#!" class="popular_links_block_main_content_item">
                                            <div class="opular_links_block_main_content_item_header _7dCpz ODGnz-4">
                                            </div>
                                            <p class="text-1">Разместить<br> объявление</p>
                                            <p class="text-2">Получайте больше звонков<br>от клиентов</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- New Objects list start -->
            <div class="new_objects_list mb-5">
                <div class="container_fluid">
                    <div class="new_objects_list_block">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="new_objects_list_block_tabs">
                                    <h2 class="new_objects_list_block_tabs_title">
                                        Популярные объявления
                                    </h2>
                                    <div class="new_objects_list_block_tabs_item">
                                        <div class="new_objects_list_block_tabs_header d-flex align-items-center mb-4">
                                            <span class="new_objects_list_block_tabs_header_title">Продажа:</span>
                                            <ul class="m-0 p-0  list-style-none new_objects_list_block_tabs_header_ul">
                                                <li class="new_objects_list_block_tabs_header_li">
                                                    <a @click="active1 = 0"  href="#!" class="new_objects_list_block_tabs_header_li_link" :class="{'active' : active1 === 0}">
                                                        Жилая
                                                    </a>
                                                </li>
                                                <li class="new_objects_list_block_tabs_header_li">
                                                    <a @click="active1 = 1"  href="#!" class="new_objects_list_block_tabs_header_li_link" :class="{'active' : active1 === 1}">
                                                        Загородная
                                                    </a>
                                                </li>
                                                <li class="new_objects_list_block_tabs_header_li">
                                                    <a @click="active1 = 2"  href="#!" class="new_objects_list_block_tabs_header_li_link" :class="{'active' : active1 === 2}">
                                                        Коммерческая
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="new_objects_list_block_tabs_content">
                                            <TabView ref="tabview2" v-model:activeIndex="active1">
                                                <TabPanel>
                                                    <div class="new_objects_list_block_tabs_content_list">
                                                        <div class="row">
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="/object" target="_blank" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="/object" target="_blank" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house-2.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-2.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="/object" target="_blank" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house-3.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-3.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="/object" target="_blank"
                                                                    class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house-4.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-4.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house-5.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-5.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house-6.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-6.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div class="new_objects_list_block_tabs_content_list">
                                                        <div class="row">
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house-6.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-6.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">100 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">95 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house-3.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-3.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">120 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div class="new_objects_list_block_tabs_content_list">
                                                        <div class="row">
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house-2.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-2.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">250 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">200 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                            </TabView>
                                        </div>
                                    </div>
                                    <div class="new_objects_list_block_tabs_item">
                                        <div class="new_objects_list_block_tabs_header d-flex align-items-center mb-4">
                                            <span class="new_objects_list_block_tabs_header_title">Аренда:</span>
                                            <ul class="m-0 p-0  list-style-none new_objects_list_block_tabs_header_ul">
                                                <li class="new_objects_list_block_tabs_header_li">
                                                    <a @click="active2 = 0"  href="#!" class="new_objects_list_block_tabs_header_li_link" :class="{'active' : active2 === 0}">
                                                        Жилая
                                                    </a>
                                                </li>
                                                <li class="new_objects_list_block_tabs_header_li">
                                                    <a @click="active2 = 1"  href="#!" class="new_objects_list_block_tabs_header_li_link" :class="{'active' : active2 === 1}">
                                                        Загородная
                                                    </a>
                                                </li>
                                                <li class="new_objects_list_block_tabs_header_li">
                                                    <a @click="active2 = 2"  href="#!" class="new_objects_list_block_tabs_header_li_link" :class="{'active' : active2 === 2}">
                                                        Коммерческая
                                                    </a>
                                                </li>
                                                <li class="new_objects_list_block_tabs_header_li">
                                                    <a @click="active2 = 3"  href="#!" class="new_objects_list_block_tabs_header_li_link" :class="{'active' : active2 === 3}">
                                                        Посуточно
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="new_objects_list_block_tabs_content">
                                            <TabView ref="tabview3" v-model:activeIndex="active2">
                                                <TabPanel>
                                                    <div class="new_objects_list_block_tabs_content_list">
                                                        <div class="row">
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house-2.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-2.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house-3.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-3.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div class="new_objects_list_block_tabs_content_list">
                                                        <div class="row">
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house-5.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-5.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house-4.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-4.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house-6.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-6.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div class="new_objects_list_block_tabs_content_list">
                                                        <div class="row">
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house-6.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-6.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house-2.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-2.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div class="new_objects_list_block_tabs_content_list">
                                                        <div class="row">
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/architecture.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/architecture.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house-3.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-3.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                                                <div class="new_objects_list_block_tabs_content_list_object w-100">
                                                                    <a href="#!" class="new_objects_list_block_tabs_content_list_object-link">
                                                                        <div class="objects_carousel_item_box_header_top">
                                                                            <picture class="h-auto">
                                                                                <source class="w-100" srcset="images/luxury-house-4.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-4.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </div>
                                                                        <div class="objects_carousel_item_box_content">
                                                                            <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                                                                <p class="total_price">46 500 y.e</p>
                                                                                <span>652 y.e / м²</span>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_title">
                                                                                <h4>
                                                                                    <a href="#!">2-комн. квартира, 5/7 этаж, 70 м²</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div class="objects_carousel_item_box_content_location text-left">
                                                                                <a href="#!" class="text-left">
                                                                                    <i class="feather icon-map-pin"></i> 
                                                                                    Юсуфа Хос Ходжиба (улица), Яккасарайский район 
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                            </TabView>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 d-lg-block d-none">
                                <div class="new_objects_list_block_specialists">
                                    <div class="specialist_list">
                                        <h3>Риелторы</h3>
                                        <div class="specialist_list_box">
                                            <div class="specialist_list_box_item">
                                                <a href="#!" class="specialist_list_box_item_link">
                                                    <div class="specialist_list_box_item_photo specialist_list_box_item_photo_radius" style="background-image: url('images/avatar_agent.jpg');"></div>
                                                    <div class="specialist_list_box_item_info">
                                                        <span class="specialist_list_box_item_info_full-name">Елена Русакова</span>
                                                        <span class="specialist_list_box_item_info-summary">10 предложений</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="specialist_list_box_item">
                                                <a href="#!" class="specialist_list_box_item_link">
                                                    <div class="specialist_list_box_item_photo specialist_list_box_item_photo_radius" style="background-image: url('images/avatar_agent.jpg');"></div>
                                                    <div class="specialist_list_box_item_info">
                                                        <span class="specialist_list_box_item_info_full-name">Елена Русакова</span>
                                                        <span class="specialist_list_box_item_info-summary">10 предложений</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="specialist_list_box_item">
                                                <a href="#!" class="specialist_list_box_item_link">
                                                    <div class="specialist_list_box_item_photo specialist_list_box_item_photo_radius" style="background-image: url('images/avatar_agent.jpg');"></div>
                                                    <div class="specialist_list_box_item_info">
                                                        <span class="specialist_list_box_item_info_full-name">Елена Русакова</span>
                                                        <span class="specialist_list_box_item_info-summary">10 предложений</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="specialist_list_box_item">
                                                <a href="#!" class="specialist_list_box_item_link">
                                                    <div class="specialist_list_box_item_photo specialist_list_box_item_photo_radius" style="background-image: url('images/avatar_agent.jpg');"></div>
                                                    <div class="specialist_list_box_item_info">
                                                        <span class="specialist_list_box_item_info_full-name">Елена Русакова</span>
                                                        <span class="specialist_list_box_item_info-summary">10 предложений</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <a href="#!" class="specialist_list_all_link">Все риелторы</a>
                                    </div>
                                    <div class="specialist_list">
                                        <h3>Агентства</h3>
                                        <div class="specialist_list_box">
                                            <div class="specialist_list_box_item">
                                                <a href="#!" class="specialist_list_box_item_link">
                                                    <div class="specialist_list_box_item_photo" style="background-image: url('images/agents_avatar.jpg');"></div>
                                                    <div class="specialist_list_box_item_info">
                                                        <span class="specialist_list_box_item_info_full-name">37 квадратных метров</span>
                                                        <span class="specialist_list_box_item_info-summary">1 предложение</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="specialist_list_box_item">
                                                <a href="#!" class="specialist_list_box_item_link">
                                                    <div class="specialist_list_box_item_photo" style="background-image: url('images/agents_avatar.jpg');"></div>
                                                    <div class="specialist_list_box_item_info">
                                                        <span class="specialist_list_box_item_info_full-name">ГорЖилФонд</span>
                                                        <span class="specialist_list_box_item_info-summary">17 предложение</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <a href="#!" class="specialist_list_all_link">Все агентства</a>
                                    </div>
                                    <div class="specialist_list">
                                        <h3>Застройщики</h3>
                                        <div class="specialist_list_box">
                                            <div class="specialist_list_box_item">
                                                <a href="#!" class="specialist_list_box_item_link">
                                                    <div class="specialist_list_box_item_photo" style="background-image: url('images/developers_avatar.jpg');"></div>
                                                    <div class="specialist_list_box_item_info">
                                                        <span class="specialist_list_box_item_info_full-name">ГК Пионер</span>
                                                        <span class="specialist_list_box_item_info-summary">359 квартир в 19 ЖК </span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <a href="#!" class="specialist_list_all_link">Все застройщики</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- New Objects list start -->
            
            <!-- Useful cards start -->
            <div class="useful_card_main mb-5">
                <div class="container_fluid">
                    <div class="useful_card_main_box">
                        <div class="useful_card_main_box_item">
                            <p class="useful_card_main_box_item_title">Квартиры у метро</p>
                            <div class="useful_card_main_box_item_metro">
                                <span class="metro_line_main">Чиланзарская линия</span>
                                <div class="useful_card_main_box_item_links mt-1">
                                    <div class="useful_card_main_box_item_links-item">
                                        <a href="#!" class="useful_card_main_box_item_links-item-link">
                                            <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                            <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Алмазар</span>
                                        </a>
                                    </div>
                                    <div class="useful_card_main_box_item_links-item">
                                        <a href="#!" class="useful_card_main_box_item_links-item-link">
                                            <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                            <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Чиланзар</span>
                                        </a>
                                    </div>
                                    <div class="useful_card_main_box_item_links-item">
                                        <a href="#!" class="useful_card_main_box_item_links-item-link">
                                            <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                            <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Мирзо Улугбек</span>
                                        </a>
                                    </div>
                                    <div class="useful_card_main_box_item_links-item">
                                        <a href="#!" class="useful_card_main_box_item_links-item-link">
                                            <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                            <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Новза</span>
                                        </a>
                                    </div>
                                    <div class="useful_card_main_box_item_links-item">
                                        <a href="#!" class="useful_card_main_box_item_links-item-link">
                                            <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                            <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Миллий бог</span>
                                        </a>
                                    </div>
                                    <div class="useful_card_main_box_item_links-item">
                                        <a href="#!" class="useful_card_main_box_item_links-item-link">
                                            <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                            <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Халкар Дустлиги</span>
                                        </a>
                                    </div>
                                    <div class="useful_card_main_box_item_links-item">
                                        <a href="#!" class="useful_card_main_box_item_links-item-link">
                                            <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                            <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Пахтакор</span>
                                        </a>
                                    </div>
                                    <div class="useful_card_main_box_item_links-item">
                                        <a href="#!" class="useful_card_main_box_item_links-item-link">
                                            <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                            <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Мустакиллик майдони</span>
                                        </a>
                                    </div>
                                    <div class="useful_card_main_box_item_links-item">
                                        <a href="#!" class="useful_card_main_box_item_links-item-link">
                                            <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                            <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Амир Темур Хиёбони</span>
                                        </a>
                                    </div>
                                    <div class="useful_card_main_box_item_links-item">
                                        <a href="#!" class="useful_card_main_box_item_links-item-link">
                                            <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                            <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Хамид Олимжон</span>
                                        </a>
                                    </div>
                                    <div class="useful_card_main_box_item_links-item">
                                        <a href="#!" class="useful_card_main_box_item_links-item-link">
                                            <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                            <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Пушкин</span>
                                        </a>
                                    </div>
                                    <div class="useful_card_main_box_item_links-item">
                                        <a href="#!" class="useful_card_main_box_item_links-item-link">
                                            <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                            <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Буюк Ипак Йули</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div v-show="showMore">
                                <div class="useful_card_main_box_item_metro">
                                    <span class="metro_line_main">Узбекистанская линия</span>
                                    <div class="useful_card_main_box_item_links mt-1">
                                        <div class="useful_card_main_box_item_links-item">
                                            <a href="#!" class="useful_card_main_box_item_links-item-link">
                                                <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                                <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Беруни</span>
                                            </a>
                                        </div>
                                        <div class="useful_card_main_box_item_links-item">
                                            <a href="#!" class="useful_card_main_box_item_links-item-link">
                                                <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                                <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Тинчлик</span>
                                            </a>
                                        </div>
                                        <div class="useful_card_main_box_item_links-item">
                                            <a href="#!" class="useful_card_main_box_item_links-item-link">
                                                <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                                <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Чорсу</span>
                                            </a>
                                        </div>
                                        <div class="useful_card_main_box_item_links-item">
                                            <a href="#!" class="useful_card_main_box_item_links-item-link">
                                                <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                                <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Гафура Гуляма</span>
                                            </a>
                                        </div>
                                        <div class="useful_card_main_box_item_links-item">
                                            <a href="#!" class="useful_card_main_box_item_links-item-link">
                                                <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                                <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Алишер Навои</span>
                                            </a>
                                        </div>
                                        <div class="useful_card_main_box_item_links-item">
                                            <a href="#!" class="useful_card_main_box_item_links-item-link">
                                                <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                                <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Узбекистан</span>
                                            </a>
                                        </div>
                                        <div class="useful_card_main_box_item_links-item">
                                            <a href="#!" class="useful_card_main_box_item_links-item-link">
                                                <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                                <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Космонавтов</span>
                                            </a>
                                        </div>
                                        <div class="useful_card_main_box_item_links-item">
                                            <a href="#!" class="useful_card_main_box_item_links-item-link">
                                                <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                                <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Ойбек</span>
                                            </a>
                                        </div>
                                        <div class="useful_card_main_box_item_links-item">
                                            <a href="#!" class="useful_card_main_box_item_links-item-link">
                                                <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                                <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Тошкент</span>
                                            </a>
                                        </div>
                                        <div class="useful_card_main_box_item_links-item">
                                            <a href="#!" class="useful_card_main_box_item_links-item-link">
                                                <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                                <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Машиносозлар</span>
                                            </a>
                                        </div>
                                        <div class="useful_card_main_box_item_links-item">
                                            <a href="#!" class="useful_card_main_box_item_links-item-link">
                                                <span class="mr-2" data-v-0e1729c0=""><svg width="12" height="8" viewBox="0 0 12 8" data-v-0e1729c0=""><path fill="#FAA400" fill-rule="evenodd" d="M8.366 0L6 4.022 3.634 0 .825 6.884H0v1.039h4.243V6.884h-.636l.619-1.716L6 8l1.774-2.831.618 1.716h-.638v1.038H12V6.884h-.825z" data-v-0e1729c0=""></path></svg></span>
                                                <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">Дустлик</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="watch_more">
                                    <button @click="showMore =! showMore" type="button" class="link-wrapper-4-0-2" role="button">
                                        <span class="link-link-4-0-2 link-link--medium-4-0-2" style="color: #53b374;">{{ showMore === true ? "Свернуть" : "Смотреть всё" }}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="useful_card_main_box_item">
                            <p class="useful_card_main_box_item_title">Квартиры в районах</p>
                            <div class="useful_card_main_box_item_metro">
                                <div class="useful_card_main_box_item_links mt-1">
                                    <div v-for="region in regions" :key="region.id" class="useful_card_main_box_item_links-item">
                                        <a href="#!" class="useful_card_main_box_item_links-item-link">
                                            <span class="link-link-4-0-2 link-link--medium-4-0-2 link--ellipsis">{{ region.name }}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Useful cards end -->
        </div>
    </div>
</template>

<script>
import NavBar from '../../components/SiteNavBar.vue'
import FilterBlock from '../../components/index/FilterBlock.vue'
import QuickFiltr from '../../components/index/section_component/QuickFilter.vue'
import Services from '../../components/index/section_component/Services.vue'
import UsefulLinks from '../../components/index/UsefulLinks.vue'
import Objects from '../../components/index/obejcts/Objects.vue'
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

export default {
    components: {
        NavBar,
        FilterBlock,
        QuickFiltr,
        Services,
        UsefulLinks,
        Objects,
        TabView,
        TabPanel
    },
    data() {
        return {
            sectionComponents: false,
            filterBlock: false,
            active1: 0,
            active2: 0,
            showMore: false,
            regions: [
                {id: 1, name: "Юнусобадский"},
                {id: 2, name: "Чиланзарский"},
                {id: 3, name: "Алмазарский"},
                {id: 4, name: "Бектемирский"},
                {id: 5, name: "Мирабадский"},
                {id: 6, name: "Мирзо-Улугбекский"},
                {id: 7, name: "Сергелийский"},
                {id: 8, name: "Учтепинский"},
                {id: 9, name: "Шайхантахурский"},
                {id: 10, name: "Яшнабадский"}
            ],
        }
    },
    setup() {
        
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 991){
                this.sectionComponents = true;
                this.filterBlock = false;
                return;
            }
            this.sectionComponents = false;
            this.filterBlock = true;
        },
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen()
    },
}
</script>

<style>
.filter-block{
    padding-top: 94px;
    position: relative;
    height: 490px;
}

.filter-block-inputs{
    position: relative;
    z-index: 3;
    padding: 0 16px;
}

.filter-block-back{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(24,41,48,.4);
    width: 100%;
    height: 490px;
}

.filter-block-back__img{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-position: 50% 100% !important;
    background-size: cover !important;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background: url('../../../../public/images/header_banner.jpg');
}

.filter-block-inputs{
    position: relative;
    z-index: 3;
    padding: 0 16px;
}

/* .filtr_block-container{
    display: flex;
    position: relative;
    margin: 0 auto;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);
    border-radius: 8px;
    background-color: #fff;
    max-width: 1109px;
    height: 60px;
}

.filtr_block-wrapper{
    width: 100%;
    display: flex;
} */
</style>