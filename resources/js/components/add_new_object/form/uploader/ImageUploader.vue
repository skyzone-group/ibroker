<template>
    <div class="uploader">
        <i class="feather icon-upload"></i>
        <p>Drag your images here</p>
        <div>OR</div>
        <div class="file-input">
            <label for="file">Select File</label>
            <input type="file" id="file" @change="onInputChange" multiple>
        </div>
    </div>
</template>


<script>
export default {
    methods: {
        onInputChange(e){
            console.log(e);
        }
    },
}
</script>

<style scoped>

</style>