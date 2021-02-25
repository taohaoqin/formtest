<template>
  <div>监听外部引入的变量{{obj.value}}</div>
</template>
<script>
export default {
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
  }
}
</script>