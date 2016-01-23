$(function() {
  var container = $('.content-wrap');
  var width = container.width();
  var height = container.height();
  var len = $('.content-wrap li').length;
  //设置宽度高度
  $.each($('li'), function(index) {
    var s = $('li').eq(index);
    s.css({
      width: width + 'px',
      height: height + 'px'
    });
  });
  //设置背景坐标
  $.each($('li'), function(index) {
    var s = $('li').eq(index);
    s.css({
      transform: 'translateX(' + width * index + 'px)',
    });
  });
  //男孩
  $('#boy').css('top',getValue('.a_background_middle').top-200)
    $('button').on('click', function() {
    container.css('-webkit-transform','translateX(-'+width+'px)');
    setTimeout(function(){$('#boy').css('animation-name','none')},20000)
  });
  
   function getValue(className) {
            var $elem = $('' + className + '');
                // 走路的路线坐标
            return {
                height: $elem.height(),
                top: $elem.position().top
            };
        };
})