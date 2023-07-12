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
