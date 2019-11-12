// Import stylesheets
import './style.css';

const blogs = [
  {header: "The Begining",
  image : "url",
  description: "Another argument this Value is used to tell the function to use this value when executing argument function",
  current : true
  },
  {header: "",
  image : "coming soon..",
  description: "loreum",
  current : false
  },
  {header: "",
  image : "coming soon...",
  description: "loreum",
  current : false
  }
]

const blog1 = document.getElementById('blog-current-1');
const blog2 = document.getElementById('blog-current-2');
const blog3 = document.getElementById('blog-current-3');

const divs = [];
blogs.forEach((blog, index) => {
    divs.push( 
      '<div class="inner-div"></div><p class="blog-header">'
      +blog.header + '</p><p class="blog-descirption">'+
      blog.description+'</p><div class="readmore-btn">Read More&nbsp; &gt;&gt;</div></div>')
  });

const index = blogs.findIndex(x => x.current === true)
if(index){
  blog1.innerHTML = divs[index];
  blog2.innerHTML = divs[index+1];
  blog3.innerHTML = divs[index+2];
}
console.log(divs[0])
