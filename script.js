
//navigation bar

window.addEventListener("scroll", function(){
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//Scroll from nav bar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});
//scroll from logo
document.getElementById('logo').addEventListener('click', function() {
  // Scroll to the about section
  document.getElementById('banner').scrollIntoView({ behavior: 'smooth' });
});

//this is the scrolling animation 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show'); 
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElementsRight = document.querySelectorAll('.hiddenRight');
hiddenElementsRight.forEach((el) => observer.observe(el));


//this is for hover effect 
// const enhance = id => {
//     const element = document.getElementById(id),
//           text = element.innerText.split("");
   
//     element.innerText = "";
    
//     text.forEach(letter => {
//       const span = document.createElement("span");
      
//       span.className = "letter";
      
//       span.innerText = letter;
      
//       element.appendChild(span);
//     })
//   }
  
// enhance("hoverEffect");

const elements = document.querySelectorAll(".hoverEffect");

elements.forEach(element => {
  const text = element.innerText.split("");
  element.innerText = "";

  text.forEach(letter => {
    const span = document.createElement("span");
    span.className = "letter";
    span.innerText = letter;
    element.appendChild(span);
  });
});


//Hacker effect on Hero
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 45);
}


//cursor effect
const coords = { x:0, y:0 };
const circles = document.querySelectorAll(".circle");

const colors = ["#14a2e9", "#00b2ee", "#00c1ef", "#00d0eb", "#00dde3", "#30ead9", "#68f5cd", "#93ffc2", "#48A9FE", "#0BEEF9"];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
  animateCircles();
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;
    
    const nextCircle = circles[index +1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y -y) * 0.3;
  });
  
  requesetAnimationFrame(animateCircles);
}


