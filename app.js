const path={
   curviness:1.2,
   autoRotate:true,
   values:[
    {x:100,y:-20},
    {x:200,y:20},
    {x:300,y:-200},
    {x:400,y:-100},
    {x:500,y:0},
    {x:200,y:-100},
    {x:400,y:-40},
    {x:700,y:100},
    {x:window.innerWidth,y:-100}
   ]
}
const tween=new TimelineLite();
tween.to('.img',1,{
    bezier:path,
    ease:Power1.easeInOut
})

const controll=new ScrollMagic.Controller();
const scene=new ScrollMagic.Scene(
    {
        triggerElement:'.second-p',
        duration:800,
        triggerHook:0.5
    }
).setTween(tween).addTo(controll)
