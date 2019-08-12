// Inicia tabs
$(document).ready(function () {
    $('ul.tabs').tabs({
        swipeable: true
    });
});


// Inicializa - navbar
$(".button-collapse").sideNav({
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens,
});

// scroll
var $doc = $('html, body');
$('.menu-item > a').click(function () {
    $doc.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    $('.button-collapse').sideNav('hide');
    return false;
});

// Paralax
function scrollBanner() {
    var scrollPos;
    var headerText = document.querySelector('#header-content');
    var logoPrincipal = document.querySelector('.brand-logo > img');

    scrollPos = window.scrollY;

    if (scrollPos <= 600) {
        headerText.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
        headerText.style.opacity = 1 - (scrollPos / 600);
        logoPrincipal.style.width = 100 - (scrollPos / 12) + '%';
    } else {
        logoPrincipal.style.width = 50 + '%';
    }
}

window.addEventListener('scroll', scrollBanner);

$(document).ready(function () {
    $('.collapsible').collapsible();
});

// inicializa o select
$(document).ready(function () {
    $('select').material_select();
});

// inicializa modais
$(document).ready(function () {
    $('.modal').modal();
});

// Pegando o height dinâmicamente

function atualizaTop() {

    let headerContentHeight = $(".bg-video").outerHeight();
    let sobreHeight = $("#sobre").outerHeight();
    let jogosHeight = $("#jogos").outerHeight();
    console.log(jogosHeight);
    
    
    let classificacaoHeight = $("#classificacao").outerHeight();
    let inscricaoHeight = $("#inscricao").outerHeight();

    $("#sobre").css({ top: headerContentHeight + "px" });
    $("#jogos").css({ top: (headerContentHeight + sobreHeight) + "px" });
    $("#classificacao").css({ top: (headerContentHeight + sobreHeight + jogosHeight) + "px" });
    $("#inscricao").css({ top: (headerContentHeight + sobreHeight + jogosHeight + classificacaoHeight) + "px" });

}

atualizaTop();

$(window).resize(function () {
    atualizaTop();
});


