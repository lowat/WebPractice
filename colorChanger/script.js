'use strict'

const colorBtn = document.getElementById("colorBtn");
const body = document.querySelector("body");
const primaryHeader = document.querySelector(".primaryHeader");

let colorState = 0;
const colors = [
    [['#3A3E98'],['#5256BC']],
    [['#E8170C'], ['#FF3D0D']],
    [['#ff9f55'], ['#FF7408']],
    [['#17E8B4'], ['#25FF8B']],
];

colorBtn.addEventListener('click',(e) => {
    e.preventDefault();
    colorState += 1;
    colorState = colorState % 4;
    colorBtn.style.backgroundColor = colors[colorState][1];
    body.style.backgroundColor = colors[colorState][0];
    primaryHeader.style.color = colors[colorState][1];
})