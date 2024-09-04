// nav
$('li.main-menu').mouseenter(function () {
    $(this).find('ul.sub-menu').stop().slideDown()
})
$('li.main-menu').mouseleave(function () {
    $(this).find('ul.sub-menu').stop().slideUp()
})

// main-slide
setInterval(function () {
    $('.main-wrap').stop().animate({ 'top': '-100%' }, function () {
        $('.slide:first').stop().appendTo('.main-wrap')
        $('.main-wrap').css({ 'top': '0%' })
    })
}, 10000)


// video-slide
setInterval(function () {
    $('.video-wrap').stop().animate({ 'left': '-100%' }, function () {
        $('.video-slide:first').stop().appendTo('.video-wrap')
        $('.video-wrap').css({ 'left': '0%' })
    })
}, 10000)

// col-fadein
let idx = 0;

/*
변수는 const value, var value, let value 으로 선언한다
함수는 function value(){} 으로 선언한다
*/

function nav_class(){
    $(".slide_nav span").removeClass("on");
    $(".slide_nav span").eq(idx).addClass("on");
}


$('.col-slide').eq(0).siblings().hide()
setInterval(function () {
    idx++;
    if (idx === 3) {
        idx = 0;
    }
    $('.col-slide').hide()
    $('.col-slide').eq(idx).show()
    nav_class();
}, 10000)


$(".slide_nav span").click(function(){
    idx = $(this).index()-1;
    nav_class();
})

$(".prev").click(function () {
    idx -= 1;
    if(idx < 0){
        idx = 2;
    }
    nav_class();
})
$(".next").click(function () {
    idx += 1;
    if(idx > 2){
       idx = 0; 
    }
    nav_class();
})


// tab
$('.tab-menu li a').click(function(e){
    e.preventDefault()
    $('.tab-menu li').removeClass('on')
    $(this).parent('li').addClass('on')

    let idx=$(this).parent('li').index()
    $('.tab').hide()
    $('.tab').eq(idx).show()})

    $('.sect4 .gallery > li').mouseenter(function(){
        $('.sect4 .gallery > li').removeClass('on')
        $(this).addClass('on')
    })