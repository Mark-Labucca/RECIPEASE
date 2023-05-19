let profOn = document.querySelector(".profile")
let toggle = document.querySelector(".prof-toggle")
let close = document.querySelector(".close")
let editProf = document.querySelector(".edit-prof")
let resetPass = document.querySelector(".reset")
let toggleEdit = document.querySelector(".toggle-edit")
let toggleReset = document.querySelector(".toggle-reset")
let cancel = document.querySelector(".cancel")
let save = document.querySelector(".save")
let cancel1 = document.querySelector(".cancel1")
let save1 = document.querySelector(".save1")
let back = document.querySelector(".fa-chevron-left")
let back1 = document.querySelector(".back1")
let wrap = document.querySelector(".wrapper-form")
let wrap1 = document.getElementById("wrapper-form")
let savePop = document.querySelector(".save-container")
let savePop1 = document.getElementById("save-container")
let btnClose = document.querySelector(".btnPop")
let btnClose1 = document.querySelector(".btnPop1")
let filterIcon = document.querySelector(".filter-icon")
let filter = document.querySelector(".filter-container")
let filterReset = document.getElementById("filterReset")
let filterApply = document.getElementById("filterApply")

profOn.addEventListener("click", () => {
    toggle.style.display="block";
    profOn.style.display="flex";
})

close.addEventListener("click", ()=> {
    toggle.style.display="none";
    profOn.style.display="flex";
})

editProf.addEventListener("click", () => {
    toggleEdit.style.display="block";
    toggle.style.display="none";
    wrap.style.display="flex";
    savePop.style.display="none";
})

resetPass.addEventListener("click", () => {
    toggleReset.style.display="block";
    toggle.style.display="none";
    wrap1.style.display="flex";
    savePop1.style.display="none";
})

cancel.addEventListener("click", () => {
    toggleEdit.style.display="none";
})


save.addEventListener("click", function(event) {
    event.preventDefault();
  
    if (wrap.checkValidity()) {
      wrap.style.display="none";
      savePop.style.display="block";
    } else {
      alert("Form is invalid. Please fill in all required fields.")
    }
  });

cancel1.addEventListener("click", () => {
    toggleReset.style.display="none";
})

save1.addEventListener("click", () => {
    wrap1.style.display="none";
    savePop1.style.display="block";
})


back.addEventListener("click", () => {
    toggleEdit.style.display="none";
})

back1.addEventListener("click", () => {
    toggleReset.style.display="none";
})

btnClose.addEventListener("click", () => {
    toggleEdit.style.display="none";
})

btnClose1.addEventListener("click", () => {
    toggleReset.style.display="none";
})

filterIcon.addEventListener("click", () => {
    filterIcon.style.display="flex";
    filter.style.display="block";
})

filterReset.addEventListener("click", () => {
    filter.style.display="none";
})

filterApply.addEventListener("click", () => {
    filter.style.display="none";
})

// Meal Planner TabLinks

function openTabs(evt, day) {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("meal-plan-wrapper");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace("show", "");
    }
    document.getElementById(day).style.display = "flex";
    evt.currentTarget.className += " show";
}