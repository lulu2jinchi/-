let duck1 = document.querySelector('.duck1');
let duck2 = document.querySelector('.duck2');
let toushiText = document.querySelector('.toushiText');

let yzb;
let xzb;


function zuobiao(event) {
    xzb = event.clientX;
    yzb = event.clientY;
    if (xzb > 948 && yzb > 480) {
        let tan = (yzb - 480) / (xzb - 948);

        duck1.style.left = "1300px";
    }
}

function toushi(event) {
    xzb1 = event.clientX;
    yzb1 = event.clientY;
    if (yzb1 >= 480 && yzb1 <= 760) {
        toushiText.style.display = "block";
        toushiText.style.position = "absolute";
        toushiText.style.top = yzb1 - 20;
        toushiText.style.left = xzb1;
        toushiText.style.color = "yellow";
        toushiText.innerHTML = "投食";
    }
    else{
        toushiText.style.display = "none";
    }
}

// document.onkeydown = checkKey;

// function checkKey(e) {
//     e.preventDefault();
//     if (e.keyCode == '13') {
//        while(xzb>948){
//            duck1.style.left="1300px";
//        }
//     }
// }