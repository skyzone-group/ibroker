<template>
    <div class="new_object_frontend" style="background-color: #f2f4f6;">
        <div class="new_object_main_div container_medium">
            <div class="new_object_main_div_block">
                <header class="block_header d-flex align-items-center">
                    <b class="block_title title">Добавление объявления</b>
                    <span class="text-secondary">Вы можете бесплатно добавить до 2 объявлений в месяц</span>
                </header>
                <div class="block__body">
                    <div class="form">
                        <div class="row">
                            <div class="col-lg-9 col-md-9">
                                <form id="listingEditForm" method="POST" :model="form">
                                    <!-- Тип объявления -->
                                    <div class="form-card" id="section-one">
                                        <ad-type></ad-type>
                                    </div>
                                    <!-- Тип объявления -->
                                    
                                    <!-- Address -->
                                    <div class="form-card" id="section-two">
                                        <div class="address_map">
                                            <div class="header_title">
                                                <div class="header_title_content d-flex flex-column">
                                                    <h4 class="header_title_content_txt mb-0">Адрес</h4>
                                                    <span class="header_title_content_txt_sub">Укажите адрес или передвиньте метку на карте</span>
                                                </div>
                                                <div id="address" class="postion-relative">
                                                    <div class="address_block">
                                                        <div class="address_block_div">
                                                            <div class="address_block_div_item">
                                                                <form-input placeholder="Укажите адрес" v-model="form.address"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Address -->
                                    
                                    <!-- Image upload -->
                                    <div class="form-card" id="section-three">
                                        <upload-image></upload-image>
                                    </div>
                                    <!-- Image upload -->
                                    
                                    <!-- You tube video -->
                                    <div class="form-card">
                                        <div class="address_map">
                                            <div class="header_title">
                                                <div class="header_title_content d-flex flex-column">
                                                    <h4 class="header_title_content_txt mb-0">Видео с YouTube</h4>
                                                    <span class="header_title_content_txt_sub">Добавьте видео вашей недвижимости. Объявления с видео привлекают больше внимания и получают больше звонков</span>
                                                </div>
                                                <div id="address" class="postion-relative">
                                                    <div class="address_block">
                                                        <div class="address_block_div d-flex align-items-center">
                                                            <div class="address_block_div_item w-100">
                                                                <form-input v-model="form.youtube_video" placeholder="Ссылка на видео с YouTube"/>
                                                            </div>
                                                            <div class="youtube_block_div_button ml-lg-2 ml-md-2 ml-0">
                                                                <button class="youtube_block_div_btn">
                                                                    <span class="youtube_block_div-span">Добавить</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- You tube video -->
                                    
                                    <!-- Options -->
                                    <div class="form-card" id="section-four">
                                        <div class="options_main">
                                            <div class="header_title">
                                                <div class="header_title_content">
                                                    <h4 class="header_title_content_txt">Параметры</h4>
                                                </div>
                                                <div class="options_div">
                                                    <!-- Number Of Rooms -->
                                                    <div class="options_main__items">
                                                        <div class="options_main__item  d-flex align-items-lg-end align-items-md-end align-items-start flex-lg-row flex-md-row flex-column">
                                                            <div id="rooms" class="options_main__item_first">
                                                                <div class="options_main__item_first_content">
                                                                    <span class="options_main__item_first_content_title">Количество комнат</span>
                                                                </div>
                                                                <div class="options_main__item_first_btns">
                                                                    <label for="room1" class="option_btn" :class="{'active' : this.form.numberOfRooms == '1'}">
                                                                        <input v-model="form.numberOfRooms" id="room1" type="radio" tabindex="0" value="1">
                                                                        1
                                                                    </label>
                                                                    <label for="room2" class="option_btn" :class="{'active' : this.form.numberOfRooms == '2'}">
                                                                        <input v-model="form.numberOfRooms" id="room2" type="radio" tabindex="0" value="2">
                                                                        2
                                                                    </label>
                                                                    <label for="room3" class="option_btn" :class="{'active' : this.form.numberOfRooms == '3'}">
                                                                        <input v-model="form.numberOfRooms" id="room3" type="radio" tabindex="0" value="3">
                                                                        3
                                                                    </label>
                                                                    <label for="room4" class="option_btn" :class="{'active' : this.form.numberOfRooms == '4'}">
                                                                        <input v-model="form.numberOfRooms" id="room4" type="radio" tabindex="0" value="4">
                                                                        4
                                                                    </label>
                                                                    <label for="room5" class="option_btn" :class="{'active' : this.form.numberOfRooms == '5'}">
                                                                        <input v-model="form.numberOfRooms" id="room5" type="radio" tabindex="0" value="5">
                                                                        5+
                                                                    </label>
                                                                    <label for="roomStudio" class="option_btn" :class="{'active' : this.form.numberOfRooms == 'studio'}">
                                                                        <input v-model="form.numberOfRooms" id="roomStudio" type="radio" tabindex="0" value="studio">
                                                                        студия
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="options_main__item_second option_class_one mb-0 option_class_second">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                        <Checkbox id="apartments" name="apartment" value="Apartments" v-model="form.apartments" />
                                                                        <label for="apartments">Апартаменты</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Number Of Rooms -->
                                                    
                                                    <!-- Area options -->
                                                    <div class="options_main__items mt-4 d-flex">
                                                        <!-- Общая площадь -->
                                                        <div class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                            <span class="inputs_block_title">Общая площадь</span>
                                                            <div class="options_main__items_inputs_block d-flex flex-column">
                                                                <div class="input-medium-6 dc-input-6-1-2">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="space" class="dc-input__input-6-1-2" maxlength="24" placeholder="" tabindex="0" v-model.number="form.totalArea">
                                                                    </div>
                                                                    <div class="dc-input__input-icon-right dc-input__input-icon-right-font">м²</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Общая площадь -->
                                                        
                                                        <!-- Площадь кухни-->
                                                        <div class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                            <span class="inputs_block_title">Площадь кухни</span>
                                                            <div class="options_main__items_inputs_block d-flex flex-column">
                                                                <div class="input-medium-6 dc-input-6-1-2">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="kitchen_area" class="dc-input__input-6-1-2" maxlength="24" placeholder="" tabindex="0" v-model.number="form.kitchenArea">
                                                                    </div>
                                                                    <div class="dc-input__input-icon-right dc-input__input-icon-right-font">м²</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Площадь кухни-->
                                                        
                                                        <!-- Жилая площадь -->
                                                        <div class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                            <span class="inputs_block_title">Жилая площадь</span>
                                                            <div class="options_main__items_inputs_block d-flex flex-column">
                                                                <div class="input-medium-6 dc-input-6-1-2">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="living_space" class="dc-input__input-6-1-2" maxlength="24" placeholder="" tabindex="0" v-model.number="form.livingSpace">
                                                                    </div>
                                                                    <div class="dc-input__input-icon-right dc-input__input-icon-right-font">м²</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Жилая площадь -->
                                                    </div>
                                                    <!-- Area options -->
                                                    
                                                    <!-- Hight options -->
                                                    <div class="options_main__items options_main__items_inputs_media mt-4 d-flex">
                                                        <!-- Этаж -->
                                                        <div class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                            <span class="inputs_block_title">Этаж</span>
                                                            <div class="options_main__items_inputs_block d-flex flex-column">
                                                                <div class="input-medium-6 dc-input-6-1-2">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="floor" class="dc-input__input-6-1-2" maxlength="24" placeholder="" tabindex="0" v-model.number="form.floor">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Этаж -->
                                                        
                                                        <!-- Этажей в доме-->
                                                        <div class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                            <span class="inputs_block_title">Этажей в доме</span>
                                                            <div class="options_main__items_inputs_block d-flex flex-column">
                                                                <div class="input-medium-6 dc-input-6-1-2">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="floor_house" class="dc-input__input-6-1-2" maxlength="24" placeholder="" tabindex="0" v-model.number="form.floorHouse">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Этажей в доме-->
                                                        
                                                        <!-- Высота потолков -->
                                                        <div class="options_main__items_inputs options_main__items_inputs_media d-flex flex-column">
                                                            <span class="inputs_block_title">Высота потолков</span>
                                                            <div class="options_main__items_inputs_block d-flex flex-column">
                                                                <div class="input-medium-6 dc-input-6-1-2">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="ceilingheight" class="dc-input__input-6-1-2" maxlength="24" placeholder="" tabindex="0" v-model.number="form.ceilingHeight">
                                                                    </div>
                                                                    <div class="dc-input__input-icon-right dc-input__input-icon-right-font">м²</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Высота потолков -->
                                                    </div>
                                                    <!-- Hight options -->
                                                    <div>
                                                        <!-- Bathroom -->
                                                        <div class="options_main__items mt-4">
                                                            <div class="options_main__item d-flex align-items-end">
                                                                <div id="rooms" class="options_main__item_first">
                                                                    <div class="options_main__item_first_content">
                                                                        <span class="options_main__item_first_content_title">Санузел</span>
                                                                    </div>
                                                                    <div class="options_main__item_first_btns">
                                                                        <label for="combined" class="option_btn" :class="{'active' : this.form.bathroomType == 'combined'}">
                                                                            <input v-model="form.bathroomType" id="combined" type="radio" tabindex="0" value="combined">
                                                                            Совмещенный
                                                                        </label>
                                                                        <label for="separated" class="option_btn" :class="{'active' : this.form.bathroomType == 'separated'}">
                                                                            <input v-model="form.bathroomType" id="separated" type="radio" tabindex="0" value="separated">
                                                                            Раздельный
                                                                        </label>
                                                                        <label for="moreOne" class="option_btn" :class="{'active' : this.form.bathroomType == 'moreOne'}">
                                                                            <input v-model="form.bathroomType" id="moreOne" type="radio" tabindex="0" value="moreOne">
                                                                            Более одного
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Bathroom -->
                                                        
                                                        <!-- Балкон/Лоджия -->
                                                        <div class="options_main__items mt-4">
                                                            <div class="options_main__item d-flex align-items-end">
                                                                <div id="rooms" class="options_main__item_first">
                                                                    <div class="options_main__item_first_content">
                                                                        <span class="options_main__item_first_content_title">Балкон/Лоджия</span>
                                                                    </div>
                                                                    <div class="options_main__item_first_btns">
                                                                        <label for="balcon1" class="option_btn" :class="{'active' : this.form.numberBalcons == '1'}">
                                                                            <input v-model="form.numberBalcons" id="balcon1" type="radio" tabindex="0" value="1">
                                                                            1
                                                                        </label>
                                                                        <label for="balcon2" class="option_btn" :class="{'active' : this.form.numberBalcons == '2'}">
                                                                            <input v-model="form.numberBalcons" id="balcon2" type="radio" tabindex="0" value="2">
                                                                            2
                                                                        </label>
                                                                        <label for="balcon3" class="option_btn" :class="{'active' : this.form.numberBalcons == '3'}">
                                                                            <input v-model="form.numberBalcons" id="balcon3" type="radio" tabindex="0" value="3">
                                                                            3+
                                                                        </label>
                                                                        <label for="nobalcons" class="option_btn" :class="{'active' : this.form.numberBalcons == 'nobalcons'}">
                                                                            <input v-model="form.numberBalcons" id="nobalcons" type="radio" tabindex="0" value="nobalcons">
                                                                            Нет
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Балкон/Лоджия -->
                                                        
                                                        <!-- Ремонт -->
                                                        <div class="options_main__items mt-4">
                                                            <div class="options_main__item d-flex align-items-lg-end align-items-md-end align-items-start flex-lg-row flex-md-row flex-column">
                                                                <div id="rooms" class="options_main__item_first">
                                                                    <div class="options_main__item_first_content">
                                                                        <span class="options_main__item_first_content_title">Ремонт</span>
                                                                    </div>
                                                                    <div class="options_main__item_first_btns">
                                                                        <label for="condition1" class="option_btn" :class="{'active' : this.form.houseCondition == 'cosmetic'}">
                                                                            <input v-model="form.houseCondition" id="condition1" type="radio" tabindex="0" value="cosmetic">
                                                                            Косметический
                                                                        </label>
                                                                        <label for="condition2" class="option_btn" :class="{'active' : this.form.houseCondition == 'euro'}">
                                                                            <input v-model="form.houseCondition" id="condition2" type="radio" tabindex="0" value="euro">
                                                                            Евро
                                                                        </label>
                                                                        <label for="condition3" class="option_btn" :class="{'active' : this.form.houseCondition == 'designer'}">
                                                                            <input v-model="form.houseCondition" id="condition3" type="radio" tabindex="0" value="designer">
                                                                            Дизайнерский
                                                                        </label>
                                                                        <label for="condition4" class="option_btn" :class="{'active' : this.form.houseCondition == 'withoutrepair'}">
                                                                            <input v-model="form.houseCondition" id="condition4" type="radio" tabindex="0" value="withoutrepair">
                                                                            Без ремонта
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div class="options_main__item_second option_class_one mb-0 option_class_second">
                                                                    <div class="d-flex align-items-center">
                                                                        <div class="field-checkbox d-flex align-items-center">
                                                                            <Checkbox id="redevelopment" name="redevelopment" value="redevelopment" v-model="form.redevelopment" />
                                                                            <label for="redevelopment">Перепланировка</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Ремонт -->
                                                        
                                                        <!-- Вид из окон -->
                                                        <div class="options_main__items mt-4">
                                                            <div id="view" class="window_view">
                                                                <div class="options_main__item_first_content">
                                                                    <span class="options_main__item_first_content_title">Вид из окон</span>
                                                                </div>
                                                                <div class="window_checbox">
                                                                    <!-- type 1 -->
                                                                    <div class="window_checbox_item">
                                                                        <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                            <div class="">
                                                                                <div class="field-checkbox d-flex align-items-center">
                                                                                    <Checkbox id="type_window_1" name="type_window[]" value="yard" v-model="form.typeWindow" />
                                                                                    <label for="type_window_1">Двор</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- type 1 -->
                                                                    
                                                                    <!-- type 2 -->
                                                                    <div class="window_checbox_item">
                                                                        <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                            <div class="">
                                                                                <div class="field-checkbox d-flex align-items-center">
                                                                                    <Checkbox id="type_window_2" name="type_window[]" value="water" v-model="form.typeWindow" />
                                                                                    <label for="type_window_2">Водоем</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- type 2 -->
                                                                    
                                                                    <!-- type 3 -->
                                                                    <div class="window_checbox_item">
                                                                        <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                            <div class="">
                                                                                <div class="field-checkbox d-flex align-items-center">
                                                                                    <Checkbox id="type_window_3" name="type_window[]" value="street" v-model="form.typeWindow" />
                                                                                    <label for="type_window_3">Улица</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- type 3 -->
                                                                    
                                                                    <!-- type 4 -->
                                                                    <div class="window_checbox_item">
                                                                        <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                            <div class="">
                                                                                <div class="field-checkbox d-flex align-items-center">
                                                                                    <Checkbox id="type_window_4" name="type_window[]" value="park" v-model="form.typeWindow" />
                                                                                    <label for="type_window_4">Парк</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- type 4 -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Вид из окон -->
                                                        
                                                        <!-- Год постройки -->
                                                        <div class="options_main__items mt-4 d-flex">
                                                            <div class="options_main__items_inputs options_main__items_inputs_media  d-flex flex-column">
                                                                <span class="inputs_block_title">Год постройки</span>
                                                                <div class="options_main__items_inputs_block d-flex flex-column">
                                                                    <div class="input-medium-6 dc-input-6-1-2">
                                                                        <div class="dc-input__input-container-6-1-2 input_div">
                                                                            <InputMask class="dc-input__input-6-1-2" mask="9999" v-model="form.yearofBuilding" placeholder="2022" />
                                                                        </div>
                                                                        <div class="dc-input__input-icon-right dc-input__input-icon-right-font">г</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Год постройки -->
                                                        
                                                        <!-- Тип дома -->
                                                        <div class="options_main__items mt-4">
                                                            <div class="options_main__item d-flex align-items-end">
                                                                <div id="rooms" class="options_main__item_first">
                                                                    <div class="options_main__item_first_content">
                                                                        <span class="options_main__item_first_content_title">Тип дома</span>
                                                                    </div>
                                                                    <div class="options_main__item_first_btns">
                                                                        <label for="house_type1" class="option_btn" :class="{'active' : this.form.houseType == 'brick'}">
                                                                            <input v-model="form.houseType" id="house_type1" type="radio" tabindex="0" value="brick">
                                                                            Кирпичный
                                                                        </label>
                                                                        <label for="house_type2" class="option_btn" :class="{'active' : this.form.houseType == 'monolithic'}">
                                                                            <input v-model="form.houseType" id="house_type2" type="radio" tabindex="0" value="monolithic">
                                                                            Монолитный
                                                                        </label>
                                                                        <label for="house_type3" class="option_btn" :class="{'active' : this.form.houseType == 'wood'}">
                                                                            <input v-model="form.houseType" id="house_type3" type="radio" tabindex="0" value="wood">
                                                                            Деревянный
                                                                        </label>
                                                                        <label for="house_type4" class="option_btn" :class="{'active' : this.form.houseType == 'panel'}">
                                                                            <input v-model="form.houseType" id="house_type4" type="radio" tabindex="0" value="panel">
                                                                            Панельный
                                                                        </label>
                                                                        <label for="house_type5" class="option_btn" :class="{'active' : this.form.houseType == 'blocky'}">
                                                                            <input v-model="form.houseType" id="house_type5" type="radio" tabindex="0" value="blocky">
                                                                            Блочный
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Тип дома -->
                                                        
                                                        <!-- Дополнительно -->
                                                        <div id="additional_options" class="mt-5">
                                                            <h2 class="header_title_content_txt">Дополнительно</h2>
                                                            <div class="additional_options_main">
                                                                <div class="row">
                                                                    <!-- Лифт -->
                                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div class="additional_options_main_item adddtional_types_media">
                                                                            <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                <div class="adddtional_main_block">
                                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                                        <Checkbox id="add_option_1" name="options[]" value="elevator" v-model="form.additionalOptions" />
                                                                                        <label for="add_option_1">Лифт</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- Кондиционер -->
                                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div class="additional_options_main_item adddtional_types_media">
                                                                            <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                <div class="adddtional_main_block">
                                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                                        <Checkbox id="add_option_2" name="options[]" value="conditioner" v-model="form.additionalOptions" />
                                                                                        <label for="add_option_2">Кондиционер</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- Интернет -->
                                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div class="additional_options_main_item adddtional_types_media">
                                                                            <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                <div class="adddtional_main_block">
                                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                                        <Checkbox id="add_option_3" name="options[]" value="internet" v-model="form.additionalOptions" />
                                                                                        <label for="add_option_3">Интернет</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- Стиральная машина -->
                                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div class="additional_options_main_item adddtional_types_media">
                                                                            <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                <div class="adddtional_main_block">
                                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                                        <Checkbox id="add_option_4" name="options[]" value="washing_machine" v-model="form.additionalOptions" />
                                                                                        <label for="add_option_4">Стиральная машина</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- Бассейн -->
                                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div class="additional_options_main_item adddtional_types_media">
                                                                            <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                <div class="adddtional_main_block">
                                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                                        <Checkbox id="add_option_5" name="options[]" value="swimming_pool" v-model="form.additionalOptions" />
                                                                                        <label for="add_option_5">Бассейн</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- Сауна -->
                                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div class="additional_options_main_item adddtional_types_media">
                                                                            <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                <div class="adddtional_main_block">
                                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                                        <Checkbox id="add_option_6" name="options[]" value="sauna" v-model="form.additionalOptions" />
                                                                                        <label for="add_option_6">Сауна</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- Мебель -->
                                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div class="additional_options_main_item adddtional_types_media">
                                                                            <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                <div class="adddtional_main_block">
                                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                                        <Checkbox id="add_option_7" name="options[]" value="furniture" v-model="form.additionalOptions" />
                                                                                        <label for="add_option_7">Мебель</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- Микроволновая печь -->
                                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div class="additional_options_main_item adddtional_types_media">
                                                                            <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                <div class="adddtional_main_block">
                                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                                        <Checkbox id="add_option_8" name="options[]" value="microwave" v-model="form.additionalOptions" />
                                                                                        <label for="add_option_8">Микроволновая печь</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- Холодильник -->
                                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div class="additional_options_main_item adddtional_types_media">
                                                                            <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                <div class="adddtional_main_block">
                                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                                        <Checkbox id="add_option_9" name="options[]" value="fridge" v-model="form.additionalOptions" />
                                                                                        <label for="add_option_9">Холодильник</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- Телефонная линия -->
                                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div class="additional_options_main_item adddtional_types_media">
                                                                            <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                <div class="adddtional_main_block">
                                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                                        <Checkbox id="add_option_10" name="options[]" value="telephone" v-model="form.additionalOptions" />
                                                                                        <label for="add_option_10">Телефонная линия</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- Охрана -->
                                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div class="additional_options_main_item adddtional_types_media">
                                                                            <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                <div class="adddtional_main_block">
                                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                                        <Checkbox id="add_option_11" name="options[]" value="security" v-model="form.additionalOptions" />
                                                                                        <label for="add_option_11">Охрана</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- Телевизор -->
                                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                        <div class="additional_options_main_item adddtional_types_media">
                                                                            <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                <div class="adddtional_main_block">
                                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                                        <Checkbox id="add_option_12" name="options[]" value="television" v-model="form.additionalOptions" />
                                                                                        <label for="add_option_12">Телевизор</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Дополнительно -->
                                                        
                                                        <!-- Инфраструктура -->
                                                        <div class="options_main__items  mt-4">
                                                            <div class="infrastructure_main">
                                                                <div id="rooms" class="options_main__item_first">
                                                                    <div class="options_main__item_first_content">
                                                                        <span class="options_main__item_first_content_title">Инфраструктура</span>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                            <div class="additional_options_main_item infrastructure_media">
                                                                                <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                    <div class="infrastructure_main_block">
                                                                                        <div class="field-checkbox d-flex align-items-center">
                                                                                            <Checkbox id="infrastrucure_option_1" name="options[]" value="school" v-model="form.infrastructure" />
                                                                                            <label for="infrastrucure_option_1">Школа</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                            <div class="additional_options_main_item infrastructure_media">
                                                                                <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                    <div class="infrastructure_main_block">
                                                                                        <div class="field-checkbox d-flex align-items-center">
                                                                                            <Checkbox id="infrastrucure_option_2" name="options[]" value="kindergarten" v-model="form.infrastructure" />
                                                                                            <label for="infrastrucure_option_2">Детский сад</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                            <div class="additional_options_main_item infrastructure_media">
                                                                                <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                    <div class="infrastructure_main_block">
                                                                                        <div class="field-checkbox d-flex align-items-center">
                                                                                            <Checkbox id="infrastrucure_option_3" name="options[]" value="shopping-center" v-model="form.infrastructure" />
                                                                                            <label for="infrastrucure_option_3">Торговый центр</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                                            <div class="additional_options_main_item infrastructure_media">
                                                                                <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                                    <div class="infrastructure_main_block">
                                                                                        <div class="field-checkbox d-flex align-items-center">
                                                                                            <Checkbox id="infrastrucure_option_4" name="options[]" value="park" v-model="form.infrastructure" />
                                                                                            <label for="infrastrucure_option_4">Парк</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Инфраструктура -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Options -->
                                    
                                    <!-- Price -->
                                    <div class="form-card" id="section-five">
                                        <div class="price_box_main">
                                            <div class="header_title mb-0">
                                                <div class="header_title_content d-flex flex-column">
                                                    <h4 class="header_title_content_txt mb-4">Цена и условия продажи</h4>
                                                </div>
                                                <div class="price_box_main_input d-flex flex-column">
                                                    <div class="d-flex flex-column">
                                                        <div class="price_box_main_input_flex d-flex align-items-center">
                                                            <div class="price_box_main_input_flex_input">
                                                                <div class="input-medium-6 dc-input-6-1-2 w-100">
                                                                    <div class="dc-input__input-container-6-1-2 input_div">
                                                                        <input id="priceHouse" class="dc-input__input-6-1-2" maxlength="24" placeholder="" tabindex="0" type="number" v-model.number="form.priceHouse">
                                                                    </div>
                                                                    <div class="dc-input__input-icon-right dc-input__input-icon-right-font">$</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="price_box_main_checkbox mt-4">
                                                    <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                        <div class="d-flex align-items-center">
                                                            <div class="field-checkbox d-flex align-items-center">
                                                                <Checkbox id="price_checkbox" name="price_check" value="yes" v-model="form.priceCheckbox" />
                                                                <label for="infrastrucure_option_1">Торг уместен</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Price -->
                                    
                                    <!-- description -->
                                    <div class="form-card" id="section-six">
                                        <div class="description_box_main">
                                            <div class="header_title mb-0">
                                                <div class="header_title_content d-flex flex-column">
                                                    <h4 class="header_title_content_txt mb-4">Описание</h4>
                                                </div>
                                                <div class="description_box_main_text_area">
                                                    <Textarea v-model="form.description" rows="5" cols="100" class="w-100" placeholder="Расскажите о недвижимости, собственниках, соседях, транспортной доступности и инфраструктуре" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- description -->
                                    
                                    <!-- online display -->
                                    <div class="form-card">
                                        <div class="show_house_box_main">
                                            <div class="header_title mb-0">
                                                <div class="header_title_content d-flex flex-column">
                                                    <h4 class="header_title_content_txt mb-0">Готовность к онлайн-показу</h4>
                                                    <span class="header_title_content_txt_sub">Выберите, если готовы показать объект с помощью видео-звонка — например, через WhatsApp, Zoom, Skype или другой сервис. В объявлении появится значок «Онлайн-показ».</span>
                                                </div>
                                                <div class="show_house_box_main_checkbox mt-3 d-flex align-items-center">
                                                    <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                        <div class="d-flex align-items-center">
                                                            <div class="field-checkbox d-flex align-items-center">
                                                                <Checkbox id="show_online" name="show_online" value="yes" v-model="form.showOnline" />
                                                                <label for="show_online">Готов показать объект онлайн</label>
                                                            </div>
                                                            <div class="show_house_box_main_tooltip ml-2 d-flex" v-tooltip="'Покупатель позвонит вам по телефону. Вы договоритесь, через какой сервис провести видео-звонок'">
                                                                <div class="show_house_box_main_tooltip_block position-relative display-inline-flex">
                                                                    <div class="display-inherit">
                                                                        <div class="icon-4-0-1">
                                                                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 15A7 7 0 108 1a7 7 0 000 14zM6.1 4.43c.5-.5 1.18-.74 2.02-.74.74 0 1.37.2 1.84.62.48.42.71 1 .71 1.7a2.3 2.3 0 01-.44 1.44v.01c-.11.12-.44.42-.96.89h-.01a1.41 1.41 0 00-.44.59c-.14.34-.45.7-.89.7-.42 0-.82-.34-.72-.8.04-.18.1-.34.17-.49.09-.17.24-.37.46-.6.21-.24.5-.52.86-.83l.12-.15c.18-.22.26-.45.26-.68 0-.33-.1-.58-.26-.76-.17-.17-.43-.26-.77-.26-.45 0-.73.13-.92.38-.08.1-.14.25-.18.41-.1.38-.4.74-.84.74-.42 0-.8-.35-.72-.8.1-.55.33-1.01.7-1.37zm1.13 6.03a.95.95 0 01.7-.27c.27 0 .52.09.71.27.19.19.3.42.3.7a1 1 0 01-.3.72c-.2.18-.44.27-.71.27a.96.96 0 01-.7-.28.9.9 0 01-.3-.7.9.9 0 01.3-.71z"></path></svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-buttons w-100 d-flex align-items-center mt-3 justify-content-lg-end justify-content-md-end justify-content-center">
                                                <button type="button" class="form-buttons_btn">Сохранить черновик</button>
                                                <button type="submit" class="form-buttons_btn">Разместить объявление</button>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- online display -->
                                </form>
                            </div>
                            <div class="col-lg-3 col-md-3 position-relative d-lg-block d-md-block d-none">
                                <form-indicator></form-indicator>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import FormIndicator from '../../../components/add_new_object/StepFormIndicator.vue'
