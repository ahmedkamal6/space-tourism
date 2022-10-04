$(function(){
    if($(window).width() <= 768 )
            $("br").hide();
    $(window).resize(function () { 
        if($(window).width() <= 768 )
            $("br").hide();
        else
            $("br").show();    
    });
    $(".burger").on('click', function () {
        $(".mobNav").slideToggle(500);
        if($(".burger img").attr("src") != "../assets/shared/icon-close.svg"){
            $(".burger img").attr("src", "../assets/shared/icon-close.svg");
        else
            $(".burger img").attr("src",  "../assets/shared/icon-hamburger.svg");
    });

    function executeIfMinWidth768 (e) {
        if (window.matchMedia('(min-width: 768px)').matches) {
          $(".mobNav").hide();
        }
      }
      
      // call initially
      executeIfMinWidth768();
      
      // add handler for resize
      window.addEventListener('resize', executeIfMinWidth768);
});
