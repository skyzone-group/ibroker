<template>
    <div class="new_object_frontend">
        <div class="new_object_main_div container_fluid" style="background-color: #f2f4f6;">
            <div class="new_object_main_div_block">
                <header class="block_header d-flex align-items-center">
                    <b class="block_title title">Добавление объявления</b>
                    <span class="text-secondary">Вы можете бесплатно добавить до 2 объявлений в месяц</span>
                </header>
                <div class="block__body">
                    <div class="form">
                        <div class="row">
                            <div class="col-lg-9">
                                <form id="listingEditForm" method="POST" role="form">
                                    <!-- Тип объявления -->
                                    <div class="form-card">
                                        <ad-type></ad-type>
                                    </div>
                                    <!-- Тип объявления -->
                                    
                                    <!-- Address -->
                                    <div class="form-card">
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
                                                                <form-input placeholder="Укажите адрес"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Address -->
                                    
                                    <!-- Image upload -->
                                    <div class="form-card">
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
                                                                <form-input placeholder="Ссылка на видео с YouTube"/>
                                                            </div>
                                                            <div class="youtube_block_div_button ml-2">
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
                                    <div class="form-card">
                                        <div class="options_main">
                                            <div class="header_title">
                                                <div class="header_title_content">
                                                    <h4 class="header_title_content_txt">Параметры</h4>
                                                </div>
                                                <!-- Number Of Rooms -->
                                                <div class="options_main__items">
                                                    <div class="options_main__item d-flex align-items-end">
                                                        <div id="rooms" class="options_main__item_first">
                                                            <div class="options_main__item_first_content">
                                                                <span class="options_main__item_first_content_title">Количество комнат</span>
                                                            </div>
                                                            <div class="options_main__item_first_btns">
                                                                <label for="room1" class="option_btn" :class="{'active' : this.NumberOfRooms == '1'}">
                                                                    <input v-model="NumberOfRooms" id="room1" type="radio" tabindex="0" value="1">
                                                                    1
                                                                </label>
                                                                <label for="room2" class="option_btn" :class="{'active' : this.NumberOfRooms == '2'}">
                                                                    <input v-model="NumberOfRooms" id="room2" type="radio" tabindex="0" value="2">
                                                                    2
                                                                </label>
                                                                <label for="room3" class="option_btn" :class="{'active' : this.NumberOfRooms == '3'}">
                                                                    <input v-model="NumberOfRooms" id="room3" type="radio" tabindex="0" value="3">
                                                                    3
                                                                </label>
                                                                <label for="room4" class="option_btn" :class="{'active' : this.NumberOfRooms == '4'}">
                                                                    <input v-model="NumberOfRooms" id="room4" type="radio" tabindex="0" value="4">
                                                                    4
                                                                </label>
                                                                <label for="room5" class="option_btn" :class="{'active' : this.NumberOfRooms == '5'}">
                                                                    <input v-model="NumberOfRooms" id="room5" type="radio" tabindex="0" value="5">
                                                                    5+
                                                                </label>
                                                                <label for="roomStudio" class="option_btn" :class="{'active' : this.NumberOfRooms == 'studio'}">
                                                                    <input v-model="NumberOfRooms" id="roomStudio" type="radio" tabindex="0" value="studio">
                                                                    студия
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div class="options_main__item_second option_class_one mb-0 option_class_second">
                                                            <div class="d-flex align-items-center">
                                                                <div class="field-checkbox d-flex align-items-center">
                                                                    <Checkbox id="apartments" name="apartment" value="Apartments" v-model="apartments" />
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
                                                    <div class="options_main__items_inputs d-flex flex-column">
                                                        <span class="inputs_block_title">Общая площадь</span>
                                                        <div class="options_main__items_inputs_block d-flex flex-column">
                                                            <div class="input-medium-6 dc-input-6-1-2">
                                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                                    <input id="space" class="dc-input__input-6-1-2" maxlength="24" placeholder="" tabindex="0" v-model.number="totalArea">
                                                                </div>
                                                                <div class="dc-input__input-icon-right dc-input__input-icon-right-font">м²</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Общая площадь -->
                                                    
                                                    <!-- Площадь кухни-->
                                                    <div class="options_main__items_inputs d-flex flex-column">
                                                        <span class="inputs_block_title">Площадь кухни</span>
                                                        <div class="options_main__items_inputs_block d-flex flex-column">
                                                            <div class="input-medium-6 dc-input-6-1-2">
                                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                                    <input id="kitchen_area" class="dc-input__input-6-1-2" maxlength="24" placeholder="" tabindex="0" v-model.number="kitchenArea">
                                                                </div>
                                                                <div class="dc-input__input-icon-right dc-input__input-icon-right-font">м²</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Площадь кухни-->
                                                    
                                                    <!-- Жилая площадь -->
                                                    <div class="options_main__items_inputs d-flex flex-column">
                                                        <span class="inputs_block_title">Жилая площадь</span>
                                                        <div class="options_main__items_inputs_block d-flex flex-column">
                                                            <div class="input-medium-6 dc-input-6-1-2">
                                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                                    <input id="living_space" class="dc-input__input-6-1-2" maxlength="24" placeholder="" tabindex="0" v-model.number="livingSpace">
                                                                </div>
                                                                <div class="dc-input__input-icon-right dc-input__input-icon-right-font">м²</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Жилая площадь -->
                                                </div>
                                                <!-- Area options -->
                                                
                                                <!-- Hight options -->
                                                <div class="options_main__items mt-4 d-flex">
                                                    <!-- Этаж -->
                                                    <div class="options_main__items_inputs d-flex flex-column">
                                                        <span class="inputs_block_title">Этаж</span>
                                                        <div class="options_main__items_inputs_block d-flex flex-column">
                                                            <div class="input-medium-6 dc-input-6-1-2">
                                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                                    <input id="floor" class="dc-input__input-6-1-2" maxlength="24" placeholder="" tabindex="0" v-model.number="floor">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Этаж -->
                                                    
                                                    <!-- Этажей в доме-->
                                                    <div class="options_main__items_inputs d-flex flex-column">
                                                        <span class="inputs_block_title">Этажей в доме</span>
                                                        <div class="options_main__items_inputs_block d-flex flex-column">
                                                            <div class="input-medium-6 dc-input-6-1-2">
                                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                                    <input id="floor_house" class="dc-input__input-6-1-2" maxlength="24" placeholder="" tabindex="0" v-model.number="floorHouse">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Этажей в доме-->
                                                    
                                                    <!-- Высота потолков -->
                                                    <div class="options_main__items_inputs d-flex flex-column">
                                                        <span class="inputs_block_title">Высота потолков</span>
                                                        <div class="options_main__items_inputs_block d-flex flex-column">
                                                            <div class="input-medium-6 dc-input-6-1-2">
                                                                <div class="dc-input__input-container-6-1-2 input_div">
                                                                    <input id="ceilingheight" class="dc-input__input-6-1-2" maxlength="24" placeholder="" tabindex="0" v-model.number="ceilingHeight">
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
                                                                    <span class="options_main__item_first_content_title">Количество комнат</span>
                                                                </div>
                                                                <div class="options_main__item_first_btns">
                                                                    <label for="combined" class="option_btn" :class="{'active' : this.BathroomType == 'combined'}">
                                                                        <input v-model="BathroomType" id="combined" type="radio" tabindex="0" value="combined">
                                                                        Совмещенный
                                                                    </label>
                                                                    <label for="separated" class="option_btn" :class="{'active' : this.BathroomType == 'separated'}">
                                                                        <input v-model="BathroomType" id="separated" type="radio" tabindex="0" value="separated">
                                                                        Раздельный
                                                                    </label>
                                                                    <label for="moreOne" class="option_btn" :class="{'active' : this.BathroomType == 'moreOne'}">
                                                                        <input v-model="BathroomType" id="moreOne" type="radio" tabindex="0" value="moreOne">
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
                                                                    <label for="balcon1" class="option_btn" :class="{'active' : this.NumberBalcons == '1'}">
                                                                        <input v-model="NumberBalcons" id="balcon1" type="radio" tabindex="0" value="1">
                                                                        1
                                                                    </label>
                                                                    <label for="balcon2" class="option_btn" :class="{'active' : this.NumberBalcons == '2'}">
                                                                        <input v-model="NumberBalcons" id="balcon2" type="radio" tabindex="0" value="2">
                                                                        2
                                                                    </label>
                                                                    <label for="balcon3" class="option_btn" :class="{'active' : this.NumberBalcons == '3'}">
                                                                        <input v-model="NumberBalcons" id="balcon3" type="radio" tabindex="0" value="3">
                                                                        3+
                                                                    </label>
                                                                    <label for="nobalcons" class="option_btn" :class="{'active' : this.NumberBalcons == 'nobalcons'}">
                                                                        <input v-model="NumberBalcons" id="nobalcons" type="radio" tabindex="0" value="nobalcons">
                                                                        Нет
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- Балкон/Лоджия -->
                                                    
                                                    <!-- Ремонт -->
                                                    <div class="options_main__items mt-4">
                                                        <div class="options_main__item d-flex align-items-end">
                                                            <div id="rooms" class="options_main__item_first">
                                                                <div class="options_main__item_first_content">
                                                                    <span class="options_main__item_first_content_title">Ремонт</span>
                                                                </div>
                                                                <div class="options_main__item_first_btns">
                                                                    <label for="condition1" class="option_btn" :class="{'active' : this.HouseCondition == 'cosmetic'}">
                                                                        <input v-model="HouseCondition" id="condition1" type="radio" tabindex="0" value="cosmetic">
                                                                        Косметический
                                                                    </label>
                                                                    <label for="condition2" class="option_btn" :class="{'active' : this.HouseCondition == 'euro'}">
                                                                        <input v-model="HouseCondition" id="condition2" type="radio" tabindex="0" value="euro">
                                                                        Евро
                                                                    </label>
                                                                    <label for="condition3" class="option_btn" :class="{'active' : this.HouseCondition == 'designer'}">
                                                                        <input v-model="HouseCondition" id="condition3" type="radio" tabindex="0" value="designer">
                                                                        Дизайнерский
                                                                    </label>
                                                                    <label for="condition4" class="option_btn" :class="{'active' : this.HouseCondition == 'withoutrepair'}">
                                                                        <input v-model="HouseCondition" id="condition4" type="radio" tabindex="0" value="withoutrepair">
                                                                        Без ремонта
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="options_main__item_second option_class_one mb-0 option_class_second">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="field-checkbox d-flex align-items-center">
                                                                        <Checkbox id="redevelopment" name="redevelopment" value="redevelopment" v-model="redevelopment" />
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
                                                                        <div class="d-flex align-items-center">
                                                                            <div class="field-checkbox d-flex align-items-center">
                                                                                <Checkbox id="type_window_1" name="type_window[]" value="yard" v-model="TypeWindow" />
                                                                                <label for="type_window_1">Двор</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!-- type 1 -->
                                                                
                                                                <!-- type 2 -->
                                                                <div class="window_checbox_item">
                                                                    <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                        <div class="d-flex align-items-center">
                                                                            <div class="field-checkbox d-flex align-items-center">
                                                                                <Checkbox id="type_window_2" name="type_window[]" value="water" v-model="TypeWindow" />
                                                                                <label for="type_window_2">Водоем</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!-- type 2 -->
                                                                
                                                                <!-- type 3 -->
                                                                <div class="window_checbox_item">
                                                                    <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                        <div class="d-flex align-items-center">
                                                                            <div class="field-checkbox d-flex align-items-center">
                                                                                <Checkbox id="type_window_3" name="type_window[]" value="street" v-model="TypeWindow" />
                                                                                <label for="type_window_3">Улица</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!-- type 3 -->
                                                                
                                                                <!-- type 4 -->
                                                                <div class="window_checbox_item">
                                                                    <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                                                        <div class="d-flex align-items-center">
                                                                            <div class="field-checkbox d-flex align-items-center">
                                                                                <Checkbox id="type_window_4" name="type_window[]" value="park" v-model="TypeWindow" />
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Options -->
                                </form>
                            </div>
                            <div class="col-lg-3">
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

