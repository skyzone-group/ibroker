<template>
    <div class="user-area-sidebar">
        <div class="user_block">
            <div class="user-profile">
                <div class="user-profile-block d-flex">
                    <a href="#!" class="user-profile-avatar">
                        <div class="user-profile-img"></div>
                    </a>
                    <div class="user-profile-info">
                        <a href="#!" class="user-profile-info-link">
                            <div class="user-profile-info-linktxt">
                                Javohir
                            </div>
                            <div class="user-profile-info-linktxt">
                                Toirov
                            </div>
                            <div class="user-profile-info-id">
                                ID 12345678
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <ul class="user_block-ul">
                <li class="user_block-ul-li">
                    <router-link :to="{ name: 'summary'}" class="user_block-ul-li-link">
                        <div class="icon-div">
                            <svg data-name="IconHome" width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill-rule="evenodd" stroke-width="1.6" d="M12.726 6.2L7.067 1.074 1.287 6.2h1.62v7h8.165v-7h1.654z"></path></svg>
                        </div>
                        Сводка
                    </router-link>
                </li>
                <li class="user_block-ul-li">
                    <router-link :to="{ name: 'myaccount'}" class="user_block-ul-li-link">
                        <div class="icon-div">
                            <svg data-name="IconUser" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" stroke="none" d="M13.432 13.39c-1.445.866-4.357 1.026-5.42 1.01H7.99c-1.07.016-3.974-.14-5.42-1.01-.05-.704-.065-2.374.79-3.524.522-.703 1.28-1.1 2.317-1.214.01 0 .016-.006.023-.007.623.623 1.395.976 2.3.976.922 0 1.698-.344 2.317-.97l.004.005c1.04.114 1.8.51 2.32 1.214.857 1.15.84 2.82.795 3.523M6.227 2.283C6.62 1.83 7.217 1.6 8 1.6c.78 0 1.377.23 1.77.687.455.527.644 1.37.53 2.38-.16 1.53-.69 3.355-2.3 3.355-1.692 0-2.168-2.102-2.3-3.357-.112-1.013.076-1.86.527-2.382M13.874 8.9c-.638-.863-1.526-1.418-2.622-1.686.284-.668.49-1.452.587-2.368.16-1.466-.166-2.752-.918-3.624C10.232.422 9.222 0 8 0 6.773 0 5.76.42 5.072 1.218c-.76.88-1.077 2.133-.914 3.624.097.912.31 1.697.6 2.37-1.1.267-1.99.822-2.633 1.688-1.505 2.037-1.07 4.953-1.053 5.076.032.204.14.388.3.512C3.197 15.908 6.91 16 7.84 16h.316c.93 0 4.644-.092 6.47-1.512.162-.126.27-.31.3-.512.02-.123.453-3.04-1.054-5.076"></path></svg>
                        </div>
                        Профиль
                    </router-link>
                </li>
                <li class="user_block-ul-li">
                    <router-link :to="{ name: 'objects'}" class="user_block-ul-li-link">
                        <div class="icon-div">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                        </div>
                        <div class="txt">
                            Мои объявления
                            <svg data-name="IconArrowLabel" width="5" height="5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 5"><path fill="currentColor" fill-rule="evenodd" d="M3 1h1v1L1 5 0 4l3-3zm2 3V0H1v1h3v3h1z" opacity=".4"></path></svg>
                        </div>
                    </router-link>
                </li>
                <li class="user_block-ul-li">
                    <router-link :to="{ name: 'userfavorites'}" class="user_block-ul-li-link">
                        <div class="icon-div">
                            <svg data-name="IconLike" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path stroke-width="1.6" d="M8 13.967c5.99-4.902 7.2-6.39 7.2-8.737 0-1.89-1.53-3.424-3.42-3.43-1.33 0-2.165.522-3.18 1.67l-.6.677-.6-.677C6.386 2.322 5.55 1.8 4.22 1.8 2.33 1.805.8 3.34.8 5.23c0 2.347 1.21 3.835 7.2 8.737z"></path></svg>
                        </div>
                        <div class="txt">
                            Избранное
                            <svg data-name="IconArrowLabel" width="5" height="5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 5"><path fill="currentColor" fill-rule="evenodd" d="M3 1h1v1L1 5 0 4l3-3zm2 3V0H1v1h3v3h1z" opacity=".4"></path></svg>
                        </div>
                        <div class="number-saved">
                            <span data-name="Badge" class="circle_num">2</span>
                        </div>
                    </router-link>
                </li>
                <li class="user_block-ul-li">
                    <router-link :to="{ name: 'userfavorites'}" class="user_block-ul-li-link">
                        <div class="icon-div">
                            <svg data-name="IconMessage" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17"><g fill="currentColor" stroke="none"><path d="M16.65 7.458C16.196 3.236 12.644.03 8.386 0c-1.62.002-3.192.47-4.55 1.35C1.57 2.804.29 4.927.036 7.657-.116 9.302.232 10.93 1.05 12.39c-.045.347-.096.696-.147 1.043l-.377 2.702.615-.046c1.05-.15 2.1-.29 3.1-.43l.125.02c1.215.66 2.587 1.01 3.97 1.01.62-.003 1.24-.07 1.84-.204 4.15-.926 6.938-4.81 6.486-9.04zM2.468 14.23l.083-.57c.05-.346.1-.702.15-1.08.03-.314-.02-.628-.16-.91l-.04-.098c-.64-1.148-.92-2.448-.8-3.76.205-2.198 1.23-3.903 3.05-5.068C5.84 2.04 7.1 1.664 8.396 1.66H8.4c2.822 0 5.35 1.79 6.284 4.457.66 1.8.5 3.795-.436 5.47-.933 1.68-2.544 2.88-4.42 3.292-.492.1-.996.16-1.492.16-1.11-.01-2.21-.29-3.19-.83-.265-.14-.56-.217-.86-.217-.074 0-.147.005-.222.014l-1.588.214z"></path><circle cx="5.149" cy="8.35" r="1"></circle><circle cx="8.349" cy="8.35" r="1"></circle><circle cx="11.549" cy="8.35" r="1"></circle></g></svg>
                        </div>
                        <div class="txt">
                            Сообщения
                            <svg data-name="IconArrowLabel" width="5" height="5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 5"><path fill="currentColor" fill-rule="evenodd" d="M3 1h1v1L1 5 0 4l3-3zm2 3V0H1v1h3v3h1z" opacity=".4"></path></svg>
                        </div>
                        <div class="number-saved">
                            <span data-name="Badge" class="circle_num">0</span>
                        </div>
                    </router-link>
                </li>
                <li class="user_block-ul-li">
                    <router-link :to="{ name: 'mycomplaints'}" class="user_block-ul-li-link">
                        <div class="icon-div">
                            <svg data-name="IconComplaints" width="16" height="16" viewBox="0 0 75 75"><g fill="#475258"><path d="M59.41176509857178,3.911764621734619 H15.411765098571777 a14.017,14.017 0 0 0 -14,14 v28 a14.017,14.017 0 0 0 14,14 H26.474265098571777 l9.4023,11.2813 a1.999,1.999 0 0 0 3.07,0 L48.34926509857178,59.91176462173462 H59.41176509857178 a14.0169,14.0169 0 0 0 14,-14 v-28 A14.017,14.017 0 0 0 59.41176509857178,3.911764621734619 zm10,42 a10.0105,10.0105 0 0 1 -10,10 H47.41176509857178 a1.9978,1.9978 0 0 0 -1.5352000000000001,0.7188000000000003 L37.41176509857178,66.78676462173462 L28.94696509857178,56.63056462173462 A1.9975,1.9975 0 0 0 27.411765098571777,55.91176462173462 H15.411765098571777 a10.0105,10.0105 0 0 1 -10,-10 v-28 a10.0105,10.0105 0 0 1 10,-10 H59.41176509857178 a10.0105,10.0105 0 0 1 10,10 z"></path><path d="M37.41176509857178,39.91176462173462 a4,4 0 1 0 4,4 A4.004,4.004 0 0 0 37.41176509857178,39.91176462173462 zm0,3.9961 "></path><path d="M37.41176509857178,15.91176462173462 a4.004,4.004 0 0 0 -4,4 v12 a4,4 0 0 0 8,0 v-12 A4.004,4.004 0 0 0 37.41176509857178,15.91176462173462 z"></path></g></svg>
                        </div>
                        Жалобы
                    </router-link>
                </li>
                <li class="user_block-ul-li">
                    <router-link :to="{ name: 'friends'}" class="user_block-ul-li-link">
                        <div class="icon-div">
                            <i class="fas fa-users" style="font-size: 16px; font-weight: 600; color: currentColor;"></i>
                        </div>
                        Друзъя
                    </router-link>
                </li>
            </ul>
            <ul class="user_block-ul">
                <li class="logout">
                    <span>
                        <svg data-name="IconLogout" width="16" height="16" class="logout__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.2 15.2"><g fill="currentColor" stroke="none"><path d="M14.8.4h-8c-.22 0-.4.18-.4.4v.8c0 .22.18.4.4.4h6.64c.088 0 .16.072.16.16v10.88c0 .088-.072.16-.16.16H6.8c-.22 0-.4.18-.4.4v.8c0 .22.18.4.4.4h8c.22 0 .4-.18.4-.4V.8c0-.22-.18-.4-.4-.4z"></path><path d="M4.04 9.784L2.658 8.4H10.8c.22 0 .4-.18.4-.4v-.8c0-.22-.18-.4-.4-.4H2.657L4.04 5.416c.157-.156.157-.41 0-.566l-.397-.396c-.156-.156-.41-.156-.565 0L.048 7.487c-.063.062-.063.164 0 .226l3.03 3.033c.157.156.41.156.566 0l.396-.396c.156-.156.157-.41 0-.566z"></path></g></svg>
                        Выйти
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
.user-area-sidebar{
    flex: 1 1 auto;
    background-color: #f4f4f4;
    height: 100%;
}

