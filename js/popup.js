let input = document.getElementById("input");          // 輸入框
let submit = document.getElementById("submit");     // 送出按鈕

// 各個按鍵
let Day = document.getElementById("day"), Week = document.getElementById("week"), All = document.getElementById("all");
let New = document.getElementById("new"), Random = document.getElementById("random");

// 判斷輸入是否為數字
Check = val => {
    if (parseFloat(val).toString() == "NaN") {
        return false;
    } else {
        return true;
    }
}

// 根據輸入跳轉到相應的網頁
go_url = url => chrome.windows.create ({"url": url, "incognito" : true, "width" : 720, "left" : 10});

Find = str => {
    if (Check(str)) url = "https://nhentai.net/g/" + str + "/";
    else url = "https://nhentai.net/search/?q=" + str;
    go_url(url);
}

// 跳轉特定頁面
comment = link => go_url(("https://nhentai.net/language/chinese/" + link));

// 按鈕點擊
submit.addEventListener("click", () => Find(input.value));
Day.addEventListener("click", () => comment(Day.value));
Week.addEventListener("click", () => comment(Week.value));
All.addEventListener("click", () => comment(All.value));
New.addEventListener("click", () => comment(New.value));
Random.addEventListener("click", () => Find(Math.floor(Math.random() * 36900) + 1));