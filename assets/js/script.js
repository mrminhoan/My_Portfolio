'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar toggle functionality for mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

// page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const target = this.textContent.trim().toLowerCase();

    pages.forEach(function (page) {
      page.classList.toggle("active", page.dataset.page === target);
    });

    navigationLinks.forEach(function (navLink) {
      navLink.classList.toggle("active", navLink === link);
    });

    window.scrollTo(0, 0);
  });
});
