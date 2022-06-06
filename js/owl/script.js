$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function abrir(){
    window.location.href = "trailer.html";
}

var menu = document.querySelector(".menu-mobile");
var content = document.getElementById("content");

menu.addEventListener("click", function(){
    document.querySelector(".content").classList.toggle("show-menu"); //toggle serve para adicionar uma classe se ela não exite\\
});

function fechar(){
    document.querySelector(".content").classList.toggle("show-menu",false); //caso o segundo parametro seja informado ''false'' vai forçar a retirada da classe\\

}