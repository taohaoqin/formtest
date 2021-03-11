<template>
  <div>监听外部引入的变量{{obj.value}}</div>
</template>
<script>
export default {
  data(){
    return {
      arr: [1,2,3,4,5,6],
      arr1: [1,2,3,4,5,6],
      arr2: [1,2,3,4,5,6]
    }
  },
  computed: {
    obj(){
      return window.obj
    }
  },
  watch: { //监听外部引入的变量
    'obj.value'(newVal){
      console.log(newVal, '获取外部变量的变化')
    }
    // obj:{
    //   deep: true,
    //   handler(newVal){
    //     console.log(newVal, '获取外部变量的变化')
    //   }
    // }
  },
  created(){
    this.$delete(this.arr, 1)
    console.log(this.arr)
    delete this.arr1[2]
    console.log(this.arr1)
    console.log(this.$store.state.obj.a)
    this.$store.dispatch('SET_Obj', 123456)
    console.log(this.$store.state.obj.a)
    // setTimeout(()=>{
    //   console.log(this.$store.state.obj.a)
    // }, 100)
  },
  render(){ //render和template同时存在的时候 执行template render不会执行
    console.log('render')
    return <div>111</div>
  }
}
</script>