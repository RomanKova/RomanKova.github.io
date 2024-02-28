window.onload = function () {
  // Array to hold the button names, which will be displayed on the website
  var buttonCaption = [
    "Addition",
    "Triangle",
    "Real-Roots",
    "Roots",
    "GPA",
    "Number-Sign",
    "Total-Sign",
    "Divisible By 6",
    "Digits <-",
    "Number of 3",
    "Digit Sum",
    "Palindrome",
    "Factorial",
    "Fibonacci",
    "Draw △",
    "○  Area",
    "Oval Area",
    "Decending",
    "Prime",
    "Sum",
    "GCD",
    "mTable",
    "Random",
    "Doubles",
    "Array",
    "Product 1-10",
    "Product Rand",
    "RGB",
    "",
    "Random Prime",
    "Day",
    "WakeUp",
    "Derivative",
    "&Pi;",
    "Watts",
    "Vol Sphere",
    "Vol Cylinder",
    "",
    "",
    " ",
  ];
  // Loop till the number of button you want
  for (var i = 0; i < buttonCaption.length; i++) {
    var newButton = document.createElement("button"); // Creates the button element
    document.getElementById("buttons").append(newButton); // Add it in the navigation section of your Html Code
    $(newButton).attr("id", "button" + (i + 1)); // Assings Id to button corresposnding to its order
    $(newButton).html(buttonCaption[i]); // Gets the name of the button and assing it
    //$(newButton).html("Roots!!!!!!!!!!!!!!");
    $(newButton).attr("onClick", "execute(" + i + ");"); // add onClick event to each button
    $(newButton).attr("class", "button"); // add class to button
  }
};
// Takes the problem number and display it description, Js Code, FlowChart
function execute(problemId) {
  // Array which holds the discription of each problem
  var descriptionOfProblem = [
    "receive two numbers and output their sum.",
    "receive three numbers and store them within memory spaces called a, b, and c to represent a triangle's three sides and, by using Heron's formula, calculate and output the triangle's area. ",
    "receive three numerical coefficients of a quadratic equation (store them in memory spaces called a, b, and c) and calculate and output its roots. (assume coefficients are good enough such that a solution in real number exists. Don’t worry about cases that a solution does not exist). ",
    "receive three numerical coefficients of a quadratic equation and determines if it has two distinct real roots, one root, or no roots in real numbers. ",
    "receive a number and map it to a letter grade based on York University's standard. ",
    "continue receiving numbers and output if they are positive or negative until a zero is entered. When a zero is entered, the program should stop (not receiving any more input). ",
    "continue receiving numbers and output if they are positive or negative until a zero is entered. When a zero is entered, the program should output how many positive and how many negative numbers have been entered, then it stops. ",
    "continue receiving numbers and output if they are divisible by 6 or not until a zero is entered. When a zero is entered, the program should output how many of the entered numbers were divisible by 6, then it stops. IMPORTANT RESTRICTION: you are not allowed to divide the number by 6; therefore, you are not allowed to use the modulus operator (%) over 6 to verify the remainder when the number is divided by 6. ",
    "receive a positive integer and output each digit separately. For instance, if the input is 692, the program should output 2, 9, 6,. Another example, if the number is 135429 the program should out put 9, 2, 4, 5, 3, and 1. ",
    "receive a positive number and output how many of its digits are equal to 3. For instance, if the input is 633, the program should output 2, because there are two threes there. Another example, if the input is 14768, the program should output 0. ",
    "receive a positive number and output sum of its digits. For instance, if the input is 63932, the program should output 23, because 6+3+9+3+2 is 23. Another example, if the input is 23 the program should output 5. ",
    "receive a positive number and output'yes' if it's equal to its reverse; otherwise, output 'no'. For instance, if the input is 63936, the program should output 'yes', because if you read the digits from left to right or from right to left, it's the same number. But, if the input is 632, the program should output 'no' because 632 is not the same as 236. ",
    "to receive a positive number, as n, and output n! (n Factorial). ",
    "input an integer greater than 1, as n, and output the first n values of the Fibonacci sequence. In Fibonacci sequence, the first two values are 0 and 1 and other values are sum of the two values preceding it. For instance, if the input is 4, the program should print 0, 1, 1, 2,. As another example if the input is 9, the program should output 0, 1, 1, 2, 3, 5, 8, 13, 21,. ",
    "input a positive integer, as n, and by using [] characters — output a figure below that has n rows and each row k has k pairs of []. ",
    "receive the diameter of a circle and output its perimeter and area. ",
    "receive the short and long axes of an oval and output its area. ",
    "receive 3 numbers and output them in non-ascending order. ",
    "receive a natural number greater than 1 and it will output if the natural number that the user has inputted is a prime number or not. ",
    "receive 8 numbers and it will output 'yes' if the sum of the first four numbers is equal to the sum of the last four numbers, otherwise it will output 'no'.",
    "",
    "",
    "check how many random numbers generated ", //23
    "generate two numbers and check if they're doubles.", //24
    "create an array and assign [1 , 2 , 3] and then pitput the number in each index.", //25
    "product of numbers between 1 and 10 ", //26
    "prodcut of numbers between two randomly generated numbers ", //27
    "randomly generate the numbers of rgb color ", //28
    "",
    "generate a prime number and check if its prime", //30
    "wake up or sleep",
    "wake up the user",
    "use power Rule of Derivatives",
    "aproximate pi value", //34
    "calculate watts from volts and amps",
    "calculate sphere volume",
    "calculate cylinder volume",
    "",
    "",
    "",
  ];
  /* for teaching purposes, we used some pure JS and some jQuery codes in the following lines.
		   compare them, and learn both */
  document.getElementById("description").innerHTML =
    "<h3>Описание:</h3><p> Computational thinking problem for a program to " +
    descriptionOfProblem[problemId] +
    "</p>"; // Getting the corresponding description of the problem from discription array
  document
    .getElementById("flowchart")
    .setAttribute("src", "./images/fc_" + (problemId + 1) + ".jpg"); // gets the image of flowchart
  document.getElementById("flowchart").style.display = "none";
  $("#javaScript").attr("src", "./images/js_" + (problemId + 1) + ".jpg"); // gets the image of javascript code
  $("#javaScript").css("display", "none");
  $("#anotherSolution").css("display", "none");
  $("#checkbox1").prop("checked", false);
  document.getElementById("checkbox2").checked = false;
  document.getElementById("checkbox3").checked = false;
}

