let sh1 = document.querySelector("#show1");
let sh2 = document.querySelector("#show2");
let sh3 = document.querySelector("#show3");
let btn1 = document.getElementById("link1");
let btn2 = document.getElementById("link2");
let btn3 = document.getElementById("link3");
let img = document.querySelectorAll('img');
let request = document.querySelectorAll('.Request');
let mod = document.querySelector(".sec7");
let iocn = document.querySelector('.iocn');
let mg = document.querySelector('.mg');
let imges = document.querySelectorAll('.imges');
let texth = document.querySelector('.h');
let textp = document.querySelector('.p');
let h = document.querySelectorAll('.text');
let p = document.querySelectorAll('.pr');
let minus= document.querySelector('.minus');
let plus= document.querySelector('.plus');
let quantity = document.querySelector(".quantity");
let counter = +document.querySelector(".quantity").value;
let Delivery = document.querySelector('.Delivery');

btn1.onclick = () => {
  sh1.removeAttribute("id");
  sh1.classList.add('vist');
  btn1.remove();
  btn2.style.display='inline';
}

btn2.onclick = function() {
  sh2.removeAttribute("id");
  sh2.classList.add('vist');
  btn2.remove();
  btn3.style.display='inline';
}

btn3.onclick = function() {
  sh3.removeAttribute("id");
  sh3.classList.add('vist');
  btn3.remove();
  btn3.style.display='inline';
}

for (let i = 0; i < img.length; i++) {
  img[i].alt = `imges_${i + 1}`;
}

for (let i = 0; i < request.length; i++) {
  request[i].onclick = function () {
    mod.style.display="block";
    mod.style.display='flex';
    // document.body.style.overflow= "hidden";
    mod.classList.add('vist');
    mg.src = imges[i].src;
    texth.textContent =h[i].textContent;
    textp.textContent = p[i].textContent;
  }
}

iocn.onclick = function () {
  document.body.style.overflow= "overlay";
  mod.style.display= 'none';
}

Delivery.onclick = function () {
  document.body.style.overflow= "overlay";
  mod.style.display= 'none';
}

plus.onclick = () => {
  counter++;
  quantity.value = counter;
}

minus.onclick = () => {
  if(counter <= 0) {
    counter;
  }
  else{
    counter--;
  }
  quantity.value = counter;    
}