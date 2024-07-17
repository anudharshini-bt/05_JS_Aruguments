var showMessage;
var myMessage;

showMessage = function (message) {
    console.log("The message is:\n" + message);
};

showMessage("It's full of stars!");
showMessage("Hello to Jason Isaacs");
showMessage("Hello to Jason Isaacs and Stephen Fry");

myMessage = "This is my custom message!";
showMessage(myMessage);