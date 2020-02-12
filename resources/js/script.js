$(document).ready(function() {
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
            position = target.offset().top;
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
        }
      }
    });

  $("#up").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 2000);
  });
});
