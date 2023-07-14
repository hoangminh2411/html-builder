function autocomplete(autocomplete, arr,mode) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  console.log(`autocomplete`,autocomplete)

  const inp = autocomplete.querySelector(".myInput")
  const container = autocomplete.querySelector(".input-container")
  const value = autocomplete.querySelector(".value-input")


  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  function init () {
      var autoCompleteList, item, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      // if (!val) { return false;}
      currentFocus = -1;
      console.log(`~~~~ val`,val)
      /*create a DIV element that will contain the items (values):*/
      autoCompleteList = document.createElement("DIV");
      autoCompleteList.setAttribute("id", this.id + "autocomplete-list");
      autoCompleteList.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(autoCompleteList);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          item = document.createElement("DIV");
          if (value.value && mode!='single' && JSON.parse(value.value).includes(arr[i])) {
            console.log(`~~~~~~~~~selected`)
            item.className = "selected"
          }
          /*make the matching letters bold:*/
          item.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          item.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          item.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          item.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
          
              const itemVal= this.getElementsByTagName("input")[0].value;
              if (mode=='single') {
                value.value=this.getElementsByTagName("input")[0].value
                inp.value=value.value;
              }
              else if (!value.value) {
                inp.value = ``
                value.value=JSON.stringify([this.getElementsByTagName("input")[0].value])
              }
              else {
              inp.value = ``
               let oldVal = JSON.parse(value.value)
                oldVal.push(this.getElementsByTagName("input")[0].value)

                console.log(`oldVal`,oldVal)
               value.value = JSON.stringify(oldVal);
              }
              console.log(`autoComplete mode`,mode)
              if (mode !='single') {let chip = document.createElement("DIV");
              chip.className = "chip"
              chip.innerHTML = 
              `<span>${this.getElementsByTagName("input")[0].value}</span><svg class="delete-icon"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>`
              container.insertBefore(chip,inp);
              console.log(`value`,value.value);
              // assign delete onclick
              const deleteBtn= chip.querySelector('svg');
              console.log(`deleteBtn`,deleteBtn);
              deleteBtn.addEventListener("click", function() {
                let curArr = JSON.parse(value.value);
                if(curArr.includes(itemVal)) {
                  curArr = curArr.filter(e => e !== itemVal);
                }
                value.value = JSON.stringify(curArr);
                chip.remove();
              })}

          
              /*close the list of autocompleted values,
              
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          autoCompleteList.appendChild(item);
        }
      
  }
  }
  inp.addEventListener("input", init);
  inp.addEventListener("focus", init);

  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var autocompleteList = document.getElementById(this.id + "autocomplete-list");
      if (autocompleteList) autocompleteList = autocompleteList.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(autocompleteList);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(autocompleteList);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (autocompleteList) autocompleteList[currentFocus].click();
        }
      }
  });

  function addActive(autocompleteList) {
    /*a function to classify an item as "active":*/
    if (!autocompleteList) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(autocompleteList);
    if (currentFocus >= autocompleteList.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (autocompleteList.length - 1);
    /*add class "autocomplete-active":*/
    autocompleteList[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(autocompleteList) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < autocompleteList.length; i++) {
      autocompleteList[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    console.log(`onClose`,elmnt,elmnt != inp)
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var autocompleteList = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < autocompleteList.length; i++) {
      if (elmnt != autocompleteList[i] && elmnt != inp) {
        autocompleteList[i].parentNode.removeChild(autocompleteList[i]);
      }
    }
  }

  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    console.log(`e.target`, e.target , inp ,e.target != inp )
    if (e.target.className != "myInput") closeAllLists(e.target);
  });
}

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/

const allac = document.querySelectorAll(".autocomplete");
Array.from(allac).forEach((Element) => {
  const config = Element.querySelector('.autocomplete-config');
  const options = JSON.parse(config.innerHTML);
  const mode = config.getAttribute("mode")
  autocomplete(Element, options,mode? mode : "multiple" );
})

const formFilter = document.querySelector('#filter');
formFilter.addEventListener('submit', (e)=> {
  const form = event.target;
  const data = new FormData(form);
  let nTicketData = {};
  for (const [key, value] of data) {
    if(['classifications','category','product'].includes(key)) {
      nTicketData = {
        ...nTicketData,
        [key]: JSON.parse(value)
      };
    } else {
      nTicketData = {
        ...nTicketData,
        [key]: value
      };
    }
  
    
  }
  console.log("data update",nTicketData)
  // mutationAdd(newParams);
  //Prvent the submit event
  event.preventDefault();
  event.stopPropagation();
  return false;
})