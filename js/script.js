$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });

 /******* start writer *********/


// put the content in vars
let name = 'mohamed abd el-fattah'
let title = 'front end developer'

// get the span of the typer
let my_name = document.getElementById('name');
let my_title = document.getElementById('title');

let x=0;
let y=0;

let type_name = setInterval(() => {

  if ( x <= name.length-1){
    my_name.textContent+= name[x];
    x+=1
  }else{
    my_name.textContent= ""
    if(x>name.length-1 && y<=title.length-1){
      my_title.textContent+= title[y];
      y+=1
    }else{
      my_title.textContent=""
      x=0;
      y=0;
    }
  }

}, 100);


 /******* end writer *********/
