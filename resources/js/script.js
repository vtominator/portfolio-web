$(document).ready(function() {
    const navigationIcon = $(".js--nav-icon i");
    const navigationBarElements = $(".js--nav-list");
  
    $(navigationIcon).click(function() {

  
      if (navigationIcon.hasClass("ion-navicon-round")) {
        navigationIcon.addClass("ion-close-round");
        navigationIcon.removeClass("ion-navicon-round");
        navigationBarElements.css("display", "grid");
      } else {        
        navigationIcon.addClass("ion-navicon-round");
        navigationIcon.removeClass("ion-close-round");
        navigationBarElements.css("display", "none");
      }
    });
  });
  