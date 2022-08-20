function roll(){
    const img =document.getElementById("image");
    let randomNumber = Math.floor(Math.random()*6)+1;
    console.log(randomNumber);
    img.setAttribute("src", `${randomNumber}.png`);
}
function animation(){
    setTimeout(roll, 1000);
    const img =  document.getElementById("image");
    img.setAttribute("src", "dicean.gif");
}
