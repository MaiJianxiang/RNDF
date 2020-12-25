# 简介

RNDF 是 Read and Download Files 的缩写，是一个 web 前端 JS 框架。通过这个框架，能让 web 前端数据与用户本地文件之间的交互更轻松。

只需调用一个方法即可让用户选择本地文件并读取文件的数据，或生成文件让用户保存到本地。

[示例](demo.html)

Other languages: pending translation

# 使用方法

## 安装

### 下载 RNDF

可以通过多种方法下载 RNDF：

+ [从 Github 下载](https://github.com/MaiJianxiang/RNDF/releases)
+ [从 Gitee 下载](https://gitee.com/MaiJianxiang/RNDF/releases)
+ 使用 npm 命令下载
  ```
  npm install rndf
  ```

### 在网页中引入 RNDF

RNDF 是一个 JavaScript 文件，您可以使用 HTML 的 `<script>` 标签引入它：

``` html
<script src="rndf.min.js"></script>
```

引入后你就可以开始编写自己的脚本了。

## 导入文件并读取数据

``` javascript
rndf.readTextFile(elementId, callback(result)[, fileTypes, encoding])
```

|参数							|类型			|描述																																															|
|--								|--				|--																																																|
|elementId				|String		|被点击的元素 ID。																																									|
|callback(result)	|Function	|成功读取文件的回调函数，包含一个存有文件内容的参数。																								|
|fileTypes（可选）|String		|MIME 类型或文件扩展名，多个 MIME 类型和扩展名之间用逗号分隔。填入该参数后浏览器会默认限制用户可选的文件类型。若该参数为 'application/json' 或 '.json'，回调函数中的文件内容会自动转换为 JavaScript 对象或数组。|
|encoding（可选）	|String		|编码类型，默认为“utf-8”。																																					|


## 将数据导出到文件

### 导出纯文本文件

``` javascript
rndf.downloadText(elementId, fileName, textString)
```

|参数				|类型		|描述						|
|--					|--			|--							|
|elementId	|String	|被点击的元素 ID。	|
|fileName		|String	|导出文件的文件名。|
|textString	|String	|导出文件的内容。	|

### 导出 JSON 文件

``` javascript
rndf.downloadJSON(elementId, fileName, JSON_data)
```

|参数			|类型						|描述												|
|--				|--							|--													|
|elementId|String					|被点击的元素 ID。						|
|fileName	|String					|导出文件的文件名。						|
|JSON_data|Object / Array|导出的 JavaScript 对象或数组。|

# 兼容性

## 支持的浏览器

|IE			|Edge	|Chrome	|Firefox|Opera|Safari	|
|--			|--		|--			|--			|--		|--			|
|不支持	|79		|49			|44			|36		|11			|

表格中的数字表示支持本框架的浏览器的最低版本。RNDF 不支持 IE 浏览器和 Edge 18 及以下版本的浏览器。

## 不同版本的 RNDF 兼容性

RNDF 使用语义版本号来管理代码。语义版本号分为 X.Y.Z 三位，分别代表主版本号、次版本号和补丁版本号。

在主版本号和次版本号 X.Y 相同的情况下，更高的补丁版本号 Z 具有向下兼容的问题修正或性能优化；

在主版本号 X 相同的情况下，更高的次版本号 Y 具有向下兼容的功能性新增；

主版本号 X 不同的 API 不向下兼容。


# 参与贡献

本项目欢迎所有类型的贡献。包括翻译文档、提交错误报告和功能建议等

# 许可证

本项目采用 [Mozilla Public License Version 2.0](LICENSE) 进行许可。

