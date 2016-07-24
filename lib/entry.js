$(document).ready(function () {

 function album() {
      var albums =  $('.album');
      var left = 0
      let color = ["red", "green", "yellow", "purple"];
      for (var i = 0; i < albums.length; i++) {
        let target = albums[i]
        $(target).css({"left":`${left}px`})
      left += 60
    }
 }
album()

})
