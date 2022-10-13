<template>
    <div class="blade">
        <div class="mobile-file-input w-100 d-lg-none d-md-none d-block mb-lg-0 mb-md-0 mb-3">
            <label for="media">Выберите фото</label>
        </div>
        <draggable 
            v-model="images"
            v-if="!mobileImgView" 
            group="people" 
            @start="drag=true" 
            @end="drag=false"
            ghost-class="ghost"
            :delay="200"
            :delay-on-touch-only="true"
            :component-data="getComponentData()" 
            item-key="index"
            class="form__img-stock --large vuedraggable vuedraggable__item img_warpper_box w-100">
            <template #item="{element, index}">
                <div class="form__img-preview form__img-preview-back position-relative">
                    <div class="form__img-preview-overflow">
                        <img :src="element.img"  id="prev-img" class="form__img-src" width="100" height="100" :style="{transform: `rotate(${element.degree}deg) !important`}">
                    </div>
                    <div class="rotate-icon top-left-icon" :class="{'active' : mainImage == true}" @click="moveUp(index)">
                        <i class="feather icon-star"></i>
                    </div>
                    <div class="rotate-icon top-icon" @click="removeImage(index)">
                        <i class="feather icon-x"></i>
                    </div>
                    <div class="rotate-icon"  @click="rotateImage(element)">
                        <i class="feather icon-rotate-cw"></i>
                    </div>
                    <div class="backdrop-img" @click="showImg(index)"></div>
                </div>
            </template>
            <template #footer>
                <div class="form__img-item form__img-item-big vuedraggable__item d-lg-block d-md-block d-none">
                    <label for="media" class="form__img-preview">
                        <span class="form__img-icon">
                            <svg xmlns="http://www.w3.org/2000/svg"  width="30px" height="30px" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" id="mainIconPathAttribute"></path></svg>
                        </span>
                    </label>
                </div>
            </template>
        </draggable>
        <div v-if="mobileImgView" class="mobile-img-view form__img-stock --large img_warpper_boxx w-100">
            <div v-for="(item, index) in images" :key="index" class="mobile-img-view_item form__img-preview form__img-preview-back position-relative">
                <div class="form__img-preview-overflow">
                    <img :src="item.img"  id="prev-img" class="form__img-src" width="100" height="100" :style="{transform: `rotate(${item.degree}deg) !important`}">
                </div>
                <div class="rotate-icon top-left-icon" :class="{'active' : mainImage == true}" @click="moveUp(index)">
                    <i class="feather icon-star"></i>
                </div>
                <div class="rotate-icon top-icon" @click="removeImage(index)">
                    <i class="feather icon-x"></i>
                </div>
                <div class="rotate-icon"  @click="rotateImage(item)">
                    <i class="feather icon-rotate-cw"></i>
                </div>
                <div class="backdrop-img"></div>
            </div>
        </div>
        <div class="d-none">
            <input @change="onInputChange" multiple="multiple" type="file" name="images[]" id="media">
        </div>
        <!-- <div v-for="(src, index) in imgs" :key="index" class="pic" @click="() => showImg(index)">
          <img :src="src" />
        </div> -->
        <vue-easy-lightbox v-if="images" :visible="visibleRef" :images="images" :index="index" @hide="handleHide"></vue-easy-lightbox>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import Sortable from 'sortablejs/modular/sortable.complete.esm.js';
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import { ref } from 'vue'
export default ({
    name: 'Upload',
    components: {
        draggable,
    },
    data() {
        return {
            images: [],
            imageCount: 0,
            drag: false,
            mainImage: false,
            mobileImgView: false,
            visibleRef: false,
            index: 0,
            // imgs: [
            //     { 
            //         src: 'https://via.placeholder.com/450.png/', 
            //         title: 'this is title' 
            //     },
            //     { 
            //         src: 'https://via.placeholder.com/300.png/', 
            //         title: 'this is title' 
            //     },
            //     { 
            //         src: 'https://via.placeholder.com/150.png/', 
            //         title: 'this is title' 
            //     }
            // ]
        }
    },
    methods: {
        async onInputChange(e){
            const filess = e.target.files;
            Array.from(filess).forEach(file => this.addImage(file))
        },
        async addImage(file){
            if(!file.type.match('image.*')){
                console.log(`${file.name} is not an image`);
                return;
            }
            
            
            const img   = new Image(),
            reader      = new FileReader();
            
            reader.onload = (e) => this.images.push(
                {
                    img: e.target.result,
                    img_id: this.imageCount,
                    degree: 0
                }
            );
            console.log(this.imageCount);
            reader.readAsDataURL(file);
            this.imageCount += 1;
            this.updateImagesBox();
            
            this.profileUpload();
        },
        profileUpload(){  // insert new file or image by this code
            let formm = new FormData();
            formm.append('image', this.images);
            console.log(formm);
            axios.post('/api/upload_image', formm, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(function (error) {
                console.log("889");
            });
        },
        removeImage(i){
            this.images.splice(i, 1);
            this.updateImagesBox();
            if(!this.images.length){
                this.$refs.im.value = '';
            }
        },
        rotateImage(i){
            this.updateImagesBox();
            i.degree = (i.degree + 90) % 360;
        },
        moveUp(index) {
            let changingImage = this.images[index];
            this.images.splice(index, 1);
            this.images.unshift(changingImage);
            this.mainImage = true;
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 575){
                this.mobileImgView = true;
                return;
            }
            this.mobileImgView = false;
            return;
        },
        updateImagesBox(){
            this.$emit('updateImagesBox', this.images);
        },
        onEnd(evt){
            // let newIndex;
            // console.log('previousElementSibling', evt.item.previousElementSibling);
            // console.log('nextElementSiblingElementSibling', evt.item.nextElementSiblingElementSibling);
            // console.log('oldIndex', evt.oldIndex);
            // console.log('newIndex', evt.newIndex);
            let neighborIndex;
            if (evt.oldIndex < evt.newIndex) neighborIndex  = this.images.indexOf(evt.item.previousElementSibling?.id || this.images[0]);
            else neighborIndex = this.images.indexOf(evt.item.nextElementSibling?.id);
            console.log("neighborIndex",neighborIndex);
            // this.images.splice(neighborIndex, 0, evt.item.id);
            this.updateImagesBox();
            console.log(this.images);
        },
        handleChange() {
            console.log(this.images);
        },
        getComponentData() {
            return {
                onEnd: this.onEnd,
                onChange: this.handleChange,
                wrap: true,
            };
        },
        showImg(index) {
            console.log(index)
            this.index = index
            this.visibleRef = true
        },
        handleHide() {
            this.visibleRef = false
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen()
    },
    // setup() {
    //     const visibleRef = ref(false)
    //     const indexRef = ref(0)
    //     const imgs = [
    //         'https://via.placeholder.com/450.png/',
    //         'https://via.placeholder.com/300.png/',
    //         'https://via.placeholder.com/150.png/',
    //         { src: 'https://via.placeholder.com/450.png/', title: 'this is title' }
    //     ]
        
        
        
    //     const showImg = (index) => {
    //         console.log(index);
    //         indexRef.value = index
    //         visibleRef.value = true
    //     }
    //     const onHide = () => visibleRef.value = false
        
    //     return {
    //         visibleRef,
    //         indexRef,
    //         imgs,
    //         showImg,
    //         onHide
    //     }
    // }
});
</script>

<style scoped>
.form__img-stock {
    /* display: flex; */
    /* flex-direction: row-reverse; */
    /* flex-wrap: wrap; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    padding: 0;
    list-style: none;
}

.form__img-item {
    position: relative;
    /* margin-left: 0.75rem;
    margin-bottom: 0.75rem; */
}

/* .vuedraggable__item {
    cursor: move;
} */

.form__img-preview {
    width: 100%;
    height: 150px;
}

.form__img-item label.form__img-preview {
    cursor: pointer;
}

.form__img-preview {
    display: block;
    position: relative;
    /* width: 84px;
    height: 64px; */
    margin-right: 0.75rem;
    margin-bottom: 0.75rem;
    color: #999;
    border-radius: 0.25rem;
    border: 2px solid #e6e6e6;
}

.form__img-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1.25rem;
    transform: translate(-50%,-50%);
}

