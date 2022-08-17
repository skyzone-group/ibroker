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
                                                    <div class="realtor__info-main-content_city">Город: Ташкент</div>
                                                    <div class="realtor__info-main-content_email">
                                                        <span>Email: </span> 
                                                        <a href="test@gmail.com">test@gmail.com</a> 
                                                    </div>
                                                    <!-- <div class="realtor__info-main-content_buttons">
                                                        <div class="realtor__info-main-content_call-button">
                                                            <button class="btn btn-block btn-default btn-with-icon btn-lg">
                                                                <i class="feather icon-phone"></i>
                                                                <span>Показать телефон</span>
                                                            </button>
                                                        </div>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <div class="realtor__info-main-filter my-3">
                                                <div class="realtor__info-main-filter-filters">
                                                    <form class="FiltersForm_name_main">
                                                        <div class="FiltersForm__content">
                                                            <div class="FiltersForm__content-filters">
                                                                <div class="filters-wrapper w-100 d-flex">
                                                                    <div class="filters-wrapper-item filters-wrapper-item-container-1">
                                                                        <Dropdown v-model="selectedCity1" :options="cities" optionLabel="name" optionValue="code" placeholder="Select a City" />
                                                                    </div>
                                                                    <div class="filters-wrapper-item filters-wrapper-item-container-2">
                                                                        
                                                                    </div>
                                                                    <div v-if="selectedCity1 === 'apartment'">
                                                                        ishladi
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                Ok
                                            </div>
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
            <div class="agent-single-div-content my-5">
                <div class="agent-single-div-content-block">
                    <div class="container_fluid">
                        <div class="agent-single-div-content-div">
                            <div class="row flex-lg-row flex-column-reverse">
                                <div class="col-lg-9 col-12">
                                    <div class="agent-single-div-content-div-objects">
                                        <h1 class="agent-single-div-content-div-objects-title">Мои объявления</h1>
                                        <div class="row ml-0 mr-0">
                                            <div class="col-lg-4 col-md-4 col-sm-6">
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
                                                                <!-- <button @click="showNum(1)" class="button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3-4 button-root--type-button-reset-8-1-3 button-root-8-1-3 button-root-8-1-3-4 button-root--primary-8-1-3-4 align-items-center" id="showNum_1" style="display: flex;">
                                                                    <i class="feather icon-phone mr-2"></i>
                                                                    <span class="button-root__text-8-1-3">
                                                                        Позвонить
                                                                    </span>
                                                                </button> -->
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
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-6">
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
                                                                                <source class="w-100" srcset="images/luxury-house.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </a>
                                                                    </swiper-slide>
                                                                    <swiper-slide>
                                                                        <a href="#!" target="_blank" class="text-dark">
                                                                            <picture class="h-auto w-100">
                                                                                <source class="w-100" srcset="images/luxury-house-2.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-2.jpg" class="w-100" alt="" style="object-fit: cover;">
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
                                                                <!-- <button @click="showNum(1)" class="button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3-4 button-root--type-button-reset-8-1-3 button-root-8-1-3 button-root-8-1-3-4 button-root--primary-8-1-3-4 align-items-center" id="showNum_1" style="display: flex;">
                                                                    <i class="feather icon-phone mr-2"></i>
                                                                    <span class="button-root__text-8-1-3">
                                                                        Позвонить
                                                                    </span>
                                                                </button> -->
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
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-6">
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
                                                                                <source class="w-100" srcset="images/luxury-house-6.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-6.jpg" class="w-100" alt="" style="object-fit: cover;">
                                                                            </picture>
                                                                        </a>
                                                                    </swiper-slide>
                                                                    <swiper-slide>
                                                                        <a href="#!" target="_blank" class="text-dark">
                                                                            <picture class="h-auto w-100">
                                                                                <source class="w-100" srcset="images/luxury-house-4.jpg" type="image/jpg" style="object-fit: cover;">
                                                                                <img src="images/luxury-house-4.jpg" class="w-100" alt="" style="object-fit: cover;">
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
                                                                <!-- <button @click="showNum(1)" class="button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3-4 button-root--type-button-reset-8-1-3 button-root-8-1-3 button-root-8-1-3-4 button-root--primary-8-1-3-4 align-items-center" id="showNum_1" style="display: flex;">
                                                                    <i class="feather icon-phone mr-2"></i>
                                                                    <span class="button-root__text-8-1-3">
                                                                        Позвонить
                                                                    </span>
                                                                </button> -->
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-12">
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
import { Pagination, Navigation } from "swiper";

import Dropdown from 'primevue/dropdown';

export default {
    components: {
        Swiper,
        SwiperSlide,
        Dropdown
    },
    data() {
        return {
            showPhoneNumber: false,
            testDrop: false,
            test: "",
            selectedCity1: "apartment",
            cities: [
                {name: 'Квартиру', code: 'apartment'},
                {name: 'Комнату', code: 'room'},
                {name: 'Дом', code: 'house'},
                {name: 'Участок', code: 'plot'},
                {name: 'Гараж или машиноместо', code: 'garage'},
                {name: 'Коммерческую недвижимость', code: 'commercial'}
            ],

        }
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
    
}
</script>


<style>
.agent-single-div-header{
    padding-top: 70px;
    position: relative;
    height: 490px;
}

.agent-single-div-header-background{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(21, 25, 27, 0.61);
    width: 100%;
    height: 490px;
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

.realtor__info-main-content_city, .realtor__info-main-content_fio {
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

.realtor__info-main-content_call-button {
    margin-right: 20px;
}

.realtor__info-main-content_call-button {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
}
.FiltersForm__content-filters{
    display: flex;
    border-radius: 8px;
    background-color: #fff;
    max-width: 1109px;
    height: 60px;
    position: relative;
    margin: 0 auto;
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

.filters-wrapper-item-container-2{
    flex: 0 0 156px;
    max-width: 156px;
}

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

.filters-wrapper-item .p-dropdown .p-dropdown-label {
    background: transparent;
    border: 0 none;
    font-size: 16px;
    line-height: 48px;
    font-weight: 500;
    color: #000;
}

.p-dropdown:not(.p-disabled):hover {
    border-color: transparent !important;
}

.p-dropdown:not(.p-disabled).p-focus{
    box-shadow: unset !important;
    border-color: transparent !important;
}

.p-dropdown .p-dropdown-panel{
    top: 396px !important;
    border-radius: 10px !important;
    min-width: 284px !important;
}

/* .pi {
    font-size: 8px !important;
} */

.p-dropdown-panel .p-dropdown-items .p-dropdown-item{
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
/* ************************************* MEDIA *********************************** */
@media screen and (max-width: 575px){
    .realtor__info-main-content {
        flex: 100%;
        text-align: center;
    }
    
    .realtor__info-main_img {
        margin: 40px auto 30px;
    }
    
    .agent-single-div-header {
        padding-top: 0;
    }
    
    .agent-single-div-content-div-objects .commercial_page_div_objects_lists_item {
        width: 100%;
    }
}
</style>