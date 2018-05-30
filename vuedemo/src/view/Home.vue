<template>
  <div class="Home">
      <router-link to='/Detail/detailid'>detail</router-link>
      <router-link to='/User'>users</router-link>
      <Homechild :msg="msg" @test="test"></Homechild>
      <div @click="toast">toast</div>
  </div>
</template>
<script>
import Homechild from '@/view/Homechlid.vue'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Your Vue.js App'
    }
  },
  methods:{
    test(msg){
      this.msg = msg
    },
    aa(){
      alert(1)
    },
    toast(){
      alert(this.$msg)
    }
  },
  components:{
    Homechild
  },
  mounted(){
      console.log(this.$msg);         // Hello World
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
