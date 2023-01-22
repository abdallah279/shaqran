// loader js
$(window).on("load", function () {
    $(".loader").delay(400).fadeOut(1000);
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

// dropDown stopPropagation
$(".dropdown-menu").click(function(e){
    e.stopPropagation();
});


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

// Normal Select To
$(".select").select2({
  dir: isRtl ? "rtl" : "ltr",
  minimumResultsForSearch: Infinity,
});

// Search Select To
$(".select-search").select2({
  dir: isRtl ? "rtl" : "ltr",
  minimumResultsForSearch: Infinity,
  theme: "custom-option-select-me"
});

// Filter Select To
$(".select-filter").select2({
  dir: isRtl ? "rtl" : "ltr",
  minimumResultsForSearch: Infinity,
  theme: "filter-m"
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


// Select All CheckBoxs
$( 'input[type="checkbox"]' ).click( function () {
  if($(this).is($('.check-all'))){
      var dataCheck = $(this).attr("data-check");
      $(`.${dataCheck} input[type="checkbox"]` ).prop('checked', this.checked)
  } else{

    if(this.closest('.check-boxs')){
      this.closest('.check-boxs').querySelector('.check-all').checked = false;
    }
  }
})

// Filter
let filterSelect = document.querySelector('.select-filter');
if(filterSelect){

  filterSelect.onchange = function(){
    if(filterSelect.options[filterSelect.selectedIndex].getAttribute('data-filter') == 'linear'){
        $('.cards-container').addClass('verticale');
    } else{
        $('.cards-container').removeClass('verticale');
    }
  }

}