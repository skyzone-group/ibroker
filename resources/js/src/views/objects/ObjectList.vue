<template>
    <div class="object_list">
        <div class="objects-main-div">
            <nav class="objects-main-div_nav">
                <ul class="objects-main-div_nav_ul d-flex m-0 p-0">
                    <li class="objects-main-div_nav_ul_li">
                        <router-link :to="{name: 'objects'}" class="objects-main-div_nav_ul_li_a">
                            Все
                        </router-link>
                    </li>
                    <li class="objects-main-div_nav_ul_li">
                        <router-link :to="{name: 'sales'}" class="objects-main-div_nav_ul_li_a">
                            Продано
                        </router-link>
                    </li>
                    <li class="objects-main-div_nav_ul_li">
                        <router-link :to="{name: 'rent'}" class="objects-main-div_nav_ul_li_a">
                            Аренда
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="filter_card">
            <object-filtr></object-filtr>
        </div>
        <router-view name="objects"></router-view>
    </div>
</template>


<script>
import ObjectFiltr from '../../../components/objects/ObjectFiltr.vue'
export default {
    components: {
        ObjectFiltr
    }
}
</script>

<style scoped>
.objects-main-div_nav_ul_li{
    margin-right: 10px;
}
.objects-main-div_nav_ul_li_a{
    background-color: transparent;
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
    transition: 0.4s;
    padding: 10px 12px;
    outline: none;
    width: 120px;
    color: #626262;
    border-bottom: 2px solid #626262;
}

.objects-main-div_nav_ul_li_a:hover{
    text-decoration: none;
}

.objects-main-div_nav_ul a.router-link-active{
    border-bottom: 2px solid var(--vc-nav-background-color);
    color: var(--vc-nav-background-color);
}

.object_list{
    display: flex;
    background-color: #f4f4f4;
    overflow: hidden;
    flex: 1 1;
    flex-direction: column;
}
</style>