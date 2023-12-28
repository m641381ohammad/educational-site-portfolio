
$(document).ready(function () {
  $('.slider-plugin').slick({
      arrows: true,
      rtl: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,

      responsive: [
          {
              breakpoint: 576,
              settings: {
                  dots: false,
                  autoplay: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true
              }
          },
          {
            breakpoint: 768,
            settings: {
                dots: false,
                autoplay: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        },
          {
              breakpoint: 992,
              settings: {
                  dots: false,
                  autoplay: true,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: true
              }
          },
          {
              breakpoint: 1200,
              settings: {
                  dots: false,
                  autoplay: true,
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  arrows: true
              }
          }
      ]
  });



  $('.blogs-slider').slick({
      rtl: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      responsive: [
        {
            breakpoint: 576,
            settings: {
                dots: false,
                autoplay: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        },
        {
          breakpoint: 768,
          settings: {
              dots: false,
              autoplay: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true
          }
      },
        {
            breakpoint: 992,
            settings: {
                dots: false,
                autoplay: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        },
        {
            breakpoint: 1200,
            settings: {
                dots: false,
                autoplay: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }
      ]
  });

});


////////////////////////////////////////////////////////////////////////////////////////////////////////////