/* for teaching purposes, we used some pure JS and some jQuery codes in the following 3 functions.
   compare them, and learn both */
function checkUncheck1() {
  if ($("#flowchart").css("display") === "none") {
    $("#flowchart").css("display", "inline");
  } else {
    $("#flowchart").css("display", "none");
  }
}

function checkUncheck2() {
  if (document.getElementById("javaScript").style.display === "none") {
    document.getElementById("javaScript").style.display = "inline";
  } else {
    document.getElementById("javaScript").style.display = "none";
  }
}
function checkUncheck3() {
  if ($("#anotherSolution").css("display") === "none") {
    $("#anotherSolution").css("display", "inline");
  } else {
    $("anotherSolution").css("display", "none");
  }
}

/* for teaching purposes, we used some pure JS and some jQuery codes in the following 2 functions.
   compare them, and learn both */
function zoomIn() {
  $("#flowchart").css("width", "200%");
}
function zoomOut() {
  document.getElementById("flowchart").style.width = "100%";
}

/* for rest of this file, provide your js code for all problems you address
   in this project. We have already provided the js code for problems 19 and 20 */

//Problem1

function add() {
  var w = document.getElementById("num1").value;
  var h = document.getElementById("num2").value;
  var s = parseInt(w) + parseInt(h);
  document.getElementById("output").innerHTML = "sum: " + s;
}

//Problem2
function area() {
  var w = parseInt(document.getElementById("num1").value);
  var h = parseInt(document.getElementById("num2").value);
  var c = parseInt(document.getElementById("num3").value);
  var s = Math.sqrt(
    ((w + h + c) / 2) *
      ((w + h + c) / 2 - w) *
      ((w + h + c) / 2 - h) *
      ((w + h + c) / 2 - c)
  );
  s = s.toFixed(2);
  document.getElementById("output").innerHTML = "area: " + s;
}

//3
function equation() {
  var a = parseInt(document.getElementById("num1").value);
  var b = parseInt(document.getElementById("num2").value);
  var c = parseInt(document.getElementById("num3").value);
  var root = Math.sqrt(b * b - 4 * a * c);
  var s = (-b + root) / (2 * a);
  var s2 = (b + root) / (2 * a);
  s = s.toFixed(2);
  s2 = s2.toFixed(2);
  document.getElementById("output").innerHTML =
    "one root: " + s + "<br>another: " + s2;
}

//4
function equation() {
  var a = parseInt(document.getElementById("num1").value);
  var b = parseInt(document.getElementById("num2").value);
  var c = parseInt(document.getElementById("num3").value);
  var t1 = b * b;
  var t2 = 4 * a * c;
  var message = "";

  if (t1 > t2) {
    message = "it has 2 distinct roots";
  } else if (t1 == t2) {
    message = "its roots are identical";
  } else {
    message = "it has no roots in real numbers";
  }
  document.getElementById("output").innerHTML = message;
}

