<template>
    <div class="partners-page-frontend">
        <div class="partners-page-main">
            <div class="container_fluid">
                <div class="partners-page-main-block">
                    <div class="partners-page-main-block-links">
                        <div class="row">
                            <div class="col">
                                <router-link :to="{name: 'agents'}" class="btn btn-default mr-2 active">
                                    Агентство
                                </router-link>
                                <router-link :to="{name: 'realtors'}" class="btn btn-default mr-2 active">
                                    Риэлтор
                                </router-link>
                                <router-link :to="{name: 'zastroyshiki'}" class="btn btn-default mr-2 active">
                                    Застройщик
                                </router-link>
                            </div>
                            <div class="col col-auto d-lg-block d-md-block d-sm-block d-none">
                            Найдено: 1224 пользователей
                            </div>
                        </div>
                    </div>
                    <div class="partners-page-main-box">
                        <div class="partners-page-main-box-content">
                            <div class="row ml-0 mr-0">
                                <div class="col col-auto pl-0 pr-0">
                                    <div class="dropdown">
                                        <a class="btn dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                                            Больше объявлений
                                        </a>

                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Больше объявлений</a>
                                            <a class="dropdown-item" href="#">Меньше объявлений</a>
                                            <a class="dropdown-item" href="#">Выше рейтинг</a>
                                            <a class="dropdown-item" href="#">Ниже рейтинг</a>
                                            <a class="dropdown-item" href="#">Популярные</a>
                                            <a class="dropdown-item" href="#">Непопулярные</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-auto ml-auto pl-0 pr-0 d-lg-none d-md-none d-sm-none d-block">
                                    <button class="mobile_filter">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" class="bi bi-filter mr-2" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" id="mainIconPathAttribute" stroke-width="2"></path> </svg>
                                            Фильтр
                                    </button>
                                </div>
                                <div class="col col-lg-auto col-md-auto col-sm-auto col-12 ml-auto pl-0 pr-0">
                                    Pagination
                                </div>
                            </div>
                            <div class="listing mt-3">
                                <router-view name="partners"></router-view>
                            </div>
                        </div>
                        <div v-if="!Sidebar" class="partners-page-main-box-sidebar">
                            <div class="sticky">
                                <div class="partners-page-main-box-search">
                                    <div class="block__header">
                                        <b class="block__title title">Поиск по профилям</b>
                                    </div>
                                    <div class="block__body">
                                        <form method="POST" class="block__body_form">
                                            <div class="field w-100">
                                                <span class="p-float-label">
                                                    <InputText id="name-organization" type="text" v-model="nameOrganization" class="w-100" />
                                                    <label for="name-organization">Название организации</label>
                                                </span>
                                            </div>
                                            <div class="field w-100">
                                                <span class="p-float-label">
                                                    <InputText id="phone" type="text" v-model="phone" class="w-100" />
                                                    <label for="phone">Телефон</label>
                                                </span>
                                            </div>
                                            <div class="field w-100">
                                                <span class="p-float-label">
                                                    <InputText id="keyword" type="text" v-model="keyword" class="w-100" />
                                                    <label for="keyword">Ключевое слово</label>
                                                </span>
                                            </div>
                                            <div class="submit_btn">
                                                <input type="submit" value="Поиск" class="btn btn-lg btn-primary btn-block">
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';

export default {
    components: {
        InputText
    },
    data() {
        return {
            nameOrganization: "",
            phone: "",
            keyword: "",
            Sidebar: false,
        }
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 1024){
                this.Sidebar = true;
                return;
            }
            this.Sidebar = false;
            return;
        },
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen()
    },
}
</script>


<style>
.partners-page-main-box{
    display: flex;
    margin: 0 auto;
    padding: 30px 0;
    width: 100%;
}

.partners-page-main-box-content{
    flex: 1;
    min-width: 0;
}
.partners-page-main-block{
    margin-top: 60px;
}

.partners-page-main-block-links .btn-default,
.user__footer .btn-default{
    color: #242629;
    transition: border-color .5s;
    background-color: #fff;
    border-color: #d3d4d4 !important;
    height: 40px;
    padding: 0 16px;
    box-shadow: none;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: center;
    position: relative;
    text-align: center;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 5px;
}

.partners-page-main-block-links a.router-link-active{
    border-color: var(--primary_100) !important;
    color: #444;
    background-color: #fff;
    background-image: none;
}

.partners-page-main-box-sidebar{
    flex: none;
    margin-left: 20px;
    /* padding-top: 50px; */
    width: 380px;
}
.partners-page-main-box-sidebar .sticky{
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
    width: 100%;
}

.partners-page-main-box-search{
    margin-bottom: 1.875rem;
    border: 1px solid #dedede;
    background: #fff;
}

.partners-page-main-box-search .block__header{
    padding: 1.5rem 1.5rem 0;
}

.block__title{
    font-size: 1.25rem;
    color: #000;
}

.block__body{
    padding: 1.5rem 1.5rem;
}

.block__body_form .field .p-inputtext{
    font-size: .875rem;
    line-height: 1.3;
    padding: 12px;
}

.block__body_form .field label{
    font-size: 14px;
    color: #000;
}

.block__body_form .field{
    margin-bottom: 20px;
}

.submit_btn .btn-primary{
    border-color: var(--primary_100)!important;
    background-color: var(--primary_100)!important;
    border-radius: 0.1875rem;
}

.partners-page-main-box-content .dropdown-toggle{
    color: #242629;
    transition: border-color .5s;
    background-color: #fff;
    border-color: #d3d4d4 !important;
    height: 40px;
    padding: 0 16px !important;
    box-shadow: none;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: center;
    position: relative;
    text-align: center;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 5px;
}

.partners-page-main-box-content .dropdown-toggle:after{
    display: none;
}

.partners-page-main-box-content .dropdown .dropdown-menu .dropdown-item:hover {
    background-color: #F8F8F8;
    color: var(--primary_100);
}

.mobile_filter{
    color: #242629;
    transition: border-color .5s;
    background-color: #fff;
    border-color: #d3d4d4 !important;
    height: 40px;
    padding: 0 16px !important;
    box-shadow: none;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: center;
    position: relative;
    text-align: center;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
}
/* ********************************************** */
@media (max-width: 991px){
    .partners-page-main-box {
        padding: 30px 0 !important;
    }
}

@media (max-width: 475px){
    .partners-page-main-box {
        padding: 15px 0 !important;
    }
}
</style>