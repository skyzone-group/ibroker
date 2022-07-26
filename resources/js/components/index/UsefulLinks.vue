<template>
    <div class="useful_links mt-5">
        <div class="useful_links_box">
            <div class="container_fluid">
                <h2 class="useful_links_box_title content_h2">Полезные ссылки</h2>
                <div class="useful_links_box_cards">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div class="useful_links_box_cards_item">
                                <div class="useful_links_box_cards_item_block buy_room">
                                    <div class="content_txt">
                                        <a href="#!" class="content_txt_title">Продажа квартир</a>
                                        <a class="content_txt_links" href="#!">1-комнатные<span class="content_txt_links_num">18 053</span></a>
                                        <a class="content_txt_links mt-2" href="#!">2-комнатные<span class="content_txt_links_num">18 053</span></a>
                                        <a class="content_txt_links mt-2" href="#!">3-комнатные<span class="content_txt_links_num">18 053</span></a>
                                        <a class="content_txt_links mt-2" href="#!">4-комнатные<span class="content_txt_links_num">18 053</span></a>
                                        <a class="content_txt_links mt-2" href="#!">Студии<span class="content_txt_links_num">18 053</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div class="useful_links_box_cards_item">
                                <div class="useful_links_box_cards_item_block rent_room">
                                    <div class="content_txt">
                                        <a href="#!" class="content_txt_title">Аренда квартир</a>
                                        <a class="content_txt_links" href="#!">1-комнатные<span class="content_txt_links_num">18 053</span></a>
                                        <a class="content_txt_links mt-2" href="#!">2-комнатные<span class="content_txt_links_num">18 053</span></a>
                                        <a class="content_txt_links mt-2" href="#!">3-комнатные<span class="content_txt_links_num">18 053</span></a>
                                        <a class="content_txt_links mt-2" href="#!">4-комнатные<span class="content_txt_links_num">18 053</span></a>
                                        <a class="content_txt_links mt-2" href="#!">Студии<span class="content_txt_links_num">18 053</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                            <div class="useful_links_box_cards_item">
                                <div class="useful_links_box_cards_item_block new_buildings">
                                    <div class="content_txt">
                                        <a href="#!" class="content_txt_title">Новостройки</a>
                                        <a class="content_txt_links" href="#!">Сдача до конца года</a>
                                        <a class="content_txt_links mt-2" href="#!">Сдача до 2023</a>
                                        <a class="content_txt_links mt-2" href="#!">Сдача до 2024</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="useful_links_box_cards_item">
                                <div class="useful_links_box_cards_item_block country_estate">
                                    <div class="content_txt">
                                        <a href="#!" class="content_txt_title">Загородная недвижимость</a>
                                        <a class="content_txt_links" href="#!">Каталог посёлков<span class="content_txt_links_num">18 053</span></a>
                                        <a class="content_txt_links mt-2" href="#!">Купить дом<span class="content_txt_links_num">18 053</span></a>
                                        <a class="content_txt_links mt-2" href="#!">Купить участок<span class="content_txt_links_num">18 053</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="useful_links_box_cards_item">
                                <div class="useful_links_box_cards_item_block map_search d-flex justify-content-center align-items-center flex-column text-center">
                                    <div class="content_txt">
                                        <p class="text-white map_search_title">Поиск на карте</p>
                                        <span class="text-white map_search_span">Ищите новостройки рядом с работой, <br>  парком или родственниками</span>
                                        <a href="#!" class="map_search_link">Найти на карте</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

.useful_links_box{
    padding: 16px 0 46px;
}
.useful_links_box_wrapper{
    position: relative;
    z-index: 3;
    padding: 0 16px;
}

.container_fluid{
    min-width: 320px;
    max-width: 1376px;
    padding: 0 16px;
    margin: 0 auto;
    box-sizing: border-box;
}

.content_h2{
    margin: 20px 0 16px;
    overflow: hidden;
    font-weight: 700;
    font-size: 26px;
    line-height: 33px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.useful_links_box_cards_item{
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 8px 0 #2426290a;
    height: 247px;
    margin-bottom: 20px;
    overflow: hidden;
    position: relative;
    width: 100%;
}

.useful_links_box_cards_item_block{
    height: 100%;
    padding: 32px;
    position: relative;
    background-position: 50% !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
}
.useful_links_box_cards_item_block::after{
    content: "";
    position: absolute;
    background-image: linear-gradient(110deg,rgba(43,71,86,.7),rgba(43,71,86,.1)) !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.buy_room{
    background: url('../../../../public/images/useful_links/buy-flat.jpg');
}
.rent_room{
    background: url('../../../../public/images/useful_links/rent-room.jpg');
}
.new_buildings{
    background: url('../../../../public/images/useful_links/new_buildings.jpg');
}
.country_estate{
    background: url('../../../../public/images/useful_links/country_estate.jpg');
}
.map_search{
    background: url('../../../../public/images/useful_links/map_search.png');
}

.content_txt{
    position: relative;
    z-index: 1;
}

.content_txt a:hover{
    text-decoration: none;
}
.content_txt_title{
    color: #fff;
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 16px;
}
.content_txt_links{
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #fff;
}

.content_txt_links_num{
    color: #fff;
    margin-left: 12px;
    white-space: nowrap;
}

.map_search_title{
    margin-bottom: 7px;
    font-weight: 700;
    font-size: 22px;
    line-height: 1.27;
}

.map_search_span{
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.27;
    display: block;
}

.map_search_link{
    display: block;
    box-sizing: border-box;
    margin: 0 auto;
    border: 1px solid #fff;
    border-radius: 14px;
    padding: 0 16px;
    width: 180px;
    height: 28px;
    color: #fff;
    font-weight: 700;
    line-height: 1.8;
}
.map_search_link:hover{
    border: 1px solid #0056b3;
    background: #0056b3;
    color: #fff;
}

/* ************************************************************* */
@media (max-width: 450px){
    .useful_links_box_cards_item {
        height: 220px;
    }
    
    .useful_links_box_cards_item_block {
        padding: 20px;
    }
}
</style>