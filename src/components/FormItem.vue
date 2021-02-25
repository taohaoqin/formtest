<template>
  <div class="about">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <slot></slot>
      <el-col :span='24'>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">完成</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-col>
    </el-form>  
  </div>
</template>
<script>
export default {
  props: {
    form: {
      type: Array
    }
  },
  data(){
    return {
      ruleForm: {},
    }
  },
  computed: {
    rules(){
      let obj = {}
      this.form.forEach(i => {
        if(i.rules && i.rules.length > 0){
          this.$set(obj, i.prop, i.rules)
        }
      })
      return obj
    }
  },
  watch: {
    form: {
      deep: true,
      handler(curr){
        if(curr){
          curr.forEach(i => {
            this.ruleForm[i.prop] = i.value
          })
        }
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('submit', this.ruleForm)
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.$emit('resetForm')
    }
  },
  created(){
    this.form.forEach(i => {
      this.$set(this.ruleForm, i.prop, i.value)
    })
  }
}
</script>
