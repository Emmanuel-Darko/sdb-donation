<template>
    <div class="container">
        <h1 style="text-align: center;">All receipients</h1>
        <div v-for="receipient in receipients" class="main-btn">
            <button @click="show(receipient.email)" class="accordion">{{ receipient.name }}</button>
            <div class="panel" :style="{maxHeight: receipient.email == receipientEmail? showclass : '0px'}">
                <h5>About Receipient</h5>
                <h5>Size</h5>
                {{ receipient.size }}
                <p>{{ receipient.cause }}</p>
                <h5>Contact</h5>
                <p>{{ receipient.email }}</p>
                <p>{{ receipient.location }}</p>
            </div>  
        </div>
        <img class="donation-icon" src="/images/donation2.svg" alt="donation">
    </div>
</template>

<script setup>
    import {ref, onBeforeMount} from 'vue'
    import axios from 'axios'

    // const props = defineProps({
    //     receipients:String
    // })
    let receipients = ref([])
    let showclass = ref('100%')
    let receipientEmail = ref('')

    onBeforeMount(() => {
        const token = localStorage.getItem('donortoken')
        axios.get('http://localhost:4000/donor/getReceipients', {headers: {usertoken:token}})
        .then((res) => {
            // console.log(res.data.data)
            receipients.value = res.data.data
            console.log('receipients', res.data.data)
        })
        .catch(err => {
            console.log(err.response.data)
            alert(err.response.data)
        })
    })
    
    function show(receipient) {
        receipientEmail.value = receipient
        showclass.value == '100%' ? showclass.value = 0 : showclass.value = '100%'
    }
</script>

<style lang="css" scoped>
    .container{
        /* text-align: center; */
        padding: 20px;
        background-color: #fff;
        height: 100vh;
    }
    .accordion {
        background-color: rgb(160, 160, 160);
        color: #fff;
        cursor: pointer;
        padding: 40px;
        width: 100%;
        margin: auto;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        border-radius: 10px;
        margin: 5px 0;
        color: #fff;
        /* transition: 0.4s; */
    }

    .active, .accordion:hover {
        background-color: rgba(0, 128, 0, 0.512);
        color: #000;
    }

    .accordion:after {
        content: '\002B';
        color: #777;
        font-weight: bold;
        float: right;
        margin-left: 5px;
    }

    .active:after {
        content: "\2212";
    }
    .main-btn{
        width: 60%;
        margin: auto;
        box-shadow:  20px 20px 60px #bebebe,
        -20px -20px 60px #ffffff;
    }
    .panel {
        padding: 0 30px;
        margin-bottom: 10px;
        overflow: hidden;
        border-radius: 5px;
        /* border: 1px solid; */
        background-color: transparent;
        /* transition: 0.5s; */
    }
    .donation-icon{
        width: 15%;
        position: absolute;
        right: 0;
        top: 50%;
    }

</style>