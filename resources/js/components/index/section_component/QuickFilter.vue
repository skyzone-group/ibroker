<template>
    <div id="quickFiltr">
        <h2 class="section__components_title">Поиск недвижимости</h2>
        <div class="quick_filtr_block">
            <a v-for="item in itemsCard" :key="item.id" href="#!" class="quick_filtr_block_item">
                <img :src="item.image" alt="">
                {{ item.text }}
            </a>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            itemsCard: [
                {
                    id: 0,
                    image: 'images/icons/quickfilter/buy.svg',
                    text: "Купить"
                },
                {
                    id: 1,
                    image: 'images/icons/quickfilter/rent.svg',
                    text: "Снять"
                },
                {
                    id: 2,
                    image: 'images/icons/quickfilter/newhouse.svg',
                    text: "Новостройки"
                },
                {
                    id: 3,
                    image: 'images/icons/quickfilter/dom.svg',
                    text: "Дома и участки"
                },
                {
                    id: 4,
                    image: 'images/icons/quickfilter/commercial.svg',
                    text: "Коммерческая"
                },
                {
                    id: 5,
                    image: 'images/icons/quickfilter/hourly.svg',
                    text: "Посуточно"
                },
            ]
        }
    },
}
</script>

<style>
    .section__components_title{
        margin: 0 0 20px 16px;
        color: #121212;
        font-size: 22px;
        line-height: 28px;
    }
    
    .quick_filtr_block{
        display: flex;
        position: relative;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0;
        padding: 0 16px;
    }
    
    .quick_filtr_block_item{
        display: flex;
        flex-direction: column;
        margin-bottom: 8px;
        box-shadow: 0 0 10px rgb(21 34 66 / 4%), 0 0 20px rgb(21 34 66 / 10%);
        border-radius: 4px;
        background: #fff;
        padding: 12px;
        width: 49%;
        color: #152242;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        text-decoration: none;
    }
    
    .quick_filtr_block_item img{
        margin-bottom: 8px;
        width: 24px;
        height: 24px;
    }
</style>