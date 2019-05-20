
menuBtn = document.getElementsByClassName('toggle');
closeBtn = document.getElementById('closetoggle');

function openSideMenu(e) {
    document.getElementById('sidemenu').style.width = '30rem';
}

function closeSideMenu(e) {
    document.getElementById('sidemenu').style.width = '0';
}

menuBtn[0].addEventListener('click',openSideMenu );
closeBtn.addEventListener('click', closeSideMenu );

