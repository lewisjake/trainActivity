// firebase link
var trainData = new Firebase("https://train-activity-5346c.firebaseio.com/");

var config = {
    apiKey: "AIzaSyCb421PLDXffj3S8MU94BzWs_L0Tm2UE9k",
    authDomain: "train-activity-5346c.firebaseapp.com",
    databaseURL: "https://train-activity-5346c.firebaseio.com",
    projectId: "train-activity-5346c",
    storageBucket: "train-activity-5346c.appspot.com",
    messagingSenderId: "311011565791",
    appId: "1:311011565791:web:47b6ea7620b5bd5cc9896a"
};
// initialize database
firebase.initializeApp(config);
var database = firebase.database();
// on-click for adding new trains
$("#submitButton").on("click", function() {
    var name = $("#nameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTime = moment($("#timeInput").val().trim(), "HH:mm").format("");
    var frequency = $("#frequencyInput").val().trim();

    // creat placeholder for new trains
    var newTrains = {
        name: name,
        tDestionation: destination,
        tFirstTime: firstTime,
        tFreq: frequency,
    }
    // upload to firebase
    trainData.push(newTrains);

    console.log(newTrains.name);
});