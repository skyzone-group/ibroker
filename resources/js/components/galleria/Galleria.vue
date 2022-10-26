<template>
    <div id="mainCarousel" class="carousel w-10/12 max-w-5xl mx-auto">
        <div class="carousel__slide" data-src="https://lipsum.app/id/1/900x600" data-fancybox="gallery">
            <img src="https://lipsum.app/id/1/600x400" />
        </div>
        <div class="carousel__slide" data-src="https://lipsum.app/id/2/900x600" data-fancybox="gallery">
            <img src="https://lipsum.app/id/2/600x400" />
        </div>
        <div class="carousel__slide" data-src="https://lipsum.app/id/3/900x600" data-fancybox="gallery">
            <img src="https://lipsum.app/id/3/600x400" />
        </div>
        <div class="carousel__slide" data-src="https://lipsum.app/id/4/900x600" data-fancybox="gallery">
            <img src="https://lipsum.app/id/4/600x400" />
        </div>
        <div class="carousel__slide" data-src="https://lipsum.app/id/5/900x600" data-fancybox="gallery">
            <img data-lazy-src="https://lipsum.app/id/5/600x400" />
        </div>
        <div class="carousel__slide" data-src="https://lipsum.app/id/6/900x600" data-fancybox="gallery">
            <img src="https://lipsum.app/id/6/600x400" />
        </div>
        <div class="carousel__slide" data-src="https://lipsum.app/id/7/900x600" data-fancybox="gallery">
            <img src="https://lipsum.app/id/7/600x400" />
        </div>
    </div>

    <div id="thumbCarousel" class="carousel mx-auto">
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
</template>

<script>


export default {
    props: {
        images: {
            type: Array,
        }
    },
    data () {
		return {
			
		}
	},
	
    mounted () {
		
	}
}
</script>

<style>
/* max-w-xl  */
    #mainCarousel {
        height: 360px;
        width: 100% !important;
        margin: 0 0 10px 0;
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
        background: #EDEEEE !important;
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
        width: 104px !important;
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
    
    
    /* ************************************* MEDIA **************************************** */
    @media only screen and (max-width: 575px){
        #mainCarousel {
            min-height: 220px;
            height: 100%;
        }
        
        #mainCarousel .carousel__slide {
            padding: 0 7px !important;
        }
        
        .carousel__button{
            width: 30px !important;
            height: 30px !important;
        }
        
        .carousel__nav{
            display: none !important;
        }
        
        .h1_style{
            font-size: 16px;
            font-weight: 500;
            line-height: 21px;
        }
    }
    @media only screen and (max-width: 475px){
        #thumbCarousel .carousel__slide {
            width: 80px !important;
            height: 46px !important;
        }
        
        .offerMap_style {
            margin: 0 -15px;
        }
        
        .main_block__column{
            flex-direction: column;
            justify-content: flex-start;
        }
        
        .main_block__price{
            margin-bottom: 20px;
            align-items: flex-start;
        }
        
        .main_block__price_box{
            align-items: flex-start;
        }
        
        .main_block__location{
            display: none;
        }
        
        .main_block__mainDetails_ul_li {
            padding-right: 16px;
        }
        
        .main_block__mainDetails_ul_li .number_area{
            font-size: 14px;
            line-height: 20px;
        }
        
        .main_block__features_block ul,
        .product-page__section_ul {
            column-count: 1;
        }
    }
</style>