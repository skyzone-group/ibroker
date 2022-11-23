<template>
    <div id="__layout">
        <div class="mobile-filter-body">
            <div class="mobile-filter-content">
                <form :model="form" method="GET">
                    <div class="page__container">
                        <!-- Regions start -->
                        <div class="mobile-filter-region">
                            <div role="button" @click="openRegion('bottom')">
                                <div class="field__container">
                                    <div class="field__set">
                                        <div class="field__control">
                                            <span v-if="form.region_id != null" style="vertical-align: unset;" class="d-flex">
                                                <div v-for="item in regions" :key="item.id" class="mr-1">
                                                    <span v-if="isIncludeRegion(item.id)" style="vertical-align: unset;">
                                                        {{item.name_ru}}
                                                    </span>
                                                </div>
                                            </span>
                                            <span v-else style="vertical-align: unset;">Выберите регион</span>
                                        </div>
                                    </div>
                                    <div class="field__glypth">
                                        <span class="field__iconaction">
                                            <i class="fas fa-chevron-down"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Dialog v-model:visible="regionModal" :position="position" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}" class="address_modal" contentClass="address-modal">
                                <template #header>
                                    <h5>Выберите регион для поиска</h5>
                                </template>
                                <div class="field__items">
                                    <div v-for="item in regions" :key="item.id" class="field__item">
                                        <RadioButton @change="getDistricts()" @click="regionModal = !regionModal" :inputId="`object_type_${item.id}`" name="city" :value="item.id" v-model="form.region_id" />
                                        <label :for="`object_type_${item.id}`">{{item.name_ru}}</label>
                                    </div>
                                </div>
                                <template #footer>
                                    <Button label="Отмена" @click="regionModal = !regionModal" />
                                </template>
                            </Dialog>
                        </div>
                        <!-- Regions end -->

                        <!-- Districts start -->
                        <div class="mobile-filter-region">
                            <div role="button" @click="openDistrict('bottom')">
                                <div class="field__container">
                                    <div class="field__set">
                                        <div class="field__control">
                                            <span v-if="form.district_id.length >= 3" style="vertical-align: unset;">
                                                {{form.district_id.length}} Выбрано
                                            </span>
                                            <span v-else-if="form.district_id.length > 0 || form.district_id.length >= 2" style="vertical-align: unset;" class="d-flex">
                                                <div v-for="item in districts" :key="item.id" class="mr-1">
                                                    <span v-if="isInclude(item.id)" style="vertical-align: unset;">
                                                        {{item.name_ru}}
                                                    </span>
                                                </div>
                                            </span>
                                            <span v-else style="vertical-align: unset;">Выберите район</span>
                                        </div>
                                    </div>
                                    <div class="field__glypth">
                                        <span class="field__iconaction">
                                            <i class="fas fa-chevron-down"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Dialog v-model:visible="districtModal" :position="position" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}" class="address_modal" contentClass="address-modal">
                                <template #header>
                                    <h5>Выберите район для поиска</h5>
                                </template>
                                <div class="field__items">
                                    <div v-for="item in districts" :key="item.id" class="field__item">
                                        <Checkbox @change="getQuarters()" :inputId="`district_type_${item.id}`" name="districts" :value="item.id" v-model="form.district_id" />
                                        <label :for="`district_type_${item.id}`">{{item.name_ru}}</label>
                                    </div>
                                </div>
                                <template #footer>
                                    <Button label="Отмена" @click="districtModal = !districtModal" />
                                </template>
                            </Dialog>
                        </div>
                        <!-- Districts end -->

                        <!-- Quarters start -->
                        <div class="mobile-filter-region">
                            <div role="button" @click="openQuarter('bottom')">
                                <div class="field__container">
                                    <div class="field__set">
                                        <div class="field__control">
                                            <span v-if="form.quarter_id.length >= 3" style="vertical-align: unset;">
                                                {{form.quarter_id.length}} Выбрано
                                            </span>
                                            <span v-else-if="form.quarter_id.length > 0 || form.quarter_id.length >= 2" style="vertical-align: unset;" class="d-flex">
                                                <div v-for="item in quarters" :key="item.id" class="mr-1">
                                                    <span v-if="isIncludeQuarters(item.id)" style="vertical-align: unset;">
                                                        {{item.name_ru}}
                                                    </span>
                                                </div>
                                            </span>
                                            <span v-else style="vertical-align: unset;">Выберите улицу</span>
                                        </div>
                                    </div>
                                    <div class="field__glypth">
                                        <span class="field__iconaction">
                                            <i class="fas fa-chevron-down"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Dialog v-model:visible="quarterModal" :position="position" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}" class="address_modal" contentClass="address-modal">
                                <template #header>
                                    <h5>Выберите улица для поиска</h5>
                                </template>
                                <div class="field__items">
                                    <div v-for="item in quarters" :key="item.id" class="field__item">
                                        <Checkbox :inputId="`quarter_type_${item.id}`" name="quarters" :value="item.id" v-model="form.quarter_id" />
                                        <label :for="`quarter_type_${item.id}`">{{item.name_ru}}</label>
                                    </div>
                                </div>
                                <template #footer>
                                    <Button label="Отмена" @click="quarterModal = !quarterModal" />
                                </template>
                            </Dialog>
                        </div>
                        <!-- Quarters end -->

                        <!-- Object deals start -->
                        <div class="mobile-filter-tabs">
                            <div class="single_button_select_box d-flex">
                                <label for="object_deals_buy" class="single_button_select_box_label" :class="{'active' : form.object_deals == 'buy'}">
                                    <input v-model="form.object_deals" id="object_deals_buy" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="buy">
                                    <span class="single_button_select_box_label_span" :class="{'active_span' : form.object_deals == 'buy'}">Купить</span>
                                </label>
                                <label for="object_deals_rent" class="single_button_select_box_label" :class="{'active' : form.object_deals == 'rent'}">
                                    <input v-model="form.object_deals" id="object_deals_rent" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="rent">
                                    <span class="single_button_select_box_label_span" :class="{'active_span' : form.object_deals == 'rent'}">Снять</span>
                                </label>
                            </div>
                        </div>
                        <!-- Object deals end -->

                        <!-- Object types start -->
                        <div class="mobile-filter-guides">
                            <div v-for="item in objectTypes" :key="item.id" class="mobile-filter-guide">
                                <label @click="filterData" :for="`item__${item.id}`" class="single_button_select_box_label" :class="{'active' : form.object_type == item.id}">
                                    <input v-model="form.object_type" :id="`item__${item.id}`" type="radio" class="single_button_select_box_label_inpt" tabindex="0" :value="item.id">
                                    <div class="mobile-filter-guide-icon d-flex align-items-center">
                                        <img style="width: 30px" :src="`/images/icons/quickfilter/${item.id == 1 ? 'flat' : item.id == 2 ? 'home' : item.id == 3 ? 'office' : item.id == 4 ? 'villa' : 'land'}.png`" alt="">
                                        <span class="single_button_select_box_label_span" :class="{'active_span' : form.object_type == item.id}">{{item.name_ru}}</span>
                                    </div>
                                    <i v-if="loading && form.object_type == item.id" class="pi pi-spin pi-spinner" style="font-size: 2rem; float: right;"></i>
                                </label>
                            </div>
                        </div>
                        <!-- Object types end -->
                    </div>
                </form>
            </div>
        </div>
        <div class="mobile-filter-add">
            <router-link class="mobile-filter-add-link" :to="{name: 'newObject'}">
                <i class="feather icon-plus"></i> 
                <span>Добавить объявление</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import Dialog from 'primevue/dialog';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import { mapGetters } from 'vuex'