import Checkbox from 'primevue/checkbox';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';

// Form
import AdType from '../../../components/add_new_object/form/FormAdType.vue'
import FormInput from '../../../components/add_new_object/form/FormInput.vue'
import UploadImage from '../../../components/add_new_object/form/FormImages.vue'
import FormButton from '../../../components/UI/FormButton.vue'

import  '../../../../../public/css/media-one.css'

export default {
    components: {
        FormIndicator,
        AdType,
        FormInput,
        UploadImage,
        FormButton,
        Checkbox,
        InputMask,
        InputNumber,
        Textarea
    },
    data() {
        return {
            form: {
                address: null,
                youtube_video: null,
                numberOfRooms: null,
                apartments:  null,
                totalArea: null,
                kitchenArea: null,
                livingSpace: null,
                floor: null,
                floorHouse: null,
                ceilingHeight: null,
                bathroomType: null,
                numberBalcons: null,
                houseCondition: null,
                redevelopment: null,
                typeWindow: null,
                yearofBuilding: null,
                houseType: null,
                additionalOptions: [],
                infrastructure: [],
                priceHouse: null,
                priceCheckbox: null,
                description: null,
                showOnline: null
            },
            options: []
        }
    },
    methods: {
        additonalOptions(){
            axios.get('/addiotonal/options')
            .then(response => this.options = response.data);
        }
    },
    created() {
        this.additonalOptions();
    },
}
</script>

