<template>
    <div class="home_page">
        <div class="home_page_div">
            <div class="filter-block">
                <div class="filter-block-inputs">
                    
                </div>
                <div class="filter-block-back"></div>
                <div class="filter-block-back__img"></div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../../components/SiteNavBar.vue'
export default {
    components: {
        NavBar
    },
    setup() {
        
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
</style>