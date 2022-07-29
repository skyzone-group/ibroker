<template>
    <div class="favorites-frontend_box_block_objects_item">
        <div class="listing__preview">
            <div class="listing__stair">
                <div class="listing__body">
                    <div class="listing__photo">
                        <a href="#!">
                            <span title="Количество фотографий" class="listing__photos">
                                <i class="feather icon-camera icon"></i>
                                3
                            </span>
                            <img src="../../../../../public/images/architecture.jpg" alt="" width="200" height="160" class="img-fluid lazy loaded">
                        </a>
                    </div>
                </div>
                <div class="listing__footer align-self-start">
                    <div class="listing__cost">
                        <div class="listing__price">
                            135 782 у. е.
                        </div>
                        <div class="listing__price-m">
                            733.96 у. е. / м²
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="listing__details">
            <div class="listing__stair">
                <div class="listing__body">
                    <div class="listing__body-heading d-flex">
                        <a href="#!" class="listing__link">
                            <p class="listing__title title">Квартира на продажу</p>
                            <span class="listing__subtitle title">город Ташкент, Яшнободский район, Корасув (Лисунова) </span>
                        </a>
                    </div>
                    <div class="listing__params">
                        <span title="Площадь" class="listing__param">
                            <img src="../../../../../public/images/icons/square.png" alt="">
                            <span class="listing__param-text">Площадь: 185 м²</span>
                        </span>
                        <span title="Количество комнат" class="listing__param">
                            <img src="../../../../../public/images/icons/room.png" alt="">
                            <span class="listing__param-text">Комнат: 4</span>
                        </span>
                        <span title="Этаж" class="listing__param">
                            <img src="../../../../../public/images/icons/building.png" alt="">
                            <span class="listing__param-text">Этаж: 10/11</span>
                        </span>
                    </div>
                    <div class="listing__description">
                        <p>
                            <span>Мы готовы представить вам заманчивое предложение – приобретая любой пентхаус в жилом комплексе SKY BUILDS – вы получите террасу с видом на весь город!
                            Собственная терраса в ЖК SKY BUILDS – это 50-6...</span>
                            <a href="#!" class="listing__description_more">
                                Подробнее...
                            </a>
                        </p>
                    </div>
                    <div class="listing__date mt-2">
                        <span class="listing__date-text">26 Июля, 12:05</span>
                    </div>
                </div>
                <div class="listing__footer">
                    <div class="row justify-content-end">
                        <div class="col col-auto align-self-end">
                            <small-button v-tooltip.bottom="'Отправить сообщение автору'">
                                <i class="feather icon-mail"></i>
                            </small-button>
                            <small-button v-tooltip.bottom="'Удалить'">
                                <i class="feather icon-trash"></i>
                            </small-button>
                            <contact-button></contact-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import ContactButton from '../../UI/ContactButton.vue'
import SmallButton from '../../UI/SmallButton.vue'
export default {
    components: {
        ContactButton,
        SmallButton
    },
    setup() {
        
    },
}
</script>

<style scoped>
.favorites-frontend_box_block_objects_item{
    border-bottom: 1px solid #f1f2f4;
    background-color: #fff;
    padding: 15px;
    border-radius: 4px;
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 1rem;
    transition: .2s ease;
}

.favorites-frontend_box_block_objects_item:hover{
    border-bottom: 1px solid var(--primary_100);
}
.listing__preview{
    position: relative;
    margin-right: 1.125rem;
    -webkit-box-flex: 0;
    flex: 0 0 200px;
    max-width: 200px;
}

.listing__stair{
    display: flex;
    height: 100%;
    flex-wrap: nowrap;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
}

.listing__body{
    -webkit-box-flex: 2;
    flex-grow: 2;
}

.listing__photo{
    position: relative;
}

.listing__photos{
    position: absolute;
    bottom: 0;
    line-height: 1.5;
    padding: 0.1875rem 0.625rem;
    font-size: .75rem;
    display: block;
    left: 0;
    font-weight: 700;
    color: #fff;
    background: rgba(0,0,0,.8);
}

.listing__photos .icon {
    font-size: 1.0625rem;
    margin-right: 0.125rem;
}

.icon {
    display: inline-block;
    vertical-align: middle;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
    margin-top: -2px;
}

.listing__footer{
    padding-top: 0.375rem;
}

.listing__cost{
    padding: 0 0.625rem;
}

.listing__price{
    line-height: 1.4;
    font-size: 1rem;
    font-weight: 600;
    color: #000;
}

.listing__price-m{
    line-height: 1.3;
    font-size: .8125rem;
    color: #636c72;
}

.listing__details{
    position: relative;
    -webkit-box-flex: 1;
    flex: 1 1 100%;
}
.listing__link {
    display: inline-block;
}

.listing__body-heading .listing__link {
    -webkit-box-flex: 2;
    flex-grow: 2;
    max-width: 100%;
}
.listing__body-heading .listing__link:hover .listing__title{
    color: var(--primary_100) !important;
}
.listing__title {
    margin-bottom: 5px;
    line-height: 1.2;
    font-size: 1rem;
    color: #000;
}

.title {
    font-weight: 600;
    line-height: 1.1;
}

.listing__item.\--search .listing__title {
    margin-bottom: 0.25rem;
}
.listing__item.\--search .listing__subtitle, .listing__item.\--search .listing__title {
    display: block !important;
}


.listing__subtitle {
    margin-bottom: 0.75rem;
    font-size: .875rem;
    font-weight: 400;
    color: #636c72;
    display: block !important;
}

.listing__params{
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 0.6875rem;
    font-size: .875rem;
}

.listing__param{
    display: inline-block;
    margin-right: 1.25rem;
    font-size: .75rem;
    white-space: nowrap;
}

.listing__param img{
    margin-right: 0.1875rem;
    width: 16px;
    height: 16px;
}

.listing__param:last-child {
    margin-right: 0;
}

.listing__description p {
    font-size: .75rem;
}
.listing__description p:last-child {
    margin-bottom: 0;
}

.listing__description p span{
    font-size: 16px;
    color: #000;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.listing__description_more{
    font-size: 14px;
    color: var(--primary_100);
    font-weight: normal;
}

.listing__date{
    display: block;
    font-size: .6875rem;
    color: #999;
}



/* ******************************************* */
@media (max-width: 575px){
    .favorites-frontend_box_block_objects_item{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .listing__preview{
        position: relative;
        margin-right: 0;
        flex: 0 0 200px;
        width: 100%;
        max-width: 100%;
    }
    .listing__preview .img-fluid {
        width: 100%;
    }
    

    
}

</style>