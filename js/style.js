$(document).ready(function(){
    /**************菜单栏*********************/

    $('.navo>li:first-child>a').css('border-left','none');
    $('.navo>li:last-child>a').css('border-right','none');

    $('.navo>li').hover(function(){
        if($(this).children('ul') != ''){
            $(this).children('ul').css('height','72px');
            $(this).children('ul').addClass('tran');
        }
    },function(){
        $(this).children('ul').css('height','0');
    })

    /********************banner************************/

    var baner = $('.baner'),
        aLi = $('.baner ul').find('li'),
        aA = $('.squer').find('a'),
        iNum = 0;

    $('.baner ul li:gt(0)').hide();

    aA.hover(function(){
        $(this).css('background','#5bc0de').siblings().css('background','');
        iNum = $(this).index();
        aLi.eq(iNum).fadeIn('slow').siblings().fadeOut('slow');
        aLi.stop(true,true);
    })

    function moveBaner(){
        if(iNum == aLi.length-1){
            iNum = -1;
        }
        aLi.eq(iNum+1).fadeIn('slow').siblings().fadeOut('slow');
        aA.eq(iNum+1).css('background','#5bc0de').siblings().css('background','');
        iNum++;
    }

    autoplay();
    function autoplay(){
        timer = setInterval(function(){
            moveBaner();
        },2500)
    }

    baner.hover(function(){
        clearInterval(timer);
    },autoplay);

    /********************boxth************************/

    function textHidden(obj,num){
        $(obj).each(function(){
            var maxwidth = num;
            if($(this).text().length > maxwidth){
                $(this).text($(this).text().substring(0,maxwidth));
                $(this).html($(this).html()+'...');
            }
        })
    }

    textHidden($('.boxthT').children('span'),60);
    textHidden($('.tyxgt ul li').children('a'),21);

    /******************flash视频播放******************/

    var aLi1 = $('.sessC ul').find('li');
    var aLiw = $('.sessC ul').find('li').width();
    var oUl1 = $('.sessC').find('ul');
    var iNum1=0;

        $('.next').click(function() {
            if (iNum1 < aLi1.length - 3) {
                iNum1++;
                oUl1.animate({
                    'left': -aLiw * iNum1
                })
            } else {
                iNum1 = 0;
                oUl1.animate({
                    'left': aLiw * iNum1
                })
            }
        })
        $('.pre').click(function(){
            if(iNum1>0){
                iNum1--;
                oUl1.animate({
                    'left' : -aLiw*iNum1
                })
            }
        })

    /*******************回到顶部*************************/

    $('.goTop').children('a').click(function(){
        $('body,html').animate({
            'scrollTop' : 0
        },1500)
    })

    $(window).scroll(function(){
        if($(window).scrollTop() > 400){
            $('.goTop').css('display','block');
        }else{
            $('.goTop').css('display','none');
        }
    })

    /********************index sessiont************************/

    function textHiddeno(obj){
        $(obj).each(function(){
            var maxlength = 20;
            if($(this).text().length > maxlength){
                $(this).text($(this).text().substring(0,maxlength));
                $(this).html($(this).html()+'...');
            }
        })
    }

    textHiddeno($('.tyxgo p').children('b'));
    textHiddeno($('.tyxgo p').children('span'));

    /********************在线客服************************/

    $('.zxkf').click(function(){
        $('.olLeft').show(500);
        $(this).css('display','none');
        $('.gbkf').css('display','block');
    })
    $('.gbkf').click(function(){
        $('.olLeft').hide(500);
        $('.zxkf').css('display','block');
        $(this).css('display','none');
    })

    /****************真实案例****************/

    var aLi2 = $('.anlio').children('li'),
        aLi3 = $('.anlit').children('li');

    $('.anlio li>p').click(function(){
        var aLi3Index = aLi2.index($(this).parent());

        $('.anlit').css('display','block')
        aLi3.eq(aLi3Index).show().siblings().hide();
        $('.anlio').css('display','none');
    })

    $('.anlit li>a').click(function(){

        $(this).parent().hide();
        $('.anlio').css('display','block');
    })

    /*******************图片滚动**********************/

    var oUlo = $('.qwmto').children('ul')[0];

    oUlo.innerHTML += oUlo.innerHTML;

    function hd(){
        if(oUlo.offsetTop < -oUlo.offsetHeight/2){
            oUlo.style.top = '0';
        }
        oUlo.style.top = oUlo.offsetTop - 1+'px';
    }

    var timer1 = setInterval(hd,30);

    $('.qwmt').hover(function(){
        clearInterval(timer1);
    },function(){
        timer1 = setInterval(hd,30);
    })

})