// Form
import AdType from '../../../components/add_new_object/form/FormAdType.vue'
import FormInput from '../../../components/add_new_object/form/FormInput.vue'
import UploadImage from '../../../components/add_new_object/form/FormImages.vue'
import FormButton from '../../../components/UI/FormButton.vue'
export default {
    components: {
        FormIndicator,
        AdType,
        FormInput,
        UploadImage,
        FormButton,
        Checkbox
    },
    data() {
        return {
            NumberOfRooms: '',
            apartments: null,
            totalArea: null,
            kitchenArea: null,
            livingSpace: null,
            floor: null,
            floorHouse: null,
            ceilingHeight: null,
            BathroomType: null,
            NumberBalcons: null,
            HouseCondition: null,
            redevelopment: null,
            TypeWindow: null
        }
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
    border: 0.1rem solid #c9cbcd;
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
    background-color: initial;
    border: 0;
    border-radius: 5px;
    box-shadow: none;
    box-sizing: border-box;
    color: var(--dc-color-afro,#242629);
    font-size: 16px;
    height: calc(100% - 2px);
    margin: 1px 0;
    outline: none;
    padding: 11px 12px;
    text-overflow: ellipsis;
    width: 100%;
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
    grid-template-columns: repeat(3,22rem);
}
</style>