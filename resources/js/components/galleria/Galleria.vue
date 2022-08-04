<template>
    <div>
        <!-- directive -->
        <!-- <div class="images" v-viewer>
            <img v-for="src in images" :key="src" :src="src">
        </div> -->
        <!-- component -->
        <viewer :images="images">
            <div class="galleria-previews">
                <div v-for="src in images" :key="src" class="galleria-previews_item">
                    <div class="gallery__item__media-wrapperr">
                        <div class="picture-picture--filling-container">
                            <picture class="picture-picture-content-0-8-1">
                                <img :src="src" style="object-position: 50% 50%;">
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </viewer>
        <!-- api -->
        <button type="button" @click="show">Click to show</button>
    </div>
</template>
<script>
    import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            images: [
            "https://picsum.photos/200/200",
            "https://picsum.photos/300/200",
            "https://picsum.photos/250/200",
            "https://picsum.photos/200/200",
            "https://picsum.photos/300/200",
            "https://picsum.photos/250/200"
            ]
        };
    },
    methods: {
        show() {
            this.$viewerApi({
                images: this.images,
            })
        },
    },
})
</script>

<style>
.galleria-previews{
    display: flex;
    justify-content: flex-start;
    margin-top: 8px;
}

.galleria-previews_item{
    background-color: initial;
    cursor: pointer;
    height: 65px;
    overflow: visible;
    width: 100%;
    position: relative;
    user-select: none;
    box-sizing: initial;
    display: inline-block;
    outline: none;
    background-size: cover;
    border-radius: 5px;
    min-height: 62px;
}


.galleria-previews_item:not(:last-child) {
    margin-right: 8px;
}

.galleria-previews_item:before{
    border: 2px solid #0000;
    border-radius: 6px;
    bottom: -2px;
    content: "";
    left: -2px;
    position: absolute;
    right: -2px;
    top: -2px;
    transition: border-color .2s;
}

.gallery__item__media-wrapperr{
    border-radius: 5px;
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    transition: top .2s,left .2s,right .2s,bottom .2s,border-radius .2s;
}

.gallery__item__media-wrapperr:after {
    align-items: center;
    background-color: #24262900;
    border-radius: 5px;
    bottom: 0;
    color: var(--dc-color-white,#fff);
    content: attr(data-title);
    display: flex;
    font: 500 14px/20px SeroPro,sans-serif;
    justify-content: center;
    left: 0;
    letter-spacing: normal;
    margin: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
    top: 0;
    transition: background-color .3s ease-in-out;
}


.picture-picture--filling-container{
    height: 100%;
    position: relative;
    width: 100%;
    display: block;
}

.picture-picture-content-0-8-1{
    height: 100%;
    width: 100%;
}

.picture-picture-content-0-8-1 img{
    object-fit: cover;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
</style>