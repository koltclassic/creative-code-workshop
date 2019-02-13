var topic = document.getElementById('topic');

function changeText(text) {
  topic.innerHTML = text;
}
function basicPhysics() {

var tl = new TimelineMax(),
    box = document.querySelectorAll(".box"); 
tl.to('#box4', 2, {
  y: -300,
})
// var t = TweenLite.to("#myElement", 1, {text:"Strawberry", color:"#f00", ease:Linear.easeNone, paused:true, reversed:true});
tl.call(changeText, ['random noise'])
tl.to('#box4', 3, {
  bezier: {
    type: "soft",
    values: [{x: 10, y: -300}, {x: -30, y: -320}, {x: -40, y: -310}, {x: 30, y: -320}, {x: 0, y: -300}, {x: 20, y: -310}, {x: -0, y: -280}, {x: -40, y: -310}, {x: 20, y: -290}, {x: 0, y: -300}]
  },
  ease: Linear.easeNone
})
tl.call(changeText, ['gravity simulations'])
tl.to('#box4', 2, {
  y: 0,
  ease: Bounce.easeOut
})
tl.to(box, 1, {
  autoAlpha: 1, 
  ease:  Power3.easeOut
})
  
  return tl;
}


function flocking() {
  var tl = new TimelineMax(),
    box = document.querySelectorAll(".box");
  
  tl.add("startFlockOne")
  tl.add("startFlockTwo")
  tl.call(changeText, ['flocking simulations'])
  tl.to('#box1', 1.5, {
    bezier: {
    type: "soft",
    values: [{x: 55, y: -130}, {x: 15, y: -190}, {x: 135, y: -250}, {x: 165, y: -180}, {x: 320, y: -50}, {x: 0, y:0}]
  },
  ease: Linear.easeNone
  }, "startFlockOne")
    tl.to('#box2', 1.5, {
    bezier: {
    type: "soft",
    values: [{x: -100, y: -130}, {x: -140, y: -190}, {x: -20, y: -250}, {x: 10, y: -180}, {x: 165, y: -50}, {x: 0, y:0}]
  },
  ease: Linear.easeNone
  }, "startFlockOne")
  tl.to('#box3', 1.5, {
    bezier: {
    type: "soft",
    values: [{x: -145, y: -190}, {x: -185, y: -250}, {x: -65, y: -310}, {x: 55, y: -240}, {x: 120, y: -110}, {x: 0, y:0}]
  },
    ease: Linear.easeNone
  }, "startFlockOne")
  tl.to('#box4', 1.5, {
    bezier: {
    type: "soft",
    values: [{x: -255, y: -130}, {x: -295, y: -190}, {x: -175, y: -250}, {x: -55, y: -180}, {x: 10, y: -50}, {x: 0, y:0}]
  },
    ease: Linear.easeNone
  }, "startFlockOne")
  
  
  tl.to('#box5', 1.5, {
    bezier: {
    type: "soft",
    values: [{x: 160, y: 160}, {x: 0, y: 160}, {x: -90, y: 110}, {x: 0, y: 0}]
  },
    ease: Linear.easeNone
  }, "startFlockOne")
  tl.to('#box6', 1.5, {
    bezier: {
    type: "soft",
    values: [{x: 60, y: 140}, {x: 0, y: 140}, {x: -110, y: 90}, {x: 0, y: 0}]
  },
    ease: Linear.easeNone
  }, "startFlockOne")  
  tl.to('#box7', 1.5, {
    bezier: {
    type: "soft",
    values: [{x: 20, y: 120}, {x: -70, y: 110}, {x: -70, y: 80}, {x: 0, y: 0}]
  },
    ease: Linear.easeNone
  }, "startFlockOne")  
  return tl;
}

let fractalAnimation = function fractal() {
  var tl = new TimelineMax(),
    box = document.querySelectorAll(".box");
    tl.add('beginFractal')
    tl.add('moveFractal')
    tl.set(box, {
    opacity: 0.5,
    immediateRender: false
  }, 'beginFractal')
  
  tl.call(changeText, ['fractals'])

  tl.to(box, .5, {
      y: -150
  })
    tl.to(box, .1, {
      border: "2px solid #0D8C76",
    })
  
  tl.to('#box4', .5, {
      scale: 4      
  }, 'beginFractal')
  
  tl.staggerTo(['#box3', '#box5'], .5, {
      scale: 2,
  }, 'moveFractal')
  
  tl.to('#box3', .5, {
      x: 0
  }, 'moveFractal')
  
  tl.to('#box5', .5, {
      x: 0
  }, 'moveFractal')
  
  tl.to('#box2', .5, {
    x: 75
  }, 'moveFractal')
  
  tl.to('#box6', .5, {
    x: -75
  }, 'moveFractal')
  
  tl.to('#box1', .5, {
    x: 75
  }, 'moveFractal')
  
  tl.to('#box7', .5, {
    x: -75
  }, 'moveFractal')
   
  tl.call(changeText, ['much more'])

  return tl;
}

var master = new TimelineMax();
var box = document.querySelectorAll(".box");
var firstBox = document.querySelectorAll(".firstBox");
master.set(['#learnMoreButton', box], {
  autoAlpha: 0,
})
master.set(firstBox, {
  autoAlpha: 100,
})
master.add(basicPhysics());
master.add(flocking());
master.add(fractalAnimation(), "+= 1")
master.to(box, 1, {
  autoAlpha: 0,
  ease: Bounce.easeIn
}, "+= 0.5");
master.set('#learnMoreButton', {
    autoAlpha: 100,
});