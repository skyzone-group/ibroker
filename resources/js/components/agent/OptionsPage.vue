<template>
    <div class="option-panel" :class="{'active' : optionsBar}">
        <div class="option-panel-content-wrapper">
            <button type="button" class="setting-button nohover" @click="optionsBar = !optionsBar">
                <i class="pi pi-cog"></i>
            </button>
            <!-- <button type="button" class="layout-config-close nohover" @click.capture="optionsBar == false">
                <i class="pi pi-times"></i>
            </button> -->
            <div class="option-config-content">
                <div class="option-config-content-body h-100">
                    <div class="content-header">
                        <h4 v-if="firstname == null && lastname == null" class="title">ID {{user-id}}</h4>
                        <h4 v-else class="title">{{firstname}} {{lastname}}</h4>
                        <div class="right-header">
                            <button type="button" class="right-header-btn" @click.self="optionsBar == false">
                                <i class="pi pi-angle-right"></i>
                            </button>
                        </div>
                    </div>
                    <div @click.stop class="content-middle">
                        <div class="customs_body h-100" style="max-height: initial;">
                            okkkkkkkkkk
                        </div>
                    </div>
                    <div class="content-bottom">
                        <div class="content-bottom-save">
                            <button class="save-options-btn d-flex align-items-center justify-content-center" type="button">
                                <i class="fa fa-rocket mr-2"></i>
                                <span class="publish-text">Публиковать</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['firstname', 'lastname', 'user-id'],
    data() {
        return {
            optionsBar: false,
        }
    },
    setup() {
        
    },
}
</script>

<style>
.option-panel.active{
    transform: translateX(0);
}

.option-panel a {
    color: var(--form-button-color);
    font-weight: 600;
}

.option-panel {
    z-index: 1101;
    width: 300px;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    transition: all 1s ease;
    backface-visibility: hidden;
    transform: translateX(100%);
}

.option-panel-content-wrapper{
    position: relative;
    height: 100%;
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 24%);
    color: #495057;
    background-color: #ffffff;
}

.option-config-content{
    overflow: auto;
    height: 100%;
    /* padding: 2rem; */
}

.setting-button {
    display: block;
    position: absolute;
    width: 52px;
    height: 52px;
    line-height: 52px;
    background-color: var(--form-button-color);
    text-align: center;
    color: #ffffff;
    top: 250px;
    left: -51px;
    z-index: -1;
    overflow: hidden;
    cursor: pointer;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    animation-name: rubberBand;
    animation-duration: 1s;
    animation-iteration-count: 3;
    animation-delay: 5s;
    box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%);
}

.option-panel .layout-config-close {
    position: absolute;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    right: 20px;
    top: 20px;
    z-index: 999;
    background-color: var(--primary-color);
    border-radius: 50%;
    transition: background-color .2s,box-shadow .2s,transform .2s,-webkit-box-shadow .2s,-webkit-transform .2s;
}


.option-panel .layout-config-close i {
    color: #ffffff;
    line-height: inherit;
    font-size: 14px;
}



.setting-button i {
    font-size: 26px;
    line-height: inherit;
    color: #ffffff;
    cursor: pointer;
    transform: rotate(1turn);
}


.option-config-content-body{
    display: flex;
    flex-direction: column;
    background: rgb(46, 46, 47);
}


.option-config-content-body .content-header {
    padding: 15px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.option-config-content-body .content-header .title{
    font-size: 18px;
    font-weight: 600;
    font-style: italic;
    letter-spacing: 1px;
    color: #ffffff;
}

.option-config-content-body .content-middle{
    flex: 1 1 0%;
    overflow: hidden;
    padding: 15px !important;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
}

.option-config-content-body .content-bottom{
    flex: 0 0 auto;
    position: relative;
    bottom: 0px;
    box-sizing: border-box;
    width: 100%;
    text-transform: uppercase;
}

.content-bottom-save{
    padding: 15px;
}

.content-bottom-save .save-options-btn{
    padding: 12px;
    font-size: 14px;
    background: var(--form-button-color);
    color: white;
    font-weight: bold;
    width: 100%;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    /* margin-bottom: 47px; */
}

.right-header-btn{
    width: 30px;
    height: 30px;
    background: var(--form-button-color);
    border-radius: 4px;
    color: #ffffff;
}

.right-header-btn i{
    font-size: 16px;
}

/* @keyframes rubberBand {
    100% {
        transform: rotate(180deg);
    }
} */
</style>