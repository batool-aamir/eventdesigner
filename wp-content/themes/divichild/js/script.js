      
                /*basic-js-for-all-pages */
                
$(window).on('load',function() {
     $('.preloader').fadeOut();
     
   
// init Isotope/*
var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    masonry: {
        columnWidth: 100
      }
});
 
   
});






$(".downtoup").on('click', function(e) {
    e.preventDefault();
      if ($(this).attr('href') !== "") {
             var href = $(this).attr('href');
             $('html, body').animate({
                   scrollTop: $(href).offset().top
             }, 800 );
     } 
}); 





$(window).on('scroll', function () {

    windowScrollTop = $(this).scrollTop();

        if(windowScrollTop >= 200 )

        {   
            $('.downtoup').fadeIn('slow')
        }else{
            $('.downtoup').fadeOut('slow')
        }

    divOuterHeight = $('header').outerHeight();
        
        if (windowScrollTop > divOuterHeight) {
            $('.top-header').hide()
            $('header').addClass('sticky').fadeIn()
        } else {
            $('.top-header').show()

            $('header').removeClass('sticky')
        }    

});

$(document).ready(function() {
                         /**for-all-pages */

    $('body').flati({
        theme:'space',
        triggerPosition:'left',
        dockPosition:'top'
    })
    

                /**wh0-we-are-js */

    if($(".top-slider").length)
    {
    
        $(".top-slider").slick({
            
            arrows:false,
            autoplay:true,
            slidesToShow:1,
            slidesToScroll:1
    
        });
    }


    if($(".bottom-slider").length)
    {
    
        $(".bottom-slider").slick({
            arrows:false,
            autoplay:true,
            slidesToShow:4,
            slidesToScroll:2
        });
    }


    
                                        /*what-we-offer-js */
$('.view-para').on('click',function(){
    $(this).next().slideToggle('slow');
})


                                        /*faq-js */
if($("#accordion").length)
{

    $("#accordion").accordion({
        collapsible:true,
        heightStyle: "content"
    });

}



$( function() {
    var icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };
    $( "#accordion" ).accordion({
        icons: icons
    });
    $( "#toggle" ).button().on( "click", function() {
        if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
        $( "#accordion" ).accordion( "option", "icons", null );
        } else {
        $( "#accordion" ).accordion( "option", "icons", icons );
        }
    });
    } );



    
                                ////faq_form
            

if(("#faq-form").length)
{
    
    $('#faq-form').validate({
        rules:{
            fname:"required",
            email:{
                required:true,
                email:true
            },
            msg:{
                required:true,
            }
        },
messages:{
            fname:{
                required:"Full Name is required",
            },
            email:{
                required:"Email is required",
                email:"Enter valid email with @ "
            },
            msg:{
                required:"Question is required"
            }
        },
        submitHandler: function(form) {
            Swal.fire({
                    title: 'ThankYou!',
                    text: 'Your question is submitted.',
                    icon:'success',

                }).then(function(){
                    $('#faq-form')[0].reset()
                });
          }
    })

   
         }

                                    /*Gallery-page-js */
    

$('#filters').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({ filter: filterValue });     
    
});







                                /**booking-page-js */
if($("#bookevent").length)
{

$("#bookevent").validate({

    rules:{
        fname:"required",
        phone:{
                required:true,
                number:true,
        },
        email:{
                required:true,
                email:true
        },
        eventselection:{
            required:true,
        },
        eventdate:{
            required:true,
        },
        eventbudget:{
            required:true,
        },
        eventvenue:{
            required:true,
        },
        eventguest:{
            required:true,
        }
    },
messages:{
        fname:{
                required:"Full Name is required",
        },
        phone:{
                required:"Phone number is required",
                number:"Enter a valid phone number",
        },
        email:{
                required:"Email is required",
                email:"Enter a valid email with @"
        },
        eventselection:{
            required:"Please select the type",
        },
        eventdate:{
            required:"Mention event date",
        },
        eventbudget:{
            required:"Estimated budget in R.s/- is required",
        },
        eventvenue:{
            required:"Name of venue is required",
        },
        eventguest:{
            required:"Number of guest is required",
        }
    },
        submitHandler: function(form) {
            Swal.fire({
                    title: 'ThankYou!',
                    text: "Your form is submitted. We'll get in touch with you soon",
                    icon:'success',

                }).then(function(){
                    $('#bookevent')[0].reset()
                });
          }

    })
            }


$("#datepicker").datepicker();
    

                            /*gift-basket-booking-page-js*/ 
if($("#orderbasket").length)
{

    $("#orderbasket").validate({

        rules:{
            fname:"required",
            phone:{
                    required:true,
                    number:true,
            },
            email:{
                    required:true,
                    email:true
            },
            basketselection:{
                required:true,
            },
            basketdate:{
                required:true,
            },
            basketbudget:{
                required:true,
            }
        },
    messages:{
            fname:{
                    required:"Full Name is required",
            },
            phone:{
                    required:"Phone number is required",
                    number:"Enter a valid phone number",
            },
            email:{
                    required:"Email is required",
                    email:"Enter a valid email with @ "
            },
            basketselection:{
                required:"Please select a type",
            },
            basketdate:{
                required:"Mention delivery date",
            },
            basketbudget:{
                required:"Estimated budget is R.s/- is required",
            },
            
        },
        submitHandler: function(form) {
            Swal.fire({
                    title: 'ThankYou!',
                    text: "Your form is submitted. We'll get in touch with you soon",
                    icon:'success',

                }).then(function(){
                    $('#orderbasket')[0].reset()
                });
          }

    })
}
    $("#datepickers").datepicker();

        
    


                            /**contact-us-page-js */
if($("#form").length)
{

    $('#form').submit(function(e) {
        e.preventDefault();
    }).validate({
        rules:{
            fname:"required",
            phone:{
                 required:true,
                 number:true,
            },
            email:{
                 required:true,
                 email:true
            },
            msg:{
                 required:true,
            }
       },
  messages:{
            fname:{
                 required:"Full Name is required",
            },
            phone:{
                 required:"Phone number is required",
                 number:"Enter a valid phone number",
            },
            email:{
                 required:"Email is required",
                 email:"Enter a valid email with @"
            },
            msg:{
                 required:"Message is required",
            }
        },
        submitHandler: function(form) {
            Swal.fire({
                    title: 'ThankYou!',
                    text: 'Your form is submitted.',
                    icon:'success',

                }).then(function(){
                    $('#form')[0].reset()
                });
          }
    })

            
        }
        
           
    
    

})