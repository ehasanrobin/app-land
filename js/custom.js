    // annual and monthly buttons active class
 let buttons = document.querySelectorAll(".btn-pkg");


 buttons.forEach(value => value.addEventListener("click",function(){
    
    
    buttons.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
 }))


  let boxs = document.querySelectorAll(".slidedown-box");

  boxs.forEach(box => box.addEventListener("click",function(){
      
      boxs.forEach(box => box.classList.remove("slide"))
    this.classList.add("slide");
  }))

 $(document).ready(function(){
   
    $(".slider").slick()
          
          
 })