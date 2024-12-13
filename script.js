

let button = document.getElementById("btn");

button.addEventListener("click", ()=>{
function createDesign(title, duration, dob, viewsin, image){  
if(viewsin>=1000 && viewsin<1000000){
     viewsin=viewsin/1000 + "K";
}
else if(viewsin>=1000000){
    viewsin=viewsin/1000000 + "M";
}
else{
    viewsin;
}

let html =`<div class="box">
<div class="image">
    <img src=${image} alt="hello" id="hola">
      <p>${duration}</p>
</div>
<div class="para">
<div class="title">${title}</div>
<p>${viewsin} views . ${dob}</p>
</div>
        </div>`
        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createDesign("Hello", "10:11", "4 months ago", 10000000, "http://127.0.0.1:5500/hola.img");

})