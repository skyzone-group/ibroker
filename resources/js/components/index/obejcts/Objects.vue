<template>
    <div class="hot_objects mb-5">
        <div class="hot_objects_div">
            <div class="container_fluid">
                <div class="hot_objects_box">
                    <div class="hot_objects_box_header">
                        <div class="hot_objects_box_header-title d-flex justify-content-between">
                            <h2 class="d-flex align-items-center">Выгодные предложения 
                                <img src="images/hot_icon.svg" alt="">
                            </h2>
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
                text: "2-комн. квартира, 5/7 этаж, 70 м²",
                url: "images/luxury-house-4.jpg",
                price: "46 500 y.e",
                monthly_price: "652 y.e / м²",
                object_id: "12345678" 
            },
            { 
                id: 2,
                text: "3-комн. квартира, 5/7 этаж, 70 м²", 
                url: "images/luxury-house-6.jpg",
                price: "46 500 y.e",
                monthly_price: "652 y.e / м²",
                object_id: "12345678" 
            },
            { 
                id: 3,
                text: "2-комн. квартира, 5/7 этаж, 70 м²", 
                url: "images/luxury-house.jpg",
                price: "46 500 y.e",
                monthly_price: "652 y.e / м²",
                object_id: "12345678"
            },
            { 
                id: 4,
                text: "4-комн. квартира, 5/7 этаж, 70 м²", 
                url: "images/luxury-house-6.jpg",
                price: "46 500 y.e",
                monthly_price: "652 y.e / м²",
                object_id: "12345678" 
            },
            { 
                id: 5,
                text: "2-комн. квартира, 5/7 этаж, 70 м²", 
                url: "images/luxury-house-5.jpg",
                price: "46 500 y.e",
                monthly_price: "652 y.e / м²",
                object_id: "12345678" 
            },
            { 
                id: 6,
                text: "2-комн. квартира, 5/7 этаж, 70 м²", 
                url: "images/luxury-house-3.jpg",
                price: "46 500 y.e",
                monthly_price: "652 y.e / м²",
                object_id: "12345678" 
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