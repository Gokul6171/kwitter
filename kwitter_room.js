
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      function addUser() {
            user_name = document.getElementById("user_name").Value;

            localStorage.setItem("user_name" , user_name);

            window.location = "kwitter_room.html";
       }
      //End code
      });});}
getData();