.form__img-item:hover .form__img-preview {
    color: var(--form-button-color);
    border-color: var(--form-button-color);
}

.form__img-preview-overflow {
    height: 120px;
    position: relative;
    overflow: hidden;
    border-radius: 0.125rem;
}

.form__img-preview-overflow,
.form__img-preview-overflow img{
    width: 100%;
    height: 100%;
}

.form__img-src {
    border-radius: 0.125rem;
}

.backdrop-img{
    background-color: #24262980;
    border-radius: 0.5rem;
    bottom: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity .2s;
    z-index: 1;
}

.form__img-preview-back:hover .backdrop-img,
.form__img-preview-back:hover .rotate-icon{
    opacity: 1;
    cursor: move;
}

.rotate-icon{
    border-radius: 0.5rem;
    bottom: 0.8rem;
    height: 2rem;
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    width: 2rem;
    display: flex;
    justify-content: center;
    transition: opacity .2s;
    align-items: center;
    background: #fff;
    font-size: 17px;
    right: 0.8rem;
    color: grey;
    font-weight: 600;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
}

.top-icon{
    right: 0.8rem;
    top: 0.8rem;
}

.top-left-icon{
    left: 0.8rem;
    top: 0.8rem;
}

.mobile-file-input label{
    background-color: #242629;
    border: none;
    color: #fff;
    border-radius: 5px;
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: 500;
    height: 3rem;
    justify-content: center;
    min-width: 100%;
    outline: none;
    padding: 10px;
}
/* ******************************************************************** */
@media (max-width: 767px){
    /* .form__img-stock {
        grid-template-columns: repeat(3, 1fr);
    } */
}

@media (max-width: 575px){
    .form__img-stock{
        display: flex !important;
        height: auto !important;
        margin-bottom: -2rem !important;
        overflow-x: auto !important;
        overflow-y: hidden !important;
        padding-bottom: 1rem !important;
        gap: 0 !important;
    }
    
    .form__img-preview{
        height: 13.2rem !important;
        margin-bottom: 0 !important;
        margin-left: 0 !important;
        width: 17.2rem !important;
    }
    
    .form__img-preview-overflow, .form__img-preview-overflow img,
    .backdrop-img{
        width: 17.2rem !important;
    }
    
    .mobile-file-input{
        margin-top: 30px;
    }
}

@media (max-width: 450px){
    .form__img-preview,
    .form__img-preview-overflow, .form__img-preview-overflow img,
    .backdrop-img{
        height: 10.2rem !important;
        width: 14.2rem !important;
    }
}
</style>