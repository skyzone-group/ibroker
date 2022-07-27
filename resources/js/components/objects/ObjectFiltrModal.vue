<template>
    <div class="object_modal_box">
        <!-- Modal -->
        <div class="modal fade" id="objectModal" tabindex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
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
                                    <div class="col-lg-6 col-md-6 col-12 mb-3">
                                        <div class="field">
                                            <label for="username1">Регион</label>
                                            <Dropdown v-model="selectedRegion" :options="regions" optionLabel="name" optionValue="id" placeholder="Выберите регио..." class="w-100" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12 mb-3">
                                        <div class="field">
                                            <label for="username1">Район</label>
                                            <Dropdown v-model="selectedDistrict" :options="districts" optionLabel="name" optionValue="id" placeholder="Выберите регио..." class="w-100" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3">
                                        <div class="field">
                                            <label for="username1">Тир Недвижимость</label>
                                            <Dropdown v-model="selectedRealEstate" :options="typeEstate" optionLabel="name" optionValue="id" placeholder="Тип недви..." class="w-100" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12 mb-lg-0 mb-md-0 mb-3">
                                        <div class="field">
                                            <label for="object_id">Номер объявления (ID)</label>
                                            <InputText id="object_id" v-model="objectId"  placeholder="ID" class="w-100"/>
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
import '../../../../public/app-assets/css/bootstrap-extended.min.css'
//import '../../../../public/app-assets/css/bootstrap.css'
import '../../../../public/app-assets/css/colors.min.css'
import '../../../../public/app-assets/css/components.min.css'

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

<style>
.object_modal_box .p-dropdown-panel{
    z-index: 1080 !important;
}
@media (min-width: 576px){
    .object_modal_box .modal-dialog {
        max-width: 600px;
        margin: 1.75rem auto;
    }
}
</style>