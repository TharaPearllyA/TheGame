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
    <a href='`+blog.link +`' target="_blank">
    <div class='readmore-btn'>
      Read More&nbsp; >>
    </div>
    </a>`)
});

const index = blogs.findIndex(x => x.current === true);

if (index != -1) {
  blog1.innerHTML = divs[index];
  blog2.innerHTML = divs[index + 1];
  blog3.innerHTML = divs[index + 2];
}
