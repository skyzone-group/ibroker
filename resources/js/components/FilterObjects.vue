<template>
    <div class="filtersTabs-box">
        <form @submit.prevent="filterData()" method="GET" :model="form">
            <ul class="filtersTabs-ul">
                <input type="hidden" v-model="form.object_deals">
                <li class="filtersTabs-ul-li">
                    <button type="button" @click="active = 0, form.object_deals = 'buy'" class="filtersTabs-ul-li-btn"
                        :class="{'filtersTabs-ul-li-btn-active' : active == 0}">Купить</button>
                </li>
                <li class="filtersTabs-ul-li">
                    <button type="button" @click="active = 1, form.object_deals = 'rent'" class="filtersTabs-ul-li-btn"
                        :class="{ 'filtersTabs-ul-li-btn-active': active == 1 }">Снять</button>
                </li>
                <li class="filtersTabs-ul-li">
                    <button type="button" @click="$router.push({ name: 'newObject' })"  class="filtersTabs-ul-li-btn"
                        :class="{ 'filtersTabs-ul-li-btn-active': active == 2 }">Продать</button>
                </li>
                <li class="filtersTabs-ul-li">
                    <button type="button" @click="$router.push({ name: 'newObject' })" class="filtersTabs-ul-li-btn"
                        :class="{ 'filtersTabs-ul-li-btn-active': active == 3 }">Сдать</button>
                </li>
            </ul>
            <div class="filters-view-tab">
                <div class="filters-view-tab-top w-100">
                    <ul class="filters-view-tab-top-ul">
                        <li v-for="object in objectTypes" :key="object.id" class="filters-view-tab-top-ul-li">
                            <label :for="`house_type_${object.id}`" class="single_button_select_box_label w-100" :class="{'active' : form.object_type == object.id}" style="border-radius: none !important;">
                                <input v-model="form.object_type" :id="`house_type_${object.id}`" type="radio" class="single_button_select_box_label_inpt" tabindex="0" :value="object.id">
                                <span class="single_button_select_box_label_span" :class="{'active_span' : form.object_type == object.id}">{{object.name_ru}}</span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="filters-view-tab-bottom w-100 pt-4">
                    <div class="row ml-0 mr-0">
                        <div class="col-3 pl-0">
                            <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                <span class="inputs_block_title">
                                    Регион
                                </span>
                                <div class="options_main__items_inputs_block d-flex flex-column">
                                    <Dropdown v-model="form.region_id" @change="getDistricts()"
                                    optionValue="id" :options="regions" optionLabel="name_ru" placeholder="Выберите регион"
                                    panelClass="p-multiselect-panell" name="regionId" :value="form.region_id" />
                                </div>
                            </div>
                        </div>
                        <div class="col-3 pl-0">
                            <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                <span class="inputs_block_title">
                                    Район
                                </span>
                                <div class="options_main__items_inputs_block d-flex flex-column">
                                    <MultiSelect v-model="form.district_id" @change="getQuarters()" :options="districts"
                                    optionLabel="name_ru" optionValue="id" display="chip" placeholder="Выберите район"
                                    :filter="true" panelClass="p-multiselect-panell" />
                                </div>
                            </div>
                        </div>
                        <div class="col-3 pl-0">
                            <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                <span class="inputs_block_title">
                                    Улица
                                </span>
                                <div class="options_main__items_inputs_block d-flex flex-column">
                                    <MultiSelect v-model="form.quarter_id" :options="quarters"
                                    optionLabel="name_ru" optionValue="id" display="chip" placeholder="Выберите район"
                                    :filter="true" panelClass="p-multiselect-panell" />
                                </div>
                            </div>
                        </div>
                        <div v-if="form.object_type == 3" class="col-3 pl-0" :class="{'pr-0' : (form.object_type == 3)}">
                            <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                <span class="inputs_block_title">
                                    Тип недвижимости
                                </span>
                                <div class="options_main__items_inputs_block d-flex flex-column">
                                    <MultiSelect v-model="form.object_types_property_id" :options="objectProperty"
                                    optionLabel="name_ru" optionValue="id" display="chip" placeholder="Выберите"
                                    :filter="true" panelClass="p-multiselect-panell" />
                                </div>
                            </div>
                        </div>
                        <div class="col-3 pl-0" :class="{'pr-0' : (form.object_type != 3)}">
                            <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                <span class="inputs_block_title">
                                    Цена, y.e.
                                </span>
                                <div class="options_main__items_inputs_block d-flex align-items-center justify-content-between">
                                    <div class="input-medium-6 dc-input-6-1-2 h-100 mr-2">
                                        <div class="dc-input__input-container-6-1-2 input_div">
                                            <!-- <input id="room_count" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="От" type="number" tabindex="0" v-model.number="form.price_from" name="room_count"> -->
                                            <VueNumberFormat v-model:value="form.price_from" class="dc-input__input-6-1-2"></VueNumberFormat>
                                        </div>
                                    </div>
                                    <div class="input-medium-6 dc-input-6-1-2 h-100">
                                        <div class="dc-input__input-container-6-1-2 input_div">
                                            <VueNumberFormat v-model:value="form.price_to" class="dc-input__input-6-1-2"></VueNumberFormat>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="form.object_type != 3 && form.object_type != 5" class="col-3 pl-0">
                            <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                <span class="inputs_block_title">
                                    Комнатность
                                </span>
                                <div class="options_main__items_inputs_block d-flex align-items-center justify-content-between">
                                    <div class="input-medium-6 dc-input-6-1-2 h-100 mr-2">
                                        <div class="dc-input__input-container-6-1-2 input_div">
                                            <input id="room_count_1" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="От" type="number" tabindex="0" v-model.number="form.room_count_from" name="roomCountFrom" value=""/>
                                        </div>
                                    </div>
                                    <div class="input-medium-6 dc-input-6-1-2 h-100">
                                        <div class="dc-input__input-container-6-1-2 input_div">
                                            <input id="room_count_2" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="До" type="number" tabindex="0" v-model.number="form.room_count_to" name="roomCountTo" value=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="form.object_type == 1" class="col-3 pl-0">
                            <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                <span class="inputs_block_title">
                                    Этаж
                                </span>
                                <div class="options_main__items_inputs_block d-flex align-items-center justify-content-between">
                                    <div class="input-medium-6 dc-input-6-1-2 h-100 mr-2">
                                        <div class="dc-input__input-container-6-1-2 input_div">
                                            <input id="floor_from" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="От" type="number" tabindex="0" v-model.number="form.floor_from" name="floorFrom"/>
                                        </div>
                                    </div>
                                    <div class="input-medium-6 dc-input-6-1-2 h-100">
                                        <div class="dc-input__input-container-6-1-2 input_div">
                                            <input id="floor_to" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="До" type="number" tabindex="0" v-model.number="form.floor_to" name="floorTo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-3 pl-0">
                            <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                <span class="inputs_block_title">
                                    Этажность
                                </span>
                                <div class="options_main__items_inputs_block d-flex align-items-center justify-content-between">
                                    <div class="input-medium-6 dc-input-6-1-2 h-100 mr-2">
                                        <div class="dc-input__input-container-6-1-2 input_div">
                                            <input id="floor_from" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="От" type="number" tabindex="0" v-model.number="form.floor_count_from" name="floorCountFrom"/>
                                        </div>
                                    </div>
                                    <div class="input-medium-6 dc-input-6-1-2 h-100">
                                        <div class="dc-input__input-container-6-1-2 input_div">
                                            <input id="floor_to" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="До" type="number" tabindex="0" v-model.number="form.floor_count_to" name="floorCountTo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-3 pl-0" :class="{'pr-0' : (form.object_type == 1 || form.object_type == 3)}">
                            <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                <span class="inputs_block_title">
                                    Площадь, м2
                                </span>
                                <div class="options_main__items_inputs_block d-flex align-items-center justify-content-between">
                                    <div class="input-medium-6 dc-input-6-1-2 h-100 mr-2">
                                        <div class="dc-input__input-container-6-1-2 input_div">
                                            <input id="totalAreaTo" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="От" type="number" tabindex="0" v-model.number="form.total_area_from" name="totalAreaTo"/>
                                        </div>
                                    </div>
                                    <div class="input-medium-6 dc-input-6-1-2 h-100">
                                        <div class="dc-input__input-container-6-1-2 input_div">
                                            <input id="totalAreaTo" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="До" type="number" tabindex="0" v-model.number="form.total_area_to" name="totalAreaTo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="form.object_type == 2 || form.object_type == 4 || form.object_type == 5" class="col-3 pl-0 pr-0">
                            <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                <span class="inputs_block_title">
                                    Площадь участка (сот.)
                                </span>
                                <div class="options_main__items_inputs_block d-flex align-items-center justify-content-between">
                                    <div class="input-medium-6 dc-input-6-1-2 h-100 mr-2">
                                        <div class="dc-input__input-container-6-1-2 input_div">
                                            <input id="landAreaFrom" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="От" type="number" tabindex="0" v-model.number="form.land_area_from" name="landAreaFrom"/>
                                        </div>
                                    </div>
                                    <div class="input-medium-6 dc-input-6-1-2 h-100">
                                        <div class="dc-input__input-container-6-1-2 input_div">
                                            <input id="landAreaTo" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="До" type="number" tabindex="0" v-model.number="form.land_area_to" name="landAreaTo"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 pr-0">
                            <div class="filter-block-inputs_content-top-txt_btns">
                                <span class="filter_search_btns">
                                    <!-- <span class="filter_search_btn">
                                        <a href="#!" class="filter_search_btn-link map-link">
                                            Показать на карте
                                        </a>
                                    </span> -->
                                    <span class="filter_search_btn">
                                        <!-- <button @click="urlData" type="submit" class="filter_search_btn-link">
                                            Найти
                                        </button> -->
                                        <Button type="submit" label="Найти" :loading="loading"  class="filter_search_btn-link" />
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';
import { mapGetters } from 'vuex'
export default {
    components: {
        Dropdown,
        MultiSelect,
        Button
    },
    data() {
        return {
            form: {
                object_deals: 'buy',
                object_type: 1,
                room_count: '',
                region_id: null,
                district_id: [],
                quarter_id: [],
                object_types_property_id: [],
                price_from: '',
                price_to: '',
                room_count_from: '',
                room_count_to: '',
                floor_from: '',
                floor_to: '',
                floor_count_from: '',
                floor_count_to: '',
                total_area_from: '',
                total_area_to: '',
                land_area_from: '',
                land_area_to: ''
            },
            active: 0,
            regions: [],
            districts: [],
            quarters: [],
            loading: false,
        }
    },
    created() {
        this.getRegions();
    },
    methods: {
        urlData() {
            if (this.form.object_deals !== "") {
                this.$router.push({
                    name: "SearchObject",
                    query: {
                        object_deals: this.form.object_deals,
                        object_type: this.form.object_type,
                        room_count_from: this.form.room_count_from,
                        room_count_to: this.form.room_count_to,
                        region_id: this.form.region_id,
                        district_id: this.form.district_id,
                        quarter_id: this.form.quarter_id,
                        object_types_property_id: this.form.object_types_property_id,
                        price_from: this.form.price_from,
                        price_to: this.form.price_to,
                        floor_from: this.form.floor_from,
                        floor_to: this.form.floor_to,
                        floor_count_from: this.form.floor_count_from,
                        floor_count_to: this.form.floor_count_to,
                        total_area_from: this.form.total_area_from,
                        total_area_to: this.form.total_area_to,
                        land_area_from: this.form.land_area_from,
                        land_area_to: this.form.land_area_to
                    },
                });
            }
        },
        filterData(){
            // console.log('ok');
            // this.urlData();
            this.loading = true;
            axios.get('/api/object/search', this.form)
            .then(response => {
                console.log(response);
                setTimeout(() => {
                    this.loading = false;
                    this.$router.push({name: "SearchObject", query: this.form});
                },1000);
            })
            .catch(function (error){
                alert(error);
            });
        },
        getRegions() {
            axios.get('/api/allRegions')
            .then(response => {
                this.regions = response.data.result
            });
        },
        getDistricts() {
            let region_id = this.form.region_id;
            axios.get('/api/districts/' + region_id)
            .then(response => {
                this.districts = response.data.result
                this.quarters = []
            });
        },
        getQuarters() {
            let district_id = this.form.district_id;
            axios.get('/api/quarters/' + district_id)
            .then(response => {
                this.quarters = response.data.result
            });
        },
    },
    mounted() {
        this.$store.dispatch('getObjectTypes');
        this.$store.dispatch('getObjectTypesProperty');
    },
    computed: {
        ...mapGetters([
            'objectTypes',
            'objectProperty',
        ]),
    },
}
</script>

