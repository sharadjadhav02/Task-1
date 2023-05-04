function toggle(){
    let nav = document.getElementById('nav-screen');

    if(nav.classList.contains('open')){
        nav.classList.remove('open');
    }
    else{
        nav.classList.add('open');
    }
}