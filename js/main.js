window.onload = function() {
     document.getElementById("remove1").addEventListener("click", removeHandeler1)
     document.getElementById("remove2").addEventListener("click", removeHandeler2)
     document.getElementById("remove3").addEventListener("click", removeHandeler3)
     document.getElementById("remove4").addEventListener("click", removeHandeler4)
     document.getElementById("remove5").addEventListener("click", removeHandeler5)
     document.getElementById("add1").addEventListener("click", addHandeler1)
     document.getElementById("add2").addEventListener("click", addHandeler2)
     document.getElementById("add3").addEventListener("click", addHandeler3)
     document.getElementById("add4").addEventListener("click", addHandeler4)
     document.getElementById("add5").addEventListener("click", addHandeler5)
     let doneList = document.getElementById("donelist");
      function removeHandeler1() {
          let item = document.getElementById("item1");
          item.remove();
      }
      function removeHandeler2() {
        let item = document.getElementById("item2");
        item.remove();
    }
    function removeHandeler3() {
        let item = document.getElementById("item3");
        item.remove();
    }
    function removeHandeler4() {
        let item = document.getElementById("item4");
        item.remove();
    }
    function removeHandeler5() {
        let item = document.getElementById("item5");
        item.remove();
    }
    function addHandeler1() {
        let newListItem = document.createElement("li")
        newListItem.className = "d-flex justify-content-between"
        newListItem.id = "newItem1"

        let newDiv1 = document.createElement("div")
        newDiv1.className = "col-4 d-flex justify-content-center"

        let newH41 = document.createElement("h4")
        let oldH41 = document.getElementById("chore1").innerHTML
        newH41.innerHTML = oldH41

        let newDiv2 = document.createElement("div")
        newDiv2.className = "col-4 d-flex justify-content-center"

        let newH42 = document.createElement("h4")
        let oldH42 = document.getElementById("prio1").innerHTML
        newH42.innerHTML = oldH42

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
        newDiv1.appendChild(newH41)
        newListItem.appendChild(newDiv2)
        newDiv2.appendChild(newH42)
        newListItem.appendChild(newDiv3)
        newDiv3.appendChild(newBtn1)
        newDiv3.appendChild(newBtn2)

        let item = document.getElementById("item1");
          item.classList.add("hide")
          document.getElementById("regret1").addEventListener("click", regretHandeler1)
          document.getElementById("removeAll1").addEventListener("click", removeAllHandeler1);
    
    }
    function addHandeler2() {
        let newListItem = document.createElement("li")
        newListItem.className = "d-flex justify-content-between"
        newListItem.id = "newItem2"

        let newDiv1 = document.createElement("div")
        newDiv1.className = "col-4 d-flex justify-content-center"

        let newH41 = document.createElement("h4")
        let oldH41 = document.getElementById("chore2").innerHTML
        newH41.innerHTML = oldH41

        let newDiv2 = document.createElement("div")
        newDiv2.className = "col-4 d-flex justify-content-center"

        let newH42 = document.createElement("h4")
        let oldH42 = document.getElementById("prio2").innerHTML
        newH42.innerHTML = oldH42

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
        newDiv1.appendChild(newH41)
        newListItem.appendChild(newDiv2)
        newDiv2.appendChild(newH42)
        newListItem.appendChild(newDiv3)
        newDiv3.appendChild(newBtn1)
        newDiv3.appendChild(newBtn2)

        let item = document.getElementById("item2");
        item.classList.add("hide")
        document.getElementById("regret2").addEventListener("click", regretHandeler2)
        document.getElementById("removeAll2").addEventListener("click", removeAllHandeler2);
    }
    function addHandeler3() {
        let newListItem = document.createElement("li")
        newListItem.className = "d-flex justify-content-between"
        newListItem.id = "newItem3"

        let newDiv1 = document.createElement("div")
        newDiv1.className = "col-4 d-flex justify-content-center"

        let newH41 = document.createElement("h4")
        let oldH41 = document.getElementById("chore3").innerHTML
        newH41.innerHTML = oldH41

        let newDiv2 = document.createElement("div")
        newDiv2.className = "col-4 d-flex justify-content-center"

        let newH42 = document.createElement("h4")
        let oldH42 = document.getElementById("prio3").innerHTML
        newH42.innerHTML = oldH42

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
        newDiv1.appendChild(newH41)
        newListItem.appendChild(newDiv2)
        newDiv2.appendChild(newH42)
        newListItem.appendChild(newDiv3)
        newDiv3.appendChild(newBtn1)
        newDiv3.appendChild(newBtn2)

        let item = document.getElementById("item3");
        item.classList.add("hide")
        document.getElementById("regret3").addEventListener("click", regretHandeler3)
        document.getElementById("removeAll3").addEventListener("click", removeAllHandeler3);
    }
    function addHandeler4() {
        let newListItem = document.createElement("li")
        newListItem.className = "d-flex justify-content-between"
        newListItem.id = "newItem4"

        let newDiv1 = document.createElement("div")
        newDiv1.className = "col-4 d-flex justify-content-center"

        let newH41 = document.createElement("h4")
        let oldH41 = document.getElementById("chore4").innerHTML
        newH41.innerHTML = oldH41

        let newDiv2 = document.createElement("div")
        newDiv2.className = "col-4 d-flex justify-content-center"

        let newH42 = document.createElement("h4")
        let oldH42 = document.getElementById("prio4").innerHTML
        newH42.innerHTML = oldH42

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
        newDiv1.appendChild(newH41)
        newListItem.appendChild(newDiv2)
        newDiv2.appendChild(newH42)
        newListItem.appendChild(newDiv3)
        newDiv3.appendChild(newBtn1)
        newDiv3.appendChild(newBtn2)

        let item = document.getElementById("item4");
        item.classList.add("hide")
        document.getElementById("regret4").addEventListener("click", regretHandeler4)
        document.getElementById("removeAll4").addEventListener("click", removeAllHandeler4);
    }
    function addHandeler5() {
        let newListItem = document.createElement("li")
        newListItem.className = "d-flex justify-content-between"
        newListItem.id = "newItem5"

        let newDiv1 = document.createElement("div")
        newDiv1.className = "col-4 d-flex justify-content-center"

        let newH41 = document.createElement("h4")
        let oldH41 = document.getElementById("chore5").innerHTML
        newH41.innerHTML = oldH41

        let newDiv2 = document.createElement("div")
        newDiv2.className = "col-4 d-flex justify-content-center"

        let newH42 = document.createElement("h4")
        let oldH42 = document.getElementById("prio5").innerHTML
        newH42.innerHTML = oldH42

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
        newDiv1.appendChild(newH41)
        newListItem.appendChild(newDiv2)
        newDiv2.appendChild(newH42)
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




































      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    
      
      
      
      // Bootstrap validering
    (function () {
        'use strict'
        var forms = document.querySelectorAll('.needs-validation')
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
      
              form.classList.add('was-validated')
            }, false)
          })
      })()
}
