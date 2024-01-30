// function locomotive (){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });



// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }

// locomotive()

var main = document.querySelector("#main")
var img = document.querySelector("#page1>img")

img.addEventListener("mousemove",function(dets){
    img.style.left = 1-dets.x*.05 +"px"
    img.style.top = 1-dets.y*.05 +"px"
})

var tlpage2 = gsap.timeline({
    scrollTrigger: {
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:3
    }
})

tlpage2.to("#page1 #fullimg",{
    opacity:0,
    
},"var")
tlpage2.to("#nav #center h4",{
    opacity:0,
    y:-100,
    stagger:1

},"var")

var tlbox = gsap.timeline({
    scrollTrigger: {
        trigger:"#page2",
        scroller:"body",
        // markers:true,     
        start:"top -20%",
        end:"top -70%",
        scrub:3
    }
})

tlbox.from("#page2 #box #first",{
    x:-200,
    opacity:0,
    duration:.5,
},"var")
tlbox.from("#page2 #box #secand",{
    x:200,
    opacity:0,
    duration:.5,
},"var")
tlbox.to("#page2 h5",{
    opacity:0,
    // duration:.5,
},"var")
tlbox.to("#page2 h3",{
    opacity:0,
    // duration:.5,
},"var")
tlbox.to("#page2 p",{
    opacity:0,
    // duration:.5,
},"var")

var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger:"#page3",
        scroller:"body",
        // markers: true,
        start:"top 45%",
        end: "top 0%",
        scrub:3
    }
}
)

tl1.from("#page3 #man",{
    y:200,
    opacity:0,
    duration:.5,
    
})
tl1.from("#page3 #dog",{
    x:200,
    opacity:0,
    duration:.5,
    }
)
tl1.from("#page3 #uwear",{
    x:200,
    opacity:0,
    duration:.5,
    }
)
tl1.from("#page3 #sleaper",{
    x:200,
    opacity:0,
    duration:.5,
    }
)
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger:"#page4",
        scroller:"body",
        // markers: true,
        start:"top 45%",
        end: "top 0%",
        scrub:3
    }
}
)
tl2.from("#page4 #man",{
    y:200,
    opacity:0,
    duration:.5,
    
})
tl2.from("#page4 #dog",{
    x:200,
    opacity:0,
    duration:.5,
    }
)
tl2.from("#page4 #uwear",{
    x:200,
    opacity:0,
    duration:.5,
    }
)
tl2.from("#page4 #sleaper",{
    x:200,
    opacity:0,
    duration:.5,
    }
)
gsap.from("#page5 #hand",{
    opacity:0,
    y:200,
    duration:.6,
    scrollTrigger: {
        trigger:"#page5",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 35%",
        scrub:3
    }
})