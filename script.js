const heroCarousel = document.getElementById("heroCarousel");
const collectionsCarousel = document.getElementById("collectionsCarousel");
let currentStartIndex = 0;

const imgArray = [
    './src/plant-1.svg',
    './src/plant-1.svg',
    './src/plant-1.svg',
    './src/plant-1.svg',
    './src/plant-1.svg',
];

const collectionsImage = [
    {
        title: "Bird Of Paradise",
        imgUrl: './src/collections/plant-1.svg'
    },
    {
        title: "Rubber Plants",
        imgUrl: './src/collections/plant-2.svg'
    },
    {
        title: "String of pearls",
        imgUrl: './src/collections/plant-3.svg'
    },
    {
        title: "Bird Of Paradise",
        imgUrl: './src/collections/plant-1.svg'
    },
    {
        title: "Rubber Plants",
        imgUrl: './src/collections/plant-2.svg'
    },
    {
        title: "String of pearls",
        imgUrl: './src/collections/plant-3.svg'
    },
    {
        title: "Bird Of Paradise",
        imgUrl: './src/collections/plant-1.svg'
    },
    {
        title: "Rubber Plants",
        imgUrl: './src/collections/plant-2.svg'
    },
    {
        title: "String of pearls",
        imgUrl: './src/collections/plant-3.svg'
    },
];


imgArray.forEach((element, index) => {
    const imgDiv = document.createElement("img");
    imgDiv.src = element;
    imgDiv.setAttribute("class", "item rounded-3 position-absolute")
    // imgDiv.dataset.id = index;

    heroCarousel.append(imgDiv);
});

collectionsImage.forEach((element, index) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card flex-shrink-0");
    card.style.width = "32%";

    const imgDiv = document.createElement("img");
    imgDiv.src = element.imgUrl;
    imgDiv.setAttribute("class", "card-img-top")
    // imgDiv.dataset.id = index;

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const title = document.createElement("h3");
    title.setAttribute("class", "card-text");
    title.textContent = element.title

    cardBody.append(title)

    card.append(imgDiv, cardBody);

    collectionsCarousel.append(card);
});


// collectionsCarousel.style.transform = "translate(-50%)";
// const items = document.querySelectorAll(".card");

const onNext = () => {
    currentStartIndex = (currentStartIndex + 1) % (collectionsImage.length - 3);
    console.log(currentStartIndex);
    collectionsCarousel.style.transform = `translateX(${-18 * currentStartIndex}rem)`;
}