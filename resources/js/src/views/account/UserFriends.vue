<template>
    <div class="add-friends-main">
        <div class="add-friends-main-box">
            <Toast />
            <DataTable 
            :value="friends" 
            stripedRows 
            removableSort 
            showGridlines  
            v-model:filters="filters"
            filterDisplay="menu"
            :loading="loading"
            :globalFilterFields="['friendInfo.firstname', 'friendInfo.lastname', 'friendInfo.phone', 'status']"
            :resizableColumns="true" 
            columnResizeMode="fit"
            v-model:selection="selectedCustomer" 
            stateStorage="session"
            selectionMode="single"
            responsiveLayout="scroll">
                <template #header>
                    <div class="table-header">
                        <div class="row">
                            <div class="col-md-6 col-12">
                                Друзъя
                            </div>
                            <div class="col-md-6 col-12">
                                <div class="table-header-actions d-flex align-items-center justify-content-end">
                                    <InputText type="text" v-model="filters['global'].value" placeholder="Поиск..." class="d-inline-block mr-1 action-filter-input"/>
                                    <Button label="Добавить друга" class="action-add-friend" @click="visibleRight = true"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template #empty>
                    No customers found.
                </template>
                <template #loading>
                    Loading customers data. Please wait.
                </template>
                <Column field="firstname" header="Пользователь" sortable sortField="friendInfo.firstname">
                    <template #body="slotProps">
                        <div class="media">
                            <div class="media-aside align-self-center">
                                <div class="media-avatar rounded-circle">
                                    <img v-if="slotProps.data.friendInfo.image != null" :src="`/file/${slotProps.data.friendInfo.image}`" :alt="slotProps.data.friendInfo.image">
                                    <img v-else :src="src" alt="user_avatar-def">
                                </div>
                            </div>
                            <div class="media-body">
                                <a href="#!" class="font-weight-bold d-block text-nowrap"> {{slotProps.data.friendInfo.firstname}} {{slotProps.data.friendInfo.lastname}}</a>
                                <a v-if="slotProps.data.friendInfo.firstname == null && slotProps.data.friendInfo.lastname == null" href="#!" class="font-weight-bold d-block text-nowrap">User {{slotProps.data.friendInfo.id}}</a>
                                <small class="text-muted">ID: {{slotProps.data.friendInfo.id}}</small>
                            </div>
                        </div>
                    </template>
                </Column>
                <Column field="phone" header="Телефон" sortable sortField="friendInfo.phone">
                    <template #body="slotProps">
                        {{slotProps.data.friendInfo.phone}}
                    </template>
                </Column>
                <Column field="status" header="Статус" sortable style="min-width: 10rem">
                    <template #body="slotProps">
                        <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                        <!-- {{slotProps}} -->
                    </template>
                </Column>
                <Column :exportable="false" style="min-width:8rem" header="Действие">
                    <template #body="slotProps">
                        <form @submit.prevent="confirmUser(slotProps.data.friendInfo.id)" method="POST">
                            <Button v-if="slotProps.data.owner == false && slotProps.data.status == 'request'" type="submit" label="Принять" class="p-button-rounded p-button-success mr-2"/>
                            <Button label="Отменить" class="p-button-rounded p-button-danger" @click="confirmDeleteUser(slotProps.data.friendInfo.id)" />
                        </form>
                    </template>
                </Column>
                <template #footer>
                    Всего {{friends ? friends.length : 0 }} друга.
                </template>
            </DataTable>
            <div class="user-info-succes-box">
                <Toast />
                <div class="profile_form-avatar-delete">
                    <form v-if="deleteProductDialog" @submit.prevent="deleteImage()" class="profile_form" method="POST">
                        <Dialog header="Confirm" v-model:visible="deleteProductDialog" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '40vw'}" :modal="true">
                            <div class="confirmation-content d-flex align-items-center">
                                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                                <span v-if="friend_id">Are you sure you want to delete <b>{{friend_id}}</b>?</span>
                            </div>
                            <template #footer>
                                <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false"/>
                                <Button label="Yes" type="submit" icon="pi pi-check" class="p-button-danger"  @click="deleteProduct" autofocus />
                            </template>
                        </Dialog>
                    </form>
                </div>
            </div>
            <div class="add-friends-main-box-sidebar">
                <Sidebar v-model:visible="visibleRight" :baseZIndex="10000" position="right">
                    <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
                        <h5 class="mb-0"> Добавить нового друга </h5>
                        <svg @click="visibleRight = !visibleRight" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 cursor-pointer feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </div>
                    <div class="p-3">
                        <form v-if="!user" @submit.prevent="searchUser()" method="POST" :model="form">
                            <div class="options_main__items_inputs options_main__items_inputs_media flex-column" style="max-width: 100% !important;">
                                <span class="inputs_block_title"> 
                                    Телефонный номер:
                                    <div class="required_inputs"></div>
                                </span>
                                <div class="options_main__items_inputs_block d-flex flex-column options_main__items_inputs_block-add">
                                    <span v-if="!user" style="color: red;">{{message}}</span>
                                    <div class="input-medium-6 dc-input-6-1-2">
                                        <div class="dc-input__input-container-6-1-2 input_div">
                                            <input id="phone" class="dc-input__input-6-1-2" maxlength="24" placeholder="" type="number" tabindex="0" v-model="form.phone" name="phone">
                                        </div>
                                    </div>
                                    <p class="my-2">
                                        Найдите риэлтора по телефонному номеру для отправки запроса на добавления в друзъя
                                    </p>
                                    <Button type="submit" :loading="loadingBtn[1]" label="Поиск" icon="pi pi-search" style="background-color: var(--primary_100);" :disabled="form.phone.length == 0"/>
                                </div>
                            </div>
                        </form>
                        <div class="user-box" v-else>
                            <span v-if="message" class="alert-success p-1">{{message}}</span>
                            <div class="media user-box-list my-2">
                                <div class="media-aside align-self-center">
                                    <div class="media-avatar rounded-circle">
                                        <img v-if="!user.image" :src="src" alt="user_avatar">
                                        <img v-if="user.image" :src="`/file/${user.image}`" alt="user_avatar">
                                    </div>
                                </div>
                                <div class="media-body">
                                    <a href="#!" class="font-weight-bold d-block text-nowrap">
                                        <span v-if="user.firstname != null || user.lastname != null">{{user.firstname}}  {{user.lastname}}</span>
                                        <span v-else>User {{user.id}}</span>
                                    </a>
                                    <small class="text-muted">{{user.phone}}</small>
                                </div>
                            </div>
                            <p v-if="not_friend != 'not_friend'" class="my-2">
                                Отправлена заявка на добавления в Друзъя!
                            </p>
                            <p v-if="confirm_message == 'confirm'" class="my-2 alert-success p-1">
                                Ваш друг
                            </p>
                            <div class="user-box-btns w-100">
                                <form v-if="confirm == true" class="user-box-btn" @submit.prevent="sendUser(user.id)" method="POST">
                                    <div class="user-btn w-100">
                                        <Button type="submit" :loading="loadingBtn[2]" class="w-100" label="Добавить друга"  style="background-color: var(--primary_100);" :disabled="confirm_btn == true || message "/>
                                    </div>
                                </form>
                                <form v-if="confirm == false" @submit.prevent="confirmUser(user.id)" class="user-box-btn" method="POST">
                                    <div class="user-btn w-100">
                                        <Button type="submit" :loading="loadingBtn[2]" class="w-100" label="Принять"  style="background-color: var(--primary_100);" :disabled="message" />
                                    </div>
                                </form>
                                <div class="user-box-btn">
                                    <Button type="button" label="Отмена"  class="p-button-danger w-100" @click="resetUser"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Sidebar>
            </div>
        </div>
	</div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import {FilterMatchMode,FilterOperator} from 'primevue/api';
