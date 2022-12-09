<template>
    <div class="agent_objects_page_frontend padding-50y">
        <div class="agent_objects_page_main">
            <div class="container_fluid">
                <div v-if="loaderProgress" class="loader-main-box" style="height: 100vh;">
                    <ProgressSpinner style="width:80px; height:80px" strokeWidth="3" fill="var(--surface-ground)" animationDuration="1s" />
                </div>
                <div v-else class="agent_objects_page_container">
                    <!-- mobile agent info start -->
                    <div v-if="Sidebar == false" class="product-page__sidebar mobile-agent_header-top">
                        <div class="product-page__sticky">
                            <aside class="product-page__sidebar_autor autor_box_style">
                                <div class="product-page__sidebar_autor_bottom autor_bottom_padding">
                                    <div class="product-page__sidebar_autor_bottom_top margin-bottom-24">
                                        <div class="d-flex align-items-center justify-content-between" style="padding-bottom: 16px;">
                                            <!-- <div v-if="!user.image" style="background-color: rgb(156, 198, 196);width: 60px;height: 60px;border-radius: 5px;" class="autor_bottom_top_style">TJ</div> -->
                                            <div style="width: 72px;height: 72px;" class="autor_bottom_top_style">
                                                <img v-if="!owner.image" :src="defaultImage" alt="user_avatar_default" class="w-100 h-100" style="object-fit: cover;">
                                                <img v-else :src="`/file/${owner.image}`" alt="user_avatar" class="w-100 h-100" style="object-fit: cover;">
                                            </div>
                                            <div class="share-page-agent d-flex align-items-center">
                                                <button @click="shareAgentPage = true" type="button" class="share-page-agent-btn">
                                                    <span class="dropdownButton-button__icon-0-7-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#53b374" class="bi bi-share-fill" viewBox="0 0 16 16" id="IconChangeColor"> 
                                                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" id="mainIconPathAttribute" stroke-width="0" stroke="#08f10433"></path> 
                                                        </svg>
                                                    </span>
                                                </button>
                                                <Dialog header="Рассказать друзьям" v-model:visible="shareAgentPage" 
                                                :breakpoints="{'960px': '75vw', '640px': '90vw'}" 
                                                :style="{width: '50vw'}"
                                                :dismissableMask="true" 
                                                :draggable="false"
                                                :modal="true">
                                                    <ShareNetwork
                                                        v-for="network in networks"
                                                        :network="network.network"
                                                        :key="network.network"
                                                        :style="{backgroundColor: network.color}"
                                                        class="nohover share-page-agent-links"
                                                        :url="sharing.url"
                                                        :title="sharing.title"
                                                        :description="sharing.description"
                                                        :quote="sharing.quote"
                                                        :hashtags="sharing.hashtags"
                                                        :twitterUser="sharing.twitterUser"
                                                    >
                                                        <i :class="network.icon"></i>
                                                        <span>{{network.name}}</span>
                                                    </ShareNetwork>
                                                </Dialog>
                                            </div>
                                        </div>
                                        <div class="product-page__sidebar_autor_bottom_content" style="flex: auto;">
                                            <div class="autor_full_name">
                                                <a href="/agent-single" target="_blank">{{ owner.firstname }} {{ owner.lastname }}</a>
                                            </div>
                                            <div class="autor_enter_date" style="color: #4b545b99;">
                                                На iBroker 1 год 1 мес.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-page__sidebar_autor_bottom_button d-flex flex-column">
                                        <button v-if="showPhone[0] == false" @click="showPhone[0] = true" type="button" class="button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3-4 button-root--type-button-reset-8-1-3 button-root-8-1-3">
                                            <span class="button-root__text-8-1-3">Показать телефон</span>
                                        </button>
                                        <a v-if="showPhone[0] == true" :href="`tel:+${owner.phone}`" class="nohover button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3-4 button-root--type-button-reset-8-1-3 button-root-8-1-3">
                                            <span class="button-root__text-8-1-3">+{{owner.phone}}</span>
                                        </a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                    <!-- mobile agent info end -->
                    <div class="header-title-top">
                        <h2 class="listing__section-title">Объявления пользователя</h2>
                    </div>
                    <div class="agent_objects_page_main_box">
                        <div class="product-page__content">
                            <div class="product-page_btn_style flex-column">
                                <div class="objects-top row ml-0 mr-0">
                                    <div class="col align-self-center pl-0">
                                        <div class="filters-tabs-buttons">
                                            <label for="type__filter_all" class="filters-tabs-item Radio_theme_realty" :class="{'active' : form.object_deals == 'all'}">
                                                <input @change="pushParamsURL()" v-model="form.object_deals" id="type__filter_all" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="all">
                                                Все
                                            </label>
                                            <label for="type__filter_buy" class="filters-tabs-item Radio_theme_realty" :class="{'active' : form.object_deals == 'buy'}">
                                                <input @change="pushParamsURL()" v-model="form.object_deals" id="type__filter_buy" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="buy">
                                                Продажа
                                            </label>
                                            <label for="type__filter_rent" class="filters-tabs-item Radio_theme_realty" :class="{'active' : form.object_deals == 'rent'}">
                                                <input @change="pushParamsURL()" v-model="form.object_deals" id="type__filter_rent" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="rent">
                                                Аренда
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col align-self-center d-flex justify-content-end pr-0">
                                        <Dropdown v-if="DesktopSort" @change="pushParamsURL()" 
                                        v-model="form.sort_direction" 
                                        :options="sortOptions" 
                                        optionLabel="name_ru" 
                                        optionValue="id" 
                                        placeholder="Сортировка" 
                                        panelClass="sort-object-dropdown"/>
                                        <button v-else @click="visibleBottom = true" type="button" class="mobile-sort mobile-search-btn ml-auto">
                                            <span class="dropdownButton-button__icon-0-7-0">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" data-e2e-id="replacement-icon" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.5579 1.96142V11.373H14.4696C14.9369 11.373 15.1812 11.8922 14.8413 12.1902L11.8782 14.863C11.6658 15.0457 11.3365 15.0457 11.1241 14.863L8.16094 12.1902C7.82108 11.8922 8.05473 11.373 8.53266 11.373H10.4338V1.96142C10.4338 1.43264 10.9117 1 11.4958 1C12.08 1 12.5579 1.43264 12.5579 1.96142Z" fill="#242629"></path>
                                                    <path d="M4.12783 1.13691L1.16113 3.81744C0.820865 4.11527 1.0548 4.63408 1.5333 4.63408H3.43667V14.0392C3.43667 14.5677 3.91517 15 4.5 15C5.08483 15 5.56333 14.5677 5.56333 14.0392V4.63408H7.4667C7.9452 4.63408 8.17914 4.11527 7.83887 3.81744L4.87217 1.13691C4.67013 0.954364 4.32987 0.954364 4.12783 1.13691Z" fill="#242629"></path>
                                                </svg>
                                            </span>
                                        </button>
                                        <!-- Mobile Sort Filter -->
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
                                        <!-- Mobile Sort Filter -->

                                        <!-- Share agent page desktop modal -->
                                        <div v-if="Sidebar == true" class="ml-2">
                                            <button @click="toggle" type="button" class="mobile-sort mobile-search-btn">
                                                <span class="dropdownButton-button__icon-0-7-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16" id="IconChangeColor"> 
                                                        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" id="mainIconPathAttribute" stroke-width="0" stroke="#242629"></path> 
                                                    </svg>
                                                </span>
                                            </button>
                                            <OverlayPanel ref="op" appendTo="body" id="overlay_panel" style="width: 450px"  class="social-icons-overlay">
                                                <div class="item">
                                                    <div class="hint-head-0-9-4">
                                                        <div class="title" style="font-weight: 700;">Рассказать друзьям</div>
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
                                                                </div>
                                                            </div>
                                                            <copy-to-clipboard v-slot="props">
                                                                <button @click="props.copy(`http://ibroker.skybox.uz${this.$route.fullPath}`)" :disabled="props.status === 'copied'" type="button" class="object_single_page_btn_style w-100" :class="{'button-disabled' : props.status === 'copied'}">
                                                                    <span class="button-root__text-8-1-3">{{props.status === 'copied' ? 'Ссылка скопирована' : 'Скопировать ссылку'}}</span>
                                                                </button>
                                                            </copy-to-clipboard>
                                                        </div>
                                                    </div>
                                                </div>
                                            </OverlayPanel>
                                        </div>
                                        <!-- Share agent page desktop modal -->
                                    </div>
                                </div>
                            </div>
                            <div class="agent_objects_all">
                                <div v-for="object in objects" :key="object.id"  class="object-item">
                                    <router-link target="_blank" :to="{name: 'showObject', params: {type_deal: object.object_deals, type: object.object_type.id == 1 ? 'flat' : object.object_type.id == 2 ? 'house' : object.object_type.id == 3 ? 'commercial' : object.object_type.id == 4 ? 'suburban' : 'land', id: object.id}}">
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
                                                        <swiper-slide v-for="image in object.images" :key="image.id">
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
                                                            <p class="object-price-list-p">{{ vueNumberFormat(object.price, {}) }} y.e</p>
                                                            <p class="object-price-list-desc ml-2">264 705$/м²</p>
                                                        </div>
                                                        <div class="object-details-item object-details-header">
                                                            <a class="NXJyid" target="_blank" :href="`/show/object/${object.object_deals}/${object.object_type.id == 1 ? 'flat' : object.object_type.id == 2 ? 'house' : object.object_type.id == 3 ? 'commercial' : object.object_type.id == 4 ? 'suburban' : 'land'}/${object.id}`" rel="noopener noreferrer">
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
                                                            <p class="object-price-list-p">{{ vueNumberFormat(object.price, {}) }} y.e</p>
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
                                                <!-- <div v-if="DesktopSort == false" class="object-body-footer">
                                                    <div class="object-details-item">
                                                        <div class="object-details-author">
                                                            <div class="author-box">
                                                                <div style="height: 100%;">
                                                                    <picture class="author-box-pic">
                                                                        <img v-if="!owner.image" :src="defaultImage" alt="user_avatar" class="img-full author-box-pic-img" style="object-fit: cover;">
                                                                        <img v-else :src="`/file/${owner.image}`" alt="user_avatar" class="img-full author-box-pic-img" style="object-fit: cover;">
                                                                    </picture>
                                                                </div>
                                                            </div>
                                                            <span class="author-name">{{ owner.firstname && owner.firstname ? (`${owner.firstname} ${owner.lastname}`) : `User ${owner.id}`}}</span>
                                                        </div>
                                                    </div>
                                                    <div class="object-details-item">
                                                        <button @click.prevent v-if="object.id != open" @click="togglePhoneNum(object.id)" class="object-details-item-btn" type="button">
                                                            <span class="object-details-item-btn-txt">Показать телефон</span>
                                                        </button>
                                                        <a v-if="object.id === open" @click.prevent :href="`tel:+${owner.phone}`" class="object-details-item-btn">
                                                            <span class="object-details-item-btn-txt">+{{owner.phone}}</span>
                                                        </a>
                                                    </div>
                                                </div> -->
                                            </div>
                                        </div>
                                    </router-link>
                                </div>
                                <div v-if="objects.length == 0">
                                    <h3 class="text-theme text-center" style="font-size: 25px;color: #000;font-weight: 700;">Результатов не найдено</h3>
                                </div>
                            </div>
                        </div>
    
                        <!-- sidebar -->
                        <div v-if="Sidebar" class="product-page__sidebar">
                            <div class="product-page__sticky">
                                <aside class="product-page__sidebar_autor autor_box_style">
                                    <div class="product-page__sidebar_autor_bottom autor_bottom_padding">
                                        <div class="product-page__sidebar_autor_bottom_top margin-bottom-24">
                                            <div class="d-flex flex-column align-items-center justify-content-center">
                                                <!-- <div v-if="!user.image" style="background-color: rgb(156, 198, 196);width: 60px;height: 60px;border-radius: 5px;" class="autor_bottom_top_style">TJ</div> -->
                                                <div style="width: 120px;height: 120px;" class="autor_bottom_top_style">
                                                    <img v-if="!owner.image" :src="defaultImage" alt="user_avatar_default" class="w-100 h-100" style="object-fit: cover;">
                                                    <img v-else :src="`/file/${owner.image}`" alt="user_avatar" class="w-100 h-100" style="object-fit: cover;">
                                                </div>
                                                <div class="product-page__sidebar_autor_bottom_content text-center" style="flex: auto;">
                                                    <div class="autor_full_name justify-content-center">
                                                        <a href="/agent-single" target="_blank">{{ owner.firstname }} {{ owner.lastname }}</a>
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
                                            <a v-if="showPhone[0] == true" :href="`tel:+${owner.phone}`" class="nohover button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3-4 button-root--type-button-reset-8-1-3 button-root-8-1-3">
                                                <span class="button-root__text-8-1-3">+{{owner.phone}}</span>
                                            </a>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>

                    <!-- Fixed author phone -->
                    <div v-if="FixedAgentPhone" class="object_single_page_main_object_phone">
                        <div class="object_single_page_main_object_phone_box">
                            <button v-if="showPhone[2] == false" @click="showPhone[2] = true" class="button-root-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3 button-root--type-button-reset-8-1-3 button-root--fluid-8-1-3" type="button" data-e2e-id="sticky-footer-show-phone"><span class="button-root__text-8-1-3">Показать телефон</span></button>
                            <a  v-if="showPhone[2] == true" :href="`tel:+${owner.phone}`" class="nohover button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3 button-root--type-button-reset-8-1-3 button-root-8-1-3">
                                <span class="button-root__text-8-1-3">+{{owner.phone}}</span>
                            </a>
                        </div>
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
</template>

