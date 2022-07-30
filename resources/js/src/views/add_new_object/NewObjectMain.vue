<template>
    <div class="new_object_frontend">
        <div class="new_object_main_div">
            <div class="new_object_main_div_block">
                <header class="block_header d-flex align-items-center">
                    <b class="block_title title">Добавление объявления</b>
                    <span class="text-secondary">Вы можете бесплатно добавить до 2 объявлений в месяц</span>
                </header>
                <div class="block__body">
                    <div class="form">
                        <div class="row">
                            <div class="col-lg-9">
                                <form id="listingEditForm" method="POST" role="form">
                                    <div class="form-card">
                                        <ad-type></ad-type>
                                    </div>
                                    <div class="form-card">
                                        <address-map></address-map>
                                    </div>
                                    <div class="form-card">
                                        <upload-image></upload-image>
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-3">
                                <form-indicator></form-indicator>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import FormIndicator from '../../../components/add_new_object/StepFormIndicator.vue'
// Form
import AdType from '../../../components/add_new_object/form/FormAdType.vue'
import AddressMap from '../../../components/add_new_object/form/FormAdress.vue'
import UploadImage from '../../../components/add_new_object/form/FormImages.vue'

export default {
    components: {
        FormIndicator,
        AdType,
        AddressMap,
        UploadImage
    }
}
</script>


<style>
.new_object_frontend{
    display: flex;
    overflow: hidden;
    flex: 1 1;
    flex-direction: column;
}

.block_header{
    margin-bottom: 1.875rem;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid #cccbca;
}

.block_title{
    display: inline-block;
    margin-right: 1.125rem;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #303549;
}

.text-secondary{
    color: #588ed8!important;
}

.form-card{
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.2rem 0.4rem 0 #00000012;
    padding: 3.2rem;
    width: 100%;
    margin-bottom: 20px;
}

.single_button_select_box_label{
    height: 40px;
    align-items: center;
    background-color: #fff;
    border: 1px solid #d3d4d4;
    box-shadow: none;
    box-sizing: border-box;
    color: #242629;
    cursor: pointer;
    display: flex;
    font: 500 14px/20px;
    justify-content: center;
    letter-spacing: normal;
    margin: 0;
    max-width: 100%;
    min-width: 0;
    outline: none;
    padding: 0 16px;
    position: relative;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
}

.single_button_select_box_label_inpt{
    box-shadow: none;
    box-sizing: border-box;
    height: 0;
    opacity: 0;
    outline: none;
    position: absolute;
    width: 0;
    z-index: -1;
}

.single_button_select_box_label_span{
    color: #242629;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: normal;
    margin: 0;
    overflow: hidden;
    padding: 0;
    text-decoration: none;
    text-indent: 0;
    text-overflow: ellipsis;
    text-shadow: none;
    text-transform: none;
    user-select: none;
    white-space: nowrap;
}



.single_button_select_box_label:first-child {
    border-radius: 5px 0 0 5px;
}

.single_button_select_box_label:not(:last-child) {
    border-right: 0;
}

.single_button_select_box_label:last-child {
    border-radius: 0 5px 5px 0;
}

.single_button_select_box_label.active{
    background-color: var(--form-button-color);
    border-bottom-color: var(--form-button-color);
    border-top-color: var(--form-button-color);
    color: #fff;
}
.single_button_select_box_label_span.active_span{
    color: #fff;
}

.single_button_select_box_label.active:first-child {
    border-left-color: var(--form-button-color);
}
.single_button_select_box_label.active:last-child {
    border-left-color: var(--form-button-color);
}
</style>