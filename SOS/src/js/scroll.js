$(document).ready(function() {

    $('.scrolldown').on('click', function() {
  
      //this scroll withour animations in chrome
      $('.gallery').get(0).scrollIntoView({
        block: "start",
        behavior: "smooth"
      })
  
    });
    $('.scrolldown2').on('click', function() {
  
      //this scroll withour animations in chrome
      $('.main').get(0).scrollIntoView({
        block: "start",
        behavior: "smooth"
      })
  
    });
    $('.scrolldown3').on('click', function() {
  
      //this scroll withour animations in chrome
      $('.gallery').get(0).scrollIntoView({
        block: "start",
        behavior: "smooth"
      })
  
    });
    $('.scrolldown4').on('click', function() {
  
      //this scroll withour animations in chrome
      $('.features').get(0).scrollIntoView({
        block: "start",
        behavior: "smooth"
      })
  
    });
    $('.scrolldown5').on('click', function() {
  
      //this scroll withour animations in chrome
      $('.requirements').get(0).scrollIntoView({
        block: "start",
        behavior: "smooth"
      })
  
    });
    $('.scrolldown6').on('click', function() {
  
      //this scroll withour animations in chrome
      $('.quotes').get(0).scrollIntoView({
        block: "start",
        behavior: "smooth"
      })
  
    });
})
