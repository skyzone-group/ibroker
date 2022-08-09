<template>
    <div>
		<div id="mainCarousel" class="carousel w-10/12 max-w-5xl mx-auto">
  <div
    class="carousel__slide"
    data-src="https://lipsum.app/id/1/900x600"
    data-fancybox="gallery"
    data-caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis ultricies ipsum, a maximus ligula dignissim in. Sed consectetur tellus egestas, consequat dolor at, tempus augue. Morbi quis ipsum quis velit."
  >
    <img src="https://lipsum.app/id/1/600x400" />
  </div>
  <div
    class="carousel__slide"
    data-src="https://lipsum.app/id/2/900x600"
    data-fancybox="gallery"
    data-caption="Ut semper, justo eget vehicula vestibulum, enim enim suscipit lectus, et sagittis nibh risus vel metus. Quisque eu ornare ante, et gravida mauris"
  >
    <img src="https://lipsum.app/id/2/600x400" />
  </div>
  <div
    class="carousel__slide"
    data-src="https://lipsum.app/id/3/900x600"
    data-fancybox="gallery"
    data-caption="Hello 🖐"
  >
    <img src="https://lipsum.app/id/3/600x400" />
  </div>
  <div
    class="carousel__slide"
    data-src="https://lipsum.app/id/4/900x600"
    data-fancybox="gallery"
    data-caption="Another caption"
  >
    <img src="https://lipsum.app/id/4/600x400" />
  </div>
  <div
    class="carousel__slide"
    data-src="https://lipsum.app/id/5/900x600"
    data-fancybox="gallery"
  >
    <img data-lazy-src="https://lipsum.app/id/5/600x400" />
  </div>
  <div
    class="carousel__slide"
    data-src="https://lipsum.app/id/6/900x600"
    data-fancybox="gallery"
  >
    <img src="https://lipsum.app/id/6/600x400" />
  </div>
  <div
    class="carousel__slide"
    data-src="https://lipsum.app/id/7/900x600"
    data-fancybox="gallery"
  >
    <img src="https://lipsum.app/id/7/600x400" />
  </div>
</div>

<div id="thumbCarousel" class="carousel max-w-xl mx-auto">
  <div class="carousel__slide">
    <img class="panzoom__content" src="https://lipsum.app/id/1/100x100" />
  </div>
  <div class="carousel__slide">
    <img class="panzoom__content" src="https://lipsum.app/id/2/100x100" />
  </div>
  <div class="carousel__slide">
    <img class="panzoom__content" src="https://lipsum.app/id/3/100x100" />
  </div>
  <div class="carousel__slide">
    <img class="panzoom__content" src="https://lipsum.app/id/4/100x100" />
  </div>
  <div class="carousel__slide">
    <img class="panzoom__content" src="https://lipsum.app/id/5/100x100" />
  </div>
  <div class="carousel__slide">
    <img class="panzoom__content" src="https://lipsum.app/id/6/100x100" />
  </div>
  <div class="carousel__slide">
    <img class="panzoom__content" src="https://lipsum.app/id/7/100x100" />
  </div>
</div>
    </div>
</template>

<script>
export default {
    data () {
		return {
			
		}
	},
	
    mounted () {
		
	}
}
</script>

<style>
#mainCarousel {
  width: 600px;
  margin: 0 auto 1rem auto;

  --carousel-button-color: #170724;
  --carousel-button-bg: #fff;
  --carousel-button-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%),
    0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);

  --carousel-button-svg-width: 20px;
  --carousel-button-svg-height: 20px;
  --carousel-button-svg-stroke-width: 2.5;
}

#mainCarousel .carousel__slide {
  width: 100%;
  padding: 0;
}

#mainCarousel .carousel__button.is-prev {
  left: -1.5rem;
}

#mainCarousel .carousel__button.is-next {
  right: -1.5rem;
}

#mainCarousel .carousel__button:focus {
  outline: none;
  box-shadow: 0 0 0 4px #A78BFA;
}

#thumbCarousel .carousel__slide {
  opacity: 0.5;
  padding: 0;
  margin: 0.25rem;
  width: 96px;
  height: 64px;
}

#thumbCarousel .carousel__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

#thumbCarousel .carousel__slide.is-nav-selected {
  opacity: 1;
}
</style>