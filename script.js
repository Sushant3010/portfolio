function valueSetters() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#home span .child", { y: "100%" });
  gsap.set("#home .row img", { opacity: 0 });
}
function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (el) {
    //create two spans
    var parent = document.createElement("span");
    var child = document.createElement("span");

    //parent and child both sets their respective classes
    parent.classList.add("parent");
    child.classList.add("child");
    //span parent gets child and child gets el details
    child.innerHTML = el.innerHTML;
    parent.appendChild(child);
    //el replaces its value with parent span
    el.innerHTML = "";
    el.appendChild(parent);
  });
}
function loaderAnimation() {
  var tl = gsap.timeline();
  tl.from("#loader .child span", {
    x: 100,
    delay: 1,
    stagger: 0.2,
    duration: 2,
    ease: "Power3.easeInOut",
  })
    .to("#loader .parent .child", {
      y: "-100%",
      duration: 1,
      ease: "Circ.easeInOut",
    })
    .to("#loader", {
      height: 0,
      duration: 1,
      ease: "Circ.easeInOut",
    })
    .to("#green", {
      height: "100%",
      top: 0,
      delay: -0.5,
      duration: 1,
      ease: "Circ.easeInOut",
    })
    .to("#green", {
      height: "0%",
      top: 0,
      duration: 1,
      delay: -0.5,
      ease: "Circ.easeInOut",
      onComplete: function () {
        animateHomepage();
      },
    });
}
function animateText() {
  gsap.from(".end-heading", {
    duration: 1,
    x: -1200,
    delay: 9.3,
    ease: "Expo.easeInOut",
  });
}
animateText();
function animateHomepage() {
  var tl = gsap.timeline();

  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: "Expo.easeInOut",
  })
    .to("#home .parent .child", {
      y: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: "Expo.easeInOut",
    })
    .to("#home .row img", {
      opacity: 1,
      delay: -0.2,
      ease: "Expo.easeInOut",
    });
}
function locoInitialize() {
  document.addEventListener("DOMContentLoaded", () => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#home"),
      smooth: true,
    });
    window.addEventListener("load", () => {
      scroll.update();
    });
  });
}
revealToSpan();
valueSetters();
loaderAnimation();
locoInitialize();
