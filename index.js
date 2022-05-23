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

let tolety = [
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
        img: './img/image 8.png',
        title: 'Potty',
        subTitle: 'Minimalist flower pot',
        newPrice: '700$',
        price: '60$',
        sale: 'New'
    }
];

let Slider = [
    {
        img:'./img/Rectangle 24.png',
        text: '01 - Bed Room',
        title: 'Inner Peace'
    },
    {
        img:'./img/Rectangle 25.png',
        text: '01 - Bed Room',
        title: 'Inner Peace'
    },
    {
        img:'./img/Rectangle 26.png',
        text: '01 - Bed Room',
        title: 'Inner Peace'
    }
];

let newSlideTolet = [
    {
        img:'./img/slideCard/Rectangle 24.png',
        title:'How to create a living room to love',
        date:'20 jan 2020'
    },
    {
        img:'./img/slideCard/Rectangle 25.png',
        title:'Solution for clean look working space',
        date:'10 jan 2020'
    },
    {
        img:'./img/slideCard/Rectangle 26.png',
        title:'Make your cooking activity more',
        date:'20 jan 2020'
    },
    {
        img:'./img/slideCard/Rectangle 32.png',
        title:'How to create a living room to love',
        date:'20 jan 2020'
    },
    {
        img:'./img/slideCard/Rectangle 33.png',
        title:'Solution for clean look working space',
        date:'10 jan 2020'
    },
    {
        img:'./img/slideCard/Rectangle 34.png',
        title:'Make your cooking activity more',
        date:'20 jan 2020'
    },
    {
        img:'./img/slideCard/Rectangle 39.png',
        title:'How to create a living room to love',
        date:'20 jan 2020'
    },
];

let gallery = [
    './img/gallery/Rectangle 36.png',
    './img/gallery/Rectangle 37.png',
    './img/gallery/Rectangle 38.png',
    './img/gallery/Rectangle 40.png',
    './img/gallery/Rectangle 41.png',
    './img/gallery/Rectangle 46.png',
    './img/gallery/Rectangle 43.png',
    './img/gallery/Rectangle 44.png',
    './img/gallery/Rectangle 45.png',
];

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

let divText = document.createElement('div');
divText.classList.add('divText');
divText.innerHTML=`Our Products`;
document.body.appendChild(divText);

let divProduct = document.createElement('div');
divProduct.classList.add('divProduct');
document.body.appendChild(divProduct);
tolety.forEach((el,index)=>{
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


let btn = document.createElement('div');
btn.classList.add('btnm');
btn.innerHTML=`Show More`
document.body.appendChild(btn);

let sliderDiv = document.createElement('div');
sliderDiv.classList.add('sliderDiv');
sliderDiv.innerHTML=`
<div class = "textCont">
<p class ="title">50+ Beautiful rooms inspiration</p>
<p class ="text">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
<button class="btnMyTwo">Explore More</button>
</div>
<div class="slidMy">
<div class="oneSlide">
<img src="${Slider[0].img}" />
<div class="divTxtsContent">
<div class="title">${Slider[0].text}</div>
<div class="text">${Slider[0].title}</div>
</div>
<div class="cardProd"> <img src="./img/cardProd.png" /></div>
</div>
<img class="nextSlide" src="${Slider[1].img}" />
<img class="nextThree" src="${Slider[2].img}" />
<div class="iconNext"><img src="./img/next.svg" /></div>
</div>
`
document.body.appendChild(sliderDiv);

let divTitle = document.createElement('div');
divTitle.classList.add('divText');
divTitle.innerHTML=`Tips & Tricks`;
document.body.appendChild(divTitle);

document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.slider', {
        loop: true,
        autoplay: true,
        interval: 5000,
        refresh: true,
    });
});

