(function() {
  var app = angular.module('storyApp', []);
  
  app.controller('StoryController',function(){
    this.story = [
        {
          title: 'Together again',
          text: 'Someday ....',
          num: 4,
          like: 10
        },
        
        {
          title: 'Illusion of a soul',
          text: 'One day in.',
          num: 2,
          like: 2
        },
        {
          title: 'Men and Women',
          text: 'Once there was a girl.',
          num: 3,
          like: 5
        }
        
      ]
      
      this.addLike= function(story){
        story.like +=1;
      }
      
        this.showForm = function(num){
            return this.showBol === num;
        };
        this.setForm = function(num){
            this.showBol = num;
        };      
  });
  app.controller('formController',function(){
        this.textAdd = '';
        this.showBol = 0;
        
        this.addText = function(story){
          story.text += " " + this.textAdd;
          this.textAdd = " "
        };
        
  });
  app.controller('dataController',function($scope){
        this.inject = function(storyCtrl){
          Parse.initialize("j6hmZIae3pafDLIjDGpCntLonB075YYEr7s7dht0", "icc9F3VUzoYqwyZjp8FArXzMQZnO6IiCfDxhD1Iy");
          var StoryObj = Parse.Object.extend("StoryObj");
          var query = new Parse.Query(StoryObj);
          //storyCtrl.story.length = 5;
          query.greaterThan("likes", 0);
          query.find({
            success: function(results) {
              // Do something with the returned Parse.Object values
              for (var i = 0; i < results.length; i++) { 
                var object = results[i];
                storyCtrl.story[i].title = object.get('title');
                storyCtrl.story[i].text = object.get('text');
                storyCtrl.story[i].num = object.get('num');
                storyCtrl.story[i].like = object.get('likes');                
                console.log(storyCtrl.story);
                $scope.$apply()
              }
            },
            error: function(error) {
              alert("Error: " + error.code + " " + error.message);
            }
          });
          };    
          this.updateParse = function(storyCtrl){
            alert('dsf');
            Parse.initialize("j6hmZIae3pafDLIjDGpCntLonB075YYEr7s7dht0", "icc9F3VUzoYqwyZjp8FArXzMQZnO6IiCfDxhD1Iy");
            var StoryObj = Parse.Object.extend("StoryObj");
            var query = new Parse.Query(StoryObj);
            //storyCtrl.story.length = 5;
            query.greaterThan("likes", 0);
            query.find({
              success: function(results) {
                // Do something with the returned Parse.Object values
                for (var i = 0; i < results.length; i++) { 
                  var object = results[i];
                  object.set('title',storyCtrl.story[i].title);
                  object.set('text',storyCtrl.story[i].text);
                  object.set('num',storyCtrl.story[i].num);                 
                  object.set('likes',storyCtrl.story[i].like);   
                  object.save();
                  $scope.$apply()
                }
              },
              error: function(error) {
                alert("Error: " + error.code + " " + error.message);
              }
            });
          };
  });
})();
