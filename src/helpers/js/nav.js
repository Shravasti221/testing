var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("scroll").style.top = "0";
    document.getElementById("scroll").style.backgroundColor = "black";
  } else {
    document.getElementById("scroll").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}
