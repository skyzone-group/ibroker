<template>
    <div class="rent-page">
        <div class="rent-page-div">
            <div  class="filter-block">
                <div class="filter-block-inputs">
                    <div class="filter-block-inputs_content">
                        <div class="filter-block-inputs_content-top">
                            <div class="filter-block-inputs_content-top-txt">
                                <h1 class="title">Аренда недвижимости в Ташкенте</h1>
                                <filter-block></filter-block>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="filter-block-back"></div>
                <div class="filter-block-back__img commercial__img rent__img"></div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../../components/SiteNavBar.vue'
import FilterBlock from '../../components/index/FilterBlock.vue'
export default {
    components: {
        FilterBlock
    },
    data() {
        return {
            sectionComponents: false,
            filterBlock: false,
            showPhone: false,
        }
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 991){
                this.sectionComponents = true;
                this.filterBlock = false;
                return;
            }
            this.sectionComponents = false;
            this.filterBlock = true;
        },
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen()
    },
}
</script>


<style>
.rent__img{
    background: url('../../../../public/images/rent-page-banner.jpg') !important;
    background-position: 50% 100% !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
}
</style>