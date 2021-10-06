   $("img.js-switch").click (function(){
    var divname= this.alt;
   
      $("."+divname).fadeIn(1500).siblings().hide();
      
        $("#"+divname).fadeIn(1500).siblings().hide();
    });



   $("img.js-switch-two").click (function(){
    var divname= this.alt;
   
       $("."+divname).show("easeInOutQuad").siblings().hide();
       $("#"+divname).show("slow").siblings().hide();
    });



// <script>

//    $(".bubble").click (function(e){
//       $('.bubble').removeClass('selected');
//       $(this).addClass('selected');
    
//     var divname= this.id;

//        $("#"+"js-"+divname).fadeIn("slow").siblings().hide();
//     });

// </script>