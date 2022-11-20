function loadJSON(){
  $.getJSON( "data.json?rand=" + Math.random() )
    .done(function( json ) {
      console.log( "GOT JSON Data: " );
      doJSON(json);

    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
  });
}

function getQuerystring() {
  var q = document.location.search;
  if (q!="") {
    $.each(document.location.search.substr(1).split('&'),function(c,q){
      var i = q.split('=');
      queries[i[0].toString()] = i[1].toString();
    });
  }

}

var qamodeToggle = false;
$.dragScroll = function(options) {
  var settings = $.extend({
    scrollVertical: true,
    scrollHorizontal: true,
    cursor: null
  }, options);

  var clicked = false,
    clickY, clickX;

  var getCursor = function() {
    if (settings.cursor) return settings.cursor;
    if (settings.scrollVertical && settings.scrollHorizontal) return 'url("https://www.google.com/intl/en_ALL/mapfiles/closedhand.cur"), all-scroll';
    if (settings.scrollVertical) return 'row-resize';
    if (settings.scrollHorizontal) return 'col-resize';
  }

  var updateScrollPos = function(e, el) {
    $('html').css('cursor', getCursor());
    var $el = $(el);
    settings.scrollVertical && $el.scrollTop($el.scrollTop() + (clickY - e.pageY));
    settings.scrollHorizontal && $el.scrollLeft($el.scrollLeft() + (clickX - e.pageX));
  }

  $(document).on({
    'mousemove': function(e) {
      clicked && updateScrollPos(e, this);
    },
    'mousedown': function(e) {
      clicked = true;
      clickY = e.pageY;
      clickX = e.pageX;
    },
    'mouseup': function() {
      clicked = false;
      if(qamodeToggle) {
        $('html').css('cursor', 'url("https://www.google.com/intl/en_ALL/mapfiles/openhand.cur"), all-scroll');
      }
      else {
        $('html').css('cursor', 'auto');
      }
    }
  });
}

function separateFrames() {
  //mainTimeline.restart();
  mainTimeline.pause();
  proofBanner();


  qamodeToggle = true;

  console.log( "QA mode on" );

  $('html').css('cursor', 'url("https://www.google.com/intl/en_ALL/mapfiles/openhand.cur"), all-scroll');


  $(".frame").addClass('qamode');
  $(".banner").addClass('qamode');   
  $(".previewbg").css('display','block');   

  $("#banner-border").addClass("noDisplay");
  $("g").each(function() {
    var tmp = $(this).attr("mask");
    $(this).removeAttr("mask");
    $(this).attr("data-mask", tmp);
  })
  $("body").css("overflow","visible");

  var i=0;
  
  $(".frame").each(function() {
    if(!$(this).hasClass("common") ) {   
      var com = $(".common").clone();
      $(com).removeClass("common");
      $(com).addClass('previewcom');
      //console.log(com);
      $(this).append(com);
      TweenMax.to($(this), 0.4, { x: i * (banner.width + 10) + "px", y:"0px"});
      i++;
    }
  })
}

function resetFrames() {
  qamodeToggle = false;
    
  console.log( "QA mode off" );

  $('html').css('cursor', 'auto');

  var i=0;
  $("div.previewcom").remove();
  $(".frame").each(function() {    
    TweenMax.to($(this), 0.4, {x: "0px", y: "0px"});
    i++;
  })

  var d = new TimelineMax()
  .addPause("+=0.3", restart ) ;

  function restart() {
    $(".previewbg").css('display','none');   
    $(".frame").removeClass('qamode');
    $(".banner").removeClass('qamode'); 
    $(".frame").removeClass('qamode');
    $(".banner").removeClass('qamode'); 
    $("#banner-border").removeClass("noDisplay");
    $("g").each(function() {
      var tmp = $(this).attr("data-mask");
      $(this).removeAttr("mask");
      $(this).attr("mask", tmp);
    })        
    $("body").css("overflow","hidden");

    mainTimeline.restart();
    startBanner();
  } 
}

$.proofKey = function() {
  $( this ).keypress(function(e) {

    if ( e.which == 112 ) {

      e.preventDefault();
      qamodeToggle = !qamodeToggle;
      if(qamodeToggle) {
        separateFrames();
      } else {
        resetFrames();
      }

    }
  });
}