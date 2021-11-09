class Chore {
  constructor() {
    this.chore;
    this.priority;
    this.isDone;
  }
}



window.onload = function() {

  let doneList = document.getElementById("donelist");
  let doList = document.getElementById("dolist");
  let doneNumber = 0;
  let totalNumber = 5;

  let doneWrapper = document.getElementById("doneWrapper")
  let doneDiv = document.createElement("div");
  doneDiv.className = "col-10 d-flex justify-content-center align-items-center border border-warning box doneBox"
  doneWrapper.appendChild(doneDiv);
  

  let c1 = {
    chore : "Tvätta",
    priority: "3",
    isDone: false,
    };
  let c2 = {
    chore : "Laga mat",
    priority: "5",
    isDone: false,
    };
  let c3 = {
    chore : "Diska",
    priority: "1",
    isDone: false,
    };
  let c4 = {
    chore : "Dammsug",
    priority: "2",
    isDone: false,
    };
  let c5 = {
    chore : "Matta katten",
    priority: "4",
    isDone: false,
    };
    let listArray = [c1, c2, c3, c4, c5]
    
    for (let i = 0; i < listArray.length; i++) {
      let newListItem = document.createElement("li");
    newListItem.className = "d-flex justify-content-between";

    let newDiv1 = document.createElement("div");
    newDiv1.className = "col-4 d-flex justify-content-start align-items-center";

    let newH4 = document.createElement("h4");
    newH4.innerHTML = listArray[i].chore;

    let newDiv2 = document.createElement("div");
    newDiv2.className = "col-4 d-flex justify-content-center align-items-center";

    let newH5 = document.createElement("h5");
    newH5.innerHTML = "Prio "+ listArray[i].priority;

    let newDiv3 = document.createElement("div");
    newDiv3.className = "col-4 d-flex justify-content-center";

    let newBtn1 = document.createElement("button");
    newBtn1.className = "btn btn-primary";
    let checkIcon = document.createElement("i");
    checkIcon.className = "fas fa-check"
    newBtn1.appendChild(checkIcon);
    // newBtn1.innerHTML = "Klart"
    newBtn1.addEventListener("click", addHandeler)
    

    let newBtn2 = document.createElement("button");
    newBtn2.className = "btn btn-danger";
    let removeIcon = document.createElement("i");
    removeIcon.className ="fas fa-trash-alt"
    newBtn2.appendChild(removeIcon);
    // newBtn2.innerHTML = "Ta bort"
    newBtn2.addEventListener("click", removeHandeler)

    doList.appendChild(newListItem);
    newListItem.appendChild(newDiv1)
    newDiv1.appendChild(newH4)
    newListItem.appendChild(newDiv2)
    newDiv2.appendChild(newH5)
    newListItem.appendChild(newDiv3)
    newDiv3.appendChild(newBtn1)
    newDiv3.appendChild(newBtn2)

    function removeHandeler() {
      console.log(listArray[0].chore)
      for (let index = 0; index < listArray.length; index++) {
        if (listArray[index].chore === newH4.innerHTML) {
          console.log("grattis")
          listArray.splice(index, 1)
          console.log(listArray)
        }
      }
      
     
      
    
      
      
      
      newListItem.remove();
      totalNumber--;
      amountDone();
    }
    
      
    function addHandeler() {
      listArray[i].isDone = true;
      console.log(listArray);
      doneNumber++;
      console.log(doneNumber)
      amountDone();
      let newListItemRight = document.createElement("li")
      newListItemRight.className = "d-flex justify-content-between"
  
      let newDiv1Right = document.createElement("div")
      newDiv1Right.className = "col-4 d-flex justify-content-start align-items-center"
  
      let newH4Right = document.createElement("h4")
      let oldH4Right = newH4.innerHTML;
      newH4Right.innerHTML = oldH4Right
  
      let newDiv2Right = document.createElement("div")
      newDiv2Right.className = "col-4 d-flex justify-content-center align-items-center"
  
      let newH5Right = document.createElement("h5")
      let oldH5Right = newH5.innerHTML;
      newH5Right.innerHTML = oldH5Right
  
      let newDiv3Right = document.createElement("div")
      newDiv3Right.className = "col-4 d-flex justify-content-center"
  
      let newBtn1Right = document.createElement("button")
      newBtn1Right.className = "btn btn-warning"
      // newBtn1Right.innerHTML = "Ångra"
      let redoIcon = document.createElement("i");
      redoIcon.className = "fas fa-undo";
      newBtn1Right.appendChild(redoIcon);
  
      let newBtn2Right = document.createElement("button")
      newBtn2Right.className = "btn btn-danger"
      let removeIconRight = document.createElement("i");
      removeIconRight.className ="fas fa-trash-alt"
      newBtn2Right.appendChild(removeIconRight);
      // newBtn2Right.innerHTML = "Ta bort"
      
  
      let doneList = document.getElementById("donelist")
      doneList.appendChild(newListItemRight);
      newListItemRight.appendChild(newDiv1Right)
      newDiv1Right.appendChild(newH4Right)
      newListItemRight.appendChild(newDiv2Right)
      newDiv2Right.appendChild(newH5Right)
      newListItemRight.appendChild(newDiv3Right)
      newDiv3Right.appendChild(newBtn1Right)
      newDiv3Right.appendChild(newBtn2Right)
  
      document.getElementById(newListItem)
      newListItem.classList.add("hide")
      newBtn1Right.addEventListener("click", regretHandeler)
      newBtn2Right.addEventListener("click", removeAllHandeler);

      function removeAllHandeler() {
        console.log(listArray[0].chore)
      for (let index = 0; index < listArray.length; index++) {
        if (listArray[index].chore === newH4.innerHTML) {
          console.log("grattis")
          listArray.splice(index, 1)
          console.log(listArray)
        }
      }

        newListItem.remove();
        newListItemRight.remove();
        doneNumber--;
        totalNumber--;
        amountDone();
      }
      function regretHandeler() {
        listArray[i].isDone = false;
        newListItem.classList.remove("hide")
        newListItemRight.remove();
        doneNumber--;
        amountDone();
      }
    }
    }
    

  function amountDone() {
  doneDiv.innerHTML = "Du har gjort klart " + doneNumber + "/" + totalNumber;
  let main = document.getElementById("main");
  main.classList.remove("success");
  if (doneNumber === totalNumber) {
    doneDiv.innerHTML = "Du har gjort klart " + doneNumber + "/" + totalNumber + ". Bra jobbat!"
    main.className = "success";
  }
  if (totalNumber === 0) {
    doneDiv.innerHTML = "Har du saker att göra? Lägg till i formuläret nedan"
    main.className = "";
  }
  }
  amountDone();

  let choreBox = document.getElementById("chore");
  let priorityBox = document.getElementById("priority");
  document.getElementById("submit").addEventListener("click", addNewChoreHandeler)

  function addNewChoreHandeler() {

    let cNewItem = {
      chore: choreBox.value,
      priority: priorityBox.value,
      isDone: false
      };
      listArray.push(cNewItem);
      console.log(listArray.length)
      totalNumber++;
      amountDone();
      
    let newListItem = document.createElement("li");
    newListItem.className = "d-flex justify-content-between";

    let newDiv1 = document.createElement("div");
    newDiv1.className = "col-4 d-flex justify-content-start align-items-center";

    let newH4 = document.createElement("h4");
    newH4.innerHTML = choreBox.value;

    let newDiv2 = document.createElement("div");
    newDiv2.className = "col-4 d-flex justify-content-center align-items-center";

    let newH5 = document.createElement("h5");
    newH5.innerHTML = "Prio "+ priorityBox.value;

    let newDiv3 = document.createElement("div");
    newDiv3.className = "col-4 d-flex justify-content-center";

    let newBtn1 = document.createElement("button");
    newBtn1.className = "btn btn-primary";
    let checkIcon = document.createElement("i");
    checkIcon.className = "fas fa-check"
    newBtn1.appendChild(checkIcon);
    // newBtn1.innerHTML = "Klart"
    newBtn1.addEventListener("click", addHandelerCustom)
    

    let newBtn2 = document.createElement("button");
    newBtn2.className = "btn btn-danger";
    let removeIcon = document.createElement("i");
    removeIcon.className ="fas fa-trash-alt"
    newBtn2.appendChild(removeIcon);
    // newBtn2.innerHTML = "Ta bort"
    newBtn2.addEventListener("click", removeHandelerCustom)

    choreBox.value = ""
    priorityBox.value = "1"

    doList.appendChild(newListItem);
    newListItem.appendChild(newDiv1)
    newDiv1.appendChild(newH4)
    newListItem.appendChild(newDiv2)
    newDiv2.appendChild(newH5)
    newListItem.appendChild(newDiv3)
    newDiv3.appendChild(newBtn1)
    newDiv3.appendChild(newBtn2)

    function removeHandelerCustom() {
      console.log(listArray[0].chore)
      for (let index = 0; index < listArray.length; index++) {
        if (listArray[index].chore === newH4.innerHTML) {
          console.log("grattis")
          listArray.splice(index, 1)
          console.log(listArray)
        }
      }
      newListItem.remove();
      totalNumber--;
      amountDone();

      // let itemToRemove = listArray.indexOf(cNewItem)
      // listArray.splice(itemToRemove, 1, "This item is deleted")
    }
    function addHandelerCustom() {
      cNewItem.isDone = true;
      console.log(listArray)
      doneNumber++;
      console.log(doneNumber)
      amountDone();
      let newListItemRight = document.createElement("li")
      newListItemRight.className = "d-flex justify-content-between"
  
      let newDiv1Right = document.createElement("div")
      newDiv1Right.className = "col-4 d-flex justify-content-start align-items-center"
  
      let newH4Right = document.createElement("h4")
      let oldH4Right = newH4.innerHTML;
      newH4Right.innerHTML = oldH4Right
  
      let newDiv2Right = document.createElement("div")
      newDiv2Right.className = "col-4 d-flex justify-content-center align-items-center"
  
      let newH5Right = document.createElement("h5")
      let oldH5Right = newH5.innerHTML;
      newH5Right.innerHTML = oldH5Right
  
      let newDiv3Right = document.createElement("div")
      newDiv3Right.className = "col-4 d-flex justify-content-center"
  
      let newBtn1Right = document.createElement("button")
      newBtn1Right.className = "btn btn-warning"
      let redoIcon = document.createElement("i");
      redoIcon.className = "fas fa-undo";
      newBtn1Right.appendChild(redoIcon);
      // newBtn1Right.innerHTML = "Ångra"
  
      let newBtn2Right = document.createElement("button")
      newBtn2Right.className = "btn btn-danger"
      let removeIconRight = document.createElement("i");
      removeIconRight.className ="fas fa-trash-alt"
      newBtn2Right.appendChild(removeIconRight);
      // newBtn2Right.innerHTML = "Ta bort"
  
      let doneList = document.getElementById("donelist")
      doneList.appendChild(newListItemRight);
      newListItemRight.appendChild(newDiv1Right)
      newDiv1Right.appendChild(newH4Right)
      newListItemRight.appendChild(newDiv2Right)
      newDiv2Right.appendChild(newH5Right)
      newListItemRight.appendChild(newDiv3Right)
      newDiv3Right.appendChild(newBtn1Right)
      newDiv3Right.appendChild(newBtn2Right)
  
      document.getElementById(newListItem)
      newListItem.classList.add("hide")
      newBtn1Right.addEventListener("click", regretHandelerCustom)
      newBtn2Right.addEventListener("click", removeAllHandelerCustom);

      function removeAllHandelerCustom() {
      for (let index = 0; index < listArray.length; index++) {
        if (listArray[index].chore === newH4.innerHTML) {
          listArray.splice(index, 1)
        }
      }
        doneNumber--;
        totalNumber--;
        amountDone();

        newListItem.remove();
        newListItemRight.remove();
      }
      function regretHandelerCustom() {
        cNewItem.isDone = false;
        console.log(listArray)
        newListItem.classList.remove("hide")
        newListItemRight.remove();
        doneNumber--;
        amountDone();
      }
    } 
  }
  document.getElementById("alphbutton").addEventListener("click", alphSortHandeler)
  document.getElementById("priobutton").addEventListener("click", prioSortHandeler) 
}

