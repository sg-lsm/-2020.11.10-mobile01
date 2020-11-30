    var istop;
    var index;
    $(document).ready(function() {
        $('.slider_panel').append($('.slider_image').first().clone());
        $('.slider_panel').prepend($('.slider_image').eq(-2).clone());
        index=1;
        moveSlider(index);
        autoMove();
        $('.animation_canvas').hover(function() {
            clearInterval(istop);
        },function() {
            autoMove();
        });
        $('.control_button').click(function() {
            index=$(this).index();
            moveSlider(index+1);
        });
        $('.left_control').click(function() {
            if(index>1){
                index--;
            }else{
                $('.slider_panel').css('left',-(innerWidth*6));
                index=5;
            }
                moveSlider(index);
            });
        
        $('.right_control').click(function() {
            if(index<5){
                index++;
            }else{
                $('.slider_panel').css('left',0);
                index=1;
            }
            moveSlider(index);
        });
    });
        function moveSlider(index) {
            $('.slider_panel').animate({
                left:-(index*innerWidth)
            },'slow');
            $('.control_button').removeClass('active');
            $('.control_button').eq(index-1).addClass('active');
            $('.slider_text').css('left',-1500);
            $('.slider_text').eq(index-1).animate({
                left:0
            });         
        }
        function autoMove() {
            istop=setInterval(function() {
                $('.right_control').trigger('click');
            },5000);
        }