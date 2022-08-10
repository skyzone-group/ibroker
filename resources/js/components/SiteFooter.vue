<template>
    <footer class="footer_nav_bar">
        <div class="header__nav-container d-block">
            <div class="footer-concept row">
                <div class="col-lg-3">
                    <div class="footer-concept_logo">
                        <a href="#!">
                            <h1 class="w-100">LOGO</h1>
                            <span class="logo__slogan">Aql bilan toping</span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3">
                    <b class="footer__title h5">Пользователям</b>
                    <div class="footer_nav_list">
                        <ul class="footer_nav_list_ul">
                            <li class="footer_nav_list_ul_li">
                                <a href="#!">
                                    О Нас
                                </a>
                            </li>
                            <li class="footer_nav_list_ul_li">
                                <a href="#!">
                                    Помощь
                                </a>
                            </li>
                            <li class="footer_nav_list_ul_li">
                                <a href="#!">
                                    Условия пользования сайтом
                                </a>
                            </li>
                            <li class="footer_nav_list_ul_li">
                                <a href="#!">
                                    Правила пользования услугами портала ibroker.uz
                                </a>
                            </li>
                            <li class="footer_nav_list_ul_li">
                                <a href="#!">
                                    Добавить объявление
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <b class="footer__title h5">Профессионалам</b>
                    <div class="footer_nav_list">
                        <ul class="footer_nav_list_ul">
                            <li class="footer_nav_list_ul_li">
                                <a href="#!">
                                    Личный кабинет
                                </a>
                            </li>
                            <li class="footer_nav_list_ul_li">
                                <a href="#!">
                                    Регистрация
                                </a>
                            </li>
                            <li class="footer_nav_list_ul_li">
                                <a href="#!">
                                    Разместить объявление
                                </a>
                            </li>
                            <li class="footer_nav_list_ul_li">
                                <a href="#!">
                                    Избранное
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <b class="footer__title h5">Контактная информация</b>
                    <div class="footer_nav_list">
                        <ul class="footer_nav_list_ul">
                            <li class="footer_nav_list_ul_li">
                                <a href="#!">
                                    Личный кабинет
                                </a>
                            </li>
                            <li class="footer_nav_list_ul_li">
                                <a href="#!">
                                    Регистрация
                                </a>
                            </li>
                            <li class="footer_nav_list_ul_li">
                                <a href="#!">
                                    Разместить объявление
                                </a>
                            </li>
                            <li class="footer_nav_list_ul_li">
                                <a href="#!">
                                    Избранное
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer__end">
                <div class="footer__end-text text-center">
                    © 2022 ИП ООО «Seide International»,Все права защищены
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style>
.footer_nav_bar{
    padding: 40px 0;
    background: #fff;
    font-size: .875rem;
    color: #bbb;
}

.footer-concept_logo{
    position: relative;
    display: inline-block;
    width: 172px;
    padding-bottom: 0.5rem;
}

.footer-concept_logo a h1{
    font-size: 45px;
    color: var(--primary_100);
    font-weight: 600;
    margin-bottom: 0;
}

.logo__slogan{
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: .625rem;
    font-family: Helvetica,Arial,sans-serif;
    font-weight: 700;
    font-style: italic;
    color: #000;
}

.footer__title {
    display: block;
    padding-top: 0.25rem;
    margin-bottom: 1.25rem;
    font-weight: 600;
    color: var(--primary_100);
}

.footer_nav_list_ul{
    padding: 0;
    margin: 0;
    list-style: none;
}

.footer_nav_list_ul_li:not(:last-child) {
    margin-bottom: 0.125rem;
}

.footer_nav_list_ul_li a{
    color: #000;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    line-height: 20px;
    outline: none;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
    font-size: 14px;
    transition: .3s easy;
}

.footer_nav_list_ul_li a:hover{
    color: var(--primary_100);
    border-bottom: 1px solid var(--primary_100);
}

.footer__end{
    padding-top: 1.75rem;
    border-top: 1px solid var(--primary_100);
}

.footer-concept {
    margin-bottom: 5rem;
}

.footer__end-text{
    color: #000;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    line-height: 20px;
    outline: none;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
    font-size: 16px;
}
</style>