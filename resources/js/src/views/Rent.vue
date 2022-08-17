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
            
            <div class="rent-page-useful-links my-5">
                <div class="rent-page-useful-links-box">
                    <div class="container_fluid">
                        <h2 class="useful_links_box_title content_h2">Полезные ссылки</h2>
                        <div class="useful_links_box_cards">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="useful_links_box_cards_item">
                                        <div class="useful_links_box_cards_item_block buy_room">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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