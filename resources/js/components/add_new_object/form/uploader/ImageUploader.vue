<template>
    <div class="uploader"
    @dragenter="OnDragEnter"
    @dragleave="OnDragLeave"
    @dragover.prevent
    @drop="onDrop"
    :class="{ dragging: isDragging }">
    
        <div class="uploaded-control" v-show="images.length">
            <label for="file">Выберите фото</label>
        </div>
    
        <div v-show="!images.length">
            <div class="file-input">
                <label for="file">Выберите фото</label>
                <input type="file" id="file" @change="onInputChange" multiple>
            </div>
        </div>
        <div class="images-preview" v-show="images.length">
            <div class="img-wrapper" v-for="(image, index ) in images" :key="index">
                <img :src="image" :alt="`Image Uploader ${index}`">
                <!-- <div class="details">
                    <span class="name" v-text="files[index].name"></span>
                    <span class="size" v-text="files[index].size"></span>
                </div> -->
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            isDragging: false,
            dragCount: 0,
            files: [],
            images: []
        }
    },
    methods: {
        OnDragEnter(e){
            e.preventDefault();
            
            this.dragCount++;
            this.isDragging = true;
        },
        OnDragLeave(e){
            e.preventDefault();
            this.dragCount--;
            if(this.dragCount <= 0)
                this.isDragging = false;
        },
        onInputChange(e){
            const files = e.target.files;
            Array.from(files).forEach(file => this.addImage(file))
        },
        onDrop(e){
            e.preventDefault();
            e.stopPropagation();
            this.isDragging = false;
            const files = e.dataTransfer.files;
            Array.from(files).forEach(file => this.addImage(file))
        },
        addImage(file){
            if(!file.type.match('image.*')){
                console.log(`${file.name} is not an image`);
                return;
            }
            
            this.files.push(file);
            
            const img = new Image(),
                reader = new FileReader();
                
            reader.onload = (e) => this.images.push(e.target.result);
            
            reader.readAsDataURL(file);
        }
    },
}
</script>

<style scoped>
.uploader{
    width: 100%;
    border: 2px dashed #93989d;
    padding: 16px 13px;
    font-size: 20px;
    border-radius: 5px;
    text-align: center;
}

.uploader.dragging{
    background: #4AA168;
    color: #fff;
    border-color: #fff;
}

.file-input{
    width: 200px;
    margin: auto;
    height: 68px;
    position: relative;
}

.file-input label, input{
    background-color: #242629;
    border: none;
    color: #fff;
    border-radius: 5px;
    align-items: center;
    -webkit-appearance: none;
    cursor: pointer;
    display: flex;
    font-size: 20px;
    font-weight: 500;
    height: 3rem;
    justify-content: center;
    min-width: 100%;
    outline: none;
    padding: 0 15px;
    transition: background-color .2s ease 0s,border-color .2s ease 0s;
    user-select: none;
    white-space: nowrap;
    will-change: background-color,border-color;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 7px;
}
.uploader.dragging .file-input label{
    background-color: #fff;
    color: #242629;
}

input{
    opacity: 0;
    z-index: -2;
}

.file-input label:hover{
    background-color: var(--primary_100);
}

.images-preview{
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    /* justify-content: space-between; */
}

.img-wrapper{
    display: table-cell;
    vertical-align: middle;
    box-sizing: border-box;
    width: 150px;
    height: 110px;
    overflow: hidden;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    margin: 8px;
    position: relative;
    user-select: none;
    /* margin-left: 15px; */
}

.img-wrapper img{
    height: 100%;
    width: 100%;
    border-radius: 5px;
}

.uploaded-control{
    justify-content: flex-end;
    width: 100%;
    display: flex;
    align-items: center;
}

.uploaded-control label{
    background-color: var(--primary_100);
    border: none;
    color: #fff;
    border-radius: 4px;
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    font-weight: 500;
    justify-content: center;
    outline: none;
    padding: 8px 12px;
    transition: background-color .2s ease 0s,border-color .2s ease 0s;
    user-select: none;
    white-space: nowrap;
    will-change: background-color,border-color;
}
</style>