<style>
.new_object_frontend{
    display: flex;
    overflow: hidden;
    flex: 1 1;
    flex-direction: column;
}

.new_object_main_div {
    margin: 3.2rem auto 0;
}    
.block_header{
    margin-bottom: 1.875rem;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid #cccbca;
}

.block_title{
    display: inline-block;
    margin-right: 1.125rem;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #303549;
}

.text-secondary{
    color: #588ed8!important;
}

.form-card{
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.2rem 0.4rem 0 #00000012;
    padding: 3.2rem;
    width: 100%;
    margin-bottom: 20px;
}

.single_button_select_box_label{
    height: 40px;
    align-items: center;
    background-color: #fff;
    border: 1px solid #d3d4d4;
    box-shadow: none;
    box-sizing: border-box;
    color: #242629;
    cursor: pointer;
    display: flex;
    font: 500 14px/20px;
    justify-content: center;
    letter-spacing: normal;
    margin: 0;
    max-width: 100%;
    min-width: 0;
    outline: none;
    padding: 0 16px;
    position: relative;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
}

.single_button_select_box_label_inpt{
    box-shadow: none;
    box-sizing: border-box;
    height: 0;
    opacity: 0;
    outline: none;
    position: absolute;
    width: 0;
    z-index: -1;
}

.single_button_select_box_label_span{
    color: #242629;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: normal;
    margin: 0;
    overflow: hidden;
    padding: 0;
    text-decoration: none;
    text-indent: 0;
    text-overflow: ellipsis;
    text-shadow: none;
    text-transform: none;
    user-select: none;
    white-space: nowrap;
}



