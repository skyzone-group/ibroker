<template>
    <div id="services">
        <h2 class="section__components_title">Сервисы</h2>
        <div class="services_div">
            <div class="services_div_wrapper">
                <ul class="services_div_wrapper_ul">
                    <li v-for="item in services" :key="item.id" class="services_div_wrapper_ul_li justify-content-center">
                        <a href="#!" class="services_div_wrapper_ul_li_link">
                            <img :src="item.image" alt="">
                            <div class="services_div_wrapper_ul_li_link_content">
                                <span class="services_div_wrapper_ul_li_link_span">{{ item.text }}</span>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul class="services_div_wrapper_ul">
                    <li v-for="item in services_second" :key="item.id" class="services_div_wrapper_ul_li justify-content-center">
                        <a href="#!" class="services_div_wrapper_ul_li_link">
                            <img :src="item.image" alt="">
                            <div class="services_div_wrapper_ul_li_link_content">
                                <span class="services_div_wrapper_ul_li_link_span">{{ item.text }}</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: [
                {
                    id: 1,
                    image: 'images/icons/services/icon-1.svg',
                    text: "Акции и скидки в ЖК"
                },
                {
                    id: 2,
                    image: 'images/icons/services/icon-2.svg',
                    text: "Ипотека"
                },
                {
                    id: 3,
                    image: 'images/icons/services/icon-3.svg',
                    text: "Гос поддержка"
                },
                {
                    id: 4,
                    image: 'images/icons/services/icon-4.svg',
                    text: "Оценка"
                },
                {
                    id: 5,
                    image: 'images/icons/services/icon-5.svg',
                    text: "Ипотечный калькулятор"
                },
            ],
            services_second: [
                {
                    id: 6,
                    image: 'images/icons/services/icon-6.svg',
                    text: "Подбор новостройки"
                },
                {
                    id: 7,
                    image: 'images/icons/services/icon-7.svg',
                    text: "Подбор риелтора"
                },
                {
                    id: 8,
                    image: 'images/icons/services/icon-8.svg',
                    text: "Проверка жилья"
                },
                {
                    id: 9,
                    image: 'images/icons/services/icon-9.svg',
                    text: "Циан. Сделка"
                },
                {
                    id: 10,
                    image: 'images/icons/services/icon-10.svg',
                    text: "Аналитика бизнесу"
                },
            ]
        }
    },
}
</script>


<style>
.services_div_wrapper{
    padding: 0 16px;
    overflow-x: auto;
    scroll-padding-left: 16px;
    scroll-padding-right: 16px;
    scroll-snap-type: x mandatory;
}

.services_div_wrapper_ul{
    display: flex;
    position: relative;
    flex-wrap: nowrap;
    margin: 0;
    padding: 0;
    list-style: none;
}

.services_div_wrapper_ul:not(:last-child) {
    margin-bottom: 24px;
}

.services_div_wrapper_ul_li{
    width: 80px;
    scroll-snap-align: start;
}

.services_div_wrapper_ul_li:not(:last-child) {
    margin-right: max(4px,calc(25% - 100px));
}

.services_div_wrapper_ul_li_link{
    -webkit-tap-highlight-color: transparent;
    display: flex;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    max-width: 80px;
    text-decoration: none;
}

.services_div_wrapper_ul_li_link img{
    margin: 0 12px;
    width: 56px;
    height: 56px;
}

.services_div_wrapper_ul_li_link_span{
    font-weight: 500;
    line-height: 16px;
    font-size: 12px;
    color: var(--black_100);
    display: block;
}

.services_div_wrapper_ul_li_link_content{
    margin-top: 8px;
    max-width: 82px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
}

/* *************************************** */
@media (max-width: 559px){
    .services_div_wrapper_ul_li:not(:last-child) {
        margin-right: max(4px,calc(33.33333% - 106.66667px));
    }
}

@media (max-width: 374px){
    .services_div_wrapper_ul_li:not(:last-child) {
        margin-right: max(4px,calc(50% - 120px));
    }
}
</style>