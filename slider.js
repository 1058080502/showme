var box=document.querySelector('.box');
var width = box.offsetWidth;
   console.log(width);
var ul=document.querySelectorAll('ul')[0];
var li=document.querySelectorAll('.item');
var point=document.querySelectorAll('.point');

function addTranslate(x){
    ul.style.transform='translate('+x+'px)';
}
function addTransition(){
    ul.style.transition = 'all 1s ease';
}
function removeTransition(){
    ul.style.transition='none';
}
var time=null;
var index=0;
animate();
function animate(){
    time=setInterval(function(){
        index++;
        ul.addEventListener('webkitTransitionEnd', function(e){
            //console.log(e);
            console.log(index);
            if(index>=4){
                index=1;
                removeTransition();
                addTranslate(-index*width);
            }else if(index<=0){
                index=3;
                removeTransition();
                addTranslate(-index*width);
            }
        })
        addTransition();
        addTranslate(-index*width);
        setPoint();
    },2000);

}

function setPoint(){
    var pointIndex=index;
    for(i=0;i<point.length;i++){
        point[i].classList.remove('active');
    }
     if(index>=4){
         pointIndex=1;
     }else if(index<=0){
         pointIndex=3;
     }
    point[pointIndex-1].classList.add('active');
};

var start= 0, end= 0,step=0;

 ul.addEventListener('touchstart',function(e){
    clearInterval(time);
    //console.log(e);
    start= e.touches[0].clientX;
    console.log(start);
})

 ul.addEventListener('touchmove',function(e){
    //console.log(e);
    end=e.touches[0].clientX;
    step=start-end;
     addTransition();
     addTranslate(-index*width-step);
    //console.log(step);
})
 ul.addEventListener('touchend',function(e){
    console.log(e);
    if(Math.abs(step) > width*1/3&&end!=0) {
        if (step > 0) {
            index++
        } else {
            index--
        }
    }
     addTransition();
     addTranslate(-index * width);
     setPoint();
     animate();
    /* start = 0;
     end = 0;
     step = 0;*/
})



