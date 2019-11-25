function Dialog(params) {
    // this.init(params)
}
Dialog.prototype.init = function (params) {
    let baseAttr = {
        // 挂在父级相关
        parent: document.getElementsByTagName("body")[0],
        // 容器相关
        oWrapper: document.createElement("div"),
        width: 200,
        height: 150,
        zIndex: 999,
        backgroundColor: "#eee",
        position: "absolute",
        left: 50,
        top: 200,
        transform: "translateX(-50%)",
        // 标题相关
        titleText: "我是Title",
        titlePosition: "center",
        titleHeight: 40,
        titleColor: "#333",
        titleFontSize: 22,
        titlefontWeight: 600,
        // 内容相关
        contentText: `
        // 挂在父级相关  </br>
        parent : document.getElementsByTagName("body")[0],  </br>
        // 容器相关  </br>
        oWrapper: document.createElement("div"),  </br>
        width : 200,  </br>
        height : 150,  </br>
        zIndex : 999,  </br>
        backgroundColor : "#eee",  </br>
        position : "absolute",  </br>
        left : 50,  </br>
        top : 200,  </br>
        transform : "translateX(-50%)",  </br>
        // 标题相关  </br>
        titleText : "我是Title",  </br>
        titlePosition: "center",  </br>
        titleHeight: 40,  </br>
        titleColor: "#333",  </br>
        titleFontSize : 22,  </br>
        titlefontWeight: 600,  </br>
        // 内容相关  </br>
        contentText: "这里是内容!",  </br>
        contentHeight:10,  </br>
        contentPosition:"center",  </br>
        contentColor:"#999",  </br>
        contentFontSize: "18",  </br>
        contentPadding: 20,  </br>
        // 底部相关  </br>
        footerHeight: 40,  </br>
        buttonColor: "#FFF",  </br>
        bottonBackgroundColor: "#f40"  </br>
        `,
        contentHeight: 10,
        contentPosition: "center",
        contentColor: "#999",
        contentFontSize: "18",
        contentPadding: 20,
        // 底部相关
        footerHeight: 40,
        buttonColor: "#FFF",
        bottonBackgroundColor: "#f40"

    }
    baseAttr = Object.assign(baseAttr, params)
    this.parent({
        parent: baseAttr.parent,
        oWrapper: baseAttr.oWrapper
    })
    this.wrapper(baseAttr)
    this.title(baseAttr)
    this.content(baseAttr)
    this.footer(baseAttr)
}
Dialog.prototype.parent = function (params) {
    let oBody = params.parent
    oBody.style.position = "relative"
    oBody.appendChild(params.oWrapper)
}
Dialog.prototype.wrapper = function (params) {
    let oWrapper = params.oWrapper
    oWrapper.style.width = params.width + "px"
    oWrapper.style.zIndex = params.zIndex
    oWrapper.style.backgroundColor = params.backgroundColor
    oWrapper.style.position = params.position
    oWrapper.style.left = params.left + "%"
    oWrapper.style.top = params.top + "px"
    oWrapper.style.transform = params.transform
    oWrapper.style.padding = "0 20px"
}
Dialog.prototype.title = function (params) {
    let oTitle = document.createElement("div");
    oTitle.innerHTML = params.titleText
    oTitle.style.borderBottom = "1px solid #999"
    oTitle.style.height = params.titleHeight + "px";
    oTitle.style.lineHeight = params.titleHeight + "px"
    oTitle.style.textAlign = params.titlePosition;
    oTitle.style.color = params.titleColor
    oTitle.style.fontSize = params.titleFontSize
    oTitle.style.fontWeight = params.titlefontWeight
    params.oWrapper.appendChild(oTitle);
}
Dialog.prototype.content = function (params) {
    let oContent = document.createElement("div");
    oContent.innerHTML = params.contentText
    oContent.height = params.contentHeight + "px"
    oContent.style.textAlign = params.contentPosition
    oContent.style.color = params.contentColor
    oContent.style.padding = params.contentPadding + "px"
    oContent.style.fontSize = params.contentFontSize
    params.oWrapper.appendChild(oContent);
}
Dialog.prototype.footer = function (params) {
    let oFooter = document.createElement("div");
    let oButton = document.createElement("button")
    oFooter.style.width = 100 + "%"
    oFooter.style.borderTop = "1px solid #999"
    oFooter.style.height = params.footerHeight + "px"
    oFooter.style.position = "relative"
    oFooter.appendChild(oButton)
    oButton.innerHTML = "确定"
    oButton.style.padding = 4 + "px"
    oButton.style.backgroundColor = params.bottonBackgroundColor
    oButton.style.color = params.buttonColor
    oButton.style.border = "1px solid transparent"
    oButton.style.cursor = "pointer"
    oButton.style.position = "absolute"
    oButton.style.right = 10 + "px"
    oButton.style.top = 50 + "%"
    oButton.style.transform = "translateY(-50%)"
    oButton.style.borderRadius = 2 + "px"
    oButton.onclick = function BindClick(e) {
        params.oWrapper.style.display = "none"
    }
    params.oWrapper.appendChild(oFooter);
}