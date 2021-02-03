$(function() {

    var prev = 0;
    var now = 0;
    var fishDir = 1; //0:left 1:right

    $.fn.animateAppendTo = function(sel, speed){
        var $this = this;
        var currPos = $this.offset();
        var newEle = $this.clone(true).appendTo(sel);
        var newPos = newEle.offset();

        //console.log(`newleft=${newPos.left}, currleft=${currPos.left}`);

        var topMove = newPos.top - currPos.top;
        var leftMove = newPos.left - currPos.left;

        //console.log(topMove);
        //console.log(leftMove);
        
        newEle.css('opacity', '0');
        $this.css('position', 'absolute');
        $this.animate({
            top: `+=${topMove}px`,
            left: `+=${leftMove}px`,
        },
        speed,
        function() {
            newEle.css('opacity', '1');
            $this.remove();
        }); 
        
        return newEle;
    }

    $('.menu li').hover(
        function() {
            var now_id = $(this).attr('id');

            switch(now_id){
                case "menu_prof":
                    now = 1;
                    break;
                case "menu_works":
                    now = 2;
                    break;
                case "menu_travel":
                    now = 3;
                    break;
                case "menu_contact":
                    now = 4;
                    break;
                default:
                    now = 0;
                    break;
            }

            if(prev == 0){
                $(this).find('i').css('opacity', '1');
            }else if(prev < now){               
                if(fishDir == 1){
                    $('#fish').animateAppendTo('#'+now_id, 50);
                }else if(fishDir == 0){
                    fishDir = 1;
                    $('#fish').css('transform', 'scale(1, 1)');
                    $('#fish').animateAppendTo('#'+now_id, 50);
                }
            }else if(prev > now){                
                if(fishDir == 1){
                    fishDir = 0;
                    $('#fish').css('transform', 'scale(-1, 1)');
                    $('#fish').animateAppendTo('#'+now_id, 50);
                }else if(fishDir == 0){
                    $('#fish').animateAppendTo('#'+now_id, 50);
                }
            }
        },
        function() {
            prev = now;
            now = 0;
        }
    )

    var prev2 = 0;
    var now2 = 0;
    var fishDir2 = 1; //0:left 1:right

    $('.menu2 li').hover(
        function() {
            var now_id = $(this).attr('id');

            switch(now_id){
                case "menu_prof2":
                    now2 = 1;
                    break;
                case "menu_works2":
                    now2 = 2;
                    break;
                case "menu_travel2":
                    now2 = 3;
                    break;
                case "menu_contact2":
                    now2 = 4;
                    break;
                default:
                    now2 = 0;
                    break;
            }

            if(prev2 == 0){
                $(this).find('i').css('opacity', '1');
            }else if(prev2 < now2){               
                if(fishDir2 == 1){
                    $('#fish2').animateAppendTo('#'+now_id, 50);
                }else if(fishDir2 == 0){
                    fishDir2 = 1;
                    $('#fish2').css('transform', 'scale(1, 1)');
                    $('#fish2').animateAppendTo('#'+now_id, 50);
                }
            }else if(prev2 > now2){                
                if(fishDir2 == 1){
                    fishDir2 = 0;
                    $('#fish2').css('transform', 'scale(-1, 1)');
                    $('#fish2').animateAppendTo('#'+now_id, 50);
                }else if(fishDir2 == 0){
                    $('#fish2').animateAppendTo('#'+now_id, 50);
                }
            }
        },
        function() {
            prev2 = now2;
            now2 = 0;
        }
    )


    $('.sample1').hover(
        function() {
            $(this).stop().css('background-position', 'bottom').css('transition', 'all 2s');
        },
        function() {
            $(this).stop().css('background-position', 'top').css('transition', 'all 1s');
        }
    );

    $('.sample2').hover(
        function() {
            $(this).stop().css('background-position', 'bottom').css('transition', 'all 2s');
        },
        function() {
            $(this).stop().css('background-position', 'top').css('transition', 'all 1s');
        }
    );

    $('.sample3').hover(
        function() {
            $(this).stop().css('background-position', 'bottom').css('transition', 'all 2s');
        },
        function() {
            $(this).stop().css('background-position', 'top').css('transition', 'all 1s');
        }
    );

    $('.sample4').hover(
        function() {
            $(this).stop().css('background-position', 'bottom').css('transition', 'all 2s');
        },
        function() {
            $(this).stop().css('background-position', 'top').css('transition', 'all 1s');
        }
    );


});
