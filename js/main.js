(function ($) {
    "use strict";
    $(window).on("load", function () {
        $("#status").fadeOut();
        $("#preloader").delay(500).fadeOut("slow");
    });

    function onScrollInit(items, trigger) {
        items.each(function () {
            var osElement = $(this), osAnimationClass = osElement.attr('data-os-animation'),
                osAnimationDelay = osElement.attr('data-os-animation-delay');
            osElement.css({
                '-webkit-animation-delay': osAnimationDelay,
                '-moz-animation-delay': osAnimationDelay,
                'animation-delay': osAnimationDelay
            });
            var osTrigger = (trigger) ? trigger : osElement;
            osTrigger.waypoint(function () {
                osElement.addClass('animated').addClass(osAnimationClass);
            }, {triggerOnce: true, offset: '90%'});
        });
    }

    onScrollInit($('.os-animation'));
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container'));
    $(function () {
        smoothScroll.init({
            selector: '[data-scroll]',
            selectorHeader: '[data-scroll-header]',
            speed: 500,
            easing: 'easeInOutCubic',
            updateURL: true,
            offset: 0,
            callback: function (toggle, anchor) {
            }
        });
        var bodyEl = document.body, content = document.querySelector('.content-wrap'),
            openbtn = document.getElementById('open-button'), closebtn = document.getElementById('close-button'),
            isOpen = false;

        function inits() {
            initEvents();
        }

        function initEvents() {
            openbtn.addEventListener('click', toggleMenu);
            if (closebtn) {
                closebtn.addEventListener('click', toggleMenu);
            }
            content.addEventListener('click', function (ev) {
                var target = ev.target;
                if (isOpen && target !== openbtn) {
                    toggleMenu();
                }
            });
        }

        function toggleMenu() {
            if (isOpen) {
                classie.remove(bodyEl, 'show-menu');
            } else {
                classie.add(bodyEl, 'show-menu');
            }
            isOpen = !isOpen;
        }

        inits();
        $(".typed").typed({
            strings: ["Java Developer", "Web Developer", "Web Designer","Full Stack Software Engineer"],
            typeSpeed: 200,
            backDelay: 900,
            loop: true
        });
        $('.enlarge').magnificPopup({type: 'image', gallery: {enabled: true}});
        $('input').blur(function () {
            if ($(this).val()) $(this).addClass('used'); else $(this).removeClass('used');
        });
        jQuery('.skillbar').each(function () {
            jQuery(this).appear(function () {
                jQuery(this).find('.count-bar').animate({width: jQuery(this).attr('data-percent')}, 2000);
                var percent = jQuery(this).attr('data-percent');
                jQuery(this).find('.count').html('<span>' + percent + '</span>');
            });
        });
        $('.reviews').owlCarousel({
            dots: true,
            loop: true,
            items: 1,
            smartSpeed: 1000,
            fluidSpeed: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true
        });
    });

    function onScroll(event) {
        var scrollPosition = $(document).scrollTop();
        $('.menu-list a').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                $('.menu-list a').removeClass("active");
                currentLink.addClass("active");
            } else {
                currentLink.removeClass("active");
            }
        });
    }
})(jQuery);