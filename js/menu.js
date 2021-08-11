(() => {
    chrome.contextMenus.create({  
        "title": "搜尋漫畫",  
        "contexts": ["all"],      
        "onclick": info => {
            let str = info.selectionText ? info.selectionText: "";
            if (str != "") {
                if (Check(str)) {
                    chrome.windows.create({
                        "url": "https://nhentai.net/g/" + str + "/1/", 
                        "incognito": true,
                        "width": 720,
                        "left": 10
                    });
                }
                else {
                    chrome.windows.create({
                        "url": "https://nhentai.net/search/?q=" + str, 
                        "incognito": true,
                        "width": 720,
                        "left": 10
                    });
                }
            }
        },
    });
})();

// 判斷輸入是否為數字
Check = val => {
    if (parseFloat(val).toString() == "NaN") {
        return false;
    } else {
        return true;
    }
}