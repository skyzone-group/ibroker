<template>
    <div class="friendship-main">
        <div class="friendship-main-box">
            <div v-for="users in data" :key="users.id" class="friendship-items py-2">
                <form @submit.prevent="confirmFriendship(users.owner)" class="profile_form" method="POST">
                    <div class="friendship-box">
                        <div class="friendship-box-aside align-self-center">
                            <div class="user-photo rounded-circle" style="width: 60px; height: 60px;">
                                <img :src="`/file/${users.friendship.image}`" alt="" class="w-100 h-100" style="object-fit: cover; border-radius: inherit;">
                            </div>
                        </div>
                        <div class="friendship-body">
                            <a v-if="users.friendship.firstname == null && users.friendship.lastname == null" href="#!" class="font-weight-bold d-block text-nowrap user-title">User {{users.friendship.id}}</a>
                            <a v-else href="#!" class="font-weight-bold d-block text-nowrap user-title">{{users.friendship.firstname}}  {{users.friendship.lastname}}</a>
                            <p class="text-muted text-5 mb-0">ID: {{users.friendship.id}}</p>
                            <p class="text-muted text-5 mb-0">Телефон: <a :href="`tel:+${users.friendship.phone}`">{{users.friendship.phone}}</a></p>
                        </div>
                        <!-- <div class="friendship-reason">
                            sended request to be friend
                        </div> -->
                        <div class="friendship-right ml-4">
                            <Button :loading="loadingBtn[1]" type="submit" icon="pi pi-check" class="p-button-success" :disabled="(users.status == 'confirm')" />
                            <Button type="submit" icon="pi pi-trash" class="p-button-danger ml-2"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button';
export default {
    components: {
        Button
    },
    props: {
        data: {
            type: Array
        }
    },
    data() {
        return {
            loadingBtn: [false, false],
        }
    },
    methods: {
        confirmFriendship(id){
            this.loadingBtn[1] = true;
            const token = localStorage.getItem('token');
            let owner = id;
            let form = new FormData();
            form.append('owner', owner);
            axios.post('/api/confirm/friend', form, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                }
            }).then(response => {
                setTimeout(() => this.loadingBtn[1] = false, 1000);
                window.location.reload();
                // window.location.href = '/account/user/list/objects';
            })
            .catch(function (error) {
                // this.onFailure(error.response.data.message);
                alert(error);
            });
        }
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