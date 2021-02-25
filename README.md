# mycard

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run dev
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

在咸鱼时，弄了一个简单的可配置el-form表单。使用时在FormData数组里面填写名称类型等属性即可。
在手机端项目中，发现vant ui的uploader没有element的方便，需要直接上传到文件服务器，顺便简单的把功能完善一下 使用时修改url即可
一次项目中，需要引入第三方的js文件 并且监听里面的返回值，还需要传到vue文件里，可以var声明一个引用类型变量， 然后用Vue.observable()变成响应式 就能在vue文件中watch该变量的变化。
