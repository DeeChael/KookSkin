# KookSkin
0.62.0版本发布之后，KOOK官方支持了自定义客户端背景图片，但是很可惜，必须有BUFF权限才能使用，而BUFF属于是怎么买都亏的东西，没有什么实在的权益，所以研究了一下KOOK的自定义背景图片是如何实现的，制作了这个js（我没学过js，甚至连基础都不懂，只是胡乱写的，肯定有更好的实现方法）
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
4. 下载kookbgreplacer.js文件放至此目录中（不要修改文件名）：你的KOOK安装目录/app-你的KOOK版本号/resources/app/webapp/build/static/js
5. 修改js中的变量，其中屏幕宽度和屏幕高度必须修改，填你当前系统设置的分辨率（一般与你显示屏的最大支持分辨率相同）
6. 重启客户端即可

**注：如果需要修改参数，修改完后需要重启客户端才能生效**

## 删除教程
将添加到index.htm中的那一行内容删除即可，kookbgreplacer.js可删可不删，只要index.htm没有那一行就不会影响

## 关于格式化文件
打开你的Visual Studio Code并打开文件，使用快捷键`Shift + Alt + F`，或者通过右键菜单（见下图）
![image](https://user-images.githubusercontent.com/63186003/211157599-a6bc39cc-b853-418d-b008-b76993c6df65.png)
