<template>
    <div class="option-panel" :class="{'active' : optionsBar}" :style="mouseOver">
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
                            <button type="button" class="right-header-btn" @click="optionsBar = !optionsBar">
                                <i class="pi pi-angle-right"></i>
                            </button>
                        </div>
                    </div>
                    <div  class="content-middle">
                        <div class="customs_body h-100 settings-collapse" style="max-height: initial;">
                            <Accordion :multiple="true" lazy>
                                <AccordionTab header="Color Scheme">
                                    <ColorPicker v-model="main_color" panelClass="setting-color-panel" @change="$emit('color', main_color)" />
                                </AccordionTab>
                                <AccordionTab header="Background">
                                    <div class="setting-background-panel">
                                        <div class="default-library">
                                            <div class="h-100">
                                                <ul id="theme-selector" class="theme-selector">
                                                    <li v-for="item in images" :key="item.id" class="theme" @click="selectImage(item.name)">
                                                        <div class="thumb">
                                                            <div class="image-wrapper" :style="{'border: 1px solid #fff;' : selected_image == item.name}">
                                                                <img :src="`/images/background/${item.name}`" :alt="item.name" class="h-100" @mouseover="$emit('image', item.name)" @mouseout="mouseout(images[0].name)">
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="upload-or-remove-buttons">
                                            <div class="upload-or-remove-btn">
                                                <label for="media" class="upload-or-remove-btn-labels">
                                                    <input @change="onInputChange" multiple="multiple" type="file" name="images[]" accept="image/png, image/jpeg, image/pjpeg" id="media" class="d-none">
                                                    <span>Выберите фото</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionTab>
                            </Accordion>
                        </div>
                    </div>
                    <div class="content-bottom">
                        <div class="content-bottom-toggle-theme">
                            <input
                            @change="toggleTheme"
                            id="checkbox"
                            type="checkbox"
                            class="switch-checkbox"
                            />
                            <label for="checkbox" class="switch-label">
                            <span>🌙</span>
                            <span>☀️</span>
                            <div
                                class="switch-toggle"
                                :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
                            ></div>
                            </label>
                        </div>
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
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import ColorPicker from 'primevue/colorpicker';
export default {
    components: {
        Accordion,
        AccordionTab,
        ColorPicker
    },
    props: ['firstname', 'lastname', 'user-id', 'main_color', 'def_background'],
    data() {
        return {
            optionsBar: false,
            images: [
                {id: 1, name: 'img_1.jpg'},
                {id: 2, name: 'img_2.jpg'},
                {id: 3, name: 'img_3.jpg'},
                {id: 4, name: 'img_4.jpg'},
                {id: 5, name: 'img_5.jpg'},
                {id: 6, name: 'img_6.jpg'}
            ],
            selected_image: "",
            userTheme: "light-theme",
            file: null,
        }
    },
    methods: {
        selectImage(image){
            this.selected_image = image;
        },
        mouseout(image){
            if(this.selected_image == ""){
                this.$emit('image', image)
            }
            else{
                this.$emit('image', this.selected_image)
            }
        },
        toggleTheme() {
            const activeTheme = localStorage.getItem("user-theme");
            if (activeTheme === "light-theme") {
                this.setTheme("dark-theme");
            } else {
                this.setTheme("light-theme");
            }
        },
        getTheme() {
            return localStorage.getItem("user-theme");
        },
        setTheme(theme) {
            localStorage.setItem("user-theme", theme);
            this.userTheme = theme;
            document.documentElement.className = theme;
        },
        getMediaPreference() {
            const hasDarkPreference = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            if (hasDarkPreference) {
                return "dark-theme";
            } else {
                return "light-theme";
            }
        },
        async onInputChange(e){
            this.file = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = (e) => {
                this.src = e.target.result;
                // console.log(this.src);
            }; 
        },
    },
    mounted() {
        const initUserTheme = this.getTheme() || this.getMediaPreference();
        this.setTheme(initUserTheme);
    },
    created() {
        
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
    background-color: var(--main-color);
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
    background-color: var(--main-color);
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
    background: var(--background-color-primary);
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
    color: var(--text-primary-color);
}

.option-config-content-body .content-middle{
    flex: 1 1 0%;
    overflow: auto;
    padding: 15px !important;
    border-top: 1px solid var(--border-primary-color);
    border-bottom: 1px solid var(--border-primary-color);
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

.content-bottom-toggle-theme{
    padding: 10px 15px;
    border-bottom: 1px solid var(--border-primary-color);
}

.content-bottom-save .save-options-btn{
    padding: 12px;
    font-size: 14px;
    background: var(--main-color);
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
    background: var(--main-color);
    border-radius: 4px;
    color: #ffffff;
}

.right-header-btn i{
    font-size: 16px;
}


.settings-collapse .p-accordion-tab{
    border: 0;
    background: unset;
    border-radius: 0;
    box-shadow: unset;
    border-top: 1px solid var(--border-primary-color);
    border-bottom: 1px solid var(--border-primary-color);
}

.settings-collapse .p-accordion .p-accordion-header .p-accordion-header-link{
    background: transparent;
    border: 0;
    color: var(--text-primary-color);;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 15px 0;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
}

.settings-collapse .p-accordion .p-accordion-tab:first-child .p-accordion-header .p-accordion-header-link {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
}

.settings-collapse .p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
    background: transparent;
    border-color: transparent !important;
    color: var(--text-primary-hover-color) !important;
}

.settings-collapse .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    background: transparent !important;
    border-color: unset !important;
    color: var(--text-primary-color) !important;
}

