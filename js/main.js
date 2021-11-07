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
    newBtn1.innerHTML = "Klart"
    newBtn1.addEventListener("click", addHandelerCustom)
    

    let newBtn2 = document.createElement("button");
    newBtn2.className = "btn btn-danger";
    newBtn2.innerHTML = "Ta bort"
    newBtn2.addEventListener("click", removeHandelerCustom)

    doList.appendChild(newListItem);
    newListItem.appendChild(newDiv1)
    newDiv1.appendChild(newH4)
    newListItem.appendChild(newDiv2)
    newDiv2.appendChild(newH5)
    newListItem.appendChild(newDiv3)
    newDiv3.appendChild(newBtn1)
    newDiv3.appendChild(newBtn2)
      
    function removeHandelerCustom() {
      listArray.splice(i, 1, "This item is deleted")
      console.log(listArray)
      newListItem.remove();
    }
    function addHandelerCustom() {
      listArray[i].isDone = true;
      console.log(listArray);
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
      newBtn1Right.innerHTML = "Ångra"
  
      let newBtn2Right = document.createElement("button")
      newBtn2Right.className = "btn btn-danger"
      newBtn2Right.innerHTML = "Ta bort"
      
  
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
        listArray.splice(i, 1, "This item is deleted")

        newListItem.remove();
        newListItemRight.remove();
      }
      function regretHandelerCustom() {
        listArray[i].isDone = false;
        newListItem.classList.remove("hide")
        newListItemRight.remove();
      }
    }
    }
  
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
      console.log(listArray)
      
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
    newBtn1.innerHTML = "Klart"
    newBtn1.addEventListener("click", addHandelerCustom)
    

    let newBtn2 = document.createElement("button");
    newBtn2.className = "btn btn-danger";
    newBtn2.innerHTML = "Ta bort"
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
      newListItem.remove();

      let itemToRemove = listArray.indexOf(cNewItem)
      listArray.splice(itemToRemove, 1, "This item is deleted")
    }
    function addHandelerCustom() {
      cNewItem.isDone = true;
      console.log(listArray)
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
      newBtn1Right.innerHTML = "Ångra"
  
      let newBtn2Right = document.createElement("button")
      newBtn2Right.className = "btn btn-danger"
      newBtn2Right.innerHTML = "Ta bort"
  
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
        let itemToRemove = listArray.indexOf(cNewItem)
        listArray.splice(itemToRemove, 1, "This item is deleted")

        newListItem.remove();
        newListItemRight.remove();
      }
      function regretHandelerCustom() {
        cNewItem.isDone = false;
        console.log(listArray)
        newListItem.classList.remove("hide")
        newListItemRight.remove();
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
