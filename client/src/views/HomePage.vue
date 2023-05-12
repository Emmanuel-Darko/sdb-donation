<template>
    <DonorNavComponent />

    <CreateDonationComponent v-if="donorRoute=='donate'" :receipients="receipients"/>
    <AllReceipientsComponent v-if="donorRoute=='receipients'"  :receipients="receipients"/>
    <MyDonationsComponent v-if="donorRoute=='mydonations'"/>
</template>

<script>
    import DonorNavComponent from '../components/DonorNavComponent.vue';
    import CreateDonationComponent from '@/components/CreateDonationComponent.vue'
    import AllReceipientsComponent from '@/components/AllReceipientsComponent.vue'
    import MyDonationsComponent from '@/components/MyDonationsComponent.vue'

    export default {
        components:{
            DonorNavComponent,
            CreateDonationComponent,
            AllReceipientsComponent,
            MyDonationsComponent
        },
        data() {
            return {
                donorRoute: 'donate',
                receipients:[
                    {name: 'Receipient1', email: 'rc1@gmail.com', uid: 'rc1', cause:"Receipient1 cause", size:'0-30', location:'Kumasi'},
                    {name: 'Receipient2', email: 'rc2@gmail.com', uid: 'rc2', cause:"Receipient1 cause", size:'50-80', location:'Kumasi'},
                    {name: 'Receipient3', email: 'rc3@gmail.com', uid: 'rc3', cause:"Receipient1 cause", size:'0-50', location:'Kumasi'},
                    {name: 'Receipient4', email: 'rc4@gmail.com', uid: 'rc4', cause:"Receipient1 cause", size:'50-100', location:'Kumasi'},
                    {name: 'Receipient5', email: 'rc5@gmail.com', uid: 'rc5', cause:"Receipient1 cause", size:'1000-200', location:'Kumasi'}
                ]
            }
        },
        beforeMount() {
            this.$route.params.id == 'donate' ? this.showDonate() : this.$route.params.id == 'receipients' ? this.showReceipients() : this.showMyDonations()
        },
        watch:{
            $route(to){
                to.params.id == 'donate' ? this.showDonate() : to.params.id == 'receipients' ? this.showReceipients() : this.showMyDonations()
            }
        },
        methods: {
            showDonate(){
                this.donorRoute = 'donate'
            },
            showReceipients(){
                this.donorRoute = 'receipients'
            },
            showMyDonations(){
                this.donorRoute = 'mydonations'
            }
        }
    }
</script>


<style lang="css" scoped>

</style>