$(document).ready(function () {
  $(".open-button").on('click', openCode);
  $(".rotator").on('click', rotate);
  $(".trigger").on('click', openSideBar);

 function album() {
      var albums =  $('.album');
      var left = 0;
      for (var i = 0; i < albums.length; i++) {
        let target = albums[i];
        $(target).css({"left":`${left}px`});
      left += 60
    }
  }

 function changeImage(){
  let front = $('.image-front');
  let back = $('.image-back');
  $(".flipper").addClass("flip-board")
  const images = ["http://iresq.com/apple-repair-news/wp-content/uploads/nobody-said-mountain-climbing-is-easy-but-an-ipad-can-make-it-less-daunt_276_584133_0_14099326_300.jpg", "http://static.boredpanda.com/blog/wp-content/uploads/2015/12/funny-animal-pictures-comedy-wildlife-photography-awards-thumb.jpg","http://www.cutestpaw.com/wp-content/uploads/2016/02/s-whenever-i-saw-this-picturei-fell-in-love-with-it..jpg", "http://static.boredpanda.com/blog/wp-content/uploads/2015/11/perfect-kingfisher-dive-photo-wildlife-photography-alan-mcfayden-thumb.jpg", "http://static.boredpanda.com/blog/wp-content/uploads/2015/11/self-portrait-photography-landscape-surreal-arno-rafael-minkkinen-thumb1.jpg", "http://www.importrottweilers.com/images/puppies/sunni_lord/sunni_lord_large_06.jpg"]
  // const images = ["red", "yellow"]
  let count = 2
    front.css({"background":`url(${images[0]})`});
    back.css({"background":`url(${images[1]})`});
    count += 1;
    setInterval( () => {
      back.css({"background":`url(${images[count & (images.length - 1)]})`});
      count += 1;
    front.css({"background":`url(${images[count & (images.length - 1)]})`});
      count += 1;
    }, 4000);
  }
  changeImage();


  function openCode(){
    let id = this.id;
    let text = this.id + "-text";
    let classFind = "." + id + "-ex";
   $(classFind).css({"height": "1500px"});
   $("."+ text).html("Collapse").css({"left": "22%"});
   $('#'+ id).on('click', collapseCode);
 }

  function collapseCode(){
    let id = this.id;
    let text = this.id + "-text";
    let classFind = "." + id + "-ex";
     $(classFind).css({"height": "0px"});
    $("."+ text).html("View Code").css({"left": "16%"});
   $('#'+ id).on('click', openCode);
  }



function rotate(){
  $(".rotator").removeClass("rotate-back").addClass("start-rotate").html("Collapse").css({"width":"200px"});
  $(".description-filler").css({"width": "0%"});
  $(".the-text").css({"width": "100%"});
  $(".rotator").on('click', straighten);
}

function straighten(){
  $(".rotator").removeClass("start-rotate").addClass("rotate-back").html("Site&nbsp;Description").css({"width":"250px"});
  $(".description-filler").css({"width": "100%"});
  $(".the-text").css({"width": "0%"});
  $(".rotator").on('click', rotate);
}

function openSideBar (){
   $(".sidebar-content").css({"width":"250px"});
   $(".sidebar").css({"width":"340px"});
   $(".trigger").on('click', closeSideBar);
}

function closeSideBar(){
  $(".sidebar-content").css({"width":"0px"});
    $(".sidebar").css({"width":"95px"});
    $(".trigger").on('click', openSideBar);
}


  album()

})
