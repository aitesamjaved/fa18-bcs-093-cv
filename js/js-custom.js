
(function($){
  'use strict';

  $(document).ready(function() {
    $('.about-us-we-build .vc_col-sm-4 .wpb_text_column > .wpb_wrapper h4').matchHeight();
    // $('#isotopes-filtration-row .wpb_text_column').matchHeight();
    // #isotopes-filtration-row .wpb_single_image,
    $('.arbisoft-services_inner, .home .techs .wpb_content_element .wpb_wrapper, .about-us-we-build .vc_col-sm-4 .wpb_text_column > .wpb_wrapper').matchHeight({
      byRow: false,
    });

    setTimeout(function(){
      $('.case-back').matchHeight({
        byRow: false,
      });
    }, 1000);


    if ( $('.home-testimonial-slider').length > 0) {
      $(".testimonials_list div").replaceWith(function() {
        return "<div>" + this.innerHTML + "</div>";
      });
      $('.testimonials_list').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        autoplay:true,
        autoplaySpeed: 4000,
        adaptiveHeight: true
      });
    }

    // init Isotope
    var $grid = $('#isotopes-filtration-row').isotope({
      itemSelector: '.vc_column_container.wpb_column .vc_col-sm-4 ',
      layoutMode: 'fitRows',
      // columnWidth: 110,
      gutterWidth: 0
    });

    // HACK: call function again once all images load.
    $grid.imagesLoaded().progress( function() {
      $grid.isotope();
    });



    $('.clients-filter-dropdown select').on('change', function(){

      $('.filter-clear').show();
      var selected_item_name = $(this).attr('name');
      $('.clients-filter-dropdown select').each(function(){
        if ( selected_item_name != $(this).attr('name') ) {
          $(this).prop("selectedIndex", 0);
        }
      });
      var filter = $(this).val();
      $grid.isotope({ filter: filter });
    });

    $('.filter-clear').on('click', function(event) {
      event.preventDefault();
      $grid.isotope({ filter: '*' });
      $('.filter-clear').hide();
      $('.clients-filter-dropdown select').each(function(){
        $(this).prop("selectedIndex", 0);
      });
    });

    // Timeline slider
    $('.timeline li').on('click', '.title-block', function(event) {
      $(this).next('.slide-holder').find('.slide-down').slideToggle();
      event.preventDefault();
    });

    $('.timeline ol').slick({
      slide: 'li',
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      infinite: false,
      responsive: [
        {
          breakpoint: 1285,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }
        ,
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
    });


    if ($('#why-arbisoft-chart').length > 0 ) {
      var pieChart = echarts.init(document.getElementById('why-arbisoft-chart'));
      if ($('html').attr('lang') == 'de-DE') {
        var chartData = {
          expertise: [
            { value: 1, name: 'Telekommunikation' },
            { value: 10, name: 'Technologie & Frameworks' },
            { value: 2, name: 'Non-profit' },
            { value: 4, name: 'Gaming' },
            { value: 7, name: 'Reisen & Hotellerie' },
            { value: 4, name: 'Dienstleistungen für Unternehmen' },
            { value: 2, name: 'Regierung' },
            { value: 4, name: 'Konsumgüter und Serviceleistungen' },
            { value: 4, name: 'Gesundheitswesen' },
            { value: 2, name: 'Finanzdienstleistungen' },
            { value: 6, name: 'eCommerce' },
            { value: 1, name: 'Medien' },
            { value: 9, name: 'Bildung' },
          ],
          speciality: [
            { value: 1, name: "VR & AR Engineers" },
            { value: 9, name: "Automated & Manual QA" },
            { value: 7, name: "Full-stack Engineers" },
            { value: 4, name: "Frontend Engineers" },
            { value: 3, name: "iOS Engineers" },
            { value: 5, name: "Data Crawling & Analytics Experts" },
            { value: 3, name: "Android Developers" },
            { value: 2, name: "UI & UX Designers" },
            { value: 9, name: "Back-end Engineers" },
          ],
          technologies: [
            { value: 25, name: "Ruby" },
            { value: 310, name: "Python" },
            { value: 10, name: "Visual Basic" },
            { value: 290, name: "SQL" },
            { value: 60, name: "Objective C" },
            { value: 310, name: "JavaScript" },
            { value: 100, name: "XML" },
            { value: 100, name: "JAVA" },
            { value: 90, name: "C++" },
            { value: 35, name: "Swift" },
            { value: 90, name: "C#" },
            { value: 60, name: "C" },
            { value: 110, name: "PHP" },
          ],
          frameworks : [
            { value: 65, name: "Angular JS" },
            { value: 60, name: "Spring MVC" },
            { value: 40, name: "WordPress" },
            { value: 30, name: "CodeIgniter" },
            { value: 80, name: ".NET" },
            { value: 30, name: "NodeJS" },
            { value: 20, name: "Drupal" },
            { value: 70, name: "Scrapy" },
            { value: 30, name: "Ruby on Rails" },
            { value: 30, name: "React Native" },
            { value: 20, name: "Struts" },
            { value: 220, name: "Django" },
          ]
        };
      }else{
      var chartData = {
        expertise: [
          { value: 1, name: 'Telecommunications' },
          { value: 10, name: 'Technology & frameworks' },
          { value: 2, name: 'Non-profit' },
          { value: 4, name: 'Gaming' },
          { value: 7, name: 'Travel & hospitality' },
          { value: 4, name: 'Business services' },
          { value: 2, name: 'Government' },
          { value: 4, name: 'Consumer products & services' },
          { value: 4, name: 'Healthcare' },
          { value: 2, name: 'Financial services' },
          { value: 6, name: 'eCommerce' },
          { value: 1, name: 'Media' },
          { value: 9, name: 'Education' },
        ],
        speciality: [
          { value: 1, name: "VR & AR Engineers" },
          { value: 9, name: "Automated & Manual QA" },
          { value: 7, name: "Full-stack Engineers" },
          { value: 4, name: "Frontend Engineers" },
          { value: 3, name: "iOS Engineers" },
          { value: 5, name: "Data Crawling & Analytics Experts" },
          { value: 3, name: "Android Developers" },
          { value: 2, name: "UI & UX Designers" },
          { value: 9, name: "Back-end Engineers" },
        ],
        technologies: [
          { value: 25, name: "Ruby" },
          { value: 310, name: "Python" },
          { value: 10, name: "Visual Basic" },
          { value: 290, name: "SQL" },
          { value: 60, name: "Objective C" },
          { value: 310, name: "JavaScript" },
          { value: 100, name: "XML" },
          { value: 100, name: "JAVA" },
          { value: 90, name: "C++" },
          { value: 35, name: "Swift" },
          { value: 90, name: "C#" },
          { value: 60, name: "C" },
          { value: 110, name: "PHP" },
        ],
        frameworks : [
          { value: 65, name: "Angular JS" },
          { value: 60, name: "Spring MVC" },
          { value: 40, name: "WordPress" },
          { value: 30, name: "CodeIgniter" },
          { value: 80, name: ".NET" },
          { value: 30, name: "NodeJS" },
          { value: 20, name: "Drupal" },
          { value: 70, name: "Scrapy" },
          { value: 30, name: "Ruby on Rails" },
          { value: 30, name: "React Native" },
          { value: 20, name: "Struts" },
          { value: 220, name: "Django" },
        ]
      };
    }
      var pie_chart_option = {
        title: {
          show: false,
          text: 'Expertise Industries',
          left: 'center'
        },
        // tooltip: {
        //     trigger: 'item',
        //     // formatter: "{a} <br/>{b} : {c} ({d}%)"
        // },
        // legend: {
        //     // orient: 'vertical',
        //     // top: 'middle',
        //     bottom: 10,
        //     left: 'center',
        //     data: ['Label 1', 'Label 2']
        // },
        color: ['#c0d9f1','#d9d9d9', '#d3c3ee'],
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: chartData.expertise,
            label: {
              // normal: {
              //     show: true,
              //     position: 'center'
              // },
              // emphasis: {
              //     show: true,
              //     textStyle: {
              //         fontSize: '30',
              //         fontWeight: 'bold'
              //     }
              // },
              // formatter: '{b}: {@2012} ({d}%)'
              color: '#555',
              textStyle: {
                fontFamily: 'Montserrat, Arial, Verdana',
              }
            },
          }
        ]
      };


      pieChart.setOption(pie_chart_option);

      $(".piecharts-filter li").on('click', function (e) {
        $(this).addClass('active').siblings().removeClass('active');
        e.preventDefault();
        var filter_type = $(this).find('a').data('filter');
        $('.filter-chart-content div').each(function (index, value) {
          $(this).hide();
        });
        $('[data-content-for="' + filter_type + '"]').show();

        pie_chart_option.title.text = $(this).find('a').html();

        if (filter_type == 'expertise') {
          pie_chart_option.series[0].data = chartData.expertise;
        } else if (filter_type == 'speciality') {
          pie_chart_option.series[0].data = chartData.speciality;
        } else if(filter_type == 'technologies' ){
          pie_chart_option.series[0].data = chartData.technologies;
        } else if(filter_type == 'frameworks' ){
          pie_chart_option.series[0].data = chartData.frameworks;
        }
        pieChart.setOption(pie_chart_option);

      });

    }


    $('.home-work-section-filter li').on('click', function(event) {
      event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var show_section = $(this).attr('data-show');
      $('.home-industries-section, .home-service-section, .home-technologies-section').hide();
      $('.' + show_section ).show();
    });


    $('.industries-slider .wpb_text_column .wpb_wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      arrows: false,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
        ,
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });

    // $(".single-team-member-container .team-image, .single-team-member-container h4").on('click',function(e){
    //   e.preventDefault();
    //   $(this).parents('.single-team-member-container').find('.member-detail').slideToggle();
    // })

    $(".team_vertical .image_frame").on('click',function(e){
      $(this).toggleClass("active");
      e.preventDefault();
      $(this).siblings('.desc_wrapper').slideToggle();
    })


    $('#Top_bar .menu li ul li#menu-item-31244 > a').each(function() {
      var a = new RegExp('/' + window.location.host + '/');
      if(!a.test(this.href)) {
        $(this).click(function(event) {
          event.preventDefault();
          event.stopPropagation();
          window.open(this.href, '_blank');
        });
      }
    });
  });
})(jQuery);
