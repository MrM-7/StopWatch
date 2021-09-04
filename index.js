var count = "0";
var second ="1";
var minute = "1";


var timer = false;

$(".Start").click(function(){
    timer = true;
    stopWatch();
});


$(".Stop").click(function(){
    timer = false;
});


$(".Reset").click(function(){
    timer = false;
    count = 0;
    second = 1;
    minute = 1;
    $(".count").text("00");
    $(".seconds").text("00");
    $(".minutes").text("00");
});

function stopWatch(){
    if(timer == true){
        count++;
        if(count < 10){
            count = "0" + count;
            $(".count").text(count);
        }
        else{
            if(count == 100){
                count = 0;
                seconds();
            }
            $(".count").text(count);
        } 
        setTimeout(function(){
            stopWatch();
        },10); 
    }
}


function seconds (){
    if(second == 60){
        second = "00";
        $(".seconds").text(second);
        minutes();
    }
    else{
        if(second < 10)
            second = "0"+second;   

        $(".seconds").text(second);
    }
    second++;
}

function minutes(){
    if(minute == 60){
        count = 0;
        second = 1;
        $(".seconds").text("00");
        $(".minutes").text("00");
    }
    else{
        if(minute < 10)
            minute = "0" + minute;

        $(".minutes").text(minute);
        minute++;
    }
}