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
                        <div class="col-2 pl-0">
                            <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                <span class="inputs_block_title">
                                    Регион
                                </span>
                                <div class="options_main__items_inputs_block d-flex flex-column">
                                    <Dropdown v-model="form.region_id" @change="getDistricts()" 
                                    :loading="loading[0]"
                                    optionValue="id" :options="regions" optionLabel="name_ru" placeholder="Выберите регион"
                                    panelClass="p-multiselect-panell" name="regionId" :value="form.region_id">
                                        <template v-slot:loader="{ options }">
                                            <div class="flex align-items-center p-2" style="height: 38px" >
                                                <Skeleton :width="options.even ? '60%' : '50%'" height="1rem" />
                                            </div>
                                        </template>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div class="col-3 pl-0">
                            <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                <span class="inputs_block_title">
                                    Район
                                </span>
                                <div class="options_main__items_inputs_block d-flex flex-column">
                                    <MultiSelect v-model="form.district_id" @change="getQuarters()" 
                                    :loading="loading[1]"
                                    :options="districts"
                                    optionLabel="name_ru" 
                                    optionValue="id" 
                                    display="chip" 
                                    placeholder="Выберите район"
                                    :filter="true" panelClass="p-multiselect-panell">
                                        <!-- <template v-slot:loader="{ options }">
                                            <div class="flex align-items-center p-2" style="height: 38px" >
                                                <Skeleton :width="options.even ? '60%' : '50%'" height="1rem" />
                                            </div>
                                        </template> -->
                                        <template #empty>
                                            <div class="flex align-items-center p-2" style="height: 38px" >
                                                No available options
                                            </div>
                                        </template>
                                    </MultiSelect>
                                </div>
                            </div>
                        </div>
                        <div class="col-3 pl-0">
                            <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                <span class="inputs_block_title">
                                    Улица
                                </span>
                                <div class="options_main__items_inputs_block d-flex flex-column">
                                    <MultiSelect v-model="form.quarter_id" 
                                    :loading="loading[2]"
                                    :options="quarters"
                                    optionLabel="name_ru" optionValue="id" display="chip" placeholder="Выберите улица"
                                    :filter="true" panelClass="p-multiselect-panell">
                                        <template #empty>
                                            <div class="flex align-items-center p-2" style="height: 38px" >
                                                No available options
                                            </div>
                                        </template>
                                    </MultiSelect>
                                </div>
                            </div>
                        </div>
                        <div v-if="form.object_type == 3" class="col-2 pl-0">
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
                        <div class="col-2 pl-0">
                            <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                <span class="inputs_block_title">
                                    Цена, y.e.
                                </span>
                                <div class="options_main__items_inputs_block d-flex align-items-center justify-content-between">
                                    <div class="input-medium-6 dc-input-6-1-2 h-100 mr-2">
                                        <div class="dc-input__input-container-6-1-2 input_div">
                                            <InputNumber inputClass="dc-input__input-6-1-2" inputId="price_from" min="0" v-model="form.price_from" placeholder="От" prefix="$"/>
                                        </div>
                                    </div>
                                    <div class="input-medium-6 dc-input-6-1-2 h-100">
                                        <div class="dc-input__input-container-6-1-2 input_div">
                                            <InputNumber inputClass="dc-input__input-6-1-2" inputId="price_to" min="0" v-model="form.price_to" placeholder="До" prefix="$"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="form.object_type != 3 && form.object_type != 5" class="col-2 pl-0">
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
                        <div v-if="form.object_type != 3 && form.object_type != 5" class="col-3 pl-0">
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
                        <div class="pl-0" :class="form.object_type != 5 ? 'col-3' : 'col-2'">
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
                        <div v-if="form.object_type == 2 || form.object_type == 4" class="col-3 pl-0">
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
                        <div class="col-3 pl-0">
                            <div class="filters-view-tab-bottom-item options_main__items_inputs_media d-flex flex-column">
                                <span class="inputs_block_title">
                                    Поиск
                                </span>
                                <div class="input-medium-6 dc-input-6-1-2 h-100">
                                    <div class="dc-input__input-container-6-1-2 input_div">
                                        <input id="keyword" class="dc-input__input-6-1-2" placeholder="Введите район, улицу..." type="text" tabindex="0" v-model.number="form.keyword" name="keyword">
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
                                        <Button type="submit" label="Найти" :loading="loading[3]"  class="filter_search_btn-link" />
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
import Skeleton from 'primevue/skeleton';
import { mapGetters } from 'vuex';
import InputNumber from 'primevue/inputnumber';

