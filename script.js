const hamburger = document.querySelector(".hamburger");
const navGroups = document.querySelectorAll(".nav-group");
const headerNav = document.querySelector(".header-nav");

const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

const toggleMenu = () => {
  hamburger.classList.toggle("active");
  headerNav.classList.toggle("open");
  document.body.classList.toggle("over-hide");

  navGroups.forEach((nav) => nav.classList.remove("open"));
};

hamburger.addEventListener("click", toggleMenu);

headerNav.addEventListener("click", (e) => {
  const clickedInside = e.target.closest(".nav-wrapper");
  if (!clickedInside) {
    toggleMenu();
  }
});

if (isTouchDevice) {
  navGroups.forEach((navGroup) => {
    navGroup.addEventListener("click", () => {
      if (window.innerWidth > 768) {
      navGroups.forEach(nav => nav.classList.remove("open"));
    }
      navGroup.classList.toggle("open");
    });
  });
} else {
  navGroups.forEach((navGroup) => {
    navGroup.addEventListener("mouseenter", () => {
      navGroup.classList.add("open");
    });

    navGroup.addEventListener("mouseleave", () => {
      navGroup.classList.remove("open");
    });
  });
}
