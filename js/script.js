/*NAVBAR-BRAND HOVER EFFECT*/
$(document).ready(function(){
  $(".navbar-brand").mouseenter(function(){
    $(".navbar-brand span").css("color", "#52d6f4");
  });
  $(".navbar-brand").mouseleave(function(){
    $(".navbar-brand span").css("color", "#f6f6f6");
  });
});

/*HOME PAGE BKG TEXT HOVER EFFECT*/
$(document).ready(function(){
    $("h1").mouseenter(function(){
      $("h1 span").css("color", "#52d6f4");
    });
    $("h1").mouseleave(function(){
      $("h1 span").css("color", "#f6f6f6");
    });
  });

  /*INVENTORY PAGE BORDER EFFECT*/

const windowSize = () => {
  const x = window.innerWidth;
  if (x > 768) {
    $(document).ready(function(){
      $(".Ione").mouseenter(function(){
        $(".Ione").css("padding", "2vw");
      });
      $(".Ione").mouseleave(function(){
        $(".Ione").css("padding", "0");
      });
      $(".Itwo").mouseenter(function(){
        $(".Itwo").css("padding", "2vw");
      });
      $(".Itwo").mouseleave(function(){
        $(".Itwo").css("padding", "0");
      });
      $(".Ithree").mouseenter(function(){
        $(".Ithree").css("padding", "2vw");
      });
      $(".Ithree").mouseleave(function(){
        $(".Ithree").css("padding", "0");
      });      
    });    
  } 
  else {
    $(document).ready(function(){
      $(".Ione").mouseenter(function(){
        $(".Ione").css("padding", "0");
      });
      $(".Itwo").mouseenter(function(){
        $(".Itwo").css("padding", "0");
      });
      $(".Ithree").mouseenter(function(){
        $(".Ithree").css("padding", "0");
      });    
    });    
  }
}