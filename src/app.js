// const icon = document.getElementById("arrow-icon");

// icon.addEventListener("click", function() {
  // this.style.transform = "rotateX(180deg)";
// });

const component = document.getElementById('component'); 
const container = document.getElementById('container'); 

container.addEventListener('scroll', () => {
  if (container.scrollTop > 0) {
    component.style.display = 'block';
  } else {
    component.style.display = 'hidden';
  }
});
