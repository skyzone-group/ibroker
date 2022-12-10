<template>
    <div class="object_list">
        <div class="objects-main-div">
            <nav class="objects-main-div_nav">
                <ul class="objects-main-div_nav_ul d-flex m-0 p-0 nav nav-tabs">
                    <li class="nav-item">
                        <label for="type__filter_all" class="filters-tabs-item Radio_theme_realty" :class="{'active' : form.object_deals == 'all'}">
                            <input @change="filterData()" v-model="form.object_deals" id="type__filter_all" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="all">
                            Все
                        </label>
                    </li>
                    <li class="nav-item">
                        <label for="type__filter_buy" class="filters-tabs-item Radio_theme_realty" :class="{'active' : form.object_deals == 'buy'}">
                            <input @change="filterData()" v-model="form.object_deals" id="type__filter_buy" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="buy">
                            Продажа
                        </label>
                    </li>
                    <li class="nav-item">
                        <label for="type__filter_rent" class="filters-tabs-item Radio_theme_realty" :class="{'active' : form.object_deals == 'rent'}">
                            <input @change="filterData()" v-model="form.object_deals" id="type__filter_rent" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="rent">
                            Аренда
                        </label>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="filter_card">
            <div class="filter_panel">
                <div class="fixed_panel">
                    <div class="fixed_panel_div">
                        <div class="top_bar">
                            <div class="top_bar_total">
                                <!-- <div class="top_bar_total_checkBox d-lg-block d-md-block d-sm-block d-none">
                                    <div class="field-checkbox">
                                        <Checkbox  id="binary" v-model="select_all" @click="selectAll" :binary="true"/>
                                    </div>
                                </div> -->
                                <span class="mr-2 d-lg-block d-md-block d-sm-block d-none">{{totalObject}} объявление</span>
                            </div>
                            <div class="top_bar_btns d-flex">
                                <div class="dropdown-avatar">
                                    <a class=" nav-link dropdown-user-link avatar_drop align-items-center d-flex nohover" href="#" data-toggle="dropdown">
                                        <svg class="object_fil mr-2" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.207 1.293 4.5.586l-.707.707-3.5 3.5 1.414 1.414L3.5 4.414V15h2V4.414l1.793 1.793 1.414-1.414-3.5-3.5Zm7 13.414-.707.707-.707-.707-3.5-3.5 1.414-1.414 1.793 1.793V1h2v10.586l1.793-1.793 1.414 1.414-3.5 3.5Z" fill="currentColor"></path></svg>
                                        Сортировать
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#!">
                                            По дате добавления в избранное
                                        </a>
                                        <a class="dropdown-item" href="#!">
                                            По цене
                                        </a>
                                    </div>
                                </div>
                                <div class="filtr_block ml-2">
                                    <button @click="objectFilter = true" class="nav-link align-items-center d-flex nohover" type="button">
                                        <i class="feather icon-filter object_fil mr-2"></i>
                                        Фильтр
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="objects_page h-100">
            <div v-if="isLoaded" class="loader-main-box">
                <ProgressSpinner style="width:80px; height:80px" strokeWidth="3" fill="var(--surface-ground)" animationDuration="1s" />
            </div>
            <div v-else-if="objects.length === 0">
                <div class="empty_box">
                    <figure>
                        <img src="/images/icons/empty.png" alt="">
                    </figure>
                </div>
            </div>
            <div v-if="!isLoaded">
                <div class="objects_main"  v-for="object in objects" :key="object.id">
                    <div class="objects_main-box">
                        <!-- <div class="checkbox-box">
                            <div class="top_bar_total_checkBox">
                                <div class="field-checkbox">
                                    <Checkbox :id="`object_check_${object.id}`" :value="object.id" v-model="selected" />
                                </div>
                            </div>
                        </div> -->
                        <div class="objects_main-content w-100">
                            <div class="objects_main-content-item">
                                <div class="item-header d-flex">
                                    <div class="objects_main-row_img">
                                        <a target="_blank" :href="`/show/object/${object.object_deals}/${object.object_type.name_ru}/${object.id}`" class="objects_main-row_img-link">
                                            <span title="Количество фотографий" class="listing__photos">
                                                <i class="feather icon-camera icon"></i>
                                                {{object.images.length}}
                                            </span>
                                            <span title="saved user length" class="saved_user_length">
                                                <i class="feather icon-heart icon"></i>
                                                {{object.images.length}}
                                            </span>
                                            <img :src="`/file/${object.images[0].name}`" :alt="object.images[0].name">
                                        </a>
                                    </div>
                                    <div class="objects_main-row-content">
                                        <div class="objects_main-row-content-header">
                                            <h5 class="item-title">
                                                <a target="_blank" :href="`/show/object/${object.object_deals}/${object.object_type.name_ru}/${object.id}`" v-if="object.object_type_id === 1">{{ object.object_type.name_ru }}, {{ object.room_count }}-комн , {{object.total_area }} м², {{ object.floor }} / {{ object.floor_count }} этаж</a>
                                                <a target="_blank" :href="`/show/object/${object.object_deals}/${object.object_type.name_ru}/${object.id}`" v-if="object.object_type_id === 2">{{ object.object_type.name_ru }}, {{ object.room_count }}-комн , {{object.total_area }} м², {{ object.floor_count }} этаж, {{ object.land_area }}</a>
                                                <a target="_blank" :href="`/show/object/${object.object_deals}/${object.object_type.name_ru}/${object.id}`" v-if="object.object_type_id === 3">{{ object.object_type.name_ru }}, {{object.total_area }} м²</a>
                                                <a target="_blank" :href="`/show/object/${object.object_deals}/${object.object_type.name_ru}/${object.id}`" v-if="object.object_type_id === 4">{{ object.object_type.name_ru }}, {{object.total_area }} м², {{ object.floor_count }} этаж, {{ object.land_area }} м²</a>
                                                <a target="_blank" :href="`/show/object/${object.object_deals}/${object.object_type.name_ru}/${object.id}`" v-if="object.object_type_id === 5">{{ object.object_type.name_ru }}, {{ object.land_area }} м²</a>
                                            </h5>
                                            <div class="objects_main-row-content-price-box d-flex">
                                                <h6 class="item-title eu5v0x0">{{ vueNumberFormat(object.price, {}) }} y.e</h6>
                                            </div>
                                        </div>
                                        <div class="objects_main-row-content-info">
                                            <div class="objects_main-row-content-info-first-box">
                                                <ul class="item-categories">
                                                    <li>{{ object.object_deals === 'buy' ? 'Продажа' : 'Аренда' }}</li>
                                                    <li v-if="object.rent_type != 0">{{ object.rent_type === 'daily' ? 'Посуточно' : 'Долгосрочный' }}</li>
                                                    <li>{{ object.object_type.name_ru }}</li>
                                                    <li v-if="object.object_type_id === 1">{{ object.object_time_type === 0 ? 'Вторичка' : 'Новостройка'}}</li>
                                                </ul>
                                                <div class="item-contents">
                                                    <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="css-1tq7vpq"><path d="M12 2c4.963 0 9 4.037 9 9 0 4.701-5.034 9.195-7.328 11h-3.344C8.035 20.195 3 15.701 3 11c0-4.963 4.037-9 9-9zm0 2c-3.86 0-7 3.14-7 7 0 3.75 4.614 7.981 6.995 9.764C13.749 19.434 19 15.108 19 11c0-3.86-3.14-7-7-7zm0 3c2.206 0 4 1.794 4 4 0 2.205-1.794 4-4 4-2.205 0-4-1.795-4-4 0-2.206 1.795-4 4-4zm0 2c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" fill="currentColor" fill-rule="evenodd"></path></svg>
                                                    <p class="css-1u68p4l-Text eu5v0x0">{{object.quarter.name_ru}}, {{object.district.name_ru}}, {{object.region.name_ru}}</p>
                                                </div>
                                                <div class="item-contents">
                                                    <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="css-1tq7vpq"><path d="M8.006 2v1h8.007V2h2.002v1h2.984L22 4v17l-1 1H3l-1-1V4l1-1h3.004V2h2.002zm11.992 8H4.002v10h15.996V10zM7.505 12a1.5 1.5 0 1 1 .001 3 1.5 1.5 0 0 1 0-3.001zM6.004 5H4.002v3h15.996V5h-1.983v1l-1.001 1-1.001-1V5H8.006v1L7.005 7 6.004 6V5z" fill="currentColor" fill-rule="evenodd"></path></svg>
                                                    <p class="css-18xoq17-Text eu5v0x0"><span data-cy="ad-duration-dates">{{ getFormattedDate(object.created_at) }} - {{ getFormattedDate(object.updated_at) }}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-bottom-info">
                                    <div class="item-bottom-left">
                                        <span>ID: {{ object.id }}</span>
                                    </div>
                                    <div class="item-bottom-right">
                                        <ul class="item-bottom-right-actions">
                                            <li class="item-bottom-right-actions-list mr-2">
                                                <a :href="`/show/object/${object.object_deals}/${object.object_type.name_ru}/${object.id}`" type="button" class="item-bottom-right-edit nohover">Просмотреть</a>
                                            </li>
                                            <li class="item-bottom-right-actions-list mr-2">
                                                <a :href="`/adding/object/edit/${object.id}`" type="button" class="item-bottom-right-edit nohover">Редактировать</a>
                                            </li>
                                            <li class="item-bottom-right-actions-list">
                                                <button @click="deleteUserObject(object.id)" type="button" class="item-bottom-right-edit nohover">Удалить</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Paginator v-if="pageInfo" 
            :CurrentPageReport="pageInfo.current_page"  
            @page="getUserObjects($event.page)" 
            :rows="parseInt(pageInfo.per_page)" 
            :totalRecords="pageInfo.total">
                <template #start>
                    <p style="font-weight: 600; color: rgb(0, 47, 52);">Jami e'lonlar: {{totalObject}}</p>
                </template>
            </Paginator>
        </div>
        <div class="user-info-succes-box">
            <Toast />
            <div class="profile_form-avatar-delete">
                <form v-if="displayModal" @submit.prevent="deleteObject()" class="profile_form" method="POST">
                    <Dialog header="Удалить объявление?" v-model:visible="displayModal" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '40vw'}" class="delete_user_avatar-model" :modal="true" :dismissableMask="true" :draggable="false">
                        <template #footer>
                            <Button label="No" icon="pi pi-times" @click="displayModal = !displayModal" class="p-button-text"/>
                            <Button label="Yes" type="submit" @click="deleteObject" icon="pi pi-check" class="p-button-danger" />
                        </template>
                    </Dialog>
                </form>
                <div class="search-object-top-more-filter">
                    <form v-if="objectFilter" @submit.prevent="searchObjects()" class="profile_form" method="POST">
                        <Dialog header="Фильтр" v-model:visible="objectFilter" 
                        class="more-filter-modal user-objects-filter-modal"
                        :breakpoints="{'960px': '75vw', '640px': '90vw'}" 
                        :style="{width: '50vw'}" 
                        :dismissableMask="true" 
                        :draggable="false" 
                        :modal="true">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-12 mb-3">
                                    <div class="field">
                                        <label for="field-label">Регион</label>
                                        <Dropdown @change="getDistricts()" 
                                        v-model="form.region_id" 
                                        :options="regions" 
                                        :loading="loading[0]"
                                        optionLabel="name_uz" 
                                        optionValue="id" 
                                        placeholder="Выберите регио..." 
                                        class="w-100" />
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12 mb-3">
                                    <div class="field">
                                        <label for="field-label">Район</label>
                                        <MultiSelect 
                                        @change="getQuarters()"  
                                        v-model="form.district_id" 
                                        :options="districts" 
                                        optionLabel="name_uz" 
                                        optionValue="id" 
                                        placeholder="Выберите регио..." 
                                        class="w-100" />
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12 mb-3">
                                    <div class="field">
                                        <label for="field-label">Улица</label>
                                        <MultiSelect 
                                        v-model="form.quarter_id" 
                                        :options="quarters" 
                                        optionLabel="name_uz" 
                                        optionValue="id" 
                                        placeholder="Выберите улица..." 
                                        class="w-100" />
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3">
                                    <div class="field">
                                        <label for="field-label">Тир Недвижимость</label>
                                        <Dropdown v-model="form.object_type_id" :options="objectTypes" optionLabel="name_ru" optionValue="id" placeholder="Тип недви..." class="w-100" />
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3">
                                    <div class="field">
                                        <label for="field-label-object_id">Номер объявления (ID)</label>
                                        <InputText id="field-label-object_id" v-model="form.object_id"  placeholder="ID" class="w-100"/>
                                    </div>
                                </div>
                            </div>
                            <template #footer>
                                <button @click="objectFilter = !objectFilter" class="more-filter-modal-btn button-root--primary-outline-8-2-0">
                                    <span class="button-root__text-8-2-0">Закрыть</span>
                                </button>
                                <Button class="more-filter-modal-btn" :loading="loading[1]" icon="pi pi-search" type="submit" label="Показать"/>
                            </template>
                        </Dialog>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import Paginator from 'primevue/paginator';
