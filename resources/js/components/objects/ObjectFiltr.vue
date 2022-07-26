<template>
    <div class="filter_panel">
        <div class="object_filtr">
            <div class="object_filtr_box">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="field">
                            <label for="username1">Регион</label>
                            <Dropdown v-model="selectedRegion" :options="regions" optionLabel="name" optionValue="id" placeholder="Выберите регио..." class="w-100" />
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="field">
                            <label for="username1">Район</label>
                            <Dropdown v-model="selectedDistrict" :options="districts" optionLabel="name" optionValue="id" placeholder="Выберите регио..." class="w-100" />
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="field">
                            <label for="username1">Тир Недвижимость</label>
                            <Dropdown v-model="selectedRealEstate" :options="typeEstate" optionLabel="name" optionValue="id" placeholder="Тип недви..." class="w-100" />
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="field">
                            <label for="object_id">Номер объявления (ID)</label>
                            <InputText id="object_id" v-model="objectId"  placeholder="ID" class="w-100"/>
                        </div>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="search_button d-flex justify-content-end">
                            <Button type="button" label="Поиск" icon="pi pi-search" :loading="loading[0]" @click="load(0)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed_panel">
            <div class="fixed_panel_div">
                <div class="top_bar">
                    <div class="top_bar_total">
                        <div class="top_bar_total_checkBox">
                            <div class="field-checkbox">
                                <Checkbox @click="printBtn = !printBtn"  id="binary" v-model="checked" :binary="true" />
                                <!-- <label for="binary">{{checked}}</label> -->
                            </div>
                        </div>
                        <span class="mr-2">1 объявление</span>
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
                    </div>
                    <div class="top_bar_btns">
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
</template>


<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';

export default {
    components: {
        InputText,
        Dropdown,
        Button,
        Checkbox
    },
    setup() {
        
    },
    data() {
        return {
            selectedRegion: null,
            selectedDistrict: null,
            selectedRealEstate: null,
            objectId: null,
            checked: false,
            printBtn: false,
            loading: [false, false, false],
            regions: [
                {name: 'Ташкент', id: 1},
                {name: 'Ташкентская область', id: 2},
                {name: 'Андижанская область', id: 3},
                {name: 'Бухарская область', id: 4},
                {name: 'Джизахская область', id: 5},
                {name: 'Ферганская область', id: 6},
                {name: 'Каракалпакстан', id: 7},
                {name: 'Кашкадарьинская область', id: 8},
                {name: 'Навоийская область', id: 9},
                {name: 'Наманганская область', id: 10},
            ],
            districts: [
                {name: 'Ташкент', id: 1},
                {name: 'Ташкентская область', id: 2},
                {name: 'Андижанская область', id: 3},
                {name: 'Бухарская область', id: 4},
                {name: 'Джизахская область', id: 5},
                {name: 'Ферганская область', id: 6},
                {name: 'Каракалпакстан', id: 7},
                {name: 'Кашкадарьинская область', id: 8},
                {name: 'Навоийская область', id: 9},
                {name: 'Наманганская область', id: 10},
            ],
            typeEstate: [
                {name: 'Квартира', id: 1},
                {name: 'Частный дом', id: 2},
                {name: 'Новостройки', id: 3},
                {name: 'Дача', id: 4},
                {name: 'Комната', id: 5},
                {name: 'Коммерческая недвижимость', id: 6},
                {name: 'Земельные участки', id: 7},
            ],
        }
    },
    methods: {
        load(index) {
            this.loading[index] = true;
            setTimeout(() => this.loading[index] = false, 1000);
        }
    }
}
</script>

<style scoped>
    .object_filtr_box{
        background-color: #fff;
        border-radius: 0.5rem;
        box-shadow: 0 0.2rem 0.4rem 0 #00000012;
        padding: 20px;
        width: 100%;
    }
    
    .fixed_panel{
        position: relative;
        z-index: 2;
        margin-top: 28px;
        min-height: 60px;
    }
    
    .fixed_panel_div{
        position: absolute;
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
        border-bottom: 1px solid #f1f2f4;
        background: #fff;
        padding: 15px;
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
        background-color: var(--white_100);
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
    
    /* ********************************************************** */
    /* @media (max-width: 767px){
        .object_filtr{
            overflow-x: hidden;
            overflow-y: auto;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 10;
            outline: 0;
            background: #808080b3;
        }
        .object_filtr_box{
            transform: translate(0,0);
            display: flex;
            align-items: center;
        }
        
        .object_filtr_box {
            min-height: 360px;
        }
        
        .object_filtr_box  {
            max-width: 500px;
            margin: 4.75rem auto;
        }
    } */
</style>