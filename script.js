
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstpageAnim(){

    var tl1 = gsap.timeline({scrollTrigger:{
        scroller:"#main",
        trigger:"#hero",
        start:"0% 5%",
        end:"20% 10%",
        // markers:true
    }});

    tl1.from(".navbar",{
        y:-10,
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
    })

    tl1.to(".bounding-element",{
        transform:"translateY(0%)",
        delay:-0.5,
        stagger:0.2,
    })

    tl1.from(".ending-links",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut,
    })

}
firstpageAnim();

function mousemovingAnimation(){
    var xScale = 1;
    var yScale = 1;
    var xPrevious = 0;
    var yPrevious = 0;
    var timer;
    window.addEventListener("mousemove",(dets)=>{

        clearTimeout(timer);
        var xScale = gsap.utils.clamp(0.8,1.2,dets.clientX - xPrevious);
        var yScale = gsap.utils.clamp(0.8,1.2,dets.clientY - yPrevious);

        xPrevious = dets.clientX;
        yPrevious = dets.clientY;

        mouseFollower(xScale, yScale);

        timer = setTimeout(() => {
            document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(1 , 1)`;
        }, 100);

    })
}
mousemovingAnimation();

function mouseFollower(xScale,yScale){
    window.addEventListener("mousemove",(dets)=>{

        document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xScale} , ${yScale})`;
    })
}
mouseFollower();

function imageAnim(){
    var diff = 0;
    var rotate = 0;
    document.querySelectorAll(".elem").forEach(element => {
        element.addEventListener("mousemove",(dets)=>{
            var topPosition =  dets.clientY - element.getBoundingClientRect().top;
            diff = dets.clientX - rotate;
            rotate = dets.clientX;
            gsap.utils.clamp(-20,20,diff*0.5);
            var img = element.querySelector('img');
            gsap.to(img,{
                opacity:"1",
                left:dets.clientX,
                top:topPosition,
                ease:Power3,
                rotate:diff
            })

        });

        element.addEventListener("mouseleave",()=>{
            var img = element.querySelector('img');

            gsap.to(img,{
                opacity:"0",
                ease:Power3,
            })

        });

    });
}
imageAnim();

document.querySelector('.icon1').addEventListener("mouseenter",()=>{
    gsap.to('.icon1 > i',{
        transform:"translateY(0%)",
        paddingTop:"0.5rem",
    })
})

document.querySelector('.icon2').addEventListener("mouseenter",()=>{
    gsap.to('.icon2 > i',{
        transform:"translateY(0%)",
        paddingTop:"0.5rem",
    })
})

document.querySelector('.icon1').addEventListener("mouseleave",()=>{
    gsap.to('.icon1 > i',{
        transform:"translateY(-100%)",
        paddingTop:"0.5rem",
    })
})

document.querySelector('.icon2').addEventListener("mouseleave",()=>{
    gsap.to('.icon2 > i',{
        transform:"translateY(-100%)",
        paddingTop:"0.5rem",
    })
})