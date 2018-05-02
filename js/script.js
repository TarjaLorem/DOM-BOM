var doFullpage = document.documentElement.clientWidth;

$(document).ready(function () {
    if (doFullpage > 480) {
        $('.fullpage').fullpage({
            verticalCentered: false,
            anchors: ['firstPage', 'secondPage', '3rdPage'],
            menu: '#main-menu',
            scrollingSpeed: 1000,
            responsiveWidth: 480,

        });
    };

    function show() {
        $(".main-title").click(function () {
            $(".container-task").show("slow");
        });
    };
    show();

    var defaultLanguage = 'ua';

    var getCurrentLanguage = function () {
        var val = localStorage.getItem('language'); // local storage value
        if (val) {
            return val;
        } else {
            return defaultLanguage;
        }
    };

    function changeLanguage(el) {
        localStorage.setItem("language", el.target.value); /// marking the required radio as checked
        changeDisplayLanguage();
    }

    function changeDisplayLanguage() {
        lang = getCurrentLanguage();
        elements = document.getElementsByClassName('lang');
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].classList.contains('lang-' + lang)) {
                elements[i].classList.add('visible');
            } else {
                elements[i].classList.remove('visible');
            }
        }
    };

    (function start() {
        changeDisplayLanguage();

        var radios = document.querySelectorAll('#languages input');
        if (radios) {
            for (var i = 0; i < radios.length; i++) {
                radios[i].addEventListener('change', changeLanguage);
                radios[0].checked = true;
            }
        }
    })();

    var $save = document.querySelector('#save')
    $save.addEventListener('click', changeLanguage); 

});
