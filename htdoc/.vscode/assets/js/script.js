const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);

navLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    let targetHref = this.getAttribute("href");

    // Kiểm tra nếu người dùng đang ở trang hiện tại, không cần làm mới lại
    if (window.location.pathname !== targetHref) {
      // Nếu không phải trang hiện tại, chuyển hướng tới URL
      window.location.href = targetHref;
    } else {
      // Nếu đang ở trang đó, chỉ cần cuộn lên trên cùng (hoặc làm gì đó tùy ý)
      event.preventDefault(); // Ngừng hành động mặc định
      window.scrollTo(0, 0);  // Cuộn lên đầu trang
    }
  });
});
