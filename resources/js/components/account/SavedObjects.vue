<template>
    <div class="widget_favorites">
        <div class="title">Избранное</div>
        <div class="widget_favorites__content">
            <ul class="content-ul">
                <li class="content-ul-li">
                    <a href="#!" class="content-ul-li-link">
                        <div class="content-ul-li-link_img">
                            <div class="content-ul-li-link_img_backg"></div>
                        </div>
                        <div class="content-ul-li-link-txt">
                            <p class="content-ul-li-link-txt_info mb-0">Покупка 3-комн. кв., 150 000 000 ₽</p>
                            <span class="content-ul-li-link-txt_info">1-й Красногвардейский проезд, д. 22с2, Москва</span>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="content_footer">
                <router-link :to="{name: 'userfavorites'}" class="content_footer-link">
                    Все избранные объявления (1)
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>


<style scoped>
.widget_favorites{
    position: relative;
    box-shadow: 0 1px 0 0 #e4e4e4;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    background-color: #fff;
}

.title{
    border-bottom: 1px solid #e4e4e4;
    padding: 15px;
    color: #121212;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.33;
}

.content-ul{
    margin: 0;
    padding: 0;
    list-style: none;
}

.content-ul-li-link{
    display: flex;
    padding: 15px;
    text-decoration: none;
    transition: .3s ease;
}

.content-ul-li-link:hover{
    background-color: rgba(43,135,219,.1);
}
.content-ul-li-link_img{
    display: flex;
    flex: 0 0 64px;
    margin-right: 16px;
    border-radius: 2px;
    height: 64px;
    overflow: hidden;
}

.content-ul-li-link_img_backg{
    background-size: cover !important;
    width: 100%;
    height: 100%;
    background: url('../../../../public/images/architecture.jpg');
}

.content-ul-li-link-txt{
    display: flex;
    flex: 1 1;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    overflow: hidden;
}

.content-ul-li-link-txt_info{
    overflow: hidden;
    font-size: 14px;
    line-height: 1.43;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.content-ul-li-link-txt_info:first-child{
    margin-bottom: 2px;
    color: #121212;
    font-weight: 700;
}
.content-ul-li-link-txt_info:nth-child(2){
    color: #7a7a7a;
}

.content_footer-link{
    display: block;
    border-top: 1px solid #e4e4e4;
    padding: 15px;
    cursor: pointer;
    color: #2b87db;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
}
.content_footer-link:hover{
    color: #1a62a6;
}
/* *************************************************** */
@media (min-width: 1025px){
    .content_footer-link {
        line-height: 1.43;
    }
}
</style>