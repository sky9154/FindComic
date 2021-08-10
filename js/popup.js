// 產生指令集
(function () {
    const Command = [
        {
            name:"隨機 | Random",
            Description:"隨機產生漫畫"
        },
        {
            name:"最新 | New",
            Description:"最新漫畫"
        },
        {
            name:"今日 | Day",
            Description:"今日人氣排行"
        },
        {
            name:"本週 | Week",
            Description:"本週人氣排行"
        },
        {
            name:"全期間 | All",
            Description:"最高人氣排行"
        },
    ];
    const Commands = document.getElementById("Command");
    Command.forEach((kirito) => {
        Commands.innerHTML += `
        <tr>
            <td>${kirito.name}</td>
            <td>${kirito.Description}</td>
        </tr>
    `;
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

let input = document.getElementById("input");          // 輸入框
let submit = document.getElementById("submit");     // 送出按鈕

// 根據輸入跳轉到相應的網頁
Find = () => {
    let str = input.value, url = "";
    const Random_C = [".隨機", ".Random", ".random", ".?"];
    const New_C = [".最新", ".New", ".new", ".n"];
    const Day_C = [".今日", ".Day", ".day", ".d"];
    const Week_C = [".本週", ".Week", ".week", ".w"];
    const All_C = [".全期間", ".All", ".all", ".a"];

    if (Check(str)){
        url = "https://nhentai.net/g/" + str + "/";
    } 
    else {
        if (Random_C.indexOf(str) != -1) {
            url = "https://nhentai.net/g/" + str + "/";
        } 
        else if (New_C.indexOf(str) != -1) {
            url = "https://nhentai.net/language/chinese/";
        } 
        else if (Day_C.indexOf(str) != -1) {
            url = "https://nhentai.net/language/chinese/popular-today";
        }
        else if (Week_C.indexOf(str) != -1) {
            url = "https://nhentai.net/language/chinese/popular-week";
        } 
        else if (All_C.indexOf(str) != -1) {
            url = "https://nhentai.net/language/chinese/popular";
        } 
        else {
            url = "https://nhentai.net/search/?q=" + str;
        }
    }
    chrome.windows.create({"url": url, "incognito" : true, "width" : 720, "left" : 10});
}
// 點擊送出按鈕
submit.addEventListener("click", Find);