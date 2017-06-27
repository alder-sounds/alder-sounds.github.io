$(document).ready(function($) {
   $('#center').find('.accordion','.content').click(function(){
     //Expand or collapse this panel
     $(this).next().slideToggle('slow');
     //Hide the other panels
     $(".content").not($(this).next()).slideUp('slow');
   });
 });
