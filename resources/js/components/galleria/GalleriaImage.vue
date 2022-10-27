<template>
  <div class="object-image-gallery">
    <div class="gallery_box-container">
      <div class="gallery_box-container-component">
        <div class="gallery_box-container-component-column">
          <swiper
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }"
            :loop="true"
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="mySwiper2 gallery-swipper"
            >
            <swiper-slide v-for="(image,imageIndex) in images" :key="image.id" @click="index = imageIndex" :data-src="`/file/${image.name}`" data-fancybox="gallery">
              <img :src="`/file/${image.name}`" class="w-100 h-100 gallery_box-swiper-image" />
            </swiper-slide>
          </swiper>
          <swiper
            @swiper="setThumbsSwiper"
            :loop="true"
            :spaceBetween="10"
            :slidesPerView="6"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper thumbs-swiper"
            >
          <swiper-slide v-for="image in images" :key="image.id">
              <img :src="`/file/${image.name}`" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
// import required modules
import {FreeMode,Navigation,Thumbs} from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: {
        type: Array,
    }
  },
  data() {
    return {
      thumbsSwiper: null,
      index: null
    }
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    }
  },
  setup() {
    return {
      modules: [FreeMode,Navigation,Thumbs],
    };
  }
}
</script>

<style>
.object-image-gallery .swiper-button-next, .swiper-button-prev{
  width: var(--carousel-button-width, 48px) !important;
  height: var(--carousel-button-height, 48px) !important;
  padding: 0;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: all;
  cursor: pointer;
  color: var(--carousel-button-color, currentColor);
  border-radius: var(--carousel-button-border-radius, 50%);
  background: #fff !important;
  transition: opacity .15s ease !important;
}

.object-image-gallery .swiper-button-next:after, .swiper-button-prev:after {
  font-size: 20px !important;
}

.object-image-gallery .swiper-button-next:focus, .swiper-button-prev:focus {
  outline: none;
  box-shadow: 0 0 0 4px #a78bfa !important;
}
.object-image-gallery .swiper-button-next:hover, .swiper-button-prev:hover {
  outline: none;
  box-shadow: 0 0 0 4px #a78bfa !important;
}

.object-image-gallery  .gallery-swipper{
  height: 440px;
  width: 100% !important;
  margin: 0 0 10px 0; 
}

/* .object-image-gallery  .gallery-swipper .gallery_box-swiper-image{
  padding: 0 30px;
} */

.object-image-gallery  .gallery-swipper .swiper-wrapper .swiper-slide{
  background: #EDEEEE !important;
  padding: 0 30px !important;
  border-radius: 4px !important;
}

.object-image-gallery .thumbs-swiper .swiper-wrapper .swiper-slide{
  height: 64px !important;
  margin: 0.25rem !important;
  opacity: 0.5;
}

.object-image-gallery .thumbs-swiper .swiper-wrapper .swiper-slide.swiper-slide-thumb-active{
  opacity: 1 !important;
}

.object-image-gallery .thumbs-swiper .swiper-wrapper .swiper-slide img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}
/* .object-image-gallery .thumbs-swiper .swiper-wrapper{
  transform: translate3d(4px, 0px, 0px) scale(1) !important;
} */
</style>