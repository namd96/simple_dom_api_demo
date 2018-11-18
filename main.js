function clearAndAttachNodeToElement(parentNode, node) {
    parentNode.innerHTML = "";
    parentNode.appendChild(node);
}


var a = 80;
console.log(a);

var rightDiv = document.getElementsByClassName("rightClass")[0];

var showBtn = document.getElementById("showBtn");
showBtn.addEventListener("click", () => {
    var bazinga = document.createElement('span');
    rightDiv.style.visibility = "visible";
    // rightDiv.innerHTML = bazinga;
    // rightDiv.innerHTML = "";
    // rightDiv.appendChild(bazinga);
    clearAndAttachNodeToElement(rightDiv, bazinga);
    bazinga.innerHTML = "Bazingaa";
    bazinga.addEventListener("mouseenter", () => {
        bazinga.innerHTML = "I am sheldon";
        bazinga.style.fontSize = "20px";
    })
    bazinga.addEventListener("mouseleave", () => {
        bazinga.style.fontSize = "unset";
        bazinga.innerHTML = "Bazingaa";
    })
})

function hint() {
    alert("mouse over bazinga");
}


function hide() {
    rightDiv.style.visibility = "hidden";
}