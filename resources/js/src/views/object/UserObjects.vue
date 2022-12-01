<template>
    <div class="agent_objects_page_frontend">
        <div class="agent_objects_page_main">
            <div class="container_fluid">
                <div v-if="loaderProgress" class="loader-main-box" style="height: 100vh;">
                    <ProgressSpinner style="width:80px; height:80px" strokeWidth="3" fill="var(--surface-ground)" animationDuration="1s" />
                </div>
                <div v-else class="agent_objects_page_main_box mb-5">
                    <div class="product-page__content">
                        <div class="product-page_btn_style flex-column">
                            <h2 class="listing__section-title">Объявления пользователя</h2>
                            <div class="objects-top row ml-0 mr-0">
                                <div class="col align-self-center pl-0">
                                    <div class="filters-tabs-buttons">
                                        <label for="type__filter_all" class="filters-tabs-item Radio_theme_realty" :class="{'active' : form.object_deals == 'all'}">
                                            <input @change="pushParamsURL()" v-model="form.object_deals" id="type__filter_all" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="all">
                                            Все
                                        </label>
                                        <label for="type__filter_buy" class="filters-tabs-item Radio_theme_realty" :class="{'active' : form.object_deals == 'buy'}">
                                            <input @change="pushParamsURL()" v-model="form.object_deals" id="type__filter_buy" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="buy">
                                            Продажа
                                        </label>
                                        <label for="type__filter_rent" class="filters-tabs-item Radio_theme_realty" :class="{'active' : form.object_deals == 'rent'}">
                                            <input @change="pushParamsURL()" v-model="form.object_deals" id="type__filter_rent" type="radio" class="single_button_select_box_label_inpt" tabindex="0" value="rent">
                                            Аренда
                                        </label>
                                    </div>
                                </div>
                                <div class="col align-self-center pr-0">
                                    <Dropdown @change="pushParamsURL()" 
                                    v-model="form.sort_direction" 
                                    :options="sortOptions" 
                                    optionLabel="name_ru" 
                                    optionValue="id" 
                                    placeholder="Сортировка" 
                                    panelClass="sort-object-dropdown"/>
                                </div>
                            </div>
                        </div>
                        <div class="agent_objects_all">
                            <div v-for="object in objects" :key="object.id"  class="object-item">
                                <router-link target="_blank" :to="{name: 'showObject', params: {type_deal: object.object_deals, type: object.object_type.id == 1 ? 'flat' : object.object_type.id == 2 ? 'house' : object.object_type.id == 3 ? 'commercial' : object.object_type.id == 4 ? 'suburban' : 'land', id: object.id}}">
                                    <div class="object-item-block">
                                        <div class="object-photos">
                                            <div class="object-photos-thumb">
                                                <swiper
                                                    :style="{
                                                    '--swiper-navigation-color': '#fff',
                                                    '--swiper-pagination-color': '#fff',
                                                    }"
                                                    :pagination="{
                                                        type: 'fraction',
                                                    }"
                                                    :loop="true"
                                                    :lazy="true"
                                                    :spaceBetween="10"
                                                    :navigation="true"
                                                    :thumbs="{ swiper: thumbsSwiper }"
                                                    :modules="modules"
                                                    class="mySwiper2 w-100"
                                                >
                                                    <swiper-slide @click="this.$router.push({name: 'showObject', params: {type_deal: object.object_deals, type: object.object_type.id == 1 ? 'flat' : object.object_type.id == 2 ? 'house' : object.object_type.id == 3 ? 'commercial' : object.object_type.id == 4 ? 'suburban' : 'land', id: object.id}})" v-for="image in object.images" :key="image.id">
                                                        <img :src="`/file/${image.name}`" class="swiper-lazy"/>
                                                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div> 
                                                    </swiper-slide>
                                                </swiper>
                                            </div>
                                        </div>
                                        <div class="object-body">
                                            <div class="object-body-content">
                                                <div class="object-details">
                                                    <div v-if="mobilePrice == true" class="object-price-list d-flex align-items-center">
                                                        <p class="object-price-list-p">{{ vueNumberFormat(object.price, {}) }}</p>
                                                        <p class="object-price-list-desc ml-2">264 705$/м²</p>
                                                    </div>
                                                    <div class="object-details-item object-details-header">
                                                        <a class="NXJyid" :href="`/show/object/${object.object_deals}/${object.object_type.id == 1 ? 'flat' : object.object_type.id == 2 ? 'house' : object.object_type.id == 3 ? 'commercial' : object.object_type.id == 4 ? 'suburban' : 'land'}/${object.id}`" rel="noopener noreferrer">
                                                            <span v-if="object.object_type_id === 1" class="title">{{ object.object_type.name_ru }}, {{ object.room_count }}-комн , {{object.total_area }} м², {{ object.floor }} / {{ object.floor_count }} этаж</span>
                                                            <span v-if="object.object_type_id === 2" class="title">{{ object.object_type.name_ru }}, {{ object.room_count }}-комн , {{object.total_area }} м², {{ object.floor_count }} этаж, {{ object.land_area }}</span>
                                                            <span v-if="object.object_type_id === 3" class="title">{{ object.object_type.name_ru }}, {{object.total_area }} м²</span>
                                                            <span v-if="object.object_type_id === 4" class="title">{{ object.object_type.name_ru }}, {{object.total_area }} м², {{ object.floor_count }} этаж, {{ object.land_area }} м²</span>
                                                            <span v-if="object.object_type_id === 5" class="title">{{ object.object_type.name_ru }}, {{ object.land_area }} м²</span>
                                                        </a>
                                                    </div>
                                                    <div class="object-details-item object-details-address mt-3">
                                                        <div class="w-100 object-details-item align-items-center">
                                                            <i class="fas fa-map-marker-alt mr-1"></i>
                                                            <span class="PjgOZO">{{object.region.name_ru}}, {{object.district.name_ru}}, {{object.quarter.name_ru}}</span>
                                                        </div>
                                                    </div>
                                                    <div class="object-details-item mt-3">
                                                        <div class="object-details-description">
                                                            {{object.comment}}
                                                        </div>
                                                    </div>
                                                    <div class="object-details-addtional"></div>
                                                </div>
                                                <div v-if="!mobilePrice" class="object-price">
                                                    <div class="object-price-list">
                                                        <p class="object-price-list-p">{{ vueNumberFormat(object.price, {}) }}</p>
                                                        <p class="object-price-list-desc">264 705$/м²</p>
                                                    </div>
                                                </div>
                                                <div v-if="!objectBtns" class="object-actions">
                                                    <button @click.prevent type="button" class="object-actions-btn" title="Добавить в избранное">
                                                        <div class="icon-4-0-1">
                                                            <svg fill="#fff" style="stroke: grey; stroke-width: 1px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                <path clip-rule="evenodd" d="M1 7C.5 3.5 2.7 2 4.8 2 6.82 2 8 4 8 4s1.17-2 3.2-2c2.1 0 4.3 1.5 3.8 5s-5.83 7-7 7-6.5-3.5-7-7z"></path>
                                                            </svg>
                                                        </div>
                                                    </button>
                                                    <div>
                                                        <button @click.prevent type="button" class="object-actions-btn" title="Поделиться объявлением" data-toggle="dropdown">
                                                            <div class="icon-4-0-1">
                                                                <div class="icon-4-0-1">
                                                                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                        <path d="M10.54 2.09l4.1 4.13c.2.2.2.51 0 .7L10.52 11a.3.3 0 01-.51-.21V8.5a.3.3 0 00-.3-.3c-4.94.05-6.1 1.26-6.7 2.97a8.1 8.1 0 00-.3 2.61c0 .21-.26.27-.36.09-4.5-9.06 3.43-9.29 7.39-9.3a.3.3 0 00.3-.3V2.3c0-.27.32-.4.5-.21z"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </button>
                                                        <div class="dropdown-menu dropdown-menu-left">
                                                            <div class="item">
                                                                <div class="hint-head-0-9-4">
                                                                    <div class="title" style="font-weight: 700;">Поделиться объявлением</div>
                                                                </div>
                                                                <div class="hint-content-0-9-4">
                                                                    <div id="share__content" class="share__content_div">
                                                                        <div class="share__content_div_socials">
                                                                            <div>
                                                                                <ShareNetwork
                                                                                    network="telegram"
                                                                                    class="share__content_div_socials_links"
                                                                                    :url="`http://ibroker.skybox.uz/show/object/${object.object_deals}/${object.object_type.id == 1 ? 'flat' : object.object_type.id == 2 ? 'house' : object.object_type.id == 3 ? 'commercial' : object.object_type.id == 4 ? 'suburban' : 'land'}/${object.id}`"
                                                                                    title="iBROKER.uz"
                                                                                    description="⭐ Помогу купить, продать, сдать и снять квартиру в Ташкенте.⭐ Благотворительность."
                                                                                    quote="The hot reload is so fast it\'s near instant. - Evan You"
                                                                                    hashtags="vuejs,vite,javascript"
                                                                                    twitterUser="youyuxi"
                                                                                    @click.prevent
                                                                                >
                                                                                    <i class="fab fah fa-lg fa-telegram-plane" style="color: #0088cc;"></i>
                                                                                </ShareNetwork>
                                                                                <ShareNetwork
                                                                                    network="whatsapp"
                                                                                    class="share__content_div_socials_links"
                                                                                    :url="`http://ibroker.skybox.uz/show/object/${object.object_deals}/${object.object_type.id == 1 ? 'flat' : object.object_type.id == 2 ? 'house' : object.object_type.id == 3 ? 'commercial' : object.object_type.id == 4 ? 'suburban' : 'land'}/${object.id}`"
                                                                                    title="iBROKER.uz"
                                                                                    description="⭐ Помогу купить, продать, сдать и снять квартиру в Ташкенте.⭐ Благотворительность."
                                                                                    quote="The hot reload is so fast it\'s near instant. - Evan You"
                                                                                    hashtags="vuejs,vite,javascript"
                                                                                    twitterUser="youyuxi"
                                                                                    @click.prevent
                                                                                >
                                                                                    <i class="fab fah fa-lg fa-whatsapp" style="color: #25d366;"></i>
                                                                                </ShareNetwork>
                                                                            </div>
                                                                        </div>
                                                                        <copy-to-clipboard v-slot="props">
                                                                            <button @click.prevent="props.copy(`http://ibroker.skybox.uz/show/object/${object.object_deals}/${object.object_type.id == 1 ? 'flat' : object.object_type.id == 2 ? 'house' : object.object_type.id == 3 ? 'commercial' : object.object_type.id == 4 ? 'suburban' : 'land'}/${object.id}`)" :disabled="props.status === 'copied'" type="button" class="object_single_page_btn_style w-100" :class="{'button-disabled' : props.status === 'copied'}">
                                                                                <span class="button-root__text-8-1-3">{{props.status === 'copied' ? 'Ссылка скопирована' : 'Скопировать ссылку'}}</span>
                                                                            </button>
                                                                        </copy-to-clipboard>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="object-body-footer">
                                                <div class="object-details-item">
                                                    <div class="object-details-author">
                                                        <div class="author-box">
                                                            <div style="height: 100%;">
                                                                <picture class="author-box-pic">
                                                                    <img v-if="!owner.image" :src="defaultImage" alt="user_avatar" class="img-full author-box-pic-img" style="object-fit: cover;">
                                                                    <img v-else :src="`/file/${owner.image}`" alt="user_avatar" class="img-full author-box-pic-img" style="object-fit: cover;">
                                                                </picture>
                                                            </div>
                                                        </div>
                                                        <span class="author-name">{{ owner.firstname && owner.firstname ? (`${owner.firstname} ${owner.lastname}`) : `User ${owner.id}`}}</span>
                                                    </div>
                                                </div>
                                                <div class="object-details-item">
                                                    <button @click.prevent v-if="object.id != open" @click="togglePhoneNum(object.id)" class="object-details-item-btn" type="button">
                                                        <span class="object-details-item-btn-txt">Показать телефон</span>
                                                    </button>
                                                    <a v-if="object.id === open" @click.prevent :href="`tel:+${owner.phone}`" class="object-details-item-btn">
                                                        <span class="object-details-item-btn-txt">+{{owner.phone}}</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                            <div v-if="objects.length == 0">
                                <h3 class="text-theme text-center" style="font-size: 25px;color: #000;font-weight: 700;">Результатов не найдено</h3>
                            </div>
                        </div>
                    </div>

                    <!-- sidebar -->
                    <div v-if="!Sidebar" class="product-page__sidebar">
                        <div class="product-page__sticky">
                            <aside class="product-page__sidebar_autor autor_box_style">
                                <div class="product-page__sidebar_autor_bottom autor_bottom_padding">
                                    <div class="product-page__sidebar_autor_bottom_top margin-bottom-24">
                                        <div class="d-flex flex-column align-items-center justify-content-center">
                                            <!-- <div v-if="!user.image" style="background-color: rgb(156, 198, 196);width: 60px;height: 60px;border-radius: 5px;" class="autor_bottom_top_style">TJ</div> -->
                                            <div style="width: 120px;height: 120px;" class="autor_bottom_top_style">
                                                <img v-if="!owner.image" :src="defaultImage" alt="user_avatar_default" class="w-100 h-100" style="object-fit: cover;">
                                                <img v-else :src="`/file/${owner.image}`" alt="user_avatar" class="w-100 h-100" style="object-fit: cover;">
                                            </div>
                                            <div class="product-page__sidebar_autor_bottom_content text-center" style="flex: auto;">
                                                <div class="autor_full_name justify-content-center">
                                                    <a href="/agent-single" target="_blank">{{ owner.firstname }} {{ owner.lastname }}</a>
                                                </div>
                                                <div class="autor_enter_date" style="color: #4b545b99;">
                                                    На iBroker 1 год 1 мес.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-page__sidebar_autor_bottom_button d-flex flex-column">
                                        <button v-if="showPhone[0] == false" @click="showPhone[0] = true" type="button" class="button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3-4 button-root--type-button-reset-8-1-3 button-root-8-1-3">
                                            <span class="button-root__text-8-1-3">Показать телефон</span>
                                        </button>
                                        <a v-if="showPhone[0] == true" :href="`tel:+${owner.phone}`" class="nohover button-root--fluid-8-1-3 button-root--primary-8-1-3 button-root--large-8-1-3-4 button-root--type-button-reset-8-1-3 button-root-8-1-3">
                                            <span class="button-root__text-8-1-3">+{{owner.phone}}</span>
                                        </a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import defaultImage from "../../../../../public/images/avatar-dafault.png"
