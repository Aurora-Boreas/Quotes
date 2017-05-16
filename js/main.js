jQuery(document).ready(function() {
    $('.mainSlider').bxSlider({
        speed: 300,
        pagerCustom: '#mainSliderThumbs',
        controls: false,
        mode: "fade",
        auto: false,
        pause: 6000,
        autoHover: true,
        onSlideAfter: function($slideElement, oldIndex, newIndex){
            $slideElement.siblings('.active').removeClass('active');
            $slideElement.addClass('active');
        },
        onSliderLoad: function(currentIndex){
            $('.mainSlider').removeClass('hideIt').children('li').eq(currentIndex).addClass('active');
            smooveInit();
        }
    });

    function smooveInit() {
            $(".appearence_from_bottom").smoove({
                offset: '15%',
                opacity: 0,
                moveY: "30px"
            });

            $(".slider_item").smoove({
                offset: '35%',
                opacity: 0,
                scale: 0.8
            });

            $(".reasons-item").smoove({
                offset: '15%',
                opacity: 0,
                perspective: 1000,
                rotateX: "25deg",
                moveZ: "-100px",
                speed: 0.4
            });

            $(".buy__item").smoove({
                offset: '50%',
                opacity: 0,
                scale: 0.95
            });
     }
});