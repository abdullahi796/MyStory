// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
    Parse.initialize("j6hmZIae3pafDLIjDGpCntLonB075YYEr7s7dht0", "icc9F3VUzoYqwyZjp8FArXzMQZnO6IiCfDxhD1Iy");
    var StoryObj = Parse.Object.extend("StoryObj");
    var query = new Parse.Query(StoryObj);
    //storyCtrl.story.length = 5;
    var objArr = [];
     query.greaterThan("likes", 0);
     query.find({
        success: function(results) {
            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) { 
            var object = results[i];
            var parseObj = {
            title: object.get('title'),
            text: object.get('text'),
            num: object.get('num'),
            like: object.get('likes')
            };
            objArr.push(parseObj);
        }
        response.success(objArr);
    },
    error: function(error) {
        alert("Error: " + error.code + " " + error.message);
    }
});
});
