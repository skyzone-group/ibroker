<template>
    <div id="upload_img">
        <div class="header_title">
            <div class="header_title_content d-flex flex-column">
                <h4 class="header_title_content_txt mb-0">Фотографии</h4>
            </div>
            <div class="header_title__desc">
                <p class="header_title__desc_title">Покупателей привлекают качественные фотографии</p>
                <span>Добавьте от 3 фото. Покажите комнаты, кухню, санузел, вид из окна, подъезд, фасад здания, парковку.</span>
            </div>
            <div>
                <image-uploader></image-uploader>
            </div>
        </div>
    </div>
</template>

<script>
import ImageUploader from './uploader/ImageUploader.vue'
export default {
    components: {
        ImageUploader
    }
}
</script>

<style>
    .header_title__desc{
        background: #ddf0e3;
        border-radius: 0.5rem;
        line-height: 2rem;
        margin: 2.4rem 0;
        min-height: 7.2rem;
        padding: 1.6rem;
    }
    
    .header_title__desc_title{
        font-size: 19px;
        font-weight: 500;
        margin-bottom: 0.4rem;
    }
</style>