<template>
	<div @click='change'>
        {{msg}}
    </div>
</template>
<script>
export default {
    data:function(){return {msg:'change me'}},
    methods:{
        change(){
            this.msg = 'I have been changed';
            console.log(this);
        }
    },
    beforeCreate(){
        console.log('HOME.Vue BeforeCreate')
    },
    created(){
        console.log('HOME.Vue Created')
    },
    beforeMount(){
        console.log('HOME.vue beforeMounted')
    },
    mounted(){
        console.log('HOME.vue mounted')
    },
    activated(){
        console.log('HOME.vue actived')
    },
    deactivated(){
        console.log('HOME.vue deactived')
    },
    beforeUpdate(){
        console.log('HOME.vue beforeupdate')
    },
    updated(){
        console.log('HOME.vue update')
    },
    beforeDestroy(){
        console.log('HOME.vue beforeDestroy')
    },
    destroyed(){
        console.log('HOme.vue destroyed')
    }
}
</script>