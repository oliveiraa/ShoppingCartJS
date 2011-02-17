$(function(){
  $('#shoppingcart .content').hide();

  $('#shoppingcart .toggle').click(function(){
//    $(data.currentTarget).next().toggle(1000);
    $header = $('#shoppingcart');
    $content = $('#shoppingcart .content');
    
    var headerBottom = parseInt($header.css('bottom'));

    if(parseInt($(headerBottom).toEm()) == 2)
      var bottom = parseInt($header.css('height')) + parseInt($content.css('height')); 
    else
      var bottom = "2em";

    $header.animate({
      "bottom": bottom
    });

    $content.slideToggle();
  });
});

function addEmAndPx(em,px){
  var result = $(em).toPx();
  result += px;
  return px;
}
