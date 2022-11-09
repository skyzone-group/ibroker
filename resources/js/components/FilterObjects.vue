<template>
    <div class="filtersTabs-box">
        <form @submit.prevent="filterData()" method="POST" :model="form">
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
                                    panelClass="p-multiselect-panell" />
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
                                            <input id="room_count_1" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="От" type="number" tabindex="0" v-model.number="form.room_count_from" name="roomCountFrom"/>
                                        </div>
                                    </div>
                                    <div class="input-medium-6 dc-input-6-1-2 h-100">
                                        <div class="dc-input__input-container-6-1-2 input_div">
                                            <input id="room_count_2" class="dc-input__input-6-1-2" maxlength="24" pattern="\d*" placeholder="До" type="number" tabindex="0" v-model.number="form.room_count_to" name="roomCountTo"/>
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
                                        <button type="submit" class="filter_search_btn-link">
                                            Найти
                                        </button>
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
import { mapGetters } from 'vuex'
export default {
    components: {
        Dropdown,
        MultiSelect
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
            quarters: []
        }
    },
    created() {
        this.getRegions();
    },
    methods: {
        filterData(){
            console.log(this.form);
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
}

.filters-view-tab-top-ul-li .single_button_select_box_label_span.active_span {
    color: var(--form-button-color);
    font-weight: 600;
    pointer-events: none;
    font-size: 18px;
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