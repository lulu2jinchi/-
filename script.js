let duck1 = document.querySelector('.duck1');
let duck2 = document.querySelector('.duck2');
let toushiText = document.querySelector('.toushiText');
let yzb;
let xzb;
let x1 = 948;
let y1 = 530;

function dist(x1, y1, x2, y2) {
    return Math.sqrt(
        Math.pow(x1 - x2, 2),
        Math.pow(y1 - y2, 2)
    );
}

function zuobiao(event) {
    xzb = event.clientX;
    yzb = event.clientY;
    let distance = dist(xzb, yzb, duck1.offsetTop, duck1.offsetLeft);
    let duration = 100;
    let f = () => {
        if (dist(xzb, yzb, duck1.offsetTop, duck1.offsetLeft) > 10) {
            setTimeout(
                () => {
                    let dx = 0;
                    let dy = 0;

                    dx = 5 * (xzb - duck1.offsetLeft) / distance;
                    dy = 5 * (yzb - duck1.offsetTop) / distance;

                    duck1.style.top = (duck1.offsetTop + dy) + 'px';
                    duck1.style.left = (duck1.offsetLeft + dx) + 'px';

                    f();
                }, 50
            );
        }
    }
    f();
}

function toushi(event) {
    xzb1 = event.clientX;
    yzb1 = event.clientY;
    if (yzb1 < 480 || yzb1 > 760) {
        toushiText.style.display = "none";
        toushiText.innerHTML = "";
    } else {
        toushiText.style.display = "block";
        toushiText.style.position = "absolute";
        toushiText.style.top = yzb1 - 20;
        toushiText.style.left = xzb1;
        toushiText.style.color = "yellow";
        toushiText.innerHTML = "投食";
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