.user_block{
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    border-right: 1px solid #e4e4e4;
    padding: 20px 10px;
    width: 300px;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
}

.user-profile{
    margin-bottom: 8px;
    border-bottom: 1px solid #e4e4e4;
    padding: 0 10px 20px;
}

.user-profile-avatar{
    display: flex;
    flex: 0 0 56px;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    border-radius: 50%;
    background-color: #e4e4e4;
    height: 56px;
    overflow: hidden;
    user-select: none;
    text-decoration: none;
}

.user-profile-img{
    background: url('../../../public/images/avatar.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}

.user-profile-info{
    display: flex;
    flex: 1 1;
    flex-direction: column;
    justify-content: center;
}

.user-profile-info-link{
    cursor: pointer;
    color: #2b87db;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    text-decoration: none;
}

.user-profile-info-linktxt{
    color: #121212;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.43;
}

.user-profile-info-id{
    margin-top: 1px;
    color: #7a7a7a;
    font-size: 12px;
    line-height: 1.5;
}

.user_block-ul{
    margin: 0;
    border-bottom: 1px solid #e4e4e4;
    padding: 0 0 20px;
    list-style: none;
}

.user_block-ul-li{
    position: relative;
    margin-bottom: 2px;
    border-radius: 3px;
}

.user_block-ul-li-link{
    display: flex;
    padding: 12px 10px 10px 40px;
    color: #121212;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.29;
    text-decoration: none;
    background-color: transparent;
}

.icon-div{
    fill: none;
    stroke: #475258;
    position: absolute;
    left: 10px;
    color: #475258;
}

svg:not(:root) {
    overflow: hidden;
}

.user-area-sidebar li a.router-link-active{
    background-color: hsla(0,0%,7%,.05);
    border-radius: 3px;
}
.txt{
    position: relative;
    margin-right: 5px;
}
.txt svg{
    position: absolute;
    top: 3px;
    right: -7px;
}

.number-saved{
    margin-left: 10px;
}

.circle_num{
    border-radius: 100px;
    background-color: hsla(0,0%,7%,.1);
    padding: 3px 10px 4px;
    color: rgba(0,0,0,.87);
    font-weight: 700;
    font-size: 14px;
    line-height: 1.2;
}
.user_block-ul:not(:first-of-type) {
    margin-top: 6px;
    border-bottom: none;
    padding: 0 0 20px;
}
.user_block-ul:last-of-type {
    margin-bottom: 20px;
    border-bottom: none;
    padding-bottom: 0;
}

.logout{
    margin-bottom: 0;
    display: block;
    position: relative;
    cursor: pointer !important;
    border-radius: 3px;
    padding: 12px 10px 10px 40px;
    color: #121212;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.29;
    text-decoration: none;
}
.logout:hover{
    background-color: hsla(0,0%,7%,.05);
    color: #121212;
    cursor: pointer !important;
}

.logout__icon{
    fill: none;
    stroke: #475258;
    position: absolute;
    left: 10px;
    color: #475258;
}
/* ************************************************* */
@media (min-width: 1025px){
    .user-profile-info-link {
        line-height: 1.43;
    }
}

@media (max-width: 767px){
    .user-area-sidebar{
        display: none;
    }
    
    
}
</style>