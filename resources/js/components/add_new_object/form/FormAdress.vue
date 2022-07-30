<template>
    <div class="address_map">
        <div class="header_title">
            <div class="header_title_content d-flex flex-column">
                <h4 class="header_title_content_txt mb-0">Адрес</h4>
                <span class="header_title_content_txt_sub">Укажите адрес или передвиньте метку на карте</span>
            </div>
            <div id="address" class="postion-relative">
                <div class="address_block">
                    <div class="address_block_div">
                        <div class="address_block_div_item">
                            <input type="text" placeholder="Укажите адрес">
                            <i class="pi pi-spin pi-spinner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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