import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog';
import Sidebar from 'primevue/sidebar';
import defaultImage from "../../../../../public/images/avatar-dafault.png"
export default {
    components: {
        DataTable,
        Column,
        ColumnGroup,
        Button,
        InputText,
        Toast,
        Dialog,
        Sidebar
    },
    data() {
        return {
            form: {
                phone: "",
            },
            src: defaultImage,
            customers: null,
            filters: null,
            loading: false,
            loadingBtn: [false, false],
            selectedCustomer: null,
            deleteProductDialog: false,
            friend_id: null,
            visibleRight: false,
            user: null,
            friends: [],
            message: null,
            not_friend: null,
            ownerr: false,
            confirm: null,
            confirm_message: null,
            confirm_btn: false,
        }
    },
    created() {
        this.initFilters1();
        this.getFriends();
    },
    methods: {
        initFilters1() {
            this.filters = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                'firstname': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'lastname': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'phone': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
                'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
            }
        },
        searchUser(){
            const token = localStorage.getItem('token');
            this.loadingBtn[1] = true;
            axios.post('/api/friend/search',  this.form, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            }).then(response => {
                setTimeout(() => this.loadingBtn[1] = false, 1000);
                if(response.data.status == true){
                    if(response.data.result.status == 'not_friend'){
                        this.user = response.data.result;
                        this.confirm = true;
                    }
                    else if(response.data.result.status == 'request'){
                        this.user = response.data.result.friendInfo;
                        if(this.user.phone != response.data.result.phone){
                            this.confirm = true;
                            this.confirm_btn = false;
                        }
                        else{
                            this.confirm_btn = true;
                        }
                        
                        // this.confirm_message = response.data.result.status;
                        
                    }
                    else if(response.data.result.status == 'confirm'){
                        this.user = response.data.result;
                        this.not_friend = response.data.result.status;
                        this.confirm = false;
                    }
                    this.message = response.data.result.message;
                }
                else{
                    this.message = response.data.error.message;
                    this.$toast.add({severity:'error', summary: 'User not found', detail:'Message Content', life: 3000});
                }
            });
        },
        sendUser(id){
            const token = localStorage.getItem('token');
            this.loadingBtn[2] = true;
            let formm = new FormData();
            formm.append('friendId', id);
            axios.post('/api/friend/send-request',  formm, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            }).then(response => {
                setTimeout(() => this.loadingBtn[2] = false, 1000);
                if(response.data.status == false){
                    this.message = response.data.error.message;
                }
                else{
                    this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
                }
                
                // window.location.reload();
            })
            .catch(function (error) {
                // this.onFailure(error.response.data.message);
                alert(error);
            });
        },
        confirmUser(id){
            const token = localStorage.getItem('token');
            let formm = new FormData();
            formm.append('friendId', id);
            axios.post('/api/friend/confirm',  formm, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            }).then(response => {
                if(response.data.status == false){
                    this.message = response.data.error.message;
                }
                else{
                    this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
                }
                window.location.reload();
            })
            .catch(function (error) {
                // this.onFailure(error.response.data.message);
                alert(error);
            });
        },
        getFriends(){
            this.loading = true;
            const token = localStorage.getItem('token');
            axios.get('/api/friend/all', {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            })
            .then(response => {
                this.friends = response.data.result;
                // Array.from(data).forEach(file => this.friends.push(file.user));
                // console.log(this.friends);
                // console.log(this.users);
                this.loading = false;
            });
        },
        confirmDeleteUser(id) {
            this.friend_id = id;
            this.deleteProductDialog = true;
        },
        deleteProduct() {
            const token = localStorage.getItem('token');
            // console.log(this.friend_id);
            let formDelete = new FormData();
            formDelete.append('friendId', this.friend_id);
            axios.post('/api/friend/delete', formDelete, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            }).then(response => {
                this.$toast.add({severity:'success', summary: 'Друг удален', detail: 'Product Deleted', life: 3000});
                this.deleteProductDialog = false;
                window.location.reload();
            })
            .catch(function (error) {
                // this.onFailure(error.response.data.message);
                alert(error);
            });
        },
        resetUser(){
            this.user = "",
            this.message = null,
            this.form.phone = ""
        }
    },
}
</script>

