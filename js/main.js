
function FortuceMenuTurn(){

    "use-strict";

    let AvaiarMenu = document.querySelector('.shift');
    let section = document.querySelector('#FortuceMenu');

    AvaiarMenu.addEventListener('click', function(){

        AvaiarMenu.classList.toggle('active');
        section.classList.toggle('active');
    });
}

(function($){"use strict";FortuceMenuTurn();})(window.jQuery);
