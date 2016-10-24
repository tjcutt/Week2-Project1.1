/*
=======================================================
** Week 1 - Project 2 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 1. Connect the main.js document to the HTML page.
//    Then Update the Text to Green by adding the .status-good class.



// When the JS is connected properly, the following code will update the status message.
document.getElementById("q1").innerHTML = "JS Page Connected Properly!";
document.getElementById("q1").classList.add("status-good");



// 2. Declare a new variable called 'feelings',
//    Then store a string with a word that describes
//    how well you feel about this course material.
//    Then display that string within the HTML page.


var feelings;
feelings = "Excited but feeling overwhelmed at times";

document.getElementById("q2").innerHTML = feelings;







// 3. Declare a new variable called 'name',
//    store your name within it, and then
//    create a 'message' variable with a greeting,
//    concat the message and name variables
//    and then display it within the HTML page.

var name = " Tim";
var message = "Hello, my name is";
var sentence =  message + name

document.getElementById("q3").innerHTML = sentence;






// 4. Declare two variables with number values.
//    Add, subtract, multiply and divide them.
//    Display the values of each within the HTML page.
//    Then label these values the best you can.

var n1 = 12
var n2 = 6
var add = n1 + n2
var sub = n1 - n2
var mult = n1 * n2
var div = n1/n2

document.getElementById("q4a").innerHTML = add
document.getElementById("q4b").innerHTML = sub
document.getElementById("q4c").innerHTML = mult
document.getElementById("q4d").innerHTML = div




// 5. Declare two variables with string values.
//    Create a third variable that concatenates the two strings
//    that also places the appropriate space between the strings.
//    Display the value of the third variable within the HTML page.

var string1 = "Appropriate";
var string2 = "spaces";
var concatenated = `${string1} ${string2}`;

document.getElementById("q5").innerHTML = concatenated;





// 6. Add, subract, multiply and divide the strings '5' and '3'.
//    Observe the results and brieftly explain the results within the HTML page.
//
var x = '5';
var y = '3';
var xPlusY = x+y;
var xMinusY = x-y;
var xTimesY = x*y;
var xDividedY = x/y;

document.getElementById("q6a").innerHTML = xPlusY;
document.getElementById("q6b").innerHTML = xMinusY;
document.getElementById("q6c").innerHTML = xTimesY;
document.getElementById("q6d").innerHTML = xDividedY;

var note = "The strings were concatenated with the addition sign.  Otherwise, the code coerced the strings into being numbers and did the calculations properly";

document.getElementById("q6note").innerHTML = note;



// 7. When a button is clicked, add content into the ID "q7".

var woohoo = "It worked!";

document.getElementById("callAlert").addEventListener("click", function () {
  document.getElementById("q7").innerHTML = woohoo;
});



// 8. Collect a number value from the user and when a button is clicked,
//    then double user's answer and display that value into the HTML page.

// Wait till a button is clicked
document.getElementById("callDoubleNum").addEventListener("click", function() {

  // Collect Data
  var doubled = document.getElementById("doubleNum").value;

  // Display Data * 2
  document.getElementById("q8").innerHTML = (doubled*2);

});



// 9. Set the variable 'num1' to 5.
//    Set the variable 'num2' to 10.
//    Test to see if num1 is greater than num2.
//    If so, output to the HTML page: Yes, the value of num1 is greater than num2
//    If not, output to the HTML page: No, the value of num1 is not greater than num2

var num1 = 5;
var num2 = 10;

if (num1 > num2){
var result = "Yes, the value of num1 is greater than num2";
} else {
var result = "No, the value of num1 is not greater than num2";
}

document.getElementById("q9").innerHTML = result;



// 10. Set the variable 'score' to a number between 1-100.
//    Create the following conditions:
//    If the score is above 90, output to the HTML page "Great job".
//    If the score is between 60 and 89, output to the HTML page "Nice work, keep practicing".
//    If the score is below 59, output to the HTML page "Very bad: study more and retake the test".
//    Test to make sure each condition is met properly.

var score = 99;

if (score > 90) {
  var grade = "Great job";
} else if (score > 60 && score <= 89) {
  var grade = "Nice work, keep practicing";
} else if (score <= 59) {
  var grade = "Very bad: study more and retake the test";
};

document.getElementById("q10").innerHTML = grade;



// ADVANCED TRACK

// A. Ask for a user's name, age and city using input fields.
//    In a single command, take the user's answers and display into the HTML page the sentence:
//   "My name is __. I'm __ years old, and I live in __."


document.getElementById("submit").addEventListener("click", function () {

  var aName = document.getElementById("aName").value;
  var aAge  = document.getElementById("aAge").value;
  var aCity = document.getElementById("aCity").value;
  var qASentence = "My name is " + aName + "." + " I'm " + aAge + " years old, and I live in " + aCity + ".";
  document.getElementById("qa").innerHTML = qASentence;
});



// B. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
//     Display the result in the HTML page.
//
var length = 2;
var width  = 3;
var rectangleArea = length * width;

document.getElementById("qb").innerHTML = rectangleArea;


// C. Collect the use's length and width input to determine the area of a rectangle and display within the HTML page the result.

document.getElementById("cArea").addEventListener("click", function() {
  var cWidth = document.getElementById("cWidth").value;
  var cLength= document.getElementById("cLength").value;
  var area  = (cWidth * cLength);
})

document.getElementById("qc").innerHTML = area;



// D. Have the user enter their name into a textfield. When they click a button, find the length (number of characters) of their name and display the result in the HTML page.







// E. Create a textfield to request a test score between 0-100 from the user.
//    If the score is above 90, display in the HTML a message to tell the user "Great job!".
//    If the score is between 60 and 89, display a message of "Nice work, keep practicing.".
//    If the score is below 59, display a message of "Very bad: study more and retake the test.".
//    You can get fancy by adding CSS styles to each of these displays to change the color, too - Green=Good, Orange=OK, Red=Bad





/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
