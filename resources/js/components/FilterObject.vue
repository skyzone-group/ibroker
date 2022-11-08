<template>
    <div class="filtersTabs-box">
        <ul class="filtersTabs-ul">
            <li class="filtersTabs-ul-li">
                <button type="button" @click="active = 0" class="filtersTabs-ul-li-btn" :class="{'filtersTabs-ul-li-btn-active' : active == 0}">Купить</button>
            </li>
            <li class="filtersTabs-ul-li">
                <button type="button" @click="active = 1" class="filtersTabs-ul-li-btn" :class="{'filtersTabs-ul-li-btn-active' : active == 1}">Снять</button>
            </li>
            <li class="filtersTabs-ul-li">
                <button type="button" class="filtersTabs-ul-li-btn">Посуточно</button>
            </li>
            <li class="filtersTabs-ul-li">
                <button type="button" class="filtersTabs-ul-li-btn">Подбор риелтора</button>
            </li>
        </ul>
        <div class="filters-view">
            <div class="filters-view-wrapper">
                <div class="filtr_block-item item-width-1">
                    <button type="button" @click="toggle(1)" class="filtr_block-item-btn" :class="{'filtr_block-item-btn-active': 1 == open}">Квартиру в новостройке и вторичке</button>
                    <div class="filtr_block-item-dropdown" v-if="1 === open" @blur="filterDropdown = false">
                        <div class="single_button_select">
                            <div class="single_button_select_box d-flex">
                                <label for="type__account_owner" class="single_button_select_box_label" :class="{'active' : this.form.user_type == '1'}">
                                    <input v-model="form.user_type" id="type__account_owner" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="1">
                                    <span class="single_button_select_box_label_span" :class="{'active_span' : this.form.user_type == '1'}">Жилая</span>
                                </label>
                                <label for="type__account_agent" class="single_button_select_box_label" :class="{'active' : this.form.user_type == '2'}">
                                    <input v-model="form.user_type" id="type__account_agent" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="2">
                                    <span class="single_button_select_box_label_span" :class="{'active_span' : this.form.user_type == '2'}">Коммерческая</span>
                                </label>
                            </div>
                        </div>
                        <ul v-if="form.user_type == 1" class="filtr_block-item-dropdown-ul p-0 m-0">
                            <li>
                                <ul class="filtr_block-item-dropdown-ul-inner p-0 m-0">
                                    <li>
                                        <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                            <div class="adddtional_main_block">
                                                <div class="field-checkbox d-flex align-items-center">
                                                    <Checkbox id="aparentmant_type_1" name="options[]" value="1" v-model="form.aparentmant_type" />
                                                    <label for="aparentmant_type_1">Квартира в новостройке</label>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                            <div class="adddtional_main_block">
                                                <div class="field-checkbox d-flex align-items-center">
                                                    <Checkbox id="aparentmant_type_2" name="options[]" value="2" v-model="form.aparentmant_type" />
                                                    <label for="aparentmant_type_2">Квартира во вторичке</label>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                            <div class="adddtional_main_block">
                                                <div class="field-checkbox d-flex align-items-center">
                                                    <Checkbox id="aparentmant_type_3" name="options[]" value="3" v-model="form.aparentmant_type" />
                                                    <label for="aparentmant_type_3">Комната</label>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul class="filtr_block-item-dropdown-ul-inner p-0 m-0">
                                    <li>
                                        <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                            <div class="adddtional_main_block">
                                                <div class="field-checkbox d-flex align-items-center">
                                                    <Checkbox @click="form.aparentmant_type == []" id="house_type_1" name="options[]" value="4" v-model="form.house_type" />
                                                    <label for="house_type_2">Дом, дача</label>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                            <div class="adddtional_main_block">
                                                <div class="field-checkbox d-flex align-items-center">
                                                    <Checkbox id="house_type_2" name="options[]" value="5" v-model="form.house_type" />
                                                    <label for="house_type_2">Участок</label>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul v-if="form.user_type == 2" class="filtr_block-item-dropdown-ul p-0 m-0">
                            <li>
                                <ul class="filtr_block-item-dropdown-ul-inner p-0 m-0">
                                    <li v-for="item in objectProperty" :key="item.id">
                                        <div class="options_main__item_second option_class_one mb-0 ml-0 option_class_second">
                                            <div class="adddtional_main_block">
                                                <div class="field-checkbox d-flex align-items-center">
                                                    <Checkbox :id="`object_type-property_${item.id}`" name="object_type_property[]" :value="item.id" v-model="form.object_type_property" />
                                                    <label :for="`object_type-property_${item.id}`">{{item.name_ru}}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="filtr_block-item item-width-2">
                    <button type="button" @click="toggle(2)"  class="filtr_block-item-btn" :class="{'filtr_block-item-btn-active': 2 == open}">{{form.room_count.length > 0 ? text : 'Комнат'}}</button>
                    <div class="filtr_block-item-dropdown" v-if="2 === open">
                        <ul class="room_count-list">
                            <li v-for="item in room_count_val" :key="item.id" class="room_count-list_li">
                                <label :for="`room_count_${item.id}`" class="single_button_select_box_label" :class="{'active' : item.isActive}">
                                    <Checkbox :id="`room_count_${item.id}`" name="room_count[]" :value="item.id" v-model="form.room_count" class="single_button_select_box_label_inpt d-none" @click="isChecked(item)" @change="getName(item.id)"/>
                                    <span class="single_button_select_box_label_span" :class="{'active_span' : item.isActive}">{{item.id}}</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="filtr_block-item item-width-2">
                    <button type="button"  @click="toggle(3)"  class="filtr_block-item-btn" :class="{'filtr_block-item-btn-active': 3 == open}">{{(form.from_price != '' && form.to_price != '') ? (`${form.from_price} - ${form.to_price}`) : form.from_price != '' ? `от ${form.from_price}` : form.to_price != '' ? `до ${form.to_price}` : 'Цена'}}</button>
                    <div class="filtr_block-item-dropdown" v-if="3 === open">
                        <div class="filtr_block-item-dropdown-wrapper">
                            <div class="filtr_block-item-dropdown-wrapper-item">
                                <div class="filtr_block-item-dropdown-wrapper-item-children">
                                    <input placeholder="от" type="number" class="_025a50318d--input--cptMO" v-model="form.from_price"/>
                                </div>
                            </div>
                            <div class="filtr_block-item-dropdown-wrapper-item">
                                <div class="filtr_block-item-dropdown-wrapper-item-children">
                                    <input placeholder="до" type="number" class="_025a50318d--input--cptMO" v-model="form.to_price"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="filtr_block-item item-width-2">
                    <Dropdown @click="open = null" v-model="form.region_id" @change="getDistricts()" optionValue="id" :options="regions" optionLabel="name_ru" placeholder="Выберите регион" panelClass="p-multiselect-panell" />
                </div>
                <div class="filtr_block-item item-width-2">
                    <MultiSelect v-model="form.district_id" @change="getQuarters()" :options="districts" optionLabel="name_ru" optionValue="id" display="chip" placeholder="Выберите район" :filter="true"
                    panelClass="p-multiselect-panell"/>
                </div>
                <div class="filtr_block-item" style="flex: 1 0;">
                    <MultiSelect v-model="form.quarter_id" :options="quarters" optionLabel="name_ru" optionValue="id" display="chip" placeholder="Выбирать улица" :filter="true"
                    panelClass="p-multiselect-panell"/>
                </div>
            </div>
        </div>
        <div class="filter-block-inputs_content-top-txt_btns">
            <span class="filter_search_btns">
                <!-- <span class="filter_search_btn">
                    <a href="#!" class="filter_search_btn-link map-link">
                        Показать на карте
                    </a>
                </span> -->
                <span class="filter_search_btn">
                    <button type="submit" @click.prevent="getData" class="filter_search_btn-link">
                        Найти
                    </button>
                </span>
            </span>
    </div>
    </div>
