$(document).ready(function() {
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },
  autoplay: {
    delay: 5000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  effect: "slide",
})

var menuButton = $(".menu-button");
menuButton.on("click", function() {
  $(".navigation").toggleClass('navigation--visible');
});
  });

  var tabsItem = $(".price-tabs_item")
  var contentItem = $(".price-content_item")

  tabsItem.on("click", function(event){
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass('price-tabs_item--active')
    contentItem.removeClass('price-content_item--active')
    $(activeContent).addClass('price-content_item--active');
    $(this).addClass('price-tabs_item--active');

  });
