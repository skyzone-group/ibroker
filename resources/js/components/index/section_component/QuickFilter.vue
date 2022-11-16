<template>
    <div id="quickFiltr" class="quick-mobile-filter">
        <h2 class="section__components_title">Поиск недвижимости</h2>
        <div class="quick-mobile-filter-main container_fluid">
            <form :model="form">
                <div class="quick-filter-top">
                    <div class="single_button_select_box d-flex">
                        <label for="type__account_owner" class="single_button_select_box_label" :class="{'active' : form.object_deals == 'buy'}">
                            <input v-model="form.object_deals" id="type__account_owner" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="buy">
                            <span class="single_button_select_box_label_span" :class="{'active_span' : form.object_deals == 'buy'}">Продажа</span>
                        </label>
                        <label for="type__account_agent" class="single_button_select_box_label" :class="{'active' : form.object_deals == 'rent'}">
                            <input v-model="form.object_deals" id="type__account_agent" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" value="rent">
                            <span class="single_button_select_box_label_span" :class="{'active_span' : form.object_deals == 'rent'}">Аренда</span>
                        </label>
                    </div>
                </div>
                <div class="quick-filter-body">
                    <div class="">
                        <div class="quick_filtr_block-scroll">
                            <fieldset class="quick_filtr_block-fieldset">
                                <div class="d-flex justify-content-center align-items-stretch">
                                    <label v-for="item in objectTypes" :key="item.id" :for="`object_type_${item.id}`" class="single_button_select_box_label d-flex" :class="{'active' : form.object_type == item.id}">
                                        <input v-model="form.object_type" :id="`object_type_${item.id}`" type="radio" class="single_button_select_box_label_inpt"  tabindex="0" :value="item.id">
                                        <span class="single_button_select_box_label_span" :class="{'active_span' : form.object_type == item.id}">
                                            <img style="width: 30px" :src="`/images/icons/quickfilter/${item.id == 1 ? 'flat' : item.id == 2 ? 'home' : item.id == 3 ? 'office' : item.id == 4 ? 'villa' : 'land'}.png`" alt="">
                                            {{item.name_ru}}
                                        </span>
                                    </label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            form: {
                object_deals: 'buy',
                object_type: 1,
            },
            itemsCard: [
                {
                    id: 0,
                    image: 'images/icons/quickfilter/buy.svg',
                    text: "Купить"
                },
                {
                    id: 1,
                    image: 'images/icons/quickfilter/rent.svg',
                    text: "Снять"
                },
                {
                    id: 2,
                    image: 'images/icons/quickfilter/newhouse.svg',
                    text: "Новостройки"
                },
                {
                    id: 3,
                    image: 'images/icons/quickfilter/dom.svg',
                    text: "Дома и участки"
                },
                {
                    id: 4,
                    image: 'images/icons/quickfilter/commercial.svg',
                    text: "Коммерческая"
                },
                {
                    id: 5,
                    image: 'images/icons/quickfilter/hourly.svg',
                    text: "Посуточно"
                },
            ]
        }
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
    .section__components_title{
        margin: 0 0 20px 16px;
        color: #121212;
        font-size: 22px;
        line-height: 28px;
    }
    
    .quick_filtr_block{
        display: flex;
        position: relative;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0;
        padding: 0 16px;
    }
    
    .quick_filtr_block_item{
        display: flex;
        flex-direction: column;
        margin-bottom: 8px;
        box-shadow: 0 0 10px rgb(21 34 66 / 4%), 0 0 20px rgb(21 34 66 / 10%);
        border-radius: 4px;
        background: #fff;
        padding: 12px;
        width: 49%;
        color: #152242;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        text-decoration: none;
    }
    
    .quick_filtr_block_item img{
        margin-bottom: 8px;
        width: 24px;
        height: 24px;
    }

    .quick-filter-top  .single_button_select_box_label {
        height: unset;
        align-items: center;
        background-color: transparent;
        border: unset;
        box-shadow: none;
        color: #242629;
        font-weight: 600;
        justify-content: start;
        padding: 0;
        border-bottom: 2px solid transparent;
    }

    .quick-filter-top  .single_button_select_box_label_span{
        padding: 0.5rem 0;
        color: #848484;
        font-size: 16px;
    }

    .quick-filter-top  .single_button_select_box_label.active{
        border-bottom: 2px solid var(--form-button-color);
    }

    .quick-filter-top .single_button_select_box_label_span.active_span{
        color: var(--form-button-color);
    }

    .quick-filter-top .single_button_select_box_label+.single_button_select_box_label {
        margin-left: 1rem;
    }

    .quick-filter-body{
        margin-top: 0.625rem !important;
        overflow-y: hidden;
    }

    .quick_filtr_block-scroll{
        width: auto !important;
        overflow-x: auto;
    }

    .quick_filtr_block-fieldset{
        position: relative;
        display: flex;
        justify-content: left;
        padding: 0;
        margin: 0;
        border: 0;
    }

    .quick_filtr_block-fieldset .single_button_select_box_label{
        border-radius: 0.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
        background-color: #fff;
        border: 1px solid #eaeaea;
        color: #333;
        z-index: 1;
        margin-bottom: 0;
        transition: color .2s,background-color .2s,border-color .2s;
        padding: 0.625rem 0.875rem !important;
        height: 100%;
        min-width: 150px;
        min-height: 70px;
    }

    .quick_filtr_block-fieldset  .single_button_select_box_label.active{
        border-color: var(--form-button-color);
        background-color: #ebfff27d;
    }

    .quick-filter-top .single_button_select_box_label_span.active_span{
        color: var(--form-button-color);
    }

    .quick_filtr_block-fieldset .single_button_select_box_label_span{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        white-space: nowrap;
        font-size: 14px;
        overflow: unset;
        line-height: 1.25rem;
    }

    .quick_filtr_block-fieldset .single_button_select_box_label_span img{
        display: block;
        margin-bottom: 0.375rem;
    }

    .quick_filtr_block-fieldset .single_button_select_box_label:not(:first-child) {
        margin-left: 0.375rem!important;
    }

</style>