export default {
    components: {
        Dropdown,
        MultiSelect,
        Button,
        Skeleton,
        InputNumber
    },
    data() {
        return {
            form: {
                object_deals: 'buy',
                object_type: 1,
                region_id: null,
                district_id: [],
                quarter_id: [],
                object_types_property_id: [],
                price_from: null,
                price_to: null,
                room_count_from: '',
                room_count_to: '',
                floor_from: '',
                floor_to: '',
                floor_count_from: '',
                floor_count_to: '',
                total_area_from: '',
                total_area_to: '',
                land_area_from: '',
                land_area_to: '',
                keyword: ''
            },
            active: 0,
            regions: [],
            districts: [],
            quarters: [],
            objects: [],
            loading: [false,false,false,false],
        }
    },
    created() {
        this.allRegionQuarterDistrict();
    },
    methods: {
        filterData(){
            this.loading[3] = true;
            setTimeout(() => {
                this.loading[3] = false;
                this.$router.push(
                {
                    name: "SearchObject",
                    query: {
                        object_deals: this.form.object_deals,
                        object_type: this.form.object_type,
                        region_id: this.form.region_id,
                        'district_id[]': this.form.district_id.map(e => e),
                        'quarter_id[]' : this.form.quarter_id.map(e => e),
                        'object_types_property_id[]' : this.form.object_types_property_id.map(e => e),
                        price_from: this.form.price_from,
                        price_to: this.form.price_to,
                        room_count_from: this.form.room_count_from,
                        room_count_to: this.form.room_count_to,
                        floor_from: this.form.floor_from,
                        floor_to: this.form.floor_to,
                        floor_count_from: this.form.floor_count_from,
                        floor_count_to: this.form.floor_count_to,
                        total_area_from: this.form.total_area_from,
                        total_area_to: this.form.total_area_to,
                        land_area_from: this.form.land_area_from,
                        land_area_to: this.form.land_area_to,
                        keyword: this.form.keyword,
                    }
                });
            },1000);
        },
        allRegionQuarterDistrict(){
            this.loading[0] = true;
            axios.get('/api/allRegionQuarterDistrict')
            .then(response => {
                this.regions = response.data.result
                this.loading[0] = false;
            })
            .catch(function (error){
                this.loading[0] = false;
            });
        },
        getDistricts() {
            this.loading[1] = true;
            let region_id = this.form.region_id;
            this.form.district_id = [];
            this.form.quarter_id = [];

            this.regions.forEach(region => {
                if(region.id == this.form.region_id){
                    this.districts = region.districts;
                }
            })

            this.loading[1] = false;
        },
        getQuarters() {
            this.loading[2] = true;
            this.form.quarter_id = [];
            this.quarters = [];

            this.regions.forEach(region => {
                if(region.id == this.form.region_id){
                    region.districts.forEach(district => {
                        if(this.form.district_id.includes(district.id)){
                            this.quarters.push(...district.quarters);
                        }
                    })
                }
            })
            this.quarters.sort(function (a, b) {
                return a.name_ru.localeCompare(b.name_ru);
            });
            this.loading[2] = false;
        },
        test(){
            var ids = [1,2,3,4]
            var search = new URLSearchParams(this.form.district_id.map(s=>['id[]',s]))
            var searchString = search.toString()
            console.log(searchString);
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