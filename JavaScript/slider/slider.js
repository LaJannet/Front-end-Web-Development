var arr_src = ['images/fl1.jpg', 'images/fl2.jpg', 'images/fl3.jpg', 'images/fl4.jpg'];

var i = 0;
var img1 = document.getElementById('img1');

function swap_img() {
    if (i < arr_src.length - 1)
        i++;
    else
        i = 0;
    img1.setAttribute('src', arr_src[i]);
    setTimeout(swap_img, 10000);
}

swap_img();

function next() {
    if (i < arr_src.length - 1)
        i++;
    else
        i = 0;
    img1.setAttribute('src', arr_src[i]);
}

function prev() {
    if (i > 0)
        i--;
    else
        i = arr_src.length - 1;
    img1.setAttribute('src', arr_src[i]);
}