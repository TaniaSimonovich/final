let nameOfTheMain = [
    {
        name : "Bohauss",
        subtitle: "Luxury big sofa 2-seat",
        price: "1000$"
    },
    {
        name : "Cambri",
        subtitle: "Luxury big sofa 2-seat",
        price: "999$"
    },
    {
        name : "Sorinella",
        subtitle: "Exclusive 3 Piece Upholstered",
        price: "1100$"
    }
];

let tovary = [
    {
        img:'./img/image 1.png',
        title: 'Syltherine',
        subTitle: 'Stylish cafe chair',
        newPrice: '500$',
        price: '700$',
        sale: '-30%'
    },
    {
        img: './img/image 2.png',
        title: 'Leviosa',
        subTitle: 'Stylish cafe chair',
        newPrice: '700$',
        price: '250$',
        sale: 'New'
    },
    {
        img: './img/image 3.png',
        title: 'Lolito',
        subTitle: 'Luxury big sofa',
        newPrice: '700$',
        price: '1400$',
        sale: '-50%',
    },
    {
        img: './img/image 4.png',
        title: 'Respira',
        subTitle: 'Minimalist fan',
        newPrice: '700$',
        price: '140$',
        sale: 'New'
    },
    {
        img: './img/image 5.png',
        title: 'Grifo',
        subTitle: 'Night lamp',
        newPrice: '700$',
        price: '200$',
        sale: 'New'
    },
    {
        img: './img/image 6.png',
        title: 'Muggo',
        subTitle: 'Small mug',
        newPrice: '700$',
        price: '20$',
        sale: 'New'
    },
    {
        img: './img/image 7.png',
        title: 'Pingky',
        subTitle: 'Cute bed set',
        newPrice: '100$',
        price:'200$',
        sale:'-50%'
    },
    {
        img: './img/image 8.pngs',
        title: 'Potty',
        subTitle: 'Minimalist flower pot',
        newPrice: '700$',
        price: '60$',
        sale: 'New'
    }
]

let header = document.createElement('header');
header.classList.add('header');
header.innerHTML=`
<div class="headerText">
<img class="logo" src="./img/logo.svg" alt="">
<div class="textHeader">About Us</div>
</div>
<div class="search">
<img class="searchIcon" src="./img/Search.svg" alt="">
<input type="text" placeholder="Search for minimalist chair">
</div>
<img class="busket" src="./img/busket.svg" alt="">
`
document.body.appendChild(header);

let divOne = document.createElement('div');
divOne.classList.add('backgroundOne');
let divTwo = document.createElement('div');
divTwo.classList.add('backgroundTwo');

document.body.appendChild(divOne)
document.body.appendChild(divTwo)

const carousel = function(){
    let carouselExampleCaptions = document.createElement('div');
    carouselExampleCaptions.classList.add('slides');
    carouselExampleCaptions.innerHTML=`
    <div class="mainTextContainer">
    <p>High-Quality Furniture Just For You</p>
    <p class="span">Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
    <button>Shop Now</button>
    </div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators indicatorsNew" style="left: 669px;">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" ></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" ></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active size">
        <img src="./img/oneImeg.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block bg" style="left: 68%">
        <h5>${nameOfTheMain[0].name}</h5>
        <p class="subtitle">${nameOfTheMain[0].subtitle}</p>
        <div class="flex">
        <p>${nameOfTheMain[0].price}</p>
        <a href=""><img class="iconSlide" src="./img/arrow.svg" alt=""></a>
        </div>
        </div>
        </div>
        <div class="carousel-item size">
        <img src="./img/twoImeg.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block bg" style="left: 68%">
        <h5>${nameOfTheMain[1].name}</h5>
        <p class="subtitle">${nameOfTheMain[1].subtitle}</p>
        <div class="flex">
        <p>${nameOfTheMain[1].price}</p>
        <a href=""><img class="iconSlide" src="./img/arrow.svg" alt=""></a>
        </div>
        </div>
        </div>
        <div class="carousel-item size">
        <img src="./img/threeImeg.png" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block bg" style="left: 68%">
        <h5>${nameOfTheMain[2].name}</h5>
        <p class="subtitle">${nameOfTheMain[2].subtitle}</p>
        <div class="flex">
        <p>${nameOfTheMain[2].price}</p>
        <a href=""><img class="iconSlide" src="./img/arrow.svg" alt=""></a>
        </div>
        </div>
        </div>
    </div>
    <button class="carousel-control-prev positionNewBtnPrev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style="
    position: absolute;
    background: #fa6305;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    justify-content: space-evenly;
    top: 57px;
    left: 1328px;
    ">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next positionNewBtnNext" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style="
    position: absolute;
    background: #E89F71;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    justify-content: space-evenly;
    right: 100px;
    top: 57px;
    ">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
    `
    document.body.appendChild(carouselExampleCaptions);
}

carousel();

let divIcon = document.createElement('div');
divIcon.classList.add('divIcon');
divIcon.classList.add('flex');
document.body.appendChild(divIcon);
divIcon.innerHTML=`
<div class="iconCont flex">
        <img src="./img/Group.svg" alt="">
        <div class="text">
            <p class = "title">High Quality</p>
            <p class = "subTitle">crafted from top materials</p>
        </div>
</div>
<div class="iconCont flex">
        <img src="./img/guarantee.svg" alt="">
        <div class="text">
            <p class = "title">Warrany Protection</p>
            <p class = "subTitle">Over 2 years</p>
        </div>
</div>
<div class="iconCont flex">
        <img src="./img/shipping.svg" alt="">
        <div class="text">
            <p class = "title">Free Shipping</p>
            <p class = "subTitle">Order over 150 $</p>
        </div>
    </div>
<div class="iconCont flex">
        <img src="./img/customer-support.svg" alt="">
        <div class="text">
            <p class = "title">24 / 7 Support</p>
            <p class = "subTitle">Dedicated support</p>
        </div>
    </div>
`

let divProduct = document.createElement('div');
divProduct.classList.add('divProduct');
document.body.appendChild(divProduct);
tovary.forEach((el,index)=>{
    let elPr = document.createElement('div');
    elPr.classList.add('elPr');
    elPr.innerHTML=`
    <img src="${el.img}" alt="">
    <div class="content">
    <div class="elPrTitle">${el.title}</div>
    <div class="elPrSubTitle">${el.subTitle}</div>
    <div class="flex position">
    <div class="elPrSubNewPrice">${el.newPrice}</div>
    <div class="elPrSubPrice">${el.price}</div>
    </div>
    </div>
    `
    divProduct.appendChild(elPr);
})