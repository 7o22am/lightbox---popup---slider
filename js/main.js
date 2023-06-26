var imageList = Array.from(document.getElementsByClassName("item-img"));
var showItem = document.querySelector('.show');
var showImage = document.querySelector('.showItem');
var prvBtn =document.getElementById('prv');
var nextBtn =document.getElementById('next');
var closeBtn =document.getElementById('close');

var index = 0;


for (let i = 0; i < imageList.length; i++) {
    imageList[i].addEventListener('click', function (e) {
        index = imageList.indexOf(e.target);
        console.log( imageList ,e.target)
        console.log( index)
        var imgSrc = e.target.getAttribute('src');
        showItem.classList.replace('d-none', 'd-flex');
        showImage.style.backgroundImage = `url(${imgSrc})`;
 
    })
}


function nextSlied() {
    index++;
    index = index % imageList.length
    var imgSrc = imageList[index].getAttribute('src');
    showImage.style.backgroundImage = `url(${imgSrc})`;
}
function prvSlied() {
    index--;
    if (index < 0) index = 0;
    var imgSrc = imageList[index].getAttribute('src');
    showImage.style.backgroundImage = `url(${imgSrc})`;
}



function closeSlide(){
    showItem.classList.replace(  'd-flex' , 'd-none');
}

prvBtn.addEventListener('click' ,prvSlied );
nextBtn.addEventListener('click' ,nextSlied );
closeBtn.addEventListener('click' ,closeSlide );