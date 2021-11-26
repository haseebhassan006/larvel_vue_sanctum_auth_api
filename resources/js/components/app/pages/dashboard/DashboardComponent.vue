<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Dashboard Component</div>

                    <div class="card-body">
                
                    <!-- <router-link :to="{name:'dashboard'}" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
                     <a class="dropdown-item" href="javascript:void(0)" @click="logout">Logout</a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
export default {
    name:"dashboard-layout",
    // data(){
    //     return {
    //         user:this.$store.state.auth.user
    //     }
    // },
    // methods:{
    //     ...mapActions({
    //         signOut:"auth/logout"
    //     }),
    //     async logout(){
    //         await axios.post('/logout').then(({data})=>{
    //             this.signOut()
    //             this.$router.push({name:"login"})
    //         })
    //     }
    // }
}
</script>
