$('.dropdown-toggle').click(function(e) {
  e.preventDefault()
  var menu = $(this).next()
  if(menu.is(":hidden")){
    $(this).addClass('active')
    menu.slideDown(250)
  }
  else{
    $(this).removeClass('active')
    menu.slideUp(250)
  }
});

$('.partners-carousel').owlCarousel({
    loop:true,
    margin: 15,
    nav:true,
    dots: false,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      992:{
          items:4
      },
      1200:{
          items:5
      }
    }
})