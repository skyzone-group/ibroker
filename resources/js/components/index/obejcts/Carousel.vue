<template>
    <div class="objects_carousel">
        <Carousel :settings="settings" :breakpoints="breakpoints">
            <template #slides>
                <Slide v-for="(card) in cards" :key="card.id">
                    <div class="objects_carousel_item">
                        <a :href="card.object_id" class="text-dark">
                            <div class="objects_carousel_item_box">
                                <div class="objects_carousel_item_box_header_top">
                                    <picture class="h-auto">
                                        <source style="object-fit: cover;" class="w-100" :srcset="card.url" type="image/png">
                                        <img :src="card.url" style="object-fit: cover;" class="w-100" alt="">
                                    </picture>
                                    <div class="header_top_type">
                                        <span>Arenda</span>
                                    </div>
                                </div>
                                <div class="objects_carousel_item_box_content">
                                    <div class="objects_carousel_item_box_content_price d-flex justify-content-start text-left flex-column">
                                        <p class="total_price">{{card.price}}</p>
                                        <span>{{card.monthly_price}}</span>
                                    </div>
                                    <div class="objects_carousel_item_box_content_title">
                                        <h4>
                                            <a href="#!">
                                                {{card.text}}
                                            </a>
                                        </h4>
                                    </div>
                                    <div class="objects_carousel_item_box_content_location text-left">
                                        <a href="#!" class="text-left">
                                            <i class="feather icon-map-pin"></i>
                                            Юсуфа Хос Ходжиба (улица), Яккасарайский район
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </Slide>
            </template>
    
            <template #addons>
            <Navigation />
            </template>
        </Carousel>
    </div>
</template>

<script>
import { defineComponent, toRefs } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
    name: "Basic",
    props: {
        cards: Array,
    },
    components: {
        Carousel,
        Slide,
        Navigation,
    },

    setup(props, { emit }) {
        const { cards } = toRefs(props);
        return { cards};
    },
    
    data() {
        return {
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            breakpoints: {
                // 700px and up
                400: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                },
                500: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                },
                600: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                },
                700: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                767: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                991: {
                    itemsToShow: 3,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 4,
                    snapAlign: 'start',
                },
            },
        }
    },
});
</script>

<style>
.objects_carousel .carousel__prev--in-active,
.objects_carousel .carousel__next--in-active {
    display: none;
}
.objects_carousel .carousel__slide{
    padding: 0 10px;
}

.objects_carousel_item{
    background-color: #fff;
    border-radius: 5px;
    flex-grow: 1;
    overflow: hidden;
    position: relative;
    transition: box-shadow .15s;
}

.objects_carousel_item_box{
    cursor: pointer;
}

.objects_carousel_item_box::after{
    border: 1px solid #d3d4d4;
    border-radius: 5px;
    bottom: 0;
    content: "";
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: border-color .15s;
}

.objects_carousel_item_box_header_top{
    align-items: center;
    background-color: #e5e5e5;
    display: flex;
    flex-direction: column;
    height: 154px;
    overflow: hidden;
    position: relative;
}

.header_top_type{
    position: absolute;
    right: 10px;
    top: 10px;
}

.header_top_type span{
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    background-color: #FF5A3C;
    color: #fff;
    padding: 3px 8px;
    text-transform: uppercase;
    line-height: 25px;
    border-radius: 3px;
}

.objects_carousel_item_box_content{
    padding: 16px;
}

.objects_carousel_item_box_content_price .total_price{
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    margin: 0;
}

.objects_carousel_item_box_content_price span{
    font-size: 13px;
    line-height: 25px;
    color: #535353;
}

.objects_carousel_item_box_content_title h4{
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
    text-align: left;
}

.objects_carousel_item_box_content_title h4 a{
    color: #000;
}

.objects_carousel_item_box_content_location{
    margin: 0;
    font-size: 14px;
    font-weight: 500;
}

.objects_carousel_item_box_content_location a{
    color: #5f5e5e;
}

.objects_carousel_item_box_content_location a i{
    margin-right: 3px;
}

/* ********************************************* */
@media (max-width: 475px){
    .hot_objects_box_header-title h2 img{
        display: none;
    }
    .hot_objects_box_header-title h2 {
        font-size: 20px !important;
    }
    
    .hot_objects_box_header-title a span {
        font-size: 14px !important;
    }
    
    .hot_objects_box {
        padding: 24px !important;
        margin-top: 26px !important;
    }
}

@media (max-width: 450px){
    .objects_carousel .carousel__slide {
        padding: 0 !important;
    }
}
</style>