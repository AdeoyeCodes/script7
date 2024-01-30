function BET() {
 
 var number = (document.getElementById('number_select').value);
 var random = Math.floor(Math.random() * 100) + 1 ;

 if ( number == random) {
 alert('You selected the number '+number+' and it matches the draw in our system which is also '+random+'. You have won the sum of NGN 500,000. A big congratulations to you.');
 }else {
  alert('You selected the number '+number+' and our system drew the number '+random+'. You have lost your bet. Try Again!');  
  return false;

 }
 
 

}