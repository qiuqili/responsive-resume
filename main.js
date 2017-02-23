var tl = new TimelineLite();
tl.staggerFrom("img,h1,h2,.link",1,{scale:0,opacity:0,y:-100,ease:Back.easeInOut},0.1)
  .from(".group",1,{opacity:0,y:-100,ease:Bounce.easeOut},"0.8")
  .staggerFrom(".line,.up,.down",1.5,{scale:0,opacity:0,y:-100,ease:Bounce.easeOut},0.1,"1");
