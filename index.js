//
let arr = [];

let inputEl = document.getElementById("input-el");
let dateEl = document.getElementById("date-el");

let amountEl = document.getElementById("amount-el");
let addExpenseBtn = document.getElementById("addExpense");
let clearAllBtn = document.getElementById("ClearAll");

let tableValue = document.getElementById("table_value");

let tv = JSON.parse(localStorage.getItem("arr"));

if (tv) {
  arr = tv;
  display();
}

//create object

var expense = {
  inputEl: inputEl,
  Date: Date,
  amountEl: amountEl,
};
//addExpense

addExpenseBtn.addEventListener("click", function () {
  //   expense.inputEl = document.getElementById("input-el").value;

  //   expense.Date = document.getElementById("date-el").value;
  //   expense.amountEl = document.getElementById("amount-el").value;

  arr.push({
    inputEl: inputEl.value,
    dateEl: dateEl.value,
    amountEl: amountEl.value,
  });

  inputEl.value = "";
  dateEl.value = "";
  amountEl.value = "";

  localStorage.setItem("arr", JSON.stringify(arr));

  display();
  //   console.log(expense.name1);
  //   console.log(expense.Date);
  //   console.log(expense.amount);
});

//clear All
clearAllBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  arr = [];
  display();
});

function display() {
  a = `<table id="tabletask" style="width: 60%">
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>`;
  console.log(arr);
  for (let i = 0; i < arr.length; i++)
    a += `
        <tr>

        <td>
                ${arr[i].inputEl} 
                
        </td>        
        <td>
                ${arr[i].dateEl} 
                
        </td>        
        <td>
                ${arr[i].amountEl} 
                
        </td>   
        <td>
          <button onclick="deletevalue('${i}')">Delete</button>  
</td>     

        </tr>
  `;

  a += `</table>`;

  tableValue.innerHTML = a;
}

//for delete a particular element
function deletevalue(val) {
  for (let i = 0; i < arr.length; i++) {
    if (i == val) {
      //      alert(arr[i] + " " + i);
      arr.splice(i, 1);
    }
  }
  localStorage.setItem("arr", JSON.stringify(arr));
  display();
}
