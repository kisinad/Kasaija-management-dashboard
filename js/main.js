$(document).ready(function() {
    $("#reg").click(function(e) {
        e.preventDefault();
        $(".content").load("registration_form.html");
    });
    $("#tentReg").click(function(e) {
        e.preventDefault();
        $(".content").load("tenant_registration.html");
    });
    $("#tentlist").click(function(e) {
        e.preventDefault();
        $(".content").load("tenant_list.html");
    });
    $("#tenantPayment").click(function(e) {
        e.preventDefault();
        $(".content").load("payment.html");
    });
});