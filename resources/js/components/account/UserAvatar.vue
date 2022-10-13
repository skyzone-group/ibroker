<template>
    <div class="profile_form_avatar">
        <div class="user_account_main_block-item-card-header">
            <div class="avatar">
                <img :src="src" alt="user_avatar" class="img-full">
            </div>
            <div class="user_info">
                <p class="mb-0 user_info-p">Javohir Toirov</p>
                <span class="user_info_span">2022 год</span>
            </div>
        </div>
        <div class="profile_form_btns">
            <input type="file" id="primary__avatar"  class="d-none" name="user_image" accept="image/png, image/jpeg, image/pjpeg"  @change="onInputChange"> 
            <label  class="avatar__button p-button p-component mr-2 p-button-rounded" for="primary__avatar">
                Сменить Аватар
            </label>
            <Button label="Удалить фото" class="p-button-outlined p-button-danger p-button-rounded ml-2" />
        </div>
    </div>
</template>


<script>
import Button from 'primevue/button';
export default {
    components: {
        Button
    },
    props: {
        defaultSrc: String,
    },
    data() {
        return {
            src: this.defaultSrc,
            file: null
        }
    },
    methods: {
        async onInputChange(e){
            this.file = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(this.file);
            reader.onload = (e) => {
                this.src = e.target.result;
                console.log(this.src);
            };
            this.updateImagesBox();
            console.log(this.file);
            
        },
        updateImagesBox(){
            this.$emit('updateImagesBox', this.file);
        },
    },
}
</script>

<style>

</style>