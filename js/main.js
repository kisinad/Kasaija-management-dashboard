$(document).ready(function() {
    $("#reg").click(function(e) {
        e.preventDefault();
        $(".content").load("registration_form.html"); //loads the registration form in dashboard
    });
    $("#tentReg").click(function(e) {
        e.preventDefault();
        $(".content").load("tenant_registration.html"); //loads the tenant registration page in dashboard
    });
    $("#tentlist").click(function(e) {
        e.preventDefault();
        $(".content").load("tenant_list.html"); //loads tenant list page in dashboard
    });
    $("#tenantPayment").click(function(e) {
        e.preventDefault();
        $(".content").load("payment.html");
    });
    $("#tenant_calender").click(function(e) {
        e.preventDefault();
        $(".content").load("payment_calendar.html");
    });
    $("#newPayment").click(function(e) {
      e.preventDefault();
      $(".content").load("payment_status.html");
    });
});