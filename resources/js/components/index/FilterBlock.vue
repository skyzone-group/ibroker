<template>
    <TabView ref="tabview1">
        <TabPanel header="Купить">
            <div class="filtr_block w-100">
                <div class="filtr_block-item item-width-1">
                    <MultiSelect v-model="selectedCities1" :options="form.user_type == 1 ? groupedCities : citiess" :selectAll="false" :showToggleAll="false" optionLabel="label" optionGroupLabel="label" placeholder="Select Cities" optionGroupChildren="items">
                        <template #header>
                            <div class="filtr_block-item-header">
                                <label for="type__account_owner" class="single_button_select_box_label" :class="{'active' : this.form.user_type == '1'}">
                                    <input v-model="form.user_type" id="type__account_owner" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="1">
                                    <span class="single_button_select_box_label_span" :class="{'active_span' : this.form.user_type == '1'}">Жилая</span>
                                </label>
                                <label for="type__account_agent" class="single_button_select_box_label" :class="{'active' : this.form.user_type == '2'}">
                                    <input v-model="form.user_type" id="type__account_agent" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="2">
                                    <span class="single_button_select_box_label_span" :class="{'active_span' : this.form.user_type == '2'}">Коммерческая</span>
                                </label>
                            </div>
                        </template>
                        <template #optiongroup="slotProps">
                            <div class="flex align-items-center country-item">
                                <div>{{slotProps.option.label}}</div>
                            </div>
                        </template>
                        <template #footer>
                            <div class="flex align-items-center country-item">
                                <div v-for="item in cities" :key="item.name" class="field-checkbox">
                                    <Checkbox :id="`city_${index}`" name="city[]" :value="item ? item.name : ''" v-model="test" />
                                    <label :for="`city_${index}`">{{item ? item.name : ''}}</label>
                                </div>
                            </div>
                        </template>
                    </MultiSelect>
                </div>
            </div>
        </TabPanel>
        <TabPanel header="Снять">
            <p>Снять</p>
            {{formatedOptions}}
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
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
import Checkbox from 'primevue/checkbox';

// import FiltrBuy from './filtr/FiltrBuy.vue'
export default {
    components: {
        TabView,
        TabPanel,
        Dropdown,
        MultiSelect,
        Checkbox
    },
    data() {
        return {
            test: [],
            selectedCities1: null,
            value: null,
            cities: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],
            citiess: [
                {
                    label: 'Germany', code: 'DE',
                    items: [
                        {label: 'Berlin', value: 'Berlin'},
                        {label: 'Frankfurt', value: 'Frankfurt'},
                        {label: 'Hamburg', value: 'Hamburg'},
                        {label: 'Munich', value: 'Munich'}
                    ]
                },
            ],
            form: {
                user_type: 1
            },
            groupedCities: [
            {
                label: 'Germany', code: 'DE',
                items: [
                    {label: 'Berlin', value: 'Berlin'},
                    {label: 'Frankfurt', value: 'Frankfurt'},
                    {label: 'Hamburg', value: 'Hamburg'},
                    {label: 'Munich', value: 'Munich'}
                ]
            },
            {
                label: 'USA', code: 'US',
                items: [
                    {label: 'Chicago', value: 'Chicago'},
                    {label: 'Los Angeles', value: 'Los Angeles'},
                    {label: 'New York', value: 'New York'},
                    {label: 'San Francisco', value: 'San Francisco'}
                ]
            },
            {
                label: 'Japan', code: 'JP',
                items: [
                    {label: 'Kyoto', value: 'Kyoto'},
                    {label: 'Osaka', value: 'Osaka'},
                    {label: 'Tokyo', value: 'Tokyo'},
                    {label: 'Yokohama', value: 'Yokohama'}
                ]
            }],
            // items: Array.from({ length: 1000 }, (_, i) => ({ label: `Item #${i}`, value: i }))
        }
    },
    computed: {
        formatedOptions(){
            let fo = this.cities.map(item => {
                return {...item, checked: false};
            })
            return fo;
        }
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

.filtr_block-item{
    position: relative;
    border-right: 1px solid #f4f4f4;
    height: 100%;
}

.filtr_block-item .p-multiselect .p-multiselect-label{
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 20px 38px 20px 24px;
}
.filtr_block-item .p-multiselect .p-multiselect-label.p-placeholder{
    color: #121212;
    font-size: 14px;
    line-height: 1.43;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.filtr_block-item .p-multiselect{
    border-radius: 0;
    cursor: pointer;
    border: none;
    background: none;
    width: 100%;
    overflow: hidden;
}

.filtr_block-item-header{
    padding: 0.5rem 12px !important;
    display: flex;
    align-items: flex-start;
}

.item-width-1{
    width: 100%;
    min-width: 140px;
    max-width: 316px;
}
</style>