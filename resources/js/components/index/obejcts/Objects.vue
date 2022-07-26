<template>
    <div class="hot_objects mb-5">
        <div class="hot_objects_div">
            <div class="container_fluid">
                <div class="hot_objects_box">
                    <div class="hot_objects_box_header">
                        <div class="hot_objects_box_header-title d-flex justify-content-between">
                            <h2>Выгодные предложения</h2>
                            <a href="#!">
                                <span>
                                    Искать
                                </span>
                            </a>
                        </div>
                        <div class="hot_objects_box_header_content">
                            Успейте найти объявления со специальным значком, чтобы купить квартиру по цене ниже рыночной
                        </div>
                    </div>
                    <div class="hot_objects_box_slider">
                        <Carousel :cards="cards" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Carousel from './Carousel.vue'
import { ref } from "vue";
export default{
    components: {
        Carousel
    },
    setup() {
        const _cards = [
            { 
                id: 1, 
                text: "Ипотечный калькулятор",
                url: "https://storage-cdn.cian.site/assiscrd/images/239-1613580565.png" 
            },
            { 
                id: 2,
                text: "Ипотека или копить на вкладе?", 
                url: "https://storage-cdn.cian.site/assiscrd/images/235-1609257911.png" 
            },
            { 
                id: 3,
                text: "Бесплатно оцените квартиру", 
                url: "https://storage-cdn.cian.site/assiscrd/images/159-1575470418.png" 
            },
            { 
                id: 4,
                text: "Снять квартиру без посредника", 
                url: "https://storage-cdn.cian.site/assiscrd/images/21-1573816224.png" 
            },
            { 
                id: 5,
                text: "Снять квартиру без посредника", 
                url: "https://storage-cdn.cian.site/assiscrd/images/21-1573816224.png" 
            },
            { 
                id: 6,
                text: "Снять квартиру без посредника", 
                url: "https://storage-cdn.cian.site/assiscrd/images/21-1573816224.png" 
            },
        ];
        const cards = ref(_cards);
        return {cards };
    },
}
</script>

<style>
.hot_objects_box{
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 8px 0 #2426290a;
    padding: 32px;
    margin-top: 48px;
}

.hot_objects_box_header-title{
    margin-bottom: -28px;
}

.hot_objects_box_header-title h2{
    color: #242629;
    display: inline-block;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    margin-bottom: 32px;
}

.hot_objects_box_header-title a span{
    border-bottom: 1px solid var(--primary_100);
    color: var(--primary_100);
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    line-height: 20px;
}

.hot_objects_box_header_content{
    color: #737476;
    display: inline-block;
    margin-bottom: 32px;
}
</style>