let newDiv = document.createElement('div');
newDiv.classList.add('newDiv');
newDiv.innerHTML= `
<div class="container">

<div class="slider">
<div class="slider__wrapper">
    <div class="slider__item">
    <div class="slider__content">
        <div class="slider__content_header">
        <img class="slider__content_img" src="${newSlideTolet[0].img}" alt="">
        </div>
        <h2 class="slider__content_title">${newSlideTolet[0].title}</h2>
        <div class="slider__content_footer">
        <span class="slider__content_author">${newSlideTolet[0].date}</span>
        </div>
    </div>
    </div>
    <div class="slider__item">
    <div class="slider__content">
        <div class="slider__content_header">
        <img class="slider__content_img" src="${newSlideTolet[1].img}" alt="">
        </div>
        <h2 class="slider__content_title">${newSlideTolet[1].title}</h2>
        <div class="slider__content_footer">
        <span class="slider__content_author">${newSlideTolet[1].date}</span>
        </div>
    </div>
    </div>
    <div class="slider__item">
    <div class="slider__content">
        <div class="slider__content_header">
        <img class="slider__content_img" src="${newSlideTolet[2].img}" alt="">
        </div>
        <h2 class="slider__content_title">${newSlideTolet[2].title}</h2>
        <div class="slider__content_footer">
        <span class="slider__content_author">${newSlideTolet[2].date}</span>
        </div>
    </div>
    </div>
    <div class="slider__item">
    <div class="slider__content">
        <div class="slider__content_header">
        <img class="slider__content_img" src="${newSlideTolet[3].img}" alt="">
        </div>
        <h2 class="slider__content_title">${newSlideTolet[3].title}</h2>
        <div class="slider__content_footer">
        <span class="slider__content_author">${newSlideTolet[3].date}</span>
        </div>
    </div>
    </div>
    <div class="slider__item">
    <div class="slider__content">
        <div class="slider__content_header">
        <img class="slider__content_img" src="${newSlideTolet[4].img}" alt="">
        </div>
        <h2 class="slider__content_title">${newSlideTolet[4].title}</h2>
        <div class="slider__content_footer">
        <span class="slider__content_author">${newSlideTolet[4].date}</span>
        </div>
    </div>
    </div>
    <div class="slider__item">
    <div class="slider__content">
        <div class="slider__content_header">
        <img class="slider__content_img" src="${newSlideTolet[5].img}" alt="">
        </div>
        <h2 class="slider__content_title">${newSlideTolet[5].title}</h2>
        <div class="slider__content_footer">
        <span class="slider__content_author">${newSlideTolet[5].date}</span>
        </div>
    </div>
    </div>
    <div class="slider__item">
    <div class="slider__content">
        <div class="slider__content_header">
        <img class="slider__content_img" src="${newSlideTolet[6].img}" alt="">
        </div>
        <h2 class="slider__content_title">${newSlideTolet[6].title}</h2>
        <div class="slider__content_footer">
        <span class="slider__content_author">${newSlideTolet[6].date}</span>
        </div>
    </div>
    </div>
</div>
<a class="slider__control slider__control_left " href="#" role="button"></a>
<a class="slider__control slider__control_right " href="#" role="button"></a>
</div>

</div>
`

document.body.appendChild(newDiv);


