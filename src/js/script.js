// $('.email').on('blur', function () {
//   var mail = $(this).val();
//   if (mail.length > 0
//   && (mail.match(/.+?\@.+/g) || []).length !== 1) {
//     document.querySelector(".myemail").style.border = '1px solid red;'
//   } else {
//     console.log('valid');
//     alert('Вы ввели корректный e-mail!');
//   }
// });



// var myEmail = $('.myemail').val();
// console.log($('.myemail').val())

// // function isEmail(email) {
// //   var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// //   return regex.test(email);
// // }

// function isValidEmailAddress(myEmail) {
//     var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     return pattern.test(myEmail);
// };

// if( !isValidEmailAddress( myEmail ) ) {

//     console.log('all fine')
//   } else {
//     console.log('you suck')
// }

// function ValidMail() {
//     var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
//     var myMail = document.getElementById('email').value;
//     var valid = re.test(myMail);

//     if (valid) output = 'Адрес эл. почты введен правильно!';
//     else output = 'Адрес электронной почты введен неправильно!';
//     document.getElementById('message').innerHTML = output;
//     return valid;
// }


$(document).ready(function(){
  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

  $("#f_mail").change(function(){
    var r=$("#f_mail").val();
    var message = document.getElementById('message');
    if (!reg.test(r)) {
      $("#f_mail").css("backgroundColor", "red");
      message.innerHTML = "email введен неверно"
    } else {
      document.getElementById('message').innerHTML = "email введен верно"
    }
  });
});/*end ready*/

