function setRem(){document.documentElement.style.fontSize=innerWidth/20+"px"}setRem(),onresize=setRem;var gochan=document.querySelector(".gochan"),chan=document.querySelector(".chan");gochan.addEventListener("touchend",function(){chan.classList.toggle("channelstoggle")});var nav=document.querySelectorAll(".nav li"),navLen=nav.length;console.log(nav);for(var i=0;i<navLen;i++)nav[i].onclick=function(){this.classList.toggle("current")};var ad=document.querySelector(".ad"),close=document.querySelector(".ad span");close.onclick=function(){ad.outerHTML=""};