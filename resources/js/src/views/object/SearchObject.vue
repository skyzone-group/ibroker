<template>
  <div class="search-object-main">
    <div class="search-object-top">
      <div class="container_fluid">
        <div class="search-object-top-box">
          <div class="filter-block-inputs_content">
            <div class="row">Search Object</div>
          </div>
        </div>
      </div>
    </div>
    <div class="search-object-body">
      <div class="container_fluid">
        <div class="search-object-body-box-content">
          <div class="search-object-body-box-content-objects">
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
                    <div class="object-photos-gallery mt-2">
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
                    </div>
                  </div>
                  <div class="object-details">
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
                  <div class="object-price">
                    <div class="object-price-list">
                        <p class="object-price-list-p">22 500 000 ₽</p>
                        <p class="object-price-list-desc">264 705$/м²</p>
                    </div>
                  </div>
                  <div class="object-actions">
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
                                <img src="https://www.prurealtypv.com/wp-content/uploads/2016/05/luxury-real-estate.jpg" class="swiper-lazy"/>
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div> 
                            </swiper-slide>
                            <swiper-slide>
                                <img src="https://kittymason-vip.com/wp-content/uploads/2017/06/DRE-login.jpg" class="swiper-lazy"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img src="https://g.foolcdn.com/editorial/images/530461/big-luxurious-modern-looking-house-with-swimming-pool-mansion-home-jumbo-loan-mortgage.jpg" class="swiper-lazy"/>
                            </swiper-slide>
                            <swiper-slide
                            ><img
                                src="https://www.elysian.com/uploads/news/thumb-most-expensive-villa-with-ultra-luxury-features-in-dubai0.jpg" /></swiper-slide
                            ><swiper-slide
                            ><img
                                src="https://pbs.twimg.com/media/E87n4ydXoAM2SDl.jpg" /></swiper-slide
                            >
                        </swiper>
                    </div>
                    <div class="object-photos-gallery mt-2">
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
                                <img src="https://www.prurealtypv.com/wp-content/uploads/2016/05/luxury-real-estate.jpg" class="swiper-lazy"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img src="https://kittymason-vip.com/wp-content/uploads/2017/06/DRE-login.jpg" class="swiper-lazy"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img src="https://g.foolcdn.com/editorial/images/530461/big-luxurious-modern-looking-house-with-swimming-pool-mansion-home-jumbo-loan-mortgage.jpg" class="swiper-lazy"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img
                                    src="https://www.elysian.com/uploads/news/thumb-most-expensive-villa-with-ultra-luxury-features-in-dubai0.jpg" />
                            </swiper-slide>
                            <swiper-slide>
                                <img rc="https://pbs.twimg.com/media/E87n4ydXoAM2SDl.jpg" />
                            </swiper-slide>
                        </swiper>
                    </div>
                  </div>
                  <div class="object-details">
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
                        <button v-if="3 != open" @click="toggle(3)" class="object-details-item-btn" type="button">
                            <span class="object-details-item-btn-txt">Показать телефон</span>
                        </button>
                        <a v-if="3 === open" href="tel:+998903592284" class="object-details-item-btn">
                            <span class="object-details-item-btn-txt">+99890 359-22-84</span>
                        </a>
                    </div>
                  </div>
                  <div class="object-price">
                    <div class="object-price-list">
                        <p class="object-price-list-p">22 500 000 ₽</p>
                        <p class="object-price-list-desc">264 705$/м²</p>
                    </div>
                  </div>
                  <div class="object-actions">
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
            </div>
          </div>
          <div class="search-object-sidebar">
            <div class="search-object-sidebar-content">
              <div class="search-object-sidebar-box">
                <div class="slider-agents-box">
                    <swiper
                    :style="{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                        }"
                        :pagination="{
                            dynamicBullets: true,
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
    CopyToClipboard,
    Rating
  },
  data() {
    return {
      thumbsSwiper: null,
      index: null,
      open: null,
    }
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    toggle(id) {
        this.open = this.open === id ? null : id
    },
  },
  setup() {
    return {
      modules: [Autoplay,Pagination,Lazy,FreeMode,Navigation,Thumbs],
    };
  }
};
</script>


<style>
.search-object-top {
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(214 218 220) 0px -1px 0px inset;
}

.search-object-top-box,
.search-object-body-box-content {
  padding: 25px 0;
}

/* .search-object-body{
    background-color: #f8f9f9;
} */
.search-object-body-box-content-objects {
  flex: 1;
  min-width: 0;
}

.search-object-body-box-content {
  display: flex;
  margin: 0 auto;
  width: 100%;
}

.search-object-sidebar {
  flex: none;
  margin-left: 20px;
  width: 320px;
}

.search-object-sidebar-content {
  position: -webkit-sticky;
  position: sticky;
  top: 20px;
  width: 100%;
}

.search-object-sidebar-box {
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.2rem 0.4rem 0 #00000012;
  margin-bottom: 1.6rem;
  padding: 1.6rem;
}

.object-item {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 12px 1px #24262914;
  padding: 16px;
}

.object-item+.object-item {
    margin-top: 12px;
}

.object-item:hover{
    box-shadow: 0 0 9px #24262929;
    cursor: pointer;
}

.object-item-block {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  line-height: 20px;
  max-width: 1128px;
}

.object-photos {
  width: 320px;
  display: flex;
  flex-direction: column;
}

.object-photos-thumb{
    border-radius: 5px;
    height: 280px;
    overflow: hidden;
    position: relative;
}

.object-photos-thumb .swiper{
    height: 100%;
    width: 100%;
}

