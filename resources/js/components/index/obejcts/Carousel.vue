<template>
    <div class="objects_carousel">
        <Carousel :settings="settings" :breakpoints="breakpoints">
            <template #slides>
                <Slide v-for="(card) in cards" :key="card.id">
                    <div class="objects_carousel_item">
                        <div class="objects_carousel_item_box">
                            <div class="objects_carousel_item_box_header_top">
                                <picture class="h-auto">
                                    <source style="object-fit: cover;" class="w-100" :srcset="card.url" type="image/png">
                                    <img :src="card.url" style="object-fit: cover;" class="w-100" alt="">
                                </picture>
                            </div>
                            <a href="" class="slider-link">
                                <div class="slider-link-contet">
                                    <div class="slider-link-contet-div">
                                        <span>{{card.text}}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
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
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                500: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                600: {
                    itemsToShow: 2,
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
                // 1024 and up
                1024: {
                    itemsToShow: 5,
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
</style>