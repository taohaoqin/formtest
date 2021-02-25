<script>
import ElForm from '@/components/FormItem'
import Fileupload from '@/components/Fileupload'
let k = 0
export default {
  components: {
    ElForm,
    Fileupload
  },
  data(){
    return {
      isAttrs: ['label','prop','type','value','rules','option','PickerType','wrap'],
      FormData: []
    }
  },
  computed: {
    rules(){
      let obj = {}
      this.FormData.forEach(i => {
        if(i.rules && i.rules.length > 0){
          this.$set(obj, i.prop, i.rules)
        }
      })
      return obj
    }
  },
  methods: {
    resetForm(){
      this.FormData.forEach(i => {
        if( i.value instanceof Array){
          i.value = []
          if(i.type === 'file'){ //当类型为图片类型的时候
            for(let j in this.$refs){ //清空所有upload的图片
              if(this.$refs[j]){
                this.$refs[j].clearFiles() 
              }
            }
          }
        } else if(typeof i.value === "number"){
          i.value = 0
        } else if(typeof i.value !== "boolean"){
          i.value = ''
        } 
      })
      this.reset()
    },
    reset(){
      console.log('重置列表')
    },
    setOption(obj){
      let objs = {}
      for(let i in obj){
        const a = this.isAttrs.some(j => i === j)
        if (!a && typeof obj[i] !== 'function') {
          objs[i] = obj[i]
        }
      }
      if(Object.keys(objs).length !== 0){
        return objs
      }
    },
    renderFormItem(i){
      const obj = {attrs: this.setOption(i)}
      if(i.type === 'input'){
        return (
          <el-input v-model={i.value} {...obj}/>
        )
      } else if(i.type === 'select'){
        return (
          <el-select v-model={i.value} {...obj} style="width: 100%;">
            { this._l(i.option, j => <el-option label={j.label} value={j.value} />)}
          </el-select>
        )
      } else if(i.type === 'date'){
        if(i.PickerType === 'time'){
          return (
            <el-time-select v-model={i.value} {...obj} style="width: 100%;"/>
          )
        } else {
          return (
            <el-date-picker type={i.PickerType} v-model={i.value} {...obj} style="width: 100%;" />
          )
        }
      } else if(i.type === 'switch'){
        return (
          <el-switch v-model={i.value} {...obj}/>
        )
      } else if(i.type === 'checkbox'){
        return (
          <el-checkbox-group v-model={i.value} style="width: 100%;" {...obj}>
            { this._l(i.option, j => <el-checkbox label={j.label} />)}
          </el-checkbox-group>
        )
      } else if(i.type === 'radio'){
        return (
          <el-radio-group v-model={i.value} {...obj}>
            { this._l(i.option, j => <el-radio label={j.label} />)}
          </el-radio-group>
        )
      } else if(i.type === 'textarea'){
        return (
          <el-input type="textarea" v-model={i.value} {...obj}/>
        )
      } else if(i.type === 'cascader'){
        return (
          <el-cascader style='width:100%' v-model={ i.value } options={ i.option } {...obj}></el-cascader>
        )
      } else if(i.type === 'file'){
        k ++
        return (
          <Fileupload on-fileList={(list) => i.value = list} ref={"Fileupload" + k} /> //图片上传
        ) 
      } else {
        return (i.renderScope(i, obj))
      }
    },
    renderForm(){
      return (
        <ElForm form={ this.FormData } on-submit={this.submit} on-resetForm={this.resetForm}>
          { this._l(this.FormData, i => 
            <el-col span={i.wrap ? 24 : i.type ==='textarea' ? 24 : 8}>
              <el-form-item label={i.label} prop={i.prop}>
                {this.renderFormItem(i)}
              </el-form-item>
            </el-col>
          )}
        </ElForm>
      )
    }
  },
  render(){
    return (
      <div class="about">
        {this.renderForm()}
      </div>
    )
  }
}
</script>
<style lang="scss" scoped>
.about{
  width:100%;
  // min-width:1100px;
}
.el-rate {
  line-height: 2.5!important;
}

</style>
