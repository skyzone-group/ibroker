<template>
    <div class="objects_page">
        <div class="objects_main">
            <div class="objects_main-row">
                <div class="objects_main-row_checkbox">
                    <div class="top_bar_total_checkBox">
                        <div class="field-checkbox">
                            <Checkbox id="binary" v-model="checked" :binary="true" />
                            <!-- <label for="binary">{{checked}}</label> -->
                        </div>
                    </div>
                </div>
                <div class="objects_main-row_img">
                    <div class="objects_main-row_img_block">
                        <a href="#!" target="_blank">
                            <img src="https://supercashforhouses.com/wp-content/uploads/2018/08/supercashforhouses.jpg" alt="">
                        </a>
                    </div>
                </div>
                <div class="objects_main-row_content">
                    <div class="objects_main-row_content_info">
                        <div>
                            <div class="objects_main-row_content_info_title">
                                <div class="objects_main-row_content_info_title_box" style="flex: 1 1;">
                                    <span class="title_span">
                                        <a href="#!" class="title_span_link">
                                            3-комн. апарт., 111 м², 62/77 этаж
                                        </a>
                                    </span>
                                </div>
                                <div class="objects_main-row_content_info_title_box" style="flex: 1 1;">
                                    <span class="title_span">
                                        150 000 000 ₽
                                    </span>
                                </div>
                            </div>
                            <div class="objects_main-row_content_geo_info">
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae animi at inventore, veritatis nulla quod libero corporis porro, amet, consectetur et accusantium dolorem? Et, voluptates? Numquam eos animi facere repellendus.</span>
                            </div>
                        </div>
                        <div class="objects_main-row_content_info_buttons">
                            <div class="phone_div">
                                <a href="#!">
                                    +99890 359 22 84
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Checkbox from 'primevue/checkbox';
export default {
    components: {
        Checkbox
    },
    setup() {
        
    },
    data() {
        return {
            checked: false
        }
    },
}
</script>

<style scoped>
.objects_main{
    border-bottom: 1px solid #f1f2f4;
    background-color: #fff;
    padding: 15px;
    margin: 20px 0 0 0;
}

.objects_main-row{
    display: flex;
    flex-flow: row nowrap;
}

.objects_main-row_checkbox{
    margin-right: 25px;
}

.objects_main-row_img{
    position: relative;
    flex-basis: 216px;
    margin-right: 16px;
    min-width: 216px;
    height: 151px;
    border-radius: 4px;
}

.objects_main-row_img_block{
    position: relative;
    width: 100%;
    height: 100%;
}

.objects_main-row_img_block a img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
}

.objects_main-row_content{
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.objects_main-row_content_info{
    display: flex;
    flex: 1 1;
    flex-direction: column;
    justify-content: space-between;
}

.objects_main-row_content_info_title{
    display: flex;
    margin-bottom: 12px;
}

.title_span{
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    font-family: Lato,sans-serif;
    letter-spacing: normal;
    text-align: left;
}

.title_span_link{
    transition: color .15s;
    color: #0468ff;
    text-decoration: none;
    font-size: 18px;
}

.objects_main-row_content_info_buttons{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    line-height: 0;
}

.phone_div a{
    background-color: var(--primary_100);
    color: var(--white_100);
    padding: 3px 11px;
    height: 28px;
    display: inline-flex;
    position: relative;
    cursor: pointer;
    outline: none;
    border: 1px solid transparent;
    border-radius: 4px;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
}

.phone_div a:hover{
    text-decoration: none;
}

/* ********************************************** */
@media (max-width: 575px){
    .objects_main-row{
        flex-direction: column;
    }
    
    .objects_main-row_checkbox{
        margin: 0 0 25px 0;
    }
    
    .objects_main-row_img{
        flex-basis: 150px;
        margin: 0 20px;
        min-width: 150px;
        height: 150px;
    }
    
    .objects_main-row_content{
        margin-top: 20px;
    }
}
</style>