window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.height = "30px";
    document.getElementById("linkreduce").style.fontSize = "14px";
    document.getElementById("linkreuse").style.fontSize = "14px";
    document.getElementById("linkrecycle").style.fontSize = "14px";
    document.getElementById("linksugestions").style.fontSize = "14px";
    document.getElementById("links").style.marginLeft = "4.3%";
    document.getElementById("links").style.paddingTop = "0.1%";
    document.getElementById("navbar").style.paddingBottom = "0.1%";
  } else {
    document.getElementById("logo").style.height = "59px";
    document.getElementById("linkreduce").style.fontSize = "28px";
    document.getElementById("linkreuse").style.fontSize = "28px";
    document.getElementById("linkrecycle").style.fontSize = "28px";
    document.getElementById("linksugestions").style.fontSize = "28px";
    document.getElementById("links").style.marginLeft = "10.3%";
    document.getElementById("links").style.paddingTop = "0.5%";
    document.getElementById("navbar").style.paddingBottom = "0.8%";
  }
}