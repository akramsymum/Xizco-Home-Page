$('document').ready(function () {

    //====  Navbar JS =====
    $(window).scroll(function () {

        var scrollamount = $(window).scrollTop();
        if (scrollamount > 165) {
            $('.navbar').addClass('sticky_nav');
        } else {
            $('.navbar').removeClass('sticky_nav');
        }
    });

    $('.nav-item').on('click', function () {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.nav_search').on('click', function () {
        $('.nav_search_bar').toggleClass('active');
        $('.menubar').toggleClass('active');
    });


    //==== SLIDER JS =====
    $('.slider_active').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    });

    //==== CLIENT SLIDER JS =====
    $('.client_slider').slick({
        vertical: true,
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 2,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });


    //==== ISOTOP JS =====
    var $grid = $('.work_wrap').isotope({
        itemSelector: '.single_work',
        layoutMode: 'fitRows'
    });
    // isotop filter items on button click
    $('.button_group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
    
    //==== ISOTOP BUTTON JS =====
    $('.work_button').on('click', function () {
        $('.work_button').removeClass('active');
        $(this).addClass('active');
    });
    $('#business').on('click', function () {
        $('.business').attr('data-gall', 'gallery01');
    });
    $('#finance').on('click', function () {
        $('.finance').attr('data-gall', 'gallery02');
    });
    $('#design').on('click', function () {
        $('.design').attr('data-gall', 'gallery03');
    });
    $('#develop').on('click', function () {
        $('.develop').attr('data-gall', 'gallery04');
    });
    $('#digital').on('click', function () {
        $('.digital').attr('data-gall', 'gallery05');
    });
    

    //==== VENOBOX JS  =====
    $('.venobox').venobox({
        framewidth: '500px',
        frameheight: '450px',
        spinner: "three-bounce",
        spinColor: '#58a7d8',
        share: ['facebook', 'twitter', 'linkedin', 'pinterest', 'download']
    });
    //=== FOOTER VENO  ====
    $('.flickers').venobox({
        framewidth: '350px',
        frameheight: '350px',
        spinner: "three-bounce",
        spinColor: '#58a7d8',
        share: ['facebook', 'twitter', 'linkedin', 'pinterest', 'download']
    });


    //==== COUNTERUP JS  =====
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });


    //==== WOW JS  =====
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();


    //==== SMOOTH-SCROLL JS  =====
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 250
    });
});
