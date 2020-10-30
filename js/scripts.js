//Front End Logic//
$(document).ready(function() {
  $("#num").keyup(function(event){
    event.preventDefault();
    $("#result").html(count($("#num").val()));
  })
  


//Business Logic//

//This function is to count and replace the selected numbers that need to be changes//
function count(num) {
  const userNum = [];
  const newNum = num;
  const numArray = ["1","2","3"]
  const wordArray = ["Beep!", "Boop!", "Won't you be my neighbor?"];
  for (let i = 0; i <= newNum; i++) {
    if (i.toString().split('').includes(numArray[2])) {
      userNum.push(wordArray[2]);
    }else if(i.toString().split('').includes(numArray[1])) {
      userNum.push(wordArray[1]);
    }else if(i.toString().split('').includes(numArray[0])) {
      userNum.push(wordArray[1]);
    }else userNum.push(i);
  }
return (userNum + ", ");
}
});
