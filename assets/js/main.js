// loader js
$(window).on("load", function () {
    $(".loader").delay(600).fadeOut(1000);
});

// Active Link
$(".navbar-m .links a").each(function () {
    if (window.location.href.includes($(this).attr("href"))) {
      $(this).addClass("active");
    }
});

// SideBar
// const showSideBar = document.querySelector('.coll-icon');
// const SideBar = document.querySelector('.links');

// showSideBar.addEventListener('click', ()=>{
//   SideBar.classList.toggle('active');
//   showSideBar.classList.toggle('active');
// });

// // Show And Hide Search Navbar
// let searchIcon = document.querySelector('.search-mobile');
// let searchBox = document.querySelector('.nav-search');

// searchIcon.addEventListener('click' , ()=>{
//   searchBox.classList.toggle('active');
//   searchIcon.classList.toggle('active');
// })

// Toggle dropDown
let dropMenu = document.querySelectorAll('.dropdown-active');

document.body.addEventListener('click', (e)=>{

  if(e.target.closest('.active-m') || e.target.classList.contains('active-m')){

    removeAllActive()
    closeAllDrop()

  } else if (e.target.classList.contains('show-drop') || e.target.closest('.show-drop')){

    removeAllActive()
    e.target.parentElement.classList.add('active-m');

    closeAllDrop();

    for(let i =0; i < dropMenu.length; i++){
      if(dropMenu[i].getAttribute('data-drop') == e.target.getAttribute('data-drop') || dropMenu[i].getAttribute('data-drop') == e.target.closest('.show-drop').getAttribute('data-drop')){
        dropMenu[i].classList.add('active-drop');
      }
    }

  } else{

    closeAllDrop()
    removeAllActive()
  }
})

function closeAllDrop(){
  dropMenu.forEach((drop) =>{
    drop.classList.remove('active-drop');
  })
}

function removeAllActive(){
  let activeM = document.querySelectorAll('.active-m');
  activeM.forEach((ac) =>{
    ac.classList.remove('active-m');
  });
}


// PassWord Show In Setting Page
const iconsPassSet = document.querySelectorAll('.pass-icon');

if(iconsPassSet){
  iconsPassSet.forEach((ic) =>{
    ic.addEventListener('click', function(){
      let input = ic.parentElement.querySelector('.input-me');
      showPassword(input, ic);
    });
  });
}

// Function To Show And Hide Password
function showPassword(input, icon){

  if(input.type == 'password'){
    input.setAttribute('type', 'text');
    icon.innerHTML = `<i class="fa-regular fa-eye"></i>`;
  } else{
    input.setAttribute('type', 'password');
    icon.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
  }
}

let isRtl = $('html[lang="ar"]').length > 0;


// select-2
// if($(".select-plugin")){
//   $(".select-plugin").select2({
//     dir: isRtl ? "rtl" : "ltr",
//     minimumResultsForSearch: Infinity,
//     dropdownCssClass: "dropdown-select-2",
//     });
// }

$(".select").select2({
  dir: isRtl ? "rtl" : "ltr",
  minimumResultsForSearch: Infinity,
});

$(".select-search").select2({
  dir: isRtl ? "rtl" : "ltr",
  minimumResultsForSearch: Infinity,
  theme: "custom-option-select-me"
});



// Code Modal
$(document).ready(function(){
  let codes = document.querySelectorAll(".code");

  $(".code-container .code").first().focus();
  codes.forEach((code, idx) => {
    code.addEventListener("keydown", (e) => {
      if (e.key >= 0 && e.key <= 9) {
        codes[idx].value = "";
        if([idx + 1] < codes.length){
            setTimeout(() => codes[idx + 1].focus(), 10);
        }
      } else if (e.key === "Backspace") {
        setTimeout(() => codes[idx - 1].focus(), 10);
      }
    });
  });

});

// favorite Icon
// let favIcons = document.querySelectorAll('.favorite-icon');

// favIcons.forEach((icon)=>{

//   icon.addEventListener('click', ()=>{
//     let ic = icon.querySelector('i')

//     if(ic.classList.contains('fa-regular')){
  
//       ic.classList.remove('fa-regular');
//       ic.classList.add('fa-solid');

//     } else {

//       ic.classList.add('fa-regular');
//       ic.classList.remove('fa-solid');

//     }

//   })

// });
