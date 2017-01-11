//Given a string of numbers, you should replace any number below 5 with '0' and any number 5 and above with '1'. Return the resulting string.
function fakeBin(x){
  //converts to string as # sent are unsafe integers
  srcStr = x.toString()
  len = x.length
  tgtStr=""
  
  for (i=0; i<len; i++) {    
    tgtStr=tgtStr + (parseInt(x[i]) < 5 ? "0" : "1")
  }

  return tgtStr;
}

//Test.describe("Example tests",_=>{
//Test.assertEquals(fakeBin('45385593107843568'), '01011110001100111');
//Test.assertEquals(fakeBin('509321967506747'), '101000111101101'); 
//Test.assertEquals(fakeBin('366058562030849490134388085'), '011011110000101010000011011'); 
//});
