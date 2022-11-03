<template>
    <div class="friendship-main">
        <div class="friendship-main-box">
            <div v-for="users in data" :key="users.id" class="friendship-items py-2">
                <div v-if="users.owner == false" class="profile_form" method="POST">
                    <div class="friendship-box">
                        <div class="friendship-box-aside align-self-center">
                            <div class="user-photo rounded-circle" style="width: 60px; height: 60px;">
                                <img :src="`/file/${users.friendInfo.image}`" alt="" class="w-100 h-100" style="object-fit: cover; border-radius: inherit;">
                            </div>
                        </div>
                        <div class="friendship-body">
                            <a v-if="users.friendInfo.firstname == null && users.friendInfo.lastname == null" href="#!" class="font-weight-bold d-block text-nowrap user-title">User {{users.friendInfo.id}}</a>
                            <a v-else href="#!" class="font-weight-bold d-block text-nowrap user-title">{{users.friendInfo.firstname}}  {{users.friendInfo.lastname}}</a>
                            <p class="text-muted text-5 mb-0">ID: {{users.friendInfo.id}}</p>
                            <p class="text-muted text-5 mb-0">Телефон: <a :href="`tel:+${users.friendInfo.phone}`">{{users.friendInfo.phone}}</a></p>
                        </div>
                        <!-- <div class="friendship-reason">
                            sended request to be friend
                        </div> -->
                        <div class="friendship-right ml-4">
                            <Button :loading="loadingBtn" @click.prevent="this.$store.dispatch('confirmFriendship', users.friendInfo.id)" type="submit" icon="pi pi-check" class="p-button-success" :disabled="(users.status == 'confirm')" />
                            <Button :loading="isLoaded" type="submit" icon="pi pi-trash" class="p-button-danger ml-2" @click.prevent="this.$store.dispatch('deleteFriend', users.friendInfo.id)" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="user-info-succes-box">
                <Toast />
            </div>
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { mapGetters } from 'vuex'

export default {
    components: {
        Button,
        Toast
    },
    props: {
        data: {
            type: Array
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        // confirmFriendship(id){
        //     this.loadingBtn[1] = true;
        //     const token = localStorage.getItem('token');
        //     let owner = id;
        //     let form = new FormData();
        //     form.append('owner', owner);
        //     axios.post('/api/friend/confirm', form, {
        //         headers: {
        //             'Authorization': `Bearer ${token}`, 
        //         }
        //     }).then(response => {
        //         setTimeout(() => this.loadingBtn[1] = false, 1000);
        //         window.location.reload();
        //         // window.location.href = '/account/user/list/objects';
        //     })
        //     .catch(function (error) {
        //         // this.onFailure(error.response.data.message);
        //         alert(error);
        //     });
        // }
    },
    computed: {
        ...mapGetters({
            loadingBtn: 'loadingBtn'
        }),
    },
}
</script>

<style>
.friendship-box{
    display: flex;
    align-items: flex-start;
}
.friendship-box-aside{
    margin-right: 1rem;
    display: flex;
}

.friendship-body{
    -webkit-box-flex: 1;
    flex: 1;
}

.friendship-body .user-title{
    font-size: 18px;
}

.friendship-items{
    border-bottom: 1px solid #e4e4e4;
}
</style>