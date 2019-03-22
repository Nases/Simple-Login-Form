// Toggle between modals
$(document).ready(function() {
  $("#userRegister").modal("show");
  $(".registerLink").click(function(e) {
    $("#userLogin").modal("hide");
    $("#userRegister").modal("show");
  });

  $(".alreadyHaveAccountLink").click(function(e) {
    $("#userRegister").modal("hide");
    $("#forgotPassword").modal("hide");
    $("#userLogin").modal("show");
  });

  $(".forgotPasswordLink").click(function(e) {
    $("#userLogin").modal("hide");
    $("#forgotPassword").modal("show");
  });
});
