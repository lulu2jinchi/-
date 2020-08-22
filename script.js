let duck1 = document.querySelector('.duck1');
let duck2 = document.querySelector('.duck2');
let toushiText = document.querySelector('.toushiText');
let yzb;
let xzb;
let x1 = 948;
let y1 = 530;


function zuobiao(event) {
    xzb = event.clientX;
    yzb = event.clientY;
    if (xzb > x1 && yzb > y1) {
        let distance = Math.sqrt(Math.pow(xzb - x1, 2) + Math.pow(yzb - y1, 2));
        let duration = 100;
        let f = () => {
            if (Math.abs(yzb - y1) > 10) {
                setTimeout(
                    () => {
                        let dx = 0;
                        let dy = 0;
                        // if(yzb - y1 > 0) {
                        dx = 5 * (xzb - x1) / distance;
                        dy = 5 * (yzb - y1) / distance;
                        // } else {
                        //     dx = -5*(xzb-x1)/distance;
                        //     dy = -5*(yzb-y1)/distance;
                        // }
                        let top = y1;
                        duck1.style.top = (top + dy) + 'px';
                        let left = x1;
                        duck1.style.top = (left + dx) + 'px';

                        f();
                    }, 50
                );
            }
        };
        f();

    }
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