let multiItemSlider = (function () {

    function _isElementVisible(element) {
    let rect = element.getBoundingClientRect(),
        vWidth = window.innerWidth || doc.documentElement.clientWidth,
        vHeight = window.innerHeight || doc.documentElement.clientHeight,
        elemFromPoint = function (x, y) { return document.elementFromPoint(x, y) };
    if (rect.right < 0 || rect.bottom < 0
        || rect.left > vWidth || rect.top > vHeight)
        return false;
    return (
        element.contains(elemFromPoint(rect.left, rect.top))
        || element.contains(elemFromPoint(rect.right, rect.top))
        || element.contains(elemFromPoint(rect.right, rect.bottom))
        || element.contains(elemFromPoint(rect.left, rect.bottom))
    );
    }

    return function (selector, config) {
    let
        _mainElement = document.querySelector(selector),
        _sliderWrapper = _mainElement.querySelector('.slider__wrapper'),
        _sliderItems = _mainElement.querySelectorAll('.slider__item'),
        _sliderControls = _mainElement.querySelectorAll('.slider__control'),
        _sliderControlLeft = _mainElement.querySelector('.slider__control_left'),
        _sliderControlRight = _mainElement.querySelector('.slider__control_right'),
        _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),
        _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),
        _html = _mainElement.innerHTML,
        _positionLeftItem = 0,
        _transform = 0,
        _step = _itemWidth / _wrapperWidth * 100,
        _items = [],
        _interval = 0,
        _states = [
        { active: false, minWidth: 0, count: 1 },
        { active: false, minWidth: 576, count: 2 },
        { active: false, minWidth: 992, count: 3 },
        { active: false, minWidth: 1200, count: 4 },
        ],
        _config = {
        isCycling: false,
        direction: 'right',
        interval: 5000,
        pause: true
        };

    for (let key in config) {
        if (key in _config) {
        _config[key] = config[key];
        }
    }

    _sliderItems.forEach(function (item, index) {
        _items.push({ item: item, position: index, transform: 0 });
    });

    let _setActive = function () {
        let _index = 0;
        let width = parseFloat(document.body.clientWidth);
        _states.forEach(function (item, index, arr) {
        _states[index].active = false;
        if (width >= _states[index].minWidth)
            _index = index;
        });
        _states[_index].active = true;
    }

    let _getActive = function () {
        let _index;
        _states.forEach(function (item, index, arr) {
        if (_states[index].active) {
            _index = index;
        }
        });
        return _index;
    }

    let position = {
        getItemMin: function () {
        let indexItem = 0;
        _items.forEach(function (item, index) {
            if (item.position < _items[indexItem].position) {
            indexItem = index;
            }
        });
        return indexItem;
        },
        getItemMax: function () {
        let indexItem = 0;
        _items.forEach(function (item, index) {
            if (item.position > _items[indexItem].position) {
            indexItem = index;
            }
        });
        return indexItem;
        },
        getMin: function () {
        return _items[position.getItemMin()].position;
        },
        getMax: function () {
        return _items[position.getItemMax()].position;
        }
    }

    let _transformItem = function (direction) {
        let nextItem;
        if (!_isElementVisible(_mainElement)) {
        return;
        }
        if (direction === 'right') {
        _positionLeftItem++;
        if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
            nextItem = position.getItemMin();
            _items[nextItem].position = position.getMax() + 1;
            _items[nextItem].transform += _items.length * 100;
            _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
        }
        _transform -= _step;
        }
        if (direction === 'left') {
        _positionLeftItem--;
        if (_positionLeftItem < position.getMin()) {
            nextItem = position.getItemMax();
            _items[nextItem].position = position.getMin() - 1;
            _items[nextItem].transform -= _items.length * 100;
            _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
        }
        _transform += _step;
        }
        _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
    }

    let _cycle = function (direction) {
        if (!_config.isCycling) {
        return;
        }
        _interval = setInterval(function () {
        _transformItem(direction);
        }, _config.interval);
    }

    let _controlClick = function (e) {
        e.preventDefault();
        if (e.target.classList.contains('slider__control')) {
        let direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
        _transformItem(direction);
        clearInterval(_interval);
        _cycle(_config.direction);
        }
    };

    let _handleVisibilityChange = function () {
        if (document.visibilityState === "hidden") {
        clearInterval(_interval);
        } else {
        clearInterval(_interval);
        _cycle(_config.direction);
        }
    }

    let _refresh = function () {
        clearInterval(_interval);
        _mainElement.innerHTML = _html;
        _sliderWrapper = _mainElement.querySelector('.slider__wrapper');
        _sliderItems = _mainElement.querySelectorAll('.slider__item');
        _sliderControls = _mainElement.querySelectorAll('.slider__control');
        _sliderControlLeft = _mainElement.querySelector('.slider__control_left');
        _sliderControlRight = _mainElement.querySelector('.slider__control_right');
        _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width);
        _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width);
        _positionLeftItem = 0;
        _transform = 0;
        _step = _itemWidth / _wrapperWidth * 100;
        _items = [];
        _sliderItems.forEach(function (item, index) {
        _items.push({ item: item, position: index, transform: 0 });
        });
    }

    let _setUpListeners = function () {
        _mainElement.addEventListener('click', _controlClick);
        if (_config.pause && _config.isCycling) {
        _mainElement.addEventListener('mouseenter', function () {
            clearInterval(_interval);
        });
        _mainElement.addEventListener('mouseleave', function () {
            clearInterval(_interval);
            _cycle(_config.direction);
        });
        }
        document.addEventListener('visibilitychange', _handleVisibilityChange, false);
        window.addEventListener('resize', function () {
        let
            _index = 0,
            width = parseFloat(document.body.clientWidth);
        _states.forEach(function (item, index, arr) {
            if (width >= _states[index].minWidth)
            _index = index;
        });
        if (_index !== _getActive()) {
            _setActive();
            _refresh();
        }
        });
    }

    // инициализация
    _setUpListeners();
    if (document.visibilityState === "visible") {
        _cycle(_config.direction);
    }
    _setActive();

    return {
        right: function () {
        _transformItem('right');
        },
        left: function () {
        _transformItem('left');
        },
        stop: function () {
        _config.isCycling = false;
        clearInterval(_interval);
        },
        cycle: function () {
        _config.isCycling = true;
        clearInterval(_interval);
        _cycle();
        }
    }

    }
}());

let slider = multiItemSlider('.slider', {
    isCycling: true
})

let divSubTitle = document.createElement('div');
divSubTitle.classList.add('divSubTitle');
divSubTitle.innerHTML=`Share your setup with`;
document.body.appendChild(divSubTitle);

let divTitleTwo = document.createElement('div');
divTitleTwo.classList.add('divText');
divTitleTwo.classList.add('mt');
divTitleTwo.innerHTML=`#FuniroFurniture`;
document.body.appendChild(divTitleTwo);

let gallerys = document.createElement('div');
gallerys.classList.add('gallery');
gallerys.innerHTML=`
<img class="one" src="${gallery[0]}" alt="" />
<img class="two" src="${gallery[1]}" alt="" />
<img class="three" src="${gallery[2]}" alt="" />
<img class="four" src="${gallery[3]}" alt="" />
<img class="five" src="${gallery[4]}" alt="" />
<img class="six" src="${gallery[5]}" alt="" />
<img class="seven" src="${gallery[6]}" alt="" />
<img class="eight" src="${gallery[7]}" alt="" />
<img class="nine" src="${gallery[8]}" alt="" />
`
document.body.appendChild(gallerys);


let footer = document.createElement('div');
footer.classList.add('footer');
footer.classList.add('flex');
footer.innerHTML=`
<div class="logoText flex">
<img class="logo" src="./img/logo.svg" alt="">
<div class="text">
<p class="info">Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</p>
<div class="adress flex">
<img class="adress" src="./img/Pin 24px.svg" alt="">
<p class="text">Sawojajar Malang, Indonesia</p>
</div>
<div class="phone flex">
<img class="phone" src="./img/Phone 24px.svg" alt="" />
<p class="text">+37529 3658157</p>
</div>
<p class="site">www.funiro.com</p>
</div>
</div>

<div class="contact flex">
<p class="title">Stay Connected</p>
<div class="titleText">
<p><a href="#" class="text">Facebook</a></p>
<p><a href="#" class="text">Instagram</a></p>
<p><a href="#" class="text">Twitter</a></p>
</div>
</div>

<div class="menu flex">
<p class="title">Menu</p>
<p class="text">About Us</p>
</div>
`

document.body.appendChild(footer)