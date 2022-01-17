
const miniproject = document.querySelectorAll(".mini-project")

miniproject.forEach(project =>{
    project.addEventListener("click",function(){
       const img= this.querySelector(".mini-project_img")
       document.body.classList.toggle("dark")
      img.classList.toggle("enlarge")
      
      
   
})
})



   
   
   

