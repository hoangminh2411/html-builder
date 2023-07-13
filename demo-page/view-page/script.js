
const splitButton = document.querySelector("#split-btn");
const leftTab = document.querySelector("#split-left");

splitButton.addEventListener("click", onSplitBtnClick)

function onSplitBtnClick () {
  if (leftTab.className.includes('list-split'))
  leftTab.className = "hidden-aside left-panel"
  else   leftTab.className = "list-split left-panel"
}


//View all btn comment
const DeskComment = document.querySelector("#desk-comment")

const allComments =  DeskComment.querySelectorAll("[data-key=comment]");
const viewAllBtn =  document.querySelector("#view-all-btn-comment")
    if (allComments.length > 1){
     viewAllBtn.style.visibility = "visible";
    }
viewAllBtn.addEventListener("click", onViewAllCommentClick)

function onViewAllCommentClick () {


  if (viewAllBtn.className.includes('hide'))
  {
    Array.from(allComments).map((comment,index)=>{
       if(index > 0) comment.setAttribute("hidden",true)
      })


      viewAllBtn.className = "view-all-btn"
      viewAllBtn.innerHTML = "View All"

  }
  else {  
    Array.from(allComments).map((comment,index)=>{ 
      if(index > 0) comment.removeAttribute("hidden") })
      viewAllBtn.className = "view-all-btn hide"
      viewAllBtn.innerHTML = "Hide"

}
}
const viewComponent = document.querySelectorAll('.editable').forEach((Element)=>{
  const buttonEdit =  Element.querySelector('.icon-edit')
  let btnCancle = Element.querySelector(".button-cancle")
  buttonEdit.addEventListener('click',handleEditMode )
  btnCancle.addEventListener('click',handleEditMode )
  function handleEditMode() {
  
  Element.classList.toggle("isViewing")

  console.log("viewComponent",viewComponent)
}
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
//get the cancel button
var cancelBtn = document.querySelector("#buttonCloseDialog");
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // ADD THIS LINE
    document.body.style.height = "100%"; // ADD THIS LINE
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // ADD THIS LINE
    document.body.style.height = "auto"; // ADD THIS LINE
}
cancelBtn.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // ADD THIS LINE
    document.body.style.height = "auto"; // ADD THIS LINE
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // ADD THIS LINE
    document.body.style.height = "auto"; // ADD THIS LINE
  }
}

