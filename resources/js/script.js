$(document).ready(function() {
  /* ---------------------------------------------- */
  /* NAVIGATION */
  /* ---------------------------------------------- */

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        let target = $(this.hash);
        let position = 0;
        target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          if (target[0].id == "about") {
            position = target.offset().top - 260;
          } else {
            position = target.offset().top + 215;
          }
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: position
            },
            2000
          );
        } else {
          $("html, body").animate({ scrollTop: 0 }, 2000);
        }
      }
    });

  /* ---------------------------------------------- */
  /* ANIMATIONS */
  /* ---------------------------------------------- */

  $(".js--wp-1").waypoint(
    function() {
      $(".js--wp-1").addClass("animated fadeInLeft");
    },
    {
      offset: "65%"
    }
  );

  $(".js--wp-2").waypoint(
    function() {
      $(".js--wp-2").addClass("animated fadeInRight");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-3").waypoint(
    function() {
      const element = document.querySelector(".js--wp-3");
      element.classList.add("animated", "fadeInRight");
      element.addEventListener("animationend", function() {
        const element = document.querySelector(".js--wp-4");
        element.classList.add("animated", "fadeInRight");
        element.addEventListener("animationend", function() {
          const element = document.querySelector(".js--wp-5");
          element.classList.add("animated", "fadeInRight");
        });
      });
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-6").waypoint(
    function() {
      $(".js--wp-6").addClass("animated fadeInLeft");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-7").waypoint(
    function() {
      $(".js--wp-7").addClass("animated fadeInRight");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-8").waypoint(
    function() {
      $(".js--wp-8").addClass("animated fadeInLeft");
    },
    {
      offset: "70%"
    }
  );

  $(".js--wp-9").waypoint(
    function() {
      $(".js--wp-9").addClass("animated fadeInRight");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-10").waypoint(
    function() {
      $(".js--wp-10").addClass("animated fadeInLeft");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-11").waypoint(
    function() {
      $(".js--wp-11").addClass("animated fadeInRight");
    },
    {
      offset: "70%"
    }
  );


  $(".js--wp-12").waypoint(
    function() {
      $(".js--wp-12").addClass("animated fadeInUp");
    },
    {
      offset: "70%"
    }
  );
});
