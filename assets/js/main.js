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

// Show And Hide Search Navbar
$('.search-open').on('click', function(){
  $('.search-form').addClass('active');
  $('.overlay-m').fadeIn(600);
});

// SideBar
$('.side-open').on('click', function(){
  $('.links').addClass('active');
  $('.overlay-m').fadeIn(600);
});

$('.close').on('click', function(){
  $('.links').removeClass('active');
  $('.overlay-m').fadeOut(500);
});

// Toggle SideBar Filter
$(".open-side-icon").on('click', function(){
  $(this).next(".side-filter-cards").addClass('open-side');
  $('.overlay-m').fadeIn(500);
})

// User Account SideBar
$('.user-link-open').on('click', function(){
  $('.side-links-con').addClass('open');
  $('.overlay-m').fadeIn(500);
})

// User Account filter
$('.filter-open').on('click', function(){
  $('.accordion-con').addClass('open');
  $('.overlay-m').fadeIn(500);
})

$('.overlay-m').on('click', function(){
  $('.search-form').removeClass('active');
  $('.links').removeClass('active');
  $(".side-filter-cards").removeClass('open-side');
  $('.side-links-con').removeClass('open');
  $('.accordion-con').removeClass('open');
  $(this).fadeOut(500);
});


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

  filterLoader(this)
});

$('.radio-box').click( function () {
  filterLoader(this)
});

// Filter Loader
function filterLoader(el){
  $(el).parents('.side-filter-cards').find('.load').fadeIn();
  $(el).parents('.side-filter-cards').find('.load-bg').fadeIn(200);
  $(el).parents('.account-section').find('.load').fadeIn();
  $(el).parents('.account-section').find('.load-bg').fadeIn(200);
  
  setTimeout(() =>{
    $(el).parents('.side-filter-cards').find('.load').fadeOut(200);
    $(el).parents('.side-filter-cards').find('.load-bg').fadeOut();
    $(el).parents('.account-section').find('.load').fadeOut(200);
    $(el).parents('.account-section').find('.load-bg').fadeOut();
  }, 700)
}

// let oldHref;
// verticale Or linear
$(document).on("change", ".select-filter", function () {
  
  if(this.options[this.selectedIndex].getAttribute('data-filter') == 'verticale'){
      $(this).parents('.filter-container').find('.cards-container').addClass('verticale');
      sessionStorage.setItem("filter", JSON.stringify('verticale'));
    } else{
      $(this).parents('.filter-container').find('.cards-container').removeClass('verticale');
      sessionStorage.setItem("filter", JSON.stringify('linear'));
  }

  // oldHref = document.location.href

});

let dataFilter = sessionStorage.getItem("filter");
let mySelect = document.querySelector('.select-filter');


$('a').on('click', function(){
  sessionStorage.setItem("filter", JSON.stringify('linear'));
})

$('.search-form').on('submit', function(){
  sessionStorage.setItem("filter", JSON.stringify('linear'));
})

if(dataFilter){
    filterClass = JSON.parse(dataFilter);
    
    // for(i = 0; i < mySelect.length; i++) {
    //   trend = mySelect[i];

    //   if (trend.getAttribute('data-filter') == filterClass) {
    //     console.log(trend);
    //     trend.selected = 'selected';
    //   }
    // }

    $('.select-filter').val(filterClass)
    $('.select-filter').trigger('change')

    $('.filter-container').find('.cards-container').addClass(filterClass);
    
  } else{
    $('.filter-container').find('.cards-container').removeClass('verticale');
  
}







//   $('.select-filter').on('change', function(){
// });








// Input Number
$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});