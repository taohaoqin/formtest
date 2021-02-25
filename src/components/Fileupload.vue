<template>
  <div>
    <el-upload
      ref="uploadfile"
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :file-list="fileList">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>
<script>
export default {
  data(){
    return {
      fileList: [],
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleRemove(file, fileList) {
      this.fileList = fileList
      this.$emit('fileList', this.fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleSuccess(response, file, fileList){
      this.fileList = fileList
      this.$emit('fileList', this.fileList)
    },
    clearFiles () {
      this.$refs.uploadfile.clearFiles()
    },
  }
}
</script>