<style>
.filter-block-inputs_content{
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 1120px;
}

.filter-block-inputs_content-top{
    position: relative;
    z-index: 5;
}

.filter-block-inputs_content-top-txt{
    margin: 0 auto;
    max-width: 1109px;
}

.filter-block-inputs_content .title{
    margin-bottom: 46px;
    color: #fff;
    font-weight: 700;
    font-size: 38px;
    line-height: 1.21;
    text-shadow: 0 2px 4px rgb(0 0 0 / 50%);
}

.filter-block-inputs_content .p-tabview .p-tabview-nav {
    background: transparent;
}

.filter-block-inputs_content .p-tabview .p-tabview-nav li .p-tabview-nav-link {
    display: block;
    margin-bottom: -8px;
    border-radius: 4px 4px 0 0;
    background-color: rgba(37,37,37,.6);
    padding: 9px 16px 16px;
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.38;
    text-decoration: none;
}

.filter-block-inputs_content .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    background-color: #f1f1f1;
    color: #152242;
    font-weight: 700;
}

.filter-block-inputs_content .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {
    box-shadow: unset;
}

.filter-block-inputs_content .p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link {
    background-color: #f1f1f1;
    color: #152242;
}


.filter-block-inputs_content .p-tabview .p-tabview-panels {
    padding: 0;
}

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