import ProgressSpinner from 'primevue/progressspinner';
import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
import InputText from 'primevue/inputtext';
// Moment
import moment from 'moment'
import { mapGetters } from 'vuex'
export default {
    components: {
        Checkbox,
        Button,
        Paginator,
        ProgressSpinner,
        Dialog,
        Toast,
        Dropdown,
        MultiSelect,
        InputText
    },
    data() {
        return {
            printBtn: false,
            checked: false,
            objects: [],
            totalRecords: 120,
            total: 4,
            pageInfo: null,
            totalObject: null,
            isLoaded: false,
            loading: [false,true,false,false],
            select_all: false,
            selected: [],
            imageCount: false,
            displayModal: false,
            objectFilter: false,
            object_id: null,
            regions: [],
            districts: [],
            quarters: [],
            form: {
                object_deals: 'all',
                region_id: null,
                district_id: [],
                quarter_id: [],
                object_type_id: null,
                object_id: null,
            }
        }
    },
    methods: {
        async getUserObjects(page){ // get user informations on database
            const token = localStorage.getItem('token');
            this.isLoaded = true ;
            axios.get(`/api/object/all?page=${page+=1}&total=${this.total}`, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                },
                params: this.$route.query
            })
            .then(response => {
                this.objects = response.data.result.objects.data;
                this.pageInfo = response.data.result.objects;
                this.totalObject = response.data.result.total;
                this.isLoaded = false;
            });
        },
        getFormattedDate(date) { // get only year from timestempt
            return moment(date).format("YYYY-MM-DD")
        },
        selectAll(){
            this.selected = [];
            if(!this.select_all){
                for(let i in this.objects){
                    this.selected.push(this.objects[i].id);
                }
            }
        },
        filterData(){
            this.$router.push(
            {
                name: "myObjects",
                query: { object_deals: this.form.object_deals}
            });
        },
        deleteUserObject(id){
            this.object_id = id;
            this.displayModal = true;
        },
        deleteObject(){
            const token = localStorage.getItem('token');
            let formm = new FormData();
            formm.append('object_id', this.object_id);
            axios.post('/api/user/object/delete', formm, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            })
            .then(response => {
                window.location.reload();
                this.displayModal = false;
            })
            .catch(function (error) {
                console.log("889");
                alert("bad");
            });
        },
        searchObjects(){
            this.loading[1] = true;
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
            let region_id = this.form.region_id;
            this.form.district_id = [];
            this.form.quarter_id = [];

            this.regions.forEach(region => {
                if(region.id == this.form.region_id){
                    this.districts = region.districts;
                }
            })
        },
        getQuarters() {
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
        },
    },
    // mounted(){
    //     this.getUserObjects();
    // },
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
    async created() {
        this.allRegionQuarterDistrict();
        this.getUserObjects();
        this.$watch(() => this.$route.params, this.getUserObjects);
    }
}
</script>

