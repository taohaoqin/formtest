<template>
  <div class="about">
    <van-form @submit="onSubmit">
      <van-field name="switch" label="开关">
        <template #input>
          <van-switch v-model="switchChecked" size="20" />
        </template>
      </van-field>
      <van-field name="checkbox" label="复选框">
        <template #input>
          <van-checkbox v-model="checkbox" shape="square" />
        </template>
      </van-field>
      <van-field name="checkboxGroup" label="复选框组">
        <template #input>
          <van-checkbox-group v-model="checkboxGroup" direction="horizontal">
            <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
            <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
          </van-checkbox-group>
        </template>
      </van-field>
      <van-field name="radio" label="单选框">
        <template #input>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">单选框 1</van-radio>
            <van-radio name="2">单选框 2</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="stepper" label="步进器">
        <template #input>
          <van-stepper v-model="stepper" />
        </template>
      </van-field>
      <van-field name="slider" label="滑块">
        <template #input>
          <van-slider v-model="slider" />
        </template>
      </van-field>
      <van-field name="uploader" label="文件上传">
        <template #input>
          <!-- <van-uploader v-model="uploader" />  此处用二次封装后的vantuploader-->
          <vantuploader ref="vantuploader"></vantuploader> 
        </template>
      </van-field>
      <van-field
        readonly
        clickable
        name="picker"
        :value="value"
        label="选择器"
        placeholder="点击选择城市"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="value1"
        label="时间选择"
        placeholder="点击选择时间"
        @click="showPicker1 = true"
      />
      <van-popup v-model="showPicker1" position="bottom">
        <van-datetime-picker
          type="time"
          @confirm="onConfirm1"
          @cancel="showPicker1 = false"
        />
      </van-popup>
      <van-field
        readonly
        clickable
        name="calendar"
        :value="value3"
        label="日历"
        placeholder="点击选择日期"
        @click="showCalendar = true"
      />
      <van-calendar v-model="showCalendar" @confirm="onConfirm3" />
      <van-button round block type="info" native-type="submit">
        提交
      </van-button>
    </van-form>
  </div>
</template>
<script>
import vantuploader from '@/components/VantUploader'
export default {
  data () {
    return {
      switchChecked: false,
      checkbox: false,
      checkboxGroup: [],
      radio: '1',
      stepper: 1,
      slider: 50,
      // uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
      value: '',
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      showPicker: false,
      value1: '',
      showPicker1: false,
      value3: '',
      showCalendar: false,
    }
  },
  components: {
    vantuploader
  },
  methods: {
    onSubmit (values) {
      this.$refs.vantuploader.uploadAll().then(res => {
        values.uploader = res
        console.log(values)//最终的表单数据
      })
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false
    },
    onConfirm1(time) {
      this.value1 = time;
      this.showPicker1 = false
    },
     onConfirm3(date) {
      this.value3 = `${date.getMonth() + 1}/${date.getDate()}`
      this.showCalendar = false
    },
  }
}
</script>
