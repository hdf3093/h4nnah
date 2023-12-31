var colour="#FFFFFF";
var sparkles=200;
var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var tiny=new Array();
var star=new Array();
var starv=new Array();
var starx=new Array();
var stary=new Array();
var tinyx=new Array();
var tinyy=new Array();
var tinyv=new Array();

window.onload=function() { if (document.getElementById) {
  var i, rats, rlef, rdow;
  for (var i=0; i<sparkles; i++) {
    var rats=createDiv(3, 3);
    rats.style.visibility="hidden";
    document.body.appendChild(tiny[i]=rats);
    starv[i]=0;
    tinyv[i]=0;
    var rats=createDiv(5, 5);
    rats.style.backgroundColor="transparent";
    rats.style.visibility="hidden";
    var rlef=createDiv(1, 5);
    var rdow=createDiv(5, 1);
    rats.appendChild(rlef);
    rats.appendChild(rdow);
    rlef.style.top="2px";
    rlef.style.left="0px";
    rdow.style.top="0px";
    rdow.style.left="2px";
    document.body.appendChild(star[i]=rats);
  }
  set_width();
  sparkle();
}}

function sparkle() {
  var c;
  if (x!=ox || y!=oy) {
    ox=x;
    oy=y;
    for (c=0; c<sparkles; c++) if (!starv[c]) {
      star[c].style.left=(starx[c]=x)+"px";
      star[c].style.top=(stary[c]=y)+"px";
      star[c].style.clip="rect(0px, 5px, 5px, 0px)";
      star[c].style.visibility="visible";
      starv[c]=50;
      break;
    }
  }
  for (c=0; c<sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}

function update_star(i) {
  if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i]+=1+Math.random()*3;
    if (stary[i]<shigh+sdown) {
      star[i].style.top=stary[i]+"px";
      starx[i]+=(i%5-2)/5;
      star[i].style.left=starx[i]+"px";
    }
    else {
      star[i].style.visibility="hidden";
      starv[i]=0;
      return;
    }
  }
  else {
    tinyv[i]=50;
    tiny[i].style.top=(tinyy[i]=stary[i])+"px";
    tiny[i].style.left=(tinyx[i]=starx[i])+"px";
    tiny[i].style.width="2px";
    tiny[i].style.height="2px";
    star[i].style.visibility="hidden";
    tiny[i].style.visibility="visible"
  }
}

function update_tiny(i) {
  if (--tinyv[i]==25) {
    tiny[i].style.width="1px";
    tiny[i].style.height="1px";
  }
  if (tinyv[i]) {
    tinyy[i]+=1+Math.random()*3;
    if (tinyy[i]<shigh+sdown) {
      tiny[i].style.top=tinyy[i]+"px";
      tinyx[i]+=(i%5-2)/5;
      tiny[i].style.left=tinyx[i]+"px";
    }
    else {
      tiny[i].style.visibility="hidden";
      tinyv[i]=0;
      return;
    }
  }
  else tiny[i].style.visibility="hidden";
}

document.onmousemove=mouse;
function mouse(e) {
  set_scroll();
  y=(e)?e.pageY:event.y+sdown;
  x=(e)?e.pageX:event.x+sleft;
}

function set_scroll() {
  if (typeof(self.pageYOffset)=="number") {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body.scrollTop || document.body.scrollLeft) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
	sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

window.onresize=set_width;
function set_width() {
  if (typeof(self.innerWidth)=="number") {
    swide=self.innerWidth;
    shigh=self.innerHeight;
  }
  else if (document.documentElement && document.documentElement.clientWidth) {
    swide=document.documentElement.clientWidth;
    shigh=document.documentElement.clientHeight;
  }
  else if (document.body.clientWidth) {
    swide=document.body.clientWidth;
    shigh=document.body.clientHeight;
  }
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height+"px";
  div.style.width=width+"px";
  div.style.overflow="hidden";
  div.style.backgroundColor=colour;
  return (div);
}
////////

{/* <script type="text/javascript">
document.getElementById("enter").onclick = function () {
     location.href = "enterscene.html";
};</script> */}




document.addEventListener('DOMContentLoaded', function () {
  var prayforImage = document.getElementById('prayfor');
  var hideImage = document.querySelector('.hide');
  var cyberwarImage = document.getElementById('cyberwar');
  var replaceImage = document.getElementById('cyberwar2');

  var isHidden = true;
  var isCyberwarHidden = true;

  prayforImage.addEventListener('click', function () {
    hideImage.style.display = isHidden ? 'block' : 'none';
    isHidden = !isHidden;

    // Hide both cyberwar and cyberwar2 when prayfor is clicked
    replaceImage.style.display = 'none';
    cyberwarImage.style.display = 'block';

    // Reset the states of cyberwar and cyberwar2
    isCyberwarHidden = true;
  });

  cyberwarImage.addEventListener('click', function () {
    replaceImage.style.display = 'block';
    cyberwarImage.style.display = 'none'; // Hide cyberwar
  });

  replaceImage.addEventListener('click', function () {
    replaceImage.style.display = 'none';
    cyberwarImage.style.display = 'block';

    // Reset the states of cyberwar and cyberwar2
    isHidden = true;
    isCyberwarHidden = true;
  });
});





document.addEventListener('DOMContentLoaded', function () {
  var loveGif1 = document.getElementById('loveGif1');
  var loveGif2 = document.getElementById('loveGif2');

  var loveGifs = [loveGif1, loveGif2];
  var currentLoveGifIndex = 0;

  // Show loveGif2 initially
  loveGif1.style.display = 'none';
  loveGif2.style.display = 'block';

  loveGif1.addEventListener('click', function () {
    loveGifs.forEach(function (gif) {
      gif.style.display = 'none';
    });

    currentLoveGifIndex = (currentLoveGifIndex + 1) % loveGifs.length;
    loveGifs[currentLoveGifIndex].style.display = 'block';
  });

  loveGif2.addEventListener('click', function () {
    loveGifs.forEach(function (gif) {
      gif.style.display = 'none';
    });

    currentLoveGifIndex = (currentLoveGifIndex + 1) % loveGifs.length;
    loveGifs[currentLoveGifIndex].style.display = 'block';
  });
});





var FilePreview = class extends HTMLElement {
  constructor() {
    super();
    this.init();
  }
  init() {
    switch (this.getAttribute("type")) {
      case "image":
        const img = document.createElement("img");
        img.src = this.getAttribute("preview-src");
        this.appendChild(img);
        break;
      case "video":
        const video = document.createElement("video");
        video.src = `${this.getAttribute("url")}#t=0.1`;
        video.controls = true;
        video.preload = "metadata";
        this.appendChild(video);
        video.addEventListener("pause", () => {
          if (!video.seeking) {
            this.classList.remove("is-expanded");
          }
        });
        video.addEventListener("play", () => {
          this.classList.add("is-expanded");
        });
        break;
      case "audio":
        const audio = document.createElement("audio");
        audio.src = this.getAttribute("url");
        audio.controls = true;
        this.appendChild(audio);
        break;
    }
    this.addEventListener("click", () => {
      switch (this.getAttribute("type")) {
        case "image":
          const img = this.querySelector("img");
          img.src = img.src == this.getAttribute("preview-src") ? this.getAttribute("full-src") : this.getAttribute("preview-src");
          img.addEventListener("load", () => {
            this.classList.toggle("is-expanded");
          }, { once: true });
          break;
      }
    });
    window.addEventListener("resize", () => {
    });
  }
};

