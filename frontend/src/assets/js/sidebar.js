const mobileScreen = window.matchMedia("(max-width: 990px )");

$(document).ready(function () {

    
    var btnTitle = $(".btn-upload-input-title").html();
    var btnTitleHtml = $.parseHTML(btnTitle);
    $(".btn-upload-input input:file").change(function (){
       console.log("im clicked" + this.files.length);
       if( this.files && this.files.length >= 1 ) {
          var file = this.files[0];
             var reader = new FileReader();
             // Set preview image into the popover data-content
             reader.onload = function (e) {
                $(".btn-upload-input-title").text(file.name);
             }
             reader.readAsDataURL(file);
       }
       else {
          $(".btn-upload-input-title").html(btnTitle);
       }
         
     });   



     

    $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });

  


});


// $(function() {
    // var btnTitle = $(".btn-upload-input-title").html();
    // var btnTitleHtml = $.parseHTML(btnTitle);
    // $(".btn-upload-input input:file").change(function (){
    //    console.log("im clicked" + this.files.length);
    //    if( this.files && this.files.length >= 1 ) {
    //       var file = this.files[0];
    //          var reader = new FileReader();
             
    //          reader.onload = function (e) {
    //             $(".btn-upload-input-title").text(file.name);
    //          }
    //          reader.readAsDataURL(file);
    //    }
    //    else {
    //       $(".btn-upload-input-title").html(btnTitle);
    //    }
         
    //  });   
//  });
 