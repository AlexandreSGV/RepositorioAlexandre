var Menubar = {};

Menubar.active = false;

Menubar.open = function(el) {
  var menubar = $(el).closest('.menubar')
  ,   item = $(el).closest('.menubar-item')
  ,   menu = item.find('.menu').first()
  ;
  Menubar.active = true;
  item.addClass('is-selected')
  item.siblings().removeClass('is-selected');
  $('.bubble').hide();
};

Menubar.close = function() {
  $('.menubar-item.is-selected').removeClass('is-selected');
  Menubar.active = false;
};

$('.menubar-item').on('click', function(e) {
  if (!Menubar.active) {
    Menubar.open(this);
    e.stopPropagation(); // Keep document.click from firing
  }
});

$('.menubar-item').on('mouseenter', function() {
  if (Menubar.active) { Menubar.open(this); }
});

$(document).on('click', function() {
  Menubar.close();
});