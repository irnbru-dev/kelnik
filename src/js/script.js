// Email validation
$(function(){
  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

  
  $("#mail").change(function(e){
    var r=$("#mail").val();
    var message = $("#message");

    if (!reg.test(r)) {
      $("#mail").css("backgroundColor", "#ff5e42");
      message.text("email введен неверно")
    } else {
      $("#mail").css("backgroundColor", "white");
      message.text("")
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
// $(function() {
//   $(".card").hover(

//     function(){
//       var $switchField = $(this).find(".occupancy");

//       $switchField.text('+Добавить в магазин').css("color","#ff5e42");
//     }, 

//     function(){
//       var $switchField = $(this).find(".occupancy");

//       $switchField.text('Выполнен на 60%').css("color","#b8b8b8");
//   });
// });


// Sort cards
$(function() {
  var $sort = $("#sort");

  $sort.on("click", function(e) {
    e.preventDefault();
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

    var sorting = function(arrDone) {
      $.each(arrDone, function (key, value) {
      $("#" + value[0]).detach().appendTo("#cards")
    })

    }
    if ($sort.hasClass("up")) {
      sorting(arrDone.reverse());
      $sort.removeClass("up").addClass("down");
    } else {
      sorting(arrDone);
      $sort.hasClass("down") ? $sort.removeClass("down").addClass("up") : $sort.addClass("down");
    }

    console.log(arrDone);
  })

});

