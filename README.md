# KookSkin
**注：您的KOOK客户端版本至少要高于0.62.0**

## 使用教程
1. 首先确保你的客户端版本在0.62.0以上
2. 进入此文件夹：你的KOOK安装目录/app-你的KOOK版本号/resources/app/webapp/build
3. 打开 index.htm文件，建议使用Visual Studio Code格式化一下，然后在head中第一个link上面添加一行：
```js
<script defer="defer" src="/app/static/js/kookbgreplacer.js"></script>
```
添加完后的文件看起来应该是这样:
```html
<head>
    ...
    <script defer="defer" src="/app/static/js/index.86b523b4.js"></script> <!-- index后面的8个字符可能有不同 -->
    <script defer="defer" src="/app/static/js/kookbgreplacer.js"></script>
    <link href="/app/static/css/511.df0aac1c.chunk.css" rel="stylesheet"> <!-- 放在最后一个script之后，第一个link之前 -->
    ...
</head>
```
4. 将此js文件放至该目录中（不要修改文件名）：你的KOOK安装目录/app-你的KOOK版本号/resources/app/webapp/build/static/js
5. 修改下方的变量，其中屏幕宽度和屏幕高度必须修改，填你当前系统设置的分辨率（一般与你显示屏的最大支持分辨率相同）
6. 重启客户端即可

**注：如果需要修改参数，修改完后需要重启客户端才能生效**
