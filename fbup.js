const firebaseConfig = {
    apiKey: "AIzaSyB49wyl8o802jaCJE2uNa9rXVAiT_pWs6w",
    authDomain: "lakwin-a2d36.firebaseapp.com",
    projectId: "lakwin-a2d36",
    storageBucket: "gs://lakwin-a2d36.appspot.com",
    messagingSenderId: "372739001174",
    appId: "1:372739001174:web:706c1a4e6d5597d908e4f7"
  };
  firebase.initializeApp(firebaseConfig);

  function uploadss(e) {
    e.preventDefault()
    const fileInput = document.getElementById('payss');
    const file = fileInput.files[0];
  
    // Get a reference to Firebase Storage
    const storageRef = firebase.storage().ref();
  
    // Upload the file to Firebase Storage
    const fileRef = storageRef.child(localStorage.getItem('email'));
    const uploadTask = fileRef.put(file);
  
    // Listen for state changes, errors, and completion of the upload
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Progress tracking (optional)
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload progress: ' + progress + '%');
        localStorage.clear()
        alert('Your Order is Placed, You will get your reward soon')
        window.open('index.html','_self')
      },
      (error) => {
        // Handle errors
        console.error('Upload error:', error);
      },
      () => {
        // Upload completed successfully
        console.log('File uploaded successfully');
        // You can add more actions here, such as showing a success message
      }
    );
  }
  