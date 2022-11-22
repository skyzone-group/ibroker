<template>
    <div class="favorites-frontend">
        <div class="favorites-frontend_box">
            <div class="favorites-frontend_box_block">
                <h1 class="favorites-frontend_box_block_title">Избранные</h1>
                <favorites-modal></favorites-modal>
                <div class="favorites-frontend_box_block_button d-flex justify-content-end mb-4">
                    <button data-toggle="modal" data-target="#favoritesModal" v-tooltip.bottom="'Фильтр'" class="favorites-frontend_box_block_button_btn">
                        <i class="feather icon-filter"></i>
                    </button>
                </div>
                <div class="favorites-frontend_box_block_objects">
                    <div class="objects_main">
                        <div class="objects_main-box">
                            <div class="objects_main-content w-100">
                                <div class="objects_main-content-item">
                                    <div class="item-header d-flex">
                                        <div class="objects_main-row_img">
                                            <a href="#" class="objects_main-row_img-link">
                                                <span title="Количество фотографий" class="listing__photos">
                                                    <i class="feather icon-camera icon"></i>
                                                    8
                                                </span>
                                                <span title="saved user length" class="saved_user_length">
                                                    <i class="feather icon-heart icon"></i>
                                                    8
                                                </span>
                                                <img src="/file/1669097345737.jpg" alt="1669097345737.jpg">
                                            </a>
                                        </div>
                                        <div class="objects_main-row-content">
                                            <div class="objects_main-row-content-header">
                                                <h5 class="item-title">
                                                    <a href="#">Коммерческая, 450 м²</a>
                                                </h5>
                                                <div class="objects_main-row-content-price-box d-flex">
                                                    <h6 class="item-title eu5v0x0">{{ vueNumberFormat(780000, {}) }}</h6>
                                                </div>
                                            </div>
                                            <div class="objects_main-row-content-info">
                                                <div class="objects_main-row-content-info-first-box">
                                                    <ul class="item-categories">
                                                        <li>Аренда</li>
                                                        <li>Долгосрочный</li>
                                                        <li>Коммерческая</li>
                                                    </ul>
                                                    <div class="item-contents">
                                                        <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="css-1tq7vpq">
                                                            <path d="M12 2c4.963 0 9 4.037 9 9 0 4.701-5.034 9.195-7.328 11h-3.344C8.035 20.195 3 15.701 3 11c0-4.963 4.037-9 9-9zm0 2c-3.86 0-7 3.14-7 7 0 3.75 4.614 7.981 6.995 9.764C13.749 19.434 19 15.108 19 11c0-3.86-3.14-7-7-7zm0 3c2.206 0 4 1.794 4 4 0 2.205-1.794 4-4 4-2.205 0-4-1.795-4-4 0-2.206 1.795-4 4-4zm0 2c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" fill="currentColor" fill-rule="evenodd" data-v-0bba192d=""></path>
                                                        </svg>
                                                        <p class="css-1u68p4l-Text eu5v0x0">Oqibat mahallasi, Sergeli tumani, Toshkent</p>
                                                    </div>
                                                    <div class="item-contents">
                                                        <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="css-1tq7vpq"><path d="M8.006 2v1h8.007V2h2.002v1h2.984L22 4v17l-1 1H3l-1-1V4l1-1h3.004V2h2.002zm11.992 8H4.002v10h15.996V10zM7.505 12a1.5 1.5 0 1 1 .001 3 1.5 1.5 0 0 1 0-3.001zM6.004 5H4.002v3h15.996V5h-1.983v1l-1.001 1-1.001-1V5H8.006v1L7.005 7 6.004 6V5z" fill="currentColor" fill-rule="evenodd"></path></svg>
                                                        <p class="css-18xoq17-Text eu5v0x0"><span data-cy="ad-duration-dates">2022-11-22 - 2022-11-22</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item-bottom-info">
                                        <div class="item-bottom-left">
                                            <span>ID: 1</span>
                                        </div>
                                        <div class="item-bottom-right">
                                            <ul class="item-bottom-right-actions">
                                                <li class="item-bottom-right-actions-list mr-2">
                                                    <a href="#" type="button" class="item-bottom-right-edit nohover">Просмотреть</a>
                                                </li>
                                                <li class="item-bottom-right-actions-list mr-2">
                                                    <a href="#" type="button" class="item-bottom-right-edit nohover">Редактировать</a>
                                                </li>
                                                <li class="item-bottom-right-actions-list nohover">
                                                    <a href="#!" type="button" class="item-bottom-right-edit">Удалить</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <favorites-list></favorites-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FavoritesModal from '../../../components/account/favorites/FavoritesFilterModal.vue'
import FavoritesList from '../../../components/account/favorites/FavoritesList.vue'
export default {
    components: { 
        FavoritesModal,
        FavoritesList
    },
    
}
</script>

<style scoped>
.favorites-frontend{
    display: flex;
    overflow: hidden;
    flex: 1 1;
    flex-direction: column;
}
.favorites-frontend_box_block_title{
    font-size: 1.875rem;
    font-weight: 500;
    color: #000;
}


.favorites-frontend_box_block_button_btn{
    position: relative;
    cursor: pointer;
    outline: none;
    border: 1px solid transparent;
    padding: 3px 11px;
    height: 40px;
    border-radius: 4px;
    white-space: nowrap;
    background-color: var(--secondary_button_10);
    color: var(--primary_100);
}

.favorites-frontend_box_block_button_btn i{
    font-size: 18px;
    color: var(--primary_100);
    font-weight: 500;
}
</style>