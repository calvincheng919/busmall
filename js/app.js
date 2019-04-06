'use strict';

//Global Variables
const PRODUCTS = [];
let clickCount = 0;
const MAX_CLICKS = 25;
let previousPageImages = [1,2,3];

const arrPrd = [
  ['Bag', '../img/bag.jpg' ],
  ['Boots', '../img/boots.jpg' ],
  ['Banana', '../img/banana.jpg' ],
  ['Bathroom', '../img/bathroom.jpg' ],
  ['Breakfast', '../img/breakfast.jpg' ],
  ['Bubblegum', '../img/bubblegum.jpg' ],
  ['Chair', '../img/chair.jpg' ],
  ['Cthulhu', '../img/cthulhu.jpg' ],
  ['Dog Duck', '../img/dog-duck.jpg' ],
  ['Dragon', '../img/dragon.jpg' ],
  ['Pen', '../img/pen.jpg' ],
  ['Pet Sweep', '../img/pet-sweep.jpg' ],
  ['Scissors', '../img/scissors.jpg' ],
  ['Shark', '../img/shark.jpg' ],
  ['Sweep', '../img/sweep.png' ],
  ['Tauntaun', '../img/tauntaun.jpg' ],
  ['Unicorn', '../img/unicorn.jpg' ],
  ['USB', '../img/usb.gif' ],
  ['Water Can', '../img/water-can.jpg' ],
  ['Wine Glass', '../img/wine-glass.jpg' ],
];

//Event Listener

const containerElement = document.getElementById('container');
containerElement.addEventListener('click', clickHandler);

//Functions
//Constructor Function to create a factory for product objects

const Products = function(name, HTMLid, imagePath){
  this.name = name;
  this.imagePath = imagePath;
  this.totalProdClicks = 0;
  this.totalProductImpressions = 0;
  this.HTMLid = HTMLid;
  PRODUCTS.push(this);
};

Products.prototype.render = function(){
  //render your statistics on the DOM
  let divStats = document.getElementById('stats');
  let ul = document.createElement('ul');
  let li = document.createElement('li');
  li.textContent = this.totalProdClicks;
  divStats.appendChild(ul);
  ul.appendChild(li);
};

Products.prototype.getPercentClicked = function(){
  //calculate %cliks vs. impressions - this.totalProdClicks/this.totalProductImpressions
  let percentClicked = (this.totalProdClicks/this.totalProductImpressions *100).toFixed;
  return percentClicked;
};

//Event Handler Function
function clickHandler(e){

  if(e.target.className === 'images' && clickCount < MAX_CLICKS) {

    clickCount++;
    document.getElementById('count').textContent = clickCount;
    PRODUCTS[e.target.id].totalProdClicks++;
    displayImage();
  }
  for(let i=0; i<PRODUCTS.length; ++){
    PRODUCTS[i].render();
  }

}
//Load Images on to screen
function displayImage(){

  getRandomImages();

  const imageContainer1 = document.getElementById('img_container1');
  const imageContainer2 = document.getElementById('img_container2');
  const imageContainer3 = document.getElementById('img_container3');
  const imgElement1 = imageContainer1.firstChild;
  const imgElement2 = imageContainer2.firstChild;
  const imgElement3 = imageContainer3.firstChild;

  imgElement1.setAttribute('src', PRODUCTS[previousPageImages[0]].imagePath);
  imgElement2.setAttribute('src', PRODUCTS[previousPageImages[1]].imagePath);
  imgElement3.setAttribute('src', PRODUCTS[previousPageImages[2]].imagePath);

  imgElement1.setAttribute('id', PRODUCTS[previousPageImages[0]].HTMLid);
  imgElement2.setAttribute('id', PRODUCTS[previousPageImages[1]].HTMLid);
  imgElement3.setAttribute('id', PRODUCTS[previousPageImages[2]].HTMLid);

}

let getRandomImages = function(){
  let arr=[];
  while(arr.length < 3){ 
    let num = Math.floor(Math.random()*20);
    if(!arr.includes(num) && !previousPageImages.includes(num)){
      arr.push(num);
      PRODUCTS[num].totalProductImpressions++;
    } 
  }
  previousPageImages = [...arr];
};

//Application Entry 
(function appStart(){
  // let startImages = [1,2,3];
  // console.log(arrPrd.length);
  for (let i=0; i<arrPrd.length; i++){
    let product = new Products(arrPrd[i][0], i, arrPrd[i][1]);
  }
  // console.log(PRODUCTS);
  // console.log(getRandomImages(startImages));
  // console.log(PRODUCTS);
  displayImage();
})();


