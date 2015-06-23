function inputAlert() {
  
//Getting the user input through input
  
var inPut = document.getElementById("userInput").value;
  
//Analysing input through user's conditions

//Array to store sentence
  
var sentence = [];

//Starting with printing it sentence by sentence
  
for (var e = 0; e < inPut.length; e++) {
// innerHTML the p tag when a full-stop is detected
  
if (inPut[e] === "." || inPut[e] === "!" || inPut[e] === "?" || inPut[e] === ";") {

if (inPut[e + 1] === " " || inPut[e + 1] === undefined || inPut[e + 1] === " " & inPut[e + 3] === " ") {
  
sentence.push(inPut[e]);

var arrayJoin = sentence.join("");

var paragraph = document.createElement("li");
var text = document.createTextNode(arrayJoin);

paragraph.appendChild(text);
  
var element = document.getElementById("parentId");

element.appendChild(paragraph);

//add a div
var arrayJoin = sentence.join("");

var para = document.createElement("p");
var textie = document.createTextNode("                ");

para.appendChild(textie);

var ele = document.getElementById("parentId");

ele.appendChild(para);

//while loop to empty array
  
while (sentence.length > 0) {
  sentence.pop()

}  //while loop

//second if statement
}
  
} else {  
  
sentence.push(inPut[e]);

}
  
}  //Belonging to for loop
  
}; //Belonging to function

function inputAlert2() {
var myNode = document.getElementById("parentId");
while (myNode.firstChild) {
myNode.removeChild(myNode.firstChild);
}
};