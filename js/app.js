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
    this.showBol = false;
    this.titleAdd = '';
    this.textAdd = '';
    this.showCreate = function(){
      if(this.showBol === false){
        this.showBol = true;
      }
      else{
        this.showBol = false;
      }
    }
        this.inject = function(storyCtrl,action){
          Parse.initialize("j6hmZIae3pafDLIjDGpCntLonB075YYEr7s7dht0", "icc9F3VUzoYqwyZjp8FArXzMQZnO6IiCfDxhD1Iy");
          var StoryObj = Parse.Object.extend("StoryObj");
          var query = new Parse.Query(StoryObj);
          //storyCtrl.story.length = 5;
          query.greaterThan("likes", 0);
          query.find({
            success: function(results) {
              if(action==='show'){
              // Do something with the returned Parse.Object values
              for (var i = 0; i < results.length; i++) { 
                var object = results[i];
                if(i===0){
                  storyCtrl.story = [ ];
                }
                var parseObj = {
                  title: object.get('title'),
                  text: object.get('text'),
                  num: object.get('num'),
                  like: object.get('likes')
                };
                /*
                storyCtrl.story[i].title = object.get('title');
                storyCtrl.story[i].text = object.get('text');
                storyCtrl.story[i].num = object.get('num');
                storyCtrl.story[i].like = object.get('likes');   
                */
                storyCtrl.story.push(parseObj);
                console.log(storyCtrl.story);
                $scope.$apply()
              }
              }
              
              else if(action==='update'){
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
              }
              else if(action==='create'){
                  Parse.initialize("j6hmZIae3pafDLIjDGpCntLonB075YYEr7s7dht0", "icc9F3VUzoYqwyZjp8FArXzMQZnO6IiCfDxhD1Iy");
                  var StoryObj = Parse.Object.extend("StoryObj");
                  var storyObj = new StoryObj();
                   
                  storyObj.set("title",this.titleAdd);
                  storyObj.set("text",this.textAdd);
                  storyObj.set("num", 0);
                  storyObj.set("likes", 0);
                  this.showBol = false;
                  $scope.$apply()
                  gameScore.save(null, {
                    success: function(gameScore) {
                      // Execute any logic that should take place after the object is saved.
                      alert('New object created with objectId: ' + gameScore.id);
                    },
                    error: function(gameScore, error) {
                      // Execute any logic that should take place if the save fails.
                      // error is a Parse.Error with an error code and message.
                      alert('Failed to create new object, with error code: ' + error.message);
                    }
                  });                
              }
            },
            error: function(error) {
              alert("Error: " + error.code + " " + error.message);
            }
          });
          };    
          this.updateParse = function(storyCtrl){

          };
  });
})();