import ProgressSpinner from 'primevue/progressspinner';
import Dropdown from 'primevue/dropdown';
import CopyToClipboard from '../../../components/CopyToClipboard.vue';
import Button from 'primevue/button';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
// import required modules
import { Autoplay, Pagination, Lazy, FreeMode, Navigation, Thumbs } from "swiper";
export default {
    components: {
        Swiper,
        SwiperSlide,
        ProgressSpinner,
        Dropdown,
        CopyToClipboard,
        Button
    },
    data() {
        return {
            Sidebar: false,
            loaderProgress: false,
            showPhone: [false,false],
            mobilePrice: false,
            objectBtns: false,
            open: null,
            objects: [],
            owner: [],
            defaultImage,
            form: {
                object_deals: this.$route.query.object_deals,
                sort_direction: this.$route.query.order,
            },
            sortOptions: [
                {name_ru: 'Самые новые', name_uz: 'Eng yangi', id: 'date_new'},
                {name_ru: 'Самые старые', name_uz: 'Eng eski', id: 'date_old'},
                {name_ru: 'Самые дорогие', name_uz: 'Eng qimmat', id: 'price_expensive'},
                {name_ru: 'Самые дешевые', name_uz: 'Eng arzon', id: 'price_cheap'},
            ],
        }
    },
    methods: {
        async getObjects(){
            this.loaderProgress = true;
            axios.get('/api/object/getOthers/' + this.$route.params.id, { params: this.$route.query})
            .then(response => {
                this.objects = response.data.result.objects.data;
                this.owner = response.data.result.user;
                this.loaderProgress = false;
            });
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 1024){
                this.Sidebar = true;
                if(this.windowWidth <= 1000){
                    this.mobilePrice = true;
                    if(this.windowWidth <= 736){
                        this.objectBtns = true;
                    }
                }
                return;
            }
            this.objectBtns = false;
            this.mobilePrice = false;
            this.Sidebar = false;
            return;
        },
        pushParamsURL(){
            this.$router.push(
            {
                name: "userObjects",
                query: {
                    object_deals: this.form.object_deals,
                    order: this.form.sort_direction
                }
            });
        },
        togglePhoneNum(id) {
            this.open = this.open === id ? null : id
        },
    },
    async created() {
        this.getObjects();
        this.$watch(() => this.$route.query, this.getObjects);
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    setup() {
        return {
            modules: [Autoplay,Pagination,Lazy,FreeMode,Navigation,Thumbs],
        };
    }
}
</script>