.filter_search_btn{
    position: relative;
    cursor: pointer;
    margin: 0;
}
.filter_search_btn:nth-child(2){
    margin-left: 8px;
}

.filter_search_btn-link{
    display: flex;
    justify-content: center;
    transition: all .2s;
    border: none;
    border-radius: 4px;
    background: #0468ff;
    padding: 0 16px;
    min-width: 112px;
    height: 40px;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    line-height: 40px;
    text-decoration: none;
}

.map-link{
    background: #fff;
    color: #152242;
}

.filtr_block-item{
    position: relative;
    border-right: 1px solid #f4f4f4;
    height: 100%;
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
.item-width-1{
    width: 100%;
    min-width: 140px;
    max-width: 316px;
}

.filtersTabs-ul,
.filters-view-tab-top-ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
}

.filtersTabs-ul-li,
.filters-view-tab-top-ul-li{
    display: flex;
    flex: 1 0 auto;
}
.filters-view-tab-top-ul-li .single_button_select_box_label{
    line-height: 48px;
    margin-bottom: -1px;
    text-align: center;
    min-height: 46px;
    cursor: pointer;
    white-space: nowrap;
    border: none;
    border-radius: none !important;
    border-bottom: 2px solid rgba(214,218,220,.48);
    background-color: #fff;
}

