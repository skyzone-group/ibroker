<template>
    <TabView ref="tabview1">
        <TabPanel header="Купить">
            <filtr-buy></filtr-buy>
        </TabPanel>
        <TabPanel header="Снять">
            <p>Снять</p>
        </TabPanel>
        <TabPanel header="Посуточно">
            <p>Посуточно</p>
        </TabPanel>
        <TabPanel header="Оценить">
            <p>Оценить</p>
        </TabPanel>
        <TabPanel header="Ипотека">
            <p>Ипотека</p>
        </TabPanel>
        <TabPanel header="Подбор риелтора">
            <p>Подбор риелтора</p>
        </TabPanel>
    </TabView>
    <div class="filter-block-inputs_content-top-txt_btns">
        <span class="filter_search_btns">
            <span class="filter_search_btn">
                <a href="#!" class="filter_search_btn-link map-link">
                    Показать на карте
                </a>
            </span>
            <span class="filter_search_btn">
                <a href="#!" class="filter_search_btn-link">
                    Найти
                </a>
            </span>
        </span>
    </div>
</template>

<script>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import FiltrBuy from './filtr/FiltrBuy.vue'
export default {
    components: {
        TabView,
        TabPanel,
        FiltrBuy  
    },
    setup() {
        
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
    margin: 12px 0 0;
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
</style>