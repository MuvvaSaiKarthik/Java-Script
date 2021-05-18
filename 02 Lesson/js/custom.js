/*console.log("Hello World");
var images = document.getElementsByTagName("img");
console.log(images);

var anchors = document.getElementsByTagName("a");
console.log(anchors);

var phrases = document.getElementsByTagName("p");
console.log(phrases);

var heading = document.getElementById("heading");
console.log(heading);
console.log(heading.innerHTML);
console.log(heading.nodeType);
var main_content = document.getElementById("main-content");
main_content.setAttribute("align", "right");

var heading = document.getElementById("heading");
heading.innerHTML = "Welcome to our website"
var main_content = document.getElementById("main-content");

var new_heading = document.createElement("h1");
var new_phrase = document.createElement("p");

new_heading.innerHTML = "Welcome to our website";
new_phrase.innerHTML = "This is a dummy paragraph to show";

main_content.appendChild(new_heading);
main_content.appendChild(new_phrase);
var mybtn = document.getElementById("mybtn");
mybtn.onclick = function() {
    alert("Hello World");
    alert("Bye World");
};
function runMe() {
    alert("run message");
}
setTimeout(runMe, 3000);

function runMe() {
    alert("run message");
}
setInterval(runMe, 1000);

var u_name = document.myForm.u_name;
var u_pass = document.myForm.u_pass;

var userName = "Muvva Sai Karthik";
var password = "123";

function runMe() {
    if(u_name.value == userName && u_pass.value == password)
    {
        console.log("Login Success");       
    }else{
        console.log("Login Error");
    }   
}*/

var u_name = document.myForm.u_name;
var message = document.getElementById("message");

function runMe() {
    if(u_name.value.length < 3) {
        message.innerHTML = "needs more numbers";
        message.style.color = "red";
        u_name.style.backgroundColor = "red";
        u_name.style.color = "white";
    }else if(u_name.value.length == 5){
        message.innerHTML = "Nice, ok";
        message.style.color = "green";
        u_name.style.backgroundColor = "green";
        u_name.style.color = "white";   
    }else if(u_name.value.length > 8){
        message.innerHTML = "Limit has been reached";
        message.style.color = "orange";
        u_name.style.backgroundColor = "orange";
        u_name.style.color = "white";   
    }
}