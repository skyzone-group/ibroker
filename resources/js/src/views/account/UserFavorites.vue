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