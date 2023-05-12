<template>
    <div class="container">
        <img src="/images/logo.png" alt="">
        <section class="main-form">
            <h2>{{title}}</h2>
            <form @submit.prevent="submitForm()">
                <input v-model="donorDetails.email" type="email" placeholder="email">
                <input v-model="donorDetails.password" type="password" placeholder="password">
                <input v-if="title == 'Register'" v-model="donorDetails.repeat_password" type="password" placeholder="repeat password">
                <button> {{title.toLowerCase()}} </button>
                <router-link to="/d-auth/login" v-if="title=='Register'">Have an account, login?</router-link>
                <router-link to="/d-auth/register" v-if="title=='Login'">Don't have an account, register?</router-link>
            </form>
        </section>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                title: 'Register',
                donorDetails:{
                    email: '',
                    password: '',
                    repeat_password: '',
                }
            }
        },
        beforeMount(){
            this.$route.params.id == 'login' ? this.showLogin() : this.showRegister()
        },
        watch:{
            $route(to){
                to.params.id == 'login' ? this.showLogin() : this.showRegister()
            }
        },
        methods:{
            showLogin(){
                this.title = 'Login'
            },
            showRegister(){
                this.title = 'Register'
            },
            submitForm(){
                if(this.title == 'Register'){
                    const newDonor = {
                        email: this.donorDetails.email,
                        password: this.donorDetails.password
                    }
                    const oldDonors = JSON.parse(localStorage.getItem('donors'))
                        
                    if(oldDonors){
                        const updatedDonors = [newDonor, ...oldDonors]
                        localStorage.setItem('donors', JSON.stringify(updatedDonors))
                    }else{
                        localStorage.setItem('donors', JSON.stringify(newDonor))
                    }
                    this.$router.push('/home')
                }


                if(this.title == 'Login'){
                    console.log(this.title)
                    const newDonor = {
                        email: this.donorDetails.email,
                        password: this.donorDetails.password
                    }
                    const donors = JSON.parse(localStorage.getItem('donors'))
                    const foundUser = donors.find((donor) => donor.email == newDonor.email)
                    if(foundUser)
                        this.$router.push('/home')
                    else{
                        alert('User does not exist')
                    }
                }
            }
        }
    }
</script>

<style lang="css" scoped>
    *{
        font-family: 'Sono';
    }
    .container{
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items: center;
        background-color: #f1f1f1;
        height: 100vh;
        /* border: 1px solid red; */
    }
    .container img{
        width: 200px;
    }
    .container .main-form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        padding: 20px;
        width: 30%;
        background-color: #fff;
        box-shadow:  20px 20px 60px #bebebe,
        -20px -20px 60px #ffffff;
    }
    .container .main-form form{
        display: flex;
        flex-direction: column;
        justify-content:space-around;
        align-items: center;
        gap: 30px;
        /* border: 1px solid; */
    }
    .main-form form input{
        padding: 10px;
        border: 0.8px solid green;
        border-radius: 10px;
        padding: 10px;
    }
    .main-form form button{
        padding: 15px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        color: #fff;
        background-color: green;
        /* border: 2px solid green; */
    }


</style>