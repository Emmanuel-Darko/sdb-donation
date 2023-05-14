<template>
    <div class="container">
        <h1 style="text-align: center;">My donations</h1>

        <div v-for="donation in userDonations">
            <p>Receipient: {{ donation.receipientName }}</p>
            <p>Title: {{ donation.title }}</p>
            <p>Description: {{ donation.description }}</p>
            <p>Amount: {{ donation.amount }}</p>
            <p>Date: {{ donation.createdAt }}</p>
        </div>

        <!-- show if user donations is empty -->
        <div v-if="userDonations.length == 0">
            <h3>No donations made yet ...</h3>
            <router-link to="/home/donate"><h3>Place your first donation</h3></router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                userDonations: []
            }
        },
        beforeMount(){
            const token = localStorage.getItem('donortoken')
            axios.get('http://localhost:4000/donor/userDonations', {headers:{usertoken: token}})
            .then(res =>{
                console.log(res)
                this.userDonations = res.data.data
            }).catch(err =>{
                console.log(err)
                alert(err.response ? err.response.data: err)
            })
        }
    }
</script>

<style lang="css" scoped>
    .container{
        text-align: center;
    }
    .container h1{
        margin-bottom: 50px;
    }
</style>