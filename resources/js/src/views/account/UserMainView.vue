<template>
    <div class="summary_main">
        <div class="summary_main-div">
            <div class="summary_main-div-content">
                <div class="summary_main-div-wrapper">
                    <div class="summary_main-div-cards">
                        <Carousel :images="images" />
                    </div>
                    <div class="summary_main-div-item">
                        <div class="summary_main-div-item-blocks">
                            <promo-code></promo-code>
                            <confirm-phone></confirm-phone>
                            <saved-objects></saved-objects>
                        </div>
                        <div class="summary_main-div-item-blocks">
                            
                        </div>
                    </div>
                    MainView
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';
import Carousel from '../../../components/account/Carousel.vue'
import PromoCode from '../../../components/account/PromoCode.vue'
import ConfirmPhone from '../../../components/account/ConfirmPhone.vue'
import SavedObjects from '../../../components/account/SavedObjects.vue'
import { ref } from "vue";


export default {
    components: {
        Button,
        Carousel,
        PromoCode,
        ConfirmPhone,
        SavedObjects
    },
    setup() {
        const _images = [
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
        ];
        const images = ref(_images);
        return {images };
    },
    data() {
        return {
            
        }
    },
}
</script>


<style>
    .summary_main{
        display: flex;
        background-color: #f4f4f4;
        overflow: hidden;
        flex: 1 1;
        flex-direction: column;
    }
    
    .summary_main-div{
        display: flex;
        flex: 1 1;
        max-width: 100%;
        margin: 0;
        padding: 0;
    }
    
    .summary_main-div-content{
        display: flex;
        flex: 1 1;
        flex-direction: column;
        overflow: hidden;
        overflow-y: auto;
    }
    
    .summary_main-div-wrapper{
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;
        max-width: 1076px;
    }
    
    .summary_main-div-cards{
        flex-shrink: 0;
        margin: 0 0 20px;
        padding: 20px;
    }
    
    .summary_main-div-item{
        display: flex;
        flex: 0 0 auto;
        margin-bottom: 20px;
    }
    
    .summary_main-div-item-blocks{
        flex: 1 0 auto;
        margin-left: 10px;
        width: 49%;
    }
    
    .summary_main-div-item-blocks:first-child{
        margin-left: 0;
    }
    
    .summary_main-div-item-blocks:nth-child(2){
        overflow: hidden;
    }
</style>