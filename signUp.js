(function() {
  var app = angular.module('SignIn', []);
  app.controller('SignInController',function(){
    this.username = "";
    this.password = "";
    this.signIn = function(){
        Parse.initialize("j6hmZIae3pafDLIjDGpCntLonB075YYEr7s7dht0", "icc9F3VUzoYqwyZjp8FArXzMQZnO6IiCfDxhD1Iy");
        Parse.User.logIn(this.username, this.password, {
          success: function(user) {
            window.location.href = "https://game-abdullahi11-1.c9.io/index.html";
          },
          error: function(user, error) {
            // The login failed. Check error to see why.
          }
        });
    }
  });
})();
