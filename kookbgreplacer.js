/*
 * 作者：DeeChael
 * Github: https://www.github.com/DeeChael
 * 
 * 使用教程: 
 * 1. 首先确保你的客户端版本在0.62.0以上
 * 2. 进入此文件夹：你的KOOK安装目录/app-你的KOOK版本号/resources/app/webapp/build
 * 3. 打开 index.htm文件，建议使用Visual Studio Code格式化一下，然后在head中第一个link上面添加一行：<script defer="defer" src="/app/static/js/kookbgreplacer.js"></script>
 * 4. 将此js文件放至该目录中（不要修改文件名）：你的KOOK安装目录/app-你的KOOK版本号/resources/app/webapp/build/static/js
 * 5. 修改下方的变量，其中屏幕宽度和屏幕高度必须修改，填你当前系统设置的分辨率（一般与你显示屏的最大支持分辨率相同）
 * 6. 重启客户端即可
 */

let bgBlur = 5 // 模糊的值，应在区间 [0, 100] 之间
let transparency = 25 // 背景色的透明度，应在区间 [0, 100] 之间
let imgUrl = "https://img.kookapp.cn/assets/2023-01/zaF8ZG8TtZ1hc0t4.png" // 背景图片的链接
let screenWidth = 2560 // 屏幕宽度
let screenHeight = 1440 // 屏幕高度
let marginLeft = 0 // 左边距
let marginTop = -24 // 上边距

function createDivWithClassName(className) {
    let divElement = document.createElement("div")
    divElement.setAttribute("class", className)
    return divElement
}

function createImgElement() {
    let imgElement = document.createElement("img")
    imgElement.src = imgUrl
    imgElement.setAttribute("style", "filter: blur(" + bgBlur + "px); width: " + screenWidth + "px; height: " + screenHeight + "px; margin-left: " + marginLeft + "px; margin-top: " + marginTop + "px;")
    return imgElement
}

function clearElement(container) {
    let nodes = container.childNodes
    for (let i = 0; i < nodes.length; i++) {
        container.removeChild(nodes[i])
    }
}

function createMaskLayer(rootElement) {
    let divElement = document.createElement("div")
    divElement.setAttribute("class", "app-mask-layer")
    rootElement.appendChild(divElement)
    return divElement
}

(async () => {
    setTimeout(() => {
        console._log("[KOOK Background Replacer] Trying to patch")
        let rootElement = document.evaluate("/html/body/div[1]", document).iterateNext()
        let appBgLayers = rootElement.getElementsByClassName("app-bg-layer")
        for (let i = 0; i < appBgLayers.length; i++) {
            rootElement.removeChild(appBgLayers[i])
        }
        let appBgLayer = createDivWithClassName("app-bg-layer")
        appBgLayer.appendChild(createImgElement())
        rootElement.appendChild(appBgLayer)
    }, 1000);
    setTimeout(() => {
        let rootElement = document.evaluate("/html/body/div[1]", document).iterateNext()
        let appMaskLayers = rootElement.getElementsByClassName("app-mask-layer")
        let appMaskLayer = appMaskLayers.length == 0 ? createMaskLayer(rootElement) : appMaskLayers[0]
        appMaskLayer.setAttribute("style", "opacity: 0." + (100 - transparency) + ";")
        console._log("[KOOK Background Replacer] Patched")
    }, 3000);
})()