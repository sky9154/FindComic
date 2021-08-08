
// "ID是：" + info.menuItemId + "\n" +  
// "現在的網址是：" + info.pageUrl + "\n" +  
// "選取的文字是：" + (info.selectionText ? info.selectionText : "") + "\n" +  
// "現在hover元素的圖片來源：" + (info.srcUrl ? info.srcUrl : "") + "\n" +  
// "現在hover的連結：" + (info.linkUrl ? info.linkUrl : "") + "\n" +  
// "現在hover的frame是：" + (info.frameUrl ? info.frameUrl : "") + "\n"  
// "現在的狀態是：" + info.checked + "\n" +  
// "之前的狀態是：" + info.wasChecked
// 完整物件設定資訊
// {  
//     "type" : "normal",   // 選單的格式
//     "id" : "item1-1",    // 識別字串
//     "title" : "使用者選擇了'%s'",    // 項目顯式的文字 %s 為使用者右鍵選擇範圍的文字
//     "contexts" : ["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio", "launcher", "browser_action","page_action"],   // 在特定的內容上啟用項目
//     "documentUrlPatterns" : ["https://*.google.com/foo*bar"],    // 指定在哪些特定的網域會啟用這個項目
//     "targetUrlPatterns" : [],    // 同上者，但允許使用相對路徑”/”
//     "enabled": true,     // 該項目是否啟用，可以覆蓋掉上想所有相關的設定
//     "onclick": function(info,tab){},     // 項目被點擊時的回調方法
//     "parentId": "item1",     // 指定巢狀項目的父層項目
//     "checked" : false    // 如果type為radio或checkbox，可指定他的預設狀態是否勾選(預設值為false)
// };

function createMenus() {  
    // 創建選單
    let parent = chrome.contextMenus.create({  
        "title": "搜尋漫畫",  
        "contexts": ['all'],      
        "onclick": function(info,tab){
            let str = info.selectionText ? info.selectionText : "";
            if (Check(str)){
                window.open("https://nhentai.net/g/" + str + "/");
            }else{
                window.open("https://nhentai.net/search/?q=" + str);
            }
        },
    });  
    console.log(parent);  
}
// 判斷輸入是否為數字
function Check(val) {
    if (parseFloat(val).toString() == "NaN") {
        return false;
    } else {
        return true;
    }
}
createMenus();