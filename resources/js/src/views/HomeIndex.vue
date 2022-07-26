<template>
    <div class="home_page">
        <div class="home_page_div">
            <div v-show="filterBlock" class="filter-block">
                <div class="filter-block-inputs">
                    <filter-block></filter-block>
                </div>
                <div class="filter-block-back"></div>
                <div class="filter-block-back__img"></div>
            </div>
            <div v-show="sectionComponents" class="section__components m-0">
                <quick-filtr></quick-filtr>
                <services></services>
            </div>
            <useful-links></useful-links>
        </div>
    </div>
</template>

<script>
import NavBar from '../../components/SiteNavBar.vue'
import FilterBlock from '../../components/index/FilterBlock.vue'
import QuickFiltr from '../../components/index/section_component/QuickFilter.vue'
import Services from '../../components/index/section_component/Services.vue'
import UsefulLinks from '../../components/index/UsefulLinks.vue'
export default {
    components: {
        NavBar,
        FilterBlock,
        QuickFiltr,
        Services,
        UsefulLinks
    },
    data() {
        return {
            sectionComponents: false,
            filterBlock: false,
        }
    },
    setup() {
        
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
.filter-block{
    padding-top: 94px;
    position: relative;
    height: 490px;
}

.filter-block-inputs{
    position: relative;
    z-index: 3;
    padding: 0 16px;
}

.filter-block-back{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(24,41,48,.4);
    width: 100%;
    height: 490px;
}

.filter-block-back__img{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-position: 50% 100% !important;
    background-size: cover !important;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background: url('../../../../public/images/header_banner.jpg');
}

.filter-block-inputs{
    position: relative;
    z-index: 3;
    padding: 0 16px;
}
</style>