.filters-view-tab-top-ul-li .single_button_select_box_label:hover {
    color: #525252;
    text-decoration: none;
}

.filters-view-tab-top-ul-li:last-child .single_button_select_box_label {
    border-radius: none !important;
}

.filters-view-tab-top-ul-li .single_button_select_box_label.active {
    background-color: unset;
    border-bottom-color: var(--form-button-color);
    border-top-color: unset;
    transition: all .2s ease-in;
}

.filters-view-tab-top-ul-li .single_button_select_box_label_span{
    font-size: 17px;
    color: rgba(0,0,0,.5);
    font-weight: 600;
}

.filters-view-tab-top-ul-li .single_button_select_box_label_span.active_span {
    color: var(--form-button-color);
    pointer-events: none;
    transition: all .2s ease-in;
}

.filtersTabs-ul-li:not(:last-child){
    margin-right: 2px;
}

.filtersTabs-ul-li-btn {
    display: block;
    width: 100%;
    /* margin-bottom: -8px; */
    /* margin-right: 2px; */
    border-radius: 4px;
    background: hsla(0, 0%, 96.5%, .5);
    padding: 10px 15px;
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.38;
    text-decoration: none;
}

.filtersTabs-ul-li-btn-active {
    background-color: #f1f1f1;
    color: #152242;
    font-weight: 700;
}

