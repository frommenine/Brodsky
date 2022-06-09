var  slideIndex = 1;
showSlides(slideIndex)

function plusSlide(){
    slideIndex = slideIndex +1;
    showSlides(slideIndex);
}

function minusSlide(){
    slideIndex = slideIndex -1;
    showSlides(slideIndex);
}

function curentSlide(n){
    slideIndex = n;
    showSlides(slideIndex);
}


function showSlides(n){
    var slides =document.getElementsByClassName('item');
    var dots = document.getElementsByTagName('slider-dots_item')
    if(n>slides.length){
        slideIndex = 1;
    }

    if(n<1){
        slideIndex = slides.length;
    }
 
    for(var i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    for(var i =0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
