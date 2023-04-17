const IMGS = [
  "https://images.freeimages.com/images/large-previews/4c5/white-textured-surface-for-background-1641091.jpg",
  "https://images.freeimages.com/images/large-previews/bbf/the-leather-background-1639942.jpg",
  "https://images.freeimages.com/images/large-previews/5ae/land-from-above-4-1636747.jpg",
];

const randomImg = Math.floor(Math.random() * IMGS.length);
const chosenImg = IMGS[randomImg];

const bgImage = document.createElement("img");
bgImage.src = chosenImg;
document.body.appendChild(bgImage);
