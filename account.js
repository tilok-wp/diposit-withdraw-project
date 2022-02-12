// get input value
function getInputValue(idName){
   const inputField = document.getElementById(idName);
   const inputFieldValue = parseFloat(inputField.value)
   inputField.value = '';
   return inputFieldValue
}
// Update total Balance 
function updateTotal(idName, amount){
   const totalBalance = document.getElementById(idName);
   const previousTotalBalance = parseFloat(totalBalance.innerText)
   if(amount > 0){
      const newTotalBalance = previousTotalBalance + amount;
      totalBalance.innerText = newTotalBalance;
   }
}

// Update account balance 
function updateAccountBalance(idName, amount, isTrue){
   const totalAccountBlance = document.getElementById(idName);
   const previousAccountBalance = parseFloat(totalAccountBlance.innerText);
   let newTotalAccountBlance = 0;
   if(isTrue == true){
      newTotalAccountBlance = previousAccountBalance + amount;
   }else{
      newTotalAccountBlance = previousAccountBalance - amount;
   }
   totalAccountBlance.innerText = newTotalAccountBlance;
}
//  Disposit calculation
document.getElementById('diposit-submit').addEventListener('click', function(){   
    const dipositawAmount = getInputValue('input-diposit')
    if(dipositawAmount > 0){
       updateTotal('total-diposit-amount', dipositawAmount);
       updateAccountBalance('total-blance-amount', dipositawAmount, true);
    }
 })

 document.getElementById('withdraw-submit').addEventListener('click', function(){
   const withdrawAmount = getInputValue('input-withdraw')
   const previousTotalBlance = parseFloat(document.getElementById('total-blance-amount').innerText);
   if(withdrawAmount > 0 && previousTotalBlance > withdrawAmount){
      updateTotal('total-withdraw-amount', withdrawAmount);
      updateAccountBalance('total-blance-amount', withdrawAmount, false);
   }
 })