 
  Template.textDoge.doges = function () {
    return Doges.find();
  };

  Template.textDoge.rand = function () {
    return Math.floor(Math.random() * 90);
  };

  Template.textDoge.sizeRand = function () {
    return Math.floor(Math.random() * 50)+20;
  };

  Template.textDoge.randColor = function () {
  	var R = Math.floor(Math.random() * 255);
  	var G = Math.floor(Math.random() * 255);
  	var B = Math.floor(Math.random() * 255);
    return "rgb("+R+","+G+","+B+")";
  };


  Template.navDoge.events = {
    'click .btn': function () {
      var newText = $(".form-control").val();
      if(newText.length>4){
      	$(".form-control").val("");
      	Doges.insert({text: newText});
      }
    }
  };