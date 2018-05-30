<template>
  <div class="detail">
    detail{{$route.params.id}}
     <router-link to="/Detail/detailid/Detailfoo">/detail/detailfoo/</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      
    }
  },
  created(){
    console.log(this)
    console.log(this.$route)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