<style>
.objects-main-div_nav_ul_li{
    margin-right: 10px;
}
.objects-main-div_nav_ul_li_a{
    background-color: transparent;
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
    transition: 0.4s;
    padding: 10px 12px;
    outline: none;
    width: 120px;
    color: #626262;
    border-bottom: 2px solid #626262;
}

.objects-main-div_nav_ul_li_a:hover{
    text-decoration: none;
}

.objects-main-div_nav_ul a.router-link-active{
    border-bottom: 2px solid var(--vc-nav-background-color);
    color: var(--vc-nav-background-color);
}

.objects-main-div_nav_ul .nav-item .filters-tabs-item{
    color: #000;
    font-size: 16px;
    border: none;
    min-width: auto;
    font-weight: 600 !important;
    padding: 0.5em 0.9375em !important;
    border-radius: 0;
    height: unset;
}


.objects-main-div_nav_ul .nav-item .filters-tabs-item.active {
    color: var(--form-button-color);
}

.objects-main-div_nav_ul .nav-item .filters-tabs-item.active:after {
    content: attr(data-before);
    height: 2px;
    width: 100%;
    left: 0;
    position: absolute;
    bottom: 0;
    top: 100%;
    background: var(--form-button-color) !important;
    box-shadow: unset !important;
    transform: translateY(0);
    transition: all .2s linear;
}

