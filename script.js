const callCounts = document.getElementsByClassName("button-calls");
let callHistory = [];
for (const i of callCounts) {
    i.addEventListener('click', function (e) {
        const neatCoins = parseInt(document.getElementById("coinCounts").innerText);
        if (neatCoins < 20) alert("you don't have enough balance . . .");
        else {
            let card = i.closest(".card");
            const data = {
                name: card.querySelector(".service-name").innerText,
                num: card.querySelector(".service-num").innerText,
                time: new Date().toLocaleTimeString()
            }
            if (confirm("Calling " + data.num + ", " + data.name + ", please wait ... ")) {
                document.getElementById("coinCounts").innerText = neatCoins - 20;
                callHistory.push(data);
                const div = document.createElement("div");
                div.innerHTML = `
            <div class="
            new-call bg-gray-100 rounded-xl flex items-center justify-between p-3 my-3">
                <div class="gap-1">
                    <h1 class="font-semibold">${data.name}</h1>
                    <h2 class="text-sm">${data.num}</h2>
                </div>
                <div>${data.time}</div>
            </div>
            `
                document.getElementById("callHistory").appendChild(div);
            }
        }
    })
}
const allCopy = document.getElementsByClassName("buttonCoppy");
for (const copy of allCopy) {
    copy.addEventListener('click', function () {
        const copyCountsAll = parseInt(document.getElementById("copyCountsf").innerText);
        if (confirm(copy.closest(".card").querySelector(".service-num").innerText + " has been copied")) {
            document.getElementById("copyCountsf").innerText = copyCountsAll + 1;
            navigator.clipboard.writeText(copy.closest(".card").querySelector(".service-num").innerText);
        }
    })
}
const h = document.getElementsByClassName("fa-heart");
for (const i of h) {
    i.addEventListener('click', function () {
        const totalHeart = parseInt(document.getElementById("heartCounts").innerText);
        document.getElementById("heartCounts").innerText = totalHeart + 1;
    })
}
document.getElementById("button-calls-clear").addEventListener('click', function () {
    const c = document.getElementById("callHistory").querySelectorAll(".new-call");
    for (const i of c) {
        i.remove();
    }
});