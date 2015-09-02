$(document).on('ready',function(){
    $('ul.controls > li > a').on('click',function(event){
        $('ul.slides > li').removeClass('active');
        var slideId = $(this).attr('data-slide');
        $('#' + slideId).addClass('active');
        event.preventDefault();
    });
    $('ul.controls > li').on('click',function(){
        $('ul.controls > li').removeClass('activ');
        $(this).addClass('activ');
    });

    $('div#footer-tab > ul > li > a').on('click',function(event){
        $('div.footer-slide-1, div.footer-slide-2').removeClass('actfooter');
        var footerId = $(this).attr('data-footer-slide');
        $('.' + footerId).addClass('actfooter');
        event.preventDefault();
    });

    $('div#footer-tab > ul > li').on('click',function(){
        $('div#footer-tab > ul > li').removeClass('actfooter-bottom');
        $(this).addClass('actfooter-bottom');
    });
});
