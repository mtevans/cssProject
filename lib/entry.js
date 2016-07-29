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

 function changeImage(){
  let front = $('.front');
  let back = $('.back');
  const images = ["https://i.ytimg.com/vi/KXdUNp_9oHs/hqdefault.jpg", "http://mediad.publicbroadcasting.net/p/kalw/files/styles/medium/public/201601/Nature-Brain.jpg","http://change.news/wp-content/uploads/2015/08/Green-Nature-Trees-l.jpg", "http://wallpaperspocket.com/wp-content/uploads/2014/10/8589130440255-green-nature-wallpaper-hd.jpg", "http://static.boredpanda.com/blog/wp-content/uploads/2014/09/nature-reclaiming-abandoned-places-19.jpg", "http://www.designsnext.com/wp-content/uploads/2013/12/Beautiful-Nature.jpg"]
  let count = 0
    front.css({"background":`url(${images[count & (images.length - 1)]})`})
    setInterval( () => {
      back.css({"background":`url(${images[count & (images.length - 1)]})`})
      count += 1
    front.css({"background":`url(${images[count & (images.length - 1)]})`})
      count += 1
    }, 4000)
  }

$(".open-button").on('click', openCode)

  function openCode(){
    let id = this.id;
    let text = this.id + "-text"
    let classFind = "." + id + "-ex";
   $(classFind).css({"height": "1500px"});
   $("."+ text).html("Collapse").css({"left": "22%"})
   $('#'+ id).on('click', collapseCode);
 }

  function collapseCode(){
    let id = this.id;
    let text = this.id + "-text"
    let classFind = "." + id + "-ex";
     $(classFind).css({"height": "0px"});
    $("."+ text).html("View Code").css({"left": "16%"});
   $('#'+ id).on('click', openCode);
  }

  changeImage()
  album()

})
