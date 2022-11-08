<template>
    <div class="object_list">
        <div class="objects-main-div">
            <nav class="objects-main-div_nav">
                <ul class="objects-main-div_nav_ul d-flex m-0 p-0">
                    <li class="objects-main-div_nav_ul_li">
                        <a href="#!" class="objects-main-div_nav_ul_li_a">
                            Все
                        </a>
                    </li>
                    <li class="objects-main-div_nav_ul_li">
                        <a href="#!" class="objects-main-div_nav_ul_li_a">
                            Продано
                        </a>
                    </li>
                    <li class="objects-main-div_nav_ul_li">
                        <a href="#!" class="objects-main-div_nav_ul_li_a">
                            Аренда
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="filter_card">
            <div class="filter_panel">
                <div class="object_filtr">
                    <object-modal></object-modal>
                </div>
                <div class="fixed_panel">
                    <div class="fixed_panel_div">
                        <div class="top_bar">
                            <div class="top_bar_total">
                                <div class="top_bar_total_checkBox d-lg-block d-md-block d-sm-block d-none">
                                    <div class="field-checkbox">
                                        <Checkbox  id="binary" v-model="select_all" @click="selectAll" :binary="true"/>
                                        <!-- <label for="binary">{{checked}}</label> -->
                                    </div>
                                </div>
                                <span class="mr-2 d-lg-block d-md-block d-sm-block d-none">{{totalObject}} объявление</span>
                                <div class="dropdown-avatar">
                                    <a class=" nav-link dropdown-user-link avatar_drop align-items-center d-flex" href="#" data-toggle="dropdown">
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
                                <div class="filtr_block">
                                    <a data-toggle="modal" data-target="#objectModal" class="nav-link align-items-center d-flex" href="#!">
                                        <i class="feather icon-filter object_fil mr-2"></i>
                                        Фильтр
                                    </a>
                                </div>
                            </div>
                            <div class="top_bar_btns d-lg-block d-md-block d-sm-block d-none">
                                <button v-show="printBtn">
                                    <svg class="object_fil" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 0a1 1 0 0 0-1 1v2h10V1a1 1 0 0 0-1-1H4ZM0 6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7h-3v3H3v-3H0V6Zm11 4H5v4h6v-4ZM4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor"></path></svg>
                                    <span class="top_bar_btns_txt">Печатать</span>
                                </button>
                                <button>
                                    <svg class="object_fil" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 0a1 1 0 0 0-1 1v2H1v2h14V3h-3V1a1 1 0 0 0-1-1H5Zm5 2H6v1h4V2ZM3 7h10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" fill="currentColor"></path></svg>
                                    <span class="top_bar_btns_txt">Удалить</span>
                                </button>
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
                        <div class="checkbox-box">
                            <div class="top_bar_total_checkBox">
                                <div class="field-checkbox">
                                    <Checkbox :id="`object_check_${object.id}`" :value="object.id" v-model="selected" />
                                </div>
                            </div>
                        </div>
                        <div class="objects_main-content w-100">
                            <div class="objects_main-content-item">
                                <div class="item-header d-flex">
                                    <div class="objects_main-row_img">
                                        <a :href="`/show/object/${object.object_deals}/${object.object_type.name_ru}/${object.id}`" class="objects_main-row_img-link">
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
                                                <a :href="`/show/object/${object.object_deals}/${object.object_type.name_ru}/${object.id}`" v-if="object.object_type_id === 1">{{ object.object_type.name_ru }}, {{ object.room_count }}-комн , {{object.total_area }} м², {{ object.floor }} / {{ object.floor_count }} этаж</a>
                                                <a :href="`/show/object/${object.object_deals}/${object.object_type.name_ru}/${object.id}`" v-if="object.object_type_id === 2">{{ object.object_type.name_ru }}, {{ object.room_count }}-комн , {{object.total_area }} м², {{ object.floor_count }} этаж, {{ object.land_area }}</a>
                                                <a :href="`/show/object/${object.object_deals}/${object.object_type.name_ru}/${object.id}`" v-if="object.object_type_id === 3">{{ object.object_type.name_ru }}, {{object.total_area }} м²</a>
                                                <a :href="`/show/object/${object.object_deals}/${object.object_type.name_ru}/${object.id}`" v-if="object.object_type_id === 4">{{ object.object_type.name_ru }}, {{object.total_area }} м², {{ object.floor_count }} этаж, {{ object.land_area }} м²</a>
                                                <a :href="`/show/object/${object.object_deals}/${object.object_type.name_ru}/${object.id}`" v-if="object.object_type_id === 5">{{ object.object_type.name_ru }}, {{ object.land_area }} м²</a>
                                            </h5>
                                            <div class="objects_main-row-content-price-box d-flex">
                                                <h6 class="item-title eu5v0x0">{{ object.price }}$</h6>
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
                                                <a :href="`/show/object/${object.object_deals}/${object.object_type.name_ru}/${object.id}`" type="button" class="item-bottom-right-edit">Просмотреть</a>
                                            </li>
                                            <li class="item-bottom-right-actions-list mr-2">
                                                <a :href="`/adding/object/edit/${object.id}`" type="button" class="item-bottom-right-edit">Редактировать</a>
                                            </li>
                                            <li class="item-bottom-right-actions-list">
                                                <a href="#!" type="button" class="item-bottom-right-edit">Удалить</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Paginator v-if="pageInfo" :CurrentPageReport="pageInfo.current_page"  @page="getUserObjects($event.page)" :rows="parseInt(pageInfo.per_page)" :totalRecords="pageInfo.total">
                <template #start>
                    <p style="font-weight: 600; color: rgb(0, 47, 52);">Jami e'lonlar: {{totalObject}}</p>
                </template>
            </Paginator>
        </div>
    </div>
</template>


<script>
import ObjectModal from '../../../components/objects/ObjectFiltrModal.vue'
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import Paginator from 'primevue/paginator';
import ProgressSpinner from 'primevue/progressspinner';
// Moment
import moment from 'moment'
export default {
    components: {
        ObjectModal,
        Checkbox,
        Button,
        Paginator,
        ProgressSpinner
    },
    data() {
        return {
            printBtn: false,
            checked: false,
            objects: [],
            totalRecords: 120,
            total: 2,
            pageInfo: null,
            totalObject: null,
            isLoaded: false,
            select_all: false,
            selected: [],
            imageCount: false,
        }
    },
    methods: {
        getUserObjects(page){ // get user informations on database
            const token = localStorage.getItem('token');
            this.isLoaded = true ;
            axios.get(`/api/object/all?page=${page+=1}&total=${this.total}`, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
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
        }
    },
    mounted(){
        this.getUserObjects();
    }
}
</script>

<style scoped>
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
    margin-top: 28px;
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

.top_bar_btns button{
    margin-left: 2px;
    background-color: transparent;
    color: var(--primary_100);
    padding: 3px 11px;
    height: 28px;
    border-radius: 4px;
    white-space: nowrap;
    display: inline-flex;
    position: relative;
    cursor: pointer;
    outline: none;
    border: 1px solid transparent;
    justify-content: center;
    align-items: center;
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