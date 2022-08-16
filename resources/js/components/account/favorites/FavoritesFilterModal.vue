<template>
    <div class="favorites_modal_box">
        <!-- Modal -->
        <div class="modal fade" id="favoritesModal" tabindex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Фильтр</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-form">
                            <form>
                                <div class="modal-body-form-row">
                                    <div class="row">
                                        <div class="col-lg-12 mb-3">
                                            <div class="field">
                                                <span class="favorites_modal_box_title">Тип сделки</span>
                                                <div class="favorites_modal_box_btns d-flex flex-wrap mt-2">
                                                    <span class="favorites_modal_box_btns_item mr-3">
                                                        <label for="deal_type_rent">
                                                            <input type="checkbox" id="deal_type_rent">
                                                            <span>
                                                                Аренда
                                                            </span>
                                                        </label>
                                                    </span>
                                                    <span class="favorites_modal_box_btns_item mr-3">
                                                        <label for="deal_type_sell">
                                                            <input type="checkbox" id="deal_type_sell">
                                                            <span>
                                                                Продажа
                                                            </span>
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="field">
                                                <span class="favorites_modal_box_title">Вид недвижимости</span>
                                                <div class="favorites_modal_box_btns d-flex flex-wrap mt-2">
                                                    <span class="favorites_modal_box_btns_item mr-3">
                                                        <label for="estate_type_residential">
                                                            <input type="checkbox" id="estate_type_residential">
                                                            <span>
                                                                Жилая
                                                            </span>
                                                        </label>
                                                    </span>
                                                    <span class="favorites_modal_box_btns_item mr-3">
                                                        <label for="estate_type_2">
                                                            <input type="checkbox" id="estate_type_2">
                                                            <span>
                                                                Загородная
                                                            </span>
                                                        </label>
                                                    </span>
                                                    <span class="favorites_modal_box_btns_item mr-3">
                                                        <label for="estate_type_3">
                                                            <input type="checkbox" id="estate_type_3">
                                                            <span>
                                                                Коммерческая
                                                            </span>
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                        <button type="button" class="btn btn-primary"> <i class="feather icon-search mr-1"></i> Поиск</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Style
import '../../../../../public/app-assets/css/bootstrap-extended.min.css'
//import '../../../../public/app-assets/css/bootstrap.css'
import '../../../../../public/app-assets/css/colors.min.css'
import '../../../../../public/app-assets/css/components.min.css'

import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
export default {
    components: {
        InputText,
        Dropdown,
    },
    data() {
        return {
            selectedRegion: null,
            selectedDistrict: null,
            selectedRealEstate: null,
            objectId: null,
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
};
</script>

<style scoped>
.favorites_modal_box_btns_item label{
    position: relative;
    border-radius: 4px;
}

.favorites_modal_box_btns_item label input{
    position: absolute;
    opacity: 0;
    z-index: -1;
    width: 0;
    height: 0;
    pointer-events: none;
}

.favorites_modal_box_btns_item label span{
    border: 1px solid #ced1d7;
    display: inline-flex;
    position: relative;
    z-index: 0;
    cursor: pointer;
    border-radius: inherit;
    background: transparent;
    padding: 3px 12px;
    font-size: 14px;
    line-height: 20px;
    user-select: none;
}

.favorites_modal_box_btns_item label input:checked+span{
    z-index: 1;
    border-color: var(--primary_100);;
    background: rgba(21,34,66,.05);
}

.favorites_modal_box_title{
    min-width: 140px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #000;
}
</style>