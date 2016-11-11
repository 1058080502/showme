var slider=document.querySelector('.slider');
var width=slider.offsetWidth;
  //console.log(width);
var ul=document.querySelector('ul')[1];

function addTranslate(x){
    ul.style.transform='translate('+x+'px)';
}
function addTransition(){
    ul.style.transition = 'all 1s ease';
}
function removeTransition(){
    ul.style.transition='none';
}
var time=null,index=1;
   time=setInterval(function(){

   }
},2000)

