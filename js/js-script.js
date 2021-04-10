
(function($){
  'use strict';

  $(document).ready(function() {
    $('#menu-arbisoft > ul > .menu-item').hover(function() {
      $(this).addClass('hover');
      $('.nav').addClass('hover');
      $(this).find('ul.sub-menu').addClass('active')
    }, function() {
      $(this).removeClass('hover');
      $('.nav').removeClass('hover');
      $(this).find('ul.sub-menu').removeClass('active')

    });

    $('.nav .menu-item-has-children .sub-menu .menu-item').hover(function() {
      var img = $(this).find('a').data('image-link');
      var descr = $(this).find('a').data('descr');
      $('.nav .menu-item-has-children.hover .article__link .article__img').attr('src', img);
      $('.nav .menu-item-has-children.hover .article__description').text(descr);
    });

    $('.share-simple-wrapper .icons a').each(function(link) {
      var old_url = $(this).attr('href');
      var new_url = old_url.replace("|", "-");
      $(this).attr('href', new_url);
      });

      $('.client-banner .services-title, .client-banner .client-image').wrapAll('<div class="top-banner"></div>');

     if ($('html').attr('lang') == 'de-DE') {
        $('body').addClass("german");
        $(".copyright").text(function () {
            return $(this).text().replace("All Rights Reserved", "Alle Rechte vorbehalten"); 
        });

        $("._error-inner").text(function () {
            return $(this).text().replace("This field is required", "Dieses Feld wird benötigt"); 
        });

        $("._error-inner").text(function () {
            return $(this).text().replace("Please select an option", "Bitte wähle eine Option"); 
        });

        $(".section-post-related h4").text(function () {
          return $(this).text().replace("Related posts", "Verwandte Beiträge"); 
        });

        $(".share-simple-wrapper .share-label").text(function () {
          return $(this).text().replace("Share", "Teilen"); 
        });

        $(".masonry .post-footer .post-links a").text(function () {
          return $(this).text().replace("Read more", "Weiterlesen"); 
        });

        $("#Top_bar a.action_button").text(function () {
          return $(this).text().replace("REQUEST A QUOTE", "Kontaktiere uns"); 
        });

        $("#Top_bar a.action_button").attr("href", "/de/kontaktiere-uns/")
        }

        $(".author-box .desc-wrapper .desc").text(function () {
          return $(this).text().replace("Programmer and Web developer. Blogs at alazierplace.com. Likes reading, playing video games and doing nothing.", "Programmierer und Webentwickler. Bloggt auf alazierplace.com. Liest gern, mag Videospiele spielen und einfach mal nichts tun."); 
        });

        $(".author-box .desc-wrapper .desc").text(function () {
          return $(this).text().replace("In no particular order, I like programming, playing racket sports (especially squash), building cool products, and having intelligent conversations!", "In keiner bestimmten Reihenfolge, ich programmiere gerne, spiele Racketsportarten (insbesondere Squash), baue coole Produkte und führe intelligente Gespräche!"); 
        });

        $(".author-box .desc-wrapper .desc").text(function () {
          return $(this).text().replace("I am a people's person who is fond of interesting conversations, loves to travel and find new challenges on the go. Currently, working as Assistant Manager, People Operations & Development at Arbisoft. <a href='https://www.linkedin.com/in/sabeen-nasar/'>[LinkedIn bio]</a>", "Ich bin ein Mensch, der die interessante Gespräche, Reisen und neue Herausforderungen mag. Derzeit arbeite ich als Assistant Manager für People Operations & Development bei Arbisoft. <a href='https://www.linkedin.com/in/sabeen-nasar/'>[LinkedIn bio]</a>"); 
        });

        $(".section-post-related .simple .post-related a.button .button_label").text(function () {
          return $(this).text().replace("Read more", "Weiterlesen"); 
        });
	
     if ($('html').attr('lang') == 'en-US') {
        $('body').addClass("english");
        $(".section-post-related .simple .post-related a.button .button_label").text(function () {
          return $(this).text().replace("Weiterlesen", "Read more"); 
        });
      }

	$('div.column.one-fourth:empty').hide();
  });

})(jQuery);