.object-photos-thumb .swiper .swiper-wrapper .swiper-slide img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.object-photos-thumb .swiper .swiper-button-next{
    right: 25px;
}

.object-photos-thumb .swiper .swiper-button-prev{
    left: 25px;
}

.object-photos-thumb .swiper-button-prev,
.object-photos-thumb .swiper-button-next{
    width: 40px !important;
    height: 40px !important;
    color: var(--carousel-button-color, currentColor);
    border-radius: var(--carousel-button-border-radius, 50%);
    background: #fff !important;
    opacity: 0;
}

.object-photos-thumb .swiper:hover{
    cursor: pointer;
}

.object-photos-thumb .swiper:hover .swiper-button-prev, 
.object-photos-thumb .swiper:hover .swiper-button-next{
    opacity: 1;
}

.object-photos-thumb .swiper-button-prev:after,
.object-photos-thumb .swiper-button-next:after{
    font-size: 16px !important;
    font-weight: 700 !important;
}

.object-photos-thumb .swiper-button-prev:hover,
.object-photos-thumb .swiper-button-next:hover{
    outline: none;
    box-shadow: 0 0 0 4px #a78bfa !important;
}

.object-photos-thumb .swiper-pagination-fraction{
    bottom: 8px;
    height: 24px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: auto;
    border-radius: 12px;
    height: 24px;
    line-height: 24px;
    padding: 0 12px;
    background-color: #737476;
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
}

.object-photos-gallery .swiper .swiper-wrapper .swiper-slide{
    background-color: initial;
    cursor: pointer;
    height: 62px;
    overflow: visible;
    width: 100%;
    background-size: cover;
    border-radius: 5px;
    box-shadow: none;
    box-sizing: initial;
    display: inline-block;
    outline: none;
    overflow: hidden;
    position: relative;
}

.object-photos-gallery .swiper .swiper-wrapper .swiper-slide img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
}

/* .object-photos-gallery .swiper .swiper-wrapper .swiper-slide:before{
    border: 2px solid red;
    border-radius: 6px;
    bottom: -2px;
    content: "";
    left: -2px;
    position: absolute;
    right: -2px;
    top: -2px;
    transition: border-color .2s;
}

.object-photos-gallery-wrapper{
    border-radius: 3px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    top: 2px;
    overflow: hidden;
    position: absolute;
    right: 0;
    transition: top .2s,left .2s,right .2s,bottom .2s,border-radius .2s;
} */

.object-details{
    flex-grow: 1;
    margin-left: 16px;
    width: 392px;
    display: flex;
    flex-direction: column;
}
.object-price{
    margin-left: 24px;
    width: 218px;
    display: flex;
    flex-direction: column;
}

.object-actions{
    margin-left: 24px;
    width: 40px;
    display: flex;
    flex-direction: column;
}

.object-details-item{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.object-details-header .title{
    font-size: 22px;
    line-height: 28px;
    font-weight: 600;
    color: #242629;
    cursor: pointer;
    text-decoration: none;
}

.object-details-header a:hover .title{
    color: var(--form-button-color);
}

.object-details-address{
    font-size: 14px;
    color: #242629;
}

.object-details-description{
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    color: #a7a8a9;
    display: block;
    display: -webkit-box;
    font-size: 14px;
    line-height: 20px;
    max-height: 80px;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
}

.object-details-addtional{
    flex-grow: 1;
}

.object-details-author{
    align-items: center;
    display: flex;
}

.object-details-author .author-box{
    line-height: 1;
    margin-right: 10px;
    position: relative;
}

.object-details-author .author-box:after {
    border: 1px solid #2426291f;
    border-radius: 5px;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}

.author-box-pic{
    display: block;
    font-size: 0;
    height: 100%;
}

.author-box-pic-img{
    border-radius: 5px;
    height: 60px;
    object-fit: cover;
    width: 60px;
}

.author-name {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    max-width: 228px;
    color: #242629;
    text-overflow: ellipsis;
}

.object-details-item-btn{
    height: 40px;
    padding: 0 16px;
    background-color: var(--form-button-color);
    border-color: #0000;
    box-shadow: none;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid #0000;
    border-radius: 5px;
    color: #fff;
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: center;
    position: relative;
    text-align: center;
    align-items: center;
}

.object-details-item-btn-txt {
    font-size: 15px;
    color: #fff;
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

.object-price-list-p{
    font-size: 24px;
    line-height: 32px;
    color: var(--form-button-color);
    font-weight: 600;
    margin: 0;
}

.object-price-list-desc{
    color: #737476;
    font-size: 14px;
    line-height: 20px;
    margin: 0;
}

.object-actions-btn{
    border: 1px solid #d3d4d4;
    min-width: 40px;
    width: 40px;
    height: 40px;
    justify-content: center;
    padding: 0;
    transition: border-color .5s;
    background-color: #fff;
    border-radius: 5px;
    color: #fff;
    flex-wrap: nowrap;
    position: relative;
    text-align: center;
}


.object-actions-btn:hover{
    border-color: #0000;
    background-color: #e5e5e5;
}

.object-actions-btn .icon-4-0-1 {
    cursor: pointer;
}

.slider-agents-top .sidebar-title{
    font-size: 21px;
    position: relative;
    margin: 0 0 7px;
    font-weight: 500;
}

.slider-agents-body{
    position: relative;
    width: 100%;
    margin: 15px 0;
}

.slider-agents-body img {
    width: 150px;
    border-radius: 50%;
    margin: auto;
    overflow: hidden;
}
</style>