.object_list{
    display: flex;
    background-color: #f4f4f4;
    overflow: hidden;
    flex: 1 1;
    flex-direction: column;
}

.fixed_panel{
    position: relative;
    z-index: 2;
    margin-top: 15px;
    min-height: 60px;
}

.fixed_panel_div{
    /* position: absolute; */
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    width: auto!important;
}
.fixed_panel_div .top_bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #b3b4b6;
    /* background: #fff;
    padding: 15px; */
    min-height: 60px;
}

.top_bar_total{
    display: flex;
    align-items: center;
    color: #152242;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
}

.top_bar_total_checkBox{
    margin-right: 25px;
}

.object_fil{
    display: inline-block;
    color: var(--primary_100);
}

.top_bar_btns_txt{
    margin-left: 8px;
    font-size: 14px;
    line-height: 20px;
    font-style: normal;
    font-weight: 700;
}

.top_bar_btns .nav-link{
    border: 1px solid var(--gray10_100);
    border-radius: 4px;
    background: #fff;
    font-weight: 600;
    height: 40px;
}

.objects-main-div_nav_ul_li .filters-tabs-item{
    font: 600 18px/20px Lato,sans-serif;
}

/* .selectAll-box{
    min-height: 56px;
}
.selectAll-box-block{
    padding: 16px 0px;
    transition: background-color 0.3s ease 0s;
}
.selectAll-box-block-item{
    width: 1238px;
    margin: 0px auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.selectAll-box-block-item-left{
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 18px;
}

.selectAll-box-block-item-left-txt{
    align-self: center;
    font-size: 14px;
    margin-left: 18px;
    color: rgb(64, 99, 103);
} */