<script>
import defaultImage from "../../../../../public/images/avatar-dafault.png"
import ProgressSpinner from 'primevue/progressspinner';
import Dropdown from 'primevue/dropdown';
import CopyToClipboard from '../../../components/CopyToClipboard.vue';
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import Paginator from 'primevue/paginator';
import Dialog from 'primevue/dialog';
import OverlayPanel from 'primevue/overlaypanel';
import { ref } from 'vue';
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
export default {
    components: {
        Swiper,
        SwiperSlide,
        ProgressSpinner,
        Dropdown,
        CopyToClipboard,
        Button,
        Sidebar,
        Paginator,
        Dialog,
        OverlayPanel
    },
    data() {
        return {
            Sidebar: true,
            loaderProgress: false,
            showPhone: [false,false,false],
            mobilePrice: false,
            objectBtns: false,
            visibleBottom: false,
            DesktopSort: true,
            MobileAgentInfo: false,
            shareAgentPage: false,
            FixedAgentPhone: false,
            open: null,
            totalRecords: 120,
            pageInfo: null,
            totalObject: null,
            total: 2,
            objectsCount: null,
            objects: [],
            owner: [],
            defaultImage,
            form: {
                object_deals: this.$route.query.object_deals,
                sort_direction: this.$route.query.sort_direction,
            },
            sortOptions: [
                {name_ru: 'Самые новые', name_uz: 'Eng yangi', id: 'date_new'},
                {name_ru: 'Самые старые', name_uz: 'Eng eski', id: 'date_old'},
                {name_ru: 'Самые дорогие', name_uz: 'Eng qimmat', id: 'price_expensive'},
                {name_ru: 'Самые дешевые', name_uz: 'Eng arzon', id: 'price_cheap'},
            ],
            sharing: {
                url: `http://ibroker.skybox.uz${this.$route.fullPath}`,
                title: 'iBROKER.uz',
                description: '⭐ Помогу купить, продать, сдать и снять квартиру в Ташкенте.⭐ Благотворительность.',
                quote: 'The hot reload is so fast it\'s near instant. - Evan You',
                hashtags: 'vuejs,vite,javascript',
                twitterUser: 'youyuxi'
            },
            networks: [
                { network: 'telegram', icon: 'fab fah fa-lg fa-telegram-plane', color: '#0088cc', name: 'Telegram' },
                { network: 'whatsapp', icon: 'fab fah fa-lg fa-whatsapp', color: '#25d366', name: 'Whatsapp' },
            ]
        }
    },
    methods: {
        async getObjects(page){
            this.loaderProgress = true;
            axios.get(`/api/object/getOthers/${this.$route.params.id}?page=${page+=1}&total=${this.total}`, { params: this.$route.query})
            .then(response => {
                this.objects = response.data.result.objects.data;
                this.owner = response.data.result.user;
                this.pageInfo = response.data.result.objects;
                this.totalObject = response.data.result.total;
                this.objectsCount = response.data.result.count;
                this.loaderProgress = false;
            });
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 1024){
                this.Sidebar = false;
                this.FixedAgentPhone = true;
                if(this.windowWidth <= 1000){
                    this.mobilePrice = true;
                    if(this.windowWidth <= 736){
                        this.objectBtns = true;
                    }
                    if(this.windowWidth <= 575){
                        this.DesktopSort = false;
                    }
                }
                return;
            }
            this.FixedAgentPhone = false;
            this.DesktopSort = true;
            this.objectBtns = false;
            this.mobilePrice = false;
            this.Sidebar = true;
            return;
        },
        pushParamsURL(){
            this.$router.push(
            {
                name: "userObjects",
                query: {
                    object_deals: this.form.object_deals,
                    sort_direction: this.form.sort_direction
                }
            });
        },
        togglePhoneNum(id) {
            this.open = this.open === id ? null : id
        },
    },
    async created() {
        this.getObjects();
        this.$watch(() => this.$route.query, this.getObjects);
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    setup() {
        const op = ref();
        const toggle = (event) => {
            op.value.toggle(event);
        };
        return {
            modules: [Autoplay,Pagination,Lazy,FreeMode,Navigation,Thumbs],
            op, toggle
        };
    }
}
</script>

