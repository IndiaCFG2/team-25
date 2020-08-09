
var config = {
    apiKey: "",
    authDomain: "cape321orgdb.firebaseapp.com",
    databaseURL: "https://cape321orgdb.firebaseio.com",
    projectId: "cape321orgdb",
    storageBucket: "cape321orgdb.appspot.com",
    messagingSenderId: "563113490180",
    appId: "1:563113490180:web:0e037b2b55372bf1100251",
    measurementId: "G-KLYFBB4DVC"
  };
  firebase.initializeApp(config);
  
  // Now let's listen to the value of the counter and write it 
  // to the counter DOM element
  const counter = document.getElementsByClassName("app__counter")[0];
  const counterRef = firebase.database().ref("incremental_counter");
  counterRef.on("value", snapshot => {
    counter.textContent = snapshot.val();
  });
  
  
  // Note that we don't update the counter value on the page manually....
  // This is where "Realtime" comes into play:.. 
  // the new value will be synced across all the clients (line 18)..
  
  function increamentAuto()
    {
      counterRef.transaction(val => val + 1, err => {
        if (err) {
          alert(err);
        }
      });
    }
  