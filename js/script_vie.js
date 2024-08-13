function reveal() {
    let reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
        let element_top = reveals[i].getBoundingClientRect().top;
  
        if (element_top < 320) {
            reveals[i].classList.add("active");
        } 
        else {
            reveals[i].classList.remove("active");
        }
    }

    let container_hello = document.getElementById("container_hello");
    let ctn_hello_bottom = container_hello.getBoundingClientRect().bottom;

    if(ctn_hello_bottom < 400){
        document.getElementById("title").classList.add("active");   
    }
    else{
        document.getElementById("title").classList.remove("active");   
    }
}
  
window.addEventListener("scroll", reveal, {passive: true});
  