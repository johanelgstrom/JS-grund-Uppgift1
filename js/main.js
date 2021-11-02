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
        newBtn1.className = "btn btn-warning"
        newBtn1.innerHTML = "Ångra"

        let newBtn2 = document.createElement("button")
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
          item.remove();
    }
    function addHandeler2() {
        let newListItem = document.createElement("li")
        newListItem.className = "d-flex justify-content-between"

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
        newBtn1.className = "btn btn-warning"
        newBtn1.innerHTML = "Ångra"

        let newBtn2 = document.createElement("button")
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
          item.remove();
    }
    function addHandeler3() {
        let newListItem = document.createElement("li")
        newListItem.className = "d-flex justify-content-between"

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
        newBtn1.className = "btn btn-warning"
        newBtn1.innerHTML = "Ångra"

        let newBtn2 = document.createElement("button")
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
          item.remove();
    }
    function addHandeler4() {
        let newListItem = document.createElement("li")
        newListItem.className = "d-flex justify-content-between"

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
        newBtn1.className = "btn btn-warning"
        newBtn1.innerHTML = "Ångra"

        let newBtn2 = document.createElement("button")
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
          item.remove();
    }
    function addHandeler5() {
        let newListItem = document.createElement("li")
        newListItem.className = "d-flex justify-content-between"

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
        newBtn1.className = "btn btn-warning"
        newBtn1.innerHTML = "Ångra"

        let newBtn2 = document.createElement("button")
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
          item.remove();
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



