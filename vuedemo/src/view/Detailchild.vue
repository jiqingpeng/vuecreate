<template>
  <div class="detail">
    detailchild
  </div>
</template>

<script>
export default {
  name: 'Detailchild',
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
