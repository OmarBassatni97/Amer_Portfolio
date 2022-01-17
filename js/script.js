
// const miniproject = document.querySelectorAll(".mini-project")

// miniproject.forEach(project =>{
//     project.addEventListener("click",function(){
//        const img= this.querySelector(".mini-project_img")
//        document.body.classList.toggle("dark")
//       img.classList.toggle("enlarge")
      
      
   
// })
// })

// $('#myInput').click(function () {
//     $('#myModal').modal("toggle")
//   })

//   $('#close').click(function () {
//     $('#myModal').modal("toggle")
//   })



   
   var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll("#myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.forEach(img =>{
    img.addEventListener("click",function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    })
}) 



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
   