<style> 
.add-friends-main{
    display: flex;
    flex: 1 1;
    max-width: 100%;
}

.add-friends-main-box{
    /* display: flex; */
    flex: 1 1;
    margin-bottom: 20px;
}

.table-header-actions .action-add-friend{
    background-color: var(--primary_100);
    color: var(--white_100);
    display: inline-flex;
    text-decoration: none;
    padding: 5px 14px;
    position: relative;
    cursor: pointer;
    outline: none;
    border: 1px solid transparent;
    border-radius: 4px;
    white-space: nowrap;
    align-items: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
}
.table-header-actions .action-filter-input{
    padding: 5px 14px;
    font-size: 14px;
    flex: 1;
}

.media{
    display: flex;
    align-items: flex-start;
}

.media .media-aside {
    margin-right: 1rem;
    display: flex;
}

.media .media-aside .media-avatar{
    width: 50px;
    height: 50px;
}
.media .media-aside .media-avatar img{
    width: 100%;
    height: 100%;
    object-fit: cover !important;
    border-radius: inherit;
}

.media .media-body a{
    font-size: 16px;
}

.user-box-list{
    padding: 5px;
    border: 1px solid #e9ecef;
    border-radius: 3px;
}

.content-sidebar-header{
    background-color: #f6f6f6 !important;
}

.content-sidebar-header h5{
    font-size: 18px;
    font-weight: 500;
}
.px-2 {
    padding-left: 1.5rem!important;
    padding-right: 1.5rem!important;
}
.py-1 {
    padding-bottom: 1rem!important;
    padding-top: 1rem!important;
}

/* .p-2 {
    padding: 1.5rem!important;
} */

.p-datatable {
    position: relative;
    box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
}

.user-box-btns{
    display: flex;
    flex-wrap: wrap;
    margin: -4px;
}

.user-box-btn{
    display: flex;
    flex: 1 0 auto;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin: 4px;
}
/* ****************************************************** */
@media (max-width: 575px){
    .add-friends-main{
        display: block;
    }
}
@media (max-width: 475px){
    .p-sidebar-right {
        width: 25rem;
    }
}
</style>