let grade = +prompt("Enter your Marks");

if (grade > 100) {
  document.write("<center><h3 style = 'color: white; background-color: red; padding:50px; width:35%;text-align:center'> You Enter Invalid Marks " + grade + " Please Enter between 1 to 100</h3></center>");
}

if (grade >= 90 && grade <= 100) {
  document.write("<center><h3 style = 'color: Black; background-color: yellow; padding:50px; width:30%;text-align:center'>Your Grade is A+ and Marks is " + grade + "</h3></center>");
}

if (grade >= 85 && grade <= 89) {
  document.write("<center><h3 style = 'color: Black; background-color: yellow; padding:50px; width:30%;text-align:center'>Your Grade is A and Marks is " + grade + "</h3></center>");
}

if (grade >= 80 && grade <= 84) {
  document.write("<center><h3 style = 'color: Black; background-color: yellow; padding:50px; width:30%;text-align:center'>Your Grade is A- and Marks is " + grade + "</h3></center>");
}

if (grade >= 75 && grade <= 79) {
  document.write("<center><h3 style = 'color: Black; background-color: yellow; padding:50px; width:30%;text-align:center'>Your Grade is B+ and Marks is " + grade + "</h3></center>");
}
if (grade >= 71 && grade <= 74) {
  document.write("<center><h3 style = 'color: Black; background-color: yellow; padding:50px; width:30%;text-align:center'>Your Grade is B and Marks is " + grade + "</h3></center>");
}

if (grade >= 68 && grade <= 70) {
  document.write("<center><h3 style = 'color: Black; background-color: yellow; padding:50px; width:30%;text-align:center'>Your Grade is B- and Marks is " + grade + "</h3></center>");
}

if (grade >= 64 && grade <= 67) {
  document.write("<center><h3 style = 'color: Black; background-color: yellow; padding:50px; width:30%;text-align:center'>Your Grade is C+ and Marks is " + grade + "</h3></center>");
}

if (grade >= 61 && grade <= 63) {
  document.write("<center><h3 style = 'color: Black; background-color: yellow; padding:50px; width:30%;text-align:center'>Your Grade is C and Marks is " + grade + "</h3></center>");
}

if (grade >= 57 && grade <= 60){
   document.write("<center><h3 style = 'color: Black; background-color: yellow; padding:50px; width:30%;text-align:center'>Your Grade is C- and Marks is " + grade + "</h3></center>");
}

if (grade >= 53 && grade <= 56){
   document.write("<center><h3 style = 'color: Black; background-color: yellow; padding:50px; width:30%;text-align:center'>Your Grade is D+ and Marks is " + grade + "</h3></center>");
}

if (grade >= 50 && grade <= 52){
   document.write("<center><h3 style = 'color: Black; background-color: yellow; padding:50px; width:30%;text-align:center'>Your Grade is D and Marks is " + grade + "</h3></center>");
}
if(grade < 50){
   document.write("<center><h3 style = 'color: white; background-color: red; padding:50px; width:35%;text-align:center'>You are fail because your marks are below 50</h3></center>");
}