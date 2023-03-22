const text = document.querySelector(".mida");
const strText = text.textContent;
const splitText = strText.split("");
const btnElement = document.querySelector("#topbtn")
text.textContent = ""; 
for(let i = 0; i < splitText.length;i++){
  text.innerHTML += "<span>"+ splitText[i] +"</span>";
}

let char = 0;
let timer = setInterval(onTick,50);

function onTick(){
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fadeall");
  char++;
  if(char === splitText.length){
    gotovo();
    return;
  }
}
function gotovo(){
  clearInterval(timer);
  timer = null;
}
function topFunction(){
  document.documentElement.scrollTop = 0;
}
btnElement.addEventListener("click", () => {
  topFunction();
})
