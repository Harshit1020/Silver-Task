window.addEventListener("load", (event) => {
    let dks = document.querySelector("#dakshin");
    dks.style.left = "10%";
    let mdj = document.querySelector("#modiji")
    mdj.style.right = "5%"
});

function VideoSlides() {
    let allSlides = document.querySelectorAll(".sld");
    allSlides = [...allSlides];
  
    var isHovered = null;
  
    allSlides.forEach(function (elem) {
        elem.addEventListener("mouseover", function (dets) {
            isHovered = "#opener" + dets.target.dataset.index;
            document.querySelector(isHovered).style.width = "100%";
        })
  
        elem.addEventListener("mouseleave", function (dets) {
            isHovered = "#opener" + dets.target.dataset.index;
            document.querySelector(isHovered).style.width = "0%";
        })
    });
  
    document.querySelector(".circle")
        .addEventListener("mousemove", function (dets) {
            var bndrectvals = document.querySelector(".circle").getBoundingClientRect()
            var xVal = dets.clientX - bndrectvals.x;
            var yVal = dets.clientY - bndrectvals.y;
  
            document.querySelector("#minicircle").style.top = yVal + "px";
            document.querySelector("#minicircle").style.left = xVal + "px";
            document.querySelector("#minicircle").style.boxShadow = "0 0 10px 3px #fff";
            document.querySelector("#minicircle").style.backgroundColor = "yellow";
        })
  
    document.querySelector(".circle")
        .addEventListener("mouseleave", function (dets) {
            document.querySelector("#minicircle").style.top = 50 + "%";
            document.querySelector("#minicircle").style.left = 50 + "%";
  
            document.querySelector("#minicircle").style.boxShadow = "none";
        })
  }

  VideoSlides()