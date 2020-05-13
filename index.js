// Code your solutions in this file
const names=[['Ada','Brendan','Ali'],'birthday'];
writeCards (names[0],names[1]);
function writeCards(names,eventName){
  for(let i=0;i<names.length;i++)
  {
    console.log(`Thank you ${names[i]} for the wonderful ${eventName} gift!`);
  }
}