$(document).ready(function(){
   
   // $('#reg').load("registration_form.html");
   $("#reg").click(function(e){
   	 e.preventDefault();
   	 // let titles = $(".form-header").html()
   	 // $(".content h1").html(titles)
    $(".content").load("property_registration_form.html"); 
   
  });


// $('#menubar').attr('href').click(function(e){
//             e.preventDefault();
//             $('#userpersonal').load("http://localhost/user/web/personal/index");
//             });

// $(function(){
//     $("#reg li a").click(function(e){
//     	e.preventDefault(); //To prevent the default anchor tag behaviour
//         var url = this.href;
//         $(".main").load("registration_form.html");
//     });
// });

});