//5
function mapping() {
  var a = parseInt(document.getElementById("num1").value);

  switch (true) {
    case a > 89:
      answer = "A+";
      break;
    case a > 79:
      answer = "A";
      break;
    case a > 74:
      answer = "B+";
      break;
    case a > 69:
      answer = "B";
      break;
    case a > 64:
      answer = "C+";
      break;
    case a > 59:
      answer = "C";
      break;
    case a > 54:
      answer = "D+";
      break;
    case a > 49:
      answer = "D";
      break;
    case a > 47:
      answer = "E";
      break;
    default:
      answer = "F";
  }

  document.getElementById("output").innerHTML = answer;
}
//
function problem_09() {
  var outputObj = document.getElementById("output");
  var num = parseInt(prompt("Please enter a number: ", ""));
  outputObj.innerHTML = "number: " + num + "<br><br>its digits: ";

  while (num > 0) {
    outputObj.innerHTML += (num % 10) + ", ";
    num = parseInt(num / 10);
  }

  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}

//6
//7
//8
//9
//10
function problem_10() {
  var outputObj = document.getElementById("output");
  var num = parseInt(prompt("Please enter a number: ", ""));
  outputObj.innerHTML = "number: " + num + "<br><br>number of 3’s: ";

  var count = 0;
  while (num > 0) {
    if (num % 10 == 3) {
      count += 1;
    }
    num = parseInt(num / 10);
  }
  outputObj.innerHTML += count;

  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}

function problem_11() {
  var outputObj = document.getElementById("output");
  var num = parseInt(prompt("Please enter a number: ", ""));
  outputObj.innerHTML = "number: " + num + "<br><br>sum of digits: ";

  var sum = 0;
  while (num > 0) {
    sum += parseInt(num % 10);
    num = Math.floor(num) / 10;
  }
  outputObj.innerHTML = outputObj.innerHTML + sum;

  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}

function problem_12() {
  var outputObj = document.getElementById("output");
  var num = parseInt(prompt("Please enter a number: ", ""));

  outputObj.innerHTML = "number: " + num + "<br><br>equal to its reverse?: ";

  var p = 0;
  var temp = num;
  while (temp > 0) {
    p = parseInt(p) * 10;
    digit = parseInt(temp % 10);
    temp = parseInt(temp / 10);
    p = p + digit;
  }

  if (p == num) {
    outputObj.innerHTML = outputObj.innerHTML + "yes";
  } else outputObj.innerHTML = outputObj.innerHTML + "no";

  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}

//13
function factorial() {
  var outputObj = document.getElementById("output");
  var num = parseInt(prompt("Please enter a number: ", ""));

  outputObj.innerHTML = "number: " + num + "<br><br>" + num + "!: ";

  var num;
  var nf = 1;
  for (i = 1; i <= num; i++) {
    nf = nf * i;
  }
  outputObj.innerHTML = outputObj.innerHTML + nf;

  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}

//Problem 14
function Fibonacci() {
  var out = "";
  var num = parseInt(prompt("Please enter a number: ", ""));
  var fib = [];
  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    out += fib[i] + ":";
  }

  alert("fib: " + out);
}
//15
function draw() {
  var outputObj = document.getElementById("output");
  var num = parseInt(prompt("Please enter a number: ", ""));
  outputObj.innerHTML = "number: " + num + "<br><br> ";

  document.getElementById("output").style.fontSize = "18px";
  document.getElementById("output").style.textAlign = "left";

  if (num > 1) {
    for (i = 0; i < num; i++) {
      for (q = 0; q <= i; q++) {
        outputObj.innerHTML += "[] ";
      }

      outputObj.innerHTML += "<br> ";
    }
  }

  outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled", "true");
}
//16
function area_16() {
  var outputObj = document.getElementById("output");
  var num = parseInt(prompt("Please enter a radis: ", ""));

  var area = 3.14 * num * num;
  var per = 2 * 3.14 * num;

  outputObj.innerHTML = "Area: " + area + "Perimeter" + per;
}

//17
function area_17() {
  var outputObj = document.getElementById("output");
  var a = parseInt(prompt("Please enter a: ", ""));
  var b = parseInt(prompt("Please enter b: ", ""));

  var area = a * b * 3.14;

  outputObj.innerHTML = "Area: " + area;
}

