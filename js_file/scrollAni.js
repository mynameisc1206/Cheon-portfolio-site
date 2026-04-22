document.addEventListener("DOMContentLoaded", () => {
  let observerOptions = {
    threshold: 0.1 
  };

  let observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (window.innerWidth > 480) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal"); 
        } else {
          entry.target.classList.remove("reveal");
        }
      } else {
        entry.target.classList.add("reveal");
      }
    });
  };

  let observer = new IntersectionObserver(observerCallback, observerOptions);
  let revealElements = document.querySelectorAll(".point .inner");

  revealElements.forEach((el) => {
    observer.observe(el);
  });
});