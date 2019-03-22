// Kaydol - Şifre Unuttum Linkleri Arası Geçiş
$(document).ready(function() {
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
