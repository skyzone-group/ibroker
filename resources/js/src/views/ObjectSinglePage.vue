<template>
    <div class="object_single_page_frontend">
        <div class="object_single_page_main">
            <div class="container_fluid">
                <div class="object_single_page_main_box">
                    <div class="product-page__content">
                        <div class="product-page__content_top_buttons product-page_btn_style">
                            <div class="product-page__content_top_buttons_item ml-0">
                                <a href="#!" role="button" class="object_single_page_btn_style">
                                    <span class="button-root__icon-8-1-3 button-root__icon--left-8-1-3"><div class="icon-4-0-1"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10.56 3.27a1 1 0 00-1.41-1.42l-5.3 5.3a1 1 0 000 1.41l5.3 5.3a1 1 0 001.41-1.42L6.33 8.2a.5.5 0 010-.71l4.23-4.23z"></path></svg></div></span><span class="button-root__text-8-1-3">В поиск</span>
                                </a>
                            </div>
                            <div class="product-page__content_top_buttons_item d-flex">
                                <div class="product-page__content_top_buttons_item_btn">
                                    <div class="position-relative">
                                        <button type="button" id="favorites-add" class="object_single_page_btn_style">
                                            <span class="button-root__icon-8-1-3 button-root__icon--left-8-1-3"><span class=""><div class="icon-4-0-1"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path clip-rule="evenodd" d="M1 7C.5 3.5 2.7 2 4.8 2 6.82 2 8 4 8 4s1.17-2 3.2-2c2.1 0 4.3 1.5 3.8 5s-5.83 7-7 7-6.5-3.5-7-7z"></path></svg></div></span></span>
                                            <span class="button-root__text-8-1-3">Сохранить</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="product-page__content_top_buttons_item_btn">
                                    <div class="position-relative">
                                        <button type="button" id="favorites-add" class="object_single_page_btn_style dropdown-user-link" data-toggle="dropdown">
                                            <span class="button-root__icon-8-1-3 button-root__icon--left-8-1-3"><div class="icon-4-0-1"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10.54 2.09l4.1 4.13c.2.2.2.51 0 .7L10.52 11a.3.3 0 01-.51-.21V8.5a.3.3 0 00-.3-.3c-4.94.05-6.1 1.26-6.7 2.97a8.1 8.1 0 00-.3 2.61c0 .21-.26.27-.36.09-4.5-9.06 3.43-9.29 7.39-9.3a.3.3 0 00.3-.3V2.3c0-.27.32-.4.5-.21z"></path></svg></div></span>
                                            <span class="button-root__text-8-1-3">Поделиться</span>
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
                                                        <button type="button" class="object_single_page_btn_style w-100">
                                                            <span class="button-root__text-8-1-3">Скопировать ссылку</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-page__content_top_buttons_item_btn">
                                    <div class="position-relative">
                                        <button type="button" id="object-print" class="object_single_page_btn_style">
                                            <span class="button-root__icon-8-1-3 button-root__icon--left-8-1-3 m-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#93989D" d="M13 14v2H3v-2H1.994A1.992 1.992 0 0 1 0 12V6c0-1.105.895-2 1.994-2h12.012C15.107 4 16 4.887 16 6v6c0 1.105-.895 2-1.994 2H13zM3 0h10v3H3V0zm2 11.5c0 .268.22.5.491.5h5.018a.5.5 0 0 0 0-1H5.491a.5.5 0 0 0-.491.5zm0 2c0 .268.22.5.491.5h5.018a.5.5 0 0 0 0-1H5.491a.5.5 0 0 0-.491.5z"></path></svg></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-page__content_mainBox">
                            <div class="product-page__content_flex d-flex flex-column">
                                <div class="product-page__section product-page__section--header">
                                    <div class="main_block__column">
                                        <div class="main_block__stretch">
                                            <div class="main_block__cardTitle">
                                                <h1 id="title" class="h1_style mb-0">Продаётся 2-комнатная квартира, 61 м²</h1>
                                            </div>
                                            <div class="main_block__subline">
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
                                            </div>
                                            <div class="main_block__location">
                                                <div class="main_block__location_block">
                                                    <div class="main_block__location_title">
                                                        <span class="mr-2">
                                                            <a href="#!" class="nameless_style_2">
                                                                Москва
                                                            </a>
                                                            <a href="#!" class="nameless_style_2">
                                                                Беловежская улица
                                                            </a>
                                                            <a href="#!" class="nameless_style_2">
                                                                57
                                                            </a>
                                                        </span>
                                                        <a href="#!" class="product-location__on-map-link" id="product-location__on-map-link">На карте</a>
                                                    </div>
                                                    <div class="transport-points">
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="main_block__price">
                                            <div class="main_block__price_box">
                                                <div class="price">
                                                    <span>12 700 000 ₽</span>
                                                </div>
                                                <div id="square-price" style="color: #737476;">
                                                    208 196 ₽/м²
                                                </div>
                                                <a href="#!" rel="noopener noreferrer" id="calculator-link" target="_blank" class="text-color">В ипотеку от 9,9%</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_block__gallery">
                                        <div id="gallery-widget" class="dc-gallery__root--b20e7">
                                            <galleria></galleria>
                                        </div>
                                    </div>
                                    <div class="main_block__mainDetails">
                                        <ul id="main-details-block" class="d-flex">
                                            <li class="main_block__mainDetails_ul_li">
                                                <div title="61 м²" class="number_area">61 м²</div>
                                                <span style="color: #4b545b99;">Площадь</span>
                                            </li>
                                            <li class="main_block__mainDetails_ul_li desktop">
                                                <div title="38 м²" class="number_area">38 м²</div>
                                                <span style="color: #4b545b99;">Жилая</span>
                                            </li>
                                            <li class="main_block__mainDetails_ul_li desktop">
                                                <div title="10.5 м²" class="number_area">10.5 м²</div>
                                                <span style="color: #4b545b99;">Кухня</span>
                                            </li>
                                            <li class="main_block__mainDetails_ul_li">
                                                <div class="number_area d-flex align-items-center">
                                                    4
                                                    <span style="color: #4b545b99;" class="ml-1">из 14</span>
                                                </div>
                                                <span style="color: #4b545b99;">Этаж</span>
                                            </li>
                                            <li class="main_block__mainDetails_ul_li desktop">
                                                <div class="number_area">2009</div>
                                                <span style="color: #4b545b99;">Год постройки</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="main_block__plans"></div>
                                    <div class="main_block__features" id="features-block">
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
                                    </div>
                                    <h2 class="product-page__title">Описание</h2>
                                    <div class="nameless_style_3" id="description">
                                        Арт. 30753470 Внимание! 2-комнатная квартира 61 кв.м. по улице Беловежская 57 в Московском районе по привлекательной цене! Район с отлично развитой инфраструктурой: школы, детские сады, поликлиники, магазины. Здесь нет промышленных производств, зеленые дворы, пешая доступность общественного транспорта.Квартира на 4 этаже теплая, солнечная. Посмотрите на фото: удобный коридор, комнаты 20 кв.м и 18 кв.м, стандартной планировки кухня 10,5 кв.м. Эта недвижимость отличный вариант в развитом районе - его стоит посмотреть лично. Звоните! Центр недвижимости "Простор-недвижимость" гарантирует подготовку полного пакета документов и юридическое сопровождение сделки.Все сделки агентства застрахованы!
                                    </div>
                                    <div class="product-page__map">
                                        <h2 class="product-page__title">Расположение</h2>
                                        <div>
                                            <div class="offerMap_style" id="offerMap">
                                                <div style="position:relative;overflow:hidden;"><a href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Ташкент</a><a href="https://yandex.uz/maps/105813/tashkent-province/geo/1942699111/?ll=69.290607%2C41.311609&utm_medium=mapframe&utm_source=maps&z=19.68" style="color:#eee;font-size:12px;position:absolute;top:14px;">Улица Чорток — Яндекс Карты</a><iframe src="https://yandex.uz/map-widget/v1/-/CCURm8Q-8A" width="820px" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-page__section">
                                    <div id="Квартира">
                                        <h4 class="_445so" data-testid="Квартира-заголовок">Квартира</h4>
                                        <ul class="product-page__section_ul">
                                            <li class="product-page__section_li">
                                                <span class="product-page__section_li_span-1">Комнат</span>
                                                <span class="product-page__section_li_span-2"></span>
                                                <span class="product-page__section_li_span-3">2</span>
                                            </li>
                                            <li class="product-page__section_li">
                                                <span class="product-page__section_li_span-1">Площадь</span>
                                                <span class="product-page__section_li_span-2"></span>
                                                <span class="product-page__section_li_span-3"><span>61 м<sup>2</sup></span></span>
                                            </li>
                                            <li class="product-page__section_li">
                                                <span class="product-page__section_li_span-1">Жилая</span>
                                                <span class="product-page__section_li_span-2"></span>
                                                <span class="product-page__section_li_span-3"><span>38 м<sup>2</sup></span></span>
                                            </li>
                                            <li class="product-page__section_li">
                                                <span class="product-page__section_li_span-1">Кухня</span>
                                                <span class="product-page__section_li_span-2"></span>
                                                <span class="product-page__section_li_span-3"><span>10,5 м<sup>2</sup></span></span>
                                            </li>
                                            <li class="product-page__section_li">
                                                <span class="product-page__section_li_span-1">Этаж</span>
                                                <span class="product-page__section_li_span-2"></span>
                                                <span class="product-page__section_li_span-3">4</span>
                                            </li>
                                            <li class="product-page__section_li">
                                                <span class="product-page__section_li_span-1">Количество балконов</span>
                                                <span class="product-page__section_li_span-2"></span>
                                                <span class="product-page__section_li_span-3">1</span>
                                            </li>
                                            <li class="product-page__section_li">
                                                <span class="product-page__section_li_span-1">Ремонт</span>
                                                <span class="product-page__section_li_span-2"></span>
                                                <span class="product-page__section_li_span-3">косметический</span>
                                            </li>
                                            <li class="product-page__section_li">
                                                <span class="product-page__section_li_span-1">Вид из окон</span>
                                                <span class="product-page__section_li_span-2"></span>
                                                <span class="product-page__section_li_span-3">во двор</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="product-page__section">
                                    <div class="product-page__section_third">
                                        <h2 class="_445so">Информация о доме Беловежская улица, 57</h2>
                                        <div class="product-page__section_third_sub">
                                            <div class="transport-points">
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
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <ul class="product-page__section_ul">
                                            <li class="product-page__section_li">
                                                <span class="product-page__section_li_span-1">Год постройки</span>
                                                <span class="product-page__section_li_span-2"></span>
                                                <span class="product-page__section_li_span-3">2009</span>
                                            </li>
                                            <li class="product-page__section_li">
                                                <span class="product-page__section_li_span-1">Серия дома</span>
                                                <span class="product-page__section_li_span-2"></span>
                                                <span class="product-page__section_li_span-3">КОПЭ</span>
                                            </li>
                                            <li class="product-page__section_li">
                                                <span class="product-page__section_li_span-1">Количество этажей</span>
                                                <span class="product-page__section_li_span-2"></span>
                                                <span class="product-page__section_li_span-3">14</span>
                                            </li>
                                            <li class="product-page__section_li">
                                                <span class="product-page__section_li_span-1">Лифт</span>
                                                <span class="product-page__section_li_span-2"></span>
                                                <span class="product-page__section_li_span-3">есть</span>
                                            </li>
                                            <li class="product-page__section_li">
                                                <span class="product-page__section_li_span-1">Материал стен</span>
                                                <span class="product-page__section_li_span-2"></span>
                                                <span class="product-page__section_li_span-3">Панельный</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <a data-test="building-info-link" class="building-info-link" target="_blank" href="#!">Больше информации о доме</a>
                                </div>
                                <div class="product-page__section" id="deal-info-block">
                                    <div id="Сделка">
                                        <h2 class="_445so">Сделка</h2>
                                        <ul class="product-page__section_ul">
                                            <li class="product-page__section_li">
                                                <span class="product-page__section_li_span-1">Тип сделки</span>
                                                <span class="product-page__section_li_span-2"></span>
                                                <span class="product-page__section_li_span-3">свободная продажа</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="subscription__author product-page__section" id="author">
                                    <div class="subscription__author_block">
                                        <a href="#!" class="subscription__author_block_avatar d-flex align-items-center justify-content-center subscription__author_block_avatar_without_img">JT</a>
                                        <div class="subscription__author_block_title">Агентство недвижимости</div>
                                        <div class="subscription__author_block_name d-flex align-items-center mb-1">
                                            <h4 class="subscription__author_name">Ashtons International Realty</h4>
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
                                            <div class="subscription__author_block_actions_block">
                                                <button v-if="showPhoneSecond == false" @click="this.showPhoneSecond = true" type="button" class="button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3-4  button-root--type-button-reset-8-1-3 button-root-8-1-3">
                                                    <span class="button-root__text-8-1-3">Показать телефон</span>
                                                </button>
                                                <a v-if="showPhoneSecond == true" href="tel:+998903592284" class="button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3-4  button-root--type-button-reset-8-1-3 button-root-8-1-3">
                                                    <span class="button-root__text-8-1-3">+99890 359-22-84</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- sidebar -->
                    <div v-if="!Sidebar" class="product-page__sidebar">
                        <div class="product-page__sticky">
                            <aside class="product-page__sidebar_autor autor_box_style">
                                <div class="product-page__sidebar_autor_top autor_box_style-2">
                                    <div class="product-page__sidebar_autor_top_box d-flex align-items-center">
                                        <div class="title">
                                            Object Single Page
                                        </div>
                                        <div class="title_img" style="background: url('https://img.dmclk.ru/s200x200q80/partnerhub/logos/20/a8/7d42b61a-d7d3-440c-8deb-4161ba4616b9.webp')"></div>
                                    </div>
                                </div>
                                <div class="product-page__sidebar_autor_bottom autor_bottom_padding">
                                    <div class="product-page__sidebar_autor_bottom_top margin-bottom-24">
                                        <div class="d-flex">
                                            <div style="background-color: rgb(156, 198, 196);width: 60px;height: 60px;border-radius: 5px;" class="autor_bottom_top_style">TJ</div>
                                            <div class="product-page__sidebar_autor_bottom_content" style="flex: 1;">
                                                <div class="autor_full_name">
                                                    <a href="#!">Javohir Toirov</a>
                                                </div>
                                                <div class="autor_enter_date" style="color: #4b545b99;">
                                                    На iBroker 1 год 1 мес.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-page__sidebar_autor_bottom_button d-flex flex-column">
                                        <button v-if="showPhone == false" @click="this.showPhone = true" type="button" class="button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3 button-root--type-button-reset-8-1-3 button-root-8-1-3">
                                            <span class="button-root__text-8-1-3">Показать телефон</span>
                                        </button>
                                        <a v-if="showPhone == true" href="tel:+998903592284" class="button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3 button-root--type-button-reset-8-1-3 button-root-8-1-3">
                                            <span class="button-root__text-8-1-3">+99890 359-22-84</span>
                                        </a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="mobileContant" class="object_single_page_main_object_phone">
                <div class="object_single_page_main_object_phone_box">
                    <button v-if="!mobileContantPhone" @click="this.mobileContantPhone = true" class="button-root-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3 button-root--type-button-reset-8-1-3 button-root--fluid-8-1-3" type="button" data-e2e-id="sticky-footer-show-phone"><span class="button-root__text-8-1-3">Показать телефон</span></button>
                    <a v-if="mobileContantPhone == true" href="tel:+998903592284" class="button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3 button-root--type-button-reset-8-1-3 button-root-8-1-3">
                        <span class="button-root__text-8-1-3">+99890 359-22-84</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Galleria from '../../components/galleria/Galleria.vue' 
import TestImage from '../../components/galleria/TestImage.vue' 
import ImageTest from '../../components/galleria/ImageTest.vue' 



export default {
    components: {
        Galleria
    },
    data() {
        return {
            showPhone: false,
            showPhoneSecond: false,
            Sidebar: false,
            mobileContant: false,
            mobileContantPhone: false
        }
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 1024){
                this.Sidebar = true;
                this.mobileContant = true;
                return;
            }
            this.Sidebar = false;
            this.mobileContant = false;
            return;
        },
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen()
    },
}
</script>

<style scoped>
.object_single_page_main_box{
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
    padding: 16px 32px 32px;
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
    margin-right: 16px;
}

.autor_full_name{
    display: flex;
    font-weight: 500;
    margin-bottom: 2px;
}

.autor_full_name a{
    color: inherit;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
}

.autor_full_name a:hover{
    color: #53b374;
}
</style>