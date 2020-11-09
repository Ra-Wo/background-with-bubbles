var back = document.getElementById('back').children[0],
    con = document.getElementById('back'),
    cir = document.getElementsByClassName('circle')[0];

// background color change
var x = 0,
    y = true

setInterval(()=>{
  if(y){
     back.style.cssText = `transform: translateX(-${x}px)`;
     x = x +20;
     if(x > (back.offsetWidth - con.offsetWidth - 20)){
         y = false;
     }
  } else {
      back.style.cssText = `transform: translateX(-${x}px)`;
     x = x - 20;
     if(x < 0){
         y = true;
     }
  }
},100)
// end


// make circle every 1 min 

setInterval(frame, 100);
function frame() {
     var num = Math.round((Math.random() *60));
     var cloneCir = cir.cloneNode(true);
     
     cloneCir.style.cssText = `left: ${num*5}px`;
     cloneCir.style.width = `${num}px`;
     cloneCir.style.height= `${num}px`;
     document.getElementById('background-circles').appendChild(cloneCir);
     
     setTimeout(function(){
         document.getElementById('background-circles').removeChild(document.getElementById('background-circles').children[1])
     }, 5000)
    };

// end
