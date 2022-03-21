
const loveCalc = async (req, res) => {
    try {
        const { firstName, secondName} = req.body;

        const loveResults = loveCalculator(firstName, secondName);
    
        res.status(200).json({'percentage': +loveResults})

    } catch (error) {
       throw new error 
    }
   
}

function loveCalculator(a,b){

    let str = `${a}LOVES${b}`.toLocaleLowerCase().split('');

    let obj = [];

    let number = [];

        obj = str.filter(function(value, index, array) {
            return array.indexOf(value) === index;
        })
 
    //Loop to get numbers

  for(var i = 0; i < obj.length; i++){
     number.push(getOccurrence(str, obj[i]))
  }
 
  //work on the numbers to get sum
  //will need two more arrays
  let sum1 = [];
  let newNumber = number;

  let indexB = newNumber.length;
  while(indexB --) {
   
  for(var t = 0; t < number.length; t++){
    
      sum1.push(number[0] + number[number.length - 1])
     
      number.shift()
      number.pop()
      if(number.length === 1){
        sum1.push(number[0] )
        
      }
      t = 0;
  }


  if(sum1.length >= 1){
    indexB = sum1.length;
  }
  

  number = [];
  number = sum1;
  if(number.length > 2) {
  sum1 = [];
}

if(indexB === 2) break;

}

    return  `${sum1[0]}${sum1[1]}`;

}


function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

module.exports = {
    loveCalc
}