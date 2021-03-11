<template>
  <div class="sortList">
    <transition-group  class="box" name="flip-list" tag="div">
      <div
        class="item"
        v-for="item in arr"
        :key="item.index"
        :style="{height: (item.value / max * 100) + '%'}"
      >
        <div class="value">{{item.value}}</div>
      </div>
    </transition-group>
    <div>
      <input type="text" v-model="number">
      <button @click="addnum(number)">进入</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      a: 1,
      list: [10, 43, 23, 65, 343, 75, 100, 34, 45, 3, 56, 22], 
      number: '',
      arr: [],
    }
  },
  computed: {
    max () {
      let max = 0
      this.list.forEach(item => {
        if (item > max) {
          max = item
        }
      })
      return max
    }
  },
  created(){
    this.arr = this.list.map(i => {
      return {
        index: this.a ++,
        value: i
      }
    })
  },
  mounted(){
    setTimeout(() => {
      this.bubbleSort()
    }, 2000)
  },
  methods: {
    bubbleSort() {
      let len = this.arr.length
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
          if (this.arr[j].value > this.arr[j + 1].value) {  // 相邻元素两两对比
            let tmp = this.arr[j]        // 元素交换
            this.$set(this.arr, j, this.arr[j + 1])
            this.$set(this.arr, j + 1, tmp)
          }
        }
      }
    },
    addnum(num){
      this.arr.push({value: num, index: this.a++})
      setTimeout(() => {
      this.bubbleSort()
    }, 0)
    }
  }
}
</script>
<style>
.sortList{
  margin-top: 20px;
}
.flip-list-move {
  transition: transform 1s;
}
.item{
  background: red;
  flex-grow: 1;
  order: 1;
  align-self: flex-end;
  margin: 0 10px;
  position: relative;
}
.box{
  height: 500px;
  display: flex;
}
.value{
  position: absolute;
  top: -20px;
  width: 100%;
  text-align: center;
}
</style>