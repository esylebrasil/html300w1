var numbers = [];

function addNumber () {
  var funNumber = Number(document.addForm.number.value);
  if (!isNaN(funNumber)){
    numbers.push(funNumber);
    updatePage();
    document.addForm.number.value = "";
  }
  else {
    alert("Oops! Looks like you didn't enter a number.  Only numbers, please!");
    document.getElementById("addForm").reset(); 
  }
  event.preventDefault();
}

function updatePage () {
  document.getElementById("count").innerHTML = numbers.length;
  var sum = 0;
  
  for (var i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
  }
  
  document.getElementById("sum").innerHTML = sum;
  
  var avg = 0;
  var totalNumbers = numbers.length;
  
  avg = (sum / totalNumbers);
  document.getElementById("average").innerHTML = avg;
  
  event.preventDefault();
}

function clearForm() {
  document.getElementById("addForm").reset();
  document.getElementById("count").innerHTML = "0";
  document.getElementById("sum").innerHTML = "0";
  document.getElementById("average").innerHTML = "0";
  
  for (var i = numbers.length; i > 0; i--) {
    numbers.pop(); 
  }
  
  event.preventDefault();
}
