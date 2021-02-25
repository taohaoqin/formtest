<template>
  <div>
    <van-uploader
      v-model="fileList"
      :after-read="afterRead"
      :before-read="beforeRead"
      @delete="deleteRead"
      multiple
      :max-count="maxnum"
    />
  </div>
</template>
<script>
//把vant的上传文件组件功能分装的完整点
import axios from "axios";
export default {
  props: {
    maxnum: {
      type: [String, Number],
      default: 1
    }
  },
  data() {
    return {
      status: false,
      // fileList: [
      //     { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
      //     // Uploader 根据文件后缀来判断是否为图片文件
      //     // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      //     { url: 'https://img.yzcdn.cn/vant/leaf.jpg', isImage: true },
      // ],
      fileList: [],
      UrlList: []
    };
  },
  methods: {
    beforeRead() {
      return true;
    },
    afterRead(file) {
      this.status = false;
      console.log(file.file, "res");
      file.status = "uploading";
      file.message = "上传中...";
      let formData = new FormData();
      formData.append("file", file.file);
      axios({
        method: "post",
        url: "",//使用是把上传文件服务器的地址填上
        data: formData
      }).then(res => {
        this.UrlList.push(res.data.basefile);
        console.log(this.UrlList, "cccc");
        file.status = "";
        file.message = "";
        this.status = true;
      });
      this.$emit("after-read");
    },
    deleteRead(file, index) {
      const key = index.index;
      this.UrlList.splice(key, 1);
      console.log(this.UrlList);
      this.$emit("delete-read");
    },
    uploadAll() {
      return new Promise(resolve => {
        if (!this.UrlList.length) resolve([]);
        var list = this.UrlList.map(i => {
          return {
            src: i.newPath,
            name: i.oldName,
            type: i.type
          };
        });
        resolve(list);
      });
    }
  }
};
</script>
