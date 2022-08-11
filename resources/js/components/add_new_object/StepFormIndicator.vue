<template>
    <div class="form_inficator_box">
        <div class="step_form">
            <h3 class="step_form_title">Обязательно для заполнения</h3>
            <nav class="d-flex flex-column">
                <div class="steps_item">
                    <button v-scroll-to="'#section-one'" class="steps_item_btn steps_item_btn_icon_left" role="button">
                        <div class="link_icon">
                            <div class="icon_div">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm3.8-8.3a1 1 0 00-1.42-1.4L7.2 8.46a.28.28 0 01-.4 0l-1.1-1.1A1 1 0 004.3 8.8l2.08 2.09c.34.34.9.34 1.24 0L11.8 6.7z"></path></svg>
                            </div>
                        </div>
                        <span class="link_txt">
                            <span>Тип объявления</span>
                        </span>
                    </button>
                </div>
                <div class="steps_item">
                    <button v-scroll-to="'#section-two'" class="steps_item_btn steps_item_btn_icon_left" role="button">
                        <div class="link_icon">
                            <div class="icon_div">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm3.8-8.3a1 1 0 00-1.42-1.4L7.2 8.46a.28.28 0 01-.4 0l-1.1-1.1A1 1 0 004.3 8.8l2.08 2.09c.34.34.9.34 1.24 0L11.8 6.7z"></path></svg>
                            </div>
                        </div>
                        <span class="link_txt">
                            <span>Адрес</span>
                        </span>
                    </button>
                </div>
                <div class="steps_item">
                    <button v-scroll-to="'#section-three'" class="steps_item_btn steps_item_btn_icon_left" role="button">
                        <div class="link_icon">
                            <div class="icon_div">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm3.8-8.3a1 1 0 00-1.42-1.4L7.2 8.46a.28.28 0 01-.4 0l-1.1-1.1A1 1 0 004.3 8.8l2.08 2.09c.34.34.9.34 1.24 0L11.8 6.7z"></path></svg>
                            </div>
                        </div>
                        <span class="link_txt">
                            <span>Фотографии</span>
                        </span>
                    </button>
                </div>
                <div class="steps_item">
                    <button v-scroll-to="'#section-four'" class="steps_item_btn steps_item_btn_icon_left" role="button">
                        <div class="link_icon">
                            <div class="icon_div">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm3.8-8.3a1 1 0 00-1.42-1.4L7.2 8.46a.28.28 0 01-.4 0l-1.1-1.1A1 1 0 004.3 8.8l2.08 2.09c.34.34.9.34 1.24 0L11.8 6.7z"></path></svg>
                            </div>
                        </div>
                        <span class="link_txt">
                            <span>Параметры</span>
                        </span>
                    </button>
                </div>
                <div class="steps_item">
                    <button v-scroll-to="'#section-five'" class="steps_item_btn steps_item_btn_icon_left" role="button">
                        <div class="link_icon">
                            <div class="icon_div">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm3.8-8.3a1 1 0 00-1.42-1.4L7.2 8.46a.28.28 0 01-.4 0l-1.1-1.1A1 1 0 004.3 8.8l2.08 2.09c.34.34.9.34 1.24 0L11.8 6.7z"></path></svg>
                            </div>
                        </div>
                        <span class="link_txt">
                            <span>Цена</span>
                        </span>
                    </button>
                </div>
                <div class="steps_item">
                    <button v-scroll-to="'#section-six'" class="steps_item_btn steps_item_btn_icon_left" role="button">
                        <div class="link_icon">
                            <div class="icon_div">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm3.8-8.3a1 1 0 00-1.42-1.4L7.2 8.46a.28.28 0 01-.4 0l-1.1-1.1A1 1 0 004.3 8.8l2.08 2.09c.34.34.9.34 1.24 0L11.8 6.7z"></path></svg>
                            </div>
                        </div>
                        <span class="link_txt">
                            <span>Описание</span>
                        </span>
                    </button>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>


<style>
.step_form{
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.2rem 0.4rem 0 #00000012;
    margin-bottom: 1.6rem;
    padding: 1.6rem;
}

.step_form_title{
    margin-bottom: 1.6rem;
    font-size: 20px;
}

.steps_item{
    height: 2rem;
    margin-top: 15px;
}

.steps_item_btn{
    -webkit-appearance: none;
    background-color: initial;
    border: none;
    box-shadow: none;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    font-family: SeroPro,sans-serif;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    margin: 0;
    outline: none;
    padding: 0;
    position: relative;
    text-align: left;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
}

.steps_item_btn_icon_left{
    padding-left: 24px;
}

.link_icon{
    font-size: medium;
    color: #242629;
    display: block;
    position: absolute;
    top: 2px;
    left: 0;
}

.icon_div{
    display: inline-block;
    height: 16px;
    line-height: 16px;
    min-height: 16px;
    min-width: 16px;
    overflow: hidden;
    width: 16px;
    color: #d3d4d4;
}
.link_txt{
    height: 19px;
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-bottom-color: rgba(36,38,41,.12);
    color: #242629;
}
</style>