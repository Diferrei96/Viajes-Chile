// Add a hover effect when one of the tabs is clicked
function smoothScroll(event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
}

// Form validation
function formValidation(event) {
  if (!this.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  this.classList.add("was-validated");
}

(function () {
  // Smooth Scroll
  $('a[href^="#"]').on("click", smoothScroll);

  $("#contact-content").load("contacto.html");

  // Form validation
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener("submit", formValidation, false);
  });
})();