.settings-collapse .p-accordion .p-accordion-content{
    margin-bottom: 10px;
    border: none;
    border-radius: 0.5rem;
    background: transparent;
    padding: 10px 0;
    box-shadow: unset;
    transition: all .3s ease-in-out;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius:  0.5rem;
}

.setting-color-panel{
    right: 302px !important;
    z-index: 1111 !important;
    left: unset !important;
    top: 140px !important;
    margin-right: 10px !important;
    position: fixed !important;
    display: block !important;
}

.setting-background-panel{
    /* min-height: 400px; */
    display: flex;
    flex-direction: column;
}

.setting-background-panel .default-library{
    flex: 1 1 0%;
    overflow-y: auto;
    overflow-x: hidden;
    margin-bottom: 10px;
}

.setting-background-panel .upload-or-remove-buttons{
    flex: 0 0 auto;
    position: relative;
    bottom: 0px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin: -4px;
}
.setting-background-panel .upload-or-remove-btn {
    display: flex;
    flex: 1 0 auto;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin: 4px;
}

.setting-background-panel .upload-or-remove-btn  .upload-or-remove-btn-labels{
    flex: 1 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0px;
    min-height: 40px;
    position: relative;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    background-color: var(--main-color);
    border: 5px solid var(--main-color);
    border-radius: 4px;
    color: rgb(255, 255, 255);
    padding: 4px 12px;
}

.setting-background-panel #theme-selector{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

.setting-background-panel #theme-selector .theme {
    display: inline-block;
    zoom: 1;
    vertical-align: top;
    width: 100%;
}


.setting-background-panel .body #theme-selector .theme .thumb {
    background: #fff;
    width: 100%;
    position: relative;
    border: none;
    cursor: pointer;
}

.setting-background-panel #theme-selector .theme .thumb .image-wrapper {
    position: relative;
    height: 90px;
    cursor: pointer;
    transition: all .5s ease;
    padding: 2px;
    border-width: 1px;
    border-style: solid;
    border-color: unset;
}

.setting-background-panel #theme-selector .theme .thumb .image-wrapper:hover{
    border-color: var(--text-primary-color);
}

#theme-selector .theme .thumb .image-wrapper img {
    width: 100%;
    display: block;
    image-rendering: -webkit-optimize-contrast;
}

.setting-color-panel:after{
    border: solid transparent;
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #323232;
    border-width: 8px;
    top: 0;
    bottom: unset;
    right: -17px;
    left: unset;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    transform: rotate(90deg);
}

.settings-collapse .p-accordion .p-accordion-content .p-colorpicker{
    width: 100%;
}

.settings-collapse .p-accordion .p-accordion-content .p-colorpicker .p-colorpicker-preview{
    width: 100%;
    height: 30px;
    overflow: hidden;
    border-radius: 15px;
}

.switch-checkbox {
    display: none;
}

.switch-label {
    align-items: center;
    background: var(--text-primary-color);
    border: calc(var(--element-size) * 0.025) solid var(--accent-color);
    border-radius: var(--element-size);
    cursor: pointer;
    display: flex;
    font-size: calc(var(--element-size) * 0.3);
    height: auto;
    position: relative;
    padding: calc(var(--element-size) * 0.1);
    transition: background 0.5s ease;
    justify-content: space-between;
    margin-left: auto;
    max-width: 90px;
    width: 100%;
    z-index: 1;
}

.switch-toggle {
    position: absolute;
    background-color: var(--background-color-primary);
    border-radius: 50%;
    top: calc(90px * 0.07);
    left: calc(var(--element-size) * 0.07);
    height: calc(var(--element-size) * 0.4);
    width: calc(var(--element-size) * 0.4);
    transform: translateX(0);
    transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
    transform: translateX(calc(90px * 0.6)) !important;
}

/* @keyframes rubberBand {
    100% {
        transform: rotate(180deg);
    }
} */
</style>