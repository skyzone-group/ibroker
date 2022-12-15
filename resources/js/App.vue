<template>
    <router-view class="main-view"></router-view>
</template>

<script>
import defaultImage from "../../public/images/avatar-dafault.png"
import { useHead }  from '@vueuse/head'
export default {
    name: 'App',
    data() {
        return {
            
        }
    },
    methods: {
        metaTags(){
            return {
                title: 'iBroker - Умный поиск недвижимости Узбекистана - Ташкент',
                meta: [
                    {
                        name: `description`,
                        content: `Найдите любую недвижимость по всему Узбекистану. Занимайтесь недвижимостью не выходя из дома. Выбирайте лучшее. Ведущий поисковик недвижимости в Ташкенте.`,
                    },
                    {
                        name: `Keywords`,
                        content: `продажа квартир в Ташкенте, купить квартиру в Ташкенте, продажа недвижимости в Ташкенте, Ташкент квартира продажа, квартира Ташкент купить, куплю квартиру в Ташкенте, продать квартиру в Ташкенте, продажа квартир без посредников, продам квартиру в Ташкенте.`,
                    },
                    {
                        property: `og:title`,
                        content: `iBroker - Умный поиск недвижимости Узбекистана - Ташкент`
                    }
                ],
            }
        }
    },
    mounted() {
        useHead(this.metaTags());
    },
}
</script>

<style>
    /* #app{
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    } */
    
    .modal-backdrop {
        z-index: 999 !important;
    }
    
    .modal {
        z-index: 1000 !important;
    }
</style>