.single_button_select_box_label:first-child {
    border-radius: 5px 0 0 5px;
}

.single_button_select_box_label:not(:last-child) {
    border-right: 0;
}

.single_button_select_box_label:last-child {
    border-radius: 0 5px 5px 0;
}

.single_button_select_box_label.active{
    background-color: var(--form-button-color);
    border-bottom-color: var(--form-button-color);
    border-top-color: var(--form-button-color);
    color: #fff;
}
.single_button_select_box_label_span.active_span{
    color: #fff;
}

.single_button_select_box_label.active:first-child {
    border-left-color: var(--form-button-color);
}
.single_button_select_box_label.active:last-child {
    border-left-color: var(--form-button-color);
}

.youtube_block_div_btn{
    background-color: #242629;
    border-color: transparent;
    height: 40px;
    padding: 0 16px;
    -webkit-appearance: button;
    box-shadow: none;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    position: relative;
    text-align: center;
    border: 1px solid transparent;
    border-radius: 5px;
    color: #fff;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}

.youtube_block_div-span{
    font-size: 14px;
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

/* *****************OPTIONS******************************************** */
.options_main__item_first{
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
    position: relative;
}

.options_main__item_first_content{
    align-items: baseline;
    display: flex;
    margin: 0 0.2rem 0.8rem;
}

.options_main__item_first_content_title{
    font-size: 16px;
    font-weight: 500;
    line-height: 1.9rem;
    text-align: left;
}
.options_main__item_first_btns{
    display: flex;
    flex-wrap: wrap;
    margin: -0.8rem 0 0 -0.8rem;
}
.option_btn{
    background-color: #fff;
    border: 0.1rem solid #c9cbcd;
    border-radius: 0.5rem;
    color: #242629;
    cursor: pointer;
    font-size: 17px;
    height: 3rem;
    margin: 0.8rem 0 0 0.8rem;
    min-width: 3rem;
    outline: none;
    padding: 0 0.8rem;
    transition: border-color .2s ease 0s,background-color .2s ease 0s;
    user-select: none;
    will-change: border-color,background-color;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.option_btn input{
    position: absolute;
    width: 0;
    opacity: 0;
    z-index: -2;
}


.option_btn.active{
    background-color: #53b374;
    border-color: #53b374;
    color: #fff;
}
.option_class_one{
    display: flex;
    margin-left: 1.6rem;
}

.option_class_second{
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    height: 3rem;
    letter-spacing: normal;
}

.options_main__item_second .p-checkbox{
    appearance: none;
    background-color: #fff;
    border: 1px solid #c9cbcd;
    border-radius: 0.5rem;
    color: #242629;
    height: 2rem;
    margin: 0 0.8rem 0 0;
    outline: none;
    transition: border-color .2s ease 0s;
    width: 2rem;
    will-change: border-color;
}

.options_main__item_second .p-checkbox .p-checkbox-box {
    border: none !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 0.5rem !important;
}

.options_main__item_second .p-checkbox .p-checkbox-box.p-highlight {
    background: #53b374;
}

.options_main__item_second .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {
    background: #53b374;
    color: #ffffff;
}

.options_main__item_second .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
    box-shadow: unset;
    border-color: #53b374;
}

.options_main__item_second .field-checkbox label {
    color: #464646;
    margin-bottom: 0;
    padding-left: 0.2rem;
    font-size: 15px;
    font-weight: 500;
}

.options_main__items_inputs{
    margin-bottom: 0;
    max-width: 15.2rem;
    width: 100%;
}

.options_main__items_inputs+.options_main__items_inputs {
margin-left: 2.4rem;
}


.inputs_block_title{
    align-items: center;
    display: flex;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.9rem;
    margin: 0 0.2rem 0.8rem;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.dc-input-6-1-2{
    align-items: center;
    background-color: var(--white_100);
    border: 1px solid var(--dc-color-grey-200);
    border-radius: 5px;
    display: inline-flex;
    justify-content: center;
    position: relative;
    transition: border-color .2s;
    vertical-align: middle;
}
.dc-input-6-1-2:hover{
    border: 1px solid var(--black_100);
}
.input_div{
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
}

.dc-input__input-6-1-2 {
    background-color: initial !important;
    border: 0 !important;
    border-radius: 5px !important;
    box-shadow: none !important;
    box-sizing: border-box !important;
    color: var(--dc-color-afro,#242629) !important;
    font-size: 16px !important;
    height: calc(100% - 2px) !important;
    margin: 1px 0 !important;
    outline: none !important;
    padding: 11px 12px !important;
    text-overflow: ellipsis !important;
    width: 100% !important;
}
.dc-input__input-6-1-2 {
    padding-right: 0;
}

.dc-input__input-6-1-2{
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
}

.dc-input__input-icon-right{
    padding-right: 12px;
    padding-left: 8px;
    align-items: center;
    border: 0;
    box-shadow: none;
    color: #a7a8a9;
    display: flex;
    font-size: 14px;
    font-weight: 500;
    height: 100%;
    justify-content: center;
    line-height: normal;
    transition: .2s;
    white-space: nowrap;
}

.dc-input__input-icon-right-font{
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
}

.window_view{
    color: #242629;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
}

.window_checbox{
    grid-row-gap: 1.6rem;
    display: grid;
    grid-template-columns: repeat(4,13rem);
}

.price_box_main_input_flex_input{
    width: 300px;
}

.description_box_main_text_area .p-inputtext:enabled:hover {
    border-color: var(--black_100);
}

.description_box_main_text_area .p-inputtext:enabled:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: unset !important;
    border-color: var(--black_100);
}

.icon-4-0-1{
    display: inline-block;
    height: 16px;
    line-height: 16px;
    min-height: 16px;
    min-width: 16px;
    overflow: hidden;
    width: 16px;
    color: #a7a8a9;
    cursor: help;
    transition: color .2s;
}

.form-buttons_btn{
    position: relative;
    cursor: pointer;
    border: 1px solid var(--form-button-color);
    border-radius: 4px;
    background-color: transparent;
    padding: 0 16px;
    height: 40px;
    overflow: hidden;
    color: var(--form-button-color);
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    user-select: none;
    text-decoration: none;
}

.form-buttons_btn:nth-child(2){
    margin-left: 10px;
    border-color: var(--form-button-color);
    background-color: var(--form-button-color);
    color: #fff;
}
</style>