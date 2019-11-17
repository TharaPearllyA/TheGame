// Import stylesheets
import './style.css';

const blogs = [
  {
    header: "The Begining",
    image: "TheBegining.jpeg",
    description: "Another argument this Value is used to tell the function to use this value when executing argument function",
    current: true,
    link:"https://medium.com/@strippedthegame/the-beginning-f5ec7ef1b246"
  },
  {
    header: "",
    image: null,
    description: "coming soon...",
    current: false,
    link:"#"
  },
  {
    header: "",
    image: null,
    description: "coming soon...",
    current: false,
    link:"#"
  }
]

const blog1 = document.getElementById('blog-current-1');
const blog2 = document.getElementById('blog-current-2');
const blog3 = document.getElementById('blog-current-3');

const divs = [];
blogs.forEach((blog, index) => {
  let btnClass = 
  blog.image?`<a href='`+blog.link +`' target="_blank">
  <div class="readmore-btn">
    Read More&nbsp; >>
  </div>
  </a>`: `<div class="readmore-btn-disabled">
  Read More&nbsp; >>
</div>` ;
  
  divs.push(
    `<div class='inner-div' 
      style="background-image:url(`+blog.image+`)">
      
    </div>
    <p class='blog-header'>`
    + blog.header +
    `</p>
    <p class='blog-descirption'>` +
    blog.description + 
    `</p>
    `+ btnClass+`
    `)
});

const index = blogs.findIndex(x => x.current === true);

if (index != -1) {
  blog1.innerHTML = divs[index];
  blog2.innerHTML = divs[index + 1];
  blog3.innerHTML = divs[index + 2];
}


const galleryColumn1 = document.getElementById('gallery-column-1');
const galleryColumn2 = document.getElementById('gallery-column-2');
const galleryColumn3 = document.getElementById('gallery-column-3');

const galleryImages =[
  "https://www.w3schools.com/w3images/wedding.jpg",
  "https://www.w3schools.com/w3images/rocks.jpg",
  "https://www.w3schools.com/w3images/falls2.jpg",
  "https://www.w3schools.com/w3images/paris.jpg",
  "https://www.w3schools.com/w3images/nature.jpg",
  "https://www.w3schools.com/w3images/mist.jpg",
  "https://www.w3schools.com/w3images/paris.jpg",
  "https://www.w3schools.com/w3images/falls2.jpg",
  "https://www.w3schools.com/w3images/paris.jpg"
];
const column1 = [];
const column2 = [];
const column3 = [];
galleryImages.map((images, index)=> {
  if(index === 3){
    column1.push(
      `<span style="background-image:url(`+galleryImages[0]+`)"></span>
      <span style="background-image:url(`+galleryImages[1]+`)"></span>
      <span style="background-image:url(`+galleryImages[2]+`)"></span>`
    )
  }
  else if(index === 6){
    column2.push(
      `<span style="background-image:url(`+galleryImages[3]+`)"></span>
      <span style="background-image:url(`+galleryImages[4]+`)"></span>
      <span style="background-image:url(`+galleryImages[5]+`)"></span>`
    )
  }
  else if(index === 8){
    column3.push(
      `<span style="background-image:url(`+galleryImages[6]+`)"></span>
      <span style="background-image:url(`+galleryImages[7]+`)"></span>
      <span style="background-image:url(`+galleryImages[8]+`)"></span>`
    )
  }
});

if (column1.length > 0) {
  galleryColumn1.innerHTML = column1;
}
if (column2.length > 0) {
  galleryColumn2.innerHTML = column2;
}
if (column3.length > 0) {
  galleryColumn3.innerHTML = column3;
}


