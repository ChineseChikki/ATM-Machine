function getAction() {
  //Intialise Pin value with varible P
  let pin = document.getElementById('number').value;
  let pinNum = 1234;
  //To check Pin entered is correct or not
  if (pin == pinNum) {
    document.getElementById('demo').innerHTML = 'Please Choose Transaction';
    document.getElementById('optVal').style.display = 'block'; //if pin number is correct options will Display.
  } else {
    document.getElementById('demo').innerHTML = 'Invalid pin';
  }
}

function myFunction(val) {
  //function to display balance amount
  balance = 50_000;
  if (val == 1) {
    //Option 1 is select to shows balance amount
    document.getElementById('demo1').innerHTML = 'Your amount is: ' + balance;
    document.getElementById('display').style.display = 'none';
    document.getElementById('display1').style.display = 'none';
  } else if (val == 2) {
    //Option 2 select to display text field to enter withdraw amount
    document.getElementById('display').style.display = 'block';
    document.getElementById('display1').style.display = 'none';
  } else {
    //Option 3 is select to display fastCash option
    document.getElementById('display1').style.display = 'block';
    document.getElementById('display').style.display = 'none';
  }
}
function getAmount() {
  //function To Withdraw Amount
  balance = 50_000;
  //Intialise the textbox value in a varible
  let amount = document.getElementById('amount1').value;
  //Check if entered amount is greater than the original amount or not and it also should be mulitple of 100
  if (amount <= balance && amount % 100 == 0)
    //alert("" +amount);
    document.getElementById('display').innerHTML =
      'Your withdrawal amount : ' + amount;
  //alert("invalid cash");
  else document.getElementById('display').innerHTML = 'Invalid cash';
}
function getAmount1() {
  //Intialise the Dropdown value in a varible
  let cash = document.getElementById('myOptions').value;
  balance = 50_000;
  //check if selected amount is greater than the original amount or not and it should be mulitple of 100
  if (cash <= balance && cash % 100 == 0)
    //alert("take your amount" +x);
    document.getElementById('display1').innerHTML =
      'Please take your cash : ' + cash;
  else document.getElementById('display1').innerHTML = 'Invalid cash';
}
