// Slider Styling

const AllSlides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(ind) {
  AllSlides.forEach((item, i) => {
    if (i == ind) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

setInterval(() => {
  currentSlide++;
  if (currentSlide == AllSlides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}, 5000);

showSlide(0);

// Block Animation

const blocks = document.querySelectorAll('.block');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'appear .7s linear forwards';
    }
  });
});

blocks.forEach((block) => observer.observe(block));



// Sidebar

const sidebar = document.querySelector(".sidebar");

function openSidebar() {
  sidebar.style.right = "0";
}
function closeSidebar() {
  sidebar.style.right = "-200%";
}

//Dropdown

document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggles = document.querySelectorAll(".sidebar .dropdown-toggle");

  dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", (event) => {
          event.preventDefault();
          const dropdownMenus = document.querySelectorAll(".sidebar .dropdown-menu");
          dropdownMenus.forEach((menu) => {
              if (menu !== toggle.nextElementSibling) {
                  menu.style.display = "none";
              }
          });
          const dropdownMenu = toggle.nextElementSibling;
          if (dropdownMenu) {
              const isVisible = dropdownMenu.style.display === "flex";
              dropdownMenu.style.display = isVisible ? "none" : "flex";
          }
      });
  });
});
