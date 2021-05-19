import { addClass, removeClass } from './utils-class';

const caraouselId = document.getElementById("carousel")
// kita ambil flex pertama dari class flex dari pembungkus id carausel
const carouselItems = caraouselId.getElementsByClassName("flex")[0];
const carouselContainer = caraouselId.getElementsByClassName("container")[0];

function  carouselCalculateOffset(){
    const carouselOffset =  carouselContainer.getBoundingClientRect().left;
    carouselItems.style.paddingLeft = `${carouselOffset - 16}px`;
    carouselItems.style.paddingRight = `${carouselOffset - 16}px`; 
}

if(caraouselId){
    window.addEventListener("load", carouselCalculateOffset);
    window.addEventListener('resize',carouselCalculateOffset);
}