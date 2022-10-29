<template>
    <div class="loader">
        
    </div>
</template>

<style scoped>
.loader{  /* Loader Div Class */
    position: absolute;
    top:0px;
    right:0px;
    width:100%;
    height:100%;
    background-color:#eceaea;
    background-image: url('../../../public/images/icons/ajax-loader-gif.gif');
    background-size: 100px;
    background-repeat:no-repeat;
    background-position:center;
    /* background-position-y: 80%; */
    z-index:10000000;
    opacity: 0.4;
    filter: alpha(opacity=40);
}
</style>