.filtersTabs-ul-li-btn:hover {
    background-color: #f1f1f1;
    color: #152242;
}

.filters-view-tab{
    border-radius: 4px;
    background-color: #fff;
    padding: 0 15px;
    width: 100%;
    margin-top: 10px;
}

.filters-view-tab-top{
    font-size: 18px;
    padding-top: 1px;
    width: 100%;
    min-height: 46px;
    white-space: nowrap;
    color: rgba(0,0,0,.5);
    border: none;
}

.filters-view-tab-bottom .inputs_block_title {
    font-size: 14px;
    line-height: unset;
    margin: 0;
}

.p-multiselect-panell {
    position: absolute !important;
    z-index: 10 !important;
    margin-top: 8px !important;
    box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%) !important;
    border-radius: 4px !important;
    background-color: #fff !important;
    min-width: 290px !important;
}

.filters-view-tab-bottom-item{
    margin-bottom: 10px;
}

.filters-view-tab-bottom-item .p-inputtext,
.filters-view-tab-bottom-item .p-multiselect .p-multiselect-label{
    border-radius: 4px;
    padding: 10px;
    font-size: 14px;
}

.filters-view-tab-bottom-item .p-dropdown:not(.p-disabled):hover,
.filters-view-tab-bottom-item .p-dropdown:not(.p-disabled).p-focus,
.filters-view-tab-bottom-item .p-multiselect:not(.p-disabled):hover,
.p-multiselect:not(.p-disabled).p-focus .p-multiselect:not(.p-disabled).p-focus{
    border-color: var(--form-button-color) !important;
    box-shadow: unset !important;
}

.filters-view-tab-bottom-item .p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label {
    padding: 6.7px 0.5rem !important;
}

.filters-view-tab-bottom-item .dc-input__input-6-1-2 {
    border-radius: 3px !important;
    color: var(--dc-color-afro,#242629) !important;
    font-size: 14px !important;
    margin: 0 !important;
    padding: 10px !important;
}

.filters-view-tab-bottom-item .dc-input-6-1-2{
    border: 1px solid #ced4da !important;
}

.filters-view-tab-bottom-item .dc-input-6-1-2:hover,
.filters-view-tab-bottom-item .dc-input-6-1-2:focus {
    border: 1px solid var(--form-button-color) !important;
}

.filters-view-tab-bottom-item .input_div{
    display: block !important;
}

.filter-block-inputs_content-top-txt_btns {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-bottom: 10px;
}

.filter_search_btns {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end
}

.filter_search_btn .p-button:enabled:hover{
    background: var(--form-button-color);
    color: #ffffff;
    border-color: unset;
}

.filter_search_btn  .p-button {
    border: unset;
    background: var(--form-button-color);
    font-size: 16px;
    font-weight: 700;
    border-radius: 4px;
}

.filter_search_btn .p-button:enabled:active {
    background: var(--form-button-color);
    color: #ffffff;
    border-color: unset;
}

.filter_search_btn .p-button:focus {
    box-shadow: unset;
}

.filter_search_btn-link {
    display: flex;
    justify-content: center;
    transition: all .2s;
    border: none;
    border-radius: 4px;
    background-color: var(--form-button-color);
    padding: 0 16px;
    min-width: 200px;
    height: 40px;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    line-height: 40px;
    text-decoration: none;
}
</style>