// $(document).ready(function() {
//   $(".content").hide();
//   $(".accordion").click(function() {
//     $(".content").show("slow", function() {
//     });
//   });
// });
$(document).ready(function($) {
   $('#center').find('.accordion','.content').click(function(){

     //Expand or collapse this panel
     $(this).next().slideToggle('slow');

     //Hide the other panels
     $(".content").not($(this).next()).slideUp('slow');

   });
 });
