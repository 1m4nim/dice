let x = document.querySelector("button");
function whenButtonClicked(){
    let num = Math.floor(Math.random()*6) + 1;
    
    //document.querySelector('body').textContent = num;
    
    document.getElementById("result").innerHTML = num; //html要素を取得して要素の中身を変えてる？
    document.getElementById("dice_number").src = "img/"  + num + ".jpg"; //dice_numberって場所で画像を表示？  
}
x.addEventListener("click", whenButtonClicked);
    
    
//document.querySelector("#dice_number p:nth-child(" + num + ")");
//let newImag = document.createElement("img");
//document.getElementById("result") = num;
//let dice_number = document.getElementById("dice_number");
//dice_number.appendChild(newImg);
//document.getElementById("dice_number").src = num + ".jpg";


