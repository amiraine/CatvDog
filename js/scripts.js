//Create clickable buttons on site which prepend prewritten cat and dog sounds.
$(document).ready(function() {
  $("button#Dogs").click(function() {
    $("ul#left").append("<li>"+dogSound+"</li>");
    });

  $("button#Cats").click(function() {
    $("ul#right").append("<li>" +catSound+"</li>");
  });
  //Create arrays for dog and cat sounds to be randomized
  var dogArray = [
    "Bark!", "Woof!", "Arf!", "Grrr!"
  ];
  var catArray = [
    "Meow!", "Mew!", "Purr!", "Hiss!"
  ];
  var dogSound = dogArray[
    Math.floor(Math.random()*dogArray.length)];
  var catSound = catArray[
    Math.floor(Math.random()*catArray.length)
  ];
  $("button#omd").click(function() {
    $("ul#dogarmy").append("<li>"+"<img src='img/omd.png' class ='doggo'"+"</li>")});
    $("ul#dogarmy").click(function() {
      $(this).remove();
    });
});
