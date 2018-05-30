<template>
  <div class="Home">
     <div @click="test">{{msg}}</div>
     <div>change1</div>
  </div>
</template>

<script>
export default {
  name: 'Homechlid',
  props: ['msg'],
  created(){
    console.log(this)
  },
  methods:{
  	test:function(){
  		this.$emit('test',"test")
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