import '../../../../public/css/mobile-filter-page.css'
export default {
    components: {
        Dialog,
        RadioButton,
        Button,
        Checkbox
    },
    data() {
        return {
            form: {
                region_id: null,
                district_id: [],
                quarter_id: [],
                object_deals: 'buy',
                object_type: null,
            },
            regions: [],
            districts: [],
            quarters: [],
            regionModal: false,
            loading: false,
            districtModal: false,
            quarterModal: false,
            position: false,
        }
    },
    methods: {
        filterData(){
            this.loading = true;
            axios.get('/api/object/search', this.form)
            .then(response => {
                setTimeout(() => {
                    this.loading = false;
                    this.$router.push({name: "SearchObject", query: {
                        object_deals: this.form.object_deals,
                        object_type: this.form.object_type,
                        region_id: this.form.region_id,
                        'district_id[]': this.form.district_id.map(e => e),
                        'quarter_id[]' : this.form.quarter_id.map(e => e),
                    }});
                },1000);
            })
            .catch(function (error){
                alert(error);
            });
        },
        isInclude(id) {
            return this.form.district_id.find(item => item === id);
        },
        isIncludeRegion(id) {
            return this.form.region_id === id;
        },
        isIncludeQuarters(id){
            return this.form.quarter_id.find(item => item === id);
        },
        openRegion(position) {
            this.position = position;
            this.regionModal = true;
        },
        openDistrict(position) {
            this.position = position;
            this.districtModal = true;
        },
        openQuarter(position){
            this.position = position;
            this.quarterModal = true;
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
    created() {
        this.getRegions();
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