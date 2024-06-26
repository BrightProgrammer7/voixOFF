document.addEventListener("DOMContentLoaded", function () {
  var e = [].slice.call(document.querySelectorAll("img.lazy"));
  if ("IntersectionObserver" in window) {
    let t = new IntersectionObserver(function (e, r) {
      e.forEach(function (e) {
        if (e.isIntersecting) {
          let r = e.target;
          (r.src = r.dataset.src), r.classList.remove("lazy"), t.unobserve(r);
        }
      });
    });
    e.forEach(function (e) {
      t.observe(e);
    });
  }
  window.livewire &&
    Livewire.hook("message.processed", (e, t) => {
      var r = [].slice.call(document.querySelectorAll("img.lazy"));
      if ("IntersectionObserver" in window) {
        let n = new IntersectionObserver(function (e, t) {
          e.forEach(function (e) {
            if (e.isIntersecting) {
              let t = e.target;
              (t.src = t.dataset.src),
                t.classList.remove("lazy"),
                n.unobserve(t);
            }
          });
        });
        r.forEach(function (e) {
          n.observe(e);
        });
      }
    });
});
