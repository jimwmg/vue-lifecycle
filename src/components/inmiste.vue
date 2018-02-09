<template>
    <div>
         i am inmiste
    </div>
</template>
<script>
    export default {
        beforeCreate(){
            console.log('inMiste.Vue BeforeCreate')
        },
        created(){
            console.log('inMiste.Vue Created')
        },
        beforeMount(){
            console.log('inMiste.vue beforeMounted')
        },
        mounted(){
            console.log('inMiste.vue mounted')
        },
        activated(){
            console.log('inMiste.vue actived')
        },
        deactivated(){
            console.log('inMiste.vue deactived')
        },
        beforeDestroy(){
            console.log('inMiste.vue beforeDestroy')
        },
        beforeUpdate(){
            console.log('inMiste.vue beforeupdate')
        },
        updated(){
            console.log('inMiste.vue update')
        },
        destroyed(){
            console.log('inMiste.vue destroyed')
        }
    }
</script>