.objects_main{
    margin-top: 16px;
}

.objects_main-box{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin-bottom: 16px;
}

.checkbox-box{
    margin-right: 16px;
    display: block;
}

.objects_main-content-item{
    position: relative;
    width: 100%;
    padding: 16px;
    background: rgb(255, 255, 255);
    border-radius: 4px;
}
.objects_main-row{
    display: flex;
    flex-flow: row nowrap;
}

.objects_main-row_checkbox{
    margin-right: 25px;
}

.objects_main-row_img{
    position: relative;
}


.objects_main-row_img-link{
    position: relative;
    display: block;
}

.objects_main-row_img-link img{
    width: 216px;
    height: 152px;
    object-fit: cover;
}

.objects_main-row-content{
    display: flex;
    flex-direction: column;
    -webkit-box-flex: 1;
    flex-grow: 1;
    -webkit-box-pack: justify;
    /* justify-content: space-between; */
    padding-left: 0px;
    margin-left: 28px;
    border-bottom: 1px solid rgb(216, 223, 224);
}

.objects_main-row-content-header{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 6px 0px 16px;
}

.item-title{
    font-size: 20px;
    line-height: 22px;
    font-weight: 700;
    color: rgb(0, 47, 52);
    margin: 0px;
}

.item-title a {
    color: rgb(0, 47, 52);
}

