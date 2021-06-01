import { addClass, removeClass } from './utils-class';

const sliders =  document.getElementsByClassName("slider");

for (let index = 0; index < sliders.length; index++) {
    const slider = sliders[index];
    
    const items = slider.querySelectorAll(".slider .item");
    const preview = slider.querySelector("div > .preview"); //ambil div parent pertama dengan class preview

    for (let item = 0; item < items.length; item++) {
        const itemTrigger = items[item];
        
        itemTrigger.addEventListener("click", function(){
            const dataImg = this.attributes?.['data-img']?.value;
            for (let j = 0; j < items.length; j++) {
                const trigerToRemove = items[j];
                
                removeClass(trigerToRemove, "selected");
            }

            addClass(itemTrigger, "selected");
            preview.querySelector('img').setAttribute("src", dataImg);
        })
    }

}