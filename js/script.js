var scroll = window.scrollY;

document.addEventListener("DOMContentLoaded", function () {
    // Elementos a animar:
    var corazon = document.querySelector('.corazon');
    var primerTexto = document.querySelector('.section1 p');
    var icon1 = document.querySelector('.icon1');
    var icon2 = document.querySelector('.icon2');
    var icon3 = document.querySelector('.icon3');
    var icon4 = document.querySelector('.icon4');

    // Evento de desplazamiento
    window.addEventListener('scroll', function () {


        // Calcula el factor de escala en función del desplazamiento
        var scale = 2 - 0.01 * window.scrollY;
        var visibilityPercentage = 0.007 * window.scrollY;



        // Limita el factor del cambio
        scale = Math.max(1, scale);
        visibilityPercentage = Math.min(1, Math.max(0, visibilityPercentage));

        // Aplica transformaciones a los elemento
        corazon.style.transform = 'scale(' + scale + ')';
        primerTexto.style.opacity = visibilityPercentage;

        icon1.style.transform = 'translate3d(0,' + window.scrollY * -0.05 + 'px, 0)';
        icon2.style.transform = 'translate3d(0,' + window.scrollY * -0.2 + 'px, 0)';
        icon3.style.transform = 'translate3d(0,' + window.scrollY * -0.10 + 'px, 0)';
        icon4.style.transform = 'translate3d(0,' + window.scrollY * -0.15 + 'px, 0)';
    });
});

(function () {
    init();

    var g_containerInViewport;
    function init() {
        setStickyContainersSize();
        bindEvents();
    }

    function bindEvents() {
        window.addEventListener("wheel", wheelHandler);
    }

    function setStickyContainersSize() {
        document.querySelectorAll('.sticky-container').forEach(function (container) {
            const stikyContainerHeight = container.querySelector('main').scrollWidth;
            container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    }

    function wheelHandler(evt) {

        const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function (container) {
            return isElementInViewport(container);
        })[0];

        if (!containerInViewPort) {
            return;
        }

        var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
        var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
        let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

        if (g_canScrollHorizontally) {
            containerInViewPort.querySelector('main').scrollLeft += evt.deltaY;
        }
    }
})();

function cambiarImagen() {

    var imagen = document.getElementById('manos-game');
    var imagen1 = document.getElementById('pareja-chico');
    var imagen2 = document.getElementById('pareja-chica');
    var imagen3 = document.getElementById('regalo');
    var imagen4 = document.getElementById('room1');
    var imagen5 = document.getElementById('room2');
    var imagen6 = document.getElementById('mano');
    var imagen7 = document.getElementById('mano2');

    imagen1.src = 'src/boy.svg';
    imagen2.src = 'src/girl.svg';
    imagen3.src = 'src/c1-p4-celular.svg';
    imagen4.src = 'src/fondo-cuarto1.svg';
    imagen5.src = 'src/fondo-cuarto2.svg';
    imagen6.src = 'src/gifFull.gif';
    imagen7.src = 'src/1.gif';

    if (document.documentElement.clientWidth < 1025) {
        if (window.matchMedia("(orientation: portrait)").matches) {
            imagen1.src = 'src/ri-caso1-xs-p3-chico-silueta.svg';
            imagen2.src = 'src/ri-caso1-xs-p3-chica-silueta.svg';
            imagen3.src = 'src/telefono-xs-3.svg';
            imagen4.src = 'src/ri-caso1-xs-p5-fondo.png';
            imagen5.src = 'src/ri-caso1-xs-p5-sombra2.svg';
            imagen6.src = 'src/gifFull.gif';
            imagen7.src = 'src/Comp-1-xl.gif';
        }
    }

    if (document.documentElement.clientWidth < 550) {
        if (window.matchMedia("(orientation: portrait)").matches) {
            imagen6.src = 'src/mano6recorte.gif';
            imagen7.src = 'src/Comp-2.gif';
        }
    }

};
document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");
    if (index === 0) {
        prevButton.style.opacity = 0;
    }
    console.log(index)
    nextButton.addEventListener("click", (event) => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
        prevButton.style.opacity = 1;
        index++;
        console.log(index)
        if (index > 0) {
            prevButton.style.opacity = 1;
        }
        if (index >= 1) {
            nextButton.style.opacity = 0;
        }
    });
    prevButton.addEventListener("click", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
        
        index--;
        console.log(index)
        if (index === 0) {
            nextButton.style.opacity = 1;
        }
        if (index === 0) {
            prevButton.style.opacity = 0;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slidesContainer1 = document.getElementById("slides-container1");
    const slide1 = document.querySelector(".slide1");
    const prevButton1 = document.getElementById("slide-arrow-prev1");
    let index=0;
    const nextButton1 = document.getElementById("slide-arrow-next1");
    if (index === 0) {
        prevButton1.style.opacity = 0;
    }
    nextButton1.addEventListener("click", () => {
        const slideWidth1 = slide1.clientWidth;
        slidesContainer1.scrollLeft += slideWidth1;
        index++;
        if(index>0){
            prevButton1.style.opacity=1;
        }
        if(index>=6){
            nextButton1.style.opacity=0;
        }
    });

    prevButton1.addEventListener("click", () => {
        const slideWidth1 = slide1.clientWidth;
        slidesContainer1.scrollLeft -= slideWidth1;
        index--;
        console.log(index)
        if(index<6){
            nextButton1.style.opacity=1;
        }
        if(index===1){
            prevButton1.style.opacity=0;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slidesContainer2 = document.getElementById("slides-container2");
    const slide2 = document.querySelector(".slide2");
    const prevButton2 = document.getElementById("slide-arrow-prev2");
    const nextButton2 = document.getElementById("slide-arrow-next2");
    let index=0;
    if (index === 0) {
        prevButton2.style.opacity = 0;
    }
    nextButton2.addEventListener("click", (event) => {
        const slideWidth2 = slide2.clientWidth;
        slidesContainer2.scrollLeft += slideWidth2;
        index++;
        if(index>0){
            prevButton2.style.opacity=1;
        }
        if(index>=3){
            nextButton2.style.opacity=0;
        }
    });
    prevButton2.addEventListener("click", () => {
        const slideWidth2 = slide2.clientWidth;
        slidesContainer2.scrollLeft -= slideWidth2
        index--;
        console.log(index)
        if(index<3){
            nextButton2.style.opacity=1;
        }
        if(index===0){
            prevButton2.style.opacity=0;
        }
    });
});
