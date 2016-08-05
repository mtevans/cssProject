$(document).ready(function(){
  $(".open-button").on('click', openCode);
  $(".rotator").on('click', rotate);
  $(".trigger").on('click', openSideBar);

  var safari = false;

  function load(){
        var userAgent = navigator.userAgent.toLowerCase();

     if (userAgent.indexOf('safari')!=-1){
       if(userAgent.indexOf('chrome')  > -1){
        console.log("welcome chrome")
        safari = false
       }else{
        //browser is safari, add css
        console.log("welcome safari")
        $(".album").addClass("album-safari")
        $(".album").removeClass("album")
        safari = true
       }
      }
    }



  function album() {
      var albums =  $('.album')
    if(safari){
      albums = $('.album-safari')
    }

       var left = 0
       for (var i = 0; i < albums.length; i++) {
         var target = albums[i]
         $(target).css({"left":`${left}px`})
       left += 60
     }
   }

   function changeImage(){
    var front = $('.image-front')
    var back = $('.image-back')
    $(".flipper").addClass("flip-board")
    var images = ["http://iresq.com/apple-repair-news/wp-content/uploads/nobody-said-mountain-climbing-is-easy-but-an-ipad-can-make-it-less-daunt_276_584133_0_14099326_300.jpg", "http://static.boredpanda.com/blog/wp-content/uploads/2015/12/funny-animal-pictures-comedy-wildlife-photography-awards-thumb.jpg","http://www.cutestpaw.com/wp-content/uploads/2016/02/s-whenever-i-saw-this-picturei-fell-in-love-with-it..jpg", "http://static.boredpanda.com/blog/wp-content/uploads/2015/11/perfect-kingfisher-dive-photo-wildlife-photography-alan-mcfayden-thumb.jpg", "http://static.boredpanda.com/blog/wp-content/uploads/2015/11/self-portrait-photography-landscape-surreal-arno-rafael-minkkinen-thumb1.jpg", "http://www.importrottweilers.com/images/puppies/sunni_lord/sunni_lord_large_06.jpg"]
    var count = 2;
      front.css({"background":`url(${images[0]})`});
      back.css({"background":`url(${images[1]})`});
      count += 1;
      setInterval( function change(){
        $('.image-front').css({"background":`url(${images[count & (images.length - 1)]})`});
        count += 1;
      $('.image-back').css({"background":`url(${images[count & (images.length - 1)]})`});
        count += 1;
      }, 4000);
    }



    function openCode(){
      var id = this.id;
      var text = this.id + "-text"
      var classFind = "." + id + "-ex"
     $(classFind).css({"height": "1500px"})
     $("."+ text).html("Collapse")
     $("."+ text).css({"left": "22%"})
     $('#'+ id).on('click', collapseCode)
   }

    function collapseCode(){
      var id = this.id
      var text = this.id + "-text"
      var classFind = "." + id + "-ex"
       $(classFind).css({"height": "0px"})
      $("."+ text).html("View Code")
      $("."+ text).css({"left": "16%"})
     $('#'+ id).on('click', openCode)
    }

    function rotate(){
      $(".rotator").removeClass("rotate-back")
      $(".rotator").addClass("start-rotate")
      $(".rotator").removeClass("click-this")
      $(".shadow").removeClass("click-this")
      $(".rotator").html("Collapse")
      $(".rotator").css({"width":"200px"})
      $(".description-filler").css({"width": "0%"})
      $(".the-text").css({"width": "100%"})
      $(".shadow").css({"text-shadow": "0px 0px 0px transparent"})
      $(".rotator").on('click', straighten)
    }

    function straighten(){
      $(".rotator").removeClass("start-rotate")
      $(".rotator").addClass("rotate-back")
      $(".rotator").html("Site&nbsp;Description")
      $(".rotator").css({"width":"250px"})
      $(".description-filler").css({"width": "100%"})
      $(".the-text").css({"width": "0%"})
      $(".rotator").on('click', rotate)
    }
    function openSideBar (){
        $(".start-animation").removeClass("start-animation")
       $(".sidebar-content").css({"width":"250px"})
       $(".sidebar").css({"width":"340px"})
       $(".trigger").on('click', closeSideBar)
    }

    function closeSideBar(){
      $(".sidebar-content").css({"width":"0px"})
      $(".sidebar").css({"width":"95px"})
      $(".trigger").on('click', openSideBar)
    }


   load();
   changeImage();
   album();
})
