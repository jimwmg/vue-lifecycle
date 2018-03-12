<template>
  <div >
    <div @click='forceUpdate'>app</div>
		<router-link to='home'>home</router-link>
		<router-link to='miste' >miste</router-link>
		<div @click ='goHome'>home</div>
		<div @click ='goMiste'>miste</div>
		<div @click='goParmas'>goParams</div>
		<!-- <keep-alive>
				<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view> -->
		<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
    methods:{
			forceUpdate(){
				this.$forceUpdate();
			},
			goHome(){
				this.$router.push({path:'/home'})
			},
			goMiste(){
				this.$router.push({path:'miste'})
			},
			goParmas(){
				this.$router.push({params:'parmasID'})
			}
		},
		beforeCreate(){
			console.log('APP.Vue BeforeCreate')
		},
		created(){
			console.log('APP.Vue Created')
		},
		beforeMount(){
			console.log('APP.vue beforeMounted')
		},
		mounted(){
			console.log('APP.vue mounted')
		},
		activated(){
			console.log('APP.vue actived')
		},
		deactivated(){
			console.log('APP.vue deactived')
		},
		beforeUpdate(){
        console.log('APP.vue beforeupdate')
    },
    updated(){
        console.log('APP.vue updated')
    },
		beforeDestroy(){
			console.log('APP.vue beforeDestroy')
		},
		destroyed(){
			console.log('App.vue destroyed')
		}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
