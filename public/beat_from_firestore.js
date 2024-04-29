// Initialize Firebase
const firebaseConfig = {
    // Your Firebase configuration
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the Firestore database
  const db = firebase.firestore();
  
  // Get the document reference for "Narcos"
  const narcosRef = db.collection("Beats").doc("Narcos");
  
  // Fetch data from Firestore and update the card
  narcosRef.get().then((doc) => {
      if (doc.exists) {
          const data = doc.data();
          document.getElementById("beat-name").textContent = data.Name;
          document.getElementById("beat-bpm").textContent = data.BPM;
          // If you have a field for the audio source, update the play button's data-src attribute
          // Example: document.querySelector(".play-button").setAttribute("data-src", data.Audio);
      } else {
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
  