<style>
.listing__section-title{
    display: block;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 1.5rem;
    color: #000;
}

.filters-tabs-item{
    appearance: none;
    background: none;
    border: none;
    border-bottom: 2px solid #0000;
    box-shadow: none;
    box-sizing: border-box;
    color: #737476;
    cursor: pointer;
    display: inline-block;
    font: 600 14px/20px Lato,sans-serif;
    height: 32px;
    letter-spacing: normal;
    margin: 0;
    outline: none;
    padding: 0;
    text-align: left;
    text-decoration: none;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
    transition: .15s ease-in-out;
    white-space: nowrap;
}

.filters-tabs-item+.filters-tabs-item {
    margin-left: 32px;
}

.filters-tabs-item.active{
    border-bottom-color: var(--form-button-color);
    color: var(--form-button-color);
}

.agent_objects_page_main_box .product-page__sidebar {
    width: 320px;
}

.agent_objects_all .object-item .object-photos {
    width: 250px;
}

.agent_objects_all .object-item .object-photos-thumb {
    height: 200px;
}

.agent_objects_all .object-item .object-details {
    width: 300px;
}

.agent_objects_all .object-item .object-price {
    width: 150px;
}

.agent_objects_all .object-details-header .title {
    font-size: 18px;
    line-height: 25px;
}

.agent_objects_all .object-price-list-p {
    font-size: 20px;
    line-height: 25px;
}

.agent_objects_all .object-details-description {
    -webkit-line-clamp: 3;
}


/* ***************************0 */
@media (max-width: 575px){

}
</style>