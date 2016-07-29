/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map