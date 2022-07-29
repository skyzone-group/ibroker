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
export default {
    components: {
        FormIndicator,
        AdType
    }
}
</script>


<style scoped>
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
}


</style>