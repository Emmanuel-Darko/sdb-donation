<template>
    <div class="container">
        <h2 style="border:1px solid red">{{ title }}</h2>
        <label for="email">Email</label>
        <input type="email" placeholder="email">
        <input type="password" placeholder="password">
        <input v-if="title == 'register'" type="repeat_password" placeholder="confirm password">
        <button>{{title}}</button>

        <router-link v-if="title == 'login'" to="/momo/register">register</router-link>
        <router-link v-if="title =='register' " to="/momo/login">login</router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                title: 'Register',
            }
        },
        beforeMount(){
            if(this.$route.params.id == 'login'){
                this.showLogin()
            }
            if(this.$route.params.id == 'register'){
                this.showRegister()
            }
        },
        watch:{
            $route(to, from){
                if(to.params.id == 'login'){
                    this.showLogin()
                }
                if(to.params.id == 'register'){
                    this.showRegister()
                }
            }
        },
        methods: {
            showLogin(){
                this.title = 'login'

            },
            showRegister(){
                this.title = 'register'

            },
            // changeBtn(){
            //     this.title = 'Update'
            // }
        }
    }
</script>

<style lang="css" scoped>
    .container{
        border: 1px solid #666;
        width: 30%;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: flex-start;
        align-items: center;
        /* padding: 20px 0; */
    }

</style>