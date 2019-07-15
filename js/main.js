$(document).ready(function(){
   
   // $('#reg').load("registration_form.html");
   $("#reg").click(function(e){
   	 e.preventDefault();
   	 // let titles = $(".form-header").html()
   	 // $(".content h1").html(titles)
    $(".content").load("registration_form.html"); 
   
  });

  $("#tentReg").click(function(e){
   	 e.preventDefault();
   	 // let titles = $(".form-header").html()
   	 // $(".content h1").html(titles)
    $(".content").load("tenant_registration.html"); 
   
  });
    $("#tentlist").click(function(e){
   	 e.preventDefault();
   	 // let titles = $(".form-header").html()
   	 // $(".content h1").html(titles)
    $(".content").load("tenant_list.html"); 
   
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