//Problem 18
function Descending() {
  var outputObj = document.getElementById("problem");
  var a = parseInt(prompt("1st number: ", ""));
  var b = parseInt(prompt("2nd number: ", ""));
  var c = parseInt(prompt("3rd number: ", ""));

  if (a > b) {
    if (b > c) {
      //print abc
      outputObj.innerHTML = a + "" + b + "" + c;
    } else {
      if (a > c) {
        outputObj.innerHTML = a + "" + c + "" + b;
      } else {
        outputObj.innerHTML = c + "" + a + "" + b;
      }
    }
  } else if (a > c) {
    //print bac
    outputObj.innerHTML = b + "" + a + "" + "" + c;
  } else {
    if (b > c) {
      //print bca
      outputObj.innerHTML = b + "" + c + "" + a;
    } else {
      //print cba
      outputObj.innerHTML = c + "" + b + "" + a;
    }
  }
}

//Problem 19
function prime() {
  var num = parseInt(prompt("Enter a number ", ""));

  var prime = true;
  var d = 2;

  while (prime == true && d <= num / 2) {
    if (num % d == 0) prime = false;
    d++;
  }
  if (prime == true) alert(num + " is prime!");
  else alert(num + " is NOT prime!");
}

//Problem 20
function sum() {
  var sum1 = 0;
  var sum2 = 0;

  for (var i = 1; i <= 4; i++) {
    var num = parseInt(prompt("Enter a number ", ""));
    sum1 += num;
  }

  for (var i = 1; i <= 4; i++) {
    var num = parseInt(prompt("Enter a number ", ""));
    sum2 += num;
  }

  if (sum1 == sum2) alert("Yes!");
  else alert("Nope.");
}

//21
function problem21() {
  var outputObj = document.getElementById("problem");

  outputObj.innerHTML = "GCD of 8 and 12: " + gcd(8, 12);

  untick_checkboxes();
}

var gcd = function (a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};
//22
function problem22() {
  var outputObj = document.getElementById("problem");
  var num = parseInt(prompt("Please enter a number: ", ""));
  var mt = "";

  for (var x = 0; x < num; x++) {
    for (var y = 0; y < num; y++) {
      mt += x + "x" + y + "<br>";
    }
  }
  outputObj.innerHTML = mt;
}
//23
function problem23() {
  var outputObj = document.getElementById("problem");

  var sum = 0;
  for (var i = 0; i <= Math.floor(Math.random() * 500) + 0; i++) {
    sum += i;
  }

  outputObj.innerHTML = "Result = " + sum;
}
//24
function problem24() {
  var outputObj = document.getElementById("problem");

  var value1 = Math.round(Math.random() * 5 + 1);
  var value2 = Math.round(Math.random() * 5 + 1);

  if (value1 == value2) outputObj.innerHTML = "DOUBLES";
  else outputObj.innerHTML = "NOT DOUBLES";
}

//25
function problem25() {}
//26
function problem26() {}
//27
function problem27() {}
//28
function problem28() {}
//29
function problem29() {}
//30
function problem30() {}
//31
function day() {
  var ws = prompt("Wake up or sleep?: ", "");

  if (ws == "wakeup") {
    alert("You woke up");
  } else if (ws == "sleep") {
    alert("You decided to sleep some more");
  }
}
//32
function problem32() {
  var ws = prompt("Wake up or sleep?: ", "");

  while (ws == "sleep") {
    alert("WAKE UP");
    ws = prompt("Wake up or sleep?: ", "");
  }
}

//33
function sDerivative() {
  var power = 2; //base is asumed x
  var derived = power + "x^" + power - 1;

  alert(derived);
}
//34
function problem34() {
  var pi = 0;
  pi = 355 / 113;
  alert("Pi is aproximately: " + pi);
}

//35
function watts() {
  var volt = prompt("Input volts: ", "");
  var amp = prompt("Input amps: ", "");
  var watt = amp * volt;
  alert(watt);
}
//36
function vSphere() {
  var r = prompt("Input radius: ", "");
  var v = r * (4 / 3) * 3.14 * r * r * r;
  alert(v);
}
//37
function vCylinder() {
  var r = prompt("Input radius: ", "");
  var h = prompt("Input height: ", "");
  var v = r * 3.14 * r * r * h;
  alert(v);
}
//38
function problem38() {}
//39
function problem39() {}
//40
function problem40() {}



//
function showLaboratoryWorks() {
  if ($("aside").css("display") === "none") {
    $("aside").css("display", "flex");
  } else {
    $("aside").css("display", "none");
  }
}



function getSystemTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
}

function toggleTheme() {
  const theme = document.documentElement.getAttribute("theme");
  const newTheme = theme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  const systemTheme = getSystemTheme();

  if (savedTheme) {
    document.documentElement.setAttribute("theme", savedTheme);
  } else {
    document.documentElement.setAttribute("theme", systemTheme);
  }
});