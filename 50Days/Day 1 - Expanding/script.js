 const panels = document.querySelectorAll('.panel');
 // variable to accept the class/id of a html/css document


 panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
 })
 //Panels. checks each panel and when clicked adds the active class/id to that one

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
//this function removes the class/id of active of the previous panel