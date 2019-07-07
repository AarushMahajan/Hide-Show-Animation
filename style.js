$(function() {

$(window).scroll(function(){

var s=$(window).scrollTop();

if(s>=100){

$(".f2").show(2000).fadeIn(2000);
}
else{
  $(".f2").hide(2000);
}
if(s>=550){

$(".f3").show(2000).fadeIn(2000);
}
else{
  $(".f3").hide(2000);
}
if(s>=1000){

$(".f4").show(2000).fadeIn(2000);
}
else{
  $(".f4").hide(2000);
}
if(s>=1500){

$(".f5").show(2000).fadeIn(2000);
}
else{
  $(".f5").hide(2000);
}
if(s>=2000){

$(".f6").show(1900).fadeIn(2000);
}
else{
  $(".f6").hide(2000);
}


})


})