window.onload = function() {

  let doneList = document.getElementById("donelist");
  let doList = document.getElementById("dolist");
  

  document.getElementById("remove1").addEventListener("click", removeHandeler1)
  function removeHandeler1() {
    let item = document.getElementById("item1");
    item.remove();
  }
  document.getElementById("remove2").addEventListener("click", removeHandeler2)
  function removeHandeler2() {
    let item = document.getElementById("item2");
    item.remove();
  }
  document.getElementById("remove3").addEventListener("click", removeHandeler3)
  function removeHandeler3() {
    let item = document.getElementById("item3");
    item.remove();
  }
  document.getElementById("remove4").addEventListener("click", removeHandeler4)
  function removeHandeler4() {
    let item = document.getElementById("item4");
    item.remove();
  }
  document.getElementById("remove5").addEventListener("click", removeHandeler5)
  function removeHandeler5() {
    let item = document.getElementById("item5");
    item.remove();
  }
  document.getElementById("add1").addEventListener("click", addHandeler1)
  function addHandeler1() {
    let newListItem = document.createElement("li")
    newListItem.className = "d-flex justify-content-between"
    newListItem.id = "newItem1"

    let newDiv1 = document.createElement("div")
    newDiv1.className = "col-4 d-flex justify-content-start align-items-center"

    let newH4 = document.createElement("h4")
    let oldH4 = document.getElementById("chore1").innerHTML
    newH4.innerHTML = oldH4

    let newDiv2 = document.createElement("div")
    newDiv2.className = "col-4 d-flex justify-content-center align-items-center"

    let newH5 = document.createElement("h5")
    let oldH5 = document.getElementById("prio1").innerHTML
    newH5.innerHTML = oldH5

    let newDiv3 = document.createElement("div")
    newDiv3.className = "col-4 d-flex justify-content-center"

    let newBtn1 = document.createElement("button")
    newBtn1.id = "regret1"
    newBtn1.className = "btn btn-warning"
    newBtn1.innerHTML = "Ångra"

    let newBtn2 = document.createElement("button")
    newBtn2.id = "removeAll1"
    newBtn2.className = "btn btn-danger"
    newBtn2.innerHTML = "Ta bort"

    let doneList = document.getElementById("donelist")
    doneList.appendChild(newListItem);
    newListItem.appendChild(newDiv1)
    newDiv1.appendChild(newH4)
    newListItem.appendChild(newDiv2)
    newDiv2.appendChild(newH5)
    newListItem.appendChild(newDiv3)
    newDiv3.appendChild(newBtn1)
    newDiv3.appendChild(newBtn2)

    let item = document.getElementById("item1");
    item.classList.add("hide")
    document.getElementById("regret1").addEventListener("click", regretHandeler1)
    document.getElementById("removeAll1").addEventListener("click", removeAllHandeler1);
    
  }
  document.getElementById("add2").addEventListener("click", addHandeler2)
  function addHandeler2() {
    let newListItem = document.createElement("li")
    newListItem.className = "d-flex justify-content-between"
    newListItem.id = "newItem2"

    let newDiv1 = document.createElement("div")
    newDiv1.className = "col-4 d-flex justify-content-start align-items-center"

    let newH4 = document.createElement("h4")
    let oldH4 = document.getElementById("chore2").innerHTML
    newH4.innerHTML = oldH4

    let newDiv2 = document.createElement("div")
    newDiv2.className = "col-4 d-flex justify-content-center align-items-center"

    let newH5 = document.createElement("h5")
    let oldH5 = document.getElementById("prio2").innerHTML
    newH5.innerHTML = oldH5

    let newDiv3 = document.createElement("div")
    newDiv3.className = "col-4 d-flex justify-content-center"

    let newBtn1 = document.createElement("button")
    newBtn1.id = "regret2"
    newBtn1.className = "btn btn-warning"
    newBtn1.innerHTML = "Ångra"

    let newBtn2 = document.createElement("button")
    newBtn2.id = "removeAll2"
    newBtn2.className = "btn btn-danger"
    newBtn2.innerHTML = "Ta bort"

    let doneList = document.getElementById("donelist")
    doneList.appendChild(newListItem);
    newListItem.appendChild(newDiv1)
    newDiv1.appendChild(newH4)
    newListItem.appendChild(newDiv2)
    newDiv2.appendChild(newH5)
    newListItem.appendChild(newDiv3)
    newDiv3.appendChild(newBtn1)
    newDiv3.appendChild(newBtn2)

    let item = document.getElementById("item2");
    item.classList.add("hide")
    document.getElementById("regret2").addEventListener("click", regretHandeler2)
    document.getElementById("removeAll2").addEventListener("click", removeAllHandeler2);
  }
  document.getElementById("add3").addEventListener("click", addHandeler3)
  function addHandeler3() {
    let newListItem = document.createElement("li")
    newListItem.className = "d-flex justify-content-between"
    newListItem.id = "newItem3"

    let newDiv1 = document.createElement("div")
    newDiv1.className = "col-4 d-flex justify-content-start align-items-center"

    let newH4 = document.createElement("h4")
    let oldH4 = document.getElementById("chore3").innerHTML
    newH4.innerHTML = oldH4

    let newDiv2 = document.createElement("div")
    newDiv2.className = "col-4 d-flex justify-content-center align-items-center"

    let newH5 = document.createElement("h5")
    let oldH5 = document.getElementById("prio3").innerHTML
    newH5.innerHTML = oldH5

    let newDiv3 = document.createElement("div")
    newDiv3.className = "col-4 d-flex justify-content-center"

    let newBtn1 = document.createElement("button")
    newBtn1.id = "regret3"
    newBtn1.className = "btn btn-warning"
    newBtn1.innerHTML = "Ångra"

    let newBtn2 = document.createElement("button")
    newBtn2.id = "removeAll3"
    newBtn2.className = "btn btn-danger"
    newBtn2.innerHTML = "Ta bort"

    let doneList = document.getElementById("donelist")
    doneList.appendChild(newListItem);
    newListItem.appendChild(newDiv1)
    newDiv1.appendChild(newH4)
    newListItem.appendChild(newDiv2)
    newDiv2.appendChild(newH5)
    newListItem.appendChild(newDiv3)
    newDiv3.appendChild(newBtn1)
    newDiv3.appendChild(newBtn2)

    let item = document.getElementById("item3");
    item.classList.add("hide")
    document.getElementById("regret3").addEventListener("click", regretHandeler3)
    document.getElementById("removeAll3").addEventListener("click", removeAllHandeler3);
  }
  document.getElementById("add4").addEventListener("click", addHandeler4)
  function addHandeler4() {
    let newListItem = document.createElement("li")
    newListItem.className = "d-flex justify-content-between"
    newListItem.id = "newItem4"

    let newDiv1 = document.createElement("div")
    newDiv1.className = "col-4 d-flex justify-content-start align-items-center"

    let newH4 = document.createElement("h4")
    let oldH4 = document.getElementById("chore4").innerHTML
    newH4.innerHTML = oldH4

    let newDiv2 = document.createElement("div")
    newDiv2.className = "col-4 d-flex justify-content-center align-items-center"

    let newH5 = document.createElement("h5")
    let oldH5 = document.getElementById("prio4").innerHTML
    newH5.innerHTML = oldH5

    let newDiv3 = document.createElement("div")
    newDiv3.className = "col-4 d-flex justify-content-center"

    let newBtn1 = document.createElement("button")
    newBtn1.id = "regret4"
    newBtn1.className = "btn btn-warning"
    newBtn1.innerHTML = "Ångra"

    let newBtn2 = document.createElement("button")
    newBtn2.id = "removeAll4"
    newBtn2.className = "btn btn-danger"
    newBtn2.innerHTML = "Ta bort"

    let doneList = document.getElementById("donelist")
    doneList.appendChild(newListItem);
    newListItem.appendChild(newDiv1)
    newDiv1.appendChild(newH4)
    newListItem.appendChild(newDiv2)
    newDiv2.appendChild(newH5)
    newListItem.appendChild(newDiv3)
    newDiv3.appendChild(newBtn1)
    newDiv3.appendChild(newBtn2)

    let item = document.getElementById("item4");
    item.classList.add("hide")
    document.getElementById("regret4").addEventListener("click", regretHandeler4)
    document.getElementById("removeAll4").addEventListener("click", removeAllHandeler4);
  }
  document.getElementById("add5").addEventListener("click", addHandeler5)
  function addHandeler5() {
    let newListItem = document.createElement("li")
    newListItem.className = "d-flex justify-content-between"
    newListItem.id = "newItem5"

    let newDiv1 = document.createElement("div")
    newDiv1.className = "col-4 d-flex justify-content-start align-items-center"

    let newH4 = document.createElement("h4")
    let oldH4 = document.getElementById("chore5").innerHTML
    newH4.innerHTML = oldH4

    let newDiv2 = document.createElement("div")
    newDiv2.className = "col-4 d-flex justify-content-center align-items-center"

    let newH5 = document.createElement("h5")
    let oldH5 = document.getElementById("prio5").innerHTML
    newH5.innerHTML = oldH5

    let newDiv3 = document.createElement("div")
    newDiv3.className = "col-4 d-flex justify-content-center"

    let newBtn1 = document.createElement("button")
    newBtn1.id = "regret5"
    newBtn1.className = "btn btn-warning"
    newBtn1.innerHTML = "Ångra"

    let newBtn2 = document.createElement("button")
    newBtn2.id = "removeAll5"
    newBtn2.className = "btn btn-danger"
    newBtn2.innerHTML = "Ta bort"

    let doneList = document.getElementById("donelist")
    doneList.appendChild(newListItem);
    newListItem.appendChild(newDiv1)
    newDiv1.appendChild(newH4)
    newListItem.appendChild(newDiv2)
    newDiv2.appendChild(newH5)
    newListItem.appendChild(newDiv3)
    newDiv3.appendChild(newBtn1)
    newDiv3.appendChild(newBtn2)

    let item = document.getElementById("item5");
    item.classList.add("hide")
    document.getElementById("regret5").addEventListener("click", regretHandeler5)
    document.getElementById("removeAll5").addEventListener("click", removeAllHandeler5);
  }

  function regretHandeler1() {
    let oldItem = document.getElementById("item1");
    oldItem.classList.remove("hide")
    let newItem = document.getElementById("newItem1")
    newItem.remove();
  }
  function regretHandeler2() {
    let oldItem = document.getElementById("item2");
    oldItem.classList.remove("hide")
    let newItem = document.getElementById("newItem2")
    newItem.remove();
  }
  function regretHandeler3() {
    let oldItem = document.getElementById("item3");
    oldItem.classList.remove("hide")
    let newItem = document.getElementById("newItem3")
    newItem.remove();
  }
  function regretHandeler4() {
    let oldItem = document.getElementById("item4");
    oldItem.classList.remove("hide")
    let newItem = document.getElementById("newItem4")
    newItem.remove();
  }
  function regretHandeler5() {
    let oldItem = document.getElementById("item5");
    oldItem.classList.remove("hide")
    let newItem = document.getElementById("newItem5")
    newItem.remove();
  }
  
  function removeAllHandeler1() {
    let oldItem = document.getElementById("item1");
    let newItem = document.getElementById("newItem1");
    oldItem.remove();
    newItem.remove();
  }
  function removeAllHandeler2() {
    let oldItem = document.getElementById("item2");
    let newItem = document.getElementById("newItem2");
    oldItem.remove();
    newItem.remove();
  }
  function removeAllHandeler3() {
    let oldItem = document.getElementById("item3");
    let newItem = document.getElementById("newItem3");
    oldItem.remove();
    newItem.remove();
  }
  function removeAllHandeler4() {
    let oldItem = document.getElementById("item4");
    let newItem = document.getElementById("newItem4");
    oldItem.remove();
    newItem.remove();
  }
  function removeAllHandeler5() {
    let oldItem = document.getElementById("item5");
    let newItem = document.getElementById("newItem5");
    oldItem.remove();
    newItem.remove();
  }
  
  let choreBox = document.getElementById("chore");
  let priorityBox = document.getElementById("priority");
  document.getElementById("submit").addEventListener("click", addNewChoreHandeler)

  function addNewChoreHandeler() {
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
    }
    function addHandelerCustom() {
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
        newListItem.remove();
        newListItemRight.remove();
      }
      function regretHandelerCustom() {
        newListItem.classList.remove("hide")
        newListItemRight.remove();
      }
    } 
  }
  document.getElementById("alphbutton").addEventListener("click", alphSortHandeler)
  document.getElementById("priobutton").addEventListener("click", prioSortHandeler) 
}

function alphSortHandeler() {
  let list, i, switching, b, d, shouldSwitch;
list = document.getElementById("dolist");
switching = true;

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
  let list, i, switching, b, d, shouldSwitch;
list = document.getElementById("dolist");
switching = true;

while (switching) {
  switching = false;
  b = list.getElementsByTagName("li");
  d = list.getElementsByTagName("h5");

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
