document.querySelector('.dropdown-toggle').addEventListener('click', function () {
    this.classList.toggle('active');
  });


function setupMenu() {
    const menuToggleBtn = document.querySelector(".menuToggleBtn");
    const mobileMenu = document.querySelector(".mobileDropdownMenu");
    const closeBtn = document.querySelector(".closeBtn");
    const dropdownToggle = document.querySelector(".mobileDropdownMenu .dropdown-toggle");
  
    menuToggleBtn.addEventListener("click", () => {
      mobileMenu.style.display = "flex";
    });
  
    closeBtn.addEventListener("click", () => {
      mobileMenu.style.display = "none";
    });
  
    dropdownToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownToggle.classList.toggle("active");
    });
  
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !menuToggleBtn.contains(e.target)) {
        mobileMenu.style.display = "none";
        dropdownToggle.classList.remove("active");
      }
    });
  }
  
  setupMenu();


  function scrollSliderLeft() {
    document.getElementById("carSlider").scrollBy({ left: -350, behavior: "smooth" });
  }
  
  function scrollSliderRight() {
    document.getElementById("carSlider").scrollBy({ left: 350, behavior: "smooth" });
  }


  function scrollSliderLef() {
    const container = document.getElementById("oye");
    const scrollAmount = container.offsetWidth * 1.3; 
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }
  
  function scrollSliderRigh() {
    const container = document.getElementById("oye");
    const scrollAmount = container.offsetWidth * 1.3; 
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
  
  