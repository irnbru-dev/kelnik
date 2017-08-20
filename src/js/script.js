// Email validation
$(document).ready(function(){
  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

  
  $("#mail").change(function(){
    var r=$("#mail").val();
    var message = document.getElementById("message");

    if (!reg.test(r)) {
      $("#mail").css("backgroundColor", "#ff5e42");
      message.innerHTML = "email введен неверно"
    } else {
      $("#mail").css("backgroundColor", "white");
      message.innerHTML = ""
    }
  });
});/*end ready*/

// Scroll to top
$(function() {

  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
 
  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });
});


// Change text field in card
$(".card").hover(

    function(){
      var $switchField = $(this).find(".occupancy");

      $switchField.text('+ Добавить в магазин').css("color","#ff5e42");
    }, 

    function(){
      $switchField.text('Выполнен на 60%').css("color","#2a2a2a");
});

