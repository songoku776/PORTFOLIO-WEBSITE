 function LightDarkMode() {
      const DarkMode = document.querySelector(".dark-mode i")
      const element = document.querySelectorAll("body,section,nav a")

      DarkMode.classList.toggle("fa-sun")
      DarkMode.classList.toggle("fa-moon")
      DarkMode.style.color = DarkMode.classList.contains("fa-moon") ? "white": "black";

      element.forEach(element =>
      element.classList.toggle("dark-mode-class")
      );
    }
     function morewrite(){
      onclick = true;
      document.getElementById("more").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, itaque praesentium ut eveniet facere molestiae repudiandae pariatur reiciendis ullam quaerat, enim debitis accusantium! Dolorem iusto modi ab quia sint facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, itaque praesentium ut eveniet facere molestiae repudiandae pariatur reiciendis ullam quaerat, enim debitis accusantium! Dolorem iusto modi ab quia sint facere. ";
    }
    