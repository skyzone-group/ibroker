<template>
    <button class="favorites-frontend_box_block_button_btn mr-2">
        <slot></slot>
    </button>
</template>


<script>
export default {
    
}
</script>

<style>
.favorites-frontend_box_block_button_btn{
    position: relative;
    cursor: pointer;
    outline: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    border-radius: 4px;
    white-space: nowrap;
    background-color: var(--secondary_button_10);
    color: var(--primary_100);
    vertical-align: middle;
}

.favorites-frontend_box_block_button_btn i{
    font-size: 1rem;
    color: var(--primary_100);
    font-weight: 500;
}
</style>