<template>
    <div>
         miste
        <in-miste></in-miste>
    </div>
</template>
<script>
    import inMiste from './inmiste.vue'
    export default {
        components:{
            inMiste:inMiste
        },
        beforeCreate(){
            console.log('msite.Vue BeforeCreate')
        },
        created(){
            console.log('msite.Vue Created')
        },
        beforeMount(){
            console.log('msite.vue beforeMounted')
        },
        mounted(){
            console.log('miste.vue mounted')
        },
        activated(){
            console.log('msite.vue actived')
        },
        deactivated(){
            console.log('msite.vue deactived')
        },
        beforeDestroy(){
            console.log('miste.vue beforeDestroy')
        },
        beforeUpdate(){
            console.log('miste.vue beforeupdate')
        },
        updated(){
            console.log('miste.vue update')
        },
        destroyed(){
            console.log('miste.vue destroyed')
        }
    }
</script>