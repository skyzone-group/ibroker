<template>
    <div class="ual-container-wrapper">
        <div class="ual-container">
            <div class="ual-sidebar">
                <side-bar></side-bar>
            </div>
            <div class="ual-content">
                <div class="ual-wrapper">
                    <div class="frontend-user-area" style="flex: 1 0 auto;">
                        <router-view name="content"></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../../../components/SideBarMenu.vue'
export default {
    components: {
        SideBar
    }
}
</script>


<style>
.ual-container-wrapper{
    flex: 1 1 auto;
    background-color: #f4f4f4;
}

.ual-container{
    flex: 1;
    display: flex;
    overflow: hidden;
}

.ual-content{
    flex: 1;
    display: flex;
    overflow: hidden;
    overflow-y: auto;
    flex-direction: column;
}

.ual-wrapper{
    padding: 20px;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    max-width: 1076px;
}

.frontend-user-area{
    display: flex;
}
</style>