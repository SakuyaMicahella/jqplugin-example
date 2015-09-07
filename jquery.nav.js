/*
 * 
 * @authors electrostatic
 * @date    2015-03-04 21:12:51
 * @version 0.1
*/

(function($){
    $.fn.extend({  //$.fn.extend局部  $.extend 全局
        //插件的匿名函数
        //在插件里的this经过一些封装处理，this表示jquery对象，不需要再次使用this包装
        'nav' : function(color){
            this.find('.nav').css({
                'list-style':'none',
                'margin':0,
                'padding':0,
                'display':'none',
                //'color' : 'red',
        });

        this.find('.nav').parent().hover(function(){
            //普通匿名函数
            $(this).find('.nav').slideDown('normal');
        },function(){
            $(this).find('.nav').stop().slideUp('normal');
        })
        }
    });
})(jQuery);