</template>

<script>
import Checkbox from 'primevue/checkbox';
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';

// @blur="closeDropdown" tabindex="0" ref="dropdown"
export default {
    components: {
        Checkbox,
        MultiSelect,
        Dropdown
    },
    data() {
        return {
            form: {
                user_type: 1,
                aparentmant_type: [],
                house_type: [],
                object_type_property: [],
                room_count: [],
                from_price: "",
                to_price: "",
                region_id: "",
                district_id: [],
                quarter_id: [],
            },
            room_count_val: [
                {id: 1, name:"1-комнатную", isActive: false},
                {id: 2, name:"1, 2 комн.", isActive: false},
                {id: 3, name:"1 - 3 комн.", isActive: false},
                {id: 4, name:"1 - 4 комн.", isActive: false},
                {id: 5, name:"1 - 5+ комн.", isActive: false},
            ],
            search: '',
            filterDropdown: [false, false, false],
            active: 0,
            dropdown: null,
            text: "",
            objectProperty: [],
            regions: [],
            districts: [],
            quarters: [],
            open: null,
            countries: [
                {name: 'Australia', code: 'AU'},
                {name: 'Brazil', code: 'BR'},
                {name: 'China', code: 'CN'},
                {name: 'Egypt', code: 'EG'},
                {name: 'France', code: 'FR'},
                {name: 'Germany', code: 'DE'},
                {name: 'India', code: 'IN'},
                {name: 'Japan', code: 'JP'},
                {name: 'Spain', code: 'ES'},
                {name: 'United States', code: 'US'}
            ],
        }
    },
    computed: {
        anotherArrayName() {
            return this.form.district_id.map(item => item.id)
        },
        filteredList() {
            return this.districts.filter(post => {
                return post.name_ru.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods: {
        isInclude(id) {
            return this.form.district_id.find(item => item === id);
        },
        getObjectTypesProperty(){
            axios.get('/api/objectProperty')
            .then(response => {
                this.objectProperty = response.data.result
            });
        },
        isChecked(genre){
            genre.isActive = !genre.isActive;
        },
        getName(id){
            this.room_count_val.map(item => {
                if(item.id == id){
                    this.text = item.name;
                    
                }
            })
        },
        getRegions(){
            axios.get('/api/allRegions')
            .then(response => {
                this.regions = response.data.result
            });
        },
        getDistricts(){
            let region_id = this.form.region_id;
            axios.get('/api/districts/' + region_id)
            .then(response => {
                this.districts = response.data.result
                this.quarters = []
            });
        },
        getQuarters(){
            let district_id = this.form.district_id;
            axios.get('/api/quarters/' + district_id)
            .then(response => {
                this.quarters = response.data.result
            });
        },
        toggle(id) {
            this.open = this.open === id ? null : id
        },
        closeDropdown(){
            this.open = null;
        },
    },
    async created() {
        this.getRegions();
        this.getObjectTypesProperty();
    },
    setup() {
        
    },
}
</script>


<style>
.p-multiselect-panell{
    position: absolute !important;
    z-index: 10 !important;
    margin-top: 8px !important;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%) !important;
    border-radius: 4px !important;
    background-color: #fff !important;
    min-width: 290px !important;
}

.filtr_block-item .p-multiselect{
    border-top-right-radius: 8px !important;
    border-bottom-right-radius: 8px !important;
}

.filtr_block-item  .p-multiselect{
    border: unset !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100% !important;
    height: 100% !important;
}

.filtr_block-item .p-dropdown {
    background: #ffffff;
    border: unset !important;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
    border-radius: unset !important;
    display: flex !important;
    justify-content: space-between !important;
}

.filtr_block-item .p-multiselect .p-multiselect-label,
.filtr_block-item .p-dropdown .p-dropdown-label{
    cursor: pointer;
    border: none;
    background: none;
    padding: 20px 0 20px 10px !important;
    width: 100%;
    overflow: hidden !important;
    color: #121212 !important;
    font-size: 14px !important;
    line-height: 1.43;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap !important;
    display: block !important;
}

.filtr_block-item .pi {
    font-size: 13px !important;
    color: #c9c9c9 !important;
}

.filtr_block-item .p-multiselect-token-icon  .pi {
    color: #fff !important;
}

.filtersTabs-ul{
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
}

.filtersTabs-ul-li-btn{
    display: block;
    margin-bottom: -8px;
    margin-right: 2px;
    border-radius: 4px 4px 0 0;
    background: hsla(0,0%,96.5%,.5);
    padding: 9px 16px 16px;
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.38;
    text-decoration: none;
}

.filtersTabs-ul-li-btn-active{
    background-color: #f1f1f1;
    color: #152242;
    font-weight: 700;
}

.filtersTabs-ul-li-btn:hover {
    background-color: #f1f1f1;
    color: #152242;
}

.filters-view{
    display: flex;
    position: relative;
    margin: 0 auto;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);
    border-radius: 8px;
    background-color: #fff;
    max-width: 1109px;
    height: 60px;
}

.filters-view-wrapper{
    display: flex;
    width: 100%;
}

.filtr_block-item{
    position: relative;
    border-right: 1px solid #f4f4f4;
    height: 100%;
}

.filtr_block-item:last-of-type {
    border-right: none;
}

.filtr_block-item:first-of-type .filtr_block-item-btn {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.filtr_block-item-btn {
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
    text-overflow: ellipsis;
    white-space: nowrap;
}

.filtr_block-item-btn:after {
    display: block;
    position: absolute;
    top: 50%;
    right: 16px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
    transition: transform .3s,-webkit-transform .3s,-moz-transform .3s;
    border-right: 2px solid #c9c9c9;
    border-bottom: 2px solid #c9c9c9;
    width: 8px;
    height: 8px;
    content: "";
}

.filtr_block-item-btn.filtr_block-item-btn-active,
.filtr_block-item-btn:hover,
.filtr_block-item-btn:focus{
    outline: none;
    background: #e9f3fb;
}

.filtr_block-item-btn.filtr_block-item-btn-active:after {
    transform: translateY(-10%) rotate(225deg) !important;
}

.filtr_block-item-dropdown{
    position: absolute;
    left: 0;
    z-index: 10;
    margin-top: 8px;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);
    border-radius: 4px;
    background-color: #fff;
    padding: 16px;
    min-width: 290px;
}

.filtr_block-item-dropdown .single_button_select{
    margin-bottom: 16px;
}
.filtr_block-item-dropdown .single_button_select .single_button_select_box_label{
    height: 30px;
}

.filtr_block-item-dropdown-ul>li{
    border-top: 1px solid #e4e4e4;
    padding: 12px 0;
    list-style: none;
}

.filtr_block-item-dropdown-ul>li:first-child {
    border-top: none;
    padding-top: 0;
}


.filtr_block-item-dropdown-ul-inner>li {
    padding: 4px 0;
    list-style: none;
}

.filtr_block-item-dropdown-ul-inner>li:first-child {
    padding-top: 0;
}

.filtr_block-item-dropdown-ul-inner li>label{
    color: #464646;
    margin-bottom: 0;
    padding-left: 0 !important;
    width: 100%;
}

.filtr_block-item-dropdown-ul-inner li .option_class_second {
    height: unset;
}

.filtr_block-item-dropdown-ul-inner li .options_main__item_second .p-checkbox{
    border-radius: 4px;
    height: 20px;
    width: 20px;
}

.filtr_block-item-dropdown-ul-inner li .options_main__item_second .p-checkbox .p-checkbox-box {
    border-radius: 4px !important;
}

.filtr_block-item-dropdown-ul-inner li .p-checkbox .p-checkbox-box .p-checkbox-icon,
.p-checkbox .p-checkbox-box .p-checkbox-icon{
    font-size: 10px !important;
    color: #fff !important;
}

.room_count-list{
    display: flex;
    justify-content: space-between;
    padding: 0;
}

.room_count-list_li .single_button_select_box_label{
    cursor: pointer;
    border: 1px solid #f4f4f4;
    border-radius: 4px !important;
    background: none;
    width: 40px;
    height: 40px;
    color: #121212;
    font-size: 16px;
    text-align: center;
    padding: 0 !important;
}

.room_count-list_li .single_button_select_box_label:hover{
    outline: none;
    border: 1px solid #7a7a7a;
}

.room_count-list_li .single_button_select_box_label.active{
    border-color: var(--form-button-color) !important;
}

.filtr_block-item-dropdown-wrapper{
    display: flex;
    position: relative;
    flex-wrap: nowrap;
}

.filtr_block-item-dropdown-wrapper-item{
    height: 28px;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    position: relative;
    flex-direction: row-reverse;
    align-items: center;
    transition: color .3s,border-color .3s,background-color .3s;
    outline: none;
    border-color: #ced1d7;
    border-radius: 4px;
    background-color: #fff;
    max-width: 100%;
    flex: 1 1 auto;
    border-width: 1px;
    border-style: solid;
}

.filtr_block-item-dropdown-wrapper-item+.filtr_block-item-dropdown-wrapper-item {
    margin-left: 8px;
}

.filtr_block-item-dropdown-wrapper-item-children:first-child {
    padding: 0 8px;
}

.filtr_block-item-dropdown-wrapper-item-children {
    order: 2;
    width: 100%;
    overflow: hidden;
}

._025a50318d--input--cptMO{
    display: block;
    outline: none;
    border: none;
    background: transparent;
    padding: 0;
    width: 100%;
    font-size: inherit;
    line-height: inherit;
}

.address-ul-li{
    padding: 5px 7px;
    border-radius: 4px;
    font-size: 15px;
}
.address-ul-li:hover{
    background: hsla(0,0%,96.5%,.5);
    cursor: pointer;
}
.address-ul-li.region-active:hover{
    background: #53b374;
    cursor: pointer;
}

.address-ul-li:not(:last-child){
    padding-bottom: 10px;
}

.district_input-checkox input[type=checkbox] + .district_input-checkox-label {
    display: block;
    /* margin: 0.2em; */
    cursor: pointer;
    /* padding: 0.2em; */
}

.district_input-checkox input[type=checkbox] {
    display: none;
}

.district_input-checkox input[type=checkbox] + .district_input-checkox-label:before {
    font-family: 'primeicons';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    /* line-height: 1; */
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    content: "\e909";
    font-size: 10px !important;
    border: 2px solid #ced4da;
    border-radius: 4px;
    height: 20px;
    width: 20px;
    padding-left: 3.4px;
    padding-bottom: 0.3em;
    margin-right: 0.8rem;
    vertical-align: bottom;
    color: transparent;
    transition: .2s;
}

.district_input-checkox input[type=checkbox] + .district_input-checkox-label:active:before {
    transform: scale(0);
}

.district_input-checkox input[type=checkbox]:checked + .district_input-checkox-label:before {
    background-color: #53b374;
    border-color: #53b374;
    color: #fff;
}

.address-filter input{
    width: 100%;
    padding: 5px;
    font-size: 14px;
    border-bottom: 1px solid #D9D9D9;
}
.address-filter input:focus-visible{
    outline: none;
}

.item-width-1{
    width: 100%;
    min-width: 140px;
    max-width: 316px;
}

.item-width-2{
    flex: 0 0 156px;
    max-width: 156px;
}

.region-active{
    background-color: var(--form-button-color);
    color: #fff;
}

/* ************************* */
.filter-block-inputs_content-top-txt_btns{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.filter_search_btns{
    display: flex;
    flex-grow: 1;
    justify-content: flex-end
}

.filter_search_btn-link{
    display: flex;
    justify-content: center;
    transition: all .2s;
    border: none;
    border-radius: 4px;
    background-color: var(--form-button-color);
    padding: 0 16px;
    min-width: 150px;
    height: 40px;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    line-height: 40px;
    text-decoration: none;
}
</style>