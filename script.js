document.addEventListener("DOMContentLoaded", function () {
    let backgrounds=document.querySelectorAll(".fading-images")
    let headings=document.querySelectorAll(".fading-heading")
    let imageIndex=0
    function changeBackground(){
      backgrounds[imageIndex].classList.remove("showing");
      headings[imageIndex].classList.remove("show");
      imageIndex++
      if(imageIndex>=backgrounds.length){
        imageIndex=0
      }
      backgrounds[imageIndex].classList.add("showing")
      headings[imageIndex].classList.add("show")
    }
    setInterval(changeBackground,3000)
    
  })
  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    navbar.classList.add("lazy-nav")
  } else {
    navbar.classList.remove("lazy-nav")
  }
});

  })
  
  document.addEventListener("DOMContentLoaded", function () {
    function callbackFunction(enteries){
        enteries.forEach(element => {
          if(element.isIntersecting){
            if(element.target.id==="lazy-1"){
              element.target.classList.add('lazy')
              
            }
            if(element.target.id==="lazy-2"){
              element.target.classList.add('lazy')
            }
            if(element.target.id==="lazy-3"){
              element.target.classList.add('lazy')
            }
            if(element.target.id==="lazy-4"){
              element.target.classList.add('lazyload')
            }
            if(element.target.id==="lazy-5"){
              element.target.classList.add('lazy')
            }
            if(element.target.id==="lazy-6"){
              element.target.classList.add('lazy')
              console.log(element.target.id)
            }
            if(element.target.id==="lazy-7"){
              element.target.classList.add('lazy')
            }
          }
        });
      }
      const options={
        rootMargin:"0px",
        threshold:0.1,
      } 
    const firstsection=document.getElementById("lazy-1")
    const secondsection=document.getElementById("lazy-2")
    const thirdsection=document.getElementById("lazy-3")
    const fourthsection=document.getElementById("lazy-4")
    const fifthsection=document.getElementById("lazy-5")
    const sixthsection=document.getElementById("lazy-6")
    const seventhsection=document.getElementById("lazy-7")
    const observer = new IntersectionObserver(callbackFunction,options)
    observer.observe(firstsection)
    observer.observe(secondsection)
    observer.observe(thirdsection)
    observer.observe(fourthsection)
    observer.observe(fifthsection)
    observer.observe(sixthsection)
    observer.observe(seventhsection)
  
   
  })


  document.addEventListener("DOMContentLoaded", function () {
    let lastScrollY = window.scrollY;
    let scroll=770
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('nav');
      
      if(window.scrollY>100){
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          navbar.classList.add('hidden');
        } else {
          // Scrolling up
          navbar.classList.remove('hidden');
        }
      }
      
      lastScrollY = window.screenY;
    });
  })