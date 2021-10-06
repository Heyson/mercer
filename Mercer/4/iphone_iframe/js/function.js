   $("img.js-switch").click (function(){
    var divname= this.alt;
   
      $("."+divname).fadeIn(750).siblings().hide();
      // $("."+divname).fadeIn("slow").siblings().hide();
        $("#"+divname).delay(950).fadeIn(750).siblings().hide();
    });



   $("img.js-switch-two").click (function(){
    var divname= this.alt;
   
       $("."+divname).fadeIn(750).siblings().hide();
       $("#"+divname).delay(850).fadeIn(750).siblings().hide();
    });