<style>
.listing__section-title{
    display: block;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 1.8rem;
    color: #000;
}

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

.agent_objects_page_main_box .product-page_btn_style{
    padding: 0 0 20px 0;
    margin-top: 0;
}

/* .agent_objects_page_main_box .objects-top {
    margin-bottom: 0;
} */

.agent_objects_page_main_box {
    padding: 0 !important;
}

.agent_objects_page_main_box .product-page__sidebar {
    padding-top: 0;
}

.agent_objects_page_main_box .product-page__sidebar {
    width: 320px;
}

.agent_objects_all .object-item .object-photos {
    width: 250px;
}

.agent_objects_all .object-item .object-photos-thumb {
    height: 200px;
}

.agent_objects_all .object-item .object-details {
    width: 300px;
}

.agent_objects_all .object-item .object-price {
    width: 150px;
}

.agent_objects_all .object-details-header .title {
    font-size: 18px;
    line-height: 25px;
}

.agent_objects_all .object-price-list-p {
    font-size: 20px;
    line-height: 25px;
}

.agent_objects_all .object-details-description {
    -webkit-line-clamp: 5;
}

.share-page-agent-links {
    flex: none;
    color: #FFFFFF;
    background-color: #333;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 0 10px 0;
    text-decoration: none;
}

.share-page-agent-links .fah {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 10px;
    flex: 0 1 auto;
    font-size: 1.33333em;
    line-height: .75em;
    vertical-align: -0.0667em;
}

.share-page-agent-links span {
    padding: 0 10px;
    flex: 1 1;
    font-weight: 500;
}
/* ***************************0 */
@media (max-width: 1024px){
    .agent_objects_page_container{
        margin: 0 -16px;
    }

    .mobile-agent_header-top{
        margin: -50px 0 20px 0;
        padding: 0;
        width: 100%;
    }

    .agent_objects_page_main_box, .header-title-top {
        padding: 0 16px !important;
    }

    .mobile-agent_header-top .autor_bottom_padding {
        padding: 16px;
    }

    .mobile-agent_header-top .autor_bottom_top_style img {
        border-radius: 4px;
    }

    .mobile-agent_header-top .autor_bottom_top_style {
        margin: 0;
    }

    .mobile-agent_header-top .share-page-agent-btn{
        width: 36px;
        height: 36px;
        background: var(--fill_secondary_hover_20);
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        display: flex;
    }
}

</style>