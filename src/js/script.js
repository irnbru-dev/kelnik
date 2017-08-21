// Email validation
$(function(){
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
});

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

      $switchField.text('+Добавить в магазин').css("color","#ff5e42");
    }, 

    function(){
      var $switchField = $(this).find(".occupancy");

      $switchField.text('Выполнен на 60%').css("color","#b8b8b8");
});



$(function() {
  var arrDone = [];

  $(".occupancy").each(function() {
    var done = $(this).data("done");
    
    arrDone.push([$(this).parents(".card").attr("id"), done]);
  })

  for (var j = 0; j < arrDone.length; j++) {
          for (var i = 0; i < arrDone.length - j - 1; i++) {
              if (arrDone[i][1] > arrDone[i + 1][1]) {
                  var tmp = arrDone[i];
                  arrDone[i] = arrDone[i + 1];
                  arrDone[i + 1] = tmp;
              }
          }
      }

  $.each(arrDone, function (key, value) {
    $("#" + value[0]).detach().appendTo("#cards")
  })

  console.log(arrDone);
});


