let duck1 = document.querySelector('.duck1');
let duck2 = document.querySelector('.duck2');
let toushiText = document.querySelector('.toushiText');
let yzb;
let xzb;
let x1 = 948;
let y1 = 530;
let x2 = 1792;
let y2 = 511;


function dist(clickx,clicky, fixx, fixy) {
    // alert(Math.pow(clickx - fixx, 2));
    // alert(Math.pow(clicky - fixy, 2));
    // alert(Math.sqrt(
    //     Math.pow(clickx - fixx, 2)+Math.pow(clicky - fixy, 2)
    // ));
    return Math.sqrt(
        Math.pow(clickx - fixx, 2)+Math.pow(clicky - fixy, 2)
    );
    
}


function zuobiao(event) {
    xzb = event.clientX;
    yzb = event.clientY;
    let distance1 = dist(xzb, yzb, x1, y1);
    // alert(distance1);
    let distance2 = dist(xzb, yzb, x2, y2);
    let duration = 100;
    let f = () => {
        if (dist(xzb, yzb, duck1.offsetTop, duck1.offsetLeft) > 100) {
            // alert(dist(xzb, yzb, duck1.offsetTop, duck1.offsetLeft)+','+xzb+","+yzb+","+duck1.offsetLeft+','+duck1.offsetTop ); 
            setTimeout(
                () => {
                    let dx1 = 0;
                    let dy1 = 0;

                    dx1 = 5 * (xzb - x1) / distance1;
                    dy1 = 5 * (yzb - y1) / distance1;

                    duck1.style.top = (duck1.offsetTop + dy1) + 'px';
                    duck1.style.left = (duck1.offsetLeft + dx1) + 'px';

                    // f();
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