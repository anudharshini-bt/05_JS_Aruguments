var showPlayerName = function(playerName) {
    console.log(playerName);
};


var showPlayerHealth = function(playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};


var showPlayerPlace = function(playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};


var showPlayerInfo = function(playerName, playerPlace, playerHealth) {
    console.log("");
    showPlayerName(playerName);
    console.log("----------------------------");
    showPlayerPlace(playerName, playerPlace);
    showPlayerHealth(playerName, playerHealth);
    console.log("----------------------------");
    console.log("");
};


var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};


showPlayerInfo(player1.name, player1.place, player1.health);
showPlayerInfo(player2.name, player2.place, player2.health);

var showLine = function(length, char) {
    var line = "";
    for (var i = 0; i < length; i++) {
        line += char;
    }
    console.log(line);
};


var showBoxedName = function(playerName, char) {
    var nameLength = playerName.length;
    showLine(nameLength + 4, char);
    console.log(char + " " + playerName + " " + char);
    showLine(nameLength + 4, char);
};

showBoxedName("Kandra", "-");
showBoxedName("Dax", "*");