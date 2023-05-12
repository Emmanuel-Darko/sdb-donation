<template>
    <div class="banner">
        <section class="banner-left">
            <img class="logo" src="/images/logo.png" alt="logo">
            <div class="text-body">
                <h1 class="head-text">Donate</h1>
                <span class="head-sub">to <b>Save</b> </span>
                <span class="head-sub2">the <b>world!</b> </span>
            </div>
            <button class="start"> <router-link to="/d-auth/login"> pass a coin 💰 </router-link></button>
            <img class="smile" src="/images/smile.svg" alt="smile">
        </section>
        <section class="banner-right">
            <img src="/images/banner.jpg" alt="banner">
        </section>
    </div>
</template>

<script>
</script>

<style lang="css" scoped>
    *{
        box-sizing: border-box;
        font-family: 'Sono';
    }
    .banner{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #f1f1f1;
        height: 100vh;
        overflow: hidden;
        background: linear-gradient(
            to right,
            #f1f1f1,
            #E9EFEC,
            #F1F4F2,
            #F1F4F2,
            #C5AD93
        );
    }
    .banner-left{
        width: 60%;
        height: 100%;
        padding-left: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        /* border: 1px solid; */
    }
    .banner-left .logo{
        width: 250px;
        height: 250px;
        margin-top: -100px;
        margin-bottom: 80px;
        /* position: absolute; */
        top: 0px;
    }
    .banner-left .text-body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* border: 1px solid green; */
    }
    .banner-left .head-text{
        margin-top: -100px;
        font-size: 120px;
        color: orange;
    }
    .banner-left .head-sub{
        font-size: 80px;
        color: green;
        margin-top: -70px;
    }
    .banner-left .head-sub2{
        font-size: 80px;
        color: brown;
        margin-bottom: 40px;
    }
    .banner-left .start{
        padding: 20px;
        border-radius: 10px;
        border: none;
        font-size: 20px;
        box-shadow: 5px 5px 9px orange,
        -5px -5px 9px green;
        /* margin-top: -20px; */
        cursor: pointer;
    }
    .banner-left .start a{
        text-decoration: none;
        color: #000;
    }

    .banner-left .start:hover{
        box-shadow: none;
        border: 1px solid green;
        box-shadow:  5px 5px 9px #d1bba1,
        -5px -5px 9px #ffffe7;
    }
    .banner-left .smile{
        width: 200px;
        position: absolute;
        bottom: -120px;
        overflow: hidden;
        /* display: none; */
        animation-name: smiley;
        animation-duration: 5s;
        animation-iteration-count: infinite;
    }
    @keyframes smiley{
        0% {bottom: -120px;}
        50% {bottom: -145px;}
        100% {bottom: -120px;}
    }
    .banner-right{
        width: 40%;
        height: 100%;
    }
    .banner-right img{
        width: 100%;
        height: 100%;
        object-fit:cover;
    }
</style>