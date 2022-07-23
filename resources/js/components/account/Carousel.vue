<template>
    <Carousel :settings="settings" :breakpoints="breakpoints">
        <template #slides>
            <Slide v-for="(image) in images" :key="image.id">
                <a href="" class="slider-link">
                    <div class="slider-link-contet">
                        <div class="slider-link-contet-div">
                            <span>{{image.text}}</span>
                        </div>
                    </div>
                    <div class="slider-link-img">
                        <img :src="image.url" />
                    </div>
                </a>
            </Slide>
        </template>

        <template #addons>
        <Navigation />
        </template>
    </Carousel>
</template>

<script>
import { defineComponent, toRefs } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
    name: "Basic",
    props: {
        images: Array,
    },
    components: {
        Carousel,
        Slide,
        Navigation,
    },

    setup(props, { emit }) {
        const { images } = toRefs(props);
        return { images};
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
                    itemsToShow: 3,
                    snapAlign: 'start',
                },
            },
        }
    },
});
</script>

<style scoped>
.carousel__prev--in-active,
.carousel__next--in-active {
    display: none;
}
/* .carousel {
    padding: 0 20px;
} */

.carousel__track{
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    height: 110px;
    margin: 0px -5px;
    padding: 0px;
    position: relative;
    touch-action: pan-y pinch-zoom;
    transform: translate3d(0px, 0px, 0px);
    width: auto;
    transition: all 0s ease 0s;
}
.carousel__slide{
    /* margin: 0 20px 0 0; */
    box-sizing: border-box;
    display: inline-block;
    left: 0px;
    list-style-type: none;
    margin: auto 5px;
    position: unset;
    top: 0px;
    transform: scale(1);
    transition: transform 0.4s linear 0s;
    vertical-align: top;
}

.slider-link{
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    box-shadow: 0 4px 16px 0 rgb(0 0 0 / 5%);
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    background-color: #fff;
    min-height: 110px;
    color: inherit;
    text-decoration: inherit;
}

.slider-link-contet{
    font-size: 16px;
}

.slider-link-contet-div{
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    text-align: left;
}

.slider-link-img{
    display: flex;
    flex-shrink: 0;
    align-items: flex-end;
    max-width: 56px;
}

.slider-link-img img{
    width: 100%;
    max-width: 100%;
}
/* ******************************************** */
@media (min-width: 768px){
    .slider-link-contet {
        margin: 14px 14px 14px 20px;
        line-height: 1.25;
    }
    
}

@media (max-width: 450px){
    .slider-link-contet {
        margin: 9px;
    }
}
</style>