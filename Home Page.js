const carousel = document.querySelector('.carousel');
const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
++

function changeItem(index) {
carousel.style.transform = `translateX(-${index * 20}%)`;
carouselItems.forEach((item) => item.classList.remove('active'));
carouselItems[index].classList.add('active');
}

function nextItem() {
currentIndex = (currentIndex + 1) % carouselItems.length;
changeItem(currentIndex);
}

setInterval(nextItem, 3000);


const imageElement =+ document.querySelector('.img-1 img');

imageElement.addEventListener('mouseenter', () => {
imageElement.src = imageElement.getAttribute('data-color');
});

imageElement.addEventListener('mouseleave', () => {
imageElement.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/hrx.png';
});


const imageElement2 = document.querySelector('.img-2 img');

imageElement2.addEventListener('mouseenter', () => {
imageElement2.src = imageElement2.getAttribute('data-color');
});

imageElement2.addEventListener('mouseleave', () => {
imageElement2.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/image.png';
});



const imageElement3 = document.querySelector('.img-3 img');

imageElement3.addEventListener('mouseenter', () => {
imageElement3.src = imageElement3.getAttribute('data-color');
});

imageElement3.addEventListener('mouseleave', () => {
imageElement3.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/power-gummies-1.png';
});



const imageElement4 = document.querySelector('.img-4 img');

imageElement4.addEventListener('mouseenter', () => {
imageElement4.src = imageElement4.getAttribute('data-color');
});

imageElement4.addEventListener('mouseleave', () => {
imageElement4.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/image-1.png';
});



const imageElement5 = document.querySelector('.img-5 img');

imageElement5.addEventListener('mouseenter', () => {
imageElement5.src = imageElement5.getAttribute('data-color');
});

imageElement5.addEventListener('mouseleave', () => {
imageElement5.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/BizzoG.png';
});



const imageElement6 = document.querySelector('.img-6 img');

imageElement6.addEventListener('mouseenter', () => {
imageElement6.src = imageElement6.getAttribute('data-color');
});

imageElement6.addEventListener('mouseleave', () => {
imageElement6.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/BlueTribe.png';
});



const imageElement7 = document.querySelector('.img-7 img');

imageElement7.addEventListener('mouseenter', () => {
imageElement7.src = imageElement7.getAttribute('data-color');
});

imageElement7.addEventListener('mouseleave', () => {
imageElement7.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/btg-2.png';
});



const imageElement8 = document.querySelector('.img-8 img');

imageElement8.addEventListener('mouseenter', () => {
imageElement8.src = imageElement8.getAttribute('data-color');
});

imageElement8.addEventListener('mouseleave', () => {
imageElement8.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/decimlpng.png';
});



const imageElement9 = document.querySelector('.img-9 img');

imageElement9.addEventListener('mouseenter', () => {
imageElement9.src = imageElement9.getAttribute('data-color');
});

imageElement9.addEventListener('mouseleave', () => {
imageElement9.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/ikonic-2.png';
});



const imageElement10 = document.querySelector('.img-10 img');

imageElement10.addEventListener('mouseenter', () => {
imageElement10.src = imageElement10.getAttribute('data-color');
});

imageElement10.addEventListener('mouseleave', () => {
imageElement10.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/dr.vaidya.png';
});



const imageElement11 = document.querySelector('.img-11 img');

imageElement11.addEventListener('mouseenter', () => {
imageElement11.src = imageElement11.getAttribute('data-color');
});

imageElement11.addEventListener('mouseleave', () => {
imageElement11.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/hbits-1.png';
});



const imageElement12 = document.querySelector('.img-12 img');

imageElement12.addEventListener('mouseenter', () => {
imageElement12.src = imageElement12.getAttribute('data-color');
});

imageElement12.addEventListener('mouseleave', () => {
imageElement12.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/diggi-1.png';
});


const imageElement13 = document.querySelector('.img-13 img');

imageElement13.addEventListener('mouseenter', () => {
imageElement13.src = imageElement13.getAttribute('data-color');
});

imageElement13.addEventListener('mouseleave', () => {
imageElement13.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/no-broker.png';
});



const imageElement14 = document.querySelector('.img-14 img');

imageElement14.addEventListener('mouseenter', () => {
imageElement14.src = imageElement14.getAttribute('data-color');
});

imageElement14.addEventListener('mouseleave', () => {
imageElement14.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/pet-pooja.png';
});



const imageElement15 = document.querySelector('.img-15 img');

imageElement15.addEventListener('mouseenter', () => {
imageElement15.src = imageElement15.getAttribute('data-color');
});

imageElement15.addEventListener('mouseleave', () => {
imageElement15.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/rooter-1.png';
});



const imageElement16 = document.querySelector('.img-16 img');

imageElement16.addEventListener('mouseenter', () => {
imageElement16.src = imageElement16.getAttribute('data-color');
});

imageElement16.addEventListener('mouseleave', () => {
imageElement16.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/lemme-be-1.png';
});



const imageElement17 = document.querySelector('.img-17 img');

imageElement17.addEventListener('mouseenter', () => {
imageElement17.src = imageElement17.getAttribute('data-color');
});

imageElement17.addEventListener('mouseleave', () => {
imageElement17.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/Rajasthali-1.png';
});



const imageElement18 = document.querySelector('.img-18 img');

imageElement18.addEventListener('mouseenter', () => {
imageElement18.src = imageElement18.getAttribute('data-color');
});

imageElement18.addEventListener('mouseleave', () => {
imageElement18.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/step-set-go.png';
});



const imageElement19 = document.querySelector('.img-19 img');

imageElement19.addEventListener('mouseenter', () => {
imageElement19.src = imageElement19.getAttribute('data-color');
});

imageElement19.addEventListener('mouseleave', () => {
imageElement19.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/tac-1.png';
});



const imageElement20 = document.querySelector('.img-20 img');

imageElement20.addEventListener('mouseenter', () => {
imageElement20.src = imageElement20.getAttribute('data-color');
});

imageElement20.addEventListener('mouseleave', () => {
imageElement20.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/thehub.png';
});



const imageElement21 = document.querySelector('.img-21 img');

imageElement21.addEventListener('mouseenter', () => {
imageElement21.src = imageElement21.getAttribute('data-color');
});

imageElement21.addEventListener('mouseleave', () => {
imageElement21.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/trade-india-1.png';
});



const imageElement22 = document.querySelector('.img-22 img');

imageElement22.addEventListener('mouseenter', () => {
imageElement22.src = imageElement22.getAttribute('data-color');
});

imageElement22.addEventListener('mouseleave', () => {
imageElement22.src = 'https://modernizingbiz.com/wp-content/uploads/2023/02/vediz.png';
});