.item-title a:not(:hover) {
    text-decoration: none;
}

.item-contents{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 14px;
}

.objects_main-row-content-info{
    /* display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-end; */
    padding-bottom: 16px;
}

.item-categories{
    padding: 0px;
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    margin: 0px;
    font-size: 14px;
    color: rgb(64, 99, 103);
}

.item-categories li{
    white-space: nowrap;
}

.item-categories li:not(:first-of-type)::before {
    content: "•";
    margin: 0px 8px;
}

.css-1tq7vpq {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    color: rgb(0, 47, 52);
}


.css-1u68p4l-Text {
    font-size: 14px;
    line-height: 18px;
    color: rgb(64, 99, 103);
    margin: 0px;
}

.item-bottom-info{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    margin-top: 8px;
}

.item-bottom-left{
    flex-shrink: 0;
    width: 216px;
    font-size: 12px;
    color: rgb(64, 99, 103);
}

.item-bottom-right{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
}

.item-bottom-right-actions{
    margin: 0px 0px 0px auto;
    padding: 0px;
    display: flex;
    list-style: none;
    -webkit-box-align: center;
    align-items: center;
}

.item-bottom-right-actions-list{
    display: inline-flex;
}

.item-bottom-right-edit{
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0px;
    min-height: 40px;
    position: relative;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    background-color: transparent;
    border: 2px solid var(--primary_100);
    border-radius: 4px;
    color: #000;
    padding: 6px 22px;
    transition: .5s easy;
}

.item-bottom-right-edit:not(:disabled):hover {
    background: var(--primary_100);
    color: #fff;
}


.user-objects-filter-modal .p-dialog-content {
    padding: 20px !important;
}

.user-objects-filter-modal .p-dialog-content .field label{
    font-size: 14px;
    font-weight: 500;
}
/* ********************************************** */
/* ********************************************************** */
@media (max-width: 767px){
    
    .fixed_panel_div .top_bar[data-v-ae5be99c] {
        justify-content: center;
    }
    
    .objects_main-box .checkbox-box{
        display: none;
    }
    
    .item-title {
        font-size: 16px;
    }
} 

@media (max-width: 575px){
    .objects_main-content-item{
        padding: 0 !important;
    }
    .objects_main-content-item .item-header, 
    .objects_main-content-item .item-bottom-info{
        flex-direction: column;
    }
    
    .objects_main-row_img{
        margin: 0;
        width: 100%;
        height: 100%;
    }
    
    .objects_main-row_img-link img{
        width: 100%;
        height: 270px;
        border-radius: 4px 4px 0 0;
    }
    .objects_main-row-content,
    .objects_main-content-item .item-bottom-info{
        margin: 0;
        padding: 8px 12px;
        flex-grow: 2;
    }
    
    .listing__photos, .saved_user_length {
        font-size: 14px;
    }
}

@media (max-width: 475px){
    .objects_main-row-content-header{
        flex-direction: column-reverse;
    }
    .objects_main-row-content-header .item-title{
        margin-top: 15px;
    }
    
    .objects_main-row_img-link img{
        height: 250px;
    }
    
    .item-bottom-right-actions{
        display: flex;
        flex-wrap: wrap;
    }
    
    .item-bottom-right-actions-list{
        display: flex;
        flex: 1 0 auto;
        -webkit-box-pack: end;
        justify-content: flex-end;
        margin: 4px !important;
    }
    
    .item-bottom-right-edit{
        width: 100%;
    }
}
</style>