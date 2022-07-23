<template>
    <div>
        <div class="widget_phone_email">
            <div class="widget_phone">
                <form class="phone-form position-relative">
                    <div class="phone-div">
                        <div class="phone-div_block">
                            <div class="phone-div_block_content">
                                <label class="phone-div_block_content_label">
                                    <span class="phone-div_block_content_label_span">
                                        Номер телефона
                                        <span class="phone-div_block_content_label_span_notification span_warning">Не подтверждён</span>
                                    </span>
                                </label>
                            </div>
                            <div class="phone-div_block_input mt-3">
                                <label class="phone-div_block_input_label">
                                    <InputText type="text" v-model="phone" class="w-100" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="#!" class="phone-form-btn">Подтвердить номер телефона</a>
                    </div>
                </form>
            </div>
            <div class="widget_email">
                <div class="widget_email-div">
                    <div class="widget_email-div_txt">
                        Электронная почта 
                        <svg data-name="IconCheck" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 10"><path fill="currentColor" fill-rule="evenodd" d="M5.44 9.5h-.01a1.03 1.03 0 0 1-.727-.31L.293 4.68a1.03 1.03 0 0 1 1.473-1.44l3.686 3.77L12.247.297a1.03 1.03 0 1 1 1.447 1.464L6.164 9.2c-.194.19-.454.298-.725.298"></path></svg>
                    </div>
                    <p class="widget_email-div__email">toirov1427@gmail.com</p>
                    <a href="#!" class="phone-form-btn">Сменить электронную почту</a>
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
            phone: "+99890 359-22-84",
        }
    },
}
</script>


<style scoped>
    .widget_phone_email{
        margin-bottom: 10px;
        box-shadow: 0 1px 0 0 #e4e4e4;
        border: 1px solid #e4e4e4;
        border-radius: 3px;
        background-color: #fff;
    }

    .widget_phone{
        border-bottom: 1px solid #e4e4e4;
        padding: 15px;
    }

    .phone-div{
        margin-bottom: 10px;
    }

    .phone-div_block_content_label{
        display: inline-block;
        cursor: pointer;
        color: #7a7a7a;
    }

    .phone-div_block_content_label_span{
        font-size: 14px;
    }


    /* Phone notification classses */
    .span_warning{
        margin-left: 8px;
        border-radius: 3px;
        background-color: #ff4b43;
        padding: 2px 6px;
        color: #fff;
        font-weight: 700;
        font-size: 11px;
        line-height: 16px;
    }

    .span_success{
        margin-left: 8px;
        border-radius: 3px;
        background-color: #49ff43;
        padding: 2px 6px;
        color: #fff;
        font-weight: 700;
        font-size: 11px;
        line-height: 16px;
    }

    /* ******************* */
    .phone-div_block_input_label{
        display: block;
        position: relative;
    }

    .phone-form-btn{
        cursor: pointer;
        color: #2b87db;
        font-weight: 700;
        font-size: 14px;
        text-decoration: none;
    }

    .phone-form-btn:hover{
        color: #1a62a6;
    }

    .widget_email{
        padding: 15px;
    }

    .widget_email-div_txt{
        margin-bottom: 6px;
        color: #7a7a7a;
    }

    .widget_email-div_txt svg{
        margin-left: 4px;
        width: 14px;
        height: 9.5px;
        color: #2e9e00;
    }

    .widget_email-div__email{
        margin-bottom: 6px;
        font-size: 16px;
        line-height: 18px;
    }
    
    /* ************************************** */
    @media (min-width: 1025px){
        .phone-div {
            margin-bottom: 7px;
        }
    
        .phone-div_block_content_label_span{
            font-size: 12px;
        }
        
        .phone-div_block_input_label{
            width: 201px;
        }
        
        .phone-form-btn{
            line-height: 1.43;
        }
    }
</style>