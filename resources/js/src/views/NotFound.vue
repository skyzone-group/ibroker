<template>
    <div class="section-container">
        <header class="logo">
            <a href="/">
                <img id="logo" class="logo-image" src="/images/logo/logo.png" alt="logo">
                <!-- <h1><span>i</span>BROKER</h1> -->
            </a>
        </header>
        <article id="article" class="info">
            <h1 class="title">Страница не найдена</h1>
            <h5 class="subtitle">Возможно, у вас опечатка в адресе страницы, или её просто не существует :(</h5>
            <div class="button-container">
                <a class="button nohover" href="/">Перейти на главную</a>
            </div>
            <h5 class="error-code">Ошибка 404</h5>
        </article>
    </div>
</template>

<style scoped>
.section-container{
    height: 100vh;
    padding: 80px;
    flex-grow: 1;
    flex-shrink: 0;
    background-size: 84% auto;
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-image: url('/images/404.svg');
}

.logo-image {
    width: 250px;
    margin-bottom: 52px;
}

.info {
    width: 100%;
    max-width: 400px;
}

.title {
    font-size: 38px;
    line-height: 46px;
    color: #000;
    margin: 0 0 16px;
}

.subtitle {
    font-size: 18px;
    line-height: 24px;
    color: #737A8E;
    margin: 0 0 32px;
}

.button-container {
    margin: 36px 0;
}

.button {
    display: -ms-inline-flexbox;
    display: inline-flex;
    color: #fff;
    text-decoration: none;
    flex-direction: row;
    padding: 3px 12px 5px;
    font-size: 14px;
    line-height: 20px;
    background: var(--form-button-color);
    border-radius: 4px;
    transition: background .2s;
}

.error-code {
    font-size: 22px;
    line-height: 28px;
    color: #152242;
    margin: 0 0 32px;
}

@media (max-width: 575px) {
    .info{
        max-width: 100%;
    }

    .title {
        font-size: 35px;
        line-height: 40px;
    }

    .subtitle {
        font-size: 17px;
        line-height: 20px;
        margin: 0 0 25px;
    }

    .logo-image {
        margin-left: auto;
        margin-right: auto;
    }

    .section-container {
        padding: 80px 40px;
    }
}

@media (max-width: 475px){
    .section-container {
        padding: 80px 16px;
    }
}

@media (max-width: 414px){
    .title {
        font-size: 30px;
        line-height: 35px;
    }

    .logo-image {
        width: 200px;
    }
}

</style>