window.addEventListener('load', () =>{
    const preload=document.querySelector('.preload');
    preload.classList.add('preload-finish');
  
  });
  
  var prevScrollpos = window.pageYOffset;
          window.onscroll = function() {
  
          var mybutton = document.getElementById("myBtn");
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              mybutton.style.display = "block";
          } else {
              mybutton.style.display = "none";
          }
  
          }
        
          var modal = document.getElementById("myModal");

          // Get the button that opens the modal
          var btn = document.getElementById("pin");
          
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          
          // When the user clicks on the button, open the modal
          btn.onclick = function() {
            modal.style.display = "block";
          }
          
          // When the user clicks on <span> (x), close the modal
          span.onclick = function() {
            modal.style.display = "none";
          }
          
          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
  
  // When the user clicks on the button, scroll to the top of the document
          function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          }
  
  
          function openNav() {
          document.getElementById("myNav").style.width = "100%";
          }
  
          function closeNav() {
          document.getElementById("myNav").style.width = "0%";
          }
  
          function closeNav() {
          document.getElementById("myNav").style.width = "0%";
          }
  
          var trash1 = document.getElementById("main5-1");
          var trash2 = document.getElementById("main5-2");
          var trash3 = document.getElementById("main5-3");
          var trash4 = document.getElementById("main5-4");
          var trash5 = document.getElementById("main5-5");

          $(document).ready(function(){
            $("#main5-1").click(function(){
              trash1.style.display = "none";
            });
          });

          $(document).ready(function(){
            $("#main5-2").click(function(){
              trash2.style.display = "none";
            });
          });

          $(document).ready(function(){
            $("#main5-3").click(function(){
              trash3.style.display = "none";
            });
          });


          $(document).ready(function(){
            $("#main5-4").click(function(){
              trash4.style.display = "none";
            });
          });


          $(document).ready(function(){
            $("#main5-5").click(function(){
              trash5.style.display = "none";
            });
          });



         
          gsap.registerPlugin(ScrollTrigger);
  

            gsap.to(".sea",{

              scrollTrigger: {
                    trigger: ".main",
                     // pin the trigger element while active
                    start: "bottom 50%", // when the top of the trigger hits the top of the viewport
                    end: "+=100px", // end after scrolling 500px beyond the start
                    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                    markers: true,
                  },
                  opacity:1,
                  ease:"none",
                  duration:0.1,
                });

            
      
  
  
         
  
      $(window).mousemove(function(evt){
          var pagex=evt.pageX;
          var pagey=evt.pageY;
  
  
          $(".fish small").css("transform","translateX("+(pagex/-20+50)+"px)")
          $(".fish medium").css("transform","translateX("+(pagex/-10+50)+"px)")
          $(".fish large").css("transform","translateX("+(pagex/-15+20)+"px)")
          $(".main4-pic1").css("transform","translateX("+(pagex/-40+20)+"px)")
          // $(".main4-text1").css("transform","translateX("+(pagex/-40+20)+"px)")
      })
  

      $('#1').waypoint(function() {
        increment(1, 20);
      }, {offset: '100%'});
  
      function increment(elem, finalVal) {
        var currVal = parseInt(document.getElementById(elem).innerHTML, 10);
        if (currVal < finalVal) {
          currVal++;
          document.getElementById(elem).innerHTML = currVal + "";
      
          setTimeout(function() {
            increment(elem, finalVal);
          }, 40)
        }
      };
