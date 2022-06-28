let butNo = document.getElementById("butNo");
let butYes = document.getElementById("butYes");

function randomToButton(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

butNo.addEventListener("mousemove", () => {
  let random = randomToButton(10, 200)
  butNo.style.bottom = random + "px";
  butNo.style.left = random + "px";
})

butNo.addEventListener("mouseout", () => {
  let random = randomToButton(10, 200)
  butNo.style.top = random + "px";
  butNo.style.right = random + "px";
})
let text = document.getElementById("inputText");
function addText() {
  text.innerHTML = "I know :)";
}

butYes.onclick = addText;