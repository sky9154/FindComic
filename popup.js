let input = document.getElementById("input");
let submit = document.getElementById("submit");

// 判斷輸入是否為數字
function Check(val) {
    if (parseFloat(val).toString() == "NaN") {
        return false;
    } else {
        return true;
    }
}
// 根據輸入跳轉到相應的網頁
function Find () {
    let str = "";
    let inputValue = input.value;
    str = inputValue;
    if (Check(str)){
        window.open("https://nhentai.net/g/" + str + "/");
    }else{
        window.open("https://nhentai.net/search/?q=" + str);
    }
}

submit.addEventListener("click", Find);