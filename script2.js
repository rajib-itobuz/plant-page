const card = document.querySelector(".collectionsCarouselContainer .item");
const collectionsCarousel = document.getElementById("collectionsCarousel");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

const carouselNextBtn = document.getElementById("carouselNextBtn");
const carouselBackBtn = document.getElementById("carouselBackBtn");
const carouselContainer=document.getElementById("carouselContainer");

let currSlide = 0;

const sliderFunc=(type)=>{
    let items = carouselContainer.querySelectorAll('.carouselContainer .item');
    
    if(type==='back'){
        // console.log('back');
        const item=items[items.length-1]
        carouselContainer.removeChild(item);
        carouselContainer.prepend(item);
    }else{
        const item=items[0]
        carouselContainer.removeChild(item);
        carouselContainer.append(item);

        // console.log('next');
    }
}

const nextSlide = () => {
    currSlide++;
    const parentLeft = collectionsCarousel.getBoundingClientRect().left
    
    const cardWidth = card.getClientRects()[0].width;
    collectionsCarousel.style.transform= `translateX(-${currSlide * cardWidth}px)`
    // console.log(parentLeft,cardWidth);
    // console.log(currSlide*cardWidth);

    // console.log();
}

const backSlide = () => {
    currSlide--;
    const parentLeft = collectionsCarousel.getBoundingClientRect().left
    const cardWidth = card.getClientRects()[0].width;
    
    // console.dir(parentLeft, parentLeft + cardWidth);
    collectionsCarousel.style.transform = `translateX(${parentLeft-cardWidth}px)`
    // console.log(parentLeft,cardWidth);

}


backBtn.addEventListener("click", backSlide);
nextBtn.addEventListener("click", nextSlide);

const parentLeft = collectionsCarousel.getBoundingClientRect().left
console.log(parentLeft);



// console.log(window.screen.width,window.screen.height,card.width)
carouselBackBtn.addEventListener("click",()=>sliderFunc('back'));
carouselNextBtn.addEventListener("click",()=>sliderFunc('next'));
