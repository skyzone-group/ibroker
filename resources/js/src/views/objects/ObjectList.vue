<template>
    <div class="object_list">
        <div class="objects-main-div">
            <nav class="objects-main-div_nav">
                <ul class="objects-main-div_nav_ul d-flex m-0 p-0">
                    <li class="objects-main-div_nav_ul_li">
                        <router-link :to="{name: 'objects'}" class="objects-main-div_nav_ul_li_a">
                            Все
                        </router-link>
                    </li>
                    <li class="objects-main-div_nav_ul_li">
                        <router-link :to="{name: 'sales'}" class="objects-main-div_nav_ul_li_a">
                            Продано
                        </router-link>
                    </li>
                    <li class="objects-main-div_nav_ul_li">
                        <router-link :to="{name: 'rent'}" class="objects-main-div_nav_ul_li_a">
                            Аренда
                        </router-link>
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
                                        <Checkbox @click="printBtn = !printBtn"  id="binary" v-model="checked" :binary="true" />
                                        <!-- <label for="binary">{{checked}}</label> -->
                                    </div>
                                </div>
                                <span class="mr-2 d-lg-block d-md-block d-sm-block d-none">1 объявление</span>
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
        <router-view name="objects"></router-view>
    </div>
</template>


<script>
import ObjectModal from '../../../components/objects/ObjectFiltrModal.vue'
import Checkbox from 'primevue/checkbox';
export default {
    components: {
        ObjectModal,
        Checkbox
    },
    data() {
        return {
            printBtn: false
        }
    },
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
/* ********************************************************** */
@media (max-width: 767px){
    .fixed_panel_div .top_bar[data-v-ae5be99c] {
        justify-content: center;
        }
    } 
</style>