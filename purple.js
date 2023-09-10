
//scroll navbar to have a background at a specific height


document.addEventListener("scroll",() =>{ 
    var header = document.querySelector("header"); 

    if (window.scrollY > 0) { 
        header.classList.add ("scrolled")
    } else {
        header.classList.remove ("scrolled")
    }
});


// scroll to the top arrow
//for arrrow to scroll to the top
let mybutton = document.getElementById("myBtn");

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
})
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//SCROLL ARROW ENDS


 // for menubtn
            
 var menubar = document.getElementById('menubar');
 var navbar = document.getElementById('navbar');

 menubar.addEventListener ('click', function(){
    
     navbar.classList.toggle('mobile-menu');
 })
 function closeMenu(){
     navbar.classList.remove('mobile-menu');
 }

 // for fixed navbar
 window.onscroll = () =>{
     menubar.classList.remove('fa-times');
     navbar.classList.remove('mobile-menu');

     if(window.scrollY > 60){
       document.querySelector('#scroll-top').classList.add('mobile-menu');
     }else{
       document.querySelector('#scroll-top').classList.remove('mobile-menu');
     }
   
   }


//         // for faq

        var questions = document.querySelectorAll(".faq-question");
        var i;

        for (i = 0; i < questions.length; i++) {
            questions[i].addEventListener("click", function () {

                this.classList.toggle("active");

                var body = this.nextElementSibling;
                if (body.style.display === "block") {
                    body.style.display = "none";
                } 
                else {
                    body.style.display = "block";
                }
            });
        } 

       


        //carousel section
        $('.carousel').slick({
            centerMode: true,
            centerPadding: '90px',
            // arrow:true,
            autoplay: true,
            autoplaySpeed: 1500,
            draggable: true,
            focusOnSelect: true,
            cssEase: "ease",
            slidesToShow: 3,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 900,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 600,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }
            ]
          });