function alphSortHandeler() {
  let i = 0; 
  let switching = true;
  let b = undefined;
  let d = undefined;
  let shouldSwitch = true;
  let list = document.getElementById("dolist");

while (switching) {
  switching = false;
  b = list.getElementsByTagName("li");
  d = list.getElementsByTagName("h4");

  for (i = 0; i < (b.length - 1); i++) {
    shouldSwitch = false;
    
    if (d[i].innerHTML.toLowerCase() > d[i + 1].innerHTML.toLowerCase()) {
      shouldSwitch = true;
      break;
    }
  }
  if (shouldSwitch) {
    b[i].parentNode.insertBefore(b[i + 1], b[i]);
    switching = true;
  }
  }
}

function prioSortHandeler() {
  let i = 0; 
  let switching = true;
  let b = undefined;
  let d = undefined;
  let shouldSwitch = true;
  let list = document.getElementById("dolist");

while (switching) {
  switching = false;
  b = list.getElementsByTagName("li");
  d = list.getElementsByTagName("h5");

  for (i = 0; i < (b.length - 1); i++) {
    shouldSwitch = false;
    
    if (d[i].innerHTML > d[i + 1].innerHTML) {
      shouldSwitch = true;
      break;
    }
  }
  if (shouldSwitch) {
    b[i].parentNode.insertBefore(b[i + 1], b[i]);
    switching = true;
  }
  }
}
