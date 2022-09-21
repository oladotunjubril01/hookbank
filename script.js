const hamburger = document.querySelector(".hamburger")
const collapseMenu = document.querySelector(".collapsed-menu")

hamburger.addEventListener("click", () =>{
    if (collapseMenu.classList.contains('block')){
      collapseMenu.classList.remove('block')
    } else {
      collapseMenu.classList.add('block');
    }
}) 