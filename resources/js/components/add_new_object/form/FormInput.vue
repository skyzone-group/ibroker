<template>
    <input type="text" >
</template>

<script>
export default {
    
}
</script>

<style>
.header_title_content_txt_sub{
    margin-bottom: 20px;
    line-height: 2rem;
}

.address_block{
    display: flex;
}

.address_block_div{
    position: relative;
    width: 100%;
}

.address_block_div_item{
    background-color: #fff;
    border: 0.1rem solid #c9cbcd;
    border-radius: 0.5rem;
    height: 40px;
    transition: border-color .2s ease 0s;
    will-change: border-color;
    display: flex;
}

.address_block_div_item input{
    -webkit-appearance: none;
    background-color: initial;
    border: none;
    border-radius: inherit;
    color: #242629;
    flex: 1 1 auto;
    font-family: inherit;
    font-size: 16px;
    outline: none;
    padding-left: 1.4rem;
    width: 0;
}

.address_block_div_item:hover {
    border-color: #242629;
}

.address_block_div_item i{
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    right: 0.75rem;
    color: #6c757d;
}
</style>