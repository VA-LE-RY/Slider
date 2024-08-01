const objects = [
    {
        url: './assets/main__photo1.jpg',
        town: 'Rostov-on-Don',
        street: 'LCD admiral',
        area: '81 m2',
        time: '3.5 months'
    },
    {
        url: './assets/main__photo2.jpg',
        town: 'Sochi',
        street: 'Thieves',
        area: '105 m2',
        time: '4 months'
    },
    {
        url: './assets/main__photo3.jpg',
        town: 'Rostov-on-Don',
        street: 'Patriotic',
        area: '90 m2',
        time: '3 months'
    }
]

const image = document.querySelector(".main__photo-img");
const town = document.querySelector(".main__card-town");
const street = document.querySelector(".main__card-street");
const area = document.querySelector(".area");
const time = document.querySelector(".time");
const pre = document.querySelector(".pre");
const next = document.querySelector(".next");
const parentPoints = document.querySelector('.main__navigation-points');
const parentLinks = document.querySelector('.main__photo-links');
let currentIndex = 0;

const initSlider = () => {
    objects.forEach((image, index) => {
        parentPoints.innerHTML += `<div class="main__navigation-points-item ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`;
        parentLinks.innerHTML += `<div class="main__photo-links-item ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`;
    })
}

const setText = () => {
    town.innerText = objects[currentIndex].town
    street.innerText = objects[currentIndex].street
    area.innerText = objects[currentIndex].area
    time.innerText = objects[currentIndex].time
}

const changeActive = () => {
    document.querySelector('.main__navigation-points-item.active').classList.remove('active');
    document.querySelector(`.main__navigation-points-item[data-index="${currentIndex}"]`).classList.add('active');

    document.querySelector('.main__photo-links-item.active').classList.remove('active');
    document.querySelector(`.main__photo-links-item[data-index="${currentIndex}"]`).classList.add('active');
}

const setObject = () => {
    image.style.background = `url(${objects[currentIndex].url})`;
    setText();
}

document.addEventListener('click', (event) => {
    if(event.target.classList.contains('main__navigation-points-item' || 'main__photo-links-item')){
        currentIndex = +event.target.getAttribute('data-index');
        setObject();
        changeActive();
    }
})

pre.addEventListener('click', () => {
    if(currentIndex === 0) {
        currentIndex = objects.length - 1;
    } else {
    currentIndex -= 1;
    };
    setObject();
    changeActive();
})

next.addEventListener('click', () => {
    if(currentIndex === objects.length - 1) {
        currentIndex = 0;
    } else {
    currentIndex += 1;
    };
    setObject();
    changeActive();
})

initSlider();
setObject();