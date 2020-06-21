// === String Method Task_1

// var a = prompt("Enter your First Name");
// var b = prompt(" Enter your Last Name");
// var c = a + b;

// document.write(c);


// === String Method Task_2

// var mobileName = prompt("Enter Your favorite mobile phone model");


// document.write("My favorite phone Name is: ",mobileName ,"<br>");
// document.write("Length of String: ",mobileName.length);


// === String Method Task_3

// var name = "pakistani";

// document.write("String : ",name ,"<br>");
// document.write("Index of 'n': ", name.indexOf("n"));

// === String Method Task_4

// var text = "Hello World";

// document.write("String : ",text ,"<br>");
// document.write("Last index 'l': ", text.lastIndexOf("l"));


// === String Method Task_5

// var name = "Pakistani";

// document.write("String : ",name ,"<br>");
// document.write("character at index 3: ", name.charAt(name.length - 6));


// === String Method Task_6

// var geek1 = "Muhammad Waqas";
// var geek2 =  "Maqbool";


// var new_geek = geek1.concat(geek2);

// document.write(new_geek);


// === String Method Task_7

// var city = "Hyderabad";


// document.write("City : ",city,"<br>");
// document.write("After Replacing : ", city.replace("Hyderabad","Islamabad"));


// === String Method Task_8

//  var message = ("Ali and Sami are best friends. They play cricket and football together.");

// document.write(message.replace("and", "&"));


// === String Method Task_9

// var string = "472";

// var number = parseInt(string);

// document.write("Value: " ,string +"<br>");
// document.write("Type: string" +"<br>");
// document.write("Value: " , number +"<br>");
// document.write("Type: number" );


// === String Method Task_10

// var userInput = prompt("Enter Any Thing");

// var input = userInput.toUpperCase();

// document.write(input);



// === String Method Task_11

// var userInput = prompt("Enter Any Thing");

// var userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
// document.write(userInput);


// === String Method Task_12


// var numberAsNumber = 32.36;
// var numberAsString = numberAsNumber.toString();
// document.write(numberAsString);


// === String Method Task_16


// var university = ("University of Karachi");

// var arr = university.split("");

// document.write(arr);


// === String Method Task_17


// var userInput = prompt("Enter a character");

// var lastChar = userInput.charAt(userInput.length - 1);


// document.write("User input: " +  userInput + "<br>");
// document.write("Last Character of input: " +  lastChar);


// === String Method Task_18

// var text = ("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");

// count = 0;

// for(var i = 0 ; i < text.length ; i++){
// 	if (text.charAt(i) === 'm'){
// 		count++;
// 	}
// }

// document.write("Text: " + text +"<br>" +"<br>");
// document.write("There are " + count + " occurrences of text");




// === Math Method Task_1


// var postiveInteger = prompt("Enter Postive Integer");

// var roundValue = Math.round(postiveInteger);
// var floorValue= Math.floor(postiveInteger);
// var ceilValue = Math.ceil(postiveInteger);

// document.write("Number " +  postiveInteger +"<br>");
// document.write("Round off Value: " + roundValue + "<br>" );
// document.write("Floor Value: " +  floorValue + "<br>");
// document.write("Ceil Value : " +  ceilValue + "<br>");


// === Math Method Task_2

// var negativeInteger = prompt("Enter Negative Integer");

// var roundValue = Math.round(negativeInteger);
// var floorValue= Math.floor(negativeInteger);
// var ceilValue = Math.ceil(negativeInteger);

// document.write("Number " +  negativeInteger +"<br>");
// document.write("Round off Value: " + roundValue + "<br>" );
// document.write("Floor Value: " +  floorValue + "<br>");
// document.write("Ceil Value : " +  ceilValue + "<br>");


// === Math Method Task_3

// var value = prompt("Enter the value");

// var absolute = Math.abs(value);

// document.write("The Absolute value of " + value + " is " + absolute);


// === Math Method Task_4

// var randomnumber1;
// var randomnumber2;
 
// 	randomnumber1 = Math.ceil(Math.random()*6);
//  	randomnumber2 = Math.ceil(Math.random()*6);

//  document.write("random dice value is: " + randomnumber1 + "<br>");

//  document.write("random dice value is: " + randomnumber2);




// === Math Method Task_6


// var randomnumber;
  	
// randomnumber = Math.ceil(Math.random()*100);

// document.write("random number between 1 to 100: " + randomnumber);




// === Data Methods Task_1

// var current;
// current = new Date();
// document.write(current.toString());


// === Data Methods Task_2

// var getMonths = ["January","February","March","April","May","June","July","Auguest","September","October","November","December"];

// var today = new Date();

//document.write(getMonths[today.getMonth()]);



//=== Data Methods Task_3

//  var name =  prompt("Enter days Name");
//  if (name === "sunday") {
//  alert("Today is Sun");
// }
//  if (name == "satturday") {
//  	alert("Today is Sat");
//  }
//  if (name == "monday") {
//  	alert("Today is Mon");
//  }
//  if (name == "tuesday") {
//  	alert("Today is Tue");
//  }
//  if (name == "wednesday") {
//  	alert(" Today is Wed");
//  }
//  if (name == "thurday") {
//  	alert("Today is Thu");
// }
// if (name == "friday") {
// 	alert("Today is Fri");
//  }



//=== Data Methods Task_4

// var name = prompt("Enter Days Name");
// if (name === "saturday") {
// alert(name +" It's funday");
// }
// if (name == "sunday") {
// 	alert(name +" It's Boring day");
// }
// if (name == "monday") {
// 	alert(name +" It's Working day");
// }
// if (name == "tuesday") {
// 	alert(name +" It's Normal day");
// }
// if (name == "wednesday") {
// 	alert(name +" It's Normal day");
// }
// if (name == "thurday") {
// 	alert(name +" It's Working day");
// }
// if (name == "friday") {
// 	alert( name +" It's Eid day");
// }