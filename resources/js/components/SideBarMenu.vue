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
/* ************************************************* */
@media (min-width: 1025px){
    .user-profile-info-link {
        line-height: 1.43;
    }
}
</style>