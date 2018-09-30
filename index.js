function takeANumber(currentLine, newPersonName){
  currentLine.push(newPersonName);
  
  return "Welcome, " + newPersonName + ". You are number " + currentLine.length + " in line."
}

function nowServing(currentLine){
  if(currentLine.length > 1){
    currentline.shift()
  }  
}