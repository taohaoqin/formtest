<script>
import RenderForm from '@/mixins/RenderForm.vue'
export default {
  mixins: [RenderForm], //el-form配置模板
  data(){
    return {
      FormData: [ //form表单配置项
        { 
          label: '活动名称', 
          prop: 'name', //字段名
          type: 'input', //输入框
          value: '',
          placeholder: '请输入活动名称',
          rules: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          wrap: true // 是否整行
        }, 
        { 
          label: '活动区域', 
          prop: 'region', 
          type: 'select', //下拉框
          placeholder: '请选择活动区域' ,
          value: '',
          option: [{label: '区域一', value: 'shanghai'}, {label: '区域二', value: 'beijing'}],
          rules: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ], 
        }, 
        {
          label: '活动时间', 
          prop: 'date1',
          type: 'date', //时间选择器
          PickerType: 'datetime', //year/month/date/week/datetime/datetimerange/daterange
          valueFormat: 'yyyy-MM-dd HH:mm:ss',
          value: '',
          placeholder:'选择日期',
          rules: [
            { required: true, message: '请选择日期', trigger: 'change' }
          ],
        }, 
        {
          label: '即时配送', 
          prop: 'delivery',
          type: 'switch', //开关
          value: false
        }, 
        {
          label: '活动性质', 
          prop: 'type',
          type: 'checkbox', //多选
          value: [],
          option: [{label: '线下主题活动'}, {label: '单纯品牌曝光'}],
          rules: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
        }, 
        {
          label: '特殊资源', 
          prop: 'resource',
          type: 'radio', //单选
          value: '',
          option: [{label: '线上品牌商赞助'}, {label: '线下场地免费'}],
          rules: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
        }, 
        {
          label: '活动形式', 
          prop: 'desc',
          type: 'textarea',
          value: '',
          rows: '3',
          placeholder: '请输入活动内容',
          rules: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }, 
        {
          type: 'cascader', //级联选择器
          prop: 'cascader',
          label: '级联选择器',
          value: '',
          placeholder: '请选择级联选择器',
          rules: [
            { required: true, message: '请选择级联选择器', trigger: 'blur' }
          ],
          option: [{
            value: 'zhinan',
            label: '指南',
            children: [{
              value: 'shejiyuanze',
              label: '设计原则',
              children: [{
                value: 'yizhi',
                label: '一致'
              }]
            }, {
              value: 'daohang',
              label: '导航',
              children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
              }]
            }]
          }, {
            value: 'zujian',
            label: '组件',
            children: [{
              value: 'basic',
              label: 'Basic',
              children: [{
                value: 'layout',
                label: 'Layout 布局'
              }]
            }, {
              value: 'navigation',
              label: 'Navigation',
              children: [{
                value: 'menu',
                label: 'NavMenu 导航菜单'
              }, {
                value: 'tabs',
                label: 'Tabs 标签页'
              }]
            }]
          }]
        },
        {
          type: 'slot',//自定义渲染
          prop: 'rate',
          label: '评分',
          value: 0,
          renderScope: this.renderRate,
        },
        {
          type: 'file',//上传图片 
          prop: 'files',
          label: '相关图片',
          value: [],
          wrap: true,
          rules: [
            { required: true, message: '请上传一张图片', trigger: 'change' }
          ],
        },
        // {
        //   type: 'slot',
        //   prop: 'time',
        //   label: '时间',
        //   value: '',
        //   renderScope: this.renderTime,
        //   rules: [
        //     { required: true, message: '请选择时间', trigger: 'change' }
        //   ],
        // }
      ],
      // pickerOptions:{
      //   start: '09:30',
      //   step: '00:15',
      //   end: '18:30'
      //   // selectableRange: '18:30:00-20:30:00'
      // }//render出来的el-time-select设置picker-options时selectableRange无效 
    }
  },
  methods: {
    submit(data){
      console.log(data)//数据提交
    },
    // renderTime(i){
    //   return(<el-time-select v-model={i.value} arrow-control style="width: 100%;"/>)
    // },
    renderRate(i){ //评分组件
      return (<el-rate v-model={i.value}></el-rate>)
    },
    reset(){
      console.log('重置')
    }
  }
}
</script>
