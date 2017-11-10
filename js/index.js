$(function () {
    $('#dowebok').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        menu: '#menu',
        afterLoad: function(anchorLink, index){
            if(index==1){
                $(".mask1 h1").addClass("flipInY")
            }
            if(index == 2){
                // $('.section2').find('p').delay(500).animate({
                //     left: '0'
                // }, 1500, 'easeOutExpo');
                $(".li1").css("display","block");
            }
            if(index == 3){
                $('.section3').find('p').delay(500).animate({
                    bottom: '0'
                }, 1500, 'easeOutExpo');
            }
            if(index == 4){
                $('.section4').find('p').fadeIn(2000);
            }
        },
        onLeave: function(index, direction){
            if(index == '2'){
                // $('.section2').find('p').delay(500).animate({
                //     left: '-120%'
                // }, 1500, 'easeOutExpo');
                $(".li1").css("display","none");
            }
            if(index == '3'){
                $('.section3').find('p').delay(500).animate({
                    bottom: '-120%'
                }, 1500, 'easeOutExpo');
            }
            if(index == '4'){
                $('.section4').find('p').fadeOut(2000);
            }
        },

    });
    $(".mask1 h1").addClass("flipInY");



});






var obj = {num:0};
$(obj).animate({num:90},{
    duration:1000,
    step:function () {
        $(".mask4 .can").html(Math.round(obj.num));
    },
    complete:function () {//最终显示2017
        $(".mask4 .can").html(90);
    }
});









