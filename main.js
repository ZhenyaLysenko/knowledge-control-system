const addClient = document.querySelector('#addClient');
addClient.addEventListener('click', () => {
  let students = document.querySelectorAll('.student');
  let lastStudent = students[students.length - 1];
  const _table = document.querySelector(".users");
  let newStudent = lastStudent.cloneNode(true);

  _table.appendChild(newStudent);

  const removeBtn = document.querySelectorAll(".closeRow");

   function removeItem(e) {
      e.preventDefault();
      let itemList = document.querySelectorAll(".student");
      if(itemList.length > 1) {
         e.target.parentNode.parentNode.remove();
      }
   };
   removeBtn.forEach(el => el.addEventListener("click", removeItem));
})

const addBtn = document.querySelector("#addArea");

addBtn.addEventListener('click',function () {
  let question  = prompt('Area name', 'javascript');

  let newHead = document.createElement('th');
  newHead.innerHTML = `${question}`;


  const headArea = document.querySelector('.area2');
  headArea.appendChild(newHead);
  let student = document.querySelectorAll(".student");

  student.forEach(el => {
    let newInput = document.createElement("td");
    newInput.innerHTML = '<input type="text">';
    el.appendChild(newInput);
  });

})
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByClassName("sortInput")[n];
      y = rows[i + 1].getElementsByClassName("sortInput")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}






// document.querySelector(".save").addEventListener('click', function () {
//   let studentsArr = document.querySelectorAll('.student');
//   studentsArr.forEach(el => {
//     let inputs = el.querySelectorAll('input');
//     let studentObj = {};
//     inputs.forEach(input => {
//       studentObj.param = input.value;
//       console.log(studentObj);
//     })
//   })
// })
