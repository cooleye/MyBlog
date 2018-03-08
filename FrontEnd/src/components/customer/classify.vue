<template>
	
	<div>
		 <el-button v-for="c in classifies"  @click="handleClick(c)">{{c.classify}}</el-button>
	</div>
	
</template>
<script>
	
	export default{
		name:'classify',
		data(){
			return{
				classifies:[]
			}
		},
		mounted(){
			this.$store.dispatch('getClassify')
			.then((res) => {
				console.log(res)
				this.classifies = res.data
			})
		},
		methods:{
			handleClick(clas) {
		        console.log(clas.classify);
		    }
		}
	}
</script>

<style>
</style>