

let nav_heading = document.querySelector("#nav_heading");

let header_sect = document.querySelector("#header_sect");

let header_height = header_sect.offsetHeight;

let hero_id = document.querySelector("#hero_id");

hero_id.style.marginTop = header_height + "px";



// let hero_heading = document.querySelector("#hero_heading");


window.addEventListener("scroll", function(){
    if(window.scrollY > 1){
        nav_heading.classList.add("d_none");
        hero_heading.classList.add("d_block");
    }else(
        nav_heading.classList.remove("d_none"),
        hero_heading.classList.remove("d_block")
    )
})



// window.addEventListener("scroll", function(){
//     if(window.scrollY > 1){
        
//         hero_heading.classList.add("d_block");
//     }else(
        
//         hero_heading.classList.remove("d_block")
//     )
// })