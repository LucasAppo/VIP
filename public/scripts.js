// Add this JavaScript to a new file named "scripts.js" in the same directory as your HTML file

document.addEventListener('DOMContentLoaded', function () {
    // Get the audio player element
    const audioPlayer = document.getElementById('audio-player');

    // Get all play buttons
    const playButtons = document.querySelectorAll('.play-button');

    // Add click event listener to each play button
    playButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the URL of the track from the data-src attribute
            const trackSrc = this.getAttribute('data-src');

            // Set the track source in the audio player
            audioPlayer.src = trackSrc;

            // Play the track
            audioPlayer.play();
        });
    });
});

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBc7-O-iBa92lDjbQqE7Sr08Lmceb7eDIQ",
    authDomain: "vip-folder-aadaf.firebaseapp.com",
    projectId: "vip-folder-aadaf",
    storageBucket: "vip-folder-aadaf.appspot.com",
    messagingSenderId: "691053191402",
    appId: "1:691053191402:web:ef8156e3655fb8e869b793",
    measurementId: "G-0DK1SMTVPZ"
  };
  



  // TEST

  function addTestData() {
    // Add a document with a collection named "beats"
    db.collection("beats").add({
      name: "Test Beat",
      bpm: 120,
      length: "3:45",
      price: 0.99
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Call the function to add test data
addTestData();
