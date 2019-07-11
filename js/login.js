$(document).ready(function(){
var obj = [
{
	userEmail:"admin@kmd.com",
	passWord: "admin"
}]
$('.btn').click(function(){
	const userEmail = $('.email').val();
	// const companyemail = $('#companyemail').val();
	const userPassword = $('.pass').val();
	
	if (userEmail == obj[0].userEmail &&  userPassword == obj[0].passWord){
		window.location.href="index_dashboard.html";
		// $('#Account_names').empty().append(obj[0].userName);
	};

});
	$('.main-header__heading .welcome').text(obj[0].userEmail);
});