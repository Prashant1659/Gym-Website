const a=document.querySelectorAll(".slider");
var b=document.getElementById('bar-percent1');
var c=document.getElementById('bar1');
var e=document.getElementById('bar-percent2');
var f=document.getElementById('bar2');
var g=document.getElementById('bar-percent3');
var h=document.getElementById('bar3');
c.style.width=b.innerText;
f.style.width=e.innerText;
h.style.width=g.innerText;
var count=0;
a.forEach(
    (slider,index) =>
    {
        slider.style.left=`${index*100}%`
    }
)
console.log(a.length);
const Prev=()=>
{
    if(count!=0){
    count--
    sliderrun()
    }
    else{
        count=a.length-1;
        sliderrun();
    }
}
const Next=()=>
{
    if(count!=a.length-1){
    count++
    sliderrun()
    }
    else{
        count=0;
        sliderrun()

    }
}
const sliderrun=()=>
{
    a.forEach(
        (slider)=>{
        slider.style.transform =`translateX(-${count*100}%)`
        } 
    )
}