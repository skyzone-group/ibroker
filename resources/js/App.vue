<template>
    <div>
        <router-view class="main-view"></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style>
    /* #app{
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    } */
    
    .modal-backdrop {
        z-index: 999 !important;
    }
    
    .modal {
        z-index: 1000 !important;
    }
</style>