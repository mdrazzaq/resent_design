     
                     var owl = $('.first_carousel');
                     owl.owlCarousel({
                       items: 4,
                       loop: true,
                       margin: 10,
                       autoplay: true,
                       autoplayTimeout: 1000,
                       autoplayHoverPause: true,
                       responsive: {
                         0: {
                           items: 1
                         },
                         600: {
                           items: 2
                         },
                         1000: {
                           items: 4
                         }
                       }
                     });
                     $('.play').on('click', function () {
                       owl.trigger('play.owl.autoplay', [1000])
                     })
                     $('.stop').on('click', function () {
                       owl.trigger('stop.owl.autoplay')
                     })
  