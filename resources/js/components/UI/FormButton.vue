<template>
    <div class="form__field_btn btn" @click="updateActivePlan" :class="{'active' : this.activePlan == this.formText}" @keydown.space="updateActivePlan">
        {{ this.formText }}             
    </div>                 
</template>


<script>
export default {
    model: {
        prop: 'activePlan',
        event: 'onUpdatePlan'
    },
    props: ['formText', 'activePlan'],
    methods: {
        updateActivePlan(){
            this.$emit('onUpdatePlan', this.formText)
        }
    },
}
</script>

<style scoped>
.form__field_btn{
    border-radius: 0 5px 5px 0;
    height: 40px;
    align-items: center;
    background-color: #fff;
    border: 1px solid #d3d4d4;
    box-shadow: none;
    box-sizing: border-box;
    color: #242629;
    cursor: pointer;
    display: flex;
    font: 500 14px/20px;
    justify-content: center;
    letter-spacing: normal;
    margin: 0;
    max-width: 100%;
    min-width: 0;
    outline: none;
    padding: 0 16px;
    position: relative;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
}

.form__field_btn:first-child {
    border-radius: 5px 0 0 5px;
}

.form__field_btn:not(:last-child) {
    border-right: 0;
}

.form__field_btn.active{
    background-color: var(--form-button-color);
    border-bottom-color: var(--form-button-color);
    border-top-color: var(--form-button-color);
    color: #fff;
}

.form__field_btn.active:first-child {
    border-left-color: var(--form-button-color);
}
.form__field_btn.active:last-child {
    border-left-color: var(--form-button-color);
}
</style>