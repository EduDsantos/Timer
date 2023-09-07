let zero = document.getElementById('num');

let seg= 0;
let min= 0;
let hour= 0;
let inter;



function play(){
    
    if(!inter){
        inter = setInterval(timer,1000);
    }
}

function pause(){
     clearInterval(inter);
     inter=null;
    
}

function reset(){
    clearInterval(inter);
    seg=0;
    min=0;
    hour=0;
    zero.innerHTML = "00:00:00";
    inter=null;

    
}

function timer(){
    seg++;
    if(seg == 60){
       seg = 0;
       min++;

       if(min == 60){
        min = 0;
        hour++;
    }
    
    }
    zero.innerHTML = twodec(hour) + ":" + twodec(min) + ":" + twodec(seg);
   

}

function twodec(deci){
    if(deci < 10){
        return ('0' + deci);
    }else{
        return(deci)
    }
   
}
