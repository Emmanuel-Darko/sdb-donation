<template>
    <div class="container">
        <div class="l-image">
            <router-link to="/"><img src="/images/logo.png" alt="logo"></router-link>
        </div>

        <ul class="nav">
            <li><router-link :to="{name:'home', params:{id:'donate'}}"> Donate </router-link></li>
            <li><router-link  :to="{name:'home', params:{id:'receipients'}}"> Receipients </router-link></li>
            <li><router-link  :to="{name:'home', params:{id:'mydonations'}}"> My donations </router-link></li>
            <!-- <button v-if="postRoute=='profile'" @click="logoutUser()">Log out</button> -->
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .container{
        /* background-color: transparent; */
    }
    .l-image{
        width: 80px;
        height: 80px;
        margin: auto;
        position: absolute;
        left: 50px;
        border-radius: 50%;
        margin-top: -15px;
        overflow: hidden;
        /* background: #ffce6c; */
        box-shadow:  5px 5px 9px #a1d1a6,
        -5px -5px 9px #ffffe7;
    }
    .l-image img{
        width: auto;
        height: 120%;
        margin-top: -5px;
        margin-left: -10%;
    }
    ul.nav{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        list-style: none;
        margin: 40px 0;
        padding: 10px;
        /* border: 1px solid; */
        /* box-shadow:  20px 20px 60px #bebebe,
        -20px -20px 60px #ffffff; */
    }
    ul.nav li a{
        font-size: large; 
        font-weight: 600;
        text-decoration: none;
        color: black;
        padding: 10px;
        transition: 0.2s;
        border: 1px solid green;
        border-radius: 5px;
        box-shadow:  20px 20px 60px #bebebe,
        -20px -20px 60px #ffffff;
    }
    ul.nav li a:hover{
        box-shadow: none;
        border-width: 3px;
    }
    .router-link-exact-active {
        background-color: green;
        color: #fff;
        box-shadow: none;
        text-decoration: none;
    }
    a.router-link-active.router-link-exact-active{
        color: #fff;
    }

    .nav button{
        font-family: 'Sono';
        position: absolute;
        right: 50px;
        margin-top: -3px;
        width: 100px;
        padding: 10px;
        font-size: 16px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background: orange;
        box-shadow: 20px 20px 60px #bebebe,
        -20px -20px 60px #ffffff;
    }
    .nav button:hover{
        box-shadow: none;
    }
</style>