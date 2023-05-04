function toggle(){
    let nav = document.getElementById('nav-screen');

    if(nav.classList.contains('open')){
        nav.classList.remove('open');
    }
    else{
        nav.classList.add('open');
    }
}

let sections = document.querySelectorAll("section[id]");

function scrollActive() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".nav a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);