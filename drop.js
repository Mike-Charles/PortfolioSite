// document.getElementById("menubutton");
// document.getElementById("menulist");

// menulist.style.display = "none"
// menubutton.addEventListener("click", () => {
//     if(menulist.style.display === "flex"){
//         menulist.style.display = "none";
//         menulist.classList.remove("show");
//     }
//     else{
//         menulist.style.display = "flex";
//         menulist.classList.add("show");
//     }
// });
document.getElementById("menubutton");
document.getElementById("menuList");
document.getElementById("SearchBox");
document.getElementById("containerr")

menuList.style.display = "none";
menubutton.addEventListener("click", () => {
    if(menuList.style.display === "block"){
        menuList.style.display = "none";
        SearchBox.style.marginTop = "0px"
        containerr.style.height = "auto"
    }else{
        menuList.style.display = "block";
        
        SearchBox.style.marginTop = "118px"
        containerr.style.height = "auto"
    }
});