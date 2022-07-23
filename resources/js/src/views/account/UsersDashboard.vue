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
                    <div class="ual-footer-desktop">
                        <div>© 2021 ЦИАН ГРУПП</div>
                        <div class="ual-footer-desktop-service-link">
                            <a href="#!" target="_blank"> Справочный центр </a>
                        </div>
                        <div class="ual-footer-desktop-service-link"> 
                            <a href="#!" target="_blank"> Лицензионное соглашение</a> 
                        </div>
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
        SideBar,
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

.ual-footer-desktop{
    margin-top: auto;
    padding: 17px 20px 0;
    flex: 0 0 auto;
    display: flex;
    font-size: 14px;
    line-height: 1.43;
    color: #929294;
    border-top: 1px solid #e4e4e4;
}

.ual-footer-desktop-service-link{
    margin-left: 40px;
    font-size: 12px;
    line-height: 1.5;
}

.ual-footer-desktop-service-link a {
    color: #929294;
}


/* ************************************************************* */
@media (max-width: 475px){
    .ual-footer-desktop{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    
    .ual-footer-desktop-service-link{
        margin-left: 0;
    }
}
</style>