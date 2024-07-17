var msg;
var showMessage;

msg = "It's full of stars!";

showMessage = function () {
	console.log(message);
};

showMessage();


var msg;
var message2;
var showMessage;

msg = "It's full of stars!";
message2 = "Look at the sky!";

showMessage = function () {
	console.log(msg);
	console.log(message2); 
};

showMessage();


var msg;
var message2;
var showMessage;

msg = "It's full of stars!";
message2 = "Look at the sky!";

showMessage = function () {
	var combinedMessage = msg + " " + message2;
	console.log(combinedMessage); 
};

showMessage();