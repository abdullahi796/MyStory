(function() {
  var app = angular.module('SignIn', []);
  app.controller('SignInController',function(){
    this.username = "";
    this.password = "";
    this.signIn = function(){
        Parse.initialize("j44HMde83dIGkvxlBPy78YD3wWwnuikdrDaO19VV", "ac1ol1aNi7bxuo0plV5ai2k4SxhViiukDTFEQZ9M");
        Parse.User.logIn(this.username, this.password, {
          success: function(user) {
            alert("wooow");
            window.location.href = "https://game-abdullahi11-1.c9.io/index.html";
          },
          error: function(user, error) {
            alert(error);
            // The login failed. Check error to see why.
          }
        });
    };
  });
})();
