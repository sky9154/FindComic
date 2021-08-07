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
        switch (str) {
            case ".隨機":
            case ".Random":
            case ".random":
            case ".?":
                window.open("https://nhentai.net/g/" + Math.floor(Math.random() * (99999)) + 1 + "/");
                break;
            case ".最新":
            case ".New":
            case ".new":
            case ".n":
                window.open("https://nhentai.net/language/chinese/");
                break;
            case ".今日":
            case ".Day":
            case ".day":
            case ".d":
                window.open("https://nhentai.net/language/chinese/popular-today");
                break;
            case ".本週":
            case ".Week":
            case ".week":
            case ".w":
                window.open("https://nhentai.net/language/chinese/popular-week");
                break;
            case ".全期間":
            case ".All":
            case ".all":
            case ".a":
                window.open("https://nhentai.net/language/chinese/popular");
                break;
            default:
                window.open("https://nhentai.net/search/?q=" + str);
                break;
        }
        
    }
}

submit.addEventListener("click", Find);