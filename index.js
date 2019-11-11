// Import stylesheets
import './style.css';

const blogs = [
  {header: "The Begining",
  image : "url",
  description: "loreum",
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

const appDiv = document.getElementById('blog');

const divs = [];
blogs.forEach((blog, index) => {
    divs.push( 
      "<div classname='blog'>" +
      "<span>header:"  +
           blog.header +
      "</span>"+
      "